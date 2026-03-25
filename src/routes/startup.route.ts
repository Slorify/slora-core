import { Router } from "express";
import { checkStartup, writeStartup } from "../controllers/startup.controller.js";

const router: Router = Router();

router.get("/check", checkStartup);
router.post("/write", writeStartup);

export { router as StartupRouter };
