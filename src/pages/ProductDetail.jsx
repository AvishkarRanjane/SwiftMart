import React, { useState, useEffect, useMemo } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

export default function ProductDetail({
  productId,
  onNavigate,
  onViewProduct,
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
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0
      ? product.variants[0]
      : null,
  );

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

  const [activeImage, setActiveImage] = useState(() => {
    if (
      selectedVariant &&
      selectedVariant.images &&
      selectedVariant.images.length > 0
    ) {
      return selectedVariant.images[0];
    }
    return selectedVariant && selectedVariant.image
      ? selectedVariant.image
      : product.image;
  });

  const [pincodeCheck, setPincodeCheck] = useState(selectedPincode.code);
  const [deliveryStatus, setDeliveryStatus] = useState(
    `⚡ Available: Delivery in ${product.deliveryTime || "14 mins"} to ${selectedPincode.code}`,
  );
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'specs' | 'box' | 'reviews'

  const isWishlisted = isInWishlist(product.id);

  // Reset when product changes
  useEffect(() => {
    const initialVar =
      product.variants && product.variants.length > 0
        ? product.variants[0]
        : null;
    setSelectedVariant(initialVar);
    const initialImg =
      initialVar && initialVar.images && initialVar.images.length > 0
        ? initialVar.images[0]
        : initialVar && initialVar.image
          ? initialVar.image
          : product.image;
    setActiveImage(initialImg);
    setDeliveryStatus(
      `⚡ Available: Delivery in ${product.deliveryTime || "14 mins"} to ${selectedPincode.code}`,
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productId, product, selectedPincode.code]);

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
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 4);

  return (
    <main className="w-full bg-[#f4f7fb] min-h-screen pb-28 sm:pb-16 text-left">
      <div className="max-w-[1480px] mx-auto px-3 md:px-margin pt-4 sm:pt-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-neutral-500 mb-4 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate("catalogue")}
            className="hover:text-primary transition-colors cursor-pointer capitalize"
          >
            {product.category.replace("-", " ")}
          </button>
          <span>/</span>
          <span className="text-neutral-800 font-semibold truncate max-w-xs">
            {product.name}
          </span>
        </nav>

        {/* ========================================================= */}
        {/* MAIN PRODUCT DETAIL CARD (Matching Image 1 Reference)     */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl md:rounded-4xl p-5 sm:p-7 md:p-9 shadow-soft border border-neutral-200/70 mb-8">
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
                <div className="relative flex-1 w-full h-72 sm:h-[420px] rounded-3xl bg-neutral-50 flex items-center justify-center p-6 border border-neutral-200/60 overflow-hidden group">
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

                  {/* Main Product Image */}
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Sub-bar: 360° View & Tap thumbs to swap (Image 1) */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-neutral-600 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200/50 shadow-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        360
                      </span>
                      <span>360° View</span>
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
            <div className="lg:col-span-6 flex flex-col gap-5">
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
                              (₹{v.price})
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
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-black text-neutral-900">
                  Verified Customer Ratings &amp; Reviews
                </h3>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-black">
                  <span>{product.rating} ★ Rating</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(
                  product.reviews || [
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
                    className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
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

        {/* Related Products Reel */}
        {relatedProducts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-black text-neutral-900 mb-4">
              Similar Products in {product.category.replace("-", " ")}
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
                    window.scrollTo({ top: 0, behavior: "smooth" });
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
    </main>
  );
}
