import { Router } from "express";
import {
  loginController,
  signupController,
} from "../controllers/auth.controller";

const router = Router();
router.post("/auth/signup", signupController);
router.post("/auth/login", loginController);

export default router;
