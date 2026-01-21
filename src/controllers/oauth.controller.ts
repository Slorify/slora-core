import type { Request, Response } from "express";
import { GitOAuthMenifest } from "../handlers/OAuthHandler.js";
import axios from "axios";
import { prisma } from "../lib/prisma.js";
import {
  createOctokitGit,
  deleteGitAppInstallation,
  getInstallationId,
  isGitAppInstalled,
} from "../lib/octokitGit.js";
import { getAllGitApps, getGitApp, getRepos } from "../lib/gitAppHandler.js";

const currentTime = (d: Date) => {
  const result =
    String(d.getDate()).padStart(2, "0") +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    d.getFullYear() +
    "-" +
    String(d.getHours()).padStart(2, "0") +
    ":" +
    String(d.getMinutes()).padStart(2, "0") +
    ":" +
    String(d.getSeconds()).padStart(2, "0");

  return result;
};

export const getGitMenifest = async (req: Request, res: Response) => {
  try {
    const d = new Date();
    const name = "Ember Labs " + currentTime(d);
    const menifest = await GitOAuthMenifest(name);

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
    console.log(code);
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
        url: data.html_url,
        name: data.name,
        slug: data.slug,
        app_id: data.id,
        owner_login: JSON.parse(JSON.stringify(data.owner)),
        private_key: data.pem,
        webhook_secret: data.webhook_secret,
        client_id: data.client_id,
        client_secret: data.client_secret,
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
        name: true,
        slug: true,
        url: true,
        owner_login: true,
        app_id: true,
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
