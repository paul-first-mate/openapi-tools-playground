import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message || typeof message !== "string") {
    return NextResponse.json(
      { error: "Message is required and must be a string." },
      { status: 400 }
    );
  }

  return NextResponse.json({ received: message });
}
