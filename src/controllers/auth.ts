import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import * as authService from "../services/auth";

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
