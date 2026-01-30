import User from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token";

export const signup = async (name: string, email: string, password: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  return user;
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = generateToken({ userId: user._id });

  return { user, token };
};
