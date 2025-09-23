import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicPageRoute = createRouteMatcher([
  "/sign-in",
  "/sign-up",
  "/",
  "/home",
]);

const isPublicApiRoute = createRouteMatcher([
  "/api/videos"
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const pathname = new URL(req.url).pathname;

  const isApiRequest = pathname.startsWith("/api");

  // 🟢 Allow public pages
  if (isPublicPageRoute(req) || isPublicApiRoute(req)) {
    return NextResponse.next();
  }

  // 🔴 Redirect unauthenticated users from protected routes
  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // ✅ Allow authenticated users
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
