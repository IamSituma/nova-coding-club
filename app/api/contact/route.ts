import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyRUgd1OSnZ9uzhv5kq5jgryg9FPB0S2leM8YJST1f66Z9C5b5LNcEnxqORsNHdgbFS/exec";

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
