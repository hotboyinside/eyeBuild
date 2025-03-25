import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Page, publicRoutes } from "./constants/routes";
import { config as configApp } from "./constants/config";
import { verifyRole, verifyToken } from "./services/auth.service";

export default async function middleware(req: NextRequest) {
  // TODO: add check isBanned
  const path = req.nextUrl.pathname as Page;
  const isPublicRoute = publicRoutes.includes(path);

  if (isPublicRoute) return NextResponse.next();

  const accessToken = req.cookies.get("accessToken")?.value as string;
  const refreshToken = req.cookies.get("refreshToken")?.value as string;

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL(Page.LOGIN, req.nextUrl));
  }

  if (accessToken) {
    const role = verifyToken(accessToken, configApp.jwtSecretKey);
    if (role && verifyRole(role, path)) return NextResponse.next();
  }

  if (refreshToken) {
    const role = verifyToken(refreshToken, configApp.jwtRefreshSecretKey);
    if (role && verifyRole(role, path)) return NextResponse.next();
  }

  return NextResponse.redirect(new URL(Page.LOGIN, req.nextUrl));
}

export const config = {
  runtime: "nodejs",
  matcher: ["/dashboard/:path*"],
};
