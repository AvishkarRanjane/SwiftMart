import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { WHOLESALE_PRODUCTS } from "../data/wholesaleData";

export default function WholesaleCalculator() {
  const { addToCart, showToast } = useCart();
  const [selectedProductId, setSelectedProductId] = useState(WHOLESALE_PRODUCTS[0].id);
  const [orderPacks, setOrderPacks] = useState(10);

  const selectedProduct =
    WHOLESALE_PRODUCTS.find((p) => p.id === selectedProductId) ||
    WHOLESALE_PRODUCTS[0];

  // Calculate pricing based on order packs
  const tier =
    selectedProduct.tierPricing?.find(
      (t) => orderPacks >= t.minQty && orderPacks <= t.maxQty
    ) || selectedProduct.tierPricing?.[selectedProduct.tierPricing.length - 1];

  const pricePerPack = tier ? tier.pricePerPack : selectedProduct.packPrice;
  const totalCost = pricePerPack * orderPacks;
  const totalMrp = (selectedProduct.originalPackPrice || pricePerPack * 1.5) * orderPacks;
  const estimatedProfit = totalMrp - totalCost;
  const marginPercent = Math.round((estimatedProfit / totalMrp) * 100);
  const gstCredit = Math.round(totalCost * 0.18);

  const handleAddCalculatedToCart = () => {
    addToCart(
      {
        ...selectedProduct,
        price: pricePerPack,
        packPrice: pricePerPack,
      },
      orderPacks
    );
    showToast(
      `Added ${orderPacks} packs of ${selectedProduct.shortName} to wholesale cart!`
    );
  };

  return (
    <section className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin py-8 sm:py-10">
      <div className="bg-gradient-to-br from-slate-900 via-neutral-900 to-blue-950 text-white rounded-3xl p-5 sm:p-8 border border-neutral-800 shadow-2xl relative overflow-hidden">
        {/* Glow background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-400 text-neutral-950 font-black text-[10px] uppercase px-2.5 py-0.5 rounded-full">
                B2B PROFIT ESTIMATOR
              </span>
              <span className="text-xs text-neutral-400 font-semibold">
                Transparent Reseller Economics
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white font-heading">
              Interactive Bulk Volume &amp; Profit Calculator
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
              Calculate your wholesale procurement cost, retail markup margins, and claimable GST Input Tax Credit before purchasing master cartons.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 flex items-center gap-3">
            <span className="material-symbols-outlined text-amber-400 text-[28px]">
              trending_up
            </span>
            <div>
              <span className="text-[10px] text-neutral-300 font-bold block uppercase">
                Average Retailer Margin
              </span>
              <span className="text-base font-black text-white">42% - 68% Profit</span>
            </div>
          </div>
        </div>

        {/* Calculator Controls & Output Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Input Selection */}
          <div className="lg:col-span-6 flex flex-col gap-4 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            <div>
              <label className="text-xs font-bold text-neutral-200 block mb-2">
                1. Select Wholesale Product:
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-neutral-800 text-white text-xs sm:text-sm font-semibold p-3 rounded-xl border border-white/20 focus:outline-none focus:border-amber-400"
              >
                {WHOLESALE_PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name} ({prod.bulkPack})
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Product Quick Info */}
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="w-14 h-14 rounded-lg bg-white p-1 shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-white truncate">
                  {selectedProduct.shortName}
                </p>
                <p className="text-[11px] text-amber-300 font-medium">
                  {selectedProduct.bulkPack}
                </p>
                <p className="text-[10px] text-neutral-400">
                  Base Wholesale Rate: ₹{selectedProduct.packPrice.toLocaleString("en-IN")} / pack
                </p>
              </div>
            </div>

            {/* Quantity Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-neutral-200 mb-2">
                <span>2. Order Volume (Packs / Master Cartons):</span>
                <span className="text-amber-300 font-mono text-base font-black">
                  {orderPacks} Packs
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={orderPacks}
                onChange={(e) => setOrderPacks(parseInt(e.target.value, 10))}
                className="w-full accent-red-500 h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
                <span>1 Pack (Trial)</span>
                <span>25 Packs</span>
                <span>50 Packs</span>
                <span>100 Packs (Distributor)</span>
              </div>
            </div>

            {/* Active Tier Pill */}
            <div className="bg-red-600/20 border border-red-500/30 p-2.5 rounded-xl flex items-center justify-between text-xs">
              <span className="text-neutral-300">
                Unlocked Rate: <strong className="text-white">₹{pricePerPack.toLocaleString("en-IN")}/pack</strong>
              </span>
              <span className="bg-red-600 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                {tier?.label || "Wholesale Tier"}
              </span>
            </div>
          </div>

          {/* Right: Profit & Savings Output Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Card 1: Total Wholesale Cost */}
              <div className="bg-neutral-800/80 p-4 rounded-2xl border border-neutral-700/60">
                <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                  Wholesale Procurement Cost
                </span>
                <span className="text-xl sm:text-2xl font-black text-white font-mono mt-1 block">
                  ₹{totalCost.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-neutral-400 mt-0.5 block">
                  For {orderPacks} master packs
                </span>
              </div>

              {/* Card 2: Projected Retail Turnover */}
              <div className="bg-neutral-800/80 p-4 rounded-2xl border border-neutral-700/60">
                <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                  Projected Retail Revenue (MRP)
                </span>
                <span className="text-xl sm:text-2xl font-black text-neutral-200 font-mono mt-1 block">
                  ₹{totalMrp.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-neutral-400 mt-0.5 block">
                  At recommended street retail
                </span>
              </div>

              {/* Card 3: Net Profit Margin */}
              <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-500/30">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block">
                  Estimated Reseller Net Profit
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-1 block">
                  + ₹{estimatedProfit.toLocaleString("en-IN")}
                </span>
                <span className="text-[11px] font-bold text-emerald-300 mt-0.5 block">
                  🚀 {marginPercent}% Net Return on Capital
                </span>
              </div>

              {/* Card 4: GST Input Tax Credit */}
              <div className="bg-blue-950/60 p-4 rounded-2xl border border-blue-500/30">
                <span className="text-[10px] uppercase font-bold text-blue-300 block">
                  Claimable 18% GST Input Credit
                </span>
                <span className="text-xl sm:text-2xl font-black text-blue-300 font-mono mt-1 block">
                  ₹{gstCredit.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-blue-200 mt-0.5 block">
                  100% Offset against GST Outward
                </span>
              </div>
            </div>

            {/* Instant Action Button */}
            <button
              onClick={handleAddCalculatedToCart}
              className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-black text-sm py-3.5 rounded-2xl shadow-xl hover:shadow-red-600/30 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                add_shopping_cart
              </span>
              <span>
                Add Calculated Bulk Order to Cart ({orderPacks} Packs &bull; ₹{totalCost.toLocaleString("en-IN")})
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
