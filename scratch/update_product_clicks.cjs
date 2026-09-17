const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// 1. Add useLayoutEffect import
content = content.replace(
  'import React, { useState, useEffect, useRef } from "react";',
  'import React, { useState, useEffect, useLayoutEffect, useRef } from "react";'
);

// 2. Add restoredState prop to Home signature
content = content.replace(
  'export default function Home({ onNavigate, onViewProduct, filterQuery }) {',
  'export default function Home({ onNavigate, onViewProduct, filterQuery, restoredState }) {'
);

// 3. Update activeExpandedSection state initialization & restoredState handling
const restoredStateLogic = `  const [activeExpandedSection, setActiveExpandedSection] = useState(() => {
    return restoredState?.expandedSection !== undefined ? restoredState.expandedSection : null;
  });

  // Restore section and exact scroll position when returning from ProductDetail
  useLayoutEffect(() => {
    if (restoredState && restoredState.timestamp) {
      if (restoredState.expandedSection !== undefined) {
        setActiveExpandedSection(restoredState.expandedSection);
      }
      const targetY = restoredState.scrollY || 0;
      window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = targetY;

      // Fallback frame after DOM paint to ensure accurate position
      const timer = setTimeout(() => {
        window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [restoredState?.timestamp]);`;

content = content.replace(
  '  const [activeExpandedSection, setActiveExpandedSection] = useState(null);',
  restoredStateLogic
);

// 4. Update onViewProduct calls to include section context
// Furniture section
content = content.replace(
  /onViewProduct\(item\.id\);/g,
  'onViewProduct(item.id, null, { expandedSection: activeExpandedSection });'
);

// Product reel & hero slides
content = content.replace(
  /onViewProduct\(slide\.id === "boat-anc" \? "boat-141-anc" : slide\.id\);/,
  'onViewProduct(slide.id === "boat-anc" ? "boat-141-anc" : slide.id, null, { expandedSection: activeExpandedSection });'
);

content = content.replace(
  /onViewProduct\(b\.id, b\);/g,
  'onViewProduct(b.id, b, { expandedSection: activeExpandedSection });'
);

content = content.replace(
  /onViewProduct\(product\.id\);/g,
  'onViewProduct(product.id, null, { expandedSection: activeExpandedSection });'
);

fs.writeFileSync('src/pages/Home.jsx', content, 'utf8');
console.log('Successfully updated Home.jsx with scroll and section restoration logic!');
