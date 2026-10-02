import React, { useState, useMemo, useRef } from "react";
import { useCart } from "../context/CartContext";
import { getCategoryDetails, CATEGORY_SIDEBAR_LIST } from "../data/categoryPageData";
import { MEGA_MENU_CATEGORIES } from "../data/wholesaleData";

const IMAGES_WITH_EMBEDDED_TAGS = [
  "german-silver-jhumka",
  "jewellery-accessories",
  "silver-jhumka-pink",
  "oxidised-peacock-chandbali",
  "oxidised-silver-kite",
  "oxidised-silver-pairs-set",
];

export default function CategoryProductPage({
  category = "health-beauty",
  subCategory = "all",
  onSelectCategory,
  onNavigateHome,
  onQuickView,
  onOpenSupport,
}) {
  const { addToCart, showToast, wishlist, toggleWishlist } = useCart();

  // Active Category & Subcategory State
  const [activeCatId, setActiveCatId] = useState(category);
  const [activeSubCat, setActiveSubCat] = useState(subCategory || "all");
  const [expandedCatId, setExpandedCatId] = useState(category);
  const [sortBy, setSortBy] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(8);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isSeoExpanded, setIsSeoExpanded] = useState(false);
  const [addingId, setAddingId] = useState(null);

  // Reels carousel scroll ref
  const reelsScrollRef = useRef(null);

  // Transitioning state for animation-driven direct load (subtle fade & slide effect)
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sync state if category prop changes with fluid animation-driven transition
  React.useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setActiveCatId(category);
      setExpandedCatId(category);
      setActiveSubCat(subCategory || "all");
      setVisibleCount(8);
      setIsTransitioning(false);
    }, 110);
    return () => clearTimeout(timer);
  }, [category, subCategory]);

  const categoryData = useMemo(() => {
    return getCategoryDetails(activeCatId);
  }, [activeCatId]);

  // Filtered & Sorted Products
  const processedProducts = useMemo(() => {
    let prods = [...(categoryData.products || [])];

    // Subcategory filter
    if (activeSubCat && activeSubCat !== "all") {
      prods = prods.filter(
        (p) =>
          p.subCategory &&
          p.subCategory.toLowerCase() === activeSubCat.toLowerCase()
      );
      // Fallback if none matched
      if (prods.length === 0) {
        prods = [...(categoryData.products || [])];
      }
    }

    // Sorting
    if (sortBy === "price-low") {
      prods.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      prods.sort((a, b) => b.price - a.price);
    } else if (sortBy === "discount") {
      const getNum = (d) => parseInt(d) || 0;
      prods.sort((a, b) => getNum(b.discount) - getNum(a.discount));
    } else if (sortBy === "rating") {
      prods.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return prods;
  }, [categoryData, activeSubCat, sortBy]);

  const visibleProducts = processedProducts.slice(0, visibleCount);
  const hasMore = visibleCount < processedProducts.length;

  const handleScrollReels = (direction) => {
    if (reelsScrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      reelsScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    setAddingId(product.id);
    addToCart(
      {
        id: product.id,
        name: product.name,
        shortName: product.name.slice(0, 30),
        unitPrice: product.price,
        packPrice: product.price,
        originalPackPrice: product.mrp,
        image: product.image,
        category: activeCatId,
        moq: 1,
      },
      1
    );
    showToast(`Added ${product.name.slice(0, 28)}... to cart! 🛍️`);
    setTimeout(() => {
      setAddingId(null);
    }, 700);
  };

  // Category click: Selects category, expands accordion, and updates product listing with smooth transition
  const handleCategorySidebarClick = (catId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (catId === activeCatId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCatId(catId);
      setExpandedCatId(catId);
      setActiveSubCat("all");
      setVisibleCount(8);
      setIsTransitioning(false);
      if (onSelectCategory) {
        onSelectCategory(catId, "all", false);
      }
    }, 110);
  };

  // Chevron arrow click: explicitly toggles the dropdown accordion arrow
  const handleChevronClick = (catId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setExpandedCatId((prev) => (prev === catId ? null : catId));
  };

  // Subcategory click: selects subcategory and updates products with seamless fade & slide
  const handleSubcategoryClick = (catId, sub, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (activeCatId === catId && activeSubCat.toLowerCase() === sub.toLowerCase()) return;
    setIsTransitioning(true);
    setTimeout(() => {
      if (activeCatId !== catId) {
        setActiveCatId(catId);
        setExpandedCatId(catId);
      }
      setActiveSubCat(sub);
      setVisibleCount(8);
      setIsTransitioning(false);
      if (onSelectCategory) {
        onSelectCategory(catId, sub, false);
      }
    }, 110);
  };

  return (
    <div className="w-full bg-[#fbfbfc] min-h-screen text-neutral-900 pb-16 font-sans">
      <div className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin pt-4">
        {/* 1. BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
          <button
            onClick={onNavigateHome}
            className="hover:text-red-600 transition-colors cursor-pointer font-medium"
          >
            Home
          </button>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-800 font-semibold">
            {categoryData.displayName}
          </span>
          {activeSubCat !== "all" && (
            <>
              <span className="text-neutral-300">/</span>
              <span className="text-red-600 font-semibold">{activeSubCat}</span>
            </>
          )}
        </nav>

        {/* 2. CATEGORY MAIN HEADLINE */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-neutral-950 tracking-tight uppercase">
            {categoryData.title}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full font-medium">
              {processedProducts.length} Products Available
            </span>
          </div>
        </div>

        {/* 3. TOP "FINDS / REELS" HORIZONTAL CAROUSEL (Matching Screenshot 1) */}
        {categoryData.reels && categoryData.reels.length > 0 && (
          <div className="relative mb-10 group/carousel">
            {/* Scroll Left Button */}
            <button
              onClick={() => handleScrollReels("left")}
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-red-600 hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-90 hover:opacity-100"
              title="Previous Finds"
            >
              <span className="material-symbols-outlined text-[18px]">
                chevron_left
              </span>
            </button>

            {/* Scroll Right Button */}
            <button
              onClick={() => handleScrollReels("right")}
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-red-600 hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-90 hover:opacity-100"
              title="Next Finds"
            >
              <span className="material-symbols-outlined text-[18px]">
                chevron_right
              </span>
            </button>

            {/* Reel Cards Strip */}
            <div
              ref={reelsScrollRef}
              className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth"
            >
              {categoryData.reels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() =>
                    onQuickView &&
                    onQuickView({
                      id: reel.id,
                      name: reel.title,
                      unitPrice: reel.price,
                      packPrice: reel.price,
                      originalPackPrice: reel.mrp,
                      discount: reel.discount,
                      image: reel.image,
                      category: activeCatId,
                    })
                  }
                  className="w-[150px] sm:w-[170px] md:w-[185px] shrink-0 bg-white rounded-2xl border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
                >
                  {/* Reel Image Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                    {/* View Count Badge */}
                    <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      <span className="material-symbols-outlined text-[12px] text-amber-400">
                        videocam
                      </span>
                      <span>{reel.views}</span>
                    </div>

                    {/* Image */}
                    <img
                      src={reel.image}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient & Tag Overlay */}
                    {reel.tag && (
                      <div className="absolute bottom-2 left-2 right-2 z-10">
                        <span className="inline-block bg-white/95 text-neutral-900 font-extrabold text-[10.5px] px-2 py-0.5 rounded shadow-xs line-clamp-1 backdrop-blur-xs">
                          {reel.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Reel Info */}
                  <div className="p-2.5 flex flex-col justify-between flex-1">
                    <h4
                      className="text-neutral-900 text-[11.5px] sm:text-xs font-medium line-clamp-2 leading-snug mb-2 group-hover:text-red-600 transition-colors"
                      title={reel.title}
                    >
                      {reel.title}
                    </h4>

                    {/* Price & Discount */}
                    <div className="flex items-center justify-between gap-1 flex-wrap pt-1 border-t border-neutral-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-red-600 font-black text-xs sm:text-[13px]">
                          ₹{reel.price}
                        </span>
                        <span className="text-neutral-400 line-through text-[10px]">
                          ₹{reel.mrp}
                        </span>
                      </div>
                      <span className="bg-red-600 text-white font-extrabold text-[9.5px] px-1.5 py-0.5 rounded">
                        {reel.discount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Horizontal Quick Category Filter Chips (Requirement 5 & 7) */}
        <div className="lg:hidden mb-4 bg-white rounded-2xl border border-neutral-200 p-2.5 shadow-2xs">
          <div className="flex items-center gap-1.5 mb-2 px-1 text-xs font-bold text-neutral-500 uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-red-600">category</span>
            <span>Quick Category Filter</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            {CATEGORY_SIDEBAR_LIST.map((cat) => {
              const isSelected = activeCatId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={(e) => handleCategorySidebarClick(cat.id, e)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-2xs ${
                    isSelected
                      ? "bg-red-600 text-white shadow-sm scale-102"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">{cat.icon}</span>
                  <span>{cat.name}</span>
                  {cat.badge && (
                    <span
                      className={`text-[9px] px-1 py-0.2 rounded-full font-black uppercase ${
                        isSelected ? "bg-white text-red-600" : "bg-red-100 text-red-600"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. MAIN SPLIT LAYOUT: SIDEBAR + PRODUCT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* LEFT SIDEBAR (Matching Screenshot 1 & 2) */}
          <aside className="lg:col-span-1 bg-white rounded-2xl border border-neutral-200 p-4 sm:p-5 shadow-2xs sticky top-24">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-red-600 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L4 13h16L12 2zM4 15h6v7H4v-7zm10 0h6v7h-6v-7z" />
                </svg>
                <h3 className="font-heading font-black text-sm tracking-wider uppercase text-neutral-900">
                  Categories
                </h3>
              </div>
              <span className="material-symbols-outlined text-[18px] text-neutral-400">
                unfold_more
              </span>
            </div>

            {/* Categories Tree: Interactive single-open accordion */}
            <div className="flex flex-col gap-1 text-[13.5px] max-h-[620px] overflow-y-auto scrollbar-thin pr-1">
              {CATEGORY_SIDEBAR_LIST.map((cat) => {
                const isExpanded = expandedCatId === cat.id;
                const isSelected = activeCatId === cat.id;
                const catDetails = getCategoryDetails(cat.id);
                const subcategories = catDetails?.subcategories || [];

                return (
                  <div key={cat.id} className="flex flex-col">
                    {/* Category Item Row */}
                    <div
                      onClick={(e) => handleCategorySidebarClick(cat.id, e)}
                      className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-all cursor-pointer select-none group ${
                        isSelected
                          ? "bg-red-50 text-red-600 font-bold border border-red-200/80 shadow-2xs"
                          : isExpanded
                          ? "bg-neutral-100 text-neutral-900 font-bold"
                          : "text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50 font-semibold"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-1">
                        <span
                          className={`material-symbols-outlined text-[18px] shrink-0 ${
                            isSelected ? "text-red-600" : "text-neutral-500"
                          }`}
                        >
                          {cat.icon}
                        </span>
                        <span className="truncate text-[13.5px]">{cat.name}</span>
                        {cat.badge && (
                          <span
                            className={`text-[9px] px-1.5 py-0.2 rounded font-black uppercase shrink-0 ${
                              isSelected ? "bg-red-600 text-white" : "bg-red-100 text-red-600"
                            }`}
                          >
                            {cat.badge}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleChevronClick(cat.id, e)}
                        className={`p-1 -mr-1 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                          isExpanded
                            ? "text-red-600"
                            : "text-neutral-400 group-hover:text-neutral-600"
                        }`}
                        title={isExpanded ? "Collapse" : "Expand"}
                      >
                        <span
                          className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                            isExpanded ? "rotate-90 text-red-600" : ""
                          }`}
                        >
                          chevron_right
                        </span>
                      </button>
                    </div>

                    {/* Subcategories Indented List (Only 1 open at a time) */}
                    {isExpanded && subcategories.length > 0 && (
                      <div className="pl-3.5 pr-1 py-1 flex flex-col gap-0.5 border-l-2 border-red-200 ml-4 my-1 animate-in fade-in duration-150">
                        {/* "All [Category Name]" Option */}
                        <button
                          type="button"
                          onClick={(e) => handleSubcategoryClick(cat.id, "all", e)}
                          className={`text-left px-2.5 py-1.5 rounded-lg text-[13px] transition-colors cursor-pointer ${
                            isSelected && activeSubCat === "all"
                              ? "text-red-600 font-bold bg-red-100/70"
                              : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 font-medium"
                          }`}
                        >
                          All {catDetails.displayName || cat.name}
                        </button>

                        {/* Subcategories */}
                        {subcategories.map((sub, sIdx) => {
                          const isSubActive =
                            isSelected &&
                            activeSubCat.toLowerCase() === sub.toLowerCase();
                          return (
                            <button
                              type="button"
                              key={sIdx}
                              onClick={(e) => handleSubcategoryClick(cat.id, sub, e)}
                              className={`text-left px-2.5 py-1.5 rounded-lg text-[13px] transition-colors cursor-pointer truncate ${
                                isSubActive
                                  ? "text-red-600 font-bold bg-red-100/70"
                                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 font-medium"
                              }`}
                            >
                              {sub}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Recommendation Widget (Matching Screenshot 1 & 2) */}
            <div className="pt-5 mt-4 border-t border-neutral-200">
              <div
                onClick={() =>
                  onOpenSupport
                    ? onOpenSupport()
                    : showToast("Connecting with B2B Wholesale Advisor... 📞")
                }
                className="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-50 hover:bg-red-50 border border-neutral-200/80 hover:border-red-200 transition-all cursor-pointer group shadow-2xs"
              >
                <div className="relative shrink-0">
                  <img
                    src="/images/support-expert.jpg"
                    alt="Wholesale Advisor"
                    className="w-10 h-10 rounded-full object-cover border-2 border-red-500 shadow-xs"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white ring-1 ring-emerald-400" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-heading font-extrabold text-[11px] px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1 transition-colors w-full justify-center">
                    <span>Want a recommendation?</span>
                  </button>
                  <p className="text-[10px] text-neutral-500 mt-1 truncate">
                    Talk to Wholesale Expert
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: SORT & PRODUCT LISTING */}
          <main className="lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
            {/* Top Toolbar: Sorting & Filters */}
            <div className="bg-white rounded-xl border border-neutral-200 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
              <div className="text-xs text-neutral-600">
                <span>Showing </span>
                <span className="font-bold text-neutral-900">
                  {visibleProducts.length}
                </span>
                <span> of </span>
                <span className="font-bold text-neutral-900">
                  {processedProducts.length}
                </span>
                <span> wholesale products</span>
                {activeSubCat !== "all" && (
                  <span className="ml-2 bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full text-[11px]">
                    {activeSubCat}
                  </span>
                )}
              </div>

              {/* Sort By Dropdown (Matching Screenshot 1 & 2) */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-neutral-500 font-medium">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-neutral-50 border border-neutral-300 hover:border-neutral-400 text-neutral-800 text-xs font-bold py-1.5 px-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="rating">Highest Rated</option>
                  <option value="discount">Highest Discount %</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* PRODUCT GRID (Screenshot 2: 4 products per row on large screens) */}
            <div
              key={`${activeCatId}-${activeSubCat}-${sortBy}`}
              className={`transition-all duration-300 ease-out ${
                isTransitioning
                  ? "opacity-25 scale-[0.99] translate-y-2 blur-[0.5px] pointer-events-none"
                  : "opacity-100 scale-100 translate-y-0 blur-0 animate-category-transition"
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {visibleProducts.map((prod, index) => {
                  const isFavorited = wishlist.includes(prod.id);
                  const isAdding = addingId === prod.id;

                  return (
                    <div
                      key={prod.id}
                      style={{ animationDelay: `${Math.min(index * 25, 200)}ms` }}
                      onClick={() =>
                        onQuickView &&
                        onQuickView({
                          ...prod,
                          unitPrice: prod.price,
                          packPrice: prod.price,
                          originalPackPrice: prod.mrp,
                        })
                      }
                      className="group animate-card-glide bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden p-2.5 sm:p-3 cursor-pointer"
                    >
                      {/* Image Area with Discount Badge */}
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-100/70 mb-2.5">
                        {/* Orange/Red Discount Tag: Rendered ONLY if tags are NOT present in image */}
                        {prod.discount && !Boolean(
                          prod.tagsInImage ||
                          prod.hasImageTags ||
                          (prod.image && IMAGES_WITH_EMBEDDED_TAGS.some((name) => prod.image.includes(name)))
                        ) && (
                          <div className="absolute bottom-2 right-2 z-10">
                            <span className="bg-[#ff5722] text-white font-extrabold text-[10px] sm:text-[11px] px-2 py-0.5 rounded shadow-xs uppercase tracking-tight">
                              {prod.discount}
                            </span>
                          </div>
                        )}

                        {/* Wishlist Heart Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(prod.id);
                          }}
                          className={`absolute top-2 right-2 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all shadow-xs active:scale-90 ${
                            isFavorited
                              ? "bg-rose-50 text-rose-600"
                              : "bg-white/85 text-neutral-400 hover:text-rose-600 hover:bg-white"
                          }`}
                          title={isFavorited ? "Saved in Wishlist" : "Save to Wishlist"}
                        >
                          <span
                            className={`material-symbols-outlined text-[16px] ${
                              isFavorited ? "fill text-rose-600" : ""
                            }`}
                          >
                            favorite
                          </span>
                        </button>

                        {/* Image */}
                        <img
                          src={prod.image}
                          alt={prod.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                        {/* Price Row (Matching Screenshot 2) */}
                        <div className="flex items-baseline flex-wrap gap-1.5 leading-none mb-1">
                          <span className="text-[#c8102e] font-sans font-black text-sm sm:text-base">
                            ₹{prod.price.toFixed(2)}
                          </span>
                          {prod.mrp && (
                            <span className="text-neutral-400 line-through text-[11px] sm:text-xs">
                              MRP ₹{prod.mrp.toFixed(2)}
                            </span>
                          )}
                        </div>

                        {/* Rating Stars (5 Gold Stars) */}
                        <div className="flex items-center gap-1 mb-1.5">
                          <div className="flex text-amber-400 text-xs">
                            {"★".repeat(5)}
                          </div>
                          {prod.reviewsCount && (
                            <span className="text-[10px] text-neutral-400">
                              ({prod.reviewsCount})
                            </span>
                          )}
                        </div>

                        {/* Title (2 lines max) */}
                        <h3
                          className="font-sans text-neutral-800 text-[12px] sm:text-[13px] font-medium leading-snug line-clamp-2 min-h-[34px] group-hover:text-red-600 transition-colors mb-2.5"
                          title={prod.name}
                        >
                          {prod.name}
                        </h3>

                        {/* Add to Cart Button */}
                        <button
                          onClick={(e) => handleAddToCart(prod, e)}
                          disabled={isAdding}
                          className={`w-full py-2 rounded-xl font-heading font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95 shadow-2xs ${
                            isAdding
                              ? "bg-emerald-600 text-white"
                              : "bg-[#0f1d3a] hover:bg-[#1a2d54] text-white"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[15px]">
                            {isAdding ? "check" : "shopping_bag"}
                          </span>
                          <span>{isAdding ? "ADDED" : "ADD TO CART"}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 5. PROGRESS & "SHOW MORE PRODUCTS" BUTTON (Matching Screenshot 4) */}
            <div className="flex flex-col items-center justify-center gap-3 py-6 mt-4 border-t border-neutral-200">
              <span className="text-xs text-neutral-500 font-medium">
                Showing 1 - {visibleProducts.length} of {processedProducts.length} total
              </span>

              {/* Progress Line */}
              <div className="w-48 h-1 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600 transition-all duration-300"
                  style={{
                    width: `${(visibleProducts.length / processedProducts.length) * 100}%`,
                  }}
                />
              </div>

              {hasMore ? (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                  className="bg-[#c8102e] hover:bg-[#a00d24] text-white font-heading font-bold text-xs sm:text-sm px-8 py-2.5 rounded-md transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                >
                  Show More Products
                </button>
              ) : (
                <span className="text-xs text-neutral-400 font-medium">
                  All {processedProducts.length} products loaded
                </span>
              )}
            </div>

            {/* 6. CATEGORY FREQUENTLY ASKED QUESTIONS (Matching Screenshot 4) */}
            {categoryData.faqs && categoryData.faqs.length > 0 && (
              <section className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 mt-4 shadow-2xs">
                <h3 className="text-lg sm:text-xl font-heading font-black text-center text-neutral-900 mb-6">
                  Frequently Asked Questions
                </h3>

                <div className="divide-y divide-neutral-200 max-w-3xl mx-auto">
                  {categoryData.faqs.map((faq, fIdx) => {
                    const isOpen = openFaqIndex === fIdx;
                    return (
                      <div key={fIdx} className="py-3.5">
                        <button
                          onClick={() =>
                            setOpenFaqIndex(isOpen ? null : fIdx)
                          }
                          className="w-full text-left flex items-center justify-between text-xs sm:text-[13px] font-bold text-neutral-800 hover:text-red-600 transition-colors cursor-pointer gap-3"
                        >
                          <span>{faq.q}</span>
                          <span
                            className={`material-symbols-outlined text-[18px] text-neutral-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-red-600" : ""
                            }`}
                          >
                            expand_more
                          </span>
                        </button>
                        {isOpen && (
                          <p className="mt-2 text-xs text-neutral-600 leading-relaxed animate-in fade-in duration-150">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 7. CATEGORY SEO DESCRIPTION (Matching Screenshot 5) */}
            {categoryData.seoDescription && (
              <section className="bg-neutral-50 rounded-2xl border border-neutral-200/80 p-5 sm:p-6 mt-2 text-left">
                <p
                  className={`text-xs sm:text-[13px] text-neutral-600 leading-relaxed ${
                    isSeoExpanded ? "" : "line-clamp-2"
                  }`}
                >
                  {categoryData.seoDescription}
                </p>
                <button
                  onClick={() => setIsSeoExpanded(!isSeoExpanded)}
                  className="mt-3 bg-[#c8102e] hover:bg-[#a00d24] text-white font-heading font-bold text-xs px-4 py-1.5 rounded transition-colors cursor-pointer"
                >
                  {isSeoExpanded ? "Read Less" : "Read More"}
                </button>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
