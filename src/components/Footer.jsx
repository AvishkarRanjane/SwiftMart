import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Footer({ onNavigate }) {
  const { showToast } = useCart();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      showToast("Subscribed! ₹150 coupon sent to " + email + " 🎁");
      setEmail("");
    } else {
      showToast("Please enter a valid email address", "error");
    }
  };

  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 pt-10 sm:pt-14 pb-16 sm:pb-8 border-t border-neutral-800">
      <div className="max-w-[1480px] mx-auto px-4 md:px-margin">
        {/* Soft Rounded Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pb-10 border-b border-neutral-800">
          <div className="flex items-center gap-3 bg-neutral-800/60 p-3.5 sm:p-4 rounded-3xl border border-neutral-700/50 shadow-soft">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-flipkart-yellow shrink-0">
              <span className="material-symbols-outlined text-[24px] sm:text-[28px]">
                bolt
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-black text-white">
                15-Min Delivery
              </h4>
              <p className="text-[10px] sm:text-xs text-neutral-400">
                Hyperlocal darkstore network
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-neutral-800/60 p-3.5 sm:p-4 rounded-3xl border border-neutral-700/50 shadow-soft">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <span className="material-symbols-outlined text-[24px] sm:text-[28px]">
                verified_user
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-black text-white">
                100% Authentic
              </h4>
              <p className="text-[10px] sm:text-xs text-neutral-400">
                Direct from brands &amp; FMCG
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-neutral-800/60 p-3.5 sm:p-4 rounded-3xl border border-neutral-700/50 shadow-soft">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
              <span className="material-symbols-outlined text-[24px] sm:text-[28px]">
                currency_rupee
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-black text-white">
                DMart Price Match
              </h4>
              <p className="text-[10px] sm:text-xs text-neutral-400">
                SuperSaver wholesale rates
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-neutral-800/60 p-3.5 sm:p-4 rounded-3xl border border-neutral-700/50 shadow-soft">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
              <span className="material-symbols-outlined text-[24px] sm:text-[28px]">
                lock
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-black text-white">
                Instant Refunds
              </h4>
              <p className="text-[10px] sm:text-xs text-neutral-400">
                UPI zero-question returns
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-8 sm:py-10 border-b border-neutral-800 text-left">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onNavigate("home")}
            >
              <div className="w-9 h-9 rounded-2xl bg-primary flex items-center justify-center text-white font-black">
                <span className="material-symbols-outlined text-[20px]">
                  bolt
                </span>
              </div>
              <span className="text-xl font-black text-white">SwiftMart</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
              India's premier high-velocity quick commerce platform. Combining
              the ultra-low wholesale pricing of DMart with Flipkart's instant
              delivery promise.
            </p>
            <div className="flex items-center gap-2 text-neutral-400 pt-2 flex-wrap">
              <span className="text-xs font-bold text-white">App:</span>
              <button
                onClick={() => showToast("Redirecting to Google Play Store...")}
                className="px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer border border-neutral-700"
              >
                <span className="material-symbols-outlined text-[15px]">
                  shop
                </span>
                Google Play
              </button>
              <button
                onClick={() => showToast("Redirecting to Apple App Store...")}
                className="px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer border border-neutral-700"
              >
                <span className="material-symbols-outlined text-[15px]">
                  smartphone
                </span>
                App Store
              </button>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="flex flex-col gap-2">
            <h5 className="text-xs uppercase font-black tracking-wider text-white mb-1">
              Top Categories
            </h5>
            <button
              onClick={() => onNavigate("home")}
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Grocery &amp; Staples
            </button>
            <button
              onClick={() => onNavigate("product")}
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              boAt Earbuds &amp; Audio
            </button>
            <button
              onClick={() => onNavigate("home")}
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Mobiles &amp; Tablets
            </button>
            <button
              onClick={() => onNavigate("home")}
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              DMart SuperSaver Combos
            </button>
            <button
              onClick={() => onNavigate("home")}
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Home Cleaning Essentials
            </button>
          </div>

          {/* Col 3: Customer Care */}
          <div className="flex flex-col gap-2">
            <h5 className="text-xs uppercase font-black tracking-wider text-white mb-1">
              Customer Support
            </h5>
            <button
              onClick={() => showToast("Order tracking active via SMS")}
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Track Active Order
            </button>
            <button
              onClick={() =>
                showToast("Instant return policy: 7 days no questions asked")
              }
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Returns &amp; Refunds
            </button>
            <button
              onClick={() =>
                showToast("Darkstore cancellation available within 3 mins")
              }
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancellation Policy
            </button>
            <button
              onClick={() => onNavigate("login")}
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Account Settings
            </button>
            <button
              onClick={() => onNavigate("signup")}
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Register New Account
            </button>
            <button
              onClick={() => showToast("Toll Free Support: 1800-SWIFT-CARE")}
              className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Help Center &amp; FAQs
            </button>
          </div>

          {/* Col 4: Newsletter with Pill Inputs */}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs uppercase font-black tracking-wider text-white">
              VIP Deal Alerts
            </h5>
            <p className="text-xs text-neutral-400">
              Get secret midnight price drop alerts and ₹150 coupon.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 py-2.5 rounded-full bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-primary font-medium"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-flipkart-yellow hover:bg-amber-400 text-neutral-900 font-black text-xs rounded-full transition-colors cursor-pointer shadow-soft active:scale-95"
              >
                Claim ₹150 Coupon
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[11px] text-neutral-500 text-center sm:text-left">
          <p>
            © 2026 SwiftMart Technologies India Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3 font-semibold">
            <button
              onClick={() => showToast("Privacy Policy viewed")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => showToast("Terms of Service viewed")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span>•</span>
            <button
              onClick={() => showToast("256-Bit SSL Secured")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              256-Bit SSL
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
