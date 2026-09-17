const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('Expanded') || line.includes('SectionRef') || line.includes('ref=')) {
    console.log(`L${idx + 1}: ${line.trim()}`);
  }
});
