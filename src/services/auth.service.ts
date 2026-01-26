import User from "../models/user.model";
import { ApiError } from "../utils/ApiError";

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
