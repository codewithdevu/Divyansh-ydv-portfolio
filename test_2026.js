async function test2026() {
  const res = await fetch('https://github.com/users/codewithdevu/contributions');
  const html = await res.text();

  const dayRegex = /<td[^>]+data-date="([^"]+)"[^>]*data-level="([^"]+)"[^>]*>/g;
  const days = [];
  let m;
  while ((m = dayRegex.exec(html)) !== null) {
    const date = m[1];
    const level = parseInt(m[2], 10) || 0;
    if (date.startsWith('2026')) {
      days.push({ date, level });
    }
  }

  const activeDays = days.filter(d => d.level > 0).length;
  console.log('Total 2026 Days:', days.length);
  console.log('Active 2026 Days:', activeDays);
  if (days.length > 0) {
    console.log('First 2026 day:', days[0].date);
    console.log('Last 2026 day:', days[days.length - 1].date);
  }
}

test2026().catch(console.error);
