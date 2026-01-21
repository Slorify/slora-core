import { Router } from "express";
import { getMeAuth, loginAuth, logoutAuth, registerAuth, } from "../controllers/auth.controller.js";
const router = Router();
router.post("/register", registerAuth);
router.post("/login", loginAuth);
router.post("/logout", logoutAuth);
router.get("/me", getMeAuth);
export { router as authRouter };
//# sourceMappingURL=auth.route.js.map