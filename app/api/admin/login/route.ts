import { NextRequest, NextResponse } from "next/server";
import { validateAdminCredentials } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid" }, { status: 400 });
  const { username, password } = body as { username?: string; password?: string };
  if (!username || !password) return NextResponse.json({ error: "Missing" }, { status: 400 });

  if (!validateAdminCredentials(username, password)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_session", "ok", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}



