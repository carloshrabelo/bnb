import { type NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/utils/auth";

const authPath = "/login";

export const config = {
  matcher: [`/((?!_next/static|_next/image|favicon.ico|api/auth).*)`],
};

export const middleware = async (req: NextRequest) => {
  const verifiedToken = await verifyAuth(req).catch((err) => {
    console.error(err.message);
  });

  if (verifiedToken || req.nextUrl.pathname.startsWith(authPath))
    return NextResponse.next();
  if (!/^\/api\//.test(req.nextUrl.pathname))
    return NextResponse.redirect(new URL(authPath, req.url));

  return NextResponse.json(
    { error: { message: "authentication required" } },
    { status: 401 }
  );
};
