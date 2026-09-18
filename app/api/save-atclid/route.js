import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export async function POST(request) {
  try {
    const { checkoutId, atclid } = await request.json();

    if (!checkoutId || !atclid) {
      return NextResponse.json({ error: "checkoutId and atclid required" }, { status: 400 });
    }

    const { error } = await supabase
      .from("atclid_map")
      .insert({ checkout_id: checkoutId, atclid });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
