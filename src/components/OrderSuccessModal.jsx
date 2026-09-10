import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function OrderSuccessModal({ onNavigateHome }) {
  const { isOrderSuccessOpen, setIsOrderSuccessOpen, lastOrderDetails } =
    useCart();
  const [secondsRemaining, setSecondsRemaining] = useState(14 * 60);

  useEffect(() => {
    if (!isOrderSuccessOpen) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOrderSuccessOpen]);

  if (!isOrderSuccessOpen || !lastOrderDetails) return null;

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timerStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  const handleClose = () => {
    setIsOrderSuccessOpen(false);
    onNavigateHome();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl sm:rounded-4xl max-w-lg w-full p-6 sm:p-8 shadow-soft-xl border border-outline-variant/20 flex flex-col gap-4 text-center my-6">
        {/* Celebration Icon with Soft Curves */}
        <div className="mx-auto w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-soft animate-bounce">
          <span className="material-symbols-outlined text-[42px] font-black">
            check_circle
          </span>
        </div>

        <div>
          <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] px-3.5 py-1 rounded-full uppercase font-black tracking-wider mb-2">
            Order Confirmed • Rider Dispatched
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-on-surface leading-tight">
            Arriving in {timerStr} Mins!
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
            Order ID{" "}
            <span className="font-mono font-black text-primary">
              {lastOrderDetails.orderId}
            </span>{" "}
            has been picked at Darkstore Pod {lastOrderDetails.pincode}.
          </p>
        </div>

        {/* Live Delivery Tracker Box */}
        <div className="bg-surface-container-low/60 rounded-3xl p-4 sm:p-5 flex flex-col gap-3 text-left border border-outline-variant/15">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-on-surface font-black flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-emerald-600">
                sports_motorsports
              </span>
              Swift Rider Ramesh K. on the way
            </span>
            <span className="font-mono font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full text-xs">
              ETA: {timerStr}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-surface-variant h-3 rounded-full overflow-hidden p-0.5">
            <div className="bg-primary h-full rounded-full transition-all duration-1000 w-3/4 animate-pulse"></div>
          </div>

          <div className="flex justify-between text-[10px] sm:text-xs text-on-surface-variant font-bold">
            <span>Packed</span>
            <span>Rider Assigned</span>
            <span className="text-primary font-black">Out for Delivery</span>
            <span>Doorstep</span>
          </div>

          <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between text-xs">
            <span className="text-on-surface-variant">Deliver to:</span>
            <span className="font-bold text-on-surface truncate max-w-[240px]">
              {lastOrderDetails.deliveryAddress}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-on-surface-variant">Amount Paid:</span>
            <span className="font-black text-sm text-primary">
              ₹{lastOrderDetails.totalPaid.toLocaleString("en-IN")} (Prepaid)
            </span>
          </div>
        </div>

        {/* Order Items Preview */}
        <div className="text-left bg-surface-bright rounded-2xl p-3.5 max-h-32 overflow-y-auto border border-outline-variant/15">
          <span className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1.5">
            Items in this order ({lastOrderDetails.items.length})
          </span>
          <div className="flex flex-col gap-1.5">
            {lastOrderDetails.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between text-xs"
              >
                <span className="text-on-surface truncate pr-2">
                  {item.qty}x {item.name}
                </span>
                <span className="font-black text-on-surface shrink-0">
                  ₹{(item.price * item.qty).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-1">
          <button
            onClick={handleClose}
            className="w-full bg-flipkart-orange hover:bg-orange-600 text-white text-xs sm:text-sm py-4 rounded-full font-black transition-all shadow-soft-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">
              shopping_bag
            </span>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
