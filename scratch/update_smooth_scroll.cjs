const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// 1. Add missing refs
const oldRefsDeclaration = `  const furnitureSectionRef = useRef(null);
  const wishlistSectionRef = useRef(null);
  const valueDealsSectionRef = useRef(null);
  const nearbySectionRef = useRef(null);
  const gadgetsSectionRef = useRef(null);
  const skincareSectionRef = useRef(null);
  const fashionSectionRef = useRef(null);`;

const newRefsDeclaration = `  const furnitureSectionRef = useRef(null);
  const flightBannerRef = useRef(null);
  const wishlistSectionRef = useRef(null);
  const valueDealsSectionRef = useRef(null);
  const brandsSectionRef = useRef(null);
  const nearbySectionRef = useRef(null);
  const gadgetsSectionRef = useRef(null);
  const skincareSectionRef = useRef(null);
  const fashionSectionRef = useRef(null);
  const groceryReelRef = useRef(null);`;

content = content.replace(oldRefsDeclaration, newRefsDeclaration);

// 2. Add nextSectionRefs mapping
const oldSectionRefsMap = `  const sectionRefs = {
    furniture: furnitureSectionRef,
    wishlist: wishlistSectionRef,
    valueDeals: valueDealsSectionRef,
    nearby: nearbySectionRef,
    gadgets: gadgetsSectionRef,
    skincare: skincareSectionRef,
    fashion: fashionSectionRef,
  };`;

const newSectionRefsMap = `  const sectionRefs = {
    furniture: furnitureSectionRef,
    wishlist: wishlistSectionRef,
    valueDeals: valueDealsSectionRef,
    nearby: nearbySectionRef,
    gadgets: gadgetsSectionRef,
    skincare: skincareSectionRef,
    fashion: fashionSectionRef,
  };

  const nextSectionRefs = {
    furniture: flightBannerRef,
    wishlist: valueDealsSectionRef,
    valueDeals: brandsSectionRef,
    nearby: gadgetsSectionRef,
    gadgets: skincareSectionRef,
    skincare: fashionSectionRef,
    fashion: groceryReelRef,
  };`;

content = content.replace(oldSectionRefsMap, newSectionRefsMap);

// 3. Attach refs to DOM section tags
// Flight banner section
content = content.replace(
  '/* 4. FULL-WIDTH BANNER: FLASH SALE FLIGHTS (Reference Image)*/}\n        {/* ========================================================= */}\n        <section className="w-full mb-4">',
  '/* 4. FULL-WIDTH BANNER: FLASH SALE FLIGHTS (Reference Image)*/}\n        {/* ========================================================= */}\n        <section ref={flightBannerRef} className="w-full mb-4">'
);

// Brands in spotlight section
content = content.replace(
  '/* 8. BRANDS IN SPOTLIGHT (Matching Reference Image)         */}\n        {/* ========================================================= */}\n        <section className="w-full mb-4">',
  '/* 8. BRANDS IN SPOTLIGHT (Matching Reference Image)         */}\n        {/* ========================================================= */}\n        <section ref={brandsSectionRef} className="w-full mb-4">'
);

// Grocery reel section
content = content.replace(
  '<section id="grocery-reel" className="w-full scroll-mt-28 mb-8">',
  '<section id="grocery-reel" ref={groceryReelRef} className="w-full scroll-mt-28 mb-8">'
);

// 4. Update handleScroll in useEffect to smoothly scroll to next section when scrolling down past current section
const oldEffect = `  // Unified Click-Outside & Scroll-to-Next-Section Auto-Close Handler
  useEffect(() => {
    if (!activeExpandedSection) return;

    const currentRef = sectionRefs[activeExpandedSection];
    if (!currentRef || !currentRef.current) return;

    const handleClickOutside = (event) => {
      if (
        currentRef.current &&
        !currentRef.current.contains(event.target)
      ) {
        setActiveExpandedSection(null);
      }
    };

    const handleScroll = () => {
      if (currentRef.current) {
        const rect = currentRef.current.getBoundingClientRect();
        // Automatically close section when user scrolls down/up out of the section towards the next section
        if (rect.bottom < 50 || rect.top > window.innerHeight - 50) {
          const beforeHeight = currentRef.current.offsetHeight;
          const isAboveViewport = rect.top < 0;

          setActiveExpandedSection(null);

          if (isAboveViewport) {
            // Instantly compensate scroll position so collapsing an above element doesn't shift the viewport down
            requestAnimationFrame(() => {
              if (currentRef.current) {
                const afterHeight = currentRef.current.offsetHeight;
                const heightDiff = beforeHeight - afterHeight;
                if (heightDiff > 0) {
                  window.scrollBy({ top: -heightDiff, behavior: "instant" });
                }
              }
            });
          }
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

const newEffect = `  // Unified Click-Outside & Scroll-to-Next-Section Auto-Close Handler
  useEffect(() => {
    if (!activeExpandedSection) return;

    const currentRef = sectionRefs[activeExpandedSection];
    if (!currentRef || !currentRef.current) return;

    let isTransitioning = false;

    const handleClickOutside = (event) => {
      if (
        currentRef.current &&
        !currentRef.current.contains(event.target)
      ) {
        setActiveExpandedSection(null);
      }
    };

    const handleScroll = () => {
      if (isTransitioning) return;

      if (currentRef.current) {
        const rect = currentRef.current.getBoundingClientRect();

        // When scrolling down past the expanded section towards the next section
        if (rect.bottom < 140) {
          isTransitioning = true;
          const nextRef = nextSectionRefs[activeExpandedSection];
          let nextTargetY = null;

          if (nextRef && nextRef.current) {
            const nextTop = nextRef.current.getBoundingClientRect().top + window.scrollY;
            nextTargetY = Math.max(0, nextTop - 75); // Header offset
          }

          setActiveExpandedSection(null);

          if (nextTargetY !== null) {
            requestAnimationFrame(() => {
              window.scrollTo({ top: nextTargetY, behavior: "smooth" });
            });
          }
          return;
        }

        // When scrolling up above the expanded section
        if (rect.top > window.innerHeight - 50) {
          isTransitioning = true;
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

content = content.replace(oldEffect, newEffect);

fs.writeFileSync('src/pages/Home.jsx', content, 'utf8');
console.log('Successfully updated Home.jsx with smooth next-section transition logic!');
