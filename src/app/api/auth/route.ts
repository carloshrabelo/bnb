import { NextResponse, type NextRequest } from "next/server";
import {
  appendToken,
  AuthError,
  removeToken,
  generateToken,
} from "@/utils/auth";

export const config = {
  runtime: "edge",
};

export const POST = async (req: NextRequest) => {
  const { username, password } = await req.json();

  try {
    if (username !== "admin@example.com" || password !== "admin") {
      throw new AuthError("User or password is incorrect");
    }
    return generateToken(username).then(appendToken);
  } catch (err) {
    return NextResponse.json("Authentication failed", { status: 401 });
  }
};

export const DELETE = () =>
  removeToken(new NextResponse(null, { status: 200 }));
