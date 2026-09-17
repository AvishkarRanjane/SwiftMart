import React, { useState, useEffect, useLayoutEffect, useMemo } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

export default function ProductDetail({
  productId,
  onNavigate,
  onViewProduct,
  onBack,
  brandSpotlight = null,
  restoredState = null,
}) {
  const {
    addToCart,
    getItemQty,
    showToast,
    selectedPincode,
    isInWishlist,
    toggleWishlist,
  } = useCart();

  // Find the selected product, fallback to boat-141-anc or first product
  const product = PRODUCTS.find((p) => p && p.id === productId) || PRODUCTS[0];

  const getInitialVariant = () => {
    if (brandSpotlight?.variantName && product.variants) {
      const match = product.variants.find(
        (v) => v.name.toLowerCase() === brandSpotlight.variantName.toLowerCase()
      );
      if (match) return match;
    }
    return product.variants && product.variants.length > 0
      ? product.variants[0]
      : null;
  };

  const getVariantInitialImage = (variant) => {
    if (variant && variant.images && variant.images.length > 0) {
      return variant.images[0];
    }
    if (variant && variant.image) {
      return variant.image;
    }
    return product.image;
  };

  const [selectedVariant, setSelectedVariant] = useState(getInitialVariant);

  // Calculate gallery images dynamically based on the active variant
  const currentGalleryImages = useMemo(() => {
    if (
      selectedVariant &&
      selectedVariant.images &&
      selectedVariant.images.length > 0
    ) {
      return selectedVariant.images;
    }
    if (selectedVariant && selectedVariant.image) {
      const remaining = product.images
        ? product.images.filter((i) => i !== selectedVariant.image)
        : [];
      return [selectedVariant.image, ...remaining];
    }
    return product.images && product.images.length > 0
      ? product.images
      : [product.image];
  }, [selectedVariant, product]);

  const [activeImage, setActiveImage] = useState(() =>
    getVariantInitialImage(getInitialVariant())
  );

  const [pincodeCheck, setPincodeCheck] = useState(selectedPincode.code);
  const [deliveryStatus, setDeliveryStatus] = useState(
    `⚡ Available: Delivery in ${product.deliveryTime || "14 mins"} to ${selectedPincode.code}`,
  );
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'specs' | 'box' | 'reviews'

  // Review Submission State
  const [reviewsList, setReviewsList] = useState(() => product.reviews || []);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState("");

  const isWishlisted = isInWishlist(product.id);

  // Restore scroll position when returning from nested product view
  useLayoutEffect(() => {
    if (restoredState && restoredState.page === "product" && restoredState.timestamp) {
      const targetY = restoredState.scrollY || 0;
      window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = targetY;
    }
  }, [restoredState?.timestamp]);

  // Sync state whenever productId, brandSpotlight, or selectedPincode changes
  useEffect(() => {
    const nextVariant = getInitialVariant();
    setSelectedVariant(nextVariant);
    setActiveImage(getVariantInitialImage(nextVariant));
    setDeliveryStatus(
      `⚡ Available: Delivery in ${product.deliveryTime || "14 mins"} to ${selectedPincode.code}`,
    );
    setReviewsList(product.reviews || []);
    if (!restoredState || restoredState.page !== "product") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
    }
  }, [productId, brandSpotlight, selectedPincode.code]);

  const handleAddReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReviewComment.trim()) {
      showToast("Please write a review comment!", "error");
      return;
    }
    const starsStr = "★".repeat(newReviewRating) + "☆".repeat(5 - newReviewRating);
    const newRevObj = {
      author: newReviewAuthor.trim() || "Verified Swift Shopper",
      stars: starsStr,
      date: "Just now",
      comment: newReviewComment.trim(),
    };
    setReviewsList((prev) => [newRevObj, ...prev]);
    setIsReviewModalOpen(false);
    setNewReviewAuthor("");
    setNewReviewComment("");
    setNewReviewRating(5);
    showToast("Thank you! Your review has been published ✨");
  };

  // Handle color or pack variant switch
  const handleSelectVariant = (variant) => {
    setSelectedVariant(variant);
    // When a color is selected, immediately swap ALL gallery images and main image to that color's photos!
    if (variant.images && variant.images.length > 0) {
      setActiveImage(variant.images[0]);
    } else if (variant.image) {
      setActiveImage(variant.image);
    }
    showToast(`Selected ${variant.name}`);
  };

  const currentPrice =
    selectedVariant && selectedVariant.price
      ? selectedVariant.price
      : product.price;
  const currentOrigPrice =
    selectedVariant && selectedVariant.orig
      ? selectedVariant.orig
      : product.originalPrice;
  const savings =
    currentOrigPrice > currentPrice ? currentOrigPrice - currentPrice : 0;
  const currentQtyInCart = getItemQty(product.id);

  const handleAddToCart = () => {
    const variantLabel = selectedVariant ? ` (${selectedVariant.name})` : "";
    addToCart(
      {
        ...product,
        name: `${product.name}${variantLabel}`,
        shortName: `${product.shortName || product.name}${variantLabel}`,
        price: currentPrice,
        originalPrice: currentOrigPrice,
        image: activeImage,
      },
      1,
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    onNavigate("cart");
  };

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (pincodeCheck.length === 6) {
      setDeliveryStatus(
        `⚡ Available: Delivery in ${product.deliveryTime || "15-20 Mins"} to ${pincodeCheck}`,
      );
      showToast(`Pincode ${pincodeCheck} eligible for darkstore dispatch!`);
    } else {
      showToast("Please enter a valid 6-digit pincode", "error");
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Product link copied to clipboard! 🔗");
    } else {
      showToast("Share link: " + product.name);
    }
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
  };

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p && p.category === product.category && p.id !== product.id,
  ).slice(0, 4);

  // Dynamic Tailored Theme for Brand Hero Poster
  const posterTheme = useMemo(() => {
    const brand = (brandSpotlight?.brand || product.brand || "SWIFTMART").toUpperCase();
    const variantName = selectedVariant?.name || brandSpotlight?.variantName || "";

    // 1. SONY WH-1000XM5: Japanese Studio Obsidian & Ice Cyan
    if (brand.includes("SONY") || product.id === "sony-wh1000xm5") {
      return {
        brand: "SONY",
        badgeText: "HI-RES WIRELESS AUDIO",
        badgeIcon: "graphic_eq",
        badgeBg: "bg-sky-500/20",
        badgeTextClass: "text-sky-300",
        badgeBorder: "border-sky-400/30",
        hollowText: brandSpotlight?.headline || brandSpotlight?.hollowText || "ANC",
        strokeColor: "#38bdf8",
        brandColor: "#ffffff",
        brandTracking: "tracking-[0.2em]",
        tagline: brandSpotlight?.tagline || "STUDIO SOUND 40% OFF",
        taglineColor: "text-sky-100",
        subtitle: brandSpotlight?.subtitle || "WH-1000XM5 FLAGSHIP MASTER",
        subtitleColor: "text-sky-300/80",
        bgGradient: "from-[#141a26] via-[#0e131d] to-[#070a10]",
        borderColor: "border-sky-400/35",
        glowColor: "rgba(56, 189, 248, 0.22)",
        chipBg: "bg-sky-950/60",
        chipText: "text-sky-200",
        chipBorder: "border-sky-400/25",
        chipIconColor: "text-sky-400",
        buttonBg: "bg-sky-400 hover:bg-sky-300 text-neutral-950",
        buttonShadow: "shadow-sky-400/25",
        arrowBg: "bg-sky-400 text-neutral-950 hover:bg-sky-300 border-sky-300",
        features: brandSpotlight?.features || [
          "Industry-Leading Noise Cancellation (Dual QN1)",
          "30 Hours Battery with Fast Charging",
          "LDAC High-Resolution Studio Codec",
          "Multipoint Seamless 2-Device Switch",
        ],
        extraVisual: "equalizer",
      };
    }

    // 2. AGARO TYRE INFLATOR: Industrial Gunmetal & Safety Hazard Amber
    if (brand.includes("AGARO") || product.id === "val-8") {
      return {
        brand: "AGARO",
        badgeText: "150 PSI AUTO-STOP PRECISION",
        badgeIcon: "build",
        badgeBg: "bg-amber-500/20",
        badgeTextClass: "text-amber-300",
        badgeBorder: "border-amber-500/35",
        hollowText: brandSpotlight?.headline || brandSpotlight?.hollowText || "AUTO",
        strokeColor: "#f59e0b",
        brandColor: "#fbbf24",
        brandTracking: "tracking-wider",
        tagline: brandSpotlight?.tagline || "UP TO 60% OFF",
        taglineColor: "text-white",
        subtitle: brandSpotlight?.subtitle || "SMART AUTO HIGH-PRESSURE INFLATOR",
        subtitleColor: "text-amber-200/80",
        bgGradient: "from-[#292119] via-[#1d1611] to-[#110c08]",
        borderColor: "border-amber-500/40",
        glowColor: "rgba(245, 158, 11, 0.22)",
        chipBg: "bg-amber-950/60",
        chipText: "text-amber-200",
        chipBorder: "border-amber-500/25",
        chipIconColor: "text-amber-400",
        buttonBg: "bg-amber-500 hover:bg-amber-400 text-neutral-950",
        buttonShadow: "shadow-amber-500/25",
        arrowBg: "bg-amber-500 text-neutral-950 hover:bg-amber-400 border-amber-400",
        features: brandSpotlight?.features || [
          "150 PSI Auto-Shutoff Precision",
          "Backlit Digital LCD Pressure Display",
          "Emergency LED Flashlight Torch",
          "Universal Multi-Nozzle Bike & Car Adaptors",
        ],
        extraVisual: "gauge",
      };
    }

    // 3. FIRE-BOLTT LUXURY SMARTWATCH: Chocolate Bronze & Burnished Copper
    if (brand.includes("FIRE-BOLTT") || product.id === "fireboltt-smartwatch") {
      return {
        brand: "FIRE-BOLTT",
        badgeText: "1.43\" AMOLED ALWAYS-ON",
        badgeIcon: "watch",
        badgeBg: "bg-orange-500/20",
        badgeTextClass: "text-orange-300",
        badgeBorder: "border-orange-400/35",
        hollowText: brandSpotlight?.headline || brandSpotlight?.hollowText || "PRO",
        strokeColor: "#fb923c",
        brandColor: "#fb923c",
        brandTracking: "tracking-wider",
        tagline: brandSpotlight?.tagline || "FLAT 70% OFF",
        taglineColor: "text-white",
        subtitle: brandSpotlight?.subtitle || "ULTRA LUXURY CHRONOGRAPH",
        subtitleColor: "text-orange-200/80",
        bgGradient: "from-[#2b1f17] via-[#1d140e] to-[#110a06]",
        borderColor: "border-orange-400/35",
        glowColor: "rgba(251, 146, 60, 0.22)",
        chipBg: "bg-orange-950/60",
        chipText: "text-orange-200",
        chipBorder: "border-orange-400/25",
        chipIconColor: "text-orange-400",
        buttonBg: "bg-orange-400 hover:bg-orange-300 text-neutral-950",
        buttonShadow: "shadow-orange-400/25",
        arrowBg: "bg-orange-400 text-neutral-950 hover:bg-orange-300 border-orange-300",
        features: brandSpotlight?.features || [
          "1.43\" AMOLED Always-On Display",
          "Bluetooth Calling with AI Assistant",
          "120+ Pro Sports Tracking Modes",
          "Stainless Steel Luxury Finish",
        ],
        extraVisual: "smartwatch",
      };
    }

    // 4. ONEPLUS NORD BUDS 2R: Oceanic Midnight & Electric Teal/Cyan
    if (brand.includes("ONEPLUS") || product.id === "oneplus-nord-buds") {
      return {
        brand: "ONEPLUS",
        badgeText: "12.4mm TITANIUM DRIVERS • NEVER SETTLE",
        badgeIcon: "headphones",
        badgeBg: "bg-cyan-500/20",
        badgeTextClass: "text-cyan-300",
        badgeBorder: "border-cyan-400/35",
        hollowText: brandSpotlight?.headline || brandSpotlight?.hollowText || "BASS",
        strokeColor: "#06b6d4",
        brandColor: "#ffffff",
        brandTracking: "tracking-[0.15em]",
        tagline: brandSpotlight?.tagline || "UP TO 55% OFF",
        taglineColor: "text-cyan-100",
        subtitle: brandSpotlight?.subtitle || "NORD BUDS 2R • DEEP BASS",
        subtitleColor: "text-cyan-300/80",
        bgGradient: "from-[#11222c] via-[#0a1820] to-[#050e14]",
        borderColor: "border-cyan-400/35",
        glowColor: "rgba(6, 182, 212, 0.22)",
        chipBg: "bg-cyan-950/60",
        chipText: "text-cyan-200",
        chipBorder: "border-cyan-400/25",
        chipIconColor: "text-cyan-400",
        buttonBg: "bg-cyan-400 hover:bg-cyan-300 text-neutral-950",
        buttonShadow: "shadow-cyan-400/25",
        arrowBg: "bg-cyan-400 text-neutral-950 hover:bg-cyan-300 border-cyan-300",
        features: brandSpotlight?.features || [
          "12.4mm Extra Bass Titanium Drivers",
          "Dual Mic AI Noise Cancellation",
          "38 Hours Battery with Flash Charge",
          "Sound Master EQ Tuned Profiles",
        ],
        extraVisual: "street-bass",
      };
    }

    // 5. boAt PURE WHITE: Luminous Pearl & Champagne Gold
    if (variantName.toLowerCase().includes("white") || brandSpotlight?.variantName === "Pure White") {
      return {
        brand: "BOAT",
        badgeText: "PURE WHITE AESTHETIC EDITION",
        badgeIcon: "auto_awesome",
        badgeBg: "bg-yellow-300/20",
        badgeTextClass: "text-yellow-200",
        badgeBorder: "border-yellow-300/40",
        hollowText: brandSpotlight?.headline || brandSpotlight?.hollowText || "SALE",
        strokeColor: "#fde047",
        brandColor: "#fde047",
        brandTracking: "tracking-wider",
        tagline: brandSpotlight?.tagline || "UP TO 80% OFF",
        taglineColor: "text-white",
        subtitle: brandSpotlight?.subtitle || "PURE WHITE CERAMIC ACOUSTICS",
        subtitleColor: "text-neutral-200",
        bgGradient: "from-[#2f323e] via-[#21232d] to-[#15161d]",
        borderColor: "border-yellow-300/40",
        glowColor: "rgba(253, 224, 71, 0.25)",
        chipBg: "bg-white/10",
        chipText: "text-yellow-100",
        chipBorder: "border-yellow-300/30",
        chipIconColor: "text-yellow-300",
        buttonBg: "bg-yellow-400 hover:bg-yellow-300 text-neutral-950",
        buttonShadow: "shadow-yellow-400/30",
        arrowBg: "bg-yellow-400 text-neutral-950 hover:bg-yellow-300 border-yellow-300",
        features: brandSpotlight?.features || [
          "Pure White Ceramic Matte Finish",
          "Active Noise Cancellation (32dB)",
          "Dual EQ Signature boAt Sound",
          "42 Hours Total Playback Battery",
        ],
        extraVisual: "pearl-aura",
      };
    }

    // 6. boAt GUNMETAL BLACK: Cyberpunk Stealth Charcoal & Electric Amber
    return {
      brand: "BOAT",
      badgeText: "BEAST™ LOW LATENCY 60ms",
      badgeIcon: "sports_esports",
      badgeBg: "bg-amber-400/20",
      badgeTextClass: "text-amber-300",
      badgeBorder: "border-amber-400/30",
      hollowText: brandSpotlight?.headline || brandSpotlight?.hollowText || "SALE",
      strokeColor: "#fbbf24",
      brandColor: "#fbbf24",
      brandTracking: "tracking-wider",
      tagline: brandSpotlight?.tagline || "UP TO 80% OFF",
      taglineColor: "text-white",
      subtitle: brandSpotlight?.subtitle || "TODAY'S SPECIAL DEAL",
      subtitleColor: "text-neutral-300",
      bgGradient: "from-[#24252a] via-[#1b1c20] to-[#121316]",
      borderColor: "border-amber-400/35",
      glowColor: "rgba(251, 191, 36, 0.22)",
      chipBg: "bg-neutral-800/80",
      chipText: "text-amber-200",
      chipBorder: "border-amber-400/20",
      chipIconColor: "text-amber-400",
      buttonBg: "bg-amber-400 hover:bg-amber-300 text-neutral-950",
      buttonShadow: "shadow-amber-400/30",
      arrowBg: "bg-amber-400 text-neutral-950 hover:bg-amber-300 border-amber-300",
      features: brandSpotlight?.features || [
        "Active Noise Cancellation (32dB)",
        "42 Hours Total Playback",
        "ENx™ Quad Mics for Clear Calls",
        "ASAP™ Fast Charge (10m = 10h)",
      ],
      extraVisual: "beast-mode",
    };
  }, [brandSpotlight, product, selectedVariant]);

  return (
    <main className="w-full bg-[#f8fafc] ambient-mesh min-h-screen pb-28 sm:pb-16 text-left animate-product-expand">
      <div className="max-w-[1480px] mx-auto px-3 md:px-margin pt-4 sm:pt-6">
        {/* Breadcrumbs & Back Button */}
        <div className="flex items-center gap-3 mb-4 overflow-x-auto whitespace-nowrap py-1">
          <button
            type="button"
            onClick={() => (onBack ? onBack() : onNavigate("home"))}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-pill hover:bg-white text-neutral-900 shadow-xs text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            title="Go Back"
          >
            <span className="material-symbols-outlined text-[17px] text-neutral-700 leading-none">
              arrow_back
            </span>
            <span>Back</span>
          </button>

          <nav className="flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-xs text-neutral-500">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-primary transition-colors cursor-pointer font-medium"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate("catalogue")}
              className="hover:text-primary transition-colors cursor-pointer capitalize font-medium"
            >
              {(product.category || "").replace(/-/g, " ")}
            </button>
            <span>/</span>
            {brandSpotlight && (
              <>
                <span
                  className="font-bold uppercase tracking-wider"
                  style={{ color: posterTheme.brandColor }}
                >
                  {posterTheme.brand} Spotlight
                </span>
                <span>/</span>
              </>
            )}
            <span className="text-neutral-800 font-semibold truncate max-w-xs sm:max-w-md">
              {product.name}
            </span>
          </nav>
        </div>

        {/* ========================================================= */}
        {/* BRAND HERO SPOTLIGHT POSTER (Unique Custom Per Product)   */}
        {/* ========================================================= */}
        {brandSpotlight && (
          <section className="w-full mb-8 relative">
            <div
              className={`relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-gradient-to-br ${posterTheme.bgGradient} border ${posterTheme.borderColor} p-6 sm:p-10 md:p-14 shadow-2xl transition-all duration-700`}
            >
              {/* Radial Ambient Glow Effects tailored to product */}
              <div
                className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-50"
                style={{ backgroundColor: posterTheme.glowColor }}
              />
              <div
                className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
                style={{ backgroundColor: posterTheme.glowColor }}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center relative z-10">
                {/* Left Typography Block */}
                <div className="md:col-span-7 flex flex-col text-left justify-center">
                  {/* Brand Tag / Eyebrow */}
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest shadow-sm flex items-center gap-1.5 ${posterTheme.badgeBg} ${posterTheme.badgeTextClass} border ${posterTheme.badgeBorder}`}
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {posterTheme.badgeIcon}
                      </span>
                      {posterTheme.badgeText}
                    </span>
                    <span className="text-white/60 text-xs font-semibold flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-[14px]"
                        style={{ color: posterTheme.strokeColor }}
                      >
                        verified
                      </span>
                      Official Flagship
                    </span>
                  </div>

                  {/* Brand Title */}
                  <h2
                    className={`text-3xl sm:text-5xl md:text-6xl font-black uppercase drop-shadow-md ${posterTheme.brandTracking}`}
                    style={{ color: posterTheme.brandColor }}
                  >
                    {posterTheme.brand}
                  </h2>

                  {/* Hollow Outlined SALE / ANC / AUTO / PRO / BASS */}
                  <div
                    className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-widest text-transparent leading-none my-1 sm:my-2 select-none font-sans"
                    style={{
                      WebkitTextStroke: `2.5px ${posterTheme.strokeColor}`,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {posterTheme.hollowText}
                  </div>

                  {/* Tagline */}
                  <h3
                    className={`text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mt-1 sm:mt-2 drop-shadow-md ${posterTheme.taglineColor}`}
                  >
                    {posterTheme.tagline}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className={`text-lg sm:text-2xl md:text-3xl font-black italic uppercase tracking-wide mt-1 ${posterTheme.subtitleColor}`}
                  >
                    {posterTheme.subtitle}
                  </p>

                  {/* Extra Visual Indicator */}
                  {posterTheme.extraVisual === "equalizer" && (
                    <div className="flex items-center gap-1.5 mt-3 py-1">
                      {[6, 14, 24, 32, 20, 12, 28, 40, 24, 16, 30, 20, 10, 6].map(
                        (h, idx) => (
                          <span
                            key={idx}
                            className="w-1.5 bg-gradient-to-t from-sky-500 to-sky-200 rounded-full animate-pulse"
                            style={{ height: `${h}px`, animationDelay: `${idx * 80}ms` }}
                          />
                        )
                      )}
                      <span className="text-[11px] font-bold text-sky-300 ml-2 uppercase tracking-wider">
                        High-Res Audio Stream Active
                      </span>
                    </div>
                  )}

                  {posterTheme.extraVisual === "gauge" && (
                    <div className="inline-flex items-center gap-2 mt-3 bg-amber-950/60 border border-amber-500/40 px-3.5 py-1.5 rounded-xl w-fit">
                      <span className="material-symbols-outlined text-[16px] text-amber-400">
                        speed
                      </span>
                      <span className="text-xs font-black text-amber-300 uppercase">
                        Digital Pressure Cutoff:
                      </span>
                      <span className="text-xs font-black text-white font-mono">
                        150.0 PSI Auto-Shutoff
                      </span>
                    </div>
                  )}

                  {posterTheme.extraVisual === "smartwatch" && (
                    <div className="inline-flex items-center gap-3 mt-3 bg-orange-950/60 border border-orange-400/40 px-3.5 py-1.5 rounded-xl w-fit">
                      <span className="flex items-center gap-1 text-xs font-bold text-orange-200">
                        <span className="material-symbols-outlined text-[15px] text-orange-400">
                          favorite
                        </span>
                        72 BPM
                      </span>
                      <span className="text-white/30">|</span>
                      <span className="flex items-center gap-1 text-xs font-bold text-orange-200">
                        <span className="material-symbols-outlined text-[15px] text-orange-400">
                          water_drop
                        </span>
                        99% SpO2
                      </span>
                      <span className="text-white/30">|</span>
                      <span className="flex items-center gap-1 text-xs font-bold text-orange-200">
                        <span className="material-symbols-outlined text-[15px] text-orange-400">
                          directions_run
                        </span>
                        120+ Sports
                      </span>
                    </div>
                  )}

                  {/* Features Chips */}
                  {posterTheme.features && posterTheme.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5 sm:mt-7">
                      {posterTheme.features.map((feat, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1.5 ${posterTheme.chipBg} ${posterTheme.chipText} border ${posterTheme.chipBorder} backdrop-blur-md text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs transition-colors`}
                        >
                          <span
                            className="material-symbols-outlined text-[14px]"
                            style={{ color: posterTheme.strokeColor }}
                          >
                            bolt
                          </span>
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Quick Action to Scroll */}
                  <div className="mt-6 sm:mt-8 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("product-details-main");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`px-6 py-3 rounded-full font-black text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer ${posterTheme.buttonBg} ${posterTheme.buttonShadow}`}
                    >
                      <span>Explore Deal & Specs</span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_downward
                      </span>
                    </button>
                    <span className="text-xs text-white/50 font-medium hidden sm:inline">
                      Scroll down to view full specifications & purchase options
                    </span>
                  </div>
                </div>

                {/* Right Product Cutout */}
                <div className="md:col-span-5 flex items-center justify-center relative mt-4 md:mt-0">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center group">
                    {/* Glowing backlight */}
                    <div
                      className="absolute inset-4 rounded-full blur-3xl pointer-events-none opacity-60 group-hover:opacity-90 transition-all duration-700"
                      style={{ backgroundColor: posterTheme.glowColor }}
                    />
                    <img
                      src={selectedVariant?.image || brandSpotlight.img || product.image}
                      alt={brandSpotlight.title || product.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom-Right Circular Scroll Button (Matching User's Reference) */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("product-details-main");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full ${posterTheme.arrowBg} flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group`}
                title="Scroll to Product Details"
                aria-label="Scroll to Product Details"
              >
                <span className="material-symbols-outlined text-[26px] sm:text-[32px] rotate-90 group-hover:translate-y-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* MAIN PRODUCT DETAIL CARD (Matching Image 1 Reference)     */}
        {/* ========================================================= */}
        <div
          id="product-details-main"
          className="bg-white rounded-3xl md:rounded-4xl p-5 sm:p-7 md:p-9 shadow-soft border border-neutral-200/70 mb-8 scroll-mt-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ----------------------------------------------------- */}
            {/* LEFT COLUMN: Gallery + Badges + Dual CTAs (Image 1)  */}
            {/* ----------------------------------------------------- */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:flex-row gap-4 items-start">
                {/* Vertical Thumbnails List (Dynamic to Selected Color!) */}
                {currentGalleryImages && currentGalleryImages.length > 1 && (
                  <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto sm:max-h-[440px] w-full sm:w-20 shrink-0">
                    {currentGalleryImages.map((img, idx) => {
                      const isActive = activeImage === img;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(img)}
                          className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl p-1 bg-white border-2 transition-all shrink-0 cursor-pointer overflow-hidden ${
                            isActive
                              ? "border-neutral-950 ring-2 ring-neutral-950/30 shadow-md scale-105 opacity-100"
                              : "border-neutral-200 hover:border-neutral-400 opacity-60 hover:opacity-100"
                          } active:scale-95`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Main Image Stage (Image 1) */}
                <div className="relative flex-1 w-full h-72 sm:h-[420px] rounded-3xl glass-panel flex items-center justify-center p-6 overflow-hidden group">
                  {/* Floating Badges Top-Left (Image 1: Deal of the Day & SwiftMart Assured) */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5">
                    {product.badge && (
                      <span className="bg-flipkart-yellow text-neutral-900 text-xs px-3 py-1 rounded-full font-black uppercase tracking-wider shadow-xs">
                        ⚡ {product.badge}
                      </span>
                    )}
                    {product.assured && (
                      <span className="bg-primary text-white text-[11px] px-3 py-1 rounded-full font-bold flex items-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-[15px]">
                          verified
                        </span>
                        <span>SwiftMart Assured</span>
                      </span>
                    )}
                  </div>

                  {/* Top Right: Heart & Share (Image 1) */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-2">
                    <button
                      onClick={handleToggleWishlist}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-xs active:scale-90 ${
                        isWishlisted
                          ? "bg-rose-50 border-rose-300 text-rose-600 shadow-sm scale-105"
                          : "bg-white/90 backdrop-blur-sm border-neutral-200 text-neutral-600 hover:text-red-500 hover:scale-110"
                      }`}
                      title="Add to Wishlist"
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] ${isWishlisted ? "text-red-500 fill" : ""}`}
                      >
                        favorite
                      </span>
                    </button>
                    <button
                      onClick={handleShare}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 active:bg-neutral-100 active:scale-95 transition-all shadow-xs"
                      title="Share product"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        share
                      </span>
                    </button>
                  </div>

                  {/* Main Product Image with Smooth Hero Expand */}
                  <img
                    key={activeImage}
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 animate-hero-expand"
                  />

                  {/* Sub-bar: 360° View & Tap thumbs to swap (Image 1) */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-neutral-600 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200/50 shadow-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-primary">
                        360
                      </span>
                      <span>Verified Genuine Quality</span>
                    </span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      <span className="material-symbols-outlined text-[14px]">
                        touch_app
                      </span>
                      <span>Tap thumbs to swap</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* DUAL ACTION BUTTONS: ADD TO BASKET & BUY NOW (Image 1) */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="bg-[#ffc200] hover:bg-[#ffb300] active:bg-[#e5a600] text-neutral-950 font-black text-xs sm:text-sm py-4 rounded-full shadow-soft-lg flex items-center justify-center gap-2 transition-all active:scale-[0.96] active:shadow-inner cursor-pointer uppercase tracking-wider"
                >
                  <span className="material-symbols-outlined text-[20px] text-neutral-950">
                    shopping_cart
                  </span>
                  <span>
                    {currentQtyInCart > 0
                      ? `In Basket (${currentQtyInCart}) +`
                      : "Add to Basket"}
                  </span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="bg-[#fb641b] hover:bg-[#e85610] active:bg-[#d44805] text-white font-black text-xs sm:text-sm py-4 rounded-full shadow-soft-lg flex items-center justify-center gap-2 transition-all active:scale-[0.96] active:shadow-inner cursor-pointer uppercase tracking-wider"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    bolt
                  </span>
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

            {/* ----------------------------------------------------- */}
            {/* RIGHT COLUMN: Info, Variants, Pincode & Offers        */}
            {/* ----------------------------------------------------- */}
            <div className="lg:col-span-6 flex flex-col gap-5 glass-card p-5 sm:p-7 rounded-3xl">
              {/* Brand Store Tag & Delivery Speed (Image 1) */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-black text-primary tracking-wider uppercase">
                  {product.brand
                    ? `${product.brand.toUpperCase()} FLAGSHIP STORE`
                    : "SWIFTMART OFFICIAL"}
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1 border border-emerald-200">
                  <span className="material-symbols-outlined text-[16px]">
                    bolt
                  </span>
                  <span>{product.deliveryTime || "15-20 Mins"}</span>
                </span>
              </div>

              {/* Product Title (Image 1) */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 leading-snug">
                {product.name}
              </h1>

              {/* Rating & Review Badge (Image 1) */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="flex items-center gap-1 bg-flipkart-green text-white px-2.5 py-1 rounded-lg text-xs font-black shadow-xs">
                  <span>{product.rating}</span>
                  <span className="text-[10px]">★</span>
                </div>
                <span className="text-xs text-neutral-500 font-semibold">
                  {product.ratingsCount} &amp; {product.reviewsCount}
                </span>
                <span className="text-neutral-300">•</span>
                <span className="text-xs text-primary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">
                    verified
                  </span>
                  <span>SwiftMart Assured</span>
                </span>
              </div>

              {/* Price Block & Savings Tag (Image 1) */}
              <div className="flex items-baseline gap-3 pt-1 flex-wrap">
                <span className="text-3xl sm:text-4xl font-black text-neutral-900 font-mono tracking-tight">
                  ₹{currentPrice.toLocaleString("en-IN")}
                </span>
                {currentOrigPrice > currentPrice && (
                  <>
                    <span className="text-sm sm:text-base text-neutral-400 line-through font-mono">
                      ₹{currentOrigPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {product.discount}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      You save ₹{savings.toLocaleString("en-IN")}
                    </span>
                  </>
                )}
              </div>

              {/* Variant Selector: Color Swatches or Pack Buttons (Image 1) */}
              {product.variants && product.variants.length > 0 && (
                <div className="flex flex-col gap-2.5 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-700">
                      {product.variantType === "color"
                        ? "Select Color:"
                        : product.variantType === "finish"
                          ? "Select Wood / Finish:"
                          : product.variantType === "size"
                            ? "Select Size / Configuration:"
                            : "Select Pack Size:"}{" "}
                      <span className="text-primary font-black">
                        {selectedVariant ? selectedVariant.name : ""}
                      </span>
                    </span>

                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
                      <span className="material-symbols-outlined text-[14px]">
                        bolt
                      </span>
                      <span>In Stock at Pod {selectedPincode.code}</span>
                    </span>
                  </div>

                  {/* Swatches Container */}
                  <div className="flex flex-wrap gap-2.5">
                    {product.variants.map((v, i) => {
                      const isSel =
                        selectedVariant && selectedVariant.name === v.name;

                      if (product.variantType === "color") {
                        return (
                          <button
                            key={i}
                            onClick={() => handleSelectVariant(v)}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-full border-2 transition-all cursor-pointer text-xs font-bold ${
                              isSel
                                ? "border-neutral-950 bg-neutral-950 text-white shadow-md ring-2 ring-neutral-950/20 scale-105 font-black"
                                : "border-neutral-200 hover:border-neutral-500 bg-white text-neutral-800 hover:bg-neutral-50"
                            } active:scale-95 active:brightness-90`}
                          >
                            <span
                              className="w-4 h-4 rounded-full border border-white/60 shadow-inner shrink-0 flex items-center justify-center text-[10px]"
                              style={{ backgroundColor: v.hex || "#333" }}
                            >
                              {isSel && (
                                <span className="material-symbols-outlined text-[12px] font-black text-white drop-shadow">
                                  check
                                </span>
                              )}
                            </span>
                            <span>{v.name}</span>
                          </button>
                        );
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => handleSelectVariant(v)}
                          className={`px-4 py-2 rounded-full border-2 transition-all cursor-pointer text-xs font-bold ${
                            isSel
                              ? "border-neutral-950 bg-neutral-950 text-white shadow-md ring-2 ring-neutral-950/20 scale-105 font-black"
                              : "border-neutral-200 hover:border-neutral-500 bg-white text-neutral-800 hover:bg-neutral-50"
                          } active:scale-95 active:brightness-90`}
                        >
                          <span>{v.name}</span>
                          {v.price && (
                            <span
                              className={`ml-1 font-mono ${isSel ? "text-amber-300 font-black" : "text-neutral-500"}`}
                            >
                              (₹{v.price.toLocaleString("en-IN")})
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Delivery & Darkstore Availability Box (Image 1) */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/70 flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-800">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    local_shipping
                  </span>
                  <span>Delivery &amp; Darkstore Availability</span>
                </div>

                <form onSubmit={handleCheckPincode} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={pincodeCheck}
                    onChange={(e) =>
                      setPincodeCheck(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    placeholder="Enter 6-digit pincode"
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-mono font-bold focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 bg-neutral-950 hover:bg-black active:bg-neutral-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    Check
                  </button>
                </form>

                <p className="text-[11px] text-neutral-600 font-semibold flex items-center gap-1">
                  <span>{deliveryStatus}</span>
                </p>
              </div>

              {/* Available Offers & Discounts (Image 1) */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-xs font-black uppercase tracking-wider text-neutral-700 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-flipkart-orange">
                    local_offer
                  </span>
                  <span>Available Offers &amp; Discounts</span>
                </span>

                <div className="flex flex-col gap-1.5">
                  {(
                    product.offers || [
                      {
                        title: "Bank Offer",
                        desc: "10% Instant Discount up to ₹150 on major cards",
                      },
                      {
                        title: "SuperSaver",
                        desc: "Guaranteed lowest wholesale darkstore rate",
                      },
                    ]
                  ).map((offer, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/50"
                    >
                      <span className="material-symbols-outlined text-[16px] text-amber-600 shrink-0 mt-0.5">
                        sell
                      </span>
                      <p className="text-neutral-800">
                        <span className="font-bold">{offer.title}:</span>{" "}
                        {offer.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM TABS SECTION (Matching Image 5 Reference)          */}
        {/* ========================================================= */}
        <section className="bg-white rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-10 shadow-soft border border-neutral-200/70 mb-8">
          {/* Pill Tabs Bar (Image 5) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-neutral-100 mb-6">
            {[
              { id: "overview", label: "Overview & Highlights" },
              { id: "specs", label: "Technical Specifications" },
              { id: "box", label: "In the Box" },
              {
                id: "reviews",
                label: `Reviews (${product.reviewsCount ? product.reviewsCount.replace(/[^0-9]/g, "") : "432"})`,
              },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-neutral-950 text-white shadow-md font-black ring-2 ring-neutral-900/20"
                      : "bg-neutral-100/90 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200 border border-neutral-200/80 font-bold"
                  } active:scale-95 active:brightness-90`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB 1: Overview & Highlights */}
          {activeTab === "overview" && (
            <div className="flex flex-col gap-4 animate-fade-in">
              <h3 className="text-lg font-black text-neutral-900">
                Product Highlights
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
                {(
                  product.highlights || [
                    "Engineered for high performance and daily reliability",
                    "Factory tested with strict quality assurance standards",
                    "100% Genuine product delivered straight from brand authorized darkstore",
                    "Comprehensive warranty coverage against manufacturer defects",
                  ]
                ).map((hl, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 bg-neutral-50 p-3.5 rounded-2xl border border-neutral-100"
                  >
                    <span className="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">
                      check_circle
                    </span>
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TAB 2: Technical Specifications */}
          {activeTab === "specs" && (
            <div className="flex flex-col gap-4 animate-fade-in">
              <h3 className="text-lg font-black text-neutral-900">
                Technical Specifications
              </h3>
              <div className="rounded-2xl border border-neutral-200 overflow-hidden divide-y divide-neutral-100 text-xs sm:text-sm">
                {(
                  product.specs || [
                    { label: "Brand", val: product.brand },
                    { label: "Category", val: product.category },
                    {
                      label: "Warranty",
                      val: "1 Year Official Brand Warranty",
                    },
                  ]
                ).map((s, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-bold text-neutral-600 sm:col-span-1">
                      {s.label}
                    </span>
                    <span className="text-neutral-900 font-medium sm:col-span-2 mt-0.5 sm:mt-0">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: In the Box */}
          {activeTab === "box" && (
            <div className="flex flex-col gap-4 animate-fade-in">
              <h3 className="text-lg font-black text-neutral-900">
                Package Contents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {(
                  product.inTheBox || [
                    `1x ${product.name}`,
                    "1x User Manual & Warranty Documentation Card",
                  ]
                ).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 bg-neutral-50 p-3 rounded-2xl border border-neutral-100"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      inventory_2
                    </span>
                    <span className="font-bold text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Reviews */}
          {activeTab === "reviews" && (
            <div className="flex flex-col gap-4 animate-fade-in">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black text-neutral-900">
                    Verified Customer Ratings &amp; Reviews
                  </h3>
                  <p className="text-xs text-neutral-500">Real feedback from verified SwiftMart buyers</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-black">
                    <span>{product.rating} ★ Rating</span>
                  </div>
                  <button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="px-4 py-1.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">rate_review</span>
                    <span>Write a Review</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(reviewsList.length > 0
                  ? reviewsList
                  : [
                      {
                        author: "Siddharth K.",
                        stars: "★★★★★",
                        date: "Verified 2 days ago",
                        comment:
                          "Exceptional quality and delivered in 14 minutes by SwiftMart!",
                      },
                      {
                        author: "Pooja M.",
                        stars: "★★★★★",
                        date: "Verified 1 week ago",
                        comment:
                          "100% genuine sealed pack. Exactly as advertised.",
                      },
                    ]
                ).map((rev, i) => (
                  <div
                    key={i}
                    className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 flex flex-col gap-2 shadow-xs hover:border-neutral-200 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                          {rev.author.charAt(0)}
                        </div>
                        <span className="font-bold text-xs text-neutral-800">
                          {rev.author}
                        </span>
                      </div>
                      <span className="text-amber-500 text-xs font-bold">
                        {rev.stars}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                    <span className="text-[10px] text-neutral-400 font-semibold">
                      {rev.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Write a Review Modal */}
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-md animate-fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-soft-xl border border-black/10 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <h3 className="text-base font-black text-neutral-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-500 text-[20px]">rate_review</span>
                  Write Product Review
                </h3>
                <button
                  onClick={() => setIsReviewModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>

              <form onSubmit={handleAddReviewSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-neutral-700">Star Rating</label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReviewRating(star)}
                        className="text-2xl transition-transform active:scale-125 focus:outline-none cursor-pointer"
                      >
                        <span className={star <= newReviewRating ? "text-amber-400" : "text-neutral-300"}>★</span>
                      </button>
                    ))}
                    <span className="text-xs font-bold text-neutral-500 ml-2">{newReviewRating} / 5 Stars</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-neutral-700">Your Name / Title</label>
                  <input
                    type="text"
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    placeholder="e.g. Rahul S. (or leave blank for Verified Shopper)"
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-medium focus:outline-none focus:bg-white focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-neutral-700">Review Feedback</label>
                  <textarea
                    rows={3}
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    placeholder="Share details about build quality, delivery speed, and performance..."
                    className="w-full p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-medium focus:outline-none focus:bg-white focus:border-primary resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs transition-all shadow-soft cursor-pointer mt-1"
                >
                  Submit Verified Review
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Related Products Reel */}
        {relatedProducts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-black text-neutral-900 mb-4">
              Similar Products in {(product.category || "").replace(/-/g, " ")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    if (onViewProduct) {
                      onViewProduct(rel.id);
                    } else if (onNavigate) {
                      onNavigate("product");
                    }
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                    document.documentElement.scrollTop = 0;
                  }}
                  className="bg-white rounded-3xl p-3 sm:p-4 border border-neutral-200/80 hover:border-neutral-400 hover:shadow-soft-lg transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
                >
                  <div className="w-full aspect-square rounded-2xl bg-neutral-50 flex items-center justify-center p-3 mb-2 overflow-hidden border border-neutral-100">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/images/cat-chargers.jpg";
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 font-bold">
                      <span className="text-primary font-black uppercase">
                        {rel.brand || rel.category}
                      </span>
                      <span className="flex items-center text-amber-500 font-black">
                        ★ {rel.rating}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-1">
                      {rel.name}
                    </h4>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-sm font-black font-mono text-neutral-900">
                        ₹{rel.price.toLocaleString("en-IN")}
                      </span>
                      {rel.originalPrice > rel.price && (
                        <span className="text-[11px] text-neutral-400 line-through font-mono">
                          ₹{rel.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                      <span className="text-[10px] text-emerald-600 font-bold ml-auto">
                        {rel.discount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mobile Sticky Quick Action Bar (Frosted Glass Dock) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-t border-black/[0.08] px-3.5 py-2.5 flex items-center justify-between gap-3 shadow-[0_-4px_25px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col leading-tight shrink-0">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-neutral-950 font-mono tracking-tight">
              ₹{currentPrice.toLocaleString("en-IN")}
            </span>
            {currentOrigPrice > currentPrice && (
              <span className="text-xs text-neutral-400 line-through font-mono">
                ₹{currentOrigPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[12px]">bolt</span>
            <span>{product.deliveryTime || "15 Mins"}</span>
          </span>
        </div>

        <div className="flex items-center gap-2 flex-1 justify-end">
          <button
            onClick={handleAddToCart}
            className="flex-1 max-w-[130px] bg-[#ffc200] hover:bg-[#ffb300] active:bg-[#e5a600] text-neutral-950 font-black text-xs py-2.5 px-2.5 rounded-full shadow-xs flex items-center justify-center gap-1 active:scale-95 cursor-pointer uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[15px]">
              shopping_cart
            </span>
            <span className="truncate">
              {currentQtyInCart > 0 ? `In Basket (${currentQtyInCart})` : "Add"}
            </span>
          </button>

          <button
            onClick={handleBuyNow}
            className="flex-1 max-w-[130px] bg-[#fb641b] hover:bg-[#e85610] active:bg-[#d44805] text-white font-black text-xs py-2.5 px-2.5 rounded-full shadow-xs flex items-center justify-center gap-1 active:scale-95 cursor-pointer uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[15px]">
              bolt
            </span>
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </main>
  );
}
