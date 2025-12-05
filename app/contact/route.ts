import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbxgAxTugO_3yslah8fvVr29kyQYnownROntx1_TGl4gvoNRKLUd7nzLMPGHw0AR3KoH/exec";

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
