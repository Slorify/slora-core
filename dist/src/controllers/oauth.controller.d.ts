import type { Request, Response } from "express";
export declare const getGitMenifest: (req: Request, res: Response) => Promise<void>;
export declare const redirectGit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getGitApps: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteGitApp: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=oauth.controller.d.ts.map