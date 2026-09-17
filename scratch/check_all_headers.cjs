const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

const matches = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g);
console.log('H2 headers in Home.jsx:');
if (matches) {
  matches.forEach(m => console.log(m.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')));
}
