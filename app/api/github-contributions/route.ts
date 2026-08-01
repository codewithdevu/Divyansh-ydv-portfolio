import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const timestamp = Date.now();

    // Direct fetch with cache-busting timestamp parameter to GitHub profile HTML
    const res = await fetch(
      `https://github.com/users/codewithdevu/contributions?tab=overview&from=2026-01-01&to=2026-12-31&_t=${timestamp}`,
      {
        cache: "no-store",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        total: { "2026": 490 },
        contributions: [],
      });
    }

    const html = await res.text();

    // 1. Extract EXACT total contributions count for 2026
    let total2026 = 490;
    const totalMatch = html.match(/([\d,]+)\s+contributions\s+in\s+2026/i);
    if (totalMatch) {
      total2026 = parseInt(totalMatch[1].replace(/,/g, ""), 10);
    } else {
      const fallbackMatch = html.match(/([\d,]+)\s+contributions/i);
      if (fallbackMatch) {
        total2026 = parseInt(fallbackMatch[1].replace(/,/g, ""), 10);
      }
    }

    // 2. Attribute-order-agnostic parsing for every ContributionCalendar-day cell
    const contributions: Array<{ date: string; count: number; level: number }> = [];
    const tdRegex = /<td\s+[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>/gi;

    let match;
    while ((match = tdRegex.exec(html)) !== null) {
      const tdHtml = match[0];
      const dateMatch = tdHtml.match(/data-date="(\d{4}-\d{2}-\d{2})"/);
      const idMatch = tdHtml.match(/id="([^"]+)"/);
      const levelMatch = tdHtml.match(/data-level="(\d)"/);

      if (dateMatch && idMatch) {
        const date = dateMatch[1];
        const cellId = idMatch[1];
        const level = levelMatch ? parseInt(levelMatch[1], 10) : 0;

        let count = 0;
        try {
          // Escape special regex characters in cellId
          const escapedCellId = cellId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const ttRegex = new RegExp(`<tool-tip[^>]*for="${escapedCellId}"[^>]*>([^<]+)</tool-tip>`, "i");
          const ttMatch = html.match(ttRegex);

          if (ttMatch) {
            const text = ttMatch[1];
            const cMatch = text.match(/(\d+)\s+contribution/i);
            if (cMatch) {
              count = parseInt(cMatch[1], 10);
            }
          } else {
            count = level > 0 ? level * 3 : 0;
          }
        } catch (e) {
          count = level > 0 ? level * 3 : 0;
        }

        if (date.startsWith("2026")) {
          contributions.push({ date, count, level });
        }
      }
    }

    return NextResponse.json({
      total: { "2026": total2026 },
      contributions,
    });
  } catch (error) {
    return NextResponse.json({
      total: { "2026": 490 },
      contributions: [],
    });
  }
}
