import type { Request, Response } from "express";
import { GitOAuthMenifest } from "../handlers/OAuthHandler.js";
import axios from "axios";
import { prisma } from "../lib/prisma.js";
import {
  createOctokitGit,
  deleteGitAppInstallation,
  getInstallationAccessToken,
  getInstallationId,
  isGitAppInstalled,
} from "../lib/octokitGit.js";
import { getAllGitApps, getGitApp, getRepos } from "../lib/gitAppHandler.js";
import type { Octokit } from "@octokit/core";
import { generateGitToken, getCloneUrl } from "../handlers/gitHandler.js";
import { app } from "../server.js";

export const getGitMenifest = async (req: Request, res: Response) => {
  try {
    const menifest = await GitOAuthMenifest();

    res.send({ success: true, menifest });
  } catch (err) {
    res.send({ success: false, message: "Menifest getting failed", err });
  }
};

export const redirectGit = async (req: Request, res: Response) => {
  try {
    const sessionEmail = req.session.user?.email;

    if (!sessionEmail) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user.",
      });
    }

    const user = await prisma.user.findFirst({
      where: { email: sessionEmail },
      select: {
        id: true,
        role: true,
        email: true,
        username: true,
        profile: true,
      },
    });

    const code = req.query.code;
    console.log("GitHub OAuth code:", code);
    const { data } = await axios.post(
      `https://api.github.com/app-manifests/${code}/conversions`,
      {},
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    );

    await prisma.githubApp.create({
      data: {
        name: data.name,
        slug: data.slug,
        app_id: data.id,
        owner_login: JSON.parse(JSON.stringify(data.owner)),
        private_key: data.pem,
        cloneToken: "",
        user: {
          connect: {
            email: user?.email!,
          },
        },
      },
    });

    return res
      .status(201)
      .json({ success: true, message: "Github app data saved successfully." });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Failed to get redirect data.", err });
  }
};

export const getGitApps = async (req: Request, res: Response) => {
  try {
    const sessionEmail = req.session.user?.email;

    if (!sessionEmail) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user.",
      });
    }

    const apps = await getAllGitApps(sessionEmail);

    await Promise.all(
      apps.map(async (app) => {
        const octokit = createOctokitGit(app.app_id, app.private_key);
        const isInstalled = await isGitAppInstalled(octokit);

        return prisma.githubApp.update({
          where: { id: app.id },
          data: { isInstalled },
        });
      }),
    );

    const finalApp = await prisma.githubApp.findMany({
      where: {
        user: {
          email: sessionEmail,
        },
      },
      select: {
        id: true,
        app_id: true,
        name: true,
        slug: true,
        owner_login: true,
        isInstalled: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Apps fetched successfully.",
      apps: finalApp,
    });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Failed to fetch apps.", err });
  }
};

export const deleteGitApp = async (req: Request, res: Response) => {
  try {
    const sessionEmail = req.session.user?.email;

    if (!sessionEmail) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user.",
      });
    }

    const appId = Number(req.params.id);
    const app = await getGitApp(sessionEmail, appId);

    if (!app?.isInstalled) {
      return res
        .status(400)
        .json({ success: false, message: "App is not installed." });
    }

    const octokit = createOctokitGit(appId, app?.private_key!);
    const installationID: any = await getInstallationId(octokit);
    await deleteGitAppInstallation(octokit, installationID);

    await prisma.githubApp.delete({
      where: {
        app_id: appId,
        user: {
          email: sessionEmail,
        },
      },
    });

    res
      .status(200)
      .json({ success: true, message: "App deleted successfully." });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Failed to delete app.", err });
  }
};

export const getGitRepos = async (req: Request, res: Response) => {
  try {
    const sessionEmail = req.session.user?.email;

    if (!sessionEmail) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user.",
      });
    }

    const appId = Number(req.params.id);
    const app = await getGitApp(sessionEmail, appId);

    if (!app?.isInstalled) {
      return res
        .status(400)
        .json({ success: false, message: "App is not installed." });
    }

    const gitRepos = await getRepos(appId);

    res.status(200).json({
      success: true,
      message: "Repositories fetched successfully.",
      repos: gitRepos.map((repo) => {
        return {
          name: repo.name,
          full_name: repo.full_name,
          ssh_url: repo.ssh_url,
          clone_url: repo.clone_url,
        };
      }),
    });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Failed to fetch repositories.", err });
  }
};

export const regenerateGitAppToken = async (req: Request, res: Response) => {
  try {
    const sessionEmail = req.session.user?.email;

    if (!sessionEmail) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user.",
      });
    }

    const appId = Number(req.params.id);
    const app = await getGitApp(sessionEmail, appId);

    if (!app) {
      return res
        .status(400)
        .json({ success: false, message: "App not found." });
    }

    const octokit = createOctokitGit(appId, app?.private_key!);
    const installationId = await getInstallationId(octokit);

    const token = await getInstallationAccessToken(octokit, installationId);

    await prisma.githubApp.updateMany({
      where: {
        app_id: appId,
        user: {
          email: sessionEmail,
        },
      },
      data: {
        cloneToken: token,
      },
    });

    res.status(200).json({
      success: true,
      message: "Token regenerated successfully.",
    });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Failed to regenerate token.", err });
  }
};

export const updateGitUrl = async (req: Request, res: Response) => {
  try {
    const sessionEmail = req.session.user?.email;

    if (!sessionEmail) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user.",
      });
    }
    const { slug, islug } = req.params;

    const { appId, git_repo }: { appId: number; git_repo: string } = req.body;

    const instance = await prisma.instance.findFirst({
      where: {
        slug: String(islug),
        workspaces: {
          slug: String(slug),
          user: {
            email: sessionEmail,
          },
        },
      },
    });

    if (!instance) {
      return res
        .status(404)
        .json({ success: false, message: "Instance not found." });
    }

    await generateGitToken(appId, sessionEmail);

    const gitApp = await prisma.githubApp.findFirst({
      where: { app_id: appId },
    });
    const gitUrl = await getCloneUrl(gitApp?.cloneToken!, git_repo);

    const updatedInstance = await prisma.instance.update({
      where: { slug: String(islug) },
      data: { gitUrl: gitUrl },
    });

    await prisma.gitRepo.upsert({
      where: {
        instanceId: instance.id,
      },
      update: {
        appId: appId,
        repo: git_repo,
        instance: {
          connect: {
            slug: String(islug),
          },
        },
      },
      create: {
        appId: appId,
        repo: git_repo,
        instance: {
          connect: {
            slug: String(islug),
          },
        },
      },
    });

    res.status(201).json({
      success: true,
      message: "Git url updated successfully.",
      updatedInstance,
    });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Failed to generate URL.", err });
  }
};

export const getInstanceGit = async (req: Request, res: Response) => {
  try {
    const { islug } = req.params;

    const gitRepo = await prisma.gitRepo.findFirst({
      where: { instance: { slug: String(islug) } },
      select: {
        appId: true,
        repo: true,
      },
    });

    res
      .status(200)
      .json({ success: true, message: "Instance GitRepo exsits.", gitRepo });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Instance GitRepo getting failed." });
  }
};
