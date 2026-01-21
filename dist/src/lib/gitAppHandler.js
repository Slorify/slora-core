import { prisma } from "./prisma.js";
export const getAllGitApps = async (email) => {
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
export const getGitApp = async (email, app_id) => {
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
            isInstalled: true,
            private_key: true,
            createdAt: true,
        },
    });
};
//# sourceMappingURL=gitAppHandler.js.map