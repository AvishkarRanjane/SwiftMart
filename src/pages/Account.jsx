import React from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Account({ onNavigate }) {
  const { user, isLoggedIn, logout } = useAuth();
  const { showToast, selectedPincode, lastOrderDetails, wishlistCount } = useCart();

  if (!isLoggedIn) {
    return (
      <main className="w-full bg-[#f8fafc] ambient-mesh min-h-screen py-16 px-4 flex flex-col items-center justify-center">
        <div className="glass-panel p-8 rounded-3xl max-w-md w-full text-center flex flex-col items-center gap-4 shadow-soft">
          <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-[32px]">person_off</span>
          </div>
          <h2 className="text-xl font-black text-neutral-900">Sign In Required</h2>
          <p className="text-xs text-neutral-500">
            Please log in or register to view your account profile, track active orders, and manage saved addresses.
          </p>
          <div className="flex gap-3 w-full mt-2">
            <button
              onClick={() => onNavigate("login")}
              className="flex-1 py-3 rounded-full bg-neutral-950 text-white font-bold text-xs shadow-soft hover:bg-neutral-800 transition-all cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => onNavigate("signup")}
              className="flex-1 py-3 rounded-full bg-neutral-100 text-neutral-900 border border-black/10 font-bold text-xs hover:bg-neutral-200 transition-all cursor-pointer"
            >
              Register
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#f8fafc] ambient-mesh min-h-screen pb-28 sm:pb-16 pt-6">
      <div className="max-w-4xl mx-auto px-4 md:px-margin flex flex-col gap-6">
        {/* User Hero Header Card */}
        <div className="glass-panel rounded-3xl p-6 shadow-soft border border-white/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-black text-2xl sm:text-3xl shadow-soft shrink-0">
              {user.name.charAt(0)}
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg sm:text-2xl font-black text-neutral-900">
                  {user.name}
                </h1>
                {user.isSuperSaver && (
                  <span className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    SuperSaver VIP
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                {user.phone} • {user.email}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">stars</span>
                  {user.coins || 340} SwiftCoins
                </span>
                <span className="text-[11px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full">
                  Darkstore pod: {selectedPincode.code}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              logout();
              onNavigate("home");
              showToast("Signed out successfully");
            }}
            className="px-4 py-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold transition-all border border-red-200 cursor-pointer flex items-center gap-1.5 self-end sm:self-center"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            <span>Sign Out</span>
          </button>
        </div>

        {/* Quick Shortcut Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div
            onClick={() => onNavigate("cart")}
            className="glass-card p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:border-primary/40 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            </div>
            <div>
              <h4 className="text-xs font-black text-neutral-900">My Basket</h4>
              <p className="text-[11px] text-neutral-500">View items</p>
            </div>
          </div>

          <div
            onClick={() => onNavigate("wishlist")}
            className="glass-card p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:border-rose-300 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">favorite</span>
            </div>
            <div>
              <h4 className="text-xs font-black text-neutral-900">Wishlist</h4>
              <p className="text-[11px] text-neutral-500">{wishlistCount} saved</p>
            </div>
          </div>

          <div
            onClick={() => showToast("Opening saved delivery addresses...")}
            className="glass-card p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:border-emerald-300 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">location_on</span>
            </div>
            <div>
              <h4 className="text-xs font-black text-neutral-900">Addresses</h4>
              <p className="text-[11px] text-neutral-500">{selectedPincode.city}</p>
            </div>
          </div>

          <div
            onClick={() => showToast("Toll free support: 1800-SWIFT-CARE")}
            className="glass-card p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:border-amber-300 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">support_agent</span>
            </div>
            <div>
              <h4 className="text-xs font-black text-neutral-900">Support</h4>
              <p className="text-[11px] text-neutral-500">24x7 Help</p>
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className="glass-panel rounded-3xl p-6 shadow-soft border border-white/80 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <h3 className="text-base font-black text-neutral-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">receipt_long</span>
              Recent Express Orders
            </h3>
            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full">
              15-Min Express Active
            </span>
          </div>

          {lastOrderDetails ? (
            <div className="bg-white rounded-2xl p-4 border border-black/[0.06] flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs border-b border-neutral-100 pb-2">
                <div>
                  <span className="font-bold text-neutral-900">Order #{lastOrderDetails.orderId}</span>
                  <span className="text-neutral-400 ml-2">• Placed at {lastOrderDetails.placedAt}</span>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase font-black px-2 py-0.5 rounded-full">
                  Delivered in {lastOrderDetails.eta}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {lastOrderDetails.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <img src={item.image} alt={item.name} className="w-8 h-8 object-contain rounded" />
                      <span className="font-medium text-neutral-800">{item.name} x {item.qty}</span>
                    </div>
                    <span className="font-bold text-neutral-900">₹{(item.price * item.qty).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-600">Total Paid</span>
                <span className="font-black text-primary text-sm">₹{lastOrderDetails.totalPaid.toLocaleString("en-IN")}</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-neutral-400 flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[36px] text-neutral-300">package_2</span>
              <p className="text-xs font-semibold">No recent order history yet.</p>
              <button
                onClick={() => onNavigate("home")}
                className="mt-1 px-5 py-2 rounded-full bg-neutral-950 text-white font-bold text-xs hover:bg-neutral-800 transition-all cursor-pointer"
              >
                Browse Express Products
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
