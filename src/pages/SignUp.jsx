import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function SignUp({ onNavigate }) {
  const { registerUser } = useAuth();
  const { showToast } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "SWIFT2026",
    agreeTerms: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setFormData((prev) => ({ ...prev, phone: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      showToast("Please enter your full name", "error");
      return;
    }
    if (formData.phone.length !== 10) {
      showToast("Please enter a valid 10-digit mobile number", "error");
      return;
    }
    if (!formData.email.includes("@")) {
      showToast("Please enter a valid email address", "error");
      return;
    }
    if (formData.password.length < 6) {
      showToast("Password must be at least 6 characters", "error");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }
    if (!formData.agreeTerms) {
      showToast("Please agree to terms and privacy policy", "error");
      return;
    }

    registerUser(formData);
    showToast(
      `Welcome to SwiftMart, ${formData.name}! 🎉 ₹150 welcome bonus unlocked`,
    );
    setTimeout(() => {
      onNavigate("home");
    }, 900);
  };

  return (
    <main className="w-full bg-flipkart-bg/60 min-h-screen flex items-center justify-center py-10 px-3 md:px-margin pb-24 sm:pb-16">
      <div className="max-w-4xl w-full bg-white rounded-3xl md:rounded-4xl shadow-soft-xl overflow-hidden border border-outline-variant/15 grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT BRAND PANEL (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-flipkart-blue via-primary to-blue-700 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden text-left">
          {/* Ambient Glows */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-flipkart-yellow/25 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col gap-6">
            <div
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <div className="w-10 h-10 rounded-2xl bg-white text-primary flex items-center justify-center font-black shadow-soft">
                <span className="material-symbols-outlined text-[24px]">
                  bolt
                </span>
              </div>
              <span className="text-2xl font-black text-white">SwiftMart</span>
            </div>

            <div>
              <span className="bg-flipkart-yellow text-neutral-900 text-xs px-3 py-1 rounded-full font-black uppercase tracking-wider">
                Create Free Account
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 leading-tight">
                Unlock ₹150 OFF Your 1st Order
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 mt-2">
                Join India's fastest 15-minute quick commerce family. Daily
                DMart wholesale deals &amp; free deliveries.
              </p>
            </div>

            {/* Member Perks */}
            <div className="flex flex-col gap-2.5 pt-2">
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-flipkart-yellow text-[20px]">
                  stars
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">
                    250 Free SuperCoins
                  </span>
                  <span className="text-[10px] text-blue-100">
                    Redeem instantly for groceries
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-emerald-300 text-[20px]">
                  bolt
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">
                    15-Min Guaranteed Express
                  </span>
                  <span className="text-[10px] text-blue-100">
                    Local darkstore dispatch
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-amber-200 text-[20px]">
                  local_shipping
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">
                    Free Delivery for 30 Days
                  </span>
                  <span className="text-[10px] text-blue-100">
                    Exclusive new user perk
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 text-[11px] text-blue-200">
            <span>
              By creating an account, you agree to SwiftMart's Terms and Privacy
              Policy.
            </span>
          </div>
        </div>

        {/* RIGHT FORM PANEL (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-center text-left">
          <div className="max-w-md w-full mx-auto flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-black text-on-surface">
                Create Your Account
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                Sign up in 30 seconds to start 15-minute quick shopping
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Full Name */}
              <div>
                <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-full border border-outline-variant bg-surface-bright text-on-surface text-sm font-bold focus:outline-none focus:border-primary focus:bg-white shadow-inner"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                  Mobile Number
                </label>
                <div className="flex items-center rounded-full border border-outline-variant bg-surface-bright focus-within:border-primary focus-within:bg-white transition-all overflow-hidden pl-1 shadow-inner">
                  <span className="px-3 py-2 text-xs font-black text-on-surface bg-surface-container-low rounded-full flex items-center gap-1">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter 10-digit mobile"
                    className="w-full px-3 py-2 bg-transparent text-on-surface text-sm font-bold focus:outline-none"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-full border border-outline-variant bg-surface-bright text-on-surface text-sm font-bold focus:outline-none focus:border-primary focus:bg-white shadow-inner"
                />
              </div>

              {/* Passwords in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Min 6 chars"
                      className="w-full px-4 py-2.5 rounded-full border border-outline-variant bg-surface-bright text-on-surface text-sm font-bold focus:outline-none focus:border-primary shadow-inner"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter password"
                      className="w-full px-4 py-2.5 rounded-full border border-outline-variant bg-surface-bright text-on-surface text-sm font-bold focus:outline-none focus:border-primary shadow-inner"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {showConfirmPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Referral Code */}
              <div>
                <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                  Referral / Invite Code (Optional)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    placeholder="Enter referral code"
                    className="flex-1 uppercase px-4 py-2 rounded-full border border-outline-variant bg-surface-bright text-on-surface text-xs font-mono font-bold focus:outline-none focus:border-primary shadow-inner"
                  />
                  <span className="text-[10px] font-black text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-300/40 shrink-0">
                    🎁 +500 Coins
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-0.5 rounded text-primary focus:ring-primary h-4 w-4"
                />
                <label
                  htmlFor="agreeTerms"
                  className="text-xs text-on-surface-variant cursor-pointer"
                >
                  I agree to receive order SMS and WhatsApp updates from
                  SwiftMart.
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-flipkart-orange hover:bg-orange-600 text-white font-black text-sm rounded-full shadow-soft-lg transition-all active:scale-98 cursor-pointer mt-1"
              >
                Create SwiftMart Account
              </button>
            </form>

            {/* Switch to Sign In */}
            <div className="text-center pt-2 border-t border-surface-variant/40 flex flex-col gap-1.5">
              <p className="text-xs text-on-surface-variant">
                Already have an account?{" "}
                <button
                  onClick={() => onNavigate("login")}
                  className="font-black text-primary hover:underline cursor-pointer"
                >
                  Sign In here
                </button>
              </p>
              <button
                onClick={() => onNavigate("home")}
                className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
