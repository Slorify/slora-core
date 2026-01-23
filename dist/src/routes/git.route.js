import { Router } from "express";
import { deleteGitApp, getGitApps, getGitMenifest, getGitRepos, redirectGit, } from "../controllers/git.controller.js";
const router = Router();
router.get("/github/menifest", getGitMenifest);
router.get("/github/redirect", redirectGit);
router.get("/github/apps", getGitApps);
router.get("/github/repos/:id", getGitRepos);
router.delete("/github/delete/:id", deleteGitApp);
export { router as OAuthRouter };
//# sourceMappingURL=git.route.js.map