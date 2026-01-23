import { Octokit } from "@octokit/core";
import { prisma } from "./prisma.js";
import { createAppAuth } from "@octokit/auth-app";
import { createOctokitGit, getInstallationId } from "./octokitGit.js";

export const getAllGitApps = async (email: string) => {
  return await prisma.githubApp.findMany({
    where: {
      user: {
        email: email,
      },
    },
    select: {
      id: true,
      app_id: true,
      private_key: true,
      isInstalled: true,
      createdAt: true,
    },
  });
};

export const getGitApp = async (email: string, app_id: number) => {
  return await prisma.githubApp.findFirst({
    where: {
      app_id: app_id,
      user: {
        email: email,
      },
    },
    select: {
      id: true,
      app_id: true,
      owner_login: true,
      isInstalled: true,
      private_key: true,
      createdAt: true,
    },
  });
};

export const getRepos = async (appId: number) => {
  const app: any = await prisma.githubApp.findFirst({
    where: { app_id: appId },
    select: { app_id: true, private_key: true },
  });

  const oldOctokit = createOctokitGit(app?.app_id, app?.private_key);

  const installationId = await getInstallationId(oldOctokit);

  const octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: app?.app_id,
      privateKey: app?.private_key,
      installationId: installationId,
    },
  });
  const { data: repos } = await octokit.request(
    "GET /installation/repositories",
    { per_page: 100 },
  );
  return repos.repositories;
};
