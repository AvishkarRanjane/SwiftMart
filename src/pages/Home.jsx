import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

export default function Home({ onNavigate, onViewProduct, filterQuery }) {
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
    { id: "2wheelers", label: "2 Wheelers" },
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

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

  // Auto-slide carousel to the left every 3 seconds (3000ms) as requested
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, HERO_SLIDES.length]);

  const handlePrevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  const handleNextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Quick Service Shortcuts
  const QUICK_SERVICES = [
    {
      label: "Credit Card",
      icon: "credit_card",
      color: "bg-rose-50 text-rose-600",
    },
    {
      label: "Pay Later",
      icon: "payments",
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "UPI / Wallet",
      icon: "account_balance_wallet",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "For You",
      icon: "auto_awesome",
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Grocery",
      icon: "shopping_basket",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "SuperCoins",
      icon: "monetization_on",
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      label: "Gift Cards",
      icon: "card_giftcard",
      color: "bg-orange-50 text-orange-600",
    },
    { label: "Bill Pay", icon: "receipt", color: "bg-sky-50 text-sky-600" },
    {
      label: "Plus Zone",
      icon: "workspace_premium",
      color: "bg-indigo-50 text-indigo-600",
    },
    { label: "Originals", icon: "verified", color: "bg-teal-50 text-teal-600" },
    { label: "NextGen", icon: "devices", color: "bg-cyan-50 text-cyan-600" },
    {
      label: "15-Min Pod",
      icon: "bolt",
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  // Filtering products for the catalog reel
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProducts = PRODUCTS.filter((p) => {
    if (filterQuery) {
      const q = filterQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.pack.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    if (selectedCategory !== "all") {
      return p.category === selectedCategory;
    }
    return true;
  });

  const handleSubCategoryClick = (catId) => {
    setActiveSubCategory(catId);
    if (
      catId === "fashion" ||
      catId === "electronics" ||
      catId === "grocery" ||
      catId === "hardware"
    ) {
      setSelectedCategory(catId);
    } else {
      setSelectedCategory("all");
    }
    showToast(
      `Viewing ${catId === "all" ? "All Recommended" : catId.toUpperCase()}`,
    );
  };

  return (
    <main className="w-full bg-[#f1f3f6]/70 min-h-screen pb-24 sm:pb-16 text-neutral-900">
      <div className="flex flex-col w-full max-w-[1480px] mx-auto px-2 sm:px-4 md:px-margin pt-2 sm:pt-3">
        {/* ========================================================= */}
        {/* 1. TOP SUB-CATEGORY TABS RIBBON (Matching Reference Image) */}
        {/* ========================================================= */}
        <div className="w-full overflow-x-auto scrollbar-none py-1.5 mb-2 sm:mb-3">
          <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap min-w-max">
            {TOP_SUB_CATEGORIES.map((tab) => {
              const isActive = activeSubCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSubCategoryClick(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                    isActive
                      ? "bg-neutral-950 text-white shadow-xs"
                      : "text-neutral-700 hover:text-neutral-950 hover:bg-black/[0.04]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. FOUR-CARD HERO CAROUSEL (Left Slide Every 3 Seconds)   */}
        {/* ========================================================= */}
        <section
          className="w-full mb-4 relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-neutral-900 flex items-center justify-center shadow-soft-xl transition-all active:scale-90 opacity-0 group-hover:opacity-100 cursor-pointer border border-black/[0.08]"
            title="Previous deal"
            aria-label="Previous Slide"
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-neutral-900 flex items-center justify-center shadow-soft-xl transition-all active:scale-90 opacity-0 group-hover:opacity-100 cursor-pointer border border-black/[0.08]"
            title="Next deal"
            aria-label="Next Slide"
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>

          {/* Sliding Track Viewport */}
          <div className="overflow-hidden w-full rounded-2xl sm:rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
              }}
            >
              {[...HERO_SLIDES, ...HERO_SLIDES].map((slide, idx) => (
                <div
                  key={`${slide.id}-${idx}`}
                  style={{ width: `${100 / slidesPerView}%` }}
                  className="shrink-0 p-1"
                >
                  <div
                    onClick={() => {
                      if (slide.id === "poco-x6" || slide.id === "boat-anc") {
                        if (onViewProduct) onViewProduct("boat-141-anc");
                      } else {
                        onNavigate("catalogue");
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
                    <div className="absolute right-0 bottom-0 top-0 w-1/2 flex items-center justify-end overflow-hidden opacity-90 group-hover/card:scale-105 transition-transform duration-500">
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

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-2.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide % HERO_SLIDES.length === i
                    ? "w-6 bg-neutral-900"
                    : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. TRENDING DEALS ON FURNITURE (Matching Reference Image)  */}
        {/* ========================================================= */}
        <section className="w-full mb-4">
          <div className="bg-[#f2f3fd] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#e2e5fc] shadow-xs">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-sm sm:text-base font-black text-neutral-900">
                Trending Deals on Furniture
              </h2>
              <button
                onClick={() => onNavigate("catalogue")}
                className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs"
                title="View All Furniture Deals"
              >
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 4 Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                {
                  name: "Shoe Rack",
                  offer: "Min. 50% Off",
                  img: "/images/deal-shoerack.jpg",
                },
                {
                  name: "Drawers",
                  offer: "Min. 50% Off",
                  img: "/images/deal-drawer.jpg",
                },
                {
                  name: "Home Temple",
                  offer: "Special offer",
                  img: "/images/deal-temple.jpg",
                },
                {
                  name: "Kid Seating",
                  offer: "Min. 50% Off",
                  img: "/images/deal-kidchair.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate("catalogue")}
                  className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center cursor-pointer hover:shadow-soft transition-all duration-200 group border border-black/[0.04]"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center mb-2 border border-black/[0.04]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 line-clamp-1">
                    {item.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-black text-emerald-700 mt-0.5">
                    {item.offer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. FULL-WIDTH BANNER: FLASH SALE FLIGHTS (Reference Image)*/}
        {/* ========================================================= */}
        <section className="w-full mb-4">
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
        {/* 5. ADD TO YOUR WISHLIST (Matching Reference Image)        */}
        {/* ========================================================= */}
        <section className="w-full mb-4">
          <div className="bg-[#eaf7f2] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#d2efe3] shadow-xs">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-sm sm:text-base font-black text-neutral-900 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-rose-500">
                  favorite
                </span>
                Add to your wishlist
              </h2>
              <button
                onClick={() => onNavigate("wishlist")}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
              >
                <span>View Wishlist</span>
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* 4 Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                {
                  name: "Bestsellers",
                  offer: "Min. 60% Off",
                  img: "/images/deal-apparel.jpg",
                },
                {
                  name: "Top Rated",
                  offer: "Min. 60% Off",
                  img: "/images/deal-lipsticks.jpg",
                },
                {
                  name: "Most loved",
                  offer: "Min. 50% Off",
                  img: "/images/deal-dryfruits-jar.jpg",
                },
                {
                  name: "In Focus Now",
                  offer: "Special offer",
                  img: "/images/deal-saree.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate("wishlist")}
                  className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center cursor-pointer hover:shadow-soft transition-all duration-200 group border border-black/[0.04]"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center mb-2 border border-black/[0.04]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 line-clamp-1">
                    {item.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-black text-emerald-700 mt-0.5">
                    {item.offer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. QUICK SERVICES & SHORTCUTS DOCK (Reference Image)       */}
        {/* ========================================================= */}
        <section className="w-full mb-4 overflow-x-auto scrollbar-none py-1">
          <div className="flex items-center justify-between gap-3 sm:gap-4 min-w-max px-1">
            {QUICK_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (srv.label === "Grocery") {
                    onNavigate("catalogue", "grocery");
                  } else {
                    onNavigate("catalogue");
                  }
                }}
                className="flex flex-col items-center gap-1.5 cursor-pointer group active:scale-95 transition-transform"
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${srv.color} flex items-center justify-center shadow-xs border border-black/[0.04] group-hover:scale-110 group-hover:shadow-soft transition-all duration-200`}
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {srv.icon}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-neutral-700 group-hover:text-neutral-950 transition-colors">
                  {srv.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. TOP VALUE DEALS HIGHLIGHT CARD (Reference Image)       */}
        {/* ========================================================= */}
        <section className="w-full mb-4">
          <div className="bg-[#fff1d2] rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#fee4ab] shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black text-amber-900 uppercase tracking-wider">
                  Top Value Deals
                </span>
                <span className="bg-amber-400/60 text-amber-950 font-black text-[10px] px-2 py-0.5 rounded-full">
                  VALUE ZONE
                </span>
              </div>
              <span className="text-xs font-bold text-amber-800">
                Lowest Prices Guaranteed
              </span>
            </div>

            {/* 3 Large Featured Callout Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                {
                  title: "Earrings",
                  price: "Min. 50% Off",
                  img: "/images/deal-earrings.jpg",
                },
                {
                  title: "Garment covers",
                  price: "Min. 60% Off",
                  img: "/images/deal-garmentbox.jpg",
                },
                {
                  title: "Anklets",
                  price: "Special Deals",
                  img: "/images/deal-anklet.jpg",
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate("catalogue")}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center text-center cursor-pointer hover:shadow-soft transition-all duration-300 group border border-amber-200/60 hover:border-amber-400"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-white flex items-center justify-center mb-3 border border-amber-100/80">
                    <img
                      src={val.img}
                      alt={val.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-neutral-800">
                    {val.title}
                  </h4>
                  <span className="text-base sm:text-lg font-black text-neutral-950 mt-0.5">
                    {val.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. BRANDS IN SPOTLIGHT (Matching Reference Image)         */}
        {/* ========================================================= */}
        <section className="w-full mb-4">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <h2 className="text-sm sm:text-base font-black text-neutral-900">
              Brands in Spotlight
            </h2>
            <button
              onClick={() => onNavigate("catalogue")}
              className="text-xs font-bold text-neutral-600 hover:text-neutral-950 flex items-center gap-1 cursor-pointer"
            >
              <span>See all</span>
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                brand: "boAt",
                title: "boAt Airdopes 141 ANC",
                offer: "Up to 80% Off",
                sub: "Today's special deal",
                img: "/images/boat-1.jpg",
                id: "boat-141-anc",
              },
              {
                brand: "boAt",
                title: "boAt Wireless Audio",
                offer: "Up to 80% Off",
                sub: "Today's special deal",
                img: "/images/boat-white-1.jpg",
                id: "boat-141-anc",
              },
              {
                brand: "AGARO",
                title: "Portable tyre inflator",
                offer: "Shop now",
                sub: "Portable tyre inflator",
                img: "/images/deal-inflator.jpg",
                id: null,
              },
            ].map((b, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (b.id && onViewProduct) {
                    onViewProduct(b.id);
                  } else {
                    onNavigate("catalogue");
                  }
                }}
                className="bg-neutral-900 text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-soft hover:shadow-soft-lg cursor-pointer group transition-all border border-neutral-800"
              >
                <div className="flex flex-col text-left">
                  <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
                    {b.brand}
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-white mt-1 group-hover:text-amber-200 transition-colors">
                    {b.offer}
                  </h4>
                  <span className="text-[11px] text-neutral-400 mt-0.5">
                    {b.sub}
                  </span>
                </div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white/10 p-2 overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. POPULAR NEARBY (Matching Reference Image)              */}
        {/* ========================================================= */}
        <section className="w-full mb-4">
          <div className="bg-[#eaf7f2] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#d2efe3] shadow-xs">
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-sm sm:text-base font-black text-neutral-900 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-emerald-600">
                  storefront
                </span>
                Popular nearby
              </h2>
              <span className="text-xs font-bold text-emerald-800">
                15-Min Express Pod
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                {
                  name: "boAt, realme, Mi & more",
                  offer: "Min 50% Off",
                  img: "/images/headphones-black.jpg",
                },
                {
                  name: "Milton, Cello & more",
                  offer: "Min. 40% Off",
                  img: "/images/deal-flask.jpg",
                },
                {
                  name: "Deal of the day",
                  offer: "Special Offer",
                  img: "/images/deal-watch.jpg",
                },
                {
                  name: "Trending Men's Shoes, Sneakers",
                  offer: "Min. 50% Off",
                  img: "/images/deal-shoes.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate("catalogue")}
                  className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center cursor-pointer hover:shadow-soft transition-all duration-200 group border border-black/[0.04]"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center mb-2 border border-black/[0.04]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 line-clamp-1">
                    {item.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-black text-emerald-700 mt-0.5">
                    {item.offer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 10. TRENDING GADGETS & APPLIANCES (Reference Image)       */}
        {/* ========================================================= */}
        <section className="w-full mb-4">
          <div className="bg-[#f2f3fd] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#e2e5fc] shadow-xs">
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-sm sm:text-base font-black text-neutral-900">
                Trending Gadgets &amp; Appliances
              </h2>
              <button
                onClick={() => onNavigate("catalogue")}
                className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs"
                title="View All Gadgets"
              >
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                {
                  name: "True Wireless",
                  offer: "Min. 50% Off",
                  img: "/images/oneplus-1.jpg",
                },
                {
                  name: "Trimmers",
                  offer: "Min. 50% Off",
                  img: "/images/deal-trimmer.jpg",
                },
                {
                  name: "Neckband",
                  offer: "Min. 50% Off",
                  img: "/images/deal-neckband.jpg",
                },
                {
                  name: "Mixer Juicer Grinder",
                  offer: "Min. 50% Off",
                  img: "/images/deal-mixer.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate("catalogue")}
                  className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center cursor-pointer hover:shadow-soft transition-all duration-200 group border border-black/[0.04]"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center mb-2 border border-black/[0.04]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 line-clamp-1">
                    {item.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-black text-emerald-700 mt-0.5">
                    {item.offer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 11. HAIR & SKINCARE ESSENTIALS (Reference Image)          */}
        {/* ========================================================= */}
        <section className="w-full mb-4">
          <div className="bg-[#f2f3fd] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#e2e5fc] shadow-xs">
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-sm sm:text-base font-black text-neutral-900">
                Hair &amp; Skincare Essentials
              </h2>
              <button
                onClick={() => onNavigate("catalogue")}
                className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs"
                title="View All Skincare"
              >
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                {
                  name: "Face Wash",
                  offer: "Min. 50% Off",
                  img: "/images/deal-facewash.jpg",
                },
                {
                  name: "Hair Clips",
                  offer: "Special offer",
                  img: "/images/deal-hairclips.jpg",
                },
                {
                  name: "Men Grooming",
                  offer: "Min. 50% Off",
                  img: "/images/deal-mencare.jpg",
                },
                {
                  name: "Hair Oil",
                  offer: "Min. 50% Off",
                  img: "/images/deal-hairoil.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate("catalogue")}
                  className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center cursor-pointer hover:shadow-soft transition-all duration-200 group border border-black/[0.04]"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center mb-2 border border-black/[0.04]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 line-clamp-1">
                    {item.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-black text-emerald-700 mt-0.5">
                    {item.offer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 12. BEST VALUE DEALS ON FASHION (Reference Image)         */}
        {/* ========================================================= */}
        <section className="w-full mb-6">
          <div className="bg-[#f2f3fd] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#e2e5fc] shadow-xs">
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-sm sm:text-base font-black text-neutral-900">
                Best Value Deals on Fashion
              </h2>
              <button
                onClick={() => onNavigate("catalogue")}
                className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs"
                title="View All Fashion Deals"
              >
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                {
                  name: "Casual Sneakers",
                  offer: "Min. 50% Off",
                  img: "/images/deal-sneakers.jpg",
                },
                {
                  name: "Ethnic Wear / Sarees",
                  offer: "Min. 50% Off",
                  img: "/images/deal-anarkali.jpg",
                },
                {
                  name: "Sports Shoes",
                  offer: "Min. 50% Off",
                  img: "/images/deal-running.jpg",
                },
                {
                  name: "Party Gowns & Dresses",
                  offer: "Min. 50% Off",
                  img: "/images/deal-gown.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate("catalogue")}
                  className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center cursor-pointer hover:shadow-soft transition-all duration-200 group border border-black/[0.04]"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center mb-2 border border-black/[0.04]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 line-clamp-1">
                    {item.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-black text-emerald-700 mt-0.5">
                    {item.offer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 13. 40-PRODUCT REEL: BROWSE CATALOGUE GRID                */}
        {/* ========================================================= */}
        <section id="grocery-reel" className="w-full scroll-mt-28 mb-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-baseline gap-2">
              <h2 className="text-base sm:text-xl font-black text-neutral-900">
                SuperSaver Grocery &amp; Flagship Reel
              </h2>
              <span className="text-xs text-emerald-700 font-bold hidden sm:inline bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                15-Min Instant Delivery
              </span>
            </div>

            <span className="text-xs text-neutral-500 font-bold">
              {filteredProducts.length} Items Available
            </span>
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
                className="group bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between border border-black/[0.06] hover:border-black/20 relative cursor-pointer active:scale-[0.99]"
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
                  className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full border flex items-center justify-center transition-all shadow-xs active:scale-90 ${
                    isInWishlist(product.id)
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
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-50 flex items-center justify-center p-3 sm:p-4 mb-3 group-hover:bg-neutral-100/70 transition-colors border border-neutral-100">
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
