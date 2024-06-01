import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const loggedin = request.cookies.get("token");

  // Check if the user is logged in
  if (loggedin) {
    // If logged in and trying to access the login page, redirect to dashboard
    if (request.nextUrl.pathname.startsWith("/auth")) {
      return Response.redirect(new URL("/dashboard", request.url));
    }
  } else {
    // If not logged in and trying to access a protected route, redirect to login
    if (!request.nextUrl.pathname.startsWith("/auth")) {
      return Response.redirect(new URL("/auth/login", request.url));
    }
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)", // Match all routes except /api, /static, files with extensions, and _next
};
