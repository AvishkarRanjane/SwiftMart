import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function WholesaleCartDrawer({ isOpen, onClose, onCheckoutSuccess }) {
  const {
    cart,
    updateQty,
    removeFromCart,
    clearCart,
    itemCount,
    subtotal,
    mrpTotal,
    appliedPromo,
    applyPromo,
    removePromo,
    grandTotal,
    showToast,
  } = useCart();

  // Dual-state management for smooth entry AND exit animations (right-to-left)
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  const [gstin, setGstin] = useState("27AABCS1429B1Z0");
  const [isGstVerified, setIsGstVerified] = useState(true);

  // Simple Truck Drive & Green Tick state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [truckPos, setTruckPos] = useState(0); // 0% (left) to 88% (right)
  const [taxStatusText, setTaxStatusText] = useState("Calculating 18% GST Input Tax Credit...");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

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
      }, 720); // Matches transition duration
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
      if (e.key === "Escape" && isOpen && !isCheckingOut) {
        handleSmoothClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isCheckingOut]);

  if (!shouldRender) return null;

  const estimatedGstCredit = Math.round(subtotal * 0.18);
  const totalWholesaleSavings = mrpTotal - subtotal;
  const freeShippingThreshold = 599;
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleVerifyGst = () => {
    if (gstin.length >= 15) {
      setIsGstVerified(true);
      showToast("GSTIN Verified! 18% Input Tax Credit enabled ✅");
    } else {
      showToast("Please enter a valid 15-digit GSTIN number", "error");
    }
  };

  // Simple Truck Drive: Truck icon comes from left and moves towards right while generating tax, then green tick
  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      showToast("Your wholesale cart is empty!", "error");
      return;
    }

    setIsCheckingOut(true);
    setIsOrderConfirmed(false);
    setTruckPos(2);
    setTaxStatusText("Calculating 18% GST Input Tax Credit...");

    // Animate simple truck icon smoothly from left to right
    requestAnimationFrame(() => {
      setTimeout(() => {
        setTruckPos(88); // Glides across towards right
      }, 50);
    });

    // Till that time, generate tax & invoice
    setTimeout(() => {
      setTaxStatusText("Generating B2B GST E-Way Tax Invoice...");
    }, 1100);

    // When the truck reaches the right (2200ms): Green tick animation comes!
    setTimeout(() => {
      setIsOrderConfirmed(true);
      setTaxStatusText("Tax Generated • Order Confirmed! ✅");
    }, 2200);

    // Smoothly close drawer & open Order Success Modal (3100ms)
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsOrderConfirmed(false);
      setTruckPos(0);
      handleSmoothClose();
      if (onCheckoutSuccess) {
        onCheckoutSuccess({
          itemCount,
          subtotal,
          grandTotal,
          gstCredit: estimatedGstCredit,
          gstin,
        });
      }
      clearCart();
    }, 3100);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden flex justify-end pointer-events-auto">
      {/* 1. Backdrop Overlay with Smooth Slow Fade In & Fade Out */}
      <div
        onClick={isCheckingOut ? undefined : handleSmoothClose}
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
        {/* PANEL HEADER: Velvet Merlot Gradient matching Help & Wishlist Drawers */}
        <div className="bg-gradient-to-r from-[#4f121a] via-[#5c1620] to-[#430e15] border-b border-[#3b0b12] text-white px-4 py-3 sm:py-3.5 flex items-center justify-between shadow-xs shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-amber-300 shadow-2xs">
              <span className="material-symbols-outlined text-[20px]">
                shopping_bag
              </span>
            </div>
            <div className="flex flex-col min-w-0 leading-tight">
              <h3 className="font-heading font-extrabold text-sm sm:text-base text-rose-50 tracking-tight truncate">
                Wholesale Order Cart ({itemCount} {itemCount === 1 ? "Item" : "Items"})
              </h3>
              <span className="text-[11px] text-rose-200/80 font-sans font-medium truncate mt-0.5">
                GST Tax Invoiced • Bulk Tier Pricing
              </span>
            </div>
          </div>

          {/* Close Button: Spins 90° and turns into white circle with bold black cross on hover */}
          <button
            onClick={isCheckingOut ? undefined : handleSmoothClose}
            disabled={isCheckingOut}
            className="group relative w-8 h-8 rounded-full bg-white/10 hover:bg-white border border-transparent hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-xs hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] shrink-0 ml-2 disabled:opacity-50"
            title="Close Cart"
          >
            <span className="material-symbols-outlined text-[19px] text-white/90 group-hover:text-neutral-950 group-hover:rotate-90 group-hover:scale-110 transition-all duration-300 ease-out font-bold">
              close
            </span>
          </button>
        </div>

        {/* Free Shipping Progress Indicator (Soft Almond Card) */}
        <div className="px-4 py-2.5 bg-[#fffdf5] border-b border-amber-200/70 text-[11px]">
          {amountNeededForFreeShipping > 0 ? (
            <p className="font-semibold text-amber-950 flex items-center justify-between">
              <span>
                Add ₹{amountNeededForFreeShipping.toFixed(0)} more for{" "}
                <strong className="font-bold text-[#701620]">FREE Cargo Freight</strong>
              </span>
              <span className="font-bold text-amber-800">
                {shippingProgress.toFixed(0)}%
              </span>
            </p>
          ) : (
            <p className="font-bold text-emerald-800 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">
                local_shipping
              </span>
              <span>Congratulations! Unlocked FREE Heavy Cargo Logistics</span>
            </p>
          )}

          <div className="w-full bg-amber-200/50 rounded-full h-1.5 mt-1.5 overflow-hidden">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto bg-gradient-to-b from-[#f8fafc] via-[#f8fafc] to-[#f1f5f9] flex flex-col gap-3">
          {cart.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-400 mb-3 shadow-xs">
                <span className="material-symbols-outlined text-[32px]">
                  production_quantity_limits
                </span>
              </div>
              <h4 className="text-base font-heading font-bold text-neutral-800">
                Your wholesale cart is empty
              </h4>
              <p className="text-xs text-neutral-500 mt-1.5 max-w-xs leading-relaxed">
                Add daily necessities or electronic gadget bulk cartons to unlock tier savings.
              </p>
              <button
                onClick={handleSmoothClose}
                className="mt-4 bg-gradient-to-r from-[#701620] to-[#591119] hover:from-[#5e121b] hover:to-[#490d14] text-white text-xs font-heading font-bold px-4 py-2 rounded-full transition-all shadow-xs cursor-pointer"
              >
                Browse Bulk Products
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/80 rounded-2xl p-3.5 shadow-2xs hover:shadow-xs transition-all flex gap-3 items-center"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-neutral-50 border border-neutral-150 p-1.5 shrink-0 overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[9.5px] font-bold bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md font-sans">
                    {item.pack || "Wholesale Master Pack"}
                  </span>
                  <h4 className="text-xs sm:text-[13px] font-heading font-bold text-neutral-900 truncate mt-1">
                    {item.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs sm:text-sm font-heading font-black text-neutral-950">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>
                    {item.originalPrice && (
                      <span className="text-[10px] text-neutral-400 line-through">
                        ₹{item.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantity Controls & Remove */}
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <div className="flex items-center border border-neutral-300 rounded-lg bg-neutral-50 overflow-hidden shadow-2xs">
                    <button
                      onClick={() => !isCheckingOut && updateQty(item.id, -1)}
                      disabled={isCheckingOut}
                      className="w-6 h-6 flex items-center justify-center text-xs font-bold text-neutral-600 hover:bg-neutral-200 active:scale-95 cursor-pointer disabled:opacity-50"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-xs font-heading font-black text-neutral-900">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => !isCheckingOut && updateQty(item.id, 1)}
                      disabled={isCheckingOut}
                      className="w-6 h-6 flex items-center justify-center text-xs font-bold text-neutral-600 hover:bg-neutral-200 active:scale-95 cursor-pointer disabled:opacity-50"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => !isCheckingOut && removeFromCart(item.id)}
                    disabled={isCheckingOut}
                    className="text-[10.5px] text-neutral-400 hover:text-red-600 flex items-center justify-center gap-0.5 cursor-pointer transition-colors disabled:opacity-50 px-2 py-1 border border-current rounded-md"
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      delete
                    </span>
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* GSTIN B2B Tax Verification Box */}
        {cart.length > 0 && (
          <div className="p-3 bg-white border-t border-neutral-200/80">
            <div className="flex items-center justify-between text-[11px] font-bold text-neutral-800 mb-1.5">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-emerald-600">
                  verified
                </span>
                Business GSTIN for Tax Credit:
              </span>
              {isGstVerified && (
                <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-black">
                  18% ITC ELIGIBLE
                </span>
              )}
            </div>
            <div className="flex gap-1.5">
              <input
                type="text"
                value={gstin}
                onChange={(e) => setGstin(e.target.value.toUpperCase())}
                placeholder="Enter 15-Digit GST Number"
                disabled={isCheckingOut}
                className="flex-1 bg-neutral-50 border border-neutral-300 rounded-lg px-2.5 py-1 text-xs font-mono font-semibold focus:outline-none focus:border-[#701620] uppercase disabled:opacity-60"
              />
              <button
                onClick={handleVerifyGst}
                disabled={isCheckingOut}
                className="bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-bold px-3 py-1 rounded-lg cursor-pointer disabled:opacity-50"
              >
                Apply
              </button>
            </div>
            <p className="text-[9.5px] text-neutral-500 mt-1">
              Estimated GST Input Credit on this order:{" "}
              <strong className="text-emerald-700 font-bold">₹{estimatedGstCredit.toLocaleString("en-IN")}</strong>
            </p>
          </div>
        )}

        {/* Drawer Order Summary & Interactive Delivery Truck Checkout Area */}
        {cart.length > 0 && (
          <div className="p-4 bg-white border-t border-neutral-200/80 flex flex-col gap-2.5 shadow-lg shrink-0">
            <div className="flex flex-col gap-1 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Total Wholesale MRP:</span>
                <span className="line-through text-neutral-400">
                  ₹{mrpTotal.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Wholesale Margin Savings:</span>
                <span>- ₹{totalWholesaleSavings.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span>Heavy Cargo Logistics:</span>
                <span>
                  {amountNeededForFreeShipping === 0 ? (
                    <span className="text-emerald-600 font-bold">FREE</span>
                  ) : (
                    "₹49"
                  )}
                </span>
              </div>
              <div className="flex justify-between pt-1 border-t border-neutral-100 text-sm font-heading font-black text-neutral-950">
                <span>Net Payable:</span>
                <span className="text-base text-[#701620]">
                  ₹{grandTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* CHECKOUT ACTION: Either Default Button OR Very Simple Truck Drive & Green Tick */}
            {isCheckingOut ? (
              <div className="w-full bg-[#3b0b12] border border-[#701620] rounded-full p-1.5 shadow-xl relative overflow-hidden h-14 flex items-center justify-between text-white transition-all duration-300">
                {/* Progress bar background gliding behind the truck from left to right */}
                <div
                  className={`absolute left-0 top-0 bottom-0 rounded-full transition-all duration-[2200ms] ease-out pointer-events-none ${
                    isOrderConfirmed
                      ? "bg-gradient-to-r from-[#701620] via-emerald-800 to-emerald-600 w-full"
                      : "bg-gradient-to-r from-[#591119] via-[#851e2a] to-[#a82535]"
                  }`}
                  style={{ width: isOrderConfirmed ? "100%" : `${Math.min(100, truckPos + 10)}%` }}
                />

                {/* Status text centered in the button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-12 text-center">
                  <span
                    className={`text-xs sm:text-[13px] font-heading font-black flex items-center gap-1.5 truncate ${
                      isOrderConfirmed
                        ? "text-emerald-300 animate-in zoom-in-95 duration-200"
                        : "text-rose-100"
                    }`}
                  >
                    {!isOrderConfirmed && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                    )}
                    <span className="truncate">{taxStatusText}</span>
                  </span>
                </div>

                {/* The Very Simple Truck Icon coming from Left and going towards Right */}
                {!isOrderConfirmed && (
                  <div
                    className="absolute top-1/2 -translate-y-1/2 transition-all duration-[2200ms] ease-in-out will-change-transform z-20 flex items-center pointer-events-none"
                    style={{ left: `${truckPos}%` }}
                  >
                    <div className="w-9 h-9 rounded-full bg-[#851e2a] border border-amber-300/80 shadow-[0_0_14px_rgba(245,158,11,0.6)] text-amber-300 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px] font-bold">
                        local_shipping
                      </span>
                    </div>
                  </div>
                )}

                {/* Celebratory Green Tick Animation when the truck arrives at the right */}
                {isOrderConfirmed && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 animate-in zoom-in-75 duration-300 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60 pointer-events-none" />
                      <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.9)] ring-4 ring-emerald-300/50">
                        <span className="material-symbols-outlined text-[24px] font-black">
                          check
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleProceedToCheckout}
                className="group relative w-full bg-gradient-to-r from-[#851e2a] to-[#6d1822] hover:from-[#751722] hover:to-[#5c121b] text-white font-heading font-black text-xs sm:text-sm py-3 px-4 rounded-full shadow-[0_4px_14px_rgba(109,24,34,0.22)] transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-between sm:justify-center sm:gap-3 cursor-pointer uppercase tracking-wider overflow-hidden"
              >
                {/* Subtle diagonal shine sweep animation */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 pointer-events-none" />

                {/* Left: Delivery Truck with Left-to-Right 1-time Drive Animation (Matching User Request) */}
                <div className="w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 flex flex-col items-center justify-center relative overflow-hidden shrink-0 transition-colors shadow-inner">
                  <span className="material-symbols-outlined text-[19px] sm:text-[20px] text-white truck-shipping-icon select-none pointer-events-none">
                    local_shipping
                  </span>
                  {/* Road speed dashes underneath truck */}
                  <div className="absolute bottom-1 left-1.5 right-1.5 h-[1.5px] rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-full animate-truck-road" />
                  </div>
                </div>

                <span className="text-center font-black tracking-wide">
                  PROCEED TO WHOLESALE CHECKOUT
                </span>

                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1.5 transition-transform duration-300 shrink-0">
                  arrow_forward
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
