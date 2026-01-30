import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import * as authService from "../services/auth.service";

export const signupController = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const user = await authService.signup(name, email, password);
    res.status(201).json({
      success: true,
      user,
    });
  },
);

export const loginController = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { user, token } = await authService.login(email, password);

    res.json({
      success: true,
      token,
      user,
    });
  },
);
