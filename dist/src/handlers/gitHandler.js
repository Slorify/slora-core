import { getGitApp } from "../lib/gitAppHandler.js";
import { createOctokitGit, getInstallationAccessToken, getInstallationId, } from "../lib/octokitGit.js";
import { prisma } from "../lib/prisma.js";
export const getCloneUrl = async (token, repo) => {
    return `https://x-access-token:${token}@github.com/${repo}.git`;
};
export const generateGitToken = async (appId, email) => {
    try {
        const app = await getGitApp(email, appId);
        const octokit = createOctokitGit(appId, app?.private_key);
        const installationId = await getInstallationId(octokit);
        const token = await getInstallationAccessToken(octokit, installationId);
        await prisma.githubApp.update({
            where: {
                app_id: appId,
            },
            data: {
                cloneToken: token,
            },
        });
        return token;
    }
    catch (err) {
        throw new Error("Failed to generate git token.");
    }
};
//# sourceMappingURL=gitHandler.js.map