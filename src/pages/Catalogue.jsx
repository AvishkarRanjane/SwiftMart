import React, { useState, useMemo, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS, CATEGORIES } from "../data/products";

export default function Catalogue({
  onNavigate,
  onViewProduct,
  initialQuery = "",
  initialCategory = "all",
  onCategoryChange,
}) {
  const {
    addToCart,
    updateQty,
    getItemQty,
    showToast,
    isInWishlist,
    toggleWishlist,
  } = useCart();

  // Filter States
  const [keyword, setKeyword] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState(90000);
  const [minRating, setMinRating] = useState("all"); // 'all' | 4.5 | 4.7 | 4.8
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured"); // 'featured' | 'price-asc' | 'price-desc' | 'rating'

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
    setMaxPrice(90000);
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

      // Price filter
      if (product.price > maxPrice) {
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
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // 'featured' default order
    });
  }, [keyword, selectedCategory, maxPrice, minRating, inStockOnly, sortBy]);

  return (
    <main className="w-full bg-[#f6f9fc] min-h-screen pb-24 sm:pb-16 text-left">
      <div className="max-w-[1480px] mx-auto px-3 md:px-margin pt-4 sm:pt-6">
        {/* Page Header (Matching Image 4) */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            Store Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-2xl">
            {keyword ? (
              <span>
                Showing results for{" "}
                <span className="font-bold text-primary">"{keyword}"</span> (
                {filteredProducts.length} items found)
              </span>
            ) : (
              "Explore engineering perfection across our entire grocery, electronics and hardware lineup."
            )}
          </p>
        </div>

        {/* 2-Column Layout: Left Filters + Right Product Grid (Image 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* ========================================================= */}
          {/* LEFT SIDEBAR: FILTER BY (4 Cols on lg, 3 cols on xl)     */}
          {/* ========================================================= */}
          <aside
            id="sidebar-filters"
            className="lg:col-span-4 xl:col-span-3 bg-white rounded-3xl p-5 shadow-soft border border-neutral-200/70 sticky top-36 scroll-mt-40 transition-all"
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
                      className="absolute right-2.5 text-neutral-400 hover:text-neutral-600 active:scale-90"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        cancel
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* 2. Category List */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-neutral-700">
                  Category
                </label>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => handleSelectCategory("all")}
                    className={`text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer active:scale-[0.98] ${
                      selectedCategory === "all"
                        ? "bg-neutral-950 text-white font-black shadow-sm ring-1 ring-neutral-900"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 font-bold"
                    }`}
                  >
                    <span>All Categories</span>
                    <span
                      className={`text-[10px] ${selectedCategory === "all" ? "text-neutral-300" : "text-neutral-400 font-mono"}`}
                    >
                      {PRODUCTS.length}
                    </span>
                  </button>

                  {CATEGORIES.map((cat) => {
                    const count = PRODUCTS.filter(
                      (p) => p.category === cat.id,
                    ).length;
                    const isSelected = selectedCategory === cat.id;

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
                        <span>{cat.name}</span>
                        <span
                          className={`text-[10px] ${isSelected ? "text-neutral-300" : "text-neutral-400 font-mono"}`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Max Price Range Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-neutral-700">Max Price</span>
                  <span className="font-black text-emerald-600 font-mono text-sm">
                    ₹{maxPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="90000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-neutral-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                  <span>₹20</span>
                  <span>₹90,000+</span>
                </div>
              </div>

              {/* 4. Minimum Rating Filter */}
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

              {/* 5. In Stock Only Checkbox */}
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
            {/* Top Toolbar: Showing count + Sort dropdown (Image 4) */}
            <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-neutral-200/70 shadow-xs flex-wrap gap-2">
              <span className="text-xs font-bold text-neutral-600">
                Showing{" "}
                <span className="text-neutral-900 font-black">
                  {filteredProducts.length}
                </span>{" "}
                Products
              </span>

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
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
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
                  Try clearing your search keyword, adjusting the price slider,
                  or resetting all filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-2 px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full text-xs font-bold shadow-soft transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Product Cards Grid (Matching Image 4) */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product) => {
                  const qty = getItemQty(product.id);
                  const isWish = isInWishlist(product.id);

                  return (
                    <div
                      key={product.id}
                      onClick={() => onViewProduct(product.id)}
                      className="group bg-white rounded-3xl p-4 shadow-soft hover:shadow-soft-xl border border-neutral-200/70 hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between relative cursor-pointer"
                    >
                      {/* Top Bar: Tag Badge + Wishlist Heart (Image 4) */}
                      <div className="flex items-center justify-between mb-2 z-10">
                        <span className="font-mono text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-800">
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
                            className={`material-symbols-outlined text-[18px] ${isWish ? "text-red-500 fill" : ""}`}
                          >
                            favorite
                          </span>
                        </button>
                      </div>

                      {/* Image Stage with Soft Background (Image 4) */}
                      <div className="w-full aspect-square rounded-2xl bg-neutral-50/80 flex items-center justify-center p-3 sm:p-4 mb-3 overflow-hidden border border-neutral-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Product Content Details */}
                      <div className="flex flex-col gap-1.5 flex-1">
                        {/* Rating Row (Image 4: ★ 4.7 (118)) */}
                        <div className="flex items-center gap-1.5 text-xs">
                          <span className="text-amber-500 font-bold">★</span>
                          <span className="font-bold text-neutral-900">
                            {product.rating}
                          </span>
                          <span className="text-neutral-400 text-[11px]">
                            (
                            {product.reviewsCount
                              ? product.reviewsCount.replace(/[^0-9]/g, "")
                              : "420"}
                            )
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-bold text-neutral-900 leading-snug group-hover:text-primary transition-colors line-clamp-1">
                          {product.name}
                        </h3>

                        {/* Description (Image 4 snippet) */}
                        <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                          {product.description || product.pack}
                        </p>

                        {/* Price & Free Express Delivery Badge (Image 4) */}
                        <div className="mt-2 pt-2 border-t border-neutral-100 flex items-baseline gap-2">
                          <span className="text-base font-black text-neutral-900 font-mono">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-xs text-neutral-400 line-through font-mono">
                              ₹{product.originalPrice.toLocaleString("en-IN")}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                            Free Express Delivery
                          </span>

                          {/* Quick Add Button or Stepper (Image 4) */}
                          <div onClick={(e) => e.stopPropagation()}>
                            {qty === 0 ? (
                              <button
                                onClick={() => addToCart(product, 1)}
                                className="px-4 py-1.5 rounded-xl bg-[#005a43] hover:bg-[#004734] active:bg-[#003828] text-white text-xs font-black shadow-xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                              >
                                <span className="material-symbols-outlined text-[16px]">
                                  add
                                </span>
                                <span>Add</span>
                              </button>
                            ) : (
                              <div className="flex items-center bg-[#005a43] text-white rounded-xl px-1 py-0.5 shadow-xs">
                                <button
                                  onClick={() => updateQty(product.id, -1)}
                                  className="w-6 h-6 flex items-center justify-center hover:bg-white/20 active:bg-white/30 rounded-lg text-xs font-black cursor-pointer"
                                >
                                  -
                                </button>
                                <span className="px-2 font-mono font-bold text-xs">
                                  {qty}
                                </span>
                                <button
                                  onClick={() => updateQty(product.id, 1)}
                                  className="w-6 h-6 flex items-center justify-center hover:bg-white/20 active:bg-white/30 rounded-lg text-xs font-black cursor-pointer"
                                >
                                  +
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
