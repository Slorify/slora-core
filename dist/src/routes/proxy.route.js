import { Router } from "express";
import { installProxy, logsProxy, startProxy, stopProxy, } from "../controllers/proxy.controller.js";
const router = Router();
router.post("/install", installProxy);
router.post("/start", startProxy);
router.post("/stop", stopProxy);
router.post("/logs", logsProxy);
export { router as proxyRouter };
//# sourceMappingURL=proxy.route.js.map