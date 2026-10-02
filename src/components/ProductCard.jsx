import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, onQuickView }) {
  const { addToCart, isInWishlist, toggleWishlist, showToast } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const salePrice = product.packPrice || product.unitPrice || 49;
  const originalPrice = product.originalPackPrice || Math.round(salePrice * 3.5);

  // Calculate discount percentage
  const discountPercent = product.discount
    ? parseInt(product.discount.replace(/\D/g, ""), 10) ||
      Math.round(((originalPrice - salePrice) / originalPrice) * 100)
    : Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  const isNew = product.badge === "NEW" || product.isNew;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(
      {
        ...product,
        price: salePrice,
        packPrice: salePrice,
      },
      1
    );
    showToast(`Added ${product.shortName || product.name} to cart! 🛍️`);
    setTimeout(() => {
      setIsAdding(false);
    }, 700);
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-neutral-200/85 hover:border-neutral-300 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden p-2.5 sm:p-3 cursor-pointer">
      {/* Product Image Container with Badges (Fills square space edge-to-edge) */}
      <div
        onClick={() => onQuickView && onQuickView(product)}
        className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-100/60 mb-2.5 group/img"
      >
        {/* Top Badges */}
        <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 pointer-events-none">
          {discountPercent > 0 && (
            <span className="bg-[#e53935] text-white font-extrabold text-[10.5px] sm:text-[11px] px-1.5 py-0.5 rounded shadow-xs tracking-tight">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Top Right: NEW Badge & Wishlist Heart */}
        <div className="absolute top-2 right-2 z-10 flex items-center gap-1">
          {isNew && (
            <span className="bg-[#fbc02d] text-neutral-900 font-black text-[9.5px] sm:text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider shadow-2xs">
              NEW
            </span>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all shadow-2xs active:scale-90 ${
              isFavorited
                ? "bg-rose-50 text-rose-600 border border-rose-200 opacity-100"
                : "bg-white/85 text-neutral-400 hover:text-rose-600 hover:bg-white opacity-0 group-hover:opacity-100"
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
        </div>

        {/* Product Image: Edge-to-Edge Square Fit for Maximum Clarity */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            if (product.images && product.images[0] && !e.currentTarget.src.includes(product.images[0])) {
              e.currentTarget.src = product.images[0];
            }
          }}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Product Title (Clean 2-line max, matching reference) */}
      <div
        onClick={() => onQuickView && onQuickView(product)}
        className="flex-1 flex flex-col justify-start"
      >
        <h3
          className="font-sans text-neutral-800 text-[12.5px] sm:text-[13px] font-medium leading-snug line-clamp-2 min-h-[36px] hover:text-[#0f1d3a] transition-colors"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Single Clean Price Row (Matching Reference Image) */}
        <div className="mt-2 flex items-baseline flex-wrap gap-x-1.5 leading-none">
          {/* Bold Red Current Price */}
          <span className="font-heading font-black text-[#e53935] text-[15px] sm:text-[16px] tracking-tight">
            ₹{salePrice.toFixed(2)}
          </span>

          {/* Grey Strikethrough Original Price */}
          {originalPrice > salePrice && (
            <span className="text-neutral-400 line-through text-[11px] sm:text-xs font-normal">
              ₹{originalPrice.toFixed(2)}
            </span>
          )}

          {/* Green Discount Percentage */}
          {discountPercent > 0 && (
            <span className="text-[#2e7d32] text-emerald-600 font-bold text-[11px] sm:text-xs">
              {discountPercent}% off
            </span>
          )}
        </div>
      </div>

      {/* Full-Width Dark Navy ADD TO CART Button (Matching Reference Image) */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`w-full mt-3 py-2 sm:py-2.5 px-3 rounded-xl text-white font-heading font-bold text-[11px] sm:text-[11.5px] tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs hover:shadow transition-all duration-200 active:scale-98 cursor-pointer ${
          isAdding
            ? "bg-emerald-600"
            : "bg-[#0f1d3a] hover:bg-[#18274d] text-white"
        }`}
      >
        {isAdding ? (
          <>
            <span className="material-symbols-outlined text-[16px]">check</span>
            <span>ADDED!</span>
          </>
        ) : (
          <>
            {/* Custom Shopping Bag SVG Icon matching reference screenshot */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>ADD TO CART</span>
          </>
        )}
      </button>
    </div>
  );
}
