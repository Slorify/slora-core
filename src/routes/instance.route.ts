import { Router } from "express";
import {
  createInstance,
  deleteInstance,
  deployInstance,
  getAllInstances,
  getInstance,
  logsInstance,
  restartInstance,
  startInstance,
  stopInstance,
  syncComposeFile,
  updateInstance,
} from "../controllers/instance.controller.js";

const router: Router = Router({ mergeParams: true });

router.post("/", createInstance);
router.delete("/:islug", deleteInstance);
router.put("/:islug", updateInstance);

router.get("/:islug", getInstance);
router.get("/", getAllInstances);

router.post("/:islug/deploy", deployInstance);
router.post("/sync", syncComposeFile);
router.post("/:islug/start", startInstance);
router.post("/:islug/restart", restartInstance);
router.post("/:islug/stop", stopInstance);
router.post("/:islug/logs", logsInstance);

export { router as instanceRouter };
