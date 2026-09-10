import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header({
  currentPage,
  onNavigate,
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
      onSearchSubmit(searchQuery);
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] transition-all duration-300">
        <div className="flex flex-col w-full">
          {/* Main Glassmorphic Header Bar */}
          <div className="px-4 md:px-margin py-2.5">
            <div className="max-w-[1480px] mx-auto flex items-center gap-3 md:gap-6 justify-between">
              {/* Apple-Style Minimalist Brand Monogram */}
              <div
                onClick={() => onNavigate("home")}
                className="flex items-center gap-3 shrink-0 cursor-pointer select-none group"
              >
                <div className="w-9 h-9 rounded-2xl bg-neutral-950 flex items-center justify-center text-white shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-200">
                  <span className="material-symbols-outlined text-[20px] text-white">
                    bolt
                  </span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-black text-neutral-950 tracking-tight flex items-center gap-1">
                    SwiftMart
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] text-neutral-400 tracking-wider uppercase font-semibold -mt-0.5">
                    15-Min Express
                  </span>
                </div>
              </div>

              {/* Apple-Style Navigation Links: Home & Products */}
              <div className="hidden md:flex items-center gap-1 bg-neutral-100/80 p-1 rounded-full border border-black/[0.04]">
                <button
                  onClick={() => onNavigate("home")}
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
              <div className="flex-1 max-w-xl flex items-center bg-neutral-100/85 hover:bg-neutral-100 focus-within:bg-white rounded-full border border-black/[0.06] focus-within:border-black/30 focus-within:ring-4 focus-within:ring-black/[0.04] transition-all duration-300 pl-4 pr-1.5 py-1 shadow-xs">
                <span className="material-symbols-outlined text-neutral-400 text-[18px] mr-2 shrink-0">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyPress}
                  placeholder="Search products, boAt earbuds, DMart packs..."
                  className="w-full text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm font-medium bg-transparent focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      onSearchSubmit("");
                    }}
                    className="p-1 text-neutral-400 hover:text-neutral-700 mr-1 active:scale-90 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      close
                    </span>
                  </button>
                )}
                <button
                  onClick={() => onSearchSubmit(searchQuery)}
                  className="bg-neutral-950 hover:bg-neutral-800 active:bg-black text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer"
                >
                  <span className="hidden sm:inline">Search</span>
                  <span className="material-symbols-outlined text-[15px]">
                    arrow_forward
                  </span>
                </button>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2 md:gap-2.5 shrink-0">
                {/* Apple-Style Wishlist Button (Icon Only) */}
                <button
                  onClick={() => onNavigate("wishlist")}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
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

                {/* Apple-Style Shopping Bag Button (Icon Only) */}
                <button
                  onClick={() => onNavigate("cart")}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                    currentPage === "cart"
                      ? "bg-neutral-950 text-white shadow-sm ring-1 ring-black/10"
                      : "bg-neutral-100/80 hover:bg-neutral-200/80 text-neutral-900 border border-black/[0.04]"
                  }`}
                  title="Shopping Bag"
                  aria-label="Shopping Bag"
                >
                  <span
                    className={`material-symbols-outlined text-[20px] ${currentPage === "cart" ? "text-white" : "text-neutral-800"}`}
                  >
                    shopping_bag
                  </span>
                </button>

                {/* Apple-Style User Profile / Sign In (Icon Only) */}
                <div className="relative">
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

      {/* Floating Bottom Navigation Bar for Mobile (Apple Frosted Glass) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-t border-black/[0.06] px-3 py-2 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button
          onClick={() => onNavigate("home")}
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
          onClick={() => onNavigate(isLoggedIn ? "cart" : "login")}
          className={`flex flex-col items-center gap-0.5 text-xs font-bold transition-colors ${
            currentPage === "login"
              ? "text-neutral-950"
              : "text-neutral-400 hover:text-neutral-900"
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">person</span>
          <span>Account</span>
        </button>
      </div>
    </>
  );
}
