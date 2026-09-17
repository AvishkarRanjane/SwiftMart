import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

export default function Home({ onNavigate, onViewProduct, filterQuery, restoredState }) {
  const {
    addToCart,
    updateQty,
    getItemQty,
    showToast,
    isInWishlist,
    toggleWishlist,
  } = useCart();

  // Top Category Tabs
  const TOP_SUB_CATEGORIES = [
    { id: "all", label: "For You" },
    { id: "fashion", label: "Fashion" },
    { id: "mobiles", label: "Mobiles" },
    { id: "electronics", label: "Electronics" },
    { id: "beauty", label: "Beauty" },
    { id: "home", label: "Home" },
    { id: "appliances", label: "Appliances" },
    { id: "toys", label: "Toys, etc" },
    { id: "grocery", label: "Food & More" },
    { id: "auto", label: "Auto Acc..." },
    { id: "sports", label: "Sports &..." },
    { id: "furniture", label: "Furniture" },
    { id: "books", label: "Books" },
  ];
  const [activeSubCategory, setActiveSubCategory] = useState("all");

  // Hero Carousel State: 4 Cards
  const HERO_SLIDES = [
    {
      id: "lava-5g",
      badge: "Lava Yuva 5G / Vivo V1 Pro",
      priceText: "Top 5G Deals",
      subtext: "Sale is on • Flagship 50MP Sony Sensor",
      bgGradient: "from-orange-600 via-amber-600 to-rose-600",
      image: "/images/hero-lava.jpg",
      tag: "5G MOBILES",
    },
    {
      id: "mattress",
      badge: "Save big on mattress",
      priceText: "Save up to 70%",
      subtext: "Sleephead, Duroflex & more • 10-Yr Warranty",
      bgGradient: "from-stone-700 via-stone-600 to-amber-900",
      image: "/images/hero-mattress.jpg",
      tag: "HOME DECOR",
    },
    {
      id: "poco-x6",
      badge: "POCO X6 Series 5G",
      priceText: "Turbo Flagship Drop",
      subtext: "Sale tomorrow, 12 PM | Dimensity 8300 Ultra",
      bgGradient: "from-neutral-900 via-neutral-800 to-yellow-800",
      image: "/images/hero-poco.jpg",
      tag: "TURBO DROP",
    },
    {
      id: "boat-anc",
      badge: "boAt Airdopes 141 ANC",
      priceText: "Flat 74% OFF",
      subtext: "Flat 74% OFF • 32dB Hybrid ANC • 42H Playback",
      bgGradient: "from-blue-900 via-indigo-900 to-slate-900",
      image: "/images/boat-1.jpg",
      tag: "AUDIO DROP",
    },
  ];
  const SLIDE_COUNT = HERO_SLIDES.length;
  // 3 duplicate sets for seamless infinite wrapping: [0..3, 4..7, 8..11]
  const EXTENDED_SLIDES = [...HERO_SLIDES, ...HERO_SLIDES, ...HERO_SLIDES];

  // Start in the middle set at index 4 (corresponding to HERO_SLIDES[0])
  const [currentSlide, setCurrentSlide] = useState(SLIDE_COUNT);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive slides calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Restore transition capability after instantaneous index normalization
  useEffect(() => {
    if (!isTransitioning) {
      const rafId1 = requestAnimationFrame(() => {
        const rafId2 = requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
        return () => cancelAnimationFrame(rafId2);
      });
      return () => cancelAnimationFrame(rafId1);
    }
  }, [isTransitioning]);

  const handleNextSlide = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrevSlide = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // If we reached or passed the end boundary (>= index 8), normalize seamlessly back to middle set
    if (currentSlide >= 2 * SLIDE_COUNT) {
      setIsTransitioning(false);
      setCurrentSlide((prev) => prev - SLIDE_COUNT);
    }
    // If we retreated below middle set (< index 4), normalize seamlessly forward to middle set
    else if (currentSlide < SLIDE_COUNT) {
      setIsTransitioning(false);
      setCurrentSlide((prev) => prev + SLIDE_COUNT);
    }
  };

  // Auto-slide carousel smoothly every 3.5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, currentSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      handleNextSlide();
    } else if (distance < -40) {
      handlePrevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Current active dot index (0..3)
  const activeDotIndex =
    ((currentSlide % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;

  const handleDotClick = (targetIndex) => {
    setIsTransitioning(true);
    setCurrentSlide(SLIDE_COUNT + targetIndex);
  };

  const [activeExpandedSection, setActiveExpandedSection] = useState(() => {
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
  }, [restoredState?.timestamp]);

  const furnitureSectionRef = useRef(null);
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

  const nextSectionRefs = {
    furniture: flightBannerRef,
    wishlist: valueDealsSectionRef,
    valueDeals: brandsSectionRef,
    nearby: gadgetsSectionRef,
    gadgets: skincareSectionRef,
    skincare: fashionSectionRef,
    fashion: groceryReelRef,
  };

  const prepareAnchorLock = (collapsingSectionId, explicitAnchor = null) => {
    if (!collapsingSectionId) return;
    const currentRef = sectionRefs[collapsingSectionId];
    if (!currentRef || !currentRef.current) return;

    let anchorElement = explicitAnchor;
    if (!anchorElement) {
      const rect = currentRef.current.getBoundingClientRect();
      if (rect.top >= -50) {
        anchorElement = currentRef.current;
      } else {
        const nextRef = nextSectionRefs[collapsingSectionId];
        anchorElement = nextRef && nextRef.current ? nextRef.current : currentRef.current;
      }
    }

    if (anchorElement) {
      collapseAnchorRef.current = {
        anchorElement,
        initialTop: anchorElement.getBoundingClientRect().top,
      };
    }
  };

  // Synchronous pre-paint viewport position locking on section collapse or toggle
  useLayoutEffect(() => {
    if (collapseAnchorRef.current) {
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
  }, [activeExpandedSection]);

  const toggleExpandedSection = (sectionId) => {
    setActiveExpandedSection((prev) => {
      if (prev === sectionId) {
        prepareAnchorLock(sectionId);
        return null;
      } else {
        if (prev) {
          prepareAnchorLock(prev, sectionRefs[sectionId]?.current);
        }
        return sectionId;
      }
    });
  };

  const expandSection = (sectionId) => {
    if (activeExpandedSection !== sectionId) {
      if (activeExpandedSection) {
        prepareAnchorLock(activeExpandedSection, sectionRefs[sectionId]?.current);
      }
      setActiveExpandedSection(sectionId);
    }
  };

  // Unified Click-Outside & Scroll-to-Next-Section Auto-Close Handler
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
        prepareAnchorLock(activeExpandedSection);
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
          prepareAnchorLock(activeExpandedSection, anchorElement);
          setActiveExpandedSection(null);
          return;
        }

        // When scrolling up above the expanded section
        if (rect.top > window.innerHeight - 50) {
          isTransitioning = true;
          prepareAnchorLock(activeExpandedSection, currentRef.current);
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
  }, [activeExpandedSection]);

  // 15 Trending Furniture Products with 8K studio images
  const TRENDING_FURNITURE = [
    {
      id: "furn-1",
      name: "Shoe Rack Bench",
      desc: "Solid Sheesham Wood with Cushion Seat",
      offer: "Min. 50% Off",
      price: 2499,
      originalPrice: 4999,
      discount: "50% OFF",
      rating: 4.8,
      img: "/images/furniture/shoe-rack.jpg",
      tag: "BESTSELLER",
    },
    {
      id: "furn-2",
      name: "Modular Drawers",
      desc: "Scandinavian 5-Drawer Storage Chest",
      offer: "Min. 50% Off",
      price: 3299,
      originalPrice: 6599,
      discount: "50% OFF",
      rating: 4.7,
      img: "/images/furniture/storage-drawers.jpg",
      tag: "HOT DEAL",
    },
    {
      id: "furn-3",
      name: "Carved Pooja Temple",
      desc: "Handcrafted Teak Mandir with Warm LED",
      offer: "Special Offer",
      price: 4599,
      originalPrice: 8999,
      discount: "49% OFF",
      rating: 4.9,
      img: "/images/furniture/home-temple.jpg",
      tag: "DIVINE CRAFT",
    },
    {
      id: "furn-4",
      name: "Velvet Accent Chair",
      desc: "Nordic Wingback Lounge Reading Armchair",
      offer: "Min. 45% Off",
      price: 5499,
      originalPrice: 9999,
      discount: "45% OFF",
      rating: 4.8,
      img: "/images/furniture/accent-chair.jpg",
      tag: "TRENDING",
    },
    {
      id: "furn-5",
      name: "Marble Coffee Table",
      desc: "Nesting Round Center Tables Set of 2",
      offer: "Min. 40% Off",
      price: 3899,
      originalPrice: 6999,
      discount: "44% OFF",
      rating: 4.7,
      img: "/images/furniture/coffee-table.jpg",
      tag: "MODERN LIVING",
    },
    {
      id: "furn-6",
      name: "Sectional Living Sofa",
      desc: "L-Shaped 3-Seater Comfort Fabric Couch",
      offer: "Flat 55% Off",
      price: 16999,
      originalPrice: 37999,
      discount: "55% OFF",
      rating: 4.9,
      img: "/images/furniture/sectional-sofa.jpg",
      tag: "MEGA DROP",
    },
    {
      id: "furn-7",
      name: "Hydraulic Storage Bed",
      desc: "King Size Bed with Tufted Headboard",
      offer: "Min. 45% Off",
      price: 18499,
      originalPrice: 34999,
      discount: "47% OFF",
      rating: 4.8,
      img: "/images/furniture/storage-bed.jpg",
      tag: "LUXURY SLEEP",
    },
    {
      id: "furn-8",
      name: "Executive Mesh Chair",
      desc: "Ergonomic 3D Armrest & Lumbar Support",
      offer: "Flat 60% Off",
      price: 5899,
      originalPrice: 14999,
      discount: "60% OFF",
      rating: 4.9,
      img: "/images/furniture/office-chair.jpg",
      tag: "WORK ESSENTIAL",
    },
    {
      id: "furn-9",
      name: "6-Seater Dining Set",
      desc: "Solid Teakwood Table with 6 Chairs",
      offer: "Min. 40% Off",
      price: 21999,
      originalPrice: 38999,
      discount: "43% OFF",
      rating: 4.8,
      img: "/images/furniture/dining-set.jpg",
      tag: "FAMILY SPECIAL",
    },
    {
      id: "furn-10",
      name: "Architectural Bookshelf",
      desc: "5-Tier Open Display Geometric Bookcase",
      offer: "Min. 50% Off",
      price: 3499,
      originalPrice: 6999,
      discount: "50% OFF",
      rating: 4.7,
      img: "/images/furniture/bookshelf.jpg",
      tag: "TOP VALUE",
    },
    {
      id: "furn-11",
      name: "Oak Bedside Table",
      desc: "Dual Drawer Minimalist Nightstand",
      offer: "Min. 45% Off",
      price: 1899,
      originalPrice: 3499,
      discount: "46% OFF",
      rating: 4.8,
      img: "/images/furniture/bedside-table.jpg",
      tag: "BEDROOM",
    },
    {
      id: "furn-12",
      name: "Foldable Study Desk",
      desc: "Compact Home Office Computer Workstation",
      offer: "Min. 52% Off",
      price: 2699,
      originalPrice: 5699,
      discount: "52% OFF",
      rating: 4.8,
      img: "/images/furniture/study-desk.jpg",
      tag: "SPACE SAVER",
    },
    {
      id: "furn-13",
      name: "Floating TV Console",
      desc: "Wall-Mounted Media Entertainment Unit",
      offer: "Min. 48% Off",
      price: 4999,
      originalPrice: 9699,
      discount: "48% OFF",
      rating: 4.9,
      img: "/images/furniture/tv-unit.jpg",
      tag: "SMART MEDIA",
    },
    {
      id: "furn-14",
      name: "3-Door Mirror Wardrobe",
      desc: "Spacious Wooden Closet with Dressing Mirror",
      offer: "Min. 42% Off",
      price: 13999,
      originalPrice: 24999,
      discount: "44% OFF",
      rating: 4.7,
      img: "/images/furniture/wardrobe.jpg",
      tag: "BEDROOM LUXE",
    },
    {
      id: "furn-15",
      name: "Swivel Bar Stool Pair",
      desc: "Set of 2 Counter Height Padded Stools",
      offer: "Min. 46% Off",
      price: 3699,
      originalPrice: 6999,
      discount: "47% OFF",
      rating: 4.8,
      img: "/images/furniture/bar-stools.jpg",
      tag: "KITCHEN TREND",
    },
  ];



  // 15 Trending Wishlist & Lifestyle Products
  const TRENDING_WISHLIST = [
    {
      id: "wish-1",
      name: "Bestsellers",
      desc: "Yahweh Yireh Heavyweight Graphic T-Shirt",
      offer: "Min. 60% Off",
      price: 699,
      originalPrice: 1799,
      discount: "61% OFF",
      rating: 4.8,
      img: "/images/deal-apparel.jpg",
      tag: "BESTSELLER",
    },
    {
      id: "wish-2",
      name: "Top Rated",
      desc: "Clinique Pop Velvet Matte Longwear Lipstick",
      offer: "Min. 60% Off",
      price: 1199,
      originalPrice: 2999,
      discount: "60% OFF",
      rating: 4.9,
      img: "/images/deal-lipsticks.jpg",
      tag: "TOP RATED",
    },
    {
      id: "wish-3",
      name: "Most loved",
      desc: "Royal Kashmiri Walnuts & Exotic Spices Jar",
      offer: "Min. 50% Off",
      price: 899,
      originalPrice: 1799,
      discount: "50% OFF",
      rating: 4.9,
      img: "/images/deal-dryfruits-jar.jpg",
      tag: "MOST LOVED",
    },
    {
      id: "wish-4",
      name: "In Focus Now",
      desc: "Kanjivaram Zari Banarasi Woven Silk Saree",
      offer: "Special offer",
      price: 3499,
      originalPrice: 8999,
      discount: "61% OFF",
      rating: 4.8,
      img: "/images/deal-saree.jpg",
      tag: "IN FOCUS NOW",
    },
    {
      id: "wish-5",
      name: "Anarkali Kurta Set",
      desc: "Chanderi Silk Embroidered Festive Suit",
      offer: "Min. 55% Off",
      price: 2199,
      originalPrice: 4999,
      discount: "56% OFF",
      rating: 4.7,
      img: "/images/deal-anarkali.jpg",
      tag: "TRENDING ETHNIC",
    },
    {
      id: "wish-6",
      name: "Kundan Jhumka Earrings",
      desc: "22K Gold Plated Handcrafted Pearl Drops",
      offer: "Min. 60% Off",
      price: 799,
      originalPrice: 1999,
      discount: "60% OFF",
      rating: 4.8,
      img: "/images/deal-earrings.jpg",
      tag: "ELEGANT JEWELS",
    },
    {
      id: "wish-7",
      name: "Silver Oxidised Payal",
      desc: "925 Sterling Silver Floral Ghungroo Anklet",
      offer: "Min. 45% Off",
      price: 1299,
      originalPrice: 2499,
      discount: "48% OFF",
      rating: 4.7,
      img: "/images/deal-anklet.jpg",
      tag: "ARTISAN CRAFT",
    },
    {
      id: "wish-8",
      name: "Velvet Cocktail Gown",
      desc: "Midnight Blue Slit Evening Gala Dress",
      offer: "Min. 50% Off",
      price: 2799,
      originalPrice: 5999,
      discount: "53% OFF",
      rating: 4.9,
      img: "/images/deal-gown.jpg",
      tag: "PARTY GLAM",
    },
    {
      id: "wish-9",
      name: "AeroGrip Running Shoes",
      desc: "Breathable Road Running Cushion Sneakers",
      offer: "Min. 60% Off",
      price: 1899,
      originalPrice: 4499,
      discount: "58% OFF",
      rating: 4.8,
      img: "/images/deal-running.jpg",
      tag: "ACTIVEWEAR",
    },
    {
      id: "wish-10",
      name: "High-Top Skate Sneakers",
      desc: "Urban Vulcanized Canvas Streetwear Shoes",
      offer: "Min. 50% Off",
      price: 1499,
      originalPrice: 2999,
      discount: "50% OFF",
      rating: 4.7,
      img: "/images/deal-sneakers.jpg",
      tag: "STREET STYLE",
    },
    {
      id: "wish-11",
      name: "Fossil Chrono Watch",
      desc: "Grant Roman Dial Genuine Leather Watch",
      offer: "Min. 50% Off",
      price: 5499,
      originalPrice: 10995,
      discount: "50% OFF",
      rating: 4.9,
      img: "/images/deal-watch.jpg",
      tag: "TIMEPIECE",
    },
    {
      id: "wish-12",
      name: "Cetaphil Gentle Cleanser",
      desc: "Hydrating Foaming Wash with Vitamin B5",
      offer: "Special offer",
      price: 649,
      originalPrice: 999,
      discount: "35% OFF",
      rating: 4.9,
      img: "/images/deal-facewash.jpg",
      tag: "SKINCARE GLOW",
    },
    {
      id: "wish-13",
      name: "Indulekha Bringha Oil",
      desc: "100% Ayurvedic Oil with Root Selfie Comb",
      offer: "Min. 35% Off",
      price: 479,
      originalPrice: 720,
      discount: "33% OFF",
      rating: 4.8,
      img: "/images/deal-hairoil.jpg",
      tag: "AYURVEDIC CARE",
    },
    {
      id: "wish-14",
      name: "Beard Grooming Kit",
      desc: "Bombay Shaving Co. 6-in-1 Styling Set",
      offer: "Min. 50% Off",
      price: 1199,
      originalPrice: 2499,
      discount: "52% OFF",
      rating: 4.8,
      img: "/images/deal-mencare.jpg",
      tag: "GROOMING ESSENTIAL",
    },
    {
      id: "wish-15",
      name: "Philips Cordless Trimmer",
      desc: "Series 3000 Self-Sharpening Beard Trimmer",
      offer: "Min. 40% Off",
      price: 1399,
      originalPrice: 2295,
      discount: "39% OFF",
      rating: 4.8,
      img: "/images/deal-trimmer.jpg",
      tag: "PRECISION STYLING",
    },
  ];



  // 15 Top Value Deals
  const TOP_VALUE_DEALS = [
    {
      id: "val-1",
      name: "Earrings",
      desc: "Sapphire Crystal Heart Drop Earrings",
      offer: "Min. 50% Off",
      price: 299,
      originalPrice: 999,
      discount: "70% OFF",
      rating: 4.8,
      img: "/images/deal-earrings.jpg",
      tag: "SUPER SAVER",
    },
    {
      id: "val-2",
      name: "Garment covers",
      desc: "Oxford Fabric Saree & Dress Storage Bags",
      offer: "Min. 60% Off",
      price: 349,
      originalPrice: 999,
      discount: "65% OFF",
      rating: 4.7,
      img: "/images/deal-garmentbox.jpg",
      tag: "HOME ESSENTIAL",
    },
    {
      id: "val-3",
      name: "Anklets",
      desc: "Dual-Strand Bohemian Silver Payal Pair",
      offer: "Special Deals",
      price: 399,
      originalPrice: 999,
      discount: "60% OFF",
      rating: 4.8,
      img: "/images/deal-anklet.jpg",
      tag: "SPECIAL DEALS",
    },
    {
      id: "val-4",
      name: "Claw Hair Clips",
      desc: "Pastel Matte Non-Slip Hair Clips 6-Pack",
      offer: "Min. 65% Off",
      price: 199,
      originalPrice: 599,
      discount: "67% OFF",
      rating: 4.8,
      img: "/images/deal-hairclips.jpg",
      tag: "TOP RATED",
    },
    {
      id: "val-5",
      name: "Stainless Steel Flask",
      desc: "Double Wall Vacuum Insulated 750ml Bottle",
      offer: "Min. 55% Off",
      price: 499,
      originalPrice: 1199,
      discount: "58% OFF",
      rating: 4.8,
      img: "/images/deal-flask.jpg",
      tag: "BEST VALUE",
    },
    {
      id: "val-6",
      name: "Hand Blender Mixer",
      desc: "300W Copper Motor Smoothie Blender",
      offer: "Min. 50% Off",
      price: 699,
      originalPrice: 1599,
      discount: "56% OFF",
      rating: 4.7,
      img: "/images/deal-mixer.jpg",
      tag: "KITCHEN VALUE",
    },
    {
      id: "val-7",
      name: "Kids Activity Chair",
      desc: "Ergonomic Polymer Toddler Study Chair",
      offer: "Min. 50% Off",
      price: 449,
      originalPrice: 999,
      discount: "55% OFF",
      rating: 4.8,
      img: "/images/deal-kidchair.jpg",
      tag: "KIDS ESSENTIAL",
    },
    {
      id: "val-8",
      name: "Digital Tyre Inflator",
      desc: "150 PSI Auto-Stop Air Compressor Pump",
      offer: "Min. 55% Off",
      price: 1299,
      originalPrice: 2999,
      discount: "57% OFF",
      rating: 4.8,
      img: "/images/deal-inflator.jpg",
      tag: "AUTO ESSENTIAL",
    },
    {
      id: "val-9",
      name: "Wireless Bass Neckband",
      desc: "30-Hr Magnetic Bluetooth Earphones",
      offer: "Min. 65% Off",
      price: 599,
      originalPrice: 1999,
      discount: "70% OFF",
      rating: 4.7,
      img: "/images/deal-neckband.jpg",
      tag: "HOT AUDIO",
    },
    {
      id: "val-10",
      name: "Walking Loafers",
      desc: "Breathable Knit Memory Foam Slip-Ons",
      offer: "Min. 55% Off",
      price: 799,
      originalPrice: 1899,
      discount: "58% OFF",
      rating: 4.7,
      img: "/images/deal-shoes.jpg",
      tag: "FOOTWEAR DEAL",
    },
    {
      id: "val-11",
      name: "Desktop Organiser",
      desc: "Modular 4-Drawer Cosmetic & Desk Case",
      offer: "Min. 60% Off",
      price: 499,
      originalPrice: 1299,
      discount: "61% OFF",
      rating: 4.8,
      img: "/images/deal-drawer.jpg",
      tag: "ORGANISER",
    },
    {
      id: "val-12",
      name: "Magic Doodle Book",
      desc: "Reusable Water Colouring Book & Pen",
      offer: "Min. 60% Off",
      price: 149,
      originalPrice: 399,
      discount: "63% OFF",
      rating: 4.9,
      img: "/images/magicpen.jpg",
      tag: "KIDS CRAFT",
    },
    {
      id: "val-13",
      name: "65W Braided Cable",
      desc: "Type-C Fast Charging Tough Nylon Cord",
      offer: "Min. 70% Off",
      price: 199,
      originalPrice: 699,
      discount: "71% OFF",
      rating: 4.8,
      img: "/images/cable.jpg",
      tag: "GADGET VALUE",
    },
    {
      id: "val-14",
      name: "Aluminium Laptop Stand",
      desc: "7-Level Adjustable Foldable Riser Stand",
      offer: "Min. 65% Off",
      price: 399,
      originalPrice: 1299,
      discount: "69% OFF",
      rating: 4.8,
      img: "/images/stand.jpg",
      tag: "DESK VALUE",
    },
    {
      id: "val-15",
      name: "Rose Gold Smartwatch",
      desc: "HD Bluetooth Calling 1.85\" Curved Watch",
      offer: "Min. 70% Off",
      price: 1499,
      originalPrice: 4999,
      discount: "70% OFF",
      rating: 4.8,
      img: "/images/smartwatch-gold.jpg",
      tag: "TECH STEAL",
    },
  ];

  // ==========================================
  // 9. POPULAR NEARBY (15 Fresh Grocery Items • 15-Min Delivery)
  // ==========================================


  const POPULAR_NEARBY_DEALS = [
    {
      id: "nearby-1",
      name: "Organic Lemons",
      desc: "Farm Fresh Juicy Organic Lemons (250g)",
      offer: "⚡ Delivery in 10 Mins",
      price: 39,
      originalPrice: 65,
      discount: "40% OFF",
      rating: 4.8,
      img: "/images/lemons.jpg",
      tag: "FARM FRESH",
      delivery: "10 Mins",
    },
    {
      id: "nearby-2",
      name: "Amul Table Butter",
      desc: "Pasteurised Fresh Table Butter (500g)",
      offer: "⚡ Delivery in 11 Mins",
      price: 265,
      originalPrice: 285,
      discount: "7% OFF",
      rating: 4.9,
      img: "/images/butter-1.jpg",
      tag: "DAILY DAIRY",
      delivery: "11 Mins",
    },
    {
      id: "nearby-3",
      name: "Chakki Fresh Atta",
      desc: "Aashirvaad 100% Whole Wheat Atta (5kg)",
      offer: "⚡ Delivery in 12 Mins",
      price: 229,
      originalPrice: 289,
      discount: "21% OFF",
      rating: 4.8,
      img: "/images/atta-1.jpg",
      tag: "KITCHEN STAPLE",
      delivery: "12 Mins",
    },
    {
      id: "nearby-4",
      name: "Basmati Rice",
      desc: "India Gate Feast Rozzana Basmati Rice (5kg)",
      offer: "⚡ Delivery in 11 Mins",
      price: 399,
      originalPrice: 575,
      discount: "31% OFF",
      rating: 4.7,
      img: "/images/basmati.jpg",
      tag: "AROMATIC RICE",
      delivery: "11 Mins",
    },
    {
      id: "nearby-5",
      name: "Unpolished Toor Dal",
      desc: "Tata Sampann Desi High Protein Dal (1kg)",
      offer: "⚡ Delivery in 10 Mins",
      price: 169,
      originalPrice: 215,
      discount: "21% OFF",
      rating: 4.8,
      img: "/images/toordal.jpg",
      tag: "PROTEIN PULSES",
      delivery: "10 Mins",
    },
    {
      id: "nearby-6",
      name: "Sunflower Oil",
      desc: "Fortune Sunlite Refined Cooking Oil (1L)",
      offer: "⚡ Delivery in 12 Mins",
      price: 135,
      originalPrice: 175,
      discount: "23% OFF",
      rating: 4.7,
      img: "/images/oil-1.jpg",
      tag: "COOKING OIL",
      delivery: "12 Mins",
    },
    {
      id: "nearby-7",
      name: "Iodized Salt",
      desc: "Tata Salt Vacuum Evaporated Pure Salt (1kg)",
      offer: "⚡ Delivery in 10 Mins",
      price: 26,
      originalPrice: 30,
      discount: "13% OFF",
      rating: 4.9,
      img: "/images/tatasalt.jpg",
      tag: "DAILY ESSENTIAL",
      delivery: "10 Mins",
    },
    {
      id: "nearby-8",
      name: "Premium Tea",
      desc: "Tata Tea Premium Kadak Desh Ki Chai (500g)",
      offer: "⚡ Delivery in 10 Mins",
      price: 235,
      originalPrice: 310,
      discount: "24% OFF",
      rating: 4.8,
      img: "/images/tea-1.jpg",
      tag: "HOT BEVERAGE",
      delivery: "10 Mins",
    },
    {
      id: "nearby-9",
      name: "Instant Noodles",
      desc: "Maggi 2-Minute Masala Noodles (Pack of 4)",
      offer: "⚡ Delivery in 10 Mins",
      price: 54,
      originalPrice: 60,
      discount: "10% OFF",
      rating: 4.9,
      img: "/images/maggi-1.jpg",
      tag: "INSTANT SNACK",
      delivery: "10 Mins",
    },
    {
      id: "nearby-10",
      name: "Cashew Cookies",
      desc: "Britannia Good Day Butter Cookies (600g)",
      offer: "⚡ Delivery in 10 Mins",
      price: 119,
      originalPrice: 160,
      discount: "26% OFF",
      rating: 4.7,
      img: "/images/goodday.jpg",
      tag: "BAKERY & COOKIES",
      delivery: "10 Mins",
    },
    {
      id: "nearby-11",
      name: "Vanilla Ice Cream",
      desc: "Amul Real Milk Vanilla Magic Tub (1L)",
      offer: "⚡ Delivery in 10 Mins (Cold Packed)",
      price: 160,
      originalPrice: 190,
      discount: "16% OFF",
      rating: 4.8,
      img: "/images/icecream-1.jpg",
      tag: "CHILLED DESSERT",
      delivery: "10 Mins",
    },
    {
      id: "nearby-12",
      name: "Dental Toothpaste",
      desc: "Colgate Strong Teeth Amino Shakti (500g)",
      offer: "⚡ Delivery in 11 Mins",
      price: 215,
      originalPrice: 285,
      discount: "25% OFF",
      rating: 4.8,
      img: "/images/colgate.jpg",
      tag: "ORAL CARE",
      delivery: "11 Mins",
    },
    {
      id: "nearby-13",
      name: "Bathing Soap",
      desc: "Dettol Original Germ Protection Soap (4x125g)",
      offer: "⚡ Delivery in 11 Mins",
      price: 175,
      originalPrice: 232,
      discount: "25% OFF",
      rating: 4.9,
      img: "/images/dettol.jpg",
      tag: "PERSONAL CARE",
      delivery: "11 Mins",
    },
    {
      id: "nearby-14",
      name: "Detergent Powder",
      desc: "Surf Excel Easy Wash Super Stain Removal (1kg)",
      offer: "⚡ Delivery in 12 Mins",
      price: 129,
      originalPrice: 155,
      discount: "17% OFF",
      rating: 4.8,
      img: "/images/surfexcel-1.jpg",
      tag: "LAUNDRY CARE",
      delivery: "12 Mins",
    },
    {
      id: "nearby-15",
      name: "California Almonds",
      desc: "Happilo 100% Raw Jumbo Badam (500g)",
      offer: "⚡ Delivery in 11 Mins",
      price: 419,
      originalPrice: 625,
      discount: "33% OFF",
      rating: 4.9,
      img: "/images/dryfruits-1.jpg",
      tag: "HEALTHY NUTS",
      delivery: "11 Mins",
    },
  ];

  // ==========================================
  // 10. TRENDING GADGETS & APPLIANCES (15 Items)
  // ==========================================


  const TRENDING_GADGETS_DEALS = [
    {
      id: "gadget-app-1",
      name: "True Wireless",
      desc: "OnePlus Nord Buds 2r Extra Bass",
      offer: "Min. 50% Off",
      price: 1999,
      originalPrice: 2999,
      discount: "33% OFF",
      rating: 4.6,
      img: "/images/oneplus-1.jpg",
      tag: "TRUE WIRELESS",
    },
    {
      id: "gadget-app-2",
      name: "Trimmers",
      desc: "Philips All-in-One Series 3000 Trimmer",
      offer: "Min. 50% Off",
      price: 1499,
      originalPrice: 2495,
      discount: "40% OFF",
      rating: 4.7,
      img: "/images/deal-trimmer.jpg",
      tag: "GROOMING PRO",
    },
    {
      id: "gadget-app-3",
      name: "Neckband",
      desc: "boAt Rockerz 255 Pro+ Wireless Neckband",
      offer: "Min. 50% Off",
      price: 1299,
      originalPrice: 2990,
      discount: "57% OFF",
      rating: 4.8,
      img: "/images/deal-neckband.jpg",
      tag: "HEAVY BASS",
    },
    {
      id: "gadget-app-4",
      name: "Mixer Juicer Grinder",
      desc: "Prestige Iris Plus 750W Mixer Grinder",
      offer: "Min. 50% Off",
      price: 2999,
      originalPrice: 6295,
      discount: "53% OFF",
      rating: 4.7,
      img: "/images/deal-mixer.jpg",
      tag: "KITCHEN POWER",
    },
    {
      id: "gadget-app-5",
      name: "Calling Smartwatch",
      desc: "Fire-Boltt Phoenix Bluetooth Calling Watch",
      offer: "Min. 60% Off",
      price: 1299,
      originalPrice: 6999,
      discount: "81% OFF",
      rating: 4.6,
      img: "/images/deal-watch.jpg",
      tag: "SMART CALL",
    },
    {
      id: "gadget-app-6",
      name: "Fast Power Bank",
      desc: "Mi 20000mAh 18W Two-Way Fast Charge",
      offer: "Min. 30% Off",
      price: 1899,
      originalPrice: 2499,
      discount: "24% OFF",
      rating: 4.6,
      img: "/images/ssd-black.jpg",
      tag: "TRAVEL READY",
    },
    {
      id: "gadget-app-7",
      name: "Hair Dryer",
      desc: "Havells 1200W Compact Foldable Hair Dryer",
      offer: "Min. 40% Off",
      price: 999,
      originalPrice: 1695,
      discount: "42% OFF",
      rating: 4.7,
      img: "/images/deal-mencare.jpg",
      tag: "HAIR STYLING",
    },
    {
      id: "gadget-app-8",
      name: "Electric Kettle",
      desc: "Pigeon 1.5L Stainless Steel Electric Kettle",
      offer: "Min. 50% Off",
      price: 649,
      originalPrice: 1295,
      discount: "50% OFF",
      rating: 4.5,
      img: "/images/deal-flask.jpg",
      tag: "QUICK BOIL",
    },
    {
      id: "gadget-app-9",
      name: "Hand Blender",
      desc: "Kent 300W Stainless Steel Hand Blender",
      offer: "Min. 35% Off",
      price: 1199,
      originalPrice: 1899,
      discount: "37% OFF",
      rating: 4.6,
      img: "/images/deal-mixer.jpg",
      tag: "KITCHEN BLEND",
    },
    {
      id: "gadget-app-10",
      name: "Steam Iron",
      desc: "Philips EasySpeed Plus 2000W Steam Iron",
      offer: "Min. 45% Off",
      price: 1499,
      originalPrice: 2695,
      discount: "44% OFF",
      rating: 4.7,
      img: "/images/charger-black.jpg",
      tag: "CRISP PRESS",
    },
    {
      id: "gadget-app-11",
      name: "Bluetooth Speaker",
      desc: "boAt Stone 352 10W Portable Speaker",
      offer: "Min. 60% Off",
      price: 1399,
      originalPrice: 3490,
      discount: "60% OFF",
      rating: 4.8,
      img: "/images/soundbar.jpg",
      tag: "PUNCHY BASS",
    },
    {
      id: "gadget-app-12",
      name: "Sandwich Maker",
      desc: "Prestige 800W Non-Stick Grill Sandwich Toaster",
      offer: "Min. 40% Off",
      price: 1249,
      originalPrice: 2095,
      discount: "40% OFF",
      rating: 4.6,
      img: "/images/deal-drawer.jpg",
      tag: "QUICK TOAST",
    },
    {
      id: "gadget-app-13",
      name: "Hair Straightener",
      desc: "Nova Ceramic Coating Fast Heat Straightener",
      offer: "Min. 55% Off",
      price: 599,
      originalPrice: 1499,
      discount: "60% OFF",
      rating: 4.5,
      img: "/images/deal-mencare.jpg",
      tag: "SALON GLOSS",
    },
    {
      id: "gadget-app-14",
      name: "Induction Cooktop",
      desc: "Pigeon Cruise 1800W Induction Cooktop",
      offer: "Min. 50% Off",
      price: 1699,
      originalPrice: 3595,
      discount: "53% OFF",
      rating: 4.7,
      img: "/images/deal-inflator.jpg",
      tag: "FAST COOKING",
    },
    {
      id: "gadget-app-15",
      name: "Cordless Vacuum",
      desc: "Eureka Forbes Cordless Stick Vacuum Cleaner",
      offer: "Min. 45% Off",
      price: 5999,
      originalPrice: 11999,
      discount: "50% OFF",
      rating: 4.6,
      img: "/images/stand.jpg",
      tag: "HOME HYGIENE",
    },
  ];

  // ==========================================
  // 11. HAIR & SKINCARE ESSENTIALS (15 Items)
  // ==========================================


  const HAIR_SKINCARE_DEALS = [
    {
      id: "skin-1",
      name: "Face Wash",
      desc: "Himalaya Purifying Neem Face Wash",
      offer: "Min. 50% Off",
      price: 245,
      originalPrice: 350,
      discount: "30% OFF",
      rating: 4.8,
      img: "/images/deal-facewash.jpg",
      tag: "ACNE DEFENSE",
    },
    {
      id: "skin-2",
      name: "Hair Clips",
      desc: "Pastel Matte Claw Hair Clips (Pack of 6)",
      offer: "Special offer",
      price: 199,
      originalPrice: 599,
      discount: "67% OFF",
      rating: 4.7,
      img: "/images/deal-hairclips.jpg",
      tag: "STYLE TREND",
    },
    {
      id: "skin-3",
      name: "Men Grooming",
      desc: "Beardo Godfather Beard Oil & Wash Combo",
      offer: "Min. 50% Off",
      price: 499,
      originalPrice: 900,
      discount: "45% OFF",
      rating: 4.8,
      img: "/images/deal-mencare.jpg",
      tag: "ALPHA CARE",
    },
    {
      id: "skin-4",
      name: "Hair Oil",
      desc: "Parachute Advansed Aloe Vera Coconut Hair Oil",
      offer: "Min. 50% Off",
      price: 199,
      originalPrice: 270,
      discount: "26% OFF",
      rating: 4.8,
      img: "/images/deal-hairoil.jpg",
      tag: "SILK NOURISH",
    },
    {
      id: "skin-5",
      name: "Vitamin C Serum",
      desc: "Garnier Bright Complete 30x Vitamin C Face Booster",
      offer: "Min. 40% Off",
      price: 449,
      originalPrice: 699,
      discount: "36% OFF",
      rating: 4.7,
      img: "/images/deal-facewash.jpg",
      tag: "GLOW SPOTLIGHT",
    },
    {
      id: "skin-6",
      name: "Sunscreen Gel",
      desc: "Aqualogica Radiance Dewy Sunscreen SPF 50+ PA++++",
      offer: "Min. 30% Off",
      price: 299,
      originalPrice: 399,
      discount: "25% OFF",
      rating: 4.9,
      img: "/images/deal-facewash.jpg",
      tag: "UV SHIELD",
    },
    {
      id: "skin-7",
      name: "Onion Hair Mask",
      desc: "Mamaearth Onion Hair Mask with Organic Bamboo",
      offer: "Min. 35% Off",
      price: 399,
      originalPrice: 599,
      discount: "33% OFF",
      rating: 4.7,
      img: "/images/deal-hairoil.jpg",
      tag: "HAIR REPAIR",
    },
    {
      id: "skin-8",
      name: "Rose Water Toner",
      desc: "Dabur Gulabari Premium 100% Pure Natural Rose Water",
      offer: "Min. 25% Off",
      price: 149,
      originalPrice: 199,
      discount: "25% OFF",
      rating: 4.8,
      img: "/images/deal-facewash.jpg",
      tag: "PORE TIGHTEN",
    },
    {
      id: "skin-9",
      name: "Body Lotion",
      desc: "Nivea Nourishing Cocoa Butter Deep Moisture 48H",
      offer: "Min. 40% Off",
      price: 299,
      originalPrice: 499,
      discount: "40% OFF",
      rating: 4.8,
      img: "/images/deal-mencare.jpg",
      tag: "DEEP HYDRATION",
    },
    {
      id: "skin-10",
      name: "Coffee Body Scrub",
      desc: "mCaffeine Espresso Arabica Coffee Body Scrub",
      offer: "Min. 35% Off",
      price: 339,
      originalPrice: 550,
      discount: "38% OFF",
      rating: 4.7,
      img: "/images/deal-mencare.jpg",
      tag: "EXFOLIATE",
    },
    {
      id: "skin-11",
      name: "Lip Sleeping Mask",
      desc: "Biotique Berry Lip Balm Plumping Overnight Mask",
      offer: "Min. 45% Off",
      price: 175,
      originalPrice: 320,
      discount: "45% OFF",
      rating: 4.7,
      img: "/images/deal-hairclips.jpg",
      tag: "LIP REPAIR",
    },
    {
      id: "skin-12",
      name: "Aloe Vera Gel",
      desc: "Patanjali Kesh Kanti 100% Pure Aloe Vera Gel 300g",
      offer: "Min. 30% Off",
      price: 110,
      originalPrice: 155,
      discount: "30% OFF",
      rating: 4.8,
      img: "/images/deal-facewash.jpg",
      tag: "PURE SOOTHE",
    },
    {
      id: "skin-13",
      name: "Hair Growth Serum",
      desc: "BBLUNT Pro Intense Hair Growth Scalp Serum",
      offer: "Min. 40% Off",
      price: 539,
      originalPrice: 899,
      discount: "40% OFF",
      rating: 4.6,
      img: "/images/deal-hairoil.jpg",
      tag: "ROOT VITAL",
    },
    {
      id: "skin-14",
      name: "Under Eye Cream",
      desc: "The Derma Co 5% Caffeine Under Eye Serum Cream",
      offer: "Min. 35% Off",
      price: 319,
      originalPrice: 499,
      discount: "36% OFF",
      rating: 4.6,
      img: "/images/deal-facewash.jpg",
      tag: "DARK CIRCLES",
    },
    {
      id: "skin-15",
      name: "Satin Scrunchies",
      desc: "Mulberry Silk Touch Pastel Hair Scrunchies (Pack of 6)",
      offer: "Min. 60% Off",
      price: 199,
      originalPrice: 499,
      discount: "60% OFF",
      rating: 4.9,
      img: "/images/deal-hairclips.jpg",
      tag: "ANTI FRIZZ",
    },
  ];

  // ==========================================
  // 12. BEST VALUE DEALS ON FASHION (15 Items)
  // ==========================================


  const FASHION_DEALS = [
    {
      id: "fashion-1",
      name: "Casual Sneakers",
      desc: "Sparx White Lightweight Urban Streetwear Sneakers",
      offer: "Min. 50% Off",
      price: 899,
      originalPrice: 1599,
      discount: "44% OFF",
      rating: 4.7,
      img: "/images/deal-sneakers.jpg",
      tag: "STREET CHIC",
    },
    {
      id: "fashion-2",
      name: "Ethnic Wear / Sarees",
      desc: "Kanjivaram Woven Art Silk Jacquard Festive Saree",
      offer: "Min. 50% Off",
      price: 1299,
      originalPrice: 3999,
      discount: "67% OFF",
      rating: 4.8,
      img: "/images/deal-anarkali.jpg",
      tag: "ROYAL HERITAGE",
    },
    {
      id: "fashion-3",
      name: "Sports Shoes",
      desc: "Campus Running Shoes with Air Cushion Insole",
      offer: "Min. 50% Off",
      price: 999,
      originalPrice: 2199,
      discount: "53% OFF",
      rating: 4.7,
      img: "/images/deal-running.jpg",
      tag: "SPRINT COMFORT",
    },
    {
      id: "fashion-4",
      name: "Party Gowns & Dresses",
      desc: "Maxi Cocktail Flared Party Gown with Georgette Drape",
      offer: "Min. 50% Off",
      price: 1499,
      originalPrice: 3999,
      discount: "63% OFF",
      rating: 4.8,
      img: "/images/deal-gown.jpg",
      tag: "RED CARPET",
    },
    {
      id: "fashion-5",
      name: "Men's Polo T-Shirt",
      desc: "Peter England Pique Cotton Solid Slim Fit Polo",
      offer: "Min. 45% Off",
      price: 499,
      originalPrice: 999,
      discount: "50% OFF",
      rating: 4.7,
      img: "/images/deal-sneakers.jpg",
      tag: "WEEKEND CLASSIC",
    },
    {
      id: "fashion-6",
      name: "Anarkali Kurta Set",
      desc: "Floral Embroidered Flared Anarkali Kurti with Dupatta",
      offer: "Min. 55% Off",
      price: 1499,
      originalPrice: 3999,
      discount: "63% OFF",
      rating: 4.8,
      img: "/images/deal-anarkali.jpg",
      tag: "ETHNIC GRACE",
    },
    {
      id: "fashion-7",
      name: "Formal Leather Shoes",
      desc: "Bata Derby Formal Oxford Leather Lace-up Shoes",
      offer: "Min. 40% Off",
      price: 1399,
      originalPrice: 2499,
      discount: "44% OFF",
      rating: 4.7,
      img: "/images/deal-shoes.jpg",
      tag: "EXECUTIVE LUXE",
    },
    {
      id: "fashion-8",
      name: "Denim Jeans",
      desc: "Roadster Men Slim Tapered Stretch Denim Jeans",
      offer: "Min. 50% Off",
      price: 899,
      originalPrice: 2099,
      discount: "57% OFF",
      rating: 4.6,
      img: "/images/deal-sneakers.jpg",
      tag: "ALL-DAY DENIM",
    },
    {
      id: "fashion-9",
      name: "Analog Chrono Watch",
      desc: "Titan Minimalist Quartz Leather Strap Men's Watch",
      offer: "Min. 45% Off",
      price: 1999,
      originalPrice: 3995,
      discount: "50% OFF",
      rating: 4.8,
      img: "/images/deal-watch.jpg",
      tag: "TIMELESS STATEMENT",
    },
    {
      id: "fashion-10",
      name: "Handbag & Sling Combo",
      desc: "Lavie Faux Leather Structured Shoulder Tote Bag",
      offer: "Min. 60% Off",
      price: 1399,
      originalPrice: 3990,
      discount: "65% OFF",
      rating: 4.8,
      img: "/images/deal-garmentbox.jpg",
      tag: "URBAN ELEGANTE",
    },
    {
      id: "fashion-11",
      name: "Gym Dry-Fit T-Shirt",
      desc: "HRX Activewear Moisture-Wicking Athletic Tee",
      offer: "Min. 50% Off",
      price: 549,
      originalPrice: 1199,
      discount: "54% OFF",
      rating: 4.7,
      img: "/images/deal-running.jpg",
      tag: "WORKOUT GEAR",
    },
    {
      id: "fashion-12",
      name: "Chiffon Dupatta",
      desc: "Banarasi Zari Border Floral Chiffon Stole Dupatta",
      offer: "Min. 60% Off",
      price: 249,
      originalPrice: 799,
      discount: "69% OFF",
      rating: 4.8,
      img: "/images/deal-anarkali.jpg",
      tag: "FESTIVE DRAPE",
    },
    {
      id: "fashion-13",
      name: "Aviator Sunglasses",
      desc: "Fastrack Polarized UV400 Metal Frame Sunglasses",
      offer: "Min. 50% Off",
      price: 799,
      originalPrice: 1699,
      discount: "53% OFF",
      rating: 4.7,
      img: "/images/deal-watch.jpg",
      tag: "SUN PROTECTION",
    },
    {
      id: "fashion-14",
      name: "Cotton Nightwear Set",
      desc: "Printed Button-Down Top & Pyjama Loungewear Set",
      offer: "Min. 55% Off",
      price: 749,
      originalPrice: 1799,
      discount: "58% OFF",
      rating: 4.7,
      img: "/images/deal-gown.jpg",
      tag: "COZY SLUMBER",
    },
    {
      id: "fashion-15",
      name: "Straight Kurta & Trousers",
      desc: "Aurelia Rayon Printed Straight Kurta & Pant Ensemble",
      offer: "Min. 60% Off",
      price: 999,
      originalPrice: 2499,
      discount: "60% OFF",
      rating: 4.8,
      img: "/images/deal-anarkali.jpg",
      tag: "EVERYDAY GLAM",
    },
  ];

  // SuperSaver Grocery Products (Grocery products only)
  const filteredProducts = PRODUCTS.filter((p) => {
    if (p.category !== "grocery") return false;
    if (filterQuery) {
      const q = filterQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.pack.toLowerCase().includes(q) ||
        (p.brand && p.brand.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const CATEGORY_MAP = {
    all: "all",
    fashion: "fashion-deals",
    mobiles: "gadgets",
    electronics: "electronics",
    beauty: "skincare-haircare",
    home: "furniture",
    appliances: "gadgets-appliances",
    toys: "popular-nearby",
    grocery: "grocery",
    auto: "gadgets",
    sports: "wishlist",
    furniture: "furniture",
    books: "top-value",
  };

  const handleSubCategoryClick = (catId, label) => {
    setActiveSubCategory(catId);
    const targetCategory = CATEGORY_MAP[catId] || "all";
    if (catId === "all") {
      showToast("Showing All Recommended Products");
    } else {
      showToast(`Showing ${label || catId} Products`);
      if (onNavigate) {
        onNavigate("catalogue", targetCategory);
      }
    }
  };

  return (
    <main className="w-full bg-[#f8fafc] ambient-mesh min-h-screen pb-24 sm:pb-16 text-neutral-900">
      <div className="flex flex-col w-full max-w-[1480px] mx-auto px-2 sm:px-4 md:px-margin pt-2 sm:pt-3">
        {/* ========================================================= */}
        {/* 1. TOP SUB-CATEGORY TABS RIBBON (Matching Reference Image) */}
        {/* ========================================================= */}
        <div className="w-full overflow-x-auto scrollbar-none py-1.5 mb-2 sm:mb-3">
          <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap min-w-max">
            {TOP_SUB_CATEGORIES.map((tab) => {
              const isActive = activeSubCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSubCategoryClick(tab.id, tab.label)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${isActive
                      ? "bg-neutral-950 text-white shadow-xs"
                      : "glass-pill text-neutral-700 hover:text-neutral-950 hover:bg-white"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. FOUR-CARD HERO CAROUSEL (Seamless Infinite Slider)     */}
        {/* ========================================================= */}
        <section
          className="w-full mb-4 relative select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card Viewport and Centered Arrow Buttons Wrapper */}
          <div className="relative w-full">
            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={handlePrevSlide}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-neutral-900 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-black/10 backdrop-blur-md"
              title="Previous deal"
              aria-label="Previous Slide"
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[22px] font-bold select-none leading-none">
                chevron_left
              </span>
            </button>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={handleNextSlide}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-neutral-900 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-black/10 backdrop-blur-md"
              title="Next deal"
              aria-label="Next Slide"
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[22px] font-bold select-none leading-none">
                chevron_right
              </span>
            </button>

            {/* Sliding Track Viewport */}
            <div
              className="overflow-hidden w-full rounded-2xl sm:rounded-3xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                onTransitionEnd={handleTransitionEnd}
                className="flex"
                style={{
                  transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                  transition: isTransitioning
                    ? "transform 450ms cubic-bezier(0.25, 1, 0.5, 1)"
                    : "none",
                }}
              >
                {EXTENDED_SLIDES.map((slide, idx) => (
                  <div
                    key={`${slide.id}-${idx}`}
                    style={{ width: `${100 / slidesPerView}%` }}
                    className="shrink-0 p-1"
                  >
                    <div
                      onClick={() => {
                        const targetId = slide.id === "boat-anc" ? "boat-141-anc" : slide.id;
                        if (onViewProduct) {
                          onViewProduct(targetId);
                        } else {
                          onNavigate("product");
                        }
                      }}
                      className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br ${slide.bgGradient} text-white p-4 sm:p-5 flex flex-col justify-between h-44 sm:h-52 shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer group/card border border-white/10`}
                    >
                      {/* Top Badge */}
                      <div className="flex items-center justify-between z-10">
                        <span className="text-[10px] font-black tracking-wider uppercase bg-black/30 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          {slide.tag}
                        </span>
                        <span className="text-[11px] font-bold text-amber-200">
                          {slide.badge}
                        </span>
                      </div>

                      {/* Price & Description */}
                      <div className="z-10 mt-auto">
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                          {slide.priceText}
                        </h3>
                        <p className="text-[11px] text-white/90 line-clamp-1 font-medium mt-0.5">
                          {slide.subtext}
                        </p>
                      </div>

                      {/* Background Hero Image */}
                      <div className="absolute right-0 bottom-0 top-0 w-1/2 flex items-center justify-end overflow-hidden opacity-90 group-hover/card:scale-105 transition-transform duration-500 pointer-events-none">
                        <img
                          src={slide.image}
                          alt={slide.badge}
                          className="h-full w-full object-cover object-center"
                          onError={(e) => {
                            e.currentTarget.src = "/images/hero-banner.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-2.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleDotClick(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeDotIndex === i
                    ? "w-6 bg-neutral-900"
                    : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. TRENDING DEALS ON FURNITURE (4-Column Layout as Mockup) */}
        {/* ========================================================= */}
        <section ref={furnitureSectionRef} className="w-full mb-6">
          <div
            onClick={() => {
              if (!isFurnitureExpanded) {
                expandSection("furniture");
              }
            }}
            className={`bg-[#e4e7fc] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 border border-[#d2d7f8] shadow-xs transition-all duration-500 ${!isFurnitureExpanded ? "cursor-pointer" : ""
              }`}
          >
            {/* Header matching mockup */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleExpandedSection("furniture");
              }}
              className="flex items-center justify-between mb-5 sm:mb-7 px-1 sm:px-2 cursor-pointer select-none"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
                Trending Deals on Furniture
              </h2>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpandedSection("furniture");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                title={isFurnitureExpanded ? "Collapse Deals" : "Expand All 15 Deals"}
                aria-label={isFurnitureExpanded ? "Collapse Deals" : "Expand All 15 Deals"}
              >
                <span
                  className={`material-symbols-outlined text-[18px] sm:text-[22px] transition-transform duration-300 ${isFurnitureExpanded ? "rotate-90" : "rotate-0"
                    }`}
                >
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 4-Column Responsive Grid (2 cols on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 transition-all duration-500">
              {(isFurnitureExpanded ? TRENDING_FURNITURE : TRENDING_FURNITURE.slice(0, 4)).map((item) => (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onViewProduct) {
                      onViewProduct(item.id, null, { expandedSection: activeExpandedSection });
                    } else {
                      onNavigate("product");
                    }
                  }}
                  className="glass-card rounded-2xl sm:rounded-[28px] p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 border border-black/[0.04] group cursor-pointer active:scale-[0.98]"
                >
                  {/* Large Rounded Product Img Area (Matching User Mockup) */}
                  <div className="w-full aspect-square rounded-[20px] sm:rounded-[22px] overflow-hidden bg-[#e5e9f2]/70 flex items-center justify-center mb-3.5 relative border border-black/[0.04]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/images/deal-shoerack.jpg";
                      }}
                    />
                    <span className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs">
                      {item.discount}
                    </span>
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5">
                      ★ {item.rating}
                    </span>
                  </div>

                  {/* Product Details Area Below Image */}
                  <div className="flex flex-col flex-1 px-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 line-clamp-1 leading-snug group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-black/[0.05] flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black text-emerald-600">
                        {item.offer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. FULL-WIDTH BANNER: FLASH SALE FLIGHTS (Reference Image)*/}
        {/* ========================================================= */}
        <section ref={flightBannerRef} className="w-full mb-4">
          <div
            onClick={() => onNavigate("catalogue")}
            className="w-full rounded-2xl sm:rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-soft cursor-pointer group overflow-hidden relative border border-sky-300/30"
          >
            <div className="flex flex-col z-10 text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-yellow-400 text-neutral-950 font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    bolt
                  </span>
                  FLASH SALE
                </span>
                <span className="text-xs font-semibold text-sky-100 hidden sm:inline">
                  Indigo Flights &amp; Express Bookings
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                Flat 15% Off on Flight bookings
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="bg-neutral-900/60 backdrop-blur-sm text-sky-200 px-2.5 py-0.5 rounded-lg text-[10px] sm:text-xs font-bold font-mono">
                  2-3 PM
                </span>
                <span className="bg-neutral-900/60 backdrop-blur-sm text-sky-200 px-2.5 py-0.5 rounded-lg text-[10px] sm:text-xs font-bold font-mono">
                  8-9 PM
                </span>
                <span className="bg-neutral-900/60 backdrop-blur-sm text-sky-200 px-2.5 py-0.5 rounded-lg text-[10px] sm:text-xs font-bold font-mono">
                  10 PM-12 AM
                </span>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-36 sm:w-52 h-20 sm:h-24 overflow-hidden flex items-center justify-center">
              <img
                src="/images/banner-flight.jpg"
                alt="Flash Sale Flight"
                className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. ADD TO YOUR WISHLIST (Expandable 4-Column Layout)      */}
        {/* ========================================================= */}
        <section ref={wishlistSectionRef} className="w-full mb-6">
          <div
            onClick={() => {
              if (!isWishlistExpanded) {
                expandSection("wishlist");
              }
            }}
            className={`bg-[#eaf7f2] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 border border-[#d2efe3] shadow-xs transition-all duration-500 ${!isWishlistExpanded ? "cursor-pointer" : ""
              }`}
          >
            {/* Header matching furniture section & reference image */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleExpandedSection("wishlist");
              }}
              className="flex items-center justify-between mb-5 sm:mb-7 px-1 sm:px-2 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="material-symbols-outlined text-[24px] sm:text-[30px] text-rose-500 fill">
                  favorite
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
                  Add to your wishlist
                </h2>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpandedSection("wishlist");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                title={isWishlistExpanded ? "Collapse Wishlist Deals" : "Expand All 15 Wishlist Deals"}
                aria-label={isWishlistExpanded ? "Collapse Wishlist Deals" : "Expand All 15 Wishlist Deals"}
              >
                <span
                  className={`material-symbols-outlined text-[18px] sm:text-[22px] transition-transform duration-300 ${isWishlistExpanded ? "rotate-90" : "rotate-0"
                    }`}
                >
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 4-Column Responsive Grid (No Prices on Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 transition-all duration-500">
              {(isWishlistExpanded ? TRENDING_WISHLIST : TRENDING_WISHLIST.slice(0, 4)).map((item) => (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onViewProduct) {
                      onViewProduct(item.id, null, { expandedSection: activeExpandedSection });
                    } else {
                      onNavigate("product");
                    }
                  }}
                  className="glass-card rounded-2xl sm:rounded-[28px] p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 group cursor-pointer active:scale-[0.98]"
                >
                  {/* Large Rounded Product Image */}
                  <div className="w-full aspect-square rounded-[20px] sm:rounded-[22px] overflow-hidden bg-white/70 flex items-center justify-center mb-3.5 relative border border-black/[0.03]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/images/deal-apparel.jpg";
                      }}
                    />
                    <span className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs">
                      {item.discount}
                    </span>
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5">
                      ★ {item.rating}
                    </span>
                  </div>

                  {/* Product Details Area (No Prices) */}
                  <div className="flex flex-col flex-1 px-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 line-clamp-1 leading-snug group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-black/[0.05] flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black text-emerald-600">
                        {item.offer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ========================================================= */}
        {/* 7. TOP VALUE DEALS HIGHLIGHT CARD (Expandable Layout)     */}
        {/* ========================================================= */}
        <section ref={valueDealsSectionRef} className="w-full mb-6">
          <div
            onClick={() => {
              if (!isValueDealsExpanded) {
                expandSection("valueDeals");
              }
            }}
            className={`bg-[#fff1d2] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 border border-[#fee4ab] shadow-xs transition-all duration-500 ${!isValueDealsExpanded ? "cursor-pointer" : ""
              }`}
          >
            {/* Header matching furniture & wishlist sections */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleExpandedSection("valueDeals");
              }}
              className="flex items-center justify-between mb-5 sm:mb-7 px-1 sm:px-2 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="material-symbols-outlined text-[24px] sm:text-[30px] text-amber-600 fill">
                  local_fire_department
                </span>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
                    Top Value Deals
                  </h2>
                  <span className="bg-amber-400 text-amber-950 font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-xs">
                    VALUE ZONE
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpandedSection("valueDeals");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                title={isValueDealsExpanded ? "Collapse Value Deals" : "Expand All 15 Value Deals"}
                aria-label={isValueDealsExpanded ? "Collapse Value Deals" : "Expand All 15 Value Deals"}
              >
                <span
                  className={`material-symbols-outlined text-[18px] sm:text-[22px] transition-transform duration-300 ${isValueDealsExpanded ? "rotate-90" : "rotate-0"
                    }`}
                >
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 4-Column Responsive Grid (4 in collapsed, 15 in expanded) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 transition-all duration-500">
              {(isValueDealsExpanded ? TOP_VALUE_DEALS : TOP_VALUE_DEALS.slice(0, 4)).map((item) => (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onViewProduct) {
                      onViewProduct(item.id, null, { expandedSection: activeExpandedSection });
                    } else {
                      onNavigate("product");
                    }
                  }}
                  className="glass-card rounded-2xl sm:rounded-[28px] p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 border border-amber-200/50 hover:border-amber-400 group cursor-pointer active:scale-[0.98]"
                >
                  {/* Large Rounded Product Image Area */}
                  <div className="w-full aspect-square rounded-[20px] sm:rounded-[22px] overflow-hidden bg-white/70 flex items-center justify-center mb-3.5 relative border border-amber-100/80">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/images/deal-earrings.jpg";
                      }}
                    />
                    <span className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs">
                      {item.discount}
                    </span>
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5">
                      ★ {item.rating}
                    </span>
                  </div>

                  {/* Product Details Area (No Prices) */}
                  <div className="flex flex-col flex-1 px-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-amber-800/70 mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 line-clamp-1 leading-snug group-hover:text-amber-800 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-amber-200/40 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black text-emerald-600">
                        {item.offer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. BRANDS IN SPOTLIGHT (Matching Reference Image)         */}
        {/* ========================================================= */}
        <section ref={brandsSectionRef} className="w-full mb-4">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <h2 className="text-sm sm:text-base font-black text-neutral-900">
              Brands in Spotlight
            </h2>
            <button
              onClick={() => onNavigate("brands-spotlight")}
              className="text-xs font-bold text-neutral-600 hover:text-neutral-950 flex items-center gap-1 cursor-pointer"
            >
              <span>See all</span>
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                brand: "BOAT",
                headline: "SALE",
                tagline: "UP TO 80% OFF",
                subtitle: "BEAST™ MODE 60ms",
                features: [
                  "Active Noise Cancellation (32dB)",
                  "42 Hours Total Playback",
                  "ENx™ Quad Mics for Crisp Calls",
                  "ASAP™ Charge (10 Mins = 10 Hours)",
                  "BEAST™ Ultra-Low Latency Mode",
                ],
                title: "boAt Airdopes 141 ANC",
                offer: "Up to 80% Off",
                sub: "Beast Mode Gaming Edition",
                img: "/images/boat-black-1.jpg",
                id: "boat-141-anc",
                variantName: "Gunmetal Black",
                accentColor: "#fbbf24",
                cardBg: "from-[#22242a] to-[#16171b]",
                borderColor: "border-amber-400/30",
              },
              {
                brand: "SONY",
                headline: "ANC",
                tagline: "STUDIO SOUND 40% OFF",
                subtitle: "WH-1000XM5 FLAGSHIP MASTER",
                features: [
                  "Industry-Leading Noise Cancellation",
                  "Dual Processor V1 + HD QN1 Chip",
                  "30-Hour Ultra Battery Life",
                  "LDAC High-Resolution Studio Codec",
                  "Multipoint 2-Device Seamless Sync",
                ],
                title: "Sony WH-1000XM5 Headphones",
                offer: "Flat 23% Off",
                sub: "Industry-Leading Studio ANC",
                img: "/images/headphones-black.jpg",
                id: "sony-wh1000xm5",
                variantName: "Silver Black",
                accentColor: "#38bdf8",
                cardBg: "from-[#141a26] to-[#070a10]",
                borderColor: "border-sky-400/30",
              },
              {
                brand: "BOAT",
                headline: "SALE",
                tagline: "UP TO 80% OFF",
                subtitle: "PURE WHITE CERAMIC",
                features: [
                  "Pure White Aesthetic Edition",
                  "Active Noise Cancellation (32dB)",
                  "42 Hours Total Playback",
                  "Dual EQ Signature boAt Sound",
                  "IPX5 Sweat & Splash Resistance",
                ],
                title: "boAt Wireless Audio",
                offer: "Up to 80% Off",
                sub: "Pure White Aesthetic Edition",
                img: "/images/boat-white-1.jpg",
                id: "boat-141-anc",
                variantName: "Pure White",
                accentColor: "#fde047",
                cardBg: "from-[#282a32] to-[#1b1d24]",
                borderColor: "border-yellow-300/30",
              },
              {
                brand: "FIRE-BOLTT",
                headline: "PRO",
                tagline: "FLAT 70% OFF",
                subtitle: "ULTRA LUXURY CHRONOGRAPH",
                features: [
                  "1.43\" Ultra AMOLED Always-On Display",
                  "Bluetooth Calling with AI Voice Assistant",
                  "120+ Sports Tracking Modes",
                  "Stainless Steel High-Luster Bezel",
                ],
                title: "Fire-Boltt Phoenix Ultra",
                offer: "Flat 78% Off",
                sub: "AMOLED Luxury Chronograph",
                img: "/images/smartwatch-black.jpg",
                id: "fireboltt-smartwatch",
                variantName: "Stealth Black",
                accentColor: "#fb923c",
                cardBg: "from-[#2b1f17] to-[#110a06]",
                borderColor: "border-orange-400/30",
              },
              {
                brand: "AGARO",
                headline: "AUTO",
                tagline: "UP TO 60% OFF",
                subtitle: "150 PSI AUTO-STOP",
                features: [
                  "150 PSI High Pressure Auto-Stop",
                  "Backlit Digital LCD Gauge",
                  "Emergency LED Flashlight Torch",
                  "Includes 3 Multi-Nozzle Adaptors",
                  "Compact Car & Bike Portability",
                ],
                title: "Portable tyre inflator",
                offer: "Up to 60% Off",
                sub: "Smart auto 150 PSI inflator",
                img: "/images/deal-inflator.jpg",
                id: "val-8",
                variantName: "Standard 12V DC",
                accentColor: "#f59e0b",
                cardBg: "from-[#272018] to-[#1a140f]",
                borderColor: "border-amber-500/35",
              },
              {
                brand: "ONEPLUS",
                headline: "BASS",
                tagline: "UP TO 55% OFF",
                subtitle: "NORD BUDS 2R NEVER SETTLE",
                features: [
                  "12.4mm Extra Bass Titanium Drivers",
                  "Dual Mic AI Noise Cancellation",
                  "38 Hours Battery with Flash Charge",
                  "IP55 Water & Sweat Resistance",
                ],
                title: "OnePlus Nord Buds 2r",
                offer: "Min. 33% Off",
                sub: "12.4mm Extra Bass Titanium",
                img: "/images/oneplus-1.jpg",
                id: "oneplus-nord-buds",
                variantName: "Deep Grey",
                accentColor: "#06b6d4",
                cardBg: "from-[#11222c] to-[#050e14]",
                borderColor: "border-cyan-400/30",
              },
            ].map((b, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (b.id && onViewProduct) {
                    onViewProduct(b.id, b, { expandedSection: activeExpandedSection });
                  } else {
                    onNavigate("catalogue");
                  }
                }}
                className={`bg-gradient-to-r ${b.cardBg} text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-soft hover:shadow-soft-lg cursor-pointer group transition-all border ${b.borderColor} hover:scale-[1.02] hover:-translate-y-0.5`}
              >
                <div className="flex flex-col text-left">
                  <span
                    className="text-xs font-black uppercase tracking-wider"
                    style={{ color: b.accentColor }}
                  >
                    {b.brand}
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-white mt-1 group-hover:text-amber-200 transition-colors">
                    {b.offer}
                  </h4>
                  <span className="text-[11px] text-neutral-300 mt-0.5">
                    {b.sub}
                  </span>
                </div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white/10 p-2 overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. POPULAR NEARBY (15-Min Express Pod - Expandable)       */}
        {/* ========================================================= */}
        <section ref={nearbySectionRef} className="w-full mb-6">
          <div
            onClick={() => {
              if (!isNearbyExpanded) {
                expandSection("nearby");
              }
            }}
            className={`bg-[#ecfdf5] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 border border-[#a7f3d0] shadow-xs transition-all duration-500 ${!isNearbyExpanded ? "cursor-pointer" : ""
              }`}
          >
            {/* Header */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleExpandedSection("nearby");
              }}
              className="flex items-center justify-between mb-5 sm:mb-7 px-1 sm:px-2 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="material-symbols-outlined text-[24px] sm:text-[30px] text-emerald-600 fill">
                  bolt
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
                    Popular Nearby
                  </h2>
                  <span className="bg-emerald-600 text-white font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">bolt</span>
                    15-MIN EXPRESS
                  </span>
                  <span className="text-[11px] font-bold text-emerald-800 hidden sm:inline-flex items-center gap-1 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Darkstore Active • Direct Delivery
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpandedSection("nearby");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                title={isNearbyExpanded ? "Collapse Popular Nearby" : "Expand All 15 Fresh Products"}
                aria-label={isNearbyExpanded ? "Collapse Popular Nearby" : "Expand All 15 Fresh Products"}
              >
                <span
                  className={`material-symbols-outlined text-[18px] sm:text-[22px] transition-transform duration-300 ${isNearbyExpanded ? "rotate-90" : "rotate-0"
                    }`}
                >
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 4-Column Responsive Grid (4 in collapsed, 15 in expanded) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 transition-all duration-500">
              {(isNearbyExpanded ? POPULAR_NEARBY_DEALS : POPULAR_NEARBY_DEALS.slice(0, 4)).map((item) => (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onViewProduct) {
                      onViewProduct(item.id, null, { expandedSection: activeExpandedSection });
                    } else {
                      onNavigate("product");
                    }
                  }}
                  className="glass-card rounded-2xl sm:rounded-[28px] p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 border border-emerald-200/60 hover:border-emerald-500 group cursor-pointer active:scale-[0.98]"
                >
                  {/* Large Rounded Product Image Area */}
                  <div className="w-full aspect-square rounded-[20px] sm:rounded-[22px] overflow-hidden bg-white/70 flex items-center justify-center mb-3.5 relative border border-emerald-100/80">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/images/lemons.jpg";
                      }}
                    />
                    <span className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs">
                      {item.discount}
                    </span>
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5">
                      ★ {item.rating}
                    </span>
                    <span className="absolute bottom-2.5 left-2.5 bg-emerald-600/95 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">bolt</span>
                      {item.delivery || "10 Mins"}
                    </span>
                  </div>

                  {/* Product Details Area */}
                  <div className="flex flex-col flex-1 px-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-800/70 mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 line-clamp-1 leading-snug group-hover:text-emerald-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-emerald-200/40 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black text-emerald-700 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] text-emerald-600">
                          schedule
                        </span>
                        {item.offer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 10. TRENDING GADGETS & APPLIANCES (Expandable Layout)     */}
        {/* ========================================================= */}
        <section ref={gadgetsSectionRef} className="w-full mb-6">
          <div
            onClick={() => {
              if (!isGadgetsExpanded) {
                expandSection("gadgets");
              }
            }}
            className={`bg-[#eef2ff] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 border border-[#c7d2fe] shadow-xs transition-all duration-500 ${!isGadgetsExpanded ? "cursor-pointer" : ""
              }`}
          >
            {/* Header */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleExpandedSection("gadgets");
              }}
              className="flex items-center justify-between mb-5 sm:mb-7 px-1 sm:px-2 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="material-symbols-outlined text-[24px] sm:text-[30px] text-indigo-600 fill">
                  devices_other
                </span>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
                    Trending Gadgets &amp; Appliances
                  </h2>
                  <span className="bg-indigo-600 text-white font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-xs">
                    TECH LOUNGE
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpandedSection("gadgets");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                title={isGadgetsExpanded ? "Collapse Gadgets" : "Expand All 15 Gadgets & Appliances"}
                aria-label={isGadgetsExpanded ? "Collapse Gadgets" : "Expand All 15 Gadgets & Appliances"}
              >
                <span
                  className={`material-symbols-outlined text-[18px] sm:text-[22px] transition-transform duration-300 ${isGadgetsExpanded ? "rotate-90" : "rotate-0"
                    }`}
                >
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 4-Column Responsive Grid (4 in collapsed, 15 in expanded) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 transition-all duration-500">
              {(isGadgetsExpanded ? TRENDING_GADGETS_DEALS : TRENDING_GADGETS_DEALS.slice(0, 4)).map((item) => (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onViewProduct) {
                      onViewProduct(item.id, null, { expandedSection: activeExpandedSection });
                    } else {
                      onNavigate("product");
                    }
                  }}
                  className="glass-card rounded-2xl sm:rounded-[28px] p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 border border-indigo-200/50 hover:border-indigo-400 group cursor-pointer active:scale-[0.98]"
                >
                  {/* Large Rounded Product Image Area */}
                  <div className="w-full aspect-square rounded-[20px] sm:rounded-[22px] overflow-hidden bg-indigo-50/50 flex items-center justify-center mb-3.5 relative border border-indigo-100/80">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/images/oneplus-1.jpg";
                      }}
                    />
                    <span className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs">
                      {item.discount}
                    </span>
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5">
                      ★ {item.rating}
                    </span>
                  </div>

                  {/* Product Details Area (No Prices) */}
                  <div className="flex flex-col flex-1 px-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-800/70 mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 line-clamp-1 leading-snug group-hover:text-indigo-800 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-indigo-200/40 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black text-emerald-600">
                        {item.offer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 11. HAIR & SKINCARE ESSENTIALS (Expandable Layout)        */}
        {/* ========================================================= */}
        <section ref={skincareSectionRef} className="w-full mb-6">
          <div
            onClick={() => {
              if (!isSkincareExpanded) {
                expandSection("skincare");
              }
            }}
            className={`bg-[#ecfdf5] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 border border-[#a7f3d0] shadow-xs transition-all duration-500 ${!isSkincareExpanded ? "cursor-pointer" : ""
              }`}
          >
            {/* Header */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleExpandedSection("skincare");
              }}
              className="flex items-center justify-between mb-5 sm:mb-7 px-1 sm:px-2 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="material-symbols-outlined text-[24px] sm:text-[30px] text-emerald-600 fill">
                  spa
                </span>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
                    Hair &amp; Skincare Essentials
                  </h2>
                  <span className="bg-emerald-600 text-white font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-xs">
                    GLOW SALON
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpandedSection("skincare");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                title={isSkincareExpanded ? "Collapse Skincare" : "Expand All 15 Hair & Skincare Essentials"}
                aria-label={isSkincareExpanded ? "Collapse Skincare" : "Expand All 15 Hair & Skincare Essentials"}
              >
                <span
                  className={`material-symbols-outlined text-[18px] sm:text-[22px] transition-transform duration-300 ${isSkincareExpanded ? "rotate-90" : "rotate-0"
                    }`}
                >
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 4-Column Responsive Grid (4 in collapsed, 15 in expanded) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 transition-all duration-500">
              {(isSkincareExpanded ? HAIR_SKINCARE_DEALS : HAIR_SKINCARE_DEALS.slice(0, 4)).map((item) => (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onViewProduct) {
                      onViewProduct(item.id, null, { expandedSection: activeExpandedSection });
                    } else {
                      onNavigate("product");
                    }
                  }}
                  className="glass-card rounded-2xl sm:rounded-[28px] p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 border border-emerald-200/50 hover:border-emerald-400 group cursor-pointer active:scale-[0.98]"
                >
                  {/* Large Rounded Product Image Area */}
                  <div className="w-full aspect-square rounded-[20px] sm:rounded-[22px] overflow-hidden bg-emerald-50/50 flex items-center justify-center mb-3.5 relative border border-emerald-100/80">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/images/deal-facewash.jpg";
                      }}
                    />
                    <span className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs">
                      {item.discount}
                    </span>
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5">
                      ★ {item.rating}
                    </span>
                  </div>

                  {/* Product Details Area (No Prices) */}
                  <div className="flex flex-col flex-1 px-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-800/70 mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 line-clamp-1 leading-snug group-hover:text-emerald-800 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-emerald-200/40 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black text-emerald-600">
                        {item.offer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 12. BEST VALUE DEALS ON FASHION (Expandable Layout)       */}
        {/* ========================================================= */}
        <section ref={fashionSectionRef} className="w-full mb-6">
          <div
            onClick={() => {
              if (!isFashionExpanded) {
                expandSection("fashion");
              }
            }}
            className={`bg-[#fdf2f8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 border border-[#fbcfe8] shadow-xs transition-all duration-500 ${!isFashionExpanded ? "cursor-pointer" : ""
              }`}
          >
            {/* Header */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleExpandedSection("fashion");
              }}
              className="flex items-center justify-between mb-5 sm:mb-7 px-1 sm:px-2 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="material-symbols-outlined text-[24px] sm:text-[30px] text-rose-600 fill">
                  styler
                </span>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
                    Best Value Deals on Fashion
                  </h2>
                  <span className="bg-rose-500 text-white font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-xs">
                    STYLE RUNWAY
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpandedSection("fashion");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                title={isFashionExpanded ? "Collapse Fashion Deals" : "Expand All 15 Fashion Deals"}
                aria-label={isFashionExpanded ? "Collapse Fashion Deals" : "Expand All 15 Fashion Deals"}
              >
                <span
                  className={`material-symbols-outlined text-[18px] sm:text-[22px] transition-transform duration-300 ${isFashionExpanded ? "rotate-90" : "rotate-0"
                    }`}
                >
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 4-Column Responsive Grid (4 in collapsed, 15 in expanded) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 transition-all duration-500">
              {(isFashionExpanded ? FASHION_DEALS : FASHION_DEALS.slice(0, 4)).map((item) => (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onViewProduct) {
                      onViewProduct(item.id, null, { expandedSection: activeExpandedSection });
                    } else {
                      onNavigate("product");
                    }
                  }}
                  className="glass-card rounded-2xl sm:rounded-[28px] p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 border border-rose-200/50 hover:border-rose-400 group cursor-pointer active:scale-[0.98]"
                >
                  {/* Large Rounded Product Image Area */}
                  <div className="w-full aspect-square rounded-[20px] sm:rounded-[22px] overflow-hidden bg-white/70 flex items-center justify-center mb-3.5 relative border border-rose-100/80">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/images/deal-sneakers.jpg";
                      }}
                    />
                    <span className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs">
                      {item.discount}
                    </span>
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5">
                      ★ {item.rating}
                    </span>
                  </div>

                  {/* Product Details Area (No Prices) */}
                  <div className="flex flex-col flex-1 px-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-rose-800/70 mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 line-clamp-1 leading-snug group-hover:text-rose-800 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-rose-200/40 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black text-emerald-600">
                        {item.offer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 13. 40-PRODUCT REEL: BROWSE CATALOGUE GRID                */}
        {/* ========================================================= */}
        <section id="grocery-reel" ref={groceryReelRef} className="w-full scroll-mt-28 mb-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-baseline gap-2">
              <h2 className="text-base sm:text-xl font-black text-neutral-900">
                SuperSaver Grocery
              </h2>
              <span className="text-xs text-emerald-700 font-bold hidden sm:inline bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                15-Min Instant Delivery
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() =>
                  onViewProduct
                    ? onViewProduct(product.id)
                    : onNavigate("product")
                }
                className="group glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-4 transition-all duration-300 flex flex-col justify-between relative cursor-pointer active:scale-[0.98]"
              >
                {/* Floating Discount Badge */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                  <span className="bg-amber-500 text-neutral-950 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-black shadow-xs">
                    {product.discount}
                  </span>
                  {product.badge && (
                    <span className="bg-neutral-950 text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-bold shadow-xs">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Top Right Wishlist Heart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full border flex items-center justify-center transition-all shadow-xs active:scale-90 ${isInWishlist(product.id)
                      ? "bg-rose-50 border-rose-300 text-red-500 shadow-sm"
                      : "bg-white/90 backdrop-blur-sm hover:bg-rose-50 border-neutral-200/60 text-neutral-400 hover:text-red-500"
                    }`}
                  title="Save to Wishlist"
                >
                  <span
                    className={`material-symbols-outlined text-[18px] ${isInWishlist(product.id) ? "text-red-500 fill" : ""}`}
                  >
                    favorite
                  </span>
                </button>

                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/70 flex items-center justify-center p-3 sm:p-4 mb-3 border border-black/[0.03]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 font-bold mb-1">
                      <span className="text-neutral-500 uppercase tracking-wider text-[10px]">
                        {product.brand || product.category}
                      </span>
                      <span className="flex items-center text-amber-500 font-black">
                        ★ {product.rating}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-[11px] text-neutral-500 mt-1">
                      {product.pack}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
