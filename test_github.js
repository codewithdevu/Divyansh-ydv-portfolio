async function testFetch() {
  const res = await fetch('https://github.com/users/codewithdevu/contributions');
  const html = await res.text();

  // Parse total contributions text e.g. "415 contributions in the last year"
  const totalMatch = html.match(/([\d,]+)\s+contributions\s+in\s+the\s+last\s+year/i);
  console.log('Total Contributions Match:', totalMatch ? totalMatch[1] : 'Not found');

  // Parse days from rect or td tags with data-date
  const dayRegex = /<td[^>]+data-date="([^"]+)"[^>]*data-level="([^"]+)"[^>]*>/g;
  const days = [];
  let m;
  while ((m = dayRegex.exec(html)) !== null) {
    days.push({ date: m[1], level: parseInt(m[2], 10) });
  }
  console.log('Total Days Found (td):', days.length);

  if (days.length === 0) {
    // Try tooltips / rects regex
    const rectRegex = /<rect[^>]+data-date="([^"]+)"[^>]*data-level="([^"]+)"[^>]*>/g;
    while ((m = rectRegex.exec(html)) !== null) {
      days.push({ date: m[1], level: parseInt(m[2], 10) });
    }
    console.log('Total Days Found (rect):', days.length);
  }

  if (days.length > 0) {
    console.log('First day:', days[0]);
    console.log('Last day:', days[days.length - 1]);
  }
}

testFetch().catch(console.error);
