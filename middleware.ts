import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("x-mw-ran", "1");
  console.log("[EDGE TRACE TEST]", req.nextUrl.pathname, req.nextUrl.search);
  return res;
}

export const config = {
  matcher: ["/:path*"],
};
