import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header({
  currentPage,
  onNavigate,
  onLogoClick,
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
}) {
  const { itemCount, showToast, wishlistCount } = useCart();
  const { user, isLoggedIn, logout } = useAuth();
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!searchQuery.trim()) {
        showToast("Please type something to search...", "error");
        return;
      }
      onSearchSubmit(searchQuery);
    }
  };

  const handleSearchButtonClick = () => {
    if (!searchQuery.trim()) {
      showToast("Please type something to search...", "error");
      return;
    }
    onSearchSubmit(searchQuery);
  };

  const handleBrandClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      onNavigate("home");
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 glass-header transition-all duration-300">
        <div className="flex flex-col w-full">
          {/* Main Glassmorphic Header Bar */}
          <div className="px-3 sm:px-4 md:px-margin py-2.5">
            <div className="max-w-[1480px] mx-auto flex items-center gap-2 sm:gap-3 md:gap-6 justify-between">
              {/* Apple-Style Minimalist Brand Monogram */}
              <div
                onClick={handleBrandClick}
                className="flex items-center gap-2 sm:gap-3 shrink-0 cursor-pointer select-none group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-neutral-950 flex items-center justify-center text-white shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-200">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-white">
                    bolt
                  </span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-base sm:text-lg font-black text-neutral-950 tracking-tight flex items-center gap-1">
                    SwiftMart
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-neutral-400 tracking-wider uppercase font-semibold -mt-0.5">
                    15-Min Express
                  </span>
                </div>
              </div>

              {/* Apple-Style Navigation Links: Home & Products */}
              <div className="hidden md:flex items-center gap-1 glass-pill p-1 rounded-full border border-black/[0.04]">
                <button
                  onClick={handleBrandClick}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                    currentPage === "home"
                      ? "bg-neutral-950 text-white shadow-xs"
                      : "text-neutral-600 hover:text-neutral-950 hover:bg-black/[0.04]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    home
                  </span>
                  <span>Home</span>
                </button>
                <button
                  onClick={() => onNavigate("catalogue")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                    currentPage === "catalogue"
                      ? "bg-neutral-950 text-white shadow-xs"
                      : "text-neutral-600 hover:text-neutral-950 hover:bg-black/[0.04]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    grid_view
                  </span>
                  <span>Products</span>
                </button>
              </div>

              {/* Apple-Style Frosted Capsule Search Bar */}
              <div className="flex-1 min-w-0 max-w-xl flex items-center bg-white/75 hover:bg-white focus-within:bg-white rounded-full border border-black/[0.06] focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/[0.08] transition-all duration-300 pl-3 sm:pl-4 pr-1 sm:pr-1.5 py-1 shadow-xs backdrop-blur-md">
                <span className="material-symbols-outlined text-neutral-400 text-[16px] sm:text-[18px] mr-1.5 sm:mr-2 shrink-0">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyPress}
                  placeholder="Search products, boAt earbuds..."
                  className="w-full min-w-0 text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm font-medium bg-transparent focus:outline-none truncate"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                    }}
                    className="p-1 text-neutral-400 hover:text-neutral-700 mr-1 active:scale-90 cursor-pointer shrink-0"
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      close
                    </span>
                  </button>
                )}
                <button
                  onClick={handleSearchButtonClick}
                  className="bg-neutral-950 hover:bg-neutral-800 active:bg-black text-white px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer"
                >
                  <span className="hidden sm:inline">Search</span>
                  <span className="material-symbols-outlined text-[15px]">
                    arrow_forward
                  </span>
                </button>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 shrink-0">
                {/* Apple-Style Wishlist Button */}
                <button
                  onClick={() => onNavigate("wishlist")}
                  className={`hidden sm:flex w-10 h-10 rounded-full items-center justify-center transition-all cursor-pointer active:scale-95 ${
                    currentPage === "wishlist"
                      ? "bg-neutral-950 text-white shadow-sm ring-1 ring-black/10"
                      : "bg-neutral-100/80 hover:bg-neutral-200/80 text-neutral-800 border border-black/[0.04]"
                  }`}
                  title="Wishlist"
                  aria-label="Wishlist"
                >
                  <span
                    className={`material-symbols-outlined text-[20px] ${currentPage === "wishlist" ? "text-white fill" : "text-neutral-800"}`}
                  >
                    favorite
                  </span>
                </button>

                {/* Apple-Style Shopping Bag Button */}
                <button
                  onClick={() => onNavigate("cart")}
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                    currentPage === "cart"
                      ? "bg-neutral-950 text-white shadow-sm ring-1 ring-black/10"
                      : "bg-neutral-100/80 hover:bg-neutral-200/80 text-neutral-900 border border-black/[0.04]"
                  }`}
                  title="Shopping Bag"
                  aria-label="Shopping Bag"
                >
                  <span
                    className={`material-symbols-outlined text-[18px] sm:text-[20px] ${currentPage === "cart" ? "text-white" : "text-neutral-800"}`}
                  >
                    shopping_bag
                  </span>
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-neutral-950 text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                      {itemCount}
                    </span>
                  )}
                </button>

                {/* User Profile / Sign In */}
                <div className="hidden sm:block relative">
                  {isLoggedIn ? (
                    <div>
                      <button
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                        className="w-10 h-10 rounded-full bg-neutral-100/80 hover:bg-neutral-200/80 border border-black/[0.04] flex items-center justify-center transition-all cursor-pointer active:scale-95"
                        title={user.name}
                        aria-label="User Account"
                      >
                        <div className="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                          {user.name.charAt(0)}
                        </div>
                      </button>

                      {showUserDropdown && (
                        <div className="absolute right-0 mt-2 w-52 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-soft-xl border border-black/[0.08] py-2 z-50 animate-fade-in">
                          <div className="px-4 py-2.5 border-b border-neutral-100">
                            <p className="font-bold text-neutral-900 text-sm">
                              {user.name}
                            </p>
                            <p className="text-xs text-neutral-500 truncate">
                              {user.phone}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              onNavigate("account");
                              setShowUserDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-xs font-semibold text-neutral-700 hover:bg-neutral-100/80 flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[17px] text-primary">
                              account_circle
                            </span>
                            My Account Profile
                          </button>
                          <button
                            onClick={() => {
                              onNavigate("wishlist");
                              setShowUserDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-xs font-semibold text-neutral-700 hover:bg-neutral-100/80 flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[17px] text-rose-500">
                              favorite
                            </span>
                            My Wishlist
                          </button>
                          <button
                            onClick={() => {
                              onNavigate("cart");
                              setShowUserDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-xs font-semibold text-neutral-700 hover:bg-neutral-100/80 flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[17px] text-neutral-700">
                              receipt_long
                            </span>
                            My Orders &amp; Invoices
                          </button>
                          <button
                            onClick={() => {
                              logout();
                              setShowUserDropdown(false);
                              showToast("Signed out successfully");
                            }}
                            className="w-full px-4 py-2 text-left text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[17px]">
                              logout
                            </span>
                            Sign Out
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => onNavigate("login")}
                      className="w-10 h-10 rounded-full bg-neutral-100/80 hover:bg-neutral-200/80 border border-black/[0.04] flex items-center justify-center text-neutral-800 transition-all cursor-pointer active:scale-95"
                      title="Sign In"
                      aria-label="Sign In"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        person
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Bottom Navigation Bar for Mobile */}
      {currentPage !== "product" && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-2xl border-t border-black/[0.06] px-3 py-2 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <button
            onClick={handleBrandClick}
            className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors ${
              currentPage === "home"
                ? "text-neutral-950"
                : "text-neutral-400 hover:text-neutral-900"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">home</span>
            <span>Home</span>
          </button>

          <button
            onClick={() => {
              onNavigate("catalogue");
            }}
            className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors ${
              currentPage === "catalogue"
                ? "text-neutral-950"
                : "text-neutral-400 hover:text-neutral-900"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              grid_view
            </span>
            <span>Catalogue</span>
          </button>

          <button
            onClick={() => onNavigate("wishlist")}
            className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors relative ${
              currentPage === "wishlist"
                ? "text-rose-600 font-black"
                : "text-neutral-400 hover:text-neutral-900"
            }`}
          >
            <span
              className={`material-symbols-outlined text-[20px] ${currentPage === "wishlist" ? "text-rose-600 fill" : ""}`}
            >
              favorite
            </span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 right-2 bg-rose-500 text-white font-bold text-[9px] rounded-full h-3.5 min-w-[0.9rem] px-0.5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
            <span>Wishlist</span>
          </button>

          <button
            onClick={() => onNavigate("cart")}
            className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors relative ${
              currentPage === "cart"
                ? "text-neutral-950"
                : "text-neutral-400 hover:text-neutral-900"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              shopping_bag
            </span>
            {itemCount > 0 && (
              <span className="absolute -top-1 right-2 bg-neutral-950 text-white font-bold text-[9px] rounded-full h-3.5 min-w-[0.9rem] px-0.5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
            <span>Bag</span>
          </button>

          <button
            onClick={() => onNavigate(isLoggedIn ? "account" : "login")}
            className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors ${
              currentPage === "account" || currentPage === "login"
                ? "text-neutral-950 font-black"
                : "text-neutral-400 hover:text-neutral-900"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
            <span>{isLoggedIn ? "Account" : "Sign In"}</span>
          </button>
        </div>
      )}
    </>
  );
}
