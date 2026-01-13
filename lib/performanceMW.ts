import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const start = Date.now();
  const requestId = crypto.randomUUID();

  const res = NextResponse.next();
  res.headers.set("x-request-id", requestId);

  // Devben egyszerű log:
  // (Megjegyzés: middleware-nél a "status" nem mindig pontos, de latency + útvonal igen.)
  const ms = Date.now() - start;
  console.log(`[req] ${req.method} ${req.nextUrl.pathname} ${ms}ms id=${requestId}`);

  return res;
}

// Ne mérj mindent (statikus asseteket hagyd békén)
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
