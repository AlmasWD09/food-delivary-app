import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const authToken = request.cookies.get("next-auth.session-token")?.value;
  console.log(authToken);

  const alreadyLogin =
    request.nextUrl.pathname === "/signin" ||
    request.nextUrl.pathname === "/signup";

  if (alreadyLogin) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/signin", "/menu", "/signup", "/profile", "/dashboard/:path*"],
};
