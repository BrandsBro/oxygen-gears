import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("orderId");

  if (!orderId) {
    return NextResponse.json({ error: "orderId required" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://www.wixapis.com/ecom/v1/orders/${orderId}`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_WIX_API_KEY,
        "wix-site-id": "c66d511f-f52b-4f3e-9ce2-3e9acc60bcb3",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Wix Orders API error:", text);
      return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 });
    }

    const data = await res.json();
    const total = data.order?.priceSummary?.total?.amount || "0";
    const currency = data.order?.currency || "USD";
    const checkoutId = data.order?.checkoutId || null;

    return NextResponse.json({ total, currency, checkoutId });
  } catch (err) {
    console.error("wix-order route error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
