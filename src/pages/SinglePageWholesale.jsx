import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";
import WholesaleHero from "../components/WholesaleHero";
import ProductCard from "../components/ProductCard";
import CuratedCategoryGrid from "../components/CuratedCategoryGrid";
import {
  WHOLESALE_PRODUCTS,
  WHOLESALE_FAQS,
} from "../data/wholesaleData";

const NEXT_SECTION_MAP = {
  "all-products": "jewellery-accessories",
  "jewellery-accessories": "daily-necessities",
  "daily-necessities": "shop-by-category",
  "electronics-gadgets": "health-beauty",
  "health-beauty": "kitchen-dining",
  "kitchen-dining": "home-improvement",
  "home-improvement": "flash-deals",
};

// Reusable Category Section with 5-Product Initial Limit and View More / Show Less Toggle
function CategoryProductSection({
  id,
  title,
  subtitle,
  badge,
  icon,
  iconBg = "bg-primary/10 text-primary",
  products,
  isExpanded,
  onToggle,
  onQuickView,
}) {
  if (!products || products.length === 0) return null;

  const visibleProducts = isExpanded ? products : products.slice(0, 5);
  const hasMore = products.length > 5;
  const remainingCount = products.length - 5;

  return (
    <section id={id} className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin w-full pt-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          {icon && (
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
              <span className="material-symbols-outlined text-[20px]">{icon}</span>
            </div>
          )}
          <div>
            <h3 className="text-lg sm:text-xl font-black text-neutral-950 font-heading">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-neutral-500 font-medium">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {badge && (
            <span className="bg-neutral-100 text-neutral-700 font-bold text-[11px] px-2.5 py-1 rounded-full border border-neutral-200 hidden sm:inline">
              {badge}
            </span>
          )}

          {hasMore && (
            <button
              onClick={onToggle}
              className="text-xs font-bold text-neutral-700 hover:text-red-600 flex items-center gap-1 transition-colors cursor-pointer group"
            >
              <span>{isExpanded ? "Show Less (5 Only)" : `View all (${products.length})`}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                {isExpanded ? "expand_less" : "arrow_forward"}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Grid: Exactly 5 items per row on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4">
        {visibleProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onQuickView={onQuickView}
          />
        ))}
      </div>

      {/* View More / Show Less Bottom Button */}
      {hasMore && (
        <div className="flex justify-center mt-5">
          <button
            onClick={onToggle}
            className={`font-heading font-bold text-xs sm:text-[13px] px-6 py-2.5 rounded-full border shadow-2xs hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 group ${
              isExpanded
                ? "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-300"
                : "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-300 hover:border-neutral-400"
            }`}
          >
            <span>
              {isExpanded
                ? "Show Less (Collapse to 5)"
                : `View More (+${remainingCount} More Products)`}
            </span>
            <span
              className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                isExpanded
                  ? "group-hover:-translate-y-0.5 text-neutral-600"
                  : "group-hover:translate-y-0.5 text-neutral-500 group-hover:text-neutral-900"
              }`}
            >
              {isExpanded ? "expand_less" : "expand_more"}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}

export default function SinglePageWholesale({
  searchQuery,
  activeCategory,
  onSelectCategory,
  onQuickView,
}) {
  const [activePill, setActivePill] = useState("all");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Manage single expanded section with zero-disturbance auto-collapse on scroll to next section
  const [activeExpandedSection, setActiveExpandedSection] = useState(null);
  const collapseAnchorRef = useRef(null);

  // Helper to find the best visible anchor element so collapsing causes 0 visual shift
  const prepareAnchorLock = (collapsingSectionId, explicitAnchor = null) => {
    if (!collapsingSectionId) return;
    const currentEl = document.getElementById(collapsingSectionId);
    if (!currentEl) return;

    let anchorElement = explicitAnchor;
    if (!anchorElement) {
      const rect = currentEl.getBoundingClientRect();
      if (rect.top >= -50) {
        anchorElement = currentEl;
      } else {
        const sectionIds = [
          "all-products",
          "jewellery-accessories",
          "daily-necessities",
          "shop-by-category",
          "electronics-gadgets",
          "health-beauty",
          "kitchen-dining",
          "home-improvement",
          "flash-deals",
          "wholesale-faq",
        ];
        const idx = sectionIds.indexOf(collapsingSectionId);
        if (idx !== -1) {
          for (let i = idx + 1; i < sectionIds.length; i++) {
            const el = document.getElementById(sectionIds[i]);
            if (el) {
              const r = el.getBoundingClientRect();
              if (r.top >= -250 && r.top <= window.innerHeight) {
                anchorElement = el;
                break;
              }
            }
          }
        }
        if (!anchorElement) {
          const nextId = NEXT_SECTION_MAP[collapsingSectionId];
          anchorElement = (nextId && document.getElementById(nextId)) || currentEl;
        }
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

  const toggleSection = (sectionId) => {
    setActiveExpandedSection((prev) => {
      if (prev === sectionId) {
        // Collapsing currently open section
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < -50) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            prepareAnchorLock(sectionId, el);
          }
        }
        return null;
      } else {
        // Expanding a new section: if another was open, anchor target so it doesn't jump
        if (prev) {
          const targetEl = document.getElementById(sectionId);
          prepareAnchorLock(prev, targetEl);
        }
        return sectionId;
      }
    });
  };

  // Unified Scroll-to-Next-Section Auto-Close Handler:
  // When scrolling past an expanded section into the next section,
  // close the old section automatically without disturbing the scroll or website!
  useEffect(() => {
    if (!activeExpandedSection) return;

    let isTransitioning = false;

    const handleScroll = () => {
      if (isTransitioning) return;

      const currentEl = document.getElementById(activeExpandedSection);
      if (!currentEl) return;

      const rect = currentEl.getBoundingClientRect();

      // 1. When scrolling down past the expanded section into the next section
      if (rect.bottom < 50) {
        isTransitioning = true;
        prepareAnchorLock(activeExpandedSection);
        setActiveExpandedSection(null);
        return;
      }

      // 2. When scrolling up above the expanded section
      if (rect.top > window.innerHeight - 50) {
        isTransitioning = true;
        prepareAnchorLock(activeExpandedSection, currentEl);
        setActiveExpandedSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeExpandedSection]);

  // Reset top showcase expansion when filters change
  useEffect(() => {
    setActiveExpandedSection((prev) => (prev === "all-products" ? null : prev));
  }, [activePill, activeCategory, searchQuery]);

  // Filter pills matching Reference Image 1 bottom bar
  const FILTER_PILLS = [
    { id: "all", label: "All Wholesale" },
    { id: "jewellery-accessories", label: "Jewellery & Accessories", icon: "diamond" },
    { id: "daily-necessities", label: "Daily Necessities", icon: "shopping_basket" },
    { id: "electronics-gadgets", label: "Mobile & Electronics", icon: "devices" },
    { id: "health-beauty", label: "Health & Beauty", icon: "spa" },
    { id: "kitchen-dining", label: "Kitchen & Dining", icon: "restaurant" },
    { id: "home-improvement", label: "Home & Tools", icon: "construction" },
    { id: "festive", label: "Festive Specials", icon: "celebration" },
    { id: "under-1999", label: "Bulk Under ₹1,999" },
    { id: "cleaning", label: "Cleaning & Hygiene" },
    { id: "cooking", label: "Pantry & Edible Oils" },
    { id: "audio", label: "Audio & TWS Earbuds" },
    { id: "chargers", label: "Fast Chargers & Cables" },
  ];

  // Filtered products based on search query, activeCategory, and active pill
  const filteredProducts = useMemo(() => {
    return WHOLESALE_PRODUCTS.filter((prod) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          prod.name.toLowerCase().includes(query) ||
          prod.shortName.toLowerCase().includes(query) ||
          prod.category.toLowerCase().includes(query) ||
          prod.subCategory.toLowerCase().includes(query) ||
          prod.description.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Category filter from mega menu / header
      if (activeCategory && activeCategory !== "all") {
        if (prod.category !== activeCategory) return false;
      }

      // Pill filter
      if (activePill === "all") return true;
      if (activePill === "jewellery-accessories")
        return prod.category === "jewellery-accessories";
      if (activePill === "daily-necessities")
        return prod.category === "daily-necessities";
      if (activePill === "electronics-gadgets")
        return prod.category === "electronics-gadgets";
      if (activePill === "health-beauty")
        return prod.category === "health-beauty";
      if (activePill === "kitchen-dining")
        return prod.category === "kitchen-dining";
      if (activePill === "home-improvement")
        return prod.category === "home-improvement";
      if (activePill === "festive") return prod.packPrice < 5000;
      if (activePill === "under-1999") return prod.packPrice <= 1999;
      if (activePill === "cleaning")
        return prod.subCategory.toLowerCase().includes("cleaning");
      if (activePill === "cooking")
        return prod.subCategory.toLowerCase().includes("cooking");
      if (activePill === "audio")
        return prod.subCategory.toLowerCase().includes("audio");
      if (activePill === "chargers")
        return prod.subCategory.toLowerCase().includes("charging");

      return true;
    });
  }, [searchQuery, activeCategory, activePill]);

  // Section 1: Jewellery & Accessories (8 items)
  const jewelleryProducts = useMemo(() => {
    return WHOLESALE_PRODUCTS.filter(
      (p) => p.category === "jewellery-accessories"
    );
  }, []);

  // Section 2: Daily Life Necessities (10 items)
  const dailyNecessities = useMemo(() => {
    return WHOLESALE_PRODUCTS.filter(
      (p) => p.category === "daily-necessities"
    );
  }, []);

  // Section 3: Electronic Gadgets & Tech Accessories (10 items)
  const electronicGadgets = useMemo(() => {
    return WHOLESALE_PRODUCTS.filter(
      (p) => p.category === "electronics-gadgets"
    );
  }, []);

  // Section 4: Health & Beauty (7 items)
  const healthBeautyProducts = useMemo(() => {
    return WHOLESALE_PRODUCTS.filter(
      (p) => p.category === "health-beauty"
    );
  }, []);

  // Section 5: Kitchen & Dining (7 items)
  const kitchenDiningProducts = useMemo(() => {
    return WHOLESALE_PRODUCTS.filter(
      (p) => p.category === "kitchen-dining"
    );
  }, []);

  // Section 6: Home Improvement & Tools (6 items)
  const homeImprovementProducts = useMemo(() => {
    return WHOLESALE_PRODUCTS.filter(
      (p) => p.category === "home-improvement"
    );
  }, []);

  // Section 7: Flash Bulk Deals (Top 5 items)
  const flashDeals = useMemo(() => {
    return [
      WHOLESALE_PRODUCTS.find((p) => p.id === "boat-anc-carton-20"),
      WHOLESALE_PRODUCTS.find((p) => p.id === "surf-matic-25kg"),
      WHOLESALE_PRODUCTS.find((p) => p.id === "vacuum-flask-24pcs"),
      WHOLESALE_PRODUCTS.find((p) => p.id === "gan-charger-20pcs"),
      WHOLESALE_PRODUCTS.find((p) => p.id === "lizol-5l-crate"),
    ].filter(Boolean);
  }, []);

  const scrollToSection = (id) => {
    if (activeExpandedSection && activeExpandedSection !== id) {
      setActiveExpandedSection(null);
    }
    setTimeout(() => {
      const el = document.getElementById(id) || document.getElementById("all-products");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 10);
  };

  const isExpandedAll = activeExpandedSection === "all-products";
  const visibleFilteredProducts = isExpandedAll
    ? filteredProducts
    : filteredProducts.slice(0, 5);

  return (
    <div className="flex flex-col gap-6 sm:gap-8 pb-16 bg-[#f8fafc]">
      {/* 1. HERO SECTION (Matching Reference Image 1 with Category Sidebar + Carousel + 3 Value Cards) */}
      <div id="top">
        <WholesaleHero
          onSelectCategory={(catId) => {
            onSelectCategory(catId);
            scrollToSection(catId);
          }}
          onScrollToSection={scrollToSection}
        />
      </div>

      {/* 2. TRUST & WHOLESALE ASSURANCES BAR */}
      <section className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin w-full">
        <div className="bg-white rounded-2xl sm:rounded-full border border-neutral-200/90 py-3.5 px-6 sm:px-8 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
          {/* 1. Tax Invoiced */}
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/60 shadow-2xs group-hover:scale-115 group-hover:bg-blue-100 group-hover:border-blue-300 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.25)] transition-all duration-300">
              <span className="material-symbols-outlined text-[20px] group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300">
                receipt_long
              </span>
            </div>
            <div className="min-w-0">
              <h5 className="font-heading font-black text-xs sm:text-[13px] text-neutral-900 group-hover:text-blue-600 transition-colors leading-tight">
                100% Tax Invoiced
              </h5>
              <p className="text-[10.5px] sm:text-[11px] text-neutral-500 font-normal mt-0.5 truncate">
                Instant 18% GST Input Tax Credit
              </p>
            </div>
          </div>

          {/* 2. Heavy Cargo Logistics (Truck drives forward on hover!) */}
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/60 shadow-2xs group-hover:scale-115 group-hover:bg-emerald-100 group-hover:border-emerald-300 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] transition-all duration-300">
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1.5 group-hover:scale-110 transition-transform duration-300">
                local_shipping
              </span>
            </div>
            <div className="min-w-0">
              <h5 className="font-heading font-black text-xs sm:text-[13px] text-neutral-900 group-hover:text-emerald-600 transition-colors leading-tight">
                Heavy Cargo Logistics
              </h5>
              <p className="text-[10.5px] sm:text-[11px] text-neutral-500 font-normal mt-0.5 truncate">
                Liftgate doorstep delivery across India
              </p>
            </div>
          </div>

          {/* 3. No Mandatory MOQ (Box tilts and pops on hover!) */}
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100/60 shadow-2xs group-hover:scale-115 group-hover:bg-amber-100 group-hover:border-amber-300 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.25)] transition-all duration-300">
              <span className="material-symbols-outlined text-[20px] group-hover:rotate-12 group-hover:scale-115 transition-transform duration-300">
                inventory_2
              </span>
            </div>
            <div className="min-w-0">
              <h5 className="font-heading font-black text-xs sm:text-[13px] text-neutral-900 group-hover:text-amber-600 transition-colors leading-tight">
                No Mandatory MOQ
              </h5>
              <p className="text-[10.5px] sm:text-[11px] text-neutral-500 font-normal mt-0.5 truncate">
                Order 1 sample carton or full truckloads
              </p>
            </div>
          </div>

          {/* 4. Direct Factory Rates (Verified badge rotates on hover!) */}
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100/60 shadow-2xs group-hover:scale-115 group-hover:bg-rose-100 group-hover:border-rose-300 group-hover:shadow-[0_0_12px_rgba(244,63,94,0.25)] transition-all duration-300">
              <span className="material-symbols-outlined text-[20px] group-hover:rotate-12 group-hover:scale-115 transition-transform duration-300">
                verified
              </span>
            </div>
            <div className="min-w-0">
              <h5 className="font-heading font-black text-xs sm:text-[13px] text-neutral-900 group-hover:text-rose-600 transition-colors leading-tight">
                Direct Factory Rates
              </h5>
              <p className="text-[10.5px] sm:text-[11px] text-neutral-500 font-normal mt-0.5 truncate">
                Zero middlemen markup guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN PRODUCT SHOWCASE (Top Rated / Filtered Category Showcase) */}
      <section id="all-products" className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3 sm:mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                TOP RATED THIS SEASON
              </span>
              <span className="bg-red-600 text-white font-black text-[9px] uppercase px-2 py-0.5 rounded shadow-xs tracking-wider animate-pulse">
                SALE LIVE
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-950 tracking-tight font-heading">
              Shop Navratri &amp; Wholesale Essentials
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {filteredProducts.length > 5 && (
              <button
                onClick={() => toggleSection("all-products")}
                className="text-xs font-bold text-neutral-700 hover:text-red-600 flex items-center gap-1 transition-colors group cursor-pointer"
              >
                <span>
                  {isExpandedAll
                    ? "Show Less (5 Only)"
                    : `View all (${filteredProducts.length})`}
                </span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  {isExpandedAll ? "expand_less" : "arrow_forward"}
                </span>
              </button>
            )}

            <button
              onClick={() => {
                setActivePill("all");
                setActiveExpandedSection("all-products");
              }}
              className="text-xs font-bold text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer hidden md:inline"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Filter Pills Carousel (Matching Reference Image 1) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-5">
          {FILTER_PILLS.map((pill) => {
            const isActive = activePill === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setActivePill(pill.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? "bg-neutral-950 text-white shadow-sm ring-1 ring-neutral-900"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {pill.icon && (
                  <span className="material-symbols-outlined text-[14px]">
                    {pill.icon}
                  </span>
                )}
                <span>{pill.label}</span>
              </button>
            );
          })}
        </div>

        {/* PRODUCT GRID: EXACTLY 5 PRODUCT CARDS PER ROW ON DESKTOP */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4">
          {visibleFilteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* View More / Show Less for All-Products */}
        {filteredProducts.length > 5 && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => toggleSection("all-products")}
              className={`font-heading font-bold text-xs sm:text-[13px] px-6 py-2.5 rounded-full border shadow-2xs hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 group ${
                isExpandedAll
                  ? "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-300"
                  : "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-300 hover:border-neutral-400"
              }`}
            >
              <span>
                {isExpandedAll
                  ? "Show Less (Collapse to 5)"
                  : `View More (+${filteredProducts.length - 5} More Products)`}
              </span>
              <span
                className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                  isExpandedAll
                    ? "group-hover:-translate-y-0.5 text-neutral-600"
                    : "group-hover:translate-y-0.5 text-neutral-500 group-hover:text-neutral-900"
                }`}
              >
                {isExpandedAll ? "expand_less" : "expand_more"}
              </span>
            </button>
          </div>
        )}
      </section>

      {/* 4. DEDICATED CATEGORY: JEWELLERY & ACCESSORIES (Only 5 visible initially) */}
      <CategoryProductSection
        id="jewellery-accessories"
        title="Jewellery & Accessories — Factory Rates"
        subtitle="German Silver Jhumkas, Antique Oxidized Sets, Chokers & Bangles"
        badge="Handcrafted Karigar Direct • High Margins"
        icon="diamond"
        iconBg="bg-rose-100 text-rose-700"
        products={jewelleryProducts}
        isExpanded={activeExpandedSection === "jewellery-accessories"}
        onToggle={() => toggleSection("jewellery-accessories")}
        onQuickView={onQuickView}
      />

      {/* 5. DEDICATED CATEGORY: DAILY LIFE NECESSITIES (Only 5 visible initially) */}
      <CategoryProductSection
        id="daily-necessities"
        title="Daily Life Necessities — Wholesale Packs"
        subtitle="Commercial Cleaners, 25kg Detergents, 15L Cooking Oils & Pantry Staples"
        badge="Direct Mandi & FMCG Depot Supply"
        icon="shopping_basket"
        iconBg="bg-emerald-100 text-emerald-800"
        products={dailyNecessities}
        isExpanded={activeExpandedSection === "daily-necessities"}
        onToggle={() => toggleSection("daily-necessities")}
        onQuickView={onQuickView}
      />

      {/* 6. SHOP BY CATEGORY — CURATED FOR RETAILERS AND SHOPPERS (Replaced Calculator) */}
      <div id="shop-by-category">
        <CuratedCategoryGrid
          onSelectCategory={onSelectCategory}
          onScrollToSection={scrollToSection}
        />
      </div>

      {/* 7. DEDICATED CATEGORY: ELECTRONIC GADGETS & TECH (Only 5 visible initially) */}
      <CategoryProductSection
        id="electronics-gadgets"
        title="Electronic Gadgets & Tech Accessories — Master Lots"
        subtitle="TWS Earbuds Cartons, 65W GaN Fast Chargers, 50-Pack Cables & Smartwatches"
        badge="Factory Sealed • 1-Yr Official Brand Warranty"
        icon="devices"
        iconBg="bg-blue-100 text-primary"
        products={electronicGadgets}
        isExpanded={activeExpandedSection === "electronics-gadgets"}
        onToggle={() => toggleSection("electronics-gadgets")}
        onQuickView={onQuickView}
      />

      {/* 8. DEDICATED CATEGORY: HEALTH & BEAUTY (Only 5 visible initially) */}
      <CategoryProductSection
        id="health-beauty"
        title="Health & Beauty — Salon & Personal Care Lots"
        subtitle="Purifying Face Washes, Velvet Matte Lipsticks Trays & Men's Grooming"
        badge="Dermatologically Tested • 100% Authentic"
        icon="spa"
        iconBg="bg-purple-100 text-purple-700"
        products={healthBeautyProducts}
        isExpanded={activeExpandedSection === "health-beauty"}
        onToggle={() => toggleSection("health-beauty")}
        onQuickView={onQuickView}
      />

      {/* 9. DEDICATED CATEGORY: KITCHEN & DINING (Only 5 visible initially) */}
      <CategoryProductSection
        id="kitchen-dining"
        title="Kitchen & Dining — Commercial Cookware & Storage"
        subtitle="Stainless Steel Vacuum Flasks, 750W Copper Grinders & Modular Towers"
        badge="Food Grade 304 Stainless Steel"
        icon="restaurant"
        iconBg="bg-amber-100 text-amber-800"
        products={kitchenDiningProducts}
        isExpanded={activeExpandedSection === "kitchen-dining"}
        onToggle={() => toggleSection("kitchen-dining")}
        onQuickView={onQuickView}
      />

      {/* 10. DEDICATED CATEGORY: HOME IMPROVEMENT & TOOLS (Only 5 visible initially) */}
      <CategoryProductSection
        id="home-improvement"
        title="Home Improvement & Tools — Hardware Lots"
        subtitle="Cordless Tyre Pumps, Steel Shoe Racks, Heavy Wardrobe Storage & Glues"
        badge="Industrial Heavy Grade"
        icon="construction"
        iconBg="bg-orange-100 text-orange-700"
        products={homeImprovementProducts}
        isExpanded={activeExpandedSection === "home-improvement"}
        onToggle={() => toggleSection("home-improvement")}
        onQuickView={onQuickView}
      />

      {/* 11. FLASH BULK DEALS / CLEARANCE MASTER CARTONS (5 Cards Per Row) */}
      <section id="flash-deals" className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin w-full pt-4">
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-4 sm:p-5 shadow-lg mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[32px] text-amber-300">
              alarm_on
            </span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded">
                LIMITED RUN LIQUIDATION
              </span>
              <h3 className="text-lg sm:text-2xl font-black tracking-tight mt-0.5">
                Flash Bulk Deals &bull; Clearance Master Cartons
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/20 self-start sm:self-auto">
            <span className="text-xs text-amber-300 font-bold uppercase">
              Ends in:
            </span>
            <span className="font-mono text-sm font-black tracking-wider text-white">
              08h : 42m : 15s
            </span>
          </div>
        </div>

        {/* 5 Cards Per Row Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4">
          {flashDeals.map((prod) => (
            <ProductCard
              key={`flash-${prod.id}`}
              product={prod}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>

      {/* 8. WHOLESALE B2B FAQ ACCORDION */}
      <section id="wholesale-faq" className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin w-full pt-10 pb-6">
        <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-extrabold text-primary uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 font-heading mt-2">
              Everything You Need to Know About SwiftMart Wholesale
            </h3>
            <p className="text-sm sm:text-base text-neutral-500 mt-2.5 max-w-2xl mx-auto">
              Clear answers for retail store owners, distributors, cloud kitchens, and institutional buyers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-neutral-200">
            {WHOLESALE_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-5 sm:py-6 group">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left flex items-center justify-between text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors cursor-pointer gap-4"
                  >
                    <span className="leading-snug">{faq.q}</span>
                    <span
                      className={`material-symbols-outlined text-[24px] sm:text-[28px] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-primary" : "text-neutral-400 group-hover:text-primary"
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3.5 text-sm sm:text-base text-neutral-600 leading-relaxed animate-in fade-in duration-150">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
