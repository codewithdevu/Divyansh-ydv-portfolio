async function testTooltips() {
  const res = await fetch('https://github.com/users/codewithdevu/contributions');
  const html = await res.text();

  // Find tooltips
  const tooltipRegex = /<tool-tip[^>]*>([^<]+)<\/tool-tip>/g;
  const tooltips = [];
  let m;
  while ((m = tooltipRegex.exec(html)) !== null) {
    tooltips.push(m[1].trim());
  }

  console.log('Total tooltips found:', tooltips.length);
  if (tooltips.length > 0) {
    console.log('Sample tooltips (first 5):', tooltips.slice(0, 5));
    console.log('Sample tooltips (last 5):', tooltips.slice(-5));
  }
}

testTooltips().catch(console.error);
