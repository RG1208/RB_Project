import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "./lib/auth"

export async function middleware(request: NextRequest) {
  const token = await verifyToken(request)

  // Public paths that don't require authentication
  const publicPaths = ["/", "/login", "/register", "/about"]
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname)

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Admin paths that require admin role
  const adminPaths = ["/admin"]
  const isAdminPath = request.nextUrl.pathname.startsWith("/admin")

  if (isAdminPath && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

