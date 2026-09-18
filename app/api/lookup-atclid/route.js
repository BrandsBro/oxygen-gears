import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const checkoutId = searchParams.get("checkoutId");

    if (!checkoutId) {
      return NextResponse.json({ atclid: null });
    }

    const { data, error } = await supabase
      .from("atclid_map")
      .select("atclid")
      .eq("checkout_id", checkoutId)
      .single();

    if (error || !data) {
      return NextResponse.json({ atclid: null });
    }

    return NextResponse.json({ atclid: data.atclid });
  } catch (err) {
    return NextResponse.json({ atclid: null });
  }
}
