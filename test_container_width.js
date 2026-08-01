async function checkWidth() {
  const res = await fetch('https://github.com/users/codewithdevu/contributions');
  const html = await res.text();
  console.log('GitHub table width context');

  const res2 = await fetch('https://ayushworks.com/');
  const html2 = await res2.text();
  const maxW = html2.match(/max-w-[\w\d\[\]]+/g);
  console.log('Found max-w in ayushworks:', maxW);
}

checkWidth().catch(console.error);
