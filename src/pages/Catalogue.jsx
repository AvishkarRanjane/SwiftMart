import React, { useState, useMemo, useEffect, useLayoutEffect } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS, CATEGORIES } from "../data/products";

// Icon mapping for each category
const CATEGORY_ICONS = {
  all: "grid_view",
  grocery: "shopping_basket",
  electronics: "headphones",
  "dmart-packs": "inventory_2",
  gadgets: "devices",
  furniture: "chair",
  wishlist: "favorite",
  "top-value": "loyalty",
  "gadgets-appliances": "blender",
  "skincare-haircare": "spa",
  "fashion-deals": "checkroom",
  "popular-nearby": "bolt",
};

export default function Catalogue({
  onNavigate,
  onViewProduct,
  initialQuery = "",
  initialCategory = "all",
  onCategoryChange,
  restoredState,
}) {
  const {
    showToast,
    isInWishlist,
    toggleWishlist,
  } = useCart();

  // Filter States (Price is discovered upon clicking into ProductDetail)
  const [keyword, setKeyword] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [minRating, setMinRating] = useState("all"); // 'all' | 4.5 | 4.7 | 4.8
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured"); // 'featured' | 'rating' | 'name-asc' | 'in-stock'

  // Restore scroll position when navigating back to Catalogue
  useLayoutEffect(() => {
    if (restoredState && restoredState.page === "catalogue" && restoredState.timestamp) {
      const targetY = restoredState.scrollY || 0;
      window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = targetY;

      const timer = setTimeout(() => {
        window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [restoredState?.timestamp]);

  // Sync state when props change
  useEffect(() => {
    setSelectedCategory(initialCategory || "all");
  }, [initialCategory]);

  useEffect(() => {
    setKeyword(initialQuery || "");
  }, [initialQuery]);

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    if (onCategoryChange) {
      onCategoryChange(catId);
    }
  };

  const handleResetFilters = () => {
    setKeyword("");
    setSelectedCategory("all");
    if (onCategoryChange) {
      onCategoryChange("all");
    }
    setMinRating("all");
    setInStockOnly(false);
    setSortBy("featured");
    showToast("Filters reset to default");
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Keyword match in name, shortName, description, brand, or tag
      if (keyword.trim()) {
        const q = keyword.toLowerCase();
        const matchesQuery =
          product.name.toLowerCase().includes(q) ||
          (product.shortName && product.shortName.toLowerCase().includes(q)) ||
          (product.description &&
            product.description.toLowerCase().includes(q)) ||
          product.brand.toLowerCase().includes(q) ||
          (product.tag && product.tag.toLowerCase().includes(q)) ||
          product.category.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Rating filter
      if (minRating !== "all" && product.rating < parseFloat(minRating)) {
        return false;
      }

      // In Stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "in-stock") return (b.inStock ? 1 : 0) - (a.inStock ? 1 : 0);
      return 0; // 'featured' default order
    });
  }, [keyword, selectedCategory, minRating, inStockOnly, sortBy]);

  // Group products category-wise for clean, organized alignment
  const categoryGroups = useMemo(() => {
    if (selectedCategory !== "all") {
      const cat = CATEGORIES.find((c) => c.id === selectedCategory) || {
        id: selectedCategory,
        name: selectedCategory,
        badge: "Selected",
      };
      return [
        {
          category: cat,
          products: filteredProducts,
        },
      ];
    }

    // When "all", group products by each category in canonical order
    const groups = [];
    CATEGORIES.forEach((cat) => {
      const prods = filteredProducts.filter((p) => p.category === cat.id);
      if (prods.length > 0) {
        groups.push({
          category: cat,
          products: prods,
        });
      }
    });

    // Fallback for any product outside predefined categories
    const groupedIds = new Set(
      groups.flatMap((g) => g.products.map((p) => p.id)),
    );
    const ungrouped = filteredProducts.filter((p) => !groupedIds.has(p.id));
    if (ungrouped.length > 0) {
      groups.push({
        category: {
          id: "other",
          name: "Other Products",
          badge: "Curated",
        },
        products: ungrouped,
      });
    }

    return groups;
  }, [filteredProducts, selectedCategory]);

  return (
    <main className="w-full bg-[#f8fafc] ambient-mesh min-h-screen pb-24 sm:pb-16 text-left">
      <div className="max-w-[1480px] mx-auto px-3 md:px-margin pt-3 sm:pt-4">
        {/* 2-Column Layout: Left Filters + Right Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* ========================================================= */}
          {/* LEFT SIDEBAR: FILTER BY (4 Cols on lg, 3 cols on xl)     */}
          {/* ========================================================= */}
          <aside
            id="sidebar-filters"
            className="lg:col-span-4 xl:col-span-3 glass-panel rounded-3xl p-5 shadow-soft border border-white/80 sticky top-[76px] sm:top-[82px] max-h-[calc(100vh-96px)] overflow-y-auto overscroll-contain z-20 scroll-mt-24"
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-neutral-800">
                FILTER BY
              </span>
              <button
                onClick={handleResetFilters}
                className="text-xs font-black text-primary hover:text-blue-800 active:text-blue-950 active:scale-95 flex items-center gap-1 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">
                  refresh
                </span>
                <span>Reset</span>
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {/* 1. Keyword Live Search */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-neutral-700">
                  Keyword
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-neutral-400 text-[18px]">
                    search
                  </span>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search models..."
                    className="w-full pl-9 pr-3 py-2 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs font-medium focus:outline-none focus:border-primary focus:bg-white transition-all text-neutral-900"
                  />
                  {keyword && (
                    <button
                      onClick={() => setKeyword("")}
                      className="absolute right-2.5 text-neutral-400 hover:text-neutral-600 active:scale-90 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        cancel
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* 2. Category List with Category-Wise Icons & Refined Styling */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-neutral-700">
                    Category
                  </label>
                  <span className="text-[10px] text-neutral-400 font-semibold">
                    {CATEGORIES.length} Categories
                  </span>
                </div>
                <div className="flex flex-col gap-1 max-h-60 overflow-y-auto pr-1">
                  <button
                    onClick={() => handleSelectCategory("all")}
                    className={`text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer active:scale-[0.98] ${
                      selectedCategory === "all"
                        ? "bg-neutral-950 text-white font-black shadow-sm ring-1 ring-neutral-900"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 font-bold"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">
                        grid_view
                      </span>
                      <span>All Categories</span>
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        selectedCategory === "all"
                          ? "bg-white/20 text-white"
                          : "bg-neutral-100 text-neutral-500 font-mono"
                      }`}
                    >
                      {PRODUCTS.length}
                    </span>
                  </button>

                  {CATEGORIES.map((cat) => {
                    const count = PRODUCTS.filter(
                      (p) => p.category === cat.id,
                    ).length;
                    const isSelected = selectedCategory === cat.id;
                    const icon = CATEGORY_ICONS[cat.id] || "category";

                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleSelectCategory(cat.id)}
                        className={`text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer active:scale-[0.98] ${
                          isSelected
                            ? "bg-neutral-950 text-white font-black shadow-sm ring-1 ring-neutral-900"
                            : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 font-bold"
                        }`}
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span
                            className={`material-symbols-outlined text-[16px] shrink-0 ${
                              isSelected
                                ? "text-emerald-400"
                                : "text-neutral-400"
                            }`}
                          >
                            {icon}
                          </span>
                          <span className="truncate">{cat.name}</span>
                        </span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ml-1 ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-neutral-100 text-neutral-500 font-mono"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Minimum Rating Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-neutral-700">
                  Minimum Rating
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {["all", "4.5", "4.7", "4.8"].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setMinRating(rate)}
                      className={`py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer text-center active:scale-95 ${
                        minRating === rate
                          ? "bg-neutral-950 text-white font-black shadow-sm ring-1 ring-neutral-900"
                          : "bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 border border-neutral-200 font-bold"
                      }`}
                    >
                      {rate === "all" ? "All" : `${rate}★`}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. In Stock Only Checkbox */}
              <div className="pt-2 border-t border-neutral-100">
                <label className="flex items-center justify-between cursor-pointer group select-none">
                  <span className="text-xs font-bold text-neutral-700 group-hover:text-neutral-900">
                    In Stock Only
                  </span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 accent-primary rounded cursor-pointer"
                  />
                </label>
              </div>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT PRODUCT GRID (8 Cols on lg, 9 cols on xl)          */}
          {/* ========================================================= */}
          <section className="lg:col-span-8 xl:col-span-9 flex flex-col gap-4">
            {/* Top Toolbar: Showing count + Quick Category Pills + Sort dropdown */}
            <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-neutral-200/70 shadow-xs flex-wrap gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-neutral-600">
                  Showing{" "}
                  <span className="text-neutral-900 font-black">
                    {filteredProducts.length}
                  </span>{" "}
                  Products
                </span>

                {keyword && (
                  <span className="bg-blue-50 text-primary border border-blue-200 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    "{keyword}"
                    <button
                      onClick={() => setKeyword("")}
                      className="hover:text-neutral-900 ml-0.5 cursor-pointer"
                    >
                      ✕
                    </button>
                  </span>
                )}

                {selectedCategory !== "all" && (
                  <span className="bg-neutral-900 text-white text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-xs">
                    <span>
                      {CATEGORIES.find((c) => c.id === selectedCategory)?.name ||
                        selectedCategory}
                    </span>
                    <button
                      onClick={() => handleSelectCategory("all")}
                      className="hover:text-red-400 font-black ml-0.5 cursor-pointer"
                      title="Clear category filter"
                    >
                      ✕
                    </button>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-neutral-400">
                  swap_vert
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-800 rounded-xl px-3 py-1.5 focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="rating">Highest Rated</option>
                  <option value="in-stock">In Stock First</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Quick Horizontal Category Chips Ribbon */}
            <div className="w-full overflow-x-auto scrollbar-none py-0.5">
              <div className="flex items-center gap-1.5 whitespace-nowrap min-w-max">
                <button
                  onClick={() => handleSelectCategory("all")}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                    selectedCategory === "all"
                      ? "bg-neutral-950 text-white shadow-xs"
                      : "bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200"
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">
                    grid_view
                  </span>
                  <span>All ({PRODUCTS.length})</span>
                </button>
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const catCount = PRODUCTS.filter(
                    (p) => p.category === cat.id,
                  ).length;
                  const icon = CATEGORY_ICONS[cat.id] || "category";

                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-neutral-950 text-white shadow-xs"
                          : "bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[15px] ${
                          isSelected ? "text-emerald-400" : "text-neutral-400"
                        }`}
                      >
                        {icon}
                      </span>
                      <span>{cat.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-neutral-100 text-neutral-500 font-mono"
                        }`}
                      >
                        {catCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center flex flex-col items-center gap-3 border border-neutral-200/70 shadow-soft">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <span className="material-symbols-outlined text-[36px]">
                    search_off
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900">
                  No products match your filters
                </h3>
                <p className="text-xs text-neutral-500 max-w-sm">
                  Try clearing your search keyword, adjusting the rating filter,
                  or resetting all filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-2 px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full text-xs font-bold shadow-soft transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Category-Wise Grouped Product Sections */
              <div className="flex flex-col gap-8 sm:gap-10">
                {categoryGroups.map((group) => {
                  const cat = group.category;
                  const catIcon = CATEGORY_ICONS[cat.id] || "category";

                  return (
                    <section
                      key={cat.id}
                      id={`cat-section-${cat.id}`}
                      className="flex flex-col gap-3.5 scroll-mt-24"
                    >
                      {/* Category Section Header */}
                      <div className="flex items-center justify-between glass-panel px-4 py-3 rounded-2xl border border-white/80 shadow-xs">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <div className="w-8 h-8 rounded-xl bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-xs">
                            <span className="material-symbols-outlined text-[18px]">
                              {catIcon}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="text-base sm:text-lg font-black text-neutral-900 tracking-tight">
                              {cat.name}
                            </h2>
                            {cat.badge && (
                              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                                {cat.badge}
                              </span>
                            )}
                            <span className="text-xs text-neutral-500 font-bold">
                              ({group.products.length}{" "}
                              {group.products.length === 1 ? "item" : "items"})
                            </span>
                          </div>
                        </div>

                        {selectedCategory === "all" ? (
                          <button
                            onClick={() => handleSelectCategory(cat.id)}
                            className="text-xs font-bold text-primary hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer active:scale-95"
                          >
                            <span>Filter category</span>
                            <span className="material-symbols-outlined text-[14px]">
                              arrow_forward
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleSelectCategory("all")}
                            className="text-xs font-bold text-neutral-600 hover:text-neutral-950 flex items-center gap-1 transition-colors cursor-pointer active:scale-95"
                          >
                            <span>Show all</span>
                            <span className="material-symbols-outlined text-[14px]">
                              close
                            </span>
                          </button>
                        )}
                      </div>

                      {/* Product Cards Grid Aligned Properly (Prices hidden - discovered on ProductDetail) */}
                      <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5">
                        {group.products.map((product) => {
                          const isWish = isInWishlist(product.id);

                          return (
                            <div
                              key={product.id}
                              onClick={() => onViewProduct(product.id)}
                              className="group glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-4 transition-all duration-300 flex flex-col justify-between relative cursor-pointer active:scale-[0.98]"
                            >
                              {/* Top Bar: Tag Badge + Wishlist Heart */}
                              <div className="flex items-center justify-between mb-2 z-10">
                                <span className="font-mono text-[9px] sm:text-[10px] font-black tracking-wider uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-neutral-100 text-neutral-800">
                                  {product.tag || "TOP PICK"}
                                </span>

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                  }}
                                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all shadow-xs active:scale-90 ${
                                    isWish
                                      ? "bg-rose-50 border-rose-300 text-red-500 shadow-sm"
                                      : "bg-white/80 backdrop-blur-sm border-neutral-200/60 text-neutral-400 hover:text-red-500 hover:scale-110"
                                  }`}
                                  title="Add to wishlist"
                                >
                                  <span
                                    className={`material-symbols-outlined text-[18px] ${
                                      isWish ? "text-red-500 fill" : ""
                                    }`}
                                  >
                                    favorite
                                  </span>
                                </button>
                              </div>

                              {/* Image Stage with Soft Background */}
                              <div className="w-full aspect-square rounded-2xl bg-white/70 flex items-center justify-center p-3 sm:p-4 mb-3 overflow-hidden border border-black/[0.03]">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                  onError={(e) => {
                                    e.currentTarget.src = "/images/lemons.jpg";
                                  }}
                                />
                              </div>

                              {/* Product Content Details */}
                              <div className="flex flex-col gap-1.5 flex-1">
                                {/* Rating Row */}
                                <div className="flex items-center gap-1.5 text-xs">
                                  <span className="text-amber-500 font-bold">
                                    ★
                                  </span>
                                  <span className="font-bold text-neutral-900">
                                    {product.rating}
                                  </span>
                                  <span className="text-neutral-400 text-[11px]">
                                    (
                                    {product.reviewsCount
                                      ? product.reviewsCount.replace(
                                          /[^0-9]/g,
                                          "",
                                        )
                                      : "420"}
                                    )
                                  </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-sm font-bold text-neutral-900 leading-snug group-hover:text-primary transition-colors line-clamp-1">
                                  {product.name}
                                </h3>

                                {/* Description */}
                                <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                                  {product.description || product.pack}
                                </p>

                                {/* Bottom Action: Free Express Delivery & Discover Price CTA */}
                                <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between">
                                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[13px]">
                                      bolt
                                    </span>
                                    Free Express Delivery
                                  </span>

                                  <span className="text-xs font-black text-primary group-hover:text-blue-700 flex items-center gap-1 transition-colors">
                                    <span>Discover Price</span>
                                    <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">
                                      arrow_forward
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Floating Quick Filter Pill on Mobile & Tablet */}
      <div className="lg:hidden fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => {
            const el = document.getElementById("sidebar-filters");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-neutral-950/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-black border border-white/15 active:scale-95 hover:bg-neutral-800 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px] text-emerald-400">
            tune
          </span>
          <span>Filters ({filteredProducts.length})</span>
        </button>
      </div>
    </main>
  );
}
