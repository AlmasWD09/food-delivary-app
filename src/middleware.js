import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("next-auth.session-token")?.value;
  const alreadyLogin =
    request.nextUrl.pathname === "/signin" ||
    request.nextUrl.pathname === "/signup";

  if (alreadyLogin && authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!alreadyLogin && !authToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/menu", "/signup", "/profile", "/dashboard/:path*"],
};
