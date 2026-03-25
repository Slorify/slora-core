import { Router, type Request, type Response } from "express";
import { authRouter } from "./routes/auth.route.js";
import { workspaceRouter } from "./routes/workspace.route.js";
import { proxyRouter } from "./routes/proxy.route.js";
import { OAuthRouter } from "./routes/git.route.js";
import { StartupRouter } from "./routes/startup.route.js";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "running", message: "The api is running." });
});

router.use("/auth", authRouter);
router.use("/workspace", workspaceRouter);
router.use("/proxy", proxyRouter);
router.use("/providers", OAuthRouter);
router.use("/startup", StartupRouter)

export { router as routerHandler };
