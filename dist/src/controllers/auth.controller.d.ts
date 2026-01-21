import type { Request, Response } from "express";
export declare const registerAuth: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const loginAuth: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const logoutAuth: (req: Request, res: Response) => Promise<void>;
export declare const getMeAuth: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.controller.d.ts.map