import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function OrderSuccessModal({ onNavigateHome }) {
  const { isOrderSuccessOpen, setIsOrderSuccessOpen, lastOrderDetails } =
    useCart();

  // Dual-state management for smooth entry & exit animations
  const [shouldRender, setShouldRender] = useState(isOrderSuccessOpen);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  // Manage enter and exit animations
  useEffect(() => {
    let animFrame1;
    let animFrame2;
    let exitTimer;

    if (isOrderSuccessOpen) {
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
      }, 350); // Matches transition duration
    }

    return () => {
      cancelAnimationFrame(animFrame1);
      cancelAnimationFrame(animFrame2);
      clearTimeout(exitTimer);
    };
  }, [isOrderSuccessOpen]);

  // Smooth close handler with scale/fade exit transition
  const handleSmoothClose = () => {
    setIsAnimatingIn(false);
    setTimeout(() => {
      setIsOrderSuccessOpen(false);
      if (onNavigateHome) onNavigateHome();
    }, 350);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOrderSuccessOpen) {
        handleSmoothClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOrderSuccessOpen]);

  if (!shouldRender || !lastOrderDetails) return null;

  const invoiceNumber = lastOrderDetails.orderId || "INV-990445";
  const gstinNumber = lastOrderDetails.gstin || "27AABCS1429B1Z0";
  const invoiceTotal =
    lastOrderDetails.grandTotal || lastOrderDetails.totalPaid || 0;
  const gstCreditAmount =
    lastOrderDetails.gstCredit || Math.round(invoiceTotal * 0.18);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* 1. Backdrop Overlay with Smooth Fade In & Fade Out */}
      <div
        onClick={handleSmoothClose}
        className={`fixed inset-0 bg-neutral-950/70 backdrop-blur-[3px] transition-opacity duration-350 ease-in-out cursor-pointer ${
          isAnimatingIn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* 2. Modal Dialog Panel with Spring Scale & Opacity Transition */}
      <div
        className={`relative w-full max-w-[520px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] z-10 overflow-hidden flex flex-col transition-all duration-350 will-change-transform ${
          isAnimatingIn
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
        style={{
          transitionTimingFunction: isAnimatingIn
            ? "cubic-bezier(0.16, 1, 0.3, 1)" /* Spring deceleration */
            : "cubic-bezier(0.32, 0, 0.67, 0)",
        }}
      >
        {/* Top Header Bar with Close Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={handleSmoothClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-950 flex items-center justify-center transition-all duration-200 cursor-pointer group"
            title="Close"
          >
            <span className="material-symbols-outlined text-[19px] group-hover:rotate-90 transition-transform duration-200">
              close
            </span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* CELEBRATORY GREEN TICK ANIMATION                               */}
        {/* ============================================================== */}
        <div className="pt-8 pb-3 px-6 text-center flex flex-col items-center">
          
          {/* Animated Green Tick Badge with Ripple Glow */}
          <div className="relative mb-4 flex items-center justify-center">
            {/* Outer Expanding Pulse Ripple */}
            <div className="absolute w-24 h-24 rounded-full bg-emerald-400/25 animate-ping pointer-events-none" />
            
            {/* Soft Middle Glow Ring */}
            <div className="absolute w-22 h-22 rounded-full bg-emerald-100 animate-pulse pointer-events-none" />

            {/* Core Vibrant Green Tick Disc */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-[0_12px_28px_rgba(16,185,129,0.4)] ring-8 ring-emerald-100/90 transition-transform duration-500 hover:scale-105">
              <span className="material-symbols-outlined text-[44px] font-black animate-in zoom-in-75 duration-300">
                check_circle
              </span>
            </div>
          </div>

          {/* Wholesale B2B Confirmation Badge */}
          <div className="mb-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] px-3.5 py-1 rounded-full font-heading font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              WHOLESALE B2B ORDER CONFIRMED • GST INVOICE GENERATED
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl font-heading font-black text-neutral-900 leading-tight">
            Wholesale Order Placed Successfully!
          </h2>

          <p className="text-xs sm:text-[13px] text-neutral-600 mt-1.5 max-w-md leading-relaxed">
            Tax Invoice{" "}
            <span className="font-mono font-bold text-neutral-900 bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200">
              {invoiceNumber}
            </span>{" "}
            generated with 18% GST Input Tax Credit eligibility.
          </p>
        </div>

        {/* ============================================================== */}
        {/* CLEAN B2B INVOICE & LOGISTICS SUMMARY CARD                    */}
        {/* ============================================================== */}
        <div className="mx-5 sm:mx-7 mb-4 bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-200/80 shadow-2xs flex flex-col gap-3.5">
          
          {/* Dispatch Status Header */}
          <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-200/70">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">
                  local_shipping
                </span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-neutral-900 leading-tight text-xs">
                  SwiftMart Freight Dispatch
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Surface Cargo In Transit to your store
                </p>
              </div>
            </div>

            <span className="text-[10.5px] font-mono font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300/60 px-2.5 py-0.5 rounded-full shrink-0">
              ETA: Express Mandi
            </span>
          </div>

          {/* 4-Step Milestone Progress Bar */}
          <div>
            <div className="flex justify-between text-[10px] font-heading font-bold text-neutral-500 mb-1.5">
              <span className="text-emerald-700 flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[12px]">check</span>
                Booked
              </span>
              <span className="text-emerald-700 flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[12px]">check</span>
                Packed
              </span>
              <span className="text-emerald-700 flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[12px]">check</span>
                GST Invoiced
              </span>
              <span className="text-[#851e2a] font-extrabold flex items-center gap-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#851e2a] animate-ping" />
                Dispatched
              </span>
            </div>
            
            <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden p-0.5">
              <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-[#851e2a] h-full rounded-full transition-all duration-1000 w-full" />
            </div>
          </div>

          {/* Tax & GSTIN Details Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
            <div className="bg-white p-2.5 rounded-xl border border-neutral-200/70">
              <span className="text-[10.5px] text-neutral-500 block">
                Business GSTIN:
              </span>
              <span className="font-mono font-bold text-neutral-900 text-xs truncate block mt-0.5">
                {gstinNumber}
              </span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-neutral-200/70">
              <span className="text-[10.5px] text-neutral-500 block">
                18% GST ITC Benefit:
              </span>
              <span className="font-heading font-bold text-emerald-700 text-xs block mt-0.5">
                ₹{gstCreditAmount.toLocaleString("en-IN")} Claimable
              </span>
            </div>
          </div>

          {/* Total B2B Payable Amount */}
          <div className="pt-2 border-t border-neutral-200/70 flex items-center justify-between text-xs">
            <div>
              <span className="text-neutral-500 block text-[11px]">
                Total B2B Net Payable:
              </span>
              <span className="text-[10.5px] text-emerald-700 font-bold">
                Tax-compliant receipt issued
              </span>
            </div>
            <span className="font-heading font-black text-base sm:text-lg text-[#701620]">
              ₹{invoiceTotal.toLocaleString("en-IN")}
            </span>
          </div>

        </div>

        {/* ============================================================== */}
        {/* FOOTER ACTION                                                  */}
        {/* ============================================================== */}
        <div className="p-5 pt-0">
          <button
            onClick={handleSmoothClose}
            className="w-full bg-gradient-to-r from-[#851e2a] to-[#6d1822] hover:from-[#751722] hover:to-[#5c121b] text-white font-heading font-bold text-xs sm:text-sm py-3.5 rounded-full shadow-[0_4px_14px_rgba(109,24,34,0.22)] transition-all hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight"
          >
            <span className="material-symbols-outlined text-[18px]">
              storefront
            </span>
            <span>Back to Wholesale Catalog</span>
          </button>
        </div>

      </div>
    </div>
  );
}
