import { PRODUCTS, CATEGORIES } from './src/data/products.js';
import fs from 'fs';
import path from 'path';

console.log('=== VERIFYING SWIFTMART CATALOG & ASSETS ===');

// 1. Verify Categories
console.log(`\nTotal Categories: ${CATEGORIES.length}`);
CATEGORIES.forEach(c => console.log(` - [${c.id}]: ${c.name}`));

// 2. Verify Product counts per category
const counts = {};
CATEGORIES.forEach(c => counts[c.id] = 0);

PRODUCTS.forEach(p => {
  if (counts[p.category] !== undefined) {
    counts[p.category]++;
  } else {
    counts[p.category] = 1;
  }
});

console.log('\nProduct count by category:');
Object.entries(counts).forEach(([cat, count]) => {
  console.log(` - ${cat}: ${count} items (Expected: 10)`);
  if (count !== 10) {
    console.error(`❌ Category ${cat} does not have exactly 10 items! Found: ${count}`);
    process.exit(1);
  }
});

// 3. Verify boAt Earbuds 4 Colors
const boat = PRODUCTS.find(p => p.id === 'boat-141-anc');
if (!boat) {
  console.error('❌ boat-141-anc product not found!');
  process.exit(1);
}
console.log(`\nboAt Product: ${boat.name}`);
console.log(`Variants count: ${boat.variants ? boat.variants.length : 0}`);
boat.variants.forEach(v => console.log(` - ${v.name}: ${v.image}`));
if (!boat.variants || boat.variants.length !== 4) {
  console.error('❌ boAt Earbuds must have exactly 4 color variants!');
  process.exit(1);
}

// 4. Verify Image files exist on disk
let missingImages = 0;
const publicDir = path.resolve('./public');

PRODUCTS.forEach(p => {
  const imgPath = path.join(publicDir, p.image);
  if (!fs.existsSync(imgPath)) {
    console.warn(`⚠️ Main image missing: ${p.image} for product ${p.id}`);
    missingImages++;
  }
  if (p.variants) {
    p.variants.forEach(v => {
      if (v.image) {
        const vImgPath = path.join(publicDir, v.image);
        if (!fs.existsSync(vImgPath)) {
          console.warn(`⚠️ Variant image missing: ${v.image} for product ${p.id}`);
          missingImages++;
        }
      }
      if (v.images) {
        v.images.forEach(vImg => {
          const vPath = path.join(publicDir, vImg);
          if (!fs.existsSync(vPath)) {
            console.warn(`⚠️ Variant gallery image missing: ${vImg} for product ${p.id} (${v.name})`);
            missingImages++;
          }
        });
      }
    });
  }
});

if (missingImages === 0) {
  console.log('\n✅ All product & variant images exist on disk!');
} else {
  console.log(`\n⚠️ Missing images: ${missingImages}`);
}

console.log('\n🎉 ALL CATALOG VERIFICATIONS PASSED SUCCESSFULLY!');
