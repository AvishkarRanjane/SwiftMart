import React, { useMemo } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

export default function Wishlist({ onNavigate, onViewProduct }) {
  const {
    wishlist,
    removeFromWishlist,
    clearWishlist,
    moveWishlistToCart,
    addToCart,
    toggleWishlist,
    selectedPincode,
    showToast,
  } = useCart();

  // Find all wishlisted product objects
  const wishlistedProducts = useMemo(() => {
    return wishlist
      .map((id) => PRODUCTS.find((p) => p.id === id))
      .filter(Boolean);
  }, [wishlist]);

  // Recommended products if wishlist is empty or small
  const recommendedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => !wishlist.includes(p.id)).slice(0, 4);
  }, [wishlist]);

  const handleMoveAllToCart = () => {
    if (wishlistedProducts.length === 0) return;
    wishlistedProducts.forEach((p) => {
      addToCart(p, 1);
    });
    clearWishlist();
    showToast(
      `All ${wishlistedProducts.length} items moved to your Basket! 🛒`,
    );
  };

  return (
    <div className="min-h-screen bg-flipkart-bg/50 pb-16 pt-4">
      <div className="max-w-[1480px] mx-auto px-4 md:px-margin">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-4">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate("catalogue")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Store
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-bold">My Wishlist</span>
        </div>

        {/* Header Title Bar */}
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-soft border border-outline-variant/20 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 shadow-xs border border-rose-100">
                <span className="material-symbols-outlined text-[22px]">
                  favorite
                </span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight flex items-center gap-2">
                  My Wishlist
                  <span className="bg-rose-100 text-rose-700 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    {wishlistedProducts.length}{" "}
                    {wishlistedProducts.length === 1 ? "Item" : "Items"}
                  </span>
                </h1>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Saved items with real-time stock at Pod {selectedPincode.code}{" "}
                  ({selectedPincode.city})
                </p>
              </div>
            </div>
          </div>

          {/* Top Actions */}
          {wishlistedProducts.length > 0 && (
            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                onClick={handleMoveAllToCart}
                className="bg-primary hover:bg-primary-container text-white px-4 py-2 rounded-full font-label-md text-xs font-bold transition-all shadow-soft flex items-center gap-1.5 active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[17px]">
                  shopping_cart_checkout
                </span>
                <span>Move All to Basket</span>
              </button>

              <button
                onClick={clearWishlist}
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-3.5 py-2 rounded-full font-label-md text-xs font-bold transition-all flex items-center gap-1 active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  delete_sweep
                </span>
                <span>Clear</span>
              </button>

              <button
                onClick={() => onNavigate("catalogue", "all")}
                className="bg-blue-50 hover:bg-blue-100 text-primary px-3.5 py-2 rounded-full font-label-md text-xs font-bold border border-primary/20 transition-all flex items-center gap-1 active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  add
                </span>
                <span>Add More Items</span>
              </button>
            </div>
          )}
        </div>

        {/* Main Content Area */}
        {wishlistedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlistedProducts.map((product) => {
              const savings =
                product.originalPrice > product.price
                  ? product.originalPrice - product.price
                  : 0;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl p-4 shadow-soft hover:shadow-md border border-neutral-200/80 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  {/* Remove Heart Button (Top-Right) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/95 hover:bg-rose-50 shadow-soft flex items-center justify-center text-rose-500 transition-all active:scale-90 border border-neutral-100"
                    title="Remove from Wishlist"
                  >
                    <span className="material-symbols-outlined text-[20px] text-rose-500">
                      favorite
                    </span>
                  </button>

                  {/* Top Category Badge */}
                  <div className="flex items-center gap-2 mb-2 pr-10">
                    <span className="bg-neutral-100 text-neutral-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider">
                      {product.category}
                    </span>
                    {product.discount && (
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                        {product.discount}
                      </span>
                    )}
                  </div>

                  {/* Product Image */}
                  <div
                    onClick={() => onViewProduct(product.id)}
                    className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-50 mb-3 cursor-pointer flex items-center justify-center p-2"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 mb-1 text-[11px]">
                      <span className="bg-emerald-600 text-white font-black px-1.5 py-0.2 rounded-md flex items-center gap-0.5 text-[10px]">
                        {product.rating} ★
                      </span>
                      <span className="text-neutral-400 font-semibold">
                        ({product.reviewsCount?.toLocaleString("en-IN") || 420})
                      </span>
                      <span className="text-primary font-bold ml-auto text-[10px] uppercase">
                        {product.brand}
                      </span>
                    </div>

                    <h3
                      onClick={() => onViewProduct(product.id)}
                      className="font-bold text-neutral-900 text-sm leading-snug line-clamp-2 hover:text-primary transition-colors cursor-pointer mb-1"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-neutral-500 line-clamp-1 mb-3">
                      {product.shortName || product.description}
                    </p>

                    {/* Price & Savings */}
                    <div className="mt-auto pt-2 border-t border-neutral-100 mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-neutral-900">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-xs text-neutral-400 line-through">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                        {savings > 0 && (
                          <span className="text-[10px] font-extrabold text-emerald-700 ml-auto">
                            Save ₹{savings.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>

                      {/* Delivery Status */}
                      <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 mt-1">
                        <span className="material-symbols-outlined text-[13px]">
                          bolt
                        </span>
                        <span>
                          Delivery in {product.deliveryTime || "14 mins"} to{" "}
                          {selectedPincode.code}
                        </span>
                      </div>
                    </div>

                    {/* Move to Basket CTA Button */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => moveWishlistToCart(product)}
                        className="col-span-2 bg-neutral-950 hover:bg-black active:bg-neutral-800 text-white py-2.5 rounded-2xl font-black text-xs shadow-soft hover:shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          shopping_cart
                        </span>
                        <span>Move to Basket</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft border border-neutral-200/80 text-center max-w-2xl mx-auto my-8">
            <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 mx-auto mb-5 shadow-inner">
              <span className="material-symbols-outlined text-[42px] animate-pulse">
                favorite
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mb-2">
              Your Wishlist is Empty
            </h2>

            <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto mb-6 leading-relaxed">
              Explore our 40+ curated products across groceries, boAt earbuds,
              DMart savers, and hardware. Tap the heart icon on any product to
              save it here!
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={() => onNavigate("catalogue", "all")}
                className="bg-primary hover:bg-primary-container text-white px-6 py-3 rounded-full font-bold text-xs shadow-soft hover:shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  grid_view
                </span>
                <span>Explore Store Catalogue</span>
              </button>

              <button
                onClick={() => onNavigate("home")}
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-5 py-3 rounded-full font-bold text-xs transition-all active:scale-95 cursor-pointer"
              >
                <span>Go to Homepage</span>
              </button>
            </div>
          </div>
        )}

        {/* Recommended Items Section */}
        {recommendedProducts.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-black text-neutral-900">
                  Recommended For You
                </h3>
                <p className="text-xs text-neutral-500">
                  Popular items customers frequently save to wishlist
                </p>
              </div>
              <button
                onClick={() => onNavigate("catalogue", "all")}
                className="text-xs font-bold text-primary hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                <span>View All 40</span>
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {recommendedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-3.5 shadow-soft border border-neutral-200/70 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div
                    onClick={() => onViewProduct(item.id)}
                    className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-50 mb-2 cursor-pointer flex items-center justify-center p-2"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h4
                      onClick={() => onViewProduct(item.id)}
                      className="text-xs font-bold text-neutral-900 line-clamp-1 hover:text-primary transition-colors cursor-pointer mb-1"
                    >
                      {item.name}
                    </h4>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-sm font-black text-neutral-900">
                        ₹{item.price}
                      </span>
                      {item.originalPrice > item.price && (
                        <span className="text-[10px] text-neutral-400 line-through">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="w-full bg-rose-50 hover:bg-rose-100 text-rose-700 py-1.5 rounded-xl text-[11px] font-bold border border-rose-200 transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      favorite_border
                    </span>
                    <span>Save to Wishlist</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
