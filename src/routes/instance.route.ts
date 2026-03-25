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
import { getInstanceGit, updateGitUrl } from "../controllers/git.controller.js";
import { checkAdmin } from "../middlewares/checkAdmin.js";

const router: Router = Router({ mergeParams: true });

router.post("/",checkAdmin, createInstance);
router.delete("/:islug",checkAdmin, deleteInstance);
router.put("/:islug", updateInstance);

router.get("/:islug", getInstance);
router.get("/", getAllInstances);

router.post("/:islug/deploy",checkAdmin, deployInstance);
router.post("/sync",checkAdmin, syncComposeFile);
router.post("/:islug/start", checkAdmin,startInstance);
router.post("/:islug/restart", checkAdmin,restartInstance);
router.post("/:islug/stop",checkAdmin, stopInstance);
router.post("/:islug/logs", checkAdmin,logsInstance);

router.put("/:islug/gitUrl", updateGitUrl);
router.get("/:islug/gitRepo", getInstanceGit);

export { router as instanceRouter };
