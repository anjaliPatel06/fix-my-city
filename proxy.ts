import { NextRequest, NextResponse } from "next/server";

const protectedPrefixes = [
  "/community",
  "/profile",
  "/report",
  "/settings",
  "/track",
];

function isProtectedPath(pathname: string) {
  return protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function buildLoginRedirectUrl(request: NextRequest) {
  const loginUrl = new URL("/login", request.url);
  const redirectTo = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  loginUrl.searchParams.set("redirect", redirectTo);
  return loginUrl;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = request.cookies.get("fmc_auth")?.value === "1";
  const role = request.cookies.get("fmc_role")?.value;

  if (pathname === "/login" || pathname === "/signup") {
    if (!isAuthenticated) {
      return NextResponse.next();
    }

    const destination = role === "admin" ? "/admin/dashboard" : "/report";
    return NextResponse.redirect(new URL(destination, request.url));
  }

  if (pathname === "/admin/dashboard" || pathname.startsWith("/admin/dashboard/")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(buildLoginRedirectUrl(request));
    }

    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (isProtectedPath(pathname) && !isAuthenticated) {
    return NextResponse.redirect(buildLoginRedirectUrl(request));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/dashboard/:path*",
    "/community/:path*",
    "/login",
    "/profile/:path*",
    "/report/:path*",
    "/settings/:path*",
    "/signup",
    "/track/:path*",
  ],
};
