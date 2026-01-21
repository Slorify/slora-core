import { type Express } from "express";
import { Server } from "socket.io";
declare const app: Express;
declare const io: Server<import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, any>;
export { io, app };
//# sourceMappingURL=server.d.ts.map