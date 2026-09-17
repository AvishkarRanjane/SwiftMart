import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Login({ onNavigate }) {
  const { authTab, setAuthTab, loginWithPhone, loginWithSocial } = useAuth();
  const { showToast } = useCart();

  const [phone, setPhone] = useState("9876543210");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otpStage, setOtpStage] = useState(false);
  const [otp, setOtp] = useState("");

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      if (!otpStage) {
        setOtpStage(true);
        showToast("OTP sent to +91 " + phone + " (Code: 1234) 📲");
      } else {
        loginWithPhone(phone);
        showToast("Welcome back to SwiftMart! Signed in 🎉");
        setTimeout(() => {
          onNavigate("home");
        }, 800);
      }
    } else {
      showToast("Please enter a valid 10-digit mobile number", "error");
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      loginWithPhone("9876543210");
      showToast("Welcome back to SwiftMart! Signed in 🎉");
      setTimeout(() => {
        onNavigate("home");
      }, 800);
    } else {
      showToast("Please fill in both email and password", "error");
    }
  };

  const handleSocialClick = (provider) => {
    loginWithSocial(provider);
    showToast(
      `Signed in with ${provider === "google" ? "Google" : "Apple"}! 🎉`,
    );
    setTimeout(() => {
      onNavigate("home");
    }, 800);
  };

  return (
    <main className="w-full bg-flipkart-bg/60 min-h-screen flex items-center justify-center py-10 px-3 md:px-margin pb-24 sm:pb-16">
      <div className="max-w-4xl w-full bg-white rounded-3xl md:rounded-4xl shadow-soft-xl overflow-hidden border border-outline-variant/15 grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT BRAND PANEL (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-flipkart-blue via-primary to-blue-700 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
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
                Quick Commerce &amp; SuperSaver
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 leading-tight">
                Groceries &amp; Gadgets in 15 Mins
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 mt-2">
                Join over 2.4 million Indian households enjoying Flipkart &amp;
                DMart wholesale rates delivered right to their doorstep.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-col gap-2.5 pt-2">
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-flipkart-yellow text-[20px]">
                  bolt
                </span>
                <span className="text-xs font-bold text-white">
                  15-Min Guaranteed Express Delivery
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-emerald-300 text-[20px]">
                  savings
                </span>
                <span className="text-xs font-bold text-white">
                  DMart SuperSaver Pricing Daily
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-amber-200 text-[20px]">
                  swap_horizontal_circle
                </span>
                <span className="text-xs font-bold text-white">
                  7-Day Instant UPI Refund Guarantee
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 text-[11px] text-blue-200">
            <span>
              By signing in, you agree to SwiftMart's Terms and Privacy Policy.
            </span>
          </div>
        </div>

        {/* RIGHT FORM PANEL (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto flex flex-col gap-5 text-left">
            <div>
              <h3 className="text-2xl font-black text-on-surface">
                Sign In to SwiftMart
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                Access your orders, saved addresses, and SuperCoins
              </p>
            </div>

            {/* Rounded Pill Tab Switcher */}
            <div className="flex bg-surface-container-low p-1.5 rounded-full border border-outline-variant/15">
              <button
                type="button"
                onClick={() => {
                  setAuthTab("otp");
                  setOtpStage(false);
                }}
                className={`flex-1 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
                  authTab === "otp"
                    ? "bg-white text-primary shadow-soft"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Mobile Number &amp; OTP
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthTab("password");
                  setOtpStage(false);
                }}
                className={`flex-1 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
                  authTab === "password"
                    ? "bg-white text-primary shadow-soft"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Email &amp; Password
              </button>
            </div>

            {/* OTP Form */}
            {authTab === "otp" ? (
              <form
                onSubmit={handlePhoneSubmit}
                className="flex flex-col gap-3.5"
              >
                <div>
                  <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                    Mobile Number
                  </label>
                  <div className="flex items-center rounded-full border border-outline-variant bg-surface-bright focus-within:border-primary focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all overflow-hidden pl-1">
                    <span className="px-3 py-2.5 text-xs font-black text-on-surface bg-surface-container-low rounded-full flex items-center gap-1">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/[^0-9]/g, ""))
                      }
                      placeholder="Enter 10 digit mobile"
                      className="w-full px-3 py-2.5 bg-transparent text-on-surface text-sm font-bold focus:outline-none"
                    />
                  </div>
                </div>

                {otpStage && (
                  <div className="animate-fade-in">
                    <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                      Enter 4-Digit OTP (Use: 1234)
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/[^0-9]/g, ""))
                      }
                      placeholder="1234"
                      className="w-full px-4 py-2.5 text-center tracking-widest text-lg font-mono font-black rounded-full border border-outline-variant bg-surface-bright focus:outline-none focus:border-primary"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-flipkart-orange hover:bg-orange-600 text-white font-black text-sm rounded-full shadow-soft-lg transition-all active:scale-98 cursor-pointer mt-1"
                >
                  {otpStage ? "Verify & Continue" : "Get OTP"}
                </button>
              </form>
            ) : (
              /* Password Form */
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col gap-3.5"
              >
                <div>
                  <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-full border border-outline-variant bg-surface-bright text-on-surface text-sm font-bold focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-on-surface-variant uppercase font-black tracking-wider block mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-2.5 rounded-full border border-outline-variant bg-surface-bright text-on-surface text-sm font-bold focus:outline-none focus:border-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-primary-container text-white font-black text-sm rounded-full shadow-soft-lg transition-all active:scale-98 cursor-pointer mt-1"
                >
                  Sign In
                </button>
              </form>
            )}

            {/* Social Divider */}
            <div className="flex items-center gap-4 my-1">
              <div className="flex-1 h-px bg-surface-variant"></div>
              <span className="text-[10px] text-on-surface-variant uppercase font-black">
                Or Continue With
              </span>
              <div className="flex-1 h-px bg-surface-variant"></div>
            </div>

            {/* Pill Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSocialClick("google")}
                className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-outline-variant/30 bg-surface-bright hover:bg-surface-container text-on-surface text-xs font-black transition-colors shadow-xs cursor-pointer active:scale-95"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => handleSocialClick("apple")}
                className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-outline-variant/30 bg-surface-bright hover:bg-surface-container text-on-surface text-xs font-black transition-colors shadow-xs cursor-pointer active:scale-95"
              >
                <span>Apple</span>
              </button>
            </div>

            {/* Register Link & Back Link */}
            <div className="text-center pt-2 border-t border-surface-variant/40 flex flex-col gap-2">
              <p className="text-xs text-on-surface-variant">
                New to SwiftMart?{" "}
                <button
                  type="button"
                  onClick={() => onNavigate("signup")}
                  className="font-black text-primary hover:underline cursor-pointer"
                >
                  Create an Account
                </button>
              </p>
              <button
                type="button"
                onClick={() => onNavigate("home")}
                className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors inline-flex items-center justify-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[15px]">
                  arrow_back
                </span>
                Continue as Guest Shopper
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
