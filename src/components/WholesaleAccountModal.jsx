import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const BENEFIT_SLIDES = [
  {
    icon: "stars",
    title: "Hassle Free Shopping",
    desc: "Enjoy hassle free shopping with SwiftMart",
  },
  {
    icon: "local_shipping",
    title: "Fast B2B Freight",
    desc: "Express Mandi freight dispatch across 28,000+ pincodes",
  },
  {
    icon: "receipt_long",
    title: "100% GST Tax Invoices",
    desc: "Claim full input tax credit on your monthly GSTR-2B",
  },
];

export default function WholesaleAccountModal({ isOpen, onClose }) {
  const { user, isLoggedIn, login, logout } = useAuth();
  const { showToast } = useCart();

  // Dual-state management for smooth entry AND exit animations
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  // Form states
  const [mobileNumber, setMobileNumber] = useState("");
  const [notifyOffers, setNotifyOffers] = useState(true);
  const [step, setStep] = useState("mobile"); // "mobile" | "otp"
  const [otpCode, setOtpCode] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Carousel state for left column
  const [activeSlide, setActiveSlide] = useState(0);

  // Handle smooth enter and exit animation timing
  useEffect(() => {
    let animFrame1;
    let animFrame2;
    let exitTimer;

    if (isOpen) {
      setShouldRender(true);
      setStep("mobile");
      setOtpCode(["", "", "", ""]);
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
  }, [isOpen]);

  // Rotate left benefits slide every 3.5 seconds
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BENEFIT_SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Smooth close handler with slide/scale exit transition
  const handleSmoothClose = () => {
    setIsAnimatingIn(false);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleSmoothClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!shouldRender) return null;

  // Handle Mobile Submission -> Go to OTP
  const handleMobileSubmit = (e) => {
    e.preventDefault();
    const cleanNumber = mobileNumber.replace(/\D/g, "");
    if (cleanNumber.length < 10) {
      showToast("Please enter a valid 10-digit mobile number 📱");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep("otp");
      showToast(`OTP sent to +91 ${cleanNumber} (Demo OTP: 1234)`);
    }, 500);
  };

  // Handle OTP Verification & Login
  const handleVerifyOtp = (e) => {
    e?.preventDefault();
    const enteredOtp = otpCode.join("");
    if (enteredOtp.length < 4) {
      showToast("Please enter the 4-digit verification code");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      login({
        name: "Wholesale Partner",
        phone: "+91 " + mobileNumber,
        company: "Apex B2B Traders",
        gstin: "27AABCS1429B1Z0",
        tier: "Gold Wholesale Partner",
      });
      showToast("🎉 Welcome to SwiftMart Wholesale! B2B Discounts Unlocked.");
      handleSmoothClose();
    }, 600);
  };

  // Auto-fill demo OTP
  const handleQuickOtp = () => {
    setOtpCode(["1", "2", "3", "4"]);
  };

  const handleLogout = () => {
    logout();
    showToast("Signed out of Wholesale Portal");
    handleSmoothClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* 1. Backdrop with Smooth Fade In & Fade Out */}
      <div
        onClick={handleSmoothClose}
        className={`fixed inset-0 bg-neutral-950/65 backdrop-blur-[3px] transition-opacity duration-350 ease-in-out cursor-pointer ${
          isAnimatingIn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* 2. Modal Dialog Panel with Smooth Scale & Opacity Transition */}
      <div
        className={`relative w-full max-w-[800px] bg-white rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] z-10 overflow-hidden flex flex-col md:flex-row transition-all duration-350 will-change-transform ${
          isAnimatingIn
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
        style={{
          transitionTimingFunction: isAnimatingIn
            ? "cubic-bezier(0.16, 1, 0.3, 1)" /* Spring-like smooth deceleration */
            : "cubic-bezier(0.32, 0, 0.67, 0)", /* Smooth glide out */
        }}
      >
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: Dark Navy Branding & Rotating Benefit Banner */}
        {/* ========================================================= */}
        <div className="w-full md:w-[46%] bg-[#0c121e] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-neutral-800">
          
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Brand Logo */}
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-white">
                Swift<span className="text-red-500">Mart</span>
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shrink-0" />
            </div>
            
            {/* Wholesale Underline with Speed Lines (Matching User Reference) */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex flex-col gap-0.5">
                <span className="h-[1.5px] w-5 bg-white/40 block" />
                <span className="h-[1.5px] w-3.5 bg-white/30 block" />
              </div>
              <span className="font-heading font-black text-[11px] uppercase tracking-[0.22em] text-white">
                WHOLESALE
              </span>
              <div className="flex flex-col gap-0.5 items-end">
                <span className="h-[1.5px] w-5 bg-white/40 block" />
                <span className="h-[1.5px] w-3.5 bg-white/30 block" />
              </div>
            </div>
          </div>

          {/* Main Welcome Headline (Matching Reference Text) */}
          <div className="relative z-10 my-4 sm:my-8 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-[22px] font-heading font-bold text-white leading-snug tracking-tight">
              Welcome to SwiftMart! Register to avail the best deals!
            </h2>
          </div>

          {/* Bottom Benefit Carousel Card */}
          <div className="relative z-10 flex flex-col gap-3">
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 backdrop-blur-xs flex items-center gap-3.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-300 shadow-xs">
                <span className="material-symbols-outlined text-[22px]">
                  {BENEFIT_SLIDES[activeSlide].icon}
                </span>
              </div>
              <div className="min-w-0">
                <h4 className="font-heading font-bold text-sm text-white truncate">
                  {BENEFIT_SLIDES[activeSlide].title}
                </h4>
                <p className="text-xs text-neutral-400 leading-snug line-clamp-1 mt-0.5">
                  {BENEFIT_SLIDES[activeSlide].desc}
                </p>
              </div>
            </div>

            {/* Pagination Dots (3 Dots Matching Reference Image) */}
            <div className="flex items-center justify-center gap-1.5 mt-1">
              {BENEFIT_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Clean White Form / Logged In Dashboard      */}
        {/* ========================================================= */}
        <div className="w-full md:w-[54%] bg-white p-6 sm:p-8 flex flex-col justify-between relative">
          
          {/* Top Right Close 'X' Button with smooth hover rotation */}
          <button
            onClick={handleSmoothClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-950 flex items-center justify-center transition-all duration-200 cursor-pointer group"
            title="Close popup"
          >
            <span className="material-symbols-outlined text-[19px] group-hover:rotate-90 transition-transform duration-200">
              close
            </span>
          </button>

          {/* STATE A: Already Logged In */}
          {isLoggedIn ? (
            <div className="flex-1 flex flex-col justify-center py-4">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-md">
                  {user.name ? user.name.charAt(0) : "W"}
                </div>
                <h3 className="text-xl font-heading font-black text-neutral-900">
                  {user.name || "Wholesale Partner"}
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">{user.phone}</p>
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full mt-2">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  <span>GST Verified • Gold Wholesale Tier</span>
                </div>
              </div>

              {/* B2B Perks Card */}
              <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs">
                <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
                  <span className="text-neutral-500 font-medium block">Approved Credit</span>
                  <span className="text-base font-black text-neutral-900">₹2,50,000</span>
                  <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">30-day interest free</p>
                </div>
                <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
                  <span className="text-neutral-500 font-medium block">Input Tax Credit</span>
                  <span className="text-base font-black text-neutral-900">₹42,850</span>
                  <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">Ready for GSTR-2B</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSmoothClose}
                  className="w-full h-11 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-all shadow-xs"
                >
                  Continue Shopping Wholesale
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full h-10 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[15px]">logout</span>
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            /* STATE B: Login / Register Form (Matching Reference Image) */
            <div className="flex-1 flex flex-col justify-center">
              
              {/* Heading: "Unlock Superior Discounts" */}
              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl sm:text-[27px] font-heading font-black text-[#0f172a] tracking-tight leading-tight">
                  Unlock
                </h3>
                <h3 className="text-2xl sm:text-[27px] font-heading font-black text-[#0f172a] tracking-tight leading-tight -mt-0.5">
                  Superior Discounts
                </h3>
              </div>

              {step === "mobile" ? (
                /* Step 1: Mobile Number Input */
                <form onSubmit={handleMobileSubmit} className="flex flex-col">
                  {/* +91 & Mobile Number Input Row */}
                  <div className="flex items-center gap-2 mb-3.5">
                    <div className="w-16 h-12 rounded-xl border border-neutral-300 bg-white flex items-center justify-center font-heading font-bold text-neutral-800 text-base shadow-2xs shrink-0 select-none">
                      +91
                    </div>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      autoFocus
                      value={mobileNumber}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        setMobileNumber(val);
                      }}
                      placeholder="Enter Mobile Number"
                      className="flex-1 h-12 px-4 rounded-xl border border-neutral-300 hover:border-neutral-400 focus:border-[#0f172a] focus:ring-2 focus:ring-slate-900/10 text-sm sm:text-base font-medium text-neutral-900 placeholder:text-neutral-400 transition-all shadow-2xs focus:outline-none"
                    />
                  </div>

                  {/* Submit Button (Matching Grey / Slate Style in Reference) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-12 rounded-xl font-heading font-bold text-sm tracking-wide text-white transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer ${
                      mobileNumber.length === 10
                        ? "bg-[#0f172a] hover:bg-neutral-900 active:scale-[0.99] shadow-md"
                        : "bg-[#5f697a] hover:bg-[#4f5867] active:bg-[#3c4452]"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending OTP...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>

                  {/* Notification Checkbox & Read details */}
                  <div className="flex items-center justify-between text-xs text-neutral-600 mt-4 px-0.5">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={notifyOffers}
                        onChange={(e) => setNotifyOffers(e.target.checked)}
                        className="w-4 h-4 rounded border-neutral-300 text-[#0f172a] focus:ring-0 cursor-pointer accent-[#0f172a]"
                      />
                      <span>Notify me for any updates &amp; offers</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowDetailsModal((prev) => !prev)}
                      className="text-neutral-600 hover:text-neutral-900 underline underline-offset-2 font-medium cursor-pointer"
                    >
                      Read details
                    </button>
                  </div>
                </form>
              ) : (
                /* Step 2: 4-Digit OTP Verification */
                <form onSubmit={handleVerifyOtp} className="flex flex-col animate-in fade-in slide-in-from-right-2 duration-200">
                  <div className="text-center mb-3">
                    <span className="text-xs text-neutral-500">
                      Enter 4-digit code sent to{" "}
                      <strong className="text-neutral-900 font-bold">
                        +91 {mobileNumber}
                      </strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => setStep("mobile")}
                      className="text-[11px] text-red-600 hover:underline ml-1.5 font-semibold"
                    >
                      Change
                    </button>
                  </div>

                  {/* 4-Box OTP inputs */}
                  <div className="flex justify-center gap-2.5 mb-3.5">
                    {otpCode.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`otp-${idx}`}
                        type="tel"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "");
                          const nextOtp = [...otpCode];
                          nextOtp[idx] = val;
                          setOtpCode(nextOtp);

                          if (val && idx < 3) {
                            document.getElementById(`otp-${idx + 1}`)?.focus();
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace" && !digit && idx > 0) {
                            document.getElementById(`otp-${idx - 1}`)?.focus();
                          }
                        }}
                        className="w-12 h-12 text-center text-lg font-bold rounded-xl border border-neutral-300 focus:border-[#0f172a] focus:ring-2 focus:ring-slate-900/10 focus:outline-none shadow-2xs"
                      />
                    ))}
                  </div>

                  {/* Quick Auto-fill button for demo convenience */}
                  <div className="flex justify-center mb-3">
                    <button
                      type="button"
                      onClick={handleQuickOtp}
                      className="text-xs text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1 rounded-full font-medium transition-colors"
                    >
                      ⚡ Auto-fill Demo OTP (1234)
                    </button>
                  </div>

                  {/* Verify & Enter Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-[#0f172a] hover:bg-neutral-900 text-white font-heading font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Verifying...
                      </span>
                    ) : (
                      "Verify & Sign In"
                    )}
                  </button>
                </form>
              )}

              {/* Explanatory "Read Details" Drawer / Accordion */}
              {showDetailsModal && (
                <div className="mt-3 p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-[11px] text-neutral-600 leading-relaxed animate-in fade-in duration-150">
                  <p className="font-semibold text-neutral-800 mb-1">
                    SwiftMart Privacy &amp; Wholesale Notifications:
                  </p>
                  <p>
                    By opting in, you receive daily Mandi wholesale rate drops, GST invoices, and bulk carton dispatch tracking alerts via WhatsApp &amp; SMS. We never spam or sell your data.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Bottom Footer: "Powered by ⚡ SwiftMart" (Matching Reference Image) */}
          <div className="mt-6 sm:mt-8 pt-4 border-t border-neutral-100 text-center flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 font-medium">
            <span>Powered by</span>
            <span className="text-amber-500 font-bold text-sm">⚡</span>
            <span className="text-neutral-700 font-heading font-black text-xs tracking-tight">SwiftMart</span>
          </div>
        </div>

      </div>
    </div>
  );
}
