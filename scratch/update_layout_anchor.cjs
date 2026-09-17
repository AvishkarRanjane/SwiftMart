const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Add collapseAnchorRef declaration
const oldRefsBlock = `  const furnitureSectionRef = useRef(null);
  const flightBannerRef = useRef(null);
  const wishlistSectionRef = useRef(null);
  const valueDealsSectionRef = useRef(null);
  const brandsSectionRef = useRef(null);
  const nearbySectionRef = useRef(null);
  const gadgetsSectionRef = useRef(null);
  const skincareSectionRef = useRef(null);
  const fashionSectionRef = useRef(null);
  const groceryReelRef = useRef(null);`;

const newRefsBlock = `  const furnitureSectionRef = useRef(null);
  const flightBannerRef = useRef(null);
  const wishlistSectionRef = useRef(null);
  const valueDealsSectionRef = useRef(null);
  const brandsSectionRef = useRef(null);
  const nearbySectionRef = useRef(null);
  const gadgetsSectionRef = useRef(null);
  const skincareSectionRef = useRef(null);
  const fashionSectionRef = useRef(null);
  const groceryReelRef = useRef(null);

  const collapseAnchorRef = useRef(null);

  // Synchronous pre-paint viewport position locking on section collapse
  useLayoutEffect(() => {
    if (!activeExpandedSection && collapseAnchorRef.current) {
      const { anchorElement, initialTop } = collapseAnchorRef.current;
      collapseAnchorRef.current = null;

      if (anchorElement && document.body.contains(anchorElement)) {
        const currentTop = anchorElement.getBoundingClientRect().top;
        const diff = currentTop - initialTop;
        if (Math.abs(diff) > 0) {
          window.scrollBy({ top: diff, behavior: "instant" });
        }
      }
    }
  }, [activeExpandedSection]);`;

content = content.replace(oldRefsBlock, newRefsBlock);

// Replace useEffect handleScroll implementation with layout anchor integration
const oldEffect = `  // Unified Click-Outside & Scroll-to-Next-Section Auto-Close Handler
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

        // When scrolling down past the expanded section
        if (rect.bottom < 100) {
          isTransitioning = true;
          const nextRef = nextSectionRefs[activeExpandedSection];
          const anchorElement = nextRef && nextRef.current ? nextRef.current : null;
          const initialAnchorTop = anchorElement ? anchorElement.getBoundingClientRect().top : null;

          setActiveExpandedSection(null);

          if (anchorElement && initialAnchorTop !== null) {
            // Lock the viewport position on the anchor element so collapsing above doesn't shift the view
            requestAnimationFrame(() => {
              const currentAnchorTop = anchorElement.getBoundingClientRect().top;
              const diff = currentAnchorTop - initialAnchorTop;
              if (Math.abs(diff) > 0) {
                window.scrollBy({ top: diff, behavior: "instant" });
              }
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

        // When scrolling down past the expanded section
        if (rect.bottom < 100) {
          isTransitioning = true;
          const nextRef = nextSectionRefs[activeExpandedSection];
          const anchorElement = nextRef && nextRef.current ? nextRef.current : null;

          if (anchorElement) {
            collapseAnchorRef.current = {
              anchorElement,
              initialTop: anchorElement.getBoundingClientRect().top,
            };
          }

          setActiveExpandedSection(null);
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
console.log('Successfully updated Home.jsx with synchronous layout position anchoring!');
