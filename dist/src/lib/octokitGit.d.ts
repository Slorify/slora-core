import { Octokit } from "@octokit/core";
export declare const createOctokitGit: (APP_ID: number, PRIVATE_KEY: string) => Octokit;
export declare const isGitAppInstalled: (octokit: Octokit) => Promise<boolean>;
export declare const getInstallationId: (octokit: Octokit) => Promise<number>;
export declare const deleteGitAppInstallation: (octokit: Octokit, installationId: number) => Promise<void>;
export declare const getInstallationAccessToken: (octokit: Octokit, installationId: number) => Promise<any>;
//# sourceMappingURL=octokitGit.d.ts.map