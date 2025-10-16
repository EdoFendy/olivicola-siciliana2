import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const isAdminPath = nextUrl.pathname.startsWith("/admin");
  const isLogin = nextUrl.pathname === "/admin/login";
  if (!isAdminPath) return NextResponse.next();

  const session = cookies.get("admin_session")?.value;
  if (!session && !isLogin) {
    const url = new URL("/admin/login", nextUrl);
    url.searchParams.set("next", nextUrl.pathname + nextUrl.search);
    return NextResponse.redirect(url);
  }
  if (session && isLogin) {
    return NextResponse.redirect(new URL("/admin", nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};



