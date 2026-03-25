import { Router } from "express";
import { checkStartup, writeStartup } from "../controllers/startup.controller.js";
const router = Router();
router.get("/check", checkStartup);
router.post("/write", writeStartup);
export { router as StartupRouter };
//# sourceMappingURL=startup.route.js.map