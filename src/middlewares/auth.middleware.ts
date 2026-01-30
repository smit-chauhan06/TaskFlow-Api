import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { decode } from "node:punycode";

interface JwtPayload {
  userId: string;
}

const secret = process.env.JWT_SECRET;


export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new ApiError("401", "Not authorised access token is missing");
  }

  try{
    const decoded = jwt.verify(token, secret as string) as JwtPayload;
    const user = await.User.findById(decoded.userId)

    if (!user) {
      throw new ApiError(401, "User no longer exists");
    }

    // attach user to request
    (req as any).user = user;

    next();
  }
  catch(error){
     throw new ApiError(401, "Not authorized, token invalid");
  }
};
