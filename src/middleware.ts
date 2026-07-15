import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = req.nextUrl.pathname === "/admin/login";
  const token = req.cookies.get("admin_token")?.value;

  if (isAdminRoute && !isLoginPage) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.nextUrl.origin));
    }

    try {
      await jwtVerify(token, secret);
      // token válido e assinado corretamente, segue
    } catch {
      // token ausente, expirado ou adulterado
      const response = NextResponse.redirect(new URL("/admin/login", req.nextUrl.origin));
      response.cookies.delete("admin_token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};