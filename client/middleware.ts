import { authMiddleware } from "@clerk/nextjs";

export const runtime = "nodejs";

export default authMiddleware({
  publicRoutes: [
    "/", // Home page
    "sign-in", // Sign in page
    "sign-up", // Sign up page
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
