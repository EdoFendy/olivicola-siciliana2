import { NextRequest, NextResponse } from "next/server";
import { insertLead, listLeads } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const { first_name, last_name, email, phone, message } = body as Record<string, string>;
  if (!first_name || !last_name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  try {
    const lead = insertLead({ first_name, last_name, email, phone, message });
    return NextResponse.json({ lead });
  } catch (e) {
    return NextResponse.json({ error: "Failed to insert" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const filters = {
    first_name: searchParams.get("first_name") || undefined,
    last_name: searchParams.get("last_name") || undefined,
    email: searchParams.get("email") || undefined,
    phone: searchParams.get("phone") || undefined,
    date_from: searchParams.get("date_from") || undefined,
    date_to: searchParams.get("date_to") || undefined,
    limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : undefined,
    offset: searchParams.get("offset") ? Number(searchParams.get("offset")) : undefined,
  };
  try {
    const data = listLeads(filters);
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: "Failed to list" }, { status: 500 });
  }
}



