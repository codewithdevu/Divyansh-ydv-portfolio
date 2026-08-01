async function testParseFull() {
  const res = await fetch('https://github.com/users/codewithdevu/contributions');
  const html = await res.text();

  // Match td items with id and data-date
  const tdRegex = /<td[^>]+id="([^"]+)"[^>]*data-date="([^"]+)"[^>]*data-level="([^"]+)"[^>]*>/g;
  const daysMap = new Map();
  let m;
  while ((m = tdRegex.exec(html)) !== null) {
    const id = m[1];
    const date = m[2];
    const level = parseInt(m[3], 10) || 0;
    daysMap.set(id, { date, level, label: `${level} contributions` });
  }

  // Match tooltips by id
  const tooltipRegex = /<tool-tip[^>]+for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;
  while ((m = tooltipRegex.exec(html)) !== null) {
    const forId = m[1];
    const labelText = m[2].trim();
    if (daysMap.has(forId)) {
      daysMap.get(forId).label = labelText;
    }
  }

  const days2026 = Array.from(daysMap.values()).filter(d => d.date.startsWith('2026'));
  console.log('Total 2026 Days:', days2026.length);
  const active2026 = days2026.filter(d => d.level > 0);
  console.log('Sample Active 2026 Days (first 5):', active2026.slice(0, 5));
}

testParseFull().catch(console.error);
