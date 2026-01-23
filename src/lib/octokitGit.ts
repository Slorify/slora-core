import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/core";

export const createOctokitGit = (APP_ID: number, PRIVATE_KEY: string) => {
  return new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: APP_ID,
      privateKey: PRIVATE_KEY,
    },
  });
};

export const isGitAppInstalled = async (octokit: Octokit) => {
  const { data: installations } = await octokit.request(
    "GET /app/installations",
  );

  if (installations.length === 0) {
    return false;
  }

  return true;
};

export const getInstallationId = async (octokit: Octokit) => {
  const { data: installations } = await octokit.request(
    "GET /app/installations",
  );
  const installationId = installations[0]?.id;
  return Number(installationId);
};

export const deleteGitAppInstallation = async (
  octokit: Octokit,
  installationId: number,
) => {
  await octokit.request("DELETE /app/installations/{installation_id}", {
    installation_id: installationId,
  });
};

export const getInstallationAccessToken = async (
  octokit: Octokit,
  installationId: number,
) => {
  const data = await (octokit as any).auth({
    type: "installation",
    installationId,
  });

  return data.token;
};
