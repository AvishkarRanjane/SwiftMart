import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { IMPULSE_ITEMS } from "../data/products";

export default function Cart({
  onNavigate,
  onViewProduct,
  onOpenPincodeModal,
}) {
  const {
    cart,
    updateQty,
    removeFromCart,
    addToCart,
    appliedPromo,
    applyPromo,
    removePromo,
    itemCount,
    mrpTotal,
    baseSavings,
    deliveryFee,
    platformFee,
    grandTotal,
    totalSavings,
    selectedPincode,
    checkoutOrder,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyPromo(promoInput);
      setPromoInput("");
    }
  };

  return (
    <main className="w-full bg-flipkart-bg/60 min-h-screen pb-28 sm:pb-16">
      <div className="flex flex-col w-full">
        {/* Curved Progress Header Bar */}
        <div className="w-full bg-white py-3 px-3 md:px-margin border-b border-outline-variant/15 shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 font-label-md text-xs sm:text-sm">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-black text-xs shadow-xs">
                1
              </span>
              <span className="font-black text-on-surface">
                Shopping Basket
              </span>
              <span className="material-symbols-outlined text-outline text-[16px]">
                chevron_right
              </span>

              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold">
                2
              </span>
              <span className="text-on-surface-variant hidden sm:inline font-semibold">
                Instant UPI / Card
              </span>
              <span className="material-symbols-outlined text-outline text-[16px] hidden sm:inline">
                chevron_right
              </span>

              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold">
                3
              </span>
              <span className="text-on-surface-variant hidden md:inline font-semibold">
                15-Min Delivery
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs text-tertiary font-bold bg-tertiary/10 px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-[15px]">
                security
              </span>
              <span>100% Safe Checkout</span>
            </div>
          </div>
        </div>

        {/* Main Checkout Workspace */}
        <div className="max-w-7xl w-full mx-auto px-3 md:px-margin py-4 md:py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* LEFT COLUMN: 68% Wide Basket Stage */}
            <div className="w-full lg:w-[68%] flex flex-col gap-5">
              {/* Delivery Address Card with Soft Curves */}
              <div className="bg-white rounded-3xl p-5 shadow-soft border border-outline-variant/15 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary shrink-0 shadow-inner">
                      <span className="material-symbols-outlined text-[24px]">
                        home_pin
                      </span>
                    </div>
                    <div className="flex flex-col leading-tight">
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base font-black text-on-surface">
                          Delivering to Home
                        </span>
                        <span className="bg-primary/10 text-primary text-[10px] uppercase font-black px-2 py-0.5 rounded-full">
                          Default
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Flat 402, Green Glen Towers, {selectedPincode.area},{" "}
                        {selectedPincode.city} {selectedPincode.code}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenPincodeModal}
                    className="self-start sm:self-auto px-4 py-2 rounded-full bg-surface-container-low hover:bg-surface-container text-primary text-xs font-black transition-colors cursor-pointer border border-primary/20 shadow-xs"
                  >
                    Change Address
                  </button>
                </div>

                {/* Speed Notification Banner */}
                <div className="flex items-center justify-between bg-surface-container-low/70 px-4 py-2 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-tertiary">
                    <span className="material-symbols-outlined text-[18px]">
                      electric_bolt
                    </span>
                    <span className="text-xs font-black text-on-surface">
                      Arriving in 14 Mins via Nearest Darkstore Pod
                    </span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant font-bold hidden md:inline">
                    POD-{selectedPincode.code}
                  </span>
                </div>
              </div>

              {/* Basket Items Container with Rounded 3XL Curves */}
              <div className="bg-white rounded-3xl p-5 shadow-soft border border-outline-variant/15 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-surface-variant/30 flex-wrap gap-2">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-base sm:text-lg font-black text-on-surface">
                      Items in Basket
                    </h2>
                    <span className="text-xs font-bold text-on-surface-variant">
                      ({itemCount} {itemCount === 1 ? "Product" : "Products"})
                    </span>
                  </div>
                  <span className="text-[11px] font-black text-emerald-800 bg-emerald-50 border border-emerald-300/40 px-3 py-1 rounded-full uppercase">
                    DMart Wholesale Advantage Applied
                  </span>
                </div>

                {/* Items List or Empty State */}
                {cart.length === 0 ? (
                  <div className="text-center py-12 flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center text-outline">
                      <span className="material-symbols-outlined text-[42px]">
                        shopping_basket
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-on-surface">
                      Your shopping basket is empty
                    </h3>
                    <p className="text-xs text-on-surface-variant max-w-sm">
                      Explore fresh groceries, DMart saver packs, and trending
                      electronics delivered in 15 minutes.
                    </p>
                    <button
                      onClick={() => onNavigate("home")}
                      className="mt-2 bg-flipkart-yellow hover:bg-amber-400 text-neutral-900 text-xs sm:text-sm font-black px-8 py-3 rounded-full shadow-soft-lg transition-all cursor-pointer"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-surface-container-low/40 hover:bg-white border border-outline-variant/15 transition-all shadow-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            onClick={() => {
                              if (onViewProduct) onViewProduct(item.id);
                              else onNavigate("product");
                            }}
                            className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-xs border border-outline-variant/20 cursor-pointer hover:opacity-90 transition-opacity"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                            {item.discount && (
                              <span className="absolute top-0 left-0 bg-flipkart-orange text-white text-[9px] px-1.5 py-0.2 rounded-br font-black">
                                {item.discount}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-col min-w-0">
                            <span className="text-[11px] text-on-surface-variant font-medium truncate">
                              {item.pack}
                            </span>
                            <h3
                              onClick={() => {
                                if (onViewProduct) onViewProduct(item.id);
                                else onNavigate("product");
                              }}
                              className="text-xs sm:text-sm font-black text-on-surface truncate max-w-sm cursor-pointer hover:text-primary transition-colors"
                            >
                              {item.name}
                            </h3>
                            <div className="flex items-baseline gap-2 mt-1">
                              <span className="text-sm sm:text-base font-black text-on-surface">
                                ₹{item.price.toLocaleString("en-IN")}
                              </span>
                              {item.originalPrice &&
                                item.originalPrice > item.price && (
                                  <>
                                    <span className="text-xs text-outline line-through">
                                      ₹
                                      {item.originalPrice.toLocaleString(
                                        "en-IN",
                                      )}
                                    </span>
                                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                      Save ₹
                                      {(
                                        item.originalPrice - item.price
                                      ).toLocaleString("en-IN")}
                                    </span>
                                  </>
                                )}
                            </div>
                          </div>
                        </div>

                        {/* Curved Pill Stepper */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 shrink-0 pt-1 sm:pt-0">
                          <div className="flex items-center bg-primary text-white rounded-full p-1 shadow-soft">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 font-black transition-colors cursor-pointer"
                              title="Decrease quantity"
                            >
                              <span className="material-symbols-outlined text-[15px]">
                                remove
                              </span>
                            </button>
                            <span className="px-3 font-black text-xs text-center select-none">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 font-black transition-colors cursor-pointer"
                              title="Increase quantity"
                            >
                              <span className="material-symbols-outlined text-[15px]">
                                add
                              </span>
                            </button>
                          </div>

                          <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="hover:text-error transition-colors flex items-center gap-0.5 cursor-pointer font-bold"
                            >
                              <span className="material-symbols-outlined text-[15px]">
                                delete
                              </span>
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Coupons & Bank Offers Card */}
              <div className="bg-white rounded-3xl p-5 shadow-soft border border-outline-variant/15 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-flipkart-orange text-[22px]">
                      confirmation_number
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-on-surface">
                      Coupons &amp; Bank Offers
                    </h3>
                  </div>
                  {appliedPromo && (
                    <span className="text-[11px] font-black text-tertiary uppercase bg-tertiary/10 px-2.5 py-0.5 rounded-full">
                      1 COUPON APPLIED
                    </span>
                  )}
                </div>

                {appliedPromo && (
                  <div className="flex items-center justify-between bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-300/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black">
                        <span className="material-symbols-outlined text-[18px]">
                          check
                        </span>
                      </div>
                      <div className="flex flex-col leading-tight">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-black text-on-surface tracking-wider">
                            {appliedPromo.code}
                          </span>
                          <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.2 rounded-full font-black">
                            ₹{appliedPromo.discount} SAVED
                          </span>
                        </div>
                        <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                          {appliedPromo.label}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={removePromo}
                      className="text-xs font-black text-error hover:opacity-80 transition-opacity cursor-pointer px-2 py-1"
                    >
                      Remove
                    </button>
                  </div>
                )}

                <form
                  onSubmit={handleApplyPromo}
                  className="flex items-center gap-2 mt-1"
                >
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Enter coupon (e.g. SWIFT100, SWIFT10, SWIFTANC)"
                    className="flex-1 uppercase text-xs sm:text-sm px-4 py-2.5 rounded-full bg-surface-bright text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-white border border-outline-variant/30 shadow-inner font-bold"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-primary hover:bg-primary-container text-white rounded-full text-xs sm:text-sm font-black transition-colors shadow-soft cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
              </div>

              {/* Impulse Additions Carousel with Curved Cards */}
              <div className="bg-white rounded-3xl p-5 shadow-soft border border-outline-variant/15 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-flipkart-yellow text-[24px]">
                      bolt
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-on-surface leading-tight">
                        Don't forget these essentials
                      </h3>
                      <p className="text-xs text-on-surface-variant">
                        Frequently added by households in {selectedPincode.city}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {IMPULSE_ITEMS.map((imp) => (
                    <div
                      key={imp.id}
                      className="bg-surface-container-low/40 p-3 rounded-2xl flex flex-col justify-between hover:bg-white transition-colors border border-outline-variant/15 shadow-xs"
                    >
                      <div className="w-full aspect-square rounded-xl bg-white flex items-center justify-center overflow-hidden mb-2 p-2">
                        <img
                          src={imp.image}
                          alt={imp.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs font-black text-on-surface truncate">
                          {imp.name}
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          {imp.pack}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-surface-variant/30">
                        <span className="text-xs sm:text-sm font-black text-on-surface">
                          ₹{imp.price}
                        </span>
                        <button
                          onClick={() => addToCart(imp, 1)}
                          className="px-3 py-1 rounded-full bg-white hover:bg-primary hover:text-white text-primary text-[11px] font-black shadow-xs transition-all border border-outline-variant/20 cursor-pointer active:scale-95"
                        >
                          ADD +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 32% Wide Price Details & Flipkart Checkout Button */}
            <div className="w-full lg:w-[32%] flex flex-col gap-4 lg:sticky lg:top-36">
              <div className="bg-white rounded-3xl p-5 shadow-soft border border-outline-variant/15 flex flex-col gap-4">
                <h3 className="text-sm sm:text-base font-black text-on-surface pb-2 border-b border-surface-variant/40">
                  Price Details ({itemCount}{" "}
                  {itemCount === 1 ? "Item" : "Items"})
                </h3>

                <div className="flex flex-col gap-2 text-xs sm:text-sm">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Total MRP</span>
                    <span className="font-bold text-on-surface">
                      ₹{mrpTotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Discount on MRP</span>
                    <span>-₹{baseSavings.toLocaleString("en-IN")}</span>
                  </div>

                  {appliedPromo && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Coupon ({appliedPromo.code})</span>
                      <span>
                        -₹{appliedPromo.discount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-on-surface-variant">
                    <span>Delivery Charges</span>
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-black">FREE</span>
                    ) : (
                      <span className="font-bold text-on-surface">
                        ₹{deliveryFee}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between text-on-surface-variant">
                    <span>Darkstore Packaging</span>
                    <span className="font-bold text-on-surface">
                      ₹{platformFee}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-surface-variant flex justify-between items-baseline">
                    <span className="text-base sm:text-lg font-black text-on-surface">
                      Total Amount
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-primary">
                      ₹{grandTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {totalSavings > 0 && (
                  <div className="bg-emerald-50 text-emerald-800 p-3 rounded-2xl text-xs font-black text-center border border-emerald-200">
                    🎉 You will save ₹{totalSavings.toLocaleString("en-IN")} on
                    this order!
                  </div>
                )}

                {/* Flipkart Orange Primary Checkout CTA */}
                <button
                  onClick={checkoutOrder}
                  disabled={cart.length === 0}
                  className={`w-full py-4 rounded-full font-headline-sm text-sm sm:text-base font-black shadow-soft-lg flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer ${
                    cart.length === 0
                      ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                      : "bg-flipkart-orange hover:bg-orange-600 text-white shadow-soft-xl"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    lock
                  </span>
                  <span>
                    PLACE ORDER • ₹{grandTotal.toLocaleString("en-IN")}
                  </span>
                </button>
              </div>

              {/* Trust Guarantee Box */}
              <div className="bg-white p-4 rounded-2xl flex items-center gap-3 text-xs text-on-surface-variant border border-outline-variant/15 shadow-soft">
                <span className="material-symbols-outlined text-[24px] text-tertiary shrink-0">
                  verified
                </span>
                <p>
                  100% Safe Payments &amp; Instant UPI Refunds. Certified
                  darkstore hygiene standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
