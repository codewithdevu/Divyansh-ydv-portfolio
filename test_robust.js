async function testRobust() {
  const res = await fetch('https://github.com/users/codewithdevu/contributions');
  const html = await res.text();

  // Find tooltips map: id -> tooltip text
  const tooltipMap = new Map();
  const tooltipRegex = /<tool-tip[^>]+for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;
  let tm;
  while ((tm = tooltipRegex.exec(html)) !== null) {
    tooltipMap.set(tm[1], tm[2].trim());
  }

  // Find td items
  const tdTagRegex = /<td\s+([^>]+)>/g;
  const days = [];
  let m;
  while ((m = tdTagRegex.exec(html)) !== null) {
    const attrs = m[1];
    const dateMatch = attrs.match(/data-date="([^"]+)"/);
    const levelMatch = attrs.match(/data-level="([^"]+)"/);
    const idMatch = attrs.match(/id="([^"]+)"/);

    if (dateMatch && levelMatch) {
      const date = dateMatch[1];
      const level = parseInt(levelMatch[1], 10) || 0;
      const id = idMatch ? idMatch[1] : null;
      let label = id && tooltipMap.has(id) ? tooltipMap.get(id) : `${level > 0 ? level * 3 : 0} contributions on ${date}`;

      // Extract commit count if present e.g. "5 contributions on May 14th."
      let count = level > 0 ? level * 3 : 0;
      const countMatch = label.match(/(\d+)\s+contribution/i);
      if (countMatch) {
        count = parseInt(countMatch[1], 10);
      }

      days.push({
        date,
        level,
        count,
        label, // e.g. "5 contributions on May 14th." or "5 contributions - 2026-05-14"
      });
    }
  }

  const days2026 = days.filter(d => d.date.startsWith('2026'));
  console.log('Total 2026 Days:', days2026.length);
  const active2026 = days2026.filter(d => d.count > 0);
  console.log('Total Active 2026 Days:', active2026.length);
  if (active2026.length > 0) {
    console.log('Sample Active 2026 Days (first 5):', active2026.slice(0, 5));
  }
}

testRobust().catch(console.error);
