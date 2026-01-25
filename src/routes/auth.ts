import { Router } from "express";
import { signupController } from "../controllers/auth";

const router = Router();
router.post("/auth/signup", signupController);

export default router;
