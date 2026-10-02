import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { WHOLESALE_PRODUCTS } from "../data/wholesaleData";
import { ALL_CATEGORY_PRODUCTS } from "../data/categoryPageData";

export default function WholesaleWishlistDrawer({ isOpen, onClose, onQuickView, onOpenCart }) {
  const { wishlist, removeFromWishlist, addToCart, clearWishlist, showToast } =
    useCart();

  // Dual-state management for smooth entry AND exit animations (right-to-left)
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  useEffect(() => {
    let animFrame1;
    let animFrame2;
    let exitTimer;

    if (isOpen) {
      setShouldRender(true);
      animFrame1 = requestAnimationFrame(() => {
        animFrame2 = requestAnimationFrame(() => {
          setIsAnimatingIn(true);
        });
      });
    } else {
      setIsAnimatingIn(false);
      exitTimer = setTimeout(() => {
        setShouldRender(false);
      }, 720); // Transition duration
    }

    return () => {
      cancelAnimationFrame(animFrame1);
      cancelAnimationFrame(animFrame2);
      clearTimeout(exitTimer);
    };
  }, [isOpen]);

  // Smooth slow close handler with reverse right slide-out
  const handleSmoothClose = () => {
    setIsAnimatingIn(false);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleSmoothClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!shouldRender) return null;

  // Lookup products from ALL known catalogs — WHOLESALE_PRODUCTS first, then category pages
  const ALL_PRODUCTS = [...WHOLESALE_PRODUCTS, ...ALL_CATEGORY_PRODUCTS];
  const savedProducts = ALL_PRODUCTS.filter((p) => wishlist.includes(p.id))
    .filter((p, idx, arr) => arr.findIndex((x) => x.id === p.id) === idx); // deduplicate

  const handleAddAllToCart = () => {
    if (savedProducts.length === 0) return;
    savedProducts.forEach((prod) => {
      addToCart(prod, 1);
    });
    clearWishlist();
    showToast(`Moved all ${savedProducts.length} wholesale packs to cart! 🛒`);
    handleSmoothClose();
    if (onOpenCart) {
      setTimeout(() => {
        onOpenCart();
      }, 350);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden flex justify-end pointer-events-auto">
      {/* 1. Backdrop Overlay with Smooth Slow Fade In & Fade Out */}
      <div
        onClick={handleSmoothClose}
        className={`fixed inset-0 bg-neutral-950/50 backdrop-blur-[2px] transition-opacity duration-700 ease-in-out cursor-pointer ${
          isAnimatingIn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* 2. Slide-Over Panel from Right to Left with Velvet Wine Eye-Comfort Styling */}
      <div
        className={`relative w-full max-w-[440px] bg-[#f8fafc] h-full shadow-[0_10px_40px_rgba(0,0,0,0.18)] z-10 flex flex-col justify-between overflow-hidden border-l border-neutral-200/80 transition-transform duration-700 will-change-transform ${
          isAnimatingIn
            ? "translate-x-0"
            : "translate-x-full pointer-events-none"
        }`}
        style={{
          transitionTimingFunction: isAnimatingIn
            ? "cubic-bezier(0.22, 1, 0.36, 1)" /* Silky-smooth slow deceleration glide in */
            : "cubic-bezier(0.32, 0, 0.67, 0)", /* Gentle smooth glide back out to right */
        }}
      >
        {/* PANEL HEADER: Velvet Merlot Gradient matching Help Drawer */}
        <div className="bg-gradient-to-r from-[#4f121a] via-[#5c1620] to-[#430e15] border-b border-[#3b0b12] text-white px-4 py-3 sm:py-3.5 flex items-center justify-between shadow-xs shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-rose-300 shadow-2xs">
              <span className="material-symbols-outlined text-[20px] fill">
                favorite
              </span>
            </div>
            <div className="flex flex-col min-w-0 leading-tight">
              <h3 className="font-heading font-extrabold text-sm sm:text-base text-rose-50 tracking-tight truncate">
                Saved Wholesale Products ({savedProducts.length})
              </h3>
              <span className="text-[11px] text-rose-200/80 font-sans font-medium truncate mt-0.5">
                Bookmarked for Next Bulk Reorder
              </span>
            </div>
          </div>

          {/* Close Button: Spins 90° and turns into white circle with bold black cross on hover */}
          <button
            onClick={handleSmoothClose}
            className="group relative w-8 h-8 rounded-full bg-white/10 hover:bg-white border border-transparent hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-xs hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] shrink-0 ml-2"
            title="Close Saved List"
          >
            <span className="material-symbols-outlined text-[19px] text-white/90 group-hover:text-neutral-950 group-hover:rotate-90 group-hover:scale-110 transition-all duration-300 ease-out font-bold">
              close
            </span>
          </button>
        </div>

        {/* PANEL BODY: Scrollable Saved Products List */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto bg-gradient-to-b from-[#f8fafc] via-[#f8fafc] to-[#f1f5f9] flex flex-col gap-3">
          {savedProducts.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-400 mb-3 shadow-xs">
                <span className="material-symbols-outlined text-[32px]">
                  favorite_border
                </span>
              </div>
              <h4 className="text-base font-heading font-bold text-neutral-800">
                No saved wholesale items
              </h4>
              <p className="text-xs text-neutral-500 mt-1.5 max-w-xs leading-relaxed">
                Click the heart icon on any bulk product card to bookmark cartons for quick reordering.
              </p>
            </div>
          ) : (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-neutral-200/80 rounded-2xl p-3.5 shadow-2xs hover:shadow-xs transition-all flex gap-3 items-center group"
              >
                {/* Product Thumbnail */}
                <div
                  onClick={() => {
                    handleSmoothClose();
                    setTimeout(() => onQuickView(product), 400);
                  }}
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-neutral-50 border border-neutral-150 p-1.5 shrink-0 overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[9.5px] font-bold bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md font-sans">
                    {product.bulkPack}
                  </span>
                  <h4
                    onClick={() => {
                      handleSmoothClose();
                      setTimeout(() => onQuickView(product), 400);
                    }}
                    className="text-xs sm:text-[13px] font-heading font-bold text-neutral-900 truncate hover:text-[#701620] transition-colors cursor-pointer mt-1"
                    title={product.name}
                  >
                    {product.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs sm:text-sm font-heading font-black text-neutral-950">
                      ₹{(product.packPrice ?? product.price ?? 0).toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-emerald-600 font-bold font-sans">
                      {product.discount}
                    </span>
                  </div>
                </div>

                {/* Action Buttons: Velvet Wine Order Button */}
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      removeFromWishlist(product.id);
                    }}
                    className="bg-gradient-to-r from-[#701620] to-[#591119] hover:from-[#5e121b] hover:to-[#490d14] text-white text-[11px] font-heading font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 active:scale-95 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      shopping_cart
                    </span>
                    <span>Order</span>
                  </button>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="text-[10.5px] text-neutral-400 hover:text-red-600 transition-colors cursor-pointer px-1 py-0.5"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* PANEL FOOTER: Move All to Cart Action */}
        {savedProducts.length > 0 && (
          <div className="p-3.5 sm:p-4 bg-white border-t border-neutral-200/80 flex items-center gap-2.5 shrink-0 shadow-xs">
            <button
              onClick={clearWishlist}
              className="px-3.5 py-2.5 border border-neutral-300 text-neutral-600 text-xs font-bold rounded-full hover:bg-neutral-100 hover:text-neutral-900 transition-all cursor-pointer shadow-2xs"
            >
              Clear All
            </button>
            <button
              onClick={handleAddAllToCart}
              className="flex-1 bg-gradient-to-r from-[#851e2a] to-[#6d1822] hover:from-[#751722] hover:to-[#5c121b] text-white font-heading font-bold text-xs sm:text-[13px] py-2.5 px-4 rounded-full shadow-[0_4px_14px_rgba(109,24,34,0.22)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight"
            >
              <span className="material-symbols-outlined text-[17px]">
                shopping_cart_checkout
              </span>
              <span>Move All to Wholesale Cart</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
