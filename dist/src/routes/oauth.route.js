import { Router } from "express";
import { deleteGitApp, getGitApps, getGitMenifest, redirectGit, } from "../controllers/oauth.controller.js";
const router = Router();
router.get("/github/menifest", getGitMenifest);
router.get("/github/redirect", redirectGit);
router.get("/github/apps", getGitApps);
router.delete("/github/delete/:id", deleteGitApp);
export { router as OAuthRouter };
//# sourceMappingURL=oauth.route.js.map