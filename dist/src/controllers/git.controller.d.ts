import type { Request, Response } from "express";
export declare const getGitMenifest: (req: Request, res: Response) => Promise<void>;
export declare const redirectGit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getGitApps: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteGitApp: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getGitRepos: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const regenerateGitAppToken: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateGitUrl: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=git.controller.d.ts.map