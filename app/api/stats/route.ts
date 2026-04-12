import { NextResponse } from "next/server";
import { getStats } from "@/lib/stats";

export async function GET() {
  const stats = await getStats();

  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
    },
  });
}
