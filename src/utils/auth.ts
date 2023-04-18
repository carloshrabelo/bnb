import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { SignJWT, jwtVerify } from "jose";
import { USER_TOKEN, TOKEN_LIMIT, getJwtSecretKey } from "./constants";

interface UserJwtPayload {
  jti: string;
  iat: number;
}

export class AuthError extends Error {}

export const verifyAuth = (req: NextRequest) => {
  const token = req.cookies.get(USER_TOKEN)?.value;

  if (!token) return Promise.reject(new AuthError("Missing user token"));

  return jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()))
    .then((verified) => verified.payload as UserJwtPayload)
    .catch(() => Promise.reject(new AuthError("Your token has expired.")));
};

export const generateToken = (user: string) =>
  new SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(getJwtSecretKey()));

export const appendToken = (token: string, res?: NextResponse) => {
  const response = res || NextResponse.json(token);

  response.cookies.set(USER_TOKEN, token, {
    httpOnly: true,
    maxAge: TOKEN_LIMIT,
  });

  return response;
};

export const removeToken = (res?: NextResponse) => {
  const response = res || new NextResponse();

  response.cookies.set(USER_TOKEN, "", { httpOnly: true, maxAge: 0 });
  return res;
};
