import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = req.nextUrl.pathname === "/admin/login";
  const token = req.cookies.get("admin_token");

  if (isAdminRoute && !isLoginPage) {
    const isLoggedIn = !!token?.value;

    if (!isLoggedIn) {
      console.log("REDIRECIONANDO PARA LOGIN");
      return NextResponse.redirect(new URL("/admin/login", req.nextUrl.origin));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};