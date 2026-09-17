import { PRODUCTS, IMPULSE_ITEMS, CATEGORIES } from "./src/data/products.js";

console.log("=== TESTING IMPULSE ITEMS & CATALOG INTEGRITY ===");

// 1. Verify all IMPULSE_ITEMS have complete definitions in PRODUCTS
console.log("\n1. Verifying IMPULSE_ITEMS match in PRODUCTS:");
IMPULSE_ITEMS.forEach((imp) => {
  const fullProd = PRODUCTS.find((p) => p.id === imp.id);
  if (!fullProd) {
    console.error(`❌ Product ${imp.id} not found in PRODUCTS!`);
    process.exit(1);
  }
  console.log(`✅ Found full product: ${fullProd.id} -> "${fullProd.name}"`);
  console.log(`   - Category: ${fullProd.category}`);
  console.log(`   - Price: ₹${fullProd.price} (Original: ₹${fullProd.originalPrice})`);
  console.log(`   - Variants: ${fullProd.variants ? fullProd.variants.length : 0}`);
  console.log(`   - Specs: ${fullProd.specs ? fullProd.specs.length : 0}`);
  console.log(`   - Reviews: ${fullProd.reviews ? fullProd.reviews.length : 0}`);
  console.log(`   - Highlights: ${fullProd.highlights ? fullProd.highlights.length : 0}`);
  console.log(`   - InTheBox: ${fullProd.inTheBox ? fullProd.inTheBox.length : 0}`);

  // Assert minimum requirements for a rich product detail page
  if (!fullProd.specs || fullProd.specs.length === 0) {
    console.error(`❌ Product ${imp.id} missing specs!`);
    process.exit(1);
  }
  if (!fullProd.highlights || fullProd.highlights.length === 0) {
    console.error(`❌ Product ${imp.id} missing highlights!`);
    process.exit(1);
  }
  if (!fullProd.reviews || fullProd.reviews.length === 0) {
    console.error(`❌ Product ${imp.id} missing reviews!`);
    process.exit(1);
  }
  if (!fullProd.inTheBox || fullProd.inTheBox.length === 0) {
    console.error(`❌ Product ${imp.id} missing inTheBox!`);
    process.exit(1);
  }
});

// 2. Verify Category mapping
console.log("\n2. Verifying Category placement:");
const groceryItems = PRODUCTS.filter((p) => p.category === "grocery");
const dmartItems = PRODUCTS.filter((p) => p.category === "dmart-packs");

console.log(`- Grocery count: ${groceryItems.length} (contains lemons, butter, bread)`);
["impulse-lemons", "impulse-butter", "impulse-bread"].forEach((id) => {
  const found = groceryItems.some((p) => p.id === id);
  if (!found) {
    console.error(`❌ ${id} not found in grocery category!`);
    process.exit(1);
  }
  console.log(`  ✓ ${id} is in grocery category`);
});

console.log(`- DMart Packs count: ${dmartItems.length} (contains facial tissues)`);
const tissueFound = dmartItems.some((p) => p.id === "impulse-tissues");
if (!tissueFound) {
  console.error(`❌ impulse-tissues not found in dmart-packs category!`);
  process.exit(1);
}
console.log(`  ✓ impulse-tissues is in dmart-packs category`);

console.log("\n🎉 ALL IMPULSE & CATALOG TESTS PASSED!");
