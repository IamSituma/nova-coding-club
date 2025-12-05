import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzExzmQar9Q7a1F8FT_ZCX9lkLcbpZe0svEz2JLropKsXdyaAoe6zAm9f2wZIDVsCOn/exec";

    const res = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ status: "error", message: err.message });
  }
}
