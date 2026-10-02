import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { MEGA_MENU_CATEGORIES } from "../data/wholesaleData";

const TYPEWRITER_SUGGESTIONS = [
  "Search For Wholesale Daily Necessities, Electronic Gadgets, Bulk Lots...",
  "Search 'Basmati Rice 25kg Master Bag'...",
  "Search 'TWS Wireless Earbuds Bulk Lot (50 Pcs)'...",
  "Search 'Cold Pressed Mustard Oil 15L Tin'...",
  "Search 'Fast Charging Cable Packs (100 Pcs)'...",
  "Search 'Stainless Steel Cookware Sets (10 Pcs)'...",
  "Search 'Wireless Power Banks 20000mAh Carton'...",
  "Search 'Direct Factory Mandi Wholesale Deals'...",
];

export default function Header({
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
  onOpenCart,
  onOpenWishlist,
  onOpenAccount,
  onOpenSupport,
  onSelectCategory,
  onScrollToSection,
  onLogoClick,
  onNavigateCustomer,
  onNavigateVendor,
  onOpenBecomeVendor,
  onNavigateAdmin,
}) {
  const { itemCount, grandTotal, wishlist, showToast } = useCart();
  const { user, toggleVendorStatus } = useAuth();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMegaCat, setActiveMegaCat] = useState(MEGA_MENU_CATEGORIES[0]);
  const megaMenuRef = useRef(null);

  // Mobile full-screen search modal state (Requirement 8)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [mobileSearchText, setMobileSearchText] = useState("");
  const mobileSearchInputRef = useRef(null);

  // Account dropdown state & click-outside handling
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const accountDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target)
      ) {
        setIsAccountDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Typewriter animation state for search bar
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [displayText, setDisplayText] = useState(TYPEWRITER_SUGGESTIONS[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (searchQuery) return; // Pause typewriter if user is typing manually

    const currentPhrase = TYPEWRITER_SUGGESTIONS[suggestionIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 50); // Natural typing speed
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200); // Pause to read
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 25); // Faster backspace speed
      } else {
        setIsDeleting(false);
        setSuggestionIndex((prev) => (prev + 1) % TYPEWRITER_SUGGESTIONS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, suggestionIndex, searchQuery]);

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!searchQuery || !searchQuery.trim()) {
        showToast("Please enter a search keyword", "info");
        return;
      }
      onSearchSubmit(searchQuery.trim());
    }
  };

  const handleCategoryClick = (catId, subCat = "all") => {
    setIsMegaMenuOpen(false);
    if (onSelectCategory) {
      onSelectCategory(catId, subCat);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      {/* 1. TOP ANNOUNCEMENT & UTILITY TICKER (Matching Reference Image 1 with Continuous Marquee) */}
      <div className="bg-neutral-950 text-white text-[11px] py-1.5 px-3 sm:px-4 md:px-margin border-b border-neutral-800 overflow-hidden">
        <div className="max-w-[1480px] mx-auto flex items-center justify-between gap-3 sm:gap-4">
          {/* Left Action: Fixed Help & Support (Sleek Compact Pill Button matching Play Store & App Store) */}
          <div className="flex items-center shrink-0 z-20 bg-neutral-950 pr-2">
            <button
              onClick={() => (onOpenSupport ? onOpenSupport() : onScrollToSection("wholesale-faq"))}
              className="group relative flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-neutral-700/80 hover:border-amber-400/80 shadow-xs hover:shadow-[0_0_14px_rgba(251,191,36,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              title="SwiftMart Wholesale Help & Support"
            >
              {/* Subtle diagonal shine sweep animation */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 pointer-events-none" />

              {/* Attractive Customer Support Icon with Amber Glow & Micro-animation */}
              <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-amber-400 group-hover:text-amber-300 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] shrink-0 select-none">
                support_agent
              </span>

              {/* Sleek Bold Font */}
              <span className="font-heading font-bold text-[11px] sm:text-xs tracking-tight text-white group-hover:text-amber-300 transition-colors whitespace-nowrap">
                Help &amp; Support
              </span>
            </button>
          </div>

          {/* Continuous Left-to-Right Scrolling Marquee Ticker */}
          <div className="relative overflow-hidden flex-1 mx-1 sm:mx-3 group">
            {/* Subtle Gradient Fade Masks on edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

            <div className="flex animate-marquee-ltr gap-6 items-center whitespace-nowrap cursor-default">
              {/* Marquee Track 1 */}
              <div className="flex items-center gap-6 shrink-0 font-medium">
                <span className="text-amber-300 font-bold">
                  at wholesale price — Sale 365 Days
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-200">
                  SALE 365 DAYS — Unbeatable prices, every day
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-emerald-400 font-semibold">
                  Free Shipping — Above ₹599
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-red-400 font-bold">
                  JOB FRAUD ALERT: Never pay money for job offers
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-blue-300 font-semibold">
                  100% GST Tax Invoices Available
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-amber-400 font-semibold">
                  No Minimum Order Quantity (No MOQ)
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-emerald-300 font-medium">
                  Direct Factory Mandi Rates
                </span>
                <span className="text-neutral-600">•</span>
              </div>

              {/* Marquee Track 2 (Duplicate for seamless continuous loop) */}
              <div className="flex items-center gap-6 shrink-0 font-medium" aria-hidden="true">
                <span className="text-amber-300 font-bold">
                  at wholesale price — Sale 365 Days
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-200">
                  SALE 365 DAYS — Unbeatable prices, every day
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-emerald-400 font-semibold">
                  Free Shipping — Above ₹599
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-red-400 font-bold">
                  JOB FRAUD ALERT: Never pay money for job offers
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-blue-300 font-semibold">
                  100% GST Tax Invoices Available
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-amber-400 font-semibold">
                  No Minimum Order Quantity (No MOQ)
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-emerald-300 font-medium">
                  Direct Factory Mandi Rates
                </span>
                <span className="text-neutral-600">•</span>
              </div>
            </div>
          </div>

          {/* Right App Store Badges (Matching Reference Image 1 with Standard SVG Icons, Animation & Bold Font) */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0 z-20 bg-neutral-950 pl-2">
            {/* Google Play Button */}
            <button
              onClick={() => showToast("Opening SwiftMart on Google Play Store... 📲")}
              className="group relative flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-neutral-700/80 hover:border-[#00C3FF]/80 shadow-xs hover:shadow-[0_0_14px_rgba(0,195,255,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              title="Get SwiftMart Wholesale App on Google Play"
            >
              {/* Subtle diagonal shine sweep animation */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 pointer-events-none" />

              {/* Exact Modern Google Play Store Multi-Color Triangle Icon (Matching User Reference) */}
              <svg
                viewBox="0 0 28.99 31.99"
                className="w-[15px] h-[15px] sm:w-[16px] sm:h-[16px] shrink-0 group-hover:rotate-6 transition-transform duration-300 drop-shadow-sm"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left: Vibrant Cyan / Sky Blue */}
                <path
                  d="M.12 2.66a3.57 3.57 0 0 0-.12.92v24.84a3.57 3.57 0 0 0 .12.92L14 15.64Z"
                  fill="#00C3FF"
                />
                {/* Top: Vibrant Green */}
                <path
                  d="m13.64 16 6.94-6.85L5.5.51A3.73 3.73 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"
                  fill="#00E676"
                />
                {/* Bottom: Vibrant Coral Red */}
                <path
                  d="M13.54 15.28.12 29.34a3.66 3.66 0 0 0 5.33 2.16l15.1-8.6Z"
                  fill="#FF334C"
                />
                {/* Right Tip: Golden Yellow */}
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
              className="group relative flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-neutral-700/80 hover:border-white/80 shadow-xs hover:shadow-[0_0_14px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              title="Download SwiftMart Wholesale App on Apple App Store"
            >
              {/* Subtle diagonal shine sweep animation */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 pointer-events-none" />

              {/* Standard Official Apple Logo Icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-[15px] h-[15px] sm:w-[16px] sm:h-[16px] shrink-0 fill-current text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.76 1.05-1.81.93-2.87-.91.04-2.01.61-2.66 1.37-.58.67-1.08 1.74-.95 2.78 1.02.08 2.06-.52 2.68-1.28z" />
              </svg>

              <span className="font-heading font-bold text-[11px] sm:text-xs tracking-tight text-white group-hover:text-neutral-100 transition-colors whitespace-nowrap">
                App Store
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER ROW (Matching Reference Images 1 & 2) */}
      <div className="px-3 sm:px-4 md:px-margin py-2.5 sm:py-3 bg-white border-b border-neutral-200">
        <div className="max-w-[1480px] mx-auto flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo: SwiftMart WHOLESALE (Branding element only, non-navigational) */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-default select-none shrink-0 group"
            title="SwiftMart Wholesale • B2B Direct"
          >
            {/* Animated Micro-Story Circular Badge (Shop -> Product -> Pack -> Delivery Bus -> Delivered) */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:shadow-[0_0_20px_rgba(0,86,195,0.45)] group-hover:scale-105 transition-all duration-300 overflow-hidden border border-blue-400/30">
              {/* Step 1: Default Storefront Icon (dives downward on hover) */}
              <span className="material-symbols-outlined text-[23px] sm:text-[25px] text-white animate-logo-shop shrink-0 select-none">
                storefront
              </span>

              {/* Step 2: Product comes from top side */}
              <span className="material-symbols-outlined text-[23px] sm:text-[25px] text-amber-300 absolute inset-0 m-auto flex items-center justify-center pointer-events-none opacity-0 select-none animate-logo-product">
                shopping_bag
              </span>

              {/* Step 3: It will pack into master carton */}
              <span className="material-symbols-outlined text-[23px] sm:text-[25px] text-amber-400 absolute inset-0 m-auto flex items-center justify-center pointer-events-none opacity-0 select-none animate-logo-pack">
                inventory_2
              </span>

              {/* Step 4: Delivery bus / cargo transport comes across */}
              <span className="material-symbols-outlined text-[23px] sm:text-[25px] text-white absolute inset-0 m-auto flex items-center justify-center pointer-events-none opacity-0 select-none animate-logo-bus">
                local_shipping
              </span>

              {/* Step 5: Product delivery has been done (celebratory checkmark) */}
              <span className="material-symbols-outlined text-[23px] sm:text-[25px] text-emerald-400 fill absolute inset-0 m-auto flex items-center justify-center pointer-events-none opacity-0 select-none animate-logo-done">
                check_circle
              </span>
            </div>

            {/* Typography with Increased Weight & Heading Font */}
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-[26px] font-black text-neutral-950 tracking-tight font-heading group-hover:text-primary transition-colors">
                  SwiftMart
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shrink-0"></span>
              </div>
              <div className="flex items-center gap-1.5 mt-1 font-heading">
                <span className="bg-red-600 text-white font-heading font-black text-[10px] sm:text-[11px] uppercase tracking-widest px-2 py-0.5 rounded-xs shadow-xs">
                  WHOLESALE
                </span>
                <span className="text-[10px] sm:text-[11px] text-neutral-700 font-heading font-black uppercase tracking-wider hidden sm:inline">
                  • B2B DIRECT
                </span>
              </div>
            </div>
          </div>

          {/* Prominent Search Bar for Desktop/Tablet (Hidden on Mobile View) */}
          <div className="hidden md:block flex-1 max-w-2xl min-w-0">
            <div className="relative flex items-center w-full rounded-full border-2 border-red-600 bg-white overflow-hidden shadow-xs hover:shadow-md focus-within:shadow-[0_0_16px_rgba(220,38,38,0.22)] focus-within:border-red-600 transition-all">
              {/* Typewriter Animated Placeholder Overlay (Visible when search query is empty) */}
              {!searchQuery && (
                <div
                  className="absolute left-4 sm:left-5 right-28 pointer-events-none flex items-center text-xs sm:text-sm font-sans font-medium text-neutral-400 select-none overflow-hidden whitespace-nowrap"
                  aria-hidden="true"
                >
                  <span className="truncate">{displayText}</span>
                  <span className="inline-block w-[1.5px] h-3.5 sm:h-4 bg-red-600 ml-0.5 animate-pulse shrink-0" />
                </div>
              )}

              {/* Native Input Field with proper font and weight */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyPress}
                className="w-full pl-4 sm:pl-5 pr-10 py-2 sm:py-2.5 text-xs sm:text-sm font-sans font-semibold text-neutral-900 focus:outline-none bg-transparent min-w-0 z-10"
                aria-label="Search wholesale catalog"
              />

              {/* Clear Search Button */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-2 text-neutral-400 hover:text-neutral-700 cursor-pointer z-20 shrink-0"
                  title="Clear search"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    close
                  </span>
                </button>
              )}

              {/* Red Solid Search Button with Validation */}
              <button
                onClick={() => {
                  if (!searchQuery || !searchQuery.trim()) {
                    showToast("Please enter a search keyword", "info");
                    return;
                  }
                  onSearchSubmit(searchQuery.trim());
                }}
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white pl-4 pr-5 sm:pl-5 sm:pr-6 py-2 sm:py-2.5 font-heading font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 z-20 shadow-xs"
                title="Search wholesale catalog"
              >
                {/* Crisp Bold Magnifying Glass SVG Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 text-white"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <span className="tracking-tight text-[13px] sm:text-sm">Search</span>
              </button>
            </div>
          </div>

          {/* Right Utility Links (Matching Reference Image with Proper Weight, Bold Font & Crisp Proportions) */}
          <div className="flex items-center gap-2 sm:gap-3.5 md:gap-5 shrink-0">
            {/* Mobile Search Icon Button (Requirement 8 - Displays icon only on mobile, expands into full-screen search) */}
            <button
              id="mobile-search-btn"
              data-testid="mobile-search-btn"
              onClick={() => {
                setMobileSearchText(searchQuery || "");
                setIsMobileSearchOpen(true);
                setTimeout(() => {
                  mobileSearchInputRef.current?.focus();
                }, 100);
              }}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200/80 shadow-xs transition-colors cursor-pointer shrink-0"
              title="Search wholesale catalog"
              aria-label="Open mobile search"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-neutral-900"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* 1. Account with Interactive Dropdown Menu */}
            <div className="relative" ref={accountDropdownRef}>
              <button
                onClick={() => setIsAccountDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 sm:gap-2.5 text-left hover:text-primary transition-colors cursor-pointer group p-0.5"
                title="Your Wholesale Account & GSTIN Profile"
                aria-expanded={isAccountDropdownOpen}
              >
                <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-neutral-100 group-hover:bg-primary/10 border border-neutral-200/80 flex items-center justify-center text-neutral-800 group-hover:text-primary transition-all duration-200 shadow-xs group-hover:shadow-sm shrink-0">
                  {/* Crisp Bold Person SVG Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[15px] h-[15px] sm:w-[16.5px] sm:h-[16.5px] text-neutral-800 group-hover:text-primary group-hover:scale-105 transition-all duration-200"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="hidden sm:flex flex-col leading-tight text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] sm:text-[10.5px] text-neutral-500 font-semibold font-sans tracking-tight">
                      Hello, {user?.name?.split(" ")[0] || "Trader"}
                    </span>
                    {user?.isVendor && (
                      <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[8.5px] font-black uppercase px-1 py-0.2 rounded leading-none">
                        Vendor
                      </span>
                    )}
                  </div>
                  <span className="text-[13px] sm:text-[13.5px] font-black text-neutral-950 font-heading tracking-tight group-hover:text-primary transition-colors flex items-center gap-0.5">
                    Account
                    <span className="material-symbols-outlined text-[15px] text-neutral-400 group-hover:text-primary transition-transform">
                      {isAccountDropdownOpen ? "expand_less" : "expand_more"}
                    </span>
                  </span>
                </div>
              </button>

              {/* Account Dropdown Menu (Unified Customer + Vendor Workflow) */}
              {isAccountDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-84 bg-white rounded-2xl shadow-2xl border border-neutral-200/90 py-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {/* Business Card Header & Role Identity */}
                  <div className="px-4 pb-3 border-b border-neutral-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 text-white font-black text-sm flex items-center justify-center shadow-xs shrink-0">
                        {user?.name?.slice(0, 2).toUpperCase() || "AS"}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-heading font-black text-sm text-neutral-900 block truncate">
                          {user?.name || "Avishkar Sharma"}
                        </span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {user?.isVendor ? (
                            <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-amber-300/80 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                              Customer + Vendor
                            </span>
                          ) : (
                            <span className="bg-blue-50 text-blue-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-blue-200">
                              Customer Account
                            </span>
                          )}
                          <span className="text-[10px] text-neutral-400 font-mono truncate">
                            {user?.isVendor ? user.vendorDetails?.city : "B2B Buyer"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Role Switcher Pill for instant UX testing */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVendorStatus();
                        showToast(
                          user?.isVendor
                            ? "Switched to Customer-only view"
                            : "Vendor permissions activated! Dual Customer + Vendor mode unlocked! 🏪"
                        );
                      }}
                      className="mt-2.5 w-full flex items-center justify-between text-[11px] font-bold py-1.5 px-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors border border-neutral-200/80 cursor-pointer"
                      title="Click to toggle between Customer-only and Dual Customer+Vendor mode"
                    >
                      <span className="text-neutral-500">Simulate Account State:</span>
                      <span className="flex items-center gap-1 font-mono text-primary text-[10.5px]">
                        {user?.isVendor ? "Customer + Vendor ⚡" : "Customer (Default) 🛒"}
                        <span className="material-symbols-outlined text-[13px]">swap_horiz</span>
                      </span>
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="py-1.5 px-2">
                    {/* SECTION 1: Customer Dashboard (Customer features are NEVER lost) */}
                    <button
                      onClick={() => {
                        setIsAccountDropdownOpen(false);
                        if (onNavigateCustomer) onNavigateCustomer();
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-neutral-50 flex items-center gap-3 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                        <span className="material-symbols-outlined text-[19px]">dashboard</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-heading font-bold text-xs sm:text-[13px] text-neutral-900 group-hover:text-primary transition-colors block leading-tight">
                          Customer Dashboard
                        </span>
                        <span className="text-[11px] text-neutral-400 block truncate">
                          Purchase History, Track Orders &amp; Wallet
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-neutral-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0">
                        chevron_right
                      </span>
                    </button>

                    {/* SECTION 2: VENDOR WORKFLOW (Conditional display based on user account state) */}
                    {!user?.isVendor ? (
                      /* If Customer has NOT become a Vendor yet: Display "Become a Vendor" Application CTA */
                      <button
                        onClick={() => {
                          setIsAccountDropdownOpen(false);
                          if (onOpenBecomeVendor) onOpenBecomeVendor();
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent hover:from-amber-500/25 border border-amber-300/60 my-1 flex items-center gap-3 transition-all cursor-pointer group shadow-xs"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs shrink-0">
                          <span className="material-symbols-outlined text-[19px]">handshake</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-heading font-black text-xs sm:text-[13px] text-amber-950 block leading-tight">
                              Become a Vendor
                            </span>
                            <span className="bg-red-600 text-white text-[9px] font-black uppercase px-1.5 py-0.2 rounded">
                              0% Fee
                            </span>
                          </div>
                          <span className="text-[11px] text-amber-800/80 block truncate">
                            Sell Wholesale Direct to 45,000+ Buyers
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-amber-700 group-hover:translate-x-0.5 transition-all shrink-0">
                          arrow_forward
                        </span>
                      </button>
                    ) : (
                      /* Once Activated: Display "Switch to Vendor Dashboard" prominently */
                      <button
                        onClick={() => {
                          setIsAccountDropdownOpen(false);
                          if (onNavigateVendor) onNavigateVendor();
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent hover:from-amber-500/25 border border-amber-400/80 my-1 flex items-center gap-3 transition-all cursor-pointer group shadow-xs"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs shrink-0">
                          <span className="material-symbols-outlined text-[19px]">store</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-heading font-black text-xs sm:text-[13px] text-amber-950 block leading-tight">
                              Switch to Vendor Dashboard
                            </span>
                            <span className="bg-emerald-600 text-white text-[9px] font-black uppercase px-1.5 py-0.2 rounded">
                              Active
                            </span>
                          </div>
                          <span className="text-[11px] text-amber-800/80 block truncate">
                            Factory Lots, Stock, Orders &amp; Payouts
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-amber-700 group-hover:translate-x-0.5 transition-all shrink-0">
                          arrow_forward
                        </span>
                      </button>
                    )}

                    {/* SECTION 3: Admin Dashboard Link (Master Control) */}
                    <button
                      onClick={() => {
                        setIsAccountDropdownOpen(false);
                        if (onNavigateAdmin) onNavigateAdmin();
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-red-50/80 flex items-center gap-3 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 border border-red-200">
                        <span className="material-symbols-outlined text-[19px]">admin_panel_settings</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-heading font-black text-xs sm:text-[13px] text-neutral-900 group-hover:text-red-700 transition-colors block leading-tight">
                            Admin Control Center
                          </span>
                          <span className="bg-neutral-900 text-white text-[9px] font-black uppercase px-1.5 py-0.2 rounded">
                            Master
                          </span>
                        </div>
                        <span className="text-[11px] text-neutral-400 block truncate">
                          Platform Analytics, Orders &amp; Approvals
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-neutral-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all shrink-0">
                        chevron_right
                      </span>
                    </button>

                    {/* SECTION 4: GSTIN & Tax Certificates Modal Link */}
                    <button
                      onClick={() => {
                        setIsAccountDropdownOpen(false);
                        onOpenAccount();
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-neutral-50 flex items-center gap-3 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                        <span className="material-symbols-outlined text-[19px]">receipt_long</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-heading font-bold text-xs sm:text-[13px] text-neutral-900 group-hover:text-primary transition-colors block leading-tight">
                          GSTIN Business Profile
                        </span>
                        <span className="text-[11px] text-neutral-400 block truncate">
                          Manage Tax Invoicing &amp; Certificates
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="flex items-center gap-2 sm:gap-2.5 text-left hover:text-rose-600 transition-colors cursor-pointer group p-0.5"
              title="Saved Bulk Wishlist Items"
            >
              <div className={`relative w-10 h-10 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all duration-200 shadow-xs group-hover:shadow-md shrink-0 ${
                wishlist.length > 0
                  ? "bg-rose-50 border-rose-300 text-rose-600 group-hover:bg-rose-100"
                  : "bg-neutral-100 border-neutral-200/80 text-neutral-700 group-hover:bg-rose-50 group-hover:border-rose-200 group-hover:text-rose-600"
              }`}>
                {/* Heart icon — filled when items in wishlist */}
                <svg
                  viewBox="0 0 24 24"
                  fill={wishlist.length > 0 ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[18px] h-[18px] sm:w-[17px] sm:h-[17px] transition-all duration-200"
                >
                  <path d="M19.5 13.572 12 21l-7.5-7.428A5 5 0 1 1 12 6.5a5 5 0 1 1 7.5 7.072Z" />
                </svg>

                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white font-heading font-black text-[9.5px] min-w-[18px] h-[18px] px-0.5 rounded-full flex items-center justify-center shadow-md border-[2px] border-white leading-none">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col leading-tight text-left">
                <span className="text-[10px] sm:text-[10.5px] text-neutral-500 font-semibold font-sans tracking-tight">
                  Saved
                </span>
                <span className="text-[13px] sm:text-[13.5px] font-black text-neutral-950 font-heading tracking-tight group-hover:text-rose-600 transition-colors">
                  Wishlist
                </span>
              </div>
            </button>

            {/* 3. Cart */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 sm:gap-2.5 text-left hover:text-primary transition-colors cursor-pointer group p-0.5"
              title="View Wholesale Cart & Bulk Tiers"
            >
              <div className={`relative w-10 h-10 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all duration-200 shadow-xs group-hover:shadow-md shrink-0 ${
                itemCount > 0
                  ? "bg-primary/10 border-primary/30 text-primary group-hover:bg-primary/15"
                  : "bg-neutral-100 border-neutral-200/80 text-neutral-700 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-primary"
              }`}>
                {/* Crisp Bold Shopping Cart SVG Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[18px] h-[18px] sm:w-[17px] sm:h-[17px] transition-all duration-200"
                >
                  <circle cx="8" cy="21" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="19" cy="21" r="1.5" fill="currentColor" stroke="none" />
                  <path d="M2.5 3h3l2.4 11.2a1.8 1.8 0 0 0 1.8 1.4h9.6a1.8 1.8 0 0 0 1.8-1.4l1.5-7.7H6.2" />
                </svg>

                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white font-heading font-black text-[9.5px] min-w-[18px] h-[18px] px-0.5 rounded-full flex items-center justify-center shadow-md border-[2px] border-white leading-none">
                    {itemCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col leading-tight text-left">
                <span className="text-[10px] sm:text-[10.5px] text-neutral-700 font-bold font-sans tracking-tight">
                  ₹{grandTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-[13px] sm:text-[13.5px] font-black text-neutral-950 font-heading tracking-tight group-hover:text-primary transition-colors">
                  Cart
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SECONDARY HORIZONTAL NAVIGATION BAR */}
      <div className="bg-[#111317] border-t border-b border-white/10 text-white relative shadow-inner">
        <div className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin flex items-center justify-between py-1.5 gap-2.5 relative">
          {/* Category Button & Dropdown Mega Menu (OUTSIDE overflow-x-auto to prevent clipping) */}
          <div className="relative shrink-0 z-40" ref={megaMenuRef}>
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="bg-gradient-to-r from-[#851e2a] via-[#751722] to-[#60121b] hover:from-[#751722] hover:to-[#500f17] text-white font-heading font-bold text-[12.5px] px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-200 cursor-pointer shrink-0 shadow-xs border border-rose-400/25 active:scale-95 group whitespace-nowrap"
              title="Browse Categories"
            >
              <span className="material-symbols-outlined text-[17px] text-amber-300 group-hover:rotate-12 transition-transform duration-200">
                grid_view
              </span>
              <span className="tracking-tight">Category</span>
              <span
                className={`material-symbols-outlined text-[16px] text-white/80 transition-transform duration-200 ${
                  isMegaMenuOpen ? "rotate-180" : ""
                }`}
              >
                keyboard_arrow_down
              </span>
            </button>

            {/* DETAILED DROPDOWN MEGA-MENU (Matching Reference Screenshot) */}
            {isMegaMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-[92vw] max-w-[960px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-neutral-200 text-neutral-900 z-[100] flex overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 h-[520px]">
                {/* Left Column: 13 Categories Sidebar */}
                <div className="w-64 sm:w-72 bg-[#fafafa] border-r border-neutral-200 p-2 flex flex-col gap-1 overflow-y-auto shrink-0 font-sans">
                  {MEGA_MENU_CATEGORIES.map((cat) => {
                    const isActive = activeMegaCat.id === cat.id;
                    return (
                      <div
                        key={cat.id}
                        onMouseEnter={() => setActiveMegaCat(cat)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMegaCat(cat);
                          handleCategoryClick(cat.id);
                        }}
                        className={`px-3 py-2.5 rounded-lg text-[13px] flex items-center justify-between transition-all duration-150 cursor-pointer ${
                          isActive
                            ? "bg-[#fff1f2] text-[#dc2626] font-semibold border border-red-200 shadow-2xs"
                            : "text-neutral-800 hover:bg-neutral-100 font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`material-symbols-outlined text-[19px] shrink-0 ${
                              isActive ? "text-[#dc2626]" : "text-neutral-700"
                            }`}
                          >
                            {cat.icon}
                          </span>
                          <span className="truncate">{cat.name}</span>
                        </div>
                        <span
                          className={`material-symbols-outlined text-[16px] shrink-0 ${
                            isActive ? "text-[#dc2626]" : "text-neutral-400"
                          }`}
                        >
                          chevron_right
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Right Pane: Category Collections (3 Clean Columns matching screenshot) */}
                <div className="flex-1 p-7 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white font-sans">
                  <div>
                    {/* Active Category Title & Collections count */}
                    <div className="mb-6">
                      <h3 className="text-xl font-heading font-black text-neutral-900 leading-tight">
                        {activeMegaCat.name}
                      </h3>
                      <p className="text-xs text-neutral-400 font-sans mt-0.5">
                        {activeMegaCat.count}
                      </p>
                    </div>

                    {/* 3 Columns Subcategory List without heavy borders */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                      {activeMegaCat.columns &&
                        activeMegaCat.columns.map((col, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-3">
                            {col.map((item, itemIdx) => (
                              <button
                                key={itemIdx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCategoryClick(activeMegaCat.id, item);
                                }}
                                className="text-left text-[13.5px] font-sans font-normal text-neutral-800 hover:text-[#dc2626] transition-colors py-0.5 cursor-pointer block truncate"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-6 mt-6 border-t border-neutral-150">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(activeMegaCat.id);
                      }}
                      className="text-[13.5px] font-bold text-neutral-900 hover:text-[#dc2626] flex items-center gap-1.5 transition-colors cursor-pointer group"
                    >
                      <span>View all of {activeMegaCat.name}</span>
                      <span className="material-symbols-outlined text-[17px] font-bold group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Subtle Divider */}
          <div className="h-5 w-px bg-white/15 hidden sm:block shrink-0" />

          {/* Horizontal Nav Links ONLY (Inside overflow-x-auto, with z-10 and stopPropagation) */}
          <div className="flex-1 min-w-0 flex items-center overflow-x-auto scrollbar-none py-0.5 gap-1.5 whitespace-nowrap font-heading text-[13px] font-semibold z-10 relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMegaMenuOpen(false);
                if (onScrollToSection) onScrollToSection("just-arrived");
                else if (onSelectCategory) onSelectCategory("just-arrived");
              }}
              className="px-3 py-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
            >
              Just Arrived
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMegaMenuOpen(false);
                if (onScrollToSection) onScrollToSection("flash-deals");
                else if (onSelectCategory) onSelectCategory("flash-deals");
              }}
              className="px-3 py-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
            >
              Bulk Mega Deals
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMegaMenuOpen(false);
                if (onScrollToSection) onScrollToSection("best-sellers");
                else if (onSelectCategory) onSelectCategory("best-sellers");
              }}
              className="px-3 py-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
            >
              Best Sellers
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMegaMenuOpen(false);
                if (onScrollToSection) onScrollToSection("flash-deals");
                else if (onSelectCategory) onSelectCategory("flash-deals");
              }}
              className="px-3 py-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
            >
              Daily Deals
            </button>

            {/* Festive Specials Pill Badge */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMegaMenuOpen(false);
                if (onScrollToSection) onScrollToSection("festive-specials");
                else if (onSelectCategory) onSelectCategory("festive-gifting");
              }}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-rose-500/15 to-amber-500/10 text-amber-300 border border-amber-400/35 hover:border-amber-400/60 hover:bg-amber-500/25 transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-heading font-bold text-[12.5px] tracking-tight shadow-2xs shrink-0"
            >
              <span className="material-symbols-outlined text-[15px] text-amber-400">
                celebration
              </span>
              <span>Festive Specials</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMegaMenuOpen(false);
                if (onScrollToSection) onScrollToSection("daily-necessities");
                else if (onSelectCategory) onSelectCategory("daily-necessities");
              }}
              className="px-3 py-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
            >
              Daily Necessities
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMegaMenuOpen(false);
                if (onScrollToSection) onScrollToSection("electronics-gadgets");
                else if (onSelectCategory) onSelectCategory("electronics-gadgets");
              }}
              className="px-3 py-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
            >
              Electronic Gadgets
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMegaMenuOpen(false);
                if (onScrollToSection) onScrollToSection("kitchen-dining");
                else if (onSelectCategory) onSelectCategory("kitchen-dining");
              }}
              className="px-3 py-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer hidden md:inline-flex items-center"
            >
              Kitchen &amp; Dining
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMegaMenuOpen(false);
                if (onScrollToSection) onScrollToSection("home-improvement");
                else if (onSelectCategory) onSelectCategory("home-improvement");
              }}
              className="px-3 py-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer hidden lg:inline-flex items-center"
            >
              Home Improvement
            </button>
          </div>

          {/* Quick Wholesale Helpline Pill */}
          <div className="hidden xl:flex items-center gap-2 font-heading font-semibold text-[12.5px] text-emerald-300 bg-emerald-950/45 border border-emerald-500/25 px-3.5 py-1.5 rounded-full shadow-2xs shrink-0">
            <span className="material-symbols-outlined text-[17px] text-emerald-400">
              local_shipping
            </span>
            <span>Same-Day Bulk Dispatch</span>
          </div>
        </div>
      </div>

      {/* 4. FULL-SCREEN MOBILE SEARCH INTERFACE (Requirement 8) */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-150">
          {/* Top Search Bar Row */}
          <div className="p-3 bg-white border-b border-neutral-200 flex items-center gap-2 shadow-xs">
            <button
              onClick={() => setIsMobileSearchOpen(false)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-100 active:scale-95 transition-all cursor-pointer shrink-0"
              title="Close search"
              aria-label="Back"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>

            <div className="relative flex-1 flex items-center rounded-full border-2 border-red-600 bg-white overflow-hidden shadow-xs">
              <input
                ref={mobileSearchInputRef}
                type="text"
                autoFocus
                placeholder="Search wholesale products, brands..."
                value={mobileSearchText}
                onChange={(e) => setMobileSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (!mobileSearchText?.trim()) {
                      showToast("Please enter a search keyword", "info");
                      return;
                    }
                    setSearchQuery(mobileSearchText.trim());
                    onSearchSubmit(mobileSearchText.trim());
                    setIsMobileSearchOpen(false);
                  }
                }}
                className="w-full pl-4 pr-9 py-2 text-sm font-sans font-semibold text-neutral-900 focus:outline-none bg-transparent"
                aria-label="Search wholesale catalog"
              />

              {mobileSearchText && (
                <button
                  type="button"
                  onClick={() => setMobileSearchText("")}
                  className="absolute right-2.5 text-neutral-400 hover:text-neutral-700 cursor-pointer p-0.5"
                  title="Clear input"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                if (!mobileSearchText?.trim()) {
                  showToast("Please enter a search keyword", "info");
                  return;
                }
                setSearchQuery(mobileSearchText.trim());
                onSearchSubmit(mobileSearchText.trim());
                setIsMobileSearchOpen(false);
              }}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-3.5 py-2 rounded-full font-heading font-black text-xs transition-colors cursor-pointer shrink-0 shadow-xs flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">search</span>
              <span>Search</span>
            </button>
          </div>

          {/* Quick Trending Searches & Categories */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
            {/* Trending Wholesale Searches */}
            <div>
              <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-[16px] text-red-600">trending_up</span>
                <span>Trending Wholesale Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Basmati Rice 25kg",
                  "Wireless Earbuds",
                  "Mustard Oil 15L",
                  "Fast Charging Cable",
                  "Stainless Steel Cookware",
                  "Power Bank 20000mAh",
                  "Smart Watches",
                  "Just Arrived",
                  "Best Sellers",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      onSearchSubmit(term);
                      setIsMobileSearchOpen(false);
                    }}
                    className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-red-50 hover:text-red-600 hover:border-red-200 border border-neutral-200/80 text-xs font-semibold text-neutral-700 transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[13px] text-neutral-400">search</span>
                    <span>{term}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Categories */}
            <div>
              <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-[16px] text-primary">category</span>
                <span>Browse Wholesale Categories</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: "just-arrived", name: "Just Arrived", icon: "auto_awesome", color: "text-amber-600 bg-amber-50" },
                  { id: "best-sellers", name: "Best Sellers", icon: "local_fire_department", color: "text-red-600 bg-red-50" },
                  { id: "jewellery-accessories", name: "Jewellery & Acc.", icon: "diamond", color: "text-purple-600 bg-purple-50" },
                  { id: "health-beauty", name: "Health & Beauty", icon: "spa", color: "text-emerald-600 bg-emerald-50" },
                  { id: "electronics-gadgets", name: "Electronic Gadgets", icon: "headphones", color: "text-blue-600 bg-blue-50" },
                  { id: "daily-necessities", name: "Daily Necessities", icon: "inventory_2", color: "text-orange-600 bg-orange-50" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setIsMobileSearchOpen(false);
                      if (onSelectCategory) onSelectCategory(cat.id);
                    }}
                    className="p-3 rounded-xl border border-neutral-200/80 hover:border-neutral-300 bg-neutral-50/50 flex items-center gap-2.5 text-left transition-all cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${cat.color}`}>
                      <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                    </div>
                    <span className="font-heading font-bold text-xs text-neutral-800 truncate">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
