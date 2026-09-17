const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Replace section state definitions with unified state architecture
const unifiedStateBlock = `  const [activeExpandedSection, setActiveExpandedSection] = useState(null);

  const furnitureSectionRef = useRef(null);
  const wishlistSectionRef = useRef(null);
  const valueDealsSectionRef = useRef(null);
  const nearbySectionRef = useRef(null);
  const gadgetsSectionRef = useRef(null);
  const skincareSectionRef = useRef(null);
  const fashionSectionRef = useRef(null);

  const isFurnitureExpanded = activeExpandedSection === "furniture";
  const isWishlistExpanded = activeExpandedSection === "wishlist";
  const isValueDealsExpanded = activeExpandedSection === "valueDeals";
  const isNearbyExpanded = activeExpandedSection === "nearby";
  const isGadgetsExpanded = activeExpandedSection === "gadgets";
  const isSkincareExpanded = activeExpandedSection === "skincare";
  const isFashionExpanded = activeExpandedSection === "fashion";

  const sectionRefs = {
    furniture: furnitureSectionRef,
    wishlist: wishlistSectionRef,
    valueDeals: valueDealsSectionRef,
    nearby: nearbySectionRef,
    gadgets: gadgetsSectionRef,
    skincare: skincareSectionRef,
    fashion: fashionSectionRef,
  };

  const toggleExpandedSection = (sectionId) => {
    setActiveExpandedSection((prev) => (prev === sectionId ? null : sectionId));
  };

  // Unified Click-Outside & Scroll-Away Auto-Close Handler
  useEffect(() => {
    if (!activeExpandedSection) return;

    const currentRef = sectionRefs[activeExpandedSection];
    if (!currentRef || !currentRef.current) return;

    const initialScrollY = window.scrollY;

    const handleClickOutside = (event) => {
      if (
        currentRef.current &&
        !currentRef.current.contains(event.target)
      ) {
        setActiveExpandedSection(null);
      }
    };

    const handleScroll = () => {
      const scrollDiff = Math.abs(window.scrollY - initialScrollY);
      if (scrollDiff > 100) {
        setActiveExpandedSection(null);
        return;
      }

      if (currentRef.current) {
        const rect = currentRef.current.getBoundingClientRect();
        if (rect.bottom < 40 || rect.top > window.innerHeight - 40) {
          setActiveExpandedSection(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeExpandedSection]);`;

// Remove individual useEffect and useState definitions
// 1. Furniture
content = content.replace(
  /const \[isFurnitureExpanded, setIsFurnitureExpanded\] = useState\(false\);[\s\S]*?}, \[isFurnitureExpanded\]\);/,
  unifiedStateBlock
);

// 2. Wishlist
content = content.replace(
  /const \[isWishlistExpanded, setIsWishlistExpanded\] = useState\(false\);[\s\S]*?}, \[isWishlistExpanded\]\);/,
  ''
);

// 3. Value Deals
content = content.replace(
  /const \[isValueDealsExpanded, setIsValueDealsExpanded\] = useState\(false\);[\s\S]*?}, \[isValueDealsExpanded\]\);/,
  ''
);

// 4. Nearby
content = content.replace(
  /const \[isNearbyExpanded, setIsNearbyExpanded\] = useState\(false\);[\s\S]*?}, \[isNearbyExpanded\]\);/,
  ''
);

// 5. Gadgets
content = content.replace(
  /const \[isGadgetsExpanded, setIsGadgetsExpanded\] = useState\(false\);[\s\S]*?}, \[isGadgetsExpanded\]\);/,
  ''
);

// 6. Skincare
content = content.replace(
  /const \[isSkincareExpanded, setIsSkincareExpanded\] = useState\(false\);[\s\S]*?}, \[isSkincareExpanded\]\);/,
  ''
);

// 7. Fashion
content = content.replace(
  /const \[isFashionExpanded, setIsFashionExpanded\] = useState\(false\);[\s\S]*?}, \[isFashionExpanded\]\);/,
  ''
);

// Update click handlers in Furniture section
content = content.replace(
  /setIsFurnitureExpanded\(\(prev\) => !prev\)/g,
  `toggleExpandedSection("furniture")`
);
content = content.replace(
  /setIsFurnitureExpanded\(true\)/g,
  `setActiveExpandedSection("furniture")`
);

// Update click handlers in Wishlist section
content = content.replace(
  /setIsWishlistExpanded\(\(prev\) => !prev\)/g,
  `toggleExpandedSection("wishlist")`
);
content = content.replace(
  /setIsWishlistExpanded\(true\)/g,
  `setActiveExpandedSection("wishlist")`
);

// Update click handlers in Value Deals section
content = content.replace(
  /setIsValueDealsExpanded\(\(prev\) => !prev\)/g,
  `toggleExpandedSection("valueDeals")`
);
content = content.replace(
  /setIsValueDealsExpanded\(true\)/g,
  `setActiveExpandedSection("valueDeals")`
);

// Update click handlers in Nearby section
content = content.replace(
  /setIsNearbyExpanded\(\(prev\) => !prev\)/g,
  `toggleExpandedSection("nearby")`
);
content = content.replace(
  /setIsNearbyExpanded\(true\)/g,
  `setActiveExpandedSection("nearby")`
);

// Update click handlers in Gadgets section
content = content.replace(
  /setIsGadgetsExpanded\(\(prev\) => !prev\)/g,
  `toggleExpandedSection("gadgets")`
);
content = content.replace(
  /setIsGadgetsExpanded\(true\)/g,
  `setActiveExpandedSection("gadgets")`
);

// Update click handlers in Skincare section
content = content.replace(
  /setIsSkincareExpanded\(\(prev\) => !prev\)/g,
  `toggleExpandedSection("skincare")`
);
content = content.replace(
  /setIsSkincareExpanded\(true\)/g,
  `setActiveExpandedSection("skincare")`
);

// Update click handlers in Fashion section
content = content.replace(
  /setIsFashionExpanded\(\(prev\) => !prev\)/g,
  `toggleExpandedSection("fashion")`
);
content = content.replace(
  /setIsFashionExpanded\(true\)/g,
  `setActiveExpandedSection("fashion")`
);

fs.writeFileSync('src/pages/Home.jsx', content, 'utf8');
console.log('Successfully updated Home.jsx with unified scroll and interaction logic!');
