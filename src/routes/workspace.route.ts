import { Router } from "express";
import {
  createWorkspace,
  deleteWorkspace,
  getAllWorkspaces,
  getWorkspace,
} from "../controllers/workspace.controller.js";
import { instanceRouter } from "./instance.route.js";
import { checkAdmin } from "../middlewares/checkAdmin.js";

const router: Router = Router();

router.use("/:slug/instance", instanceRouter);
router.post("/create",checkAdmin, createWorkspace);
router.delete("/:slug/delete",checkAdmin, deleteWorkspace);

router.get("/:slug", getWorkspace);
router.get("/", getAllWorkspaces);

export { router as workspaceRouter };
