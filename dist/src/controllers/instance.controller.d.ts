import type { Request, Response } from "express";
export declare const getInstance: (req: Request, res: Response) => Promise<void>;
export declare const createInstance: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteInstance: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateInstance: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllInstances: (req: Request, res: Response) => Promise<void>;
export declare const syncComposeFile: (req: Request, res: Response) => Promise<void>;
export declare const deployInstance: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const startInstance: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const stopInstance: (req: Request, res: Response) => Promise<void>;
export declare const restartInstance: (req: Request, res: Response) => Promise<void>;
export declare const logsInstance: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=instance.controller.d.ts.map