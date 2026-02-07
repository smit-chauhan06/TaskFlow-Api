import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export const restrictTo =
  (...roles: ("user" | "admin")[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user || !roles.includes(user.role)) {
      throw new ApiError(403, "Forbidden");
    }
    next();
  };
