import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { PINCODES } from "../data/products";

export default function PincodeModal({ isOpen, onClose }) {
  const { selectedPincode, setSelectedPincode, showToast } = useCart();
  const [customPincode, setCustomPincode] = useState("");

  if (!isOpen) return null;

  const handleSelect = (pin) => {
    setSelectedPincode(pin);
    showToast(`Delivery location set to ${pin.city} (${pin.code}) 🚀`);
    onClose();
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customPincode.length === 6) {
      const customPin = {
        code: customPincode,
        area: "Customer Selected Location",
        city: "Instant Hub",
        speed: "12-15 Mins",
        active: true,
      };
      setSelectedPincode(customPin);
      showToast(`Pincode ${customPincode} verified! Fast delivery active`);
      onClose();
    } else {
      showToast("Please enter a valid 6-digit Indian pincode", "error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl sm:rounded-4xl max-w-lg w-full p-6 sm:p-7 shadow-soft-xl border border-outline-variant/20 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-2 border-b border-surface-variant/40">
          <div className="flex items-center gap-2 text-primary">
            <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">
                location_on
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-on-surface">
              Choose Delivery Location
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-on-surface-variant text-left">
          Select your delivery area to view stock availability, Flipkart
          discounts, and 15-minute delivery promise.
        </p>

        {/* Custom Pincode Form with Pill Input & Button */}
        <form onSubmit={handleCustomSubmit} className="flex gap-2">
          <input
            type="text"
            maxLength={6}
            value={customPincode}
            onChange={(e) =>
              setCustomPincode(e.target.value.replace(/[^0-9]/g, ""))
            }
            placeholder="Enter 6-digit Pincode (e.g. 560103)"
            className="flex-1 px-4 py-2.5 rounded-full border border-outline-variant bg-surface-bright text-on-surface text-xs sm:text-sm font-bold focus:outline-none focus:border-primary shadow-inner"
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-primary hover:bg-primary-container text-white rounded-full text-xs sm:text-sm font-black transition-colors shadow-soft cursor-pointer"
          >
            Verify
          </button>
        </form>

        {/* Available Hubs List */}
        <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
          <span className="text-[10px] sm:text-xs text-on-surface-variant uppercase font-black tracking-wider text-left">
            Popular 15-Min Express Hubs
          </span>
          {PINCODES.map((pin) => {
            const isSelected = selectedPincode.code === pin.code;
            return (
              <button
                key={pin.code}
                onClick={() => handleSelect(pin)}
                className={`flex items-center justify-between p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? "border-primary bg-surface-container-low/70 shadow-soft ring-2 ring-primary/20"
                    : "border-outline-variant/15 bg-surface-bright hover:bg-surface-container-low"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`material-symbols-outlined text-[20px] mt-0.5 ${isSelected ? "text-primary" : "text-outline"}`}
                  >
                    {isSelected ? "check_circle" : "radio_button_unchecked"}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-black text-on-surface">
                        {pin.city}
                      </span>
                      <span className="text-[10px] px-2 py-0.2 rounded-full bg-primary/10 text-primary font-black">
                        {pin.code}
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      {pin.area}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black shrink-0">
                  ⚡ {pin.speed}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
