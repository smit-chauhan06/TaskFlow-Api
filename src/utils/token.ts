import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;

if (!secret) {
  throw new Error("JWT_SECRET is missing in environment variables");
}

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secret, {
    expiresIn: expiresIn || "1d",
  } as jwt.SignOptions);
};
