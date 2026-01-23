import { Router } from "express";
import { authRouter } from "./routes/auth.route.js";
import { workspaceRouter } from "./routes/workspace.route.js";
import { proxyRouter } from "./routes/proxy.route.js";
import { OAuthRouter } from "./routes/git.route.js";
const router = Router();
router.get("/", (req, res) => {
    res.status(200).json({ status: "running", message: "The api is running." });
});
router.use("/auth", authRouter);
router.use("/workspace", workspaceRouter);
router.use("/proxy", proxyRouter);
router.use("/providers", OAuthRouter);
export { router as routerHandler };
//# sourceMappingURL=route.js.map