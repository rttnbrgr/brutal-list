import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/server",
  "/component-library",
  "/convex",
  "/",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    // build redirect url
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/login";
    // return NextResponse.rewrite(url)

    await auth.protect({
      // unauthenticatedUrl: NextResponse.rewrite(redirectUrl).url,
      // unauthenticatedUrl: "/login",
      unauthenticatedUrl: redirectUrl.toString(),
    });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
