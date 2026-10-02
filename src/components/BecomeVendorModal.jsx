import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function BecomeVendorModal({ isOpen, onClose, onRegisterSuccess }) {
  const { showToast } = useCart();
  const { user, applyForVendor } = useAuth();

  const [step, setStep] = useState(1); // 1: Personal, 2: Business, 3: Documents, 4: Payment, 5: Success

  const [form, setForm] = useState({
    // 1. Personal Information
    fullName: user?.name || "Avishkar Sharma",
    email: user?.email || "avishkar@swiftmart.in",
    phone: user?.phone || "+91 98765 43210",

    // 2. Business Information
    shopName: "Sharma Wholesale & Mandi Mills",
    businessCategory: "Daily Necessities & FMCG",
    businessAddress: "Plot 42, GIDC Industrial Estate, Surat, Gujarat - 395023",
    city: "Surat, Gujarat",
    description: "Direct manufacturer & bulk distributor of household cleaning, personal care, and packaged grocery staples.",

    // 3. Business Documents
    gstin: "24AAECS9910D1Z2",
    tradeLicense: "UDYAM-GJ-01-0089214",
    docUploaded: true,

    // 4. Payment Information
    bankName: "HDFC Bank",
    accountHolder: "Sharma Wholesale Mills Private Limited",
    accountNumber: "50200012345678",
    ifsc: "HDFC0001234",
    upiId: "sharmawholesale@okaxis",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1 && (!form.fullName || !form.phone)) {
      showToast("Please enter your name and phone number");
      return;
    }
    if (step === 2 && (!form.shopName || !form.businessAddress)) {
      showToast("Please fill in your shop name and address");
      return;
    }
    if (step === 3 && !form.gstin) {
      showToast("Please enter your GSTIN for wholesale verification");
      return;
    }
    if (step === 4 && (!form.bankName || !form.accountNumber)) {
      showToast("Please provide bank details for payout settlements");
      return;
    }

    if (step < 4) {
      setStep(step + 1);
    } else {
      // Final submission & activation
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        applyForVendor({
          shopName: form.shopName,
          category: form.businessCategory,
          address: form.businessAddress,
          city: form.city,
          gstin: form.gstin,
          bankName: form.bankName,
          accountNumber: form.accountNumber,
          ifsc: form.ifsc,
          upiId: form.upiId,
          description: form.description,
        });
        setStep(5);
        showToast("Vendor Account Activated! You now have Customer + Vendor access 🎉");
      }, 700);
    }
  };

  const handleFinish = () => {
    onClose();
    if (onRegisterSuccess) {
      onRegisterSuccess();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 animate-in zoom-in-95 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
              <span className="material-symbols-outlined text-[26px]">handshake</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                  Customer ➔ Vendor Application
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  0% Commission
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-neutral-950 mt-0.5">
                Apply to Become a Mandi Vendor
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* 4-Step Progress Indicator */}
        {step <= 4 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              {[
                { num: 1, label: "Personal" },
                { num: 2, label: "Business" },
                { num: 3, label: "Documents" },
                { num: 4, label: "Payout Bank" },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-1.5">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      step === s.num
                        ? "bg-amber-600 text-white shadow-xs scale-105"
                        : step > s.num
                        ? "bg-emerald-600 text-white"
                        : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    {step > s.num ? (
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    ) : (
                      s.num
                    )}
                  </div>
                  <span
                    className={`text-xs font-bold hidden sm:inline ${
                      step === s.num
                        ? "text-neutral-950"
                        : step > s.num
                        ? "text-emerald-700"
                        : "text-neutral-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Body */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 mb-4">
              <h4 className="text-xs font-black text-amber-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px]">account_circle</span>
                Step 1: Personal Contact Details
              </h4>
              <p className="text-xs text-amber-900/80">
                Your customer account will seamlessly gain vendor capabilities upon activation.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Full Name / Proprietor Name *
              </label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="e.g. Avishkar Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. sharma@wholesalemills.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Phone Number (for Order SMS &amp; Dispatch) *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
              >
                <span>Continue to Business Details</span>
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 mb-4">
              <h4 className="text-xs font-black text-amber-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px]">store</span>
                Step 2: Business &amp; Mandi Information
              </h4>
              <p className="text-xs text-amber-900/80">
                Provide your factory mill, warehouse depot, or trading company specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Shop / Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.shopName}
                  onChange={(e) => setForm({ ...form, shopName: e.target.value })}
                  placeholder="e.g. Sharma Wholesale & Mandi Mills"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Primary Category *
                </label>
                <select
                  value={form.businessCategory}
                  onChange={(e) => setForm({ ...form, businessCategory: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500 bg-white"
                >
                  <option>Daily Necessities &amp; FMCG</option>
                  <option>Electronics &amp; Audio Gadgets</option>
                  <option>Kitchenware &amp; Vacuum Flasks</option>
                  <option>Jewellery &amp; Accessories</option>
                  <option>Cooking Oils &amp; Mandi Grains</option>
                  <option>Commercial Cleaning Detergents</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Factory / Warehouse Address (for Freight Truck Docking) *
              </label>
              <input
                type="text"
                required
                value={form.businessAddress}
                onChange={(e) => setForm({ ...form, businessAddress: e.target.value })}
                placeholder="e.g. Plot 42, GIDC Industrial Estate, Surat, Gujarat"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Business Description &amp; Manufacturing Capacity
              </label>
              <textarea
                rows={2}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Briefly describe your bulk wholesale production..."
                className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 border border-neutral-300 rounded-xl text-xs font-bold text-neutral-700 hover:bg-neutral-50 cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
              >
                <span>Continue to Verification Docs</span>
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 mb-4">
              <h4 className="text-xs font-black text-amber-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px]">verified_user</span>
                Step 3: Verification &amp; Tax Documents
              </h4>
              <p className="text-xs text-amber-900/80">
                GSTIN and Trade License are verified automatically for 100% compliant e-Invoicing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  GSTIN Number *
                </label>
                <input
                  type="text"
                  required
                  value={form.gstin}
                  onChange={(e) => setForm({ ...form, gstin: e.target.value.toUpperCase() })}
                  placeholder="e.g. 24AAECS9910D1Z2"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 font-mono text-xs sm:text-sm text-neutral-900 uppercase focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Udyam / Trade License / PAN *
                </label>
                <input
                  type="text"
                  value={form.tradeLicense}
                  onChange={(e) => setForm({ ...form, tradeLicense: e.target.value })}
                  placeholder="e.g. UDYAM-GJ-01-0089214"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Document Upload Simulation */}
            <div className="border-2 border-dashed border-neutral-300 rounded-2xl p-5 text-center bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[32px] text-amber-600 block mb-1">
                cloud_upload
              </span>
              <span className="text-xs font-bold text-neutral-800 block">
                Certificate of Registration / GSTIN Certificate Uploaded
              </span>
              <span className="text-[11px] text-neutral-500 mt-0.5 block">
                PDF or JPG format (Max 10 MB) • Verified Digitally
              </span>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2.5 border border-neutral-300 rounded-xl text-xs font-bold text-neutral-700 hover:bg-neutral-50 cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
              >
                <span>Continue to Payout Bank Details</span>
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </button>
            </div>
          </form>
        )}

        {step === 4 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 mb-4">
              <h4 className="text-xs font-black text-amber-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px]">account_balance</span>
                Step 4: Payout &amp; Bank Settlement Information
              </h4>
              <p className="text-xs text-amber-900/80">
                Buyer escrow funds are disbursed directly to this account via 24x7 IMPS upon delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Bank Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.bankName}
                  onChange={(e) => setForm({ ...form, bankName: e.target.value })}
                  placeholder="e.g. HDFC Bank"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Account Holder Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.accountHolder}
                  onChange={(e) => setForm({ ...form, accountHolder: e.target.value })}
                  placeholder="e.g. Sharma Wholesale Mills Pvt Ltd"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Bank Account Number *
                </label>
                <input
                  type="text"
                  required
                  value={form.accountNumber}
                  onChange={(e) => setForm({ ...form, accountNumber: e.target.value })}
                  placeholder="e.g. 50200012345678"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 font-mono text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  IFSC Code *
                </label>
                <input
                  type="text"
                  required
                  value={form.ifsc}
                  onChange={(e) => setForm({ ...form, ifsc: e.target.value.toUpperCase() })}
                  placeholder="e.g. HDFC0001234"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 font-mono text-xs sm:text-sm text-neutral-900 uppercase focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Settlement UPI ID (Optional)
              </label>
              <input
                type="text"
                value={form.upiId}
                onChange={(e) => setForm({ ...form, upiId: e.target.value })}
                placeholder="e.g. sharmawholesale@okaxis"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-4 py-2.5 border border-neutral-300 rounded-xl text-xs font-bold text-neutral-700 hover:bg-neutral-50 cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
              >
                {isSubmitting ? (
                  <span>Verifying &amp; Activating...</span>
                ) : (
                  <>
                    <span>Submit &amp; Activate Vendor Account</span>
                    <span className="material-symbols-outlined text-[17px]">verified</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 5: Activation Success State */}
        {step === 5 && (
          <div className="py-6 text-center space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            <div>
              <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Unified Account Activated
              </span>
              <h3 className="text-2xl font-black font-heading text-neutral-950 mt-2">
                Congratulations, {form.fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mt-1">
                Your account now has <strong>Customer + Vendor dual permissions</strong>. You can shop as a customer anytime, and manage lots, inventory, and orders as a vendor.
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Mandi Shop Name:</span>
                <strong className="text-neutral-950">{form.shopName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Category:</span>
                <strong className="text-neutral-950">{form.businessCategory}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">GSTIN:</span>
                <strong className="font-mono text-neutral-950">{form.gstin}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Payout Status:</span>
                <strong className="text-emerald-700">IMPS Active ({form.bankName})</strong>
              </div>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={handleFinish}
                className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-xs sm:text-sm px-7 py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
              >
                <span>Switch to Vendor Dashboard</span>
                <span className="material-symbols-outlined text-[18px]">store</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
