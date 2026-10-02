import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Footer({
  onLogoClick,
  onScrollToSection,
  onNavigateCustomer,
  onNavigateVendor,
  onOpenBecomeVendor,
  onNavigateAdmin,
}) {
  const { showToast } = useCart();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      showToast("Subscribed! B2B Wholesale catalog sent to " + email + " 📦");
      setEmail("");
    } else {
      showToast("Please enter a valid business email address", "error");
    }
  };

  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 pt-10 sm:pt-14 pb-12 sm:pb-8 border-t border-neutral-800">
      <div className="max-w-[1480px] mx-auto px-4 md:px-margin">
        {/* Soft Rounded Trust Badges Bar (Wholesale B2B) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pb-10 border-b border-neutral-800">
          <div className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-900/90 p-3.5 sm:p-4 rounded-2xl border border-neutral-800 hover:border-red-900/40 transition-all cursor-pointer">
            <div className="truck-box w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-600/10 group-hover:bg-red-600/20 flex flex-col items-center justify-center text-red-500 group-hover:text-red-400 shrink-0 relative overflow-hidden transition-colors">
              {/* Truck Icon: Drives smoothly from Left to Right on cursor hover */}
              <span className="material-symbols-outlined text-[24px] sm:text-[28px] truck-shipping-icon select-none pointer-events-none">
                local_shipping
              </span>

              {/* Road speed dashes underneath truck */}
              <div className="absolute bottom-1.5 left-2 right-2 h-[2px] rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full animate-truck-road" />
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-red-400 transition-colors">
                Pan-India Cargo Delivery
              </h4>
              <p className="text-[10px] sm:text-xs text-neutral-400">
                Hydraulic liftgate doorstep dispatch
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-900/90 p-3.5 sm:p-4 rounded-2xl border border-neutral-800 hover:border-emerald-900/40 transition-all cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 shrink-0 relative overflow-hidden transition-colors">
              {/* Subtle expanding ping aura ONCE on hover */}
              <span className="absolute inset-0 rounded-xl border border-emerald-400/40 badge-ping-ring pointer-events-none" />

              {/* Verified Stamp Seal Animation (Plays 1 time) */}
              <span className="material-symbols-outlined text-[24px] sm:text-[28px] verified-stamp-icon select-none pointer-events-none">
                verified
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-emerald-400 transition-colors">
                100% Tax Invoiced
              </h4>
              <p className="text-[10px] sm:text-xs text-neutral-400">
                Claim full 18% GST Input Credit
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-900/90 p-3.5 sm:p-4 rounded-2xl border border-neutral-800 hover:border-blue-900/40 transition-all cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 shrink-0 relative overflow-hidden transition-colors">
              {/* Subtle expanding ping aura ONCE on hover */}
              <span className="absolute inset-0 rounded-xl border border-blue-400/40 badge-ping-ring pointer-events-none" />

              {/* Springing Package Box Animation (Plays 1 time) */}
              <span className="material-symbols-outlined text-[24px] sm:text-[28px] box-bounce-icon select-none pointer-events-none">
                inventory_2
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-blue-400 transition-colors">
                No Mandatory MOQ
              </h4>
              <p className="text-[10px] sm:text-xs text-neutral-400">
                Order 1 sample carton or 10,000 units
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-900/90 p-3.5 sm:p-4 rounded-2xl border border-neutral-800 hover:border-amber-900/40 transition-all cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:text-amber-300 shrink-0 relative overflow-hidden transition-colors">
              {/* Subtle expanding ping aura ONCE on hover */}
              <span className="absolute inset-0 rounded-xl border border-amber-400/40 badge-ping-ring pointer-events-none" />

              {/* Deal Handshake Motion Animation (Plays 1 time) */}
              <span className="material-symbols-outlined text-[24px] sm:text-[28px] handshake-deal-icon select-none pointer-events-none">
                handshake
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-amber-400 transition-colors">
                Factory Direct Sourcing
              </h4>
              <p className="text-[10px] sm:text-xs text-neutral-400">
                Zero middleman margin guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-8 sm:py-10 border-b border-neutral-800 text-left">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div
              className="flex items-center gap-2.5 cursor-default select-none group"
              title="SwiftMart Wholesale • B2B Direct"
            >
              {/* Animated Micro-Story Circular Badge (Shop -> Product -> Pack -> Delivery Bus -> Delivered) */}
              <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:shadow-[0_0_20px_rgba(0,86,195,0.45)] group-hover:scale-105 transition-all duration-300 overflow-hidden border border-blue-400/30 shrink-0">
                {/* Step 1: Default Storefront Icon */}
                <span className="material-symbols-outlined text-[22px] text-white animate-logo-shop shrink-0 select-none">
                  storefront
                </span>

                {/* Step 2: Product comes from top side */}
                <span className="material-symbols-outlined text-[22px] text-amber-300 absolute inset-0 m-auto flex items-center justify-center pointer-events-none opacity-0 select-none animate-logo-product">
                  shopping_bag
                </span>

                {/* Step 3: It will pack into master carton */}
                <span className="material-symbols-outlined text-[22px] text-amber-400 absolute inset-0 m-auto flex items-center justify-center pointer-events-none opacity-0 select-none animate-logo-pack">
                  inventory_2
                </span>

                {/* Step 4: Delivery bus / cargo transport comes across */}
                <span className="material-symbols-outlined text-[22px] text-white absolute inset-0 m-auto flex items-center justify-center pointer-events-none opacity-0 select-none animate-logo-bus">
                  local_shipping
                </span>

                {/* Step 5: Product delivery has been done (celebratory checkmark) */}
                <span className="material-symbols-outlined text-[22px] text-emerald-400 fill absolute inset-0 m-auto flex items-center justify-center pointer-events-none opacity-0 select-none animate-logo-done">
                  check_circle
                </span>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-white font-heading group-hover:text-blue-400 transition-colors">
                  SwiftMart
                </span>
                <span className="text-[9px] font-black uppercase text-red-500 tracking-widest mt-0.5">
                  WHOLESALE B2B
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              India's premier digital wholesale &amp; bulk-quantity procurement network.
              Supplying daily necessities, FMCG staples, and high-margin electronic gadgets directly to retailers, cloud kitchens, and institutional buyers at factory rates.
            </p>
            <div className="flex items-center gap-2.5 pt-2 flex-wrap">
              {/* Google Play Button */}
              <button
                onClick={() => showToast("Opening SwiftMart on Google Play Store... 📲")}
                className="group relative flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-3 sm:px-3.5 py-1.5 rounded-full border border-neutral-700/80 hover:border-[#00C3FF]/80 shadow-xs hover:shadow-[0_0_14px_rgba(0,195,255,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
                title="Get SwiftMart Wholesale App on Google Play"
              >
                {/* Subtle diagonal shine sweep animation */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 pointer-events-none" />

                {/* Exact Modern Google Play Store Multi-Color Triangle Icon */}
                <svg
                  viewBox="0 0 28.99 31.99"
                  className="w-[15px] h-[15px] sm:w-[16px] sm:h-[16px] shrink-0 group-hover:rotate-6 transition-transform duration-300 drop-shadow-sm"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.12 2.66a3.57 3.57 0 0 0-.12.92v24.84a3.57 3.57 0 0 0 .12.92L14 15.64Z"
                    fill="#00C3FF"
                  />
                  <path
                    d="m13.64 16 6.94-6.85L5.5.51A3.73 3.73 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"
                    fill="#00E676"
                  />
                  <path
                    d="M13.54 15.28.12 29.34a3.66 3.66 0 0 0 5.33 2.16l15.1-8.6Z"
                    fill="#FF334C"
                  />
                  <path
                    d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.54 3.54 0 0 0 1.5-4.79 3.62 3.62 0 0 0-1.5-1.5z"
                    fill="#FFC107"
                  />
                </svg>

                <span className="font-heading font-bold text-[11px] sm:text-xs tracking-tight text-white group-hover:text-[#00C3FF] transition-colors whitespace-nowrap">
                  Google Play
                </span>
              </button>

              {/* Apple App Store Button */}
              <button
                onClick={() => showToast("Opening SwiftMart on Apple App Store... 🍏")}
                className="group relative flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-3 sm:px-3.5 py-1.5 rounded-full border border-neutral-700/80 hover:border-white/80 shadow-xs hover:shadow-[0_0_14px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
                title="Download SwiftMart Wholesale App on Apple App Store"
              >
                {/* Subtle diagonal shine sweep animation */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 pointer-events-none" />

                {/* Standard Official Apple Logo Icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-[15px] h-[15px] sm:w-[16px] sm:h-[16px] shrink-0 fill-current text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.76 1.05-1.81.93-2.87-.91.04-2.01.61-2.66 1.37-.58.67-1.08 1.74-.95 2.78 1.02.08 2.06-.52 2.68-1.28z" />
                </svg>

                <span className="font-heading font-bold text-[11px] sm:text-xs tracking-tight text-white group-hover:text-neutral-100 transition-colors whitespace-nowrap">
                  App Store
                </span>
              </button>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="flex flex-col gap-2">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Bulk Categories
            </h5>
            <button
              onClick={() => onScrollToSection && onScrollToSection("daily-necessities")}
              className="text-xs text-neutral-400 hover:text-white transition-colors text-left"
            >
              Daily Life Necessities
            </button>
            <button
              onClick={() => onScrollToSection && onScrollToSection("electronics-gadgets")}
              className="text-xs text-neutral-400 hover:text-white transition-colors text-left"
            >
              Electronic Gadgets &amp; Tech
            </button>
            <button
              onClick={() => onScrollToSection && onScrollToSection("daily-necessities")}
              className="text-xs text-neutral-400 hover:text-white transition-colors text-left"
            >
              Cleaning &amp; Detergent Sacks
            </button>
            <button
              onClick={() => onScrollToSection && onScrollToSection("daily-necessities")}
              className="text-xs text-neutral-400 hover:text-white transition-colors text-left"
            >
              Cooking Oils &amp; Mandi Staples
            </button>
            <button
              onClick={() => onScrollToSection && onScrollToSection("electronics-gadgets")}
              className="text-xs text-neutral-400 hover:text-white transition-colors text-left"
            >
              TWS Earbuds &amp; Fast Chargers
            </button>
          </div>

          {/* Col 3: B2B Services */}
          <div className="flex flex-col gap-2">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              B2B &amp; Mandi Portals
            </h5>
            <button
              onClick={onNavigateCustomer}
              className="text-xs text-neutral-400 hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px] text-blue-400">dashboard</span>
              Customer Orders &amp; Invoices
            </button>
            <button
              onClick={onNavigateVendor}
              className="text-xs text-neutral-400 hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px] text-amber-400">store</span>
              Vendor Mandi Portal
            </button>
            <button
              onClick={onOpenBecomeVendor}
              className="text-xs text-amber-300 hover:text-amber-200 font-bold transition-colors text-left cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px] text-amber-400">handshake</span>
              Become a Mandi Vendor (0% Fee)
            </button>
            <button
              onClick={onNavigateAdmin}
              className="text-xs text-red-400 hover:text-red-300 font-bold transition-colors text-left cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px] text-red-400">admin_panel_settings</span>
              Admin Control Center
            </button>
            <span className="text-xs text-neutral-400">Credit Line up to ₹5 Lakhs</span>
            <span className="text-xs text-neutral-400">Pallet &amp; Container Logistics</span>
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-2">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Wholesale Rate Sheets
            </h5>
            <p className="text-xs text-neutral-400">
              Get weekly mandi price drops and bulk gadget clearance catalogs in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter business email"
                className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white hover:text-[#ffd700] font-bold text-xs py-2.5 px-4 rounded-full transition-colors duration-200 cursor-pointer shadow-sm active:scale-[0.99]"
              >
                Subscribe to Price Alerts
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>
            &copy; 2026 SwiftMart Wholesale Technologies Ltd. GSTIN: 27AABCS1429B1Z0. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">B2B Terms of Trade</span>
            <span className="hover:text-neutral-400 cursor-pointer">GST Compliance</span>
            <span className="hover:text-neutral-400 cursor-pointer">Security &amp; Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
