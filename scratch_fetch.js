const fs = require('fs');

async function inspectSite() {
  const res = await fetch('https://ayushworks.com/');
  const html = await res.text();

  // Find all CSS URLs
  const cssRegex = /href="(\/_next\/static\/css\/[^"]+)"/g;
  let match;
  const cssUrls = [];
  while ((match = cssRegex.exec(html)) !== null) {
    cssUrls.push(match[1]);
  }

  console.log('CSS URLs found:', cssUrls);

  for (const url of cssUrls) {
    const cssRes = await fetch('https://ayushworks.com' + url);
    const cssText = await cssRes.text();
    console.log('=== CSS URL:', url, '===');
    // Extract root variables and color tokens
    const rootMatches = cssText.match(/:root\s*\{[^}]+\}/g);
    if (rootMatches) {
      console.log('ROOT VARS:', rootMatches);
    }
    const darkMatches = cssText.match(/\.dark\s*\{[^}]+\}/g);
    if (darkMatches) {
      console.log('DARK VARS:', darkMatches);
    }
  }

  // Print full main HTML structure
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/);
  if (mainMatch) {
    fs.writeFileSync('D:/mern-portfolio/ayush_main.html', mainMatch[0]);
    console.log('Saved main HTML to ayush_main.html');
  }
}

inspectSite().catch(console.error);
