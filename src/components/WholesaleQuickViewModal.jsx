import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function WholesaleQuickViewModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [selectedQty, setSelectedQty] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const images = product.images || [product.image];

  // Determine active tier based on selectedQty
  const currentTier =
    product.tierPricing?.find(
      (tier) => selectedQty >= tier.minQty && selectedQty <= tier.maxQty
    ) || product.tierPricing?.[0];

  const effectivePackPrice = currentTier ? currentTier.pricePerPack : product.packPrice;
  const totalAmount = effectivePackPrice * selectedQty;

  const handleAdd = () => {
    setIsAdded(true);
    addToCart(
      {
        ...product,
        price: effectivePackPrice,
        packPrice: effectivePackPrice,
      },
      selectedQty
    );
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-5 py-3.5 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
              B2B SPEC SHEET
            </span>
            <span className="text-xs font-bold text-neutral-300">
              Wholesale Master Pack Details
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Image & Gallery */}
          <div className="flex flex-col gap-3">
            <div className="aspect-square w-full rounded-2xl bg-neutral-50 border border-neutral-200 p-4 flex items-center justify-center overflow-hidden">
              <img
                src={activeImage || product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-14 h-14 rounded-xl border p-1 bg-white shrink-0 overflow-hidden cursor-pointer ${
                      activeImage === img
                        ? "border-red-600 ring-2 ring-red-600/20"
                        : "border-neutral-200 hover:border-neutral-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Carton Specs Card */}
            {product.cartonSpecs && (
              <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-200 text-xs">
                <h4 className="font-bold text-neutral-900 mb-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-amber-600">
                    inventory_2
                  </span>
                  Master Carton Logistics
                </h4>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-600">
                  <div>
                    <span className="text-neutral-400 block">Units/Carton:</span>
                    <strong className="text-neutral-900">
                      {product.cartonSpecs.unitsPerCarton}
                    </strong>
                  </div>
                  <div>
                    <span className="text-neutral-400 block">Gross Weight:</span>
                    <strong className="text-neutral-900">
                      {product.cartonSpecs.weight}
                    </strong>
                  </div>
                  <div>
                    <span className="text-neutral-400 block">Dimensions:</span>
                    <strong className="text-neutral-900">
                      {product.cartonSpecs.dimensions}
                    </strong>
                  </div>
                  <div>
                    <span className="text-neutral-400 block">Packaging:</span>
                    <strong className="text-neutral-900 truncate block">
                      {product.cartonSpecs.storageType}
                    </strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Title, Tier Pricing Table & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-2.5 py-0.5 rounded-full mb-2">
                {product.bulkPack}
              </span>

              <h2 className="text-lg sm:text-xl font-black text-neutral-950 leading-snug">
                {product.name}
              </h2>

              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                {product.description}
              </p>

              {/* Price Banner */}
              <div className="mt-4 p-3 bg-red-50 rounded-xl border border-red-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-500 font-bold block uppercase">
                    Current Tier Wholesale Price
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-red-600">
                      ₹{effectivePackPrice.toLocaleString("en-IN")}
                    </span>
                    {product.originalPackPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        MRP ₹{product.originalPackPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <span className="bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded block">
                    {product.resaleMargin || "High Margin"}
                  </span>
                  <span className="text-[9px] text-emerald-800 font-medium mt-0.5 block">
                    {product.gst}
                  </span>
                </div>
              </div>

              {/* Tier Pricing Table */}
              {product.tierPricing && (
                <div className="mt-4">
                  <h4 className="text-xs font-bold text-neutral-900 mb-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-primary">
                      stairs
                    </span>
                    Volume Discount Tiers
                  </h4>
                  <div className="border border-neutral-200 rounded-xl overflow-hidden text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-neutral-100 text-[11px] font-bold text-neutral-600 border-b border-neutral-200">
                        <tr>
                          <th className="py-2 px-3">Order Quantity</th>
                          <th className="py-2 px-3">Price / Pack</th>
                          <th className="py-2 px-3">Buyer Tier</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {product.tierPricing.map((tier, idx) => {
                          const isSelectedTier =
                            selectedQty >= tier.minQty && selectedQty <= tier.maxQty;
                          return (
                            <tr
                              key={idx}
                              className={`transition-colors ${
                                isSelectedTier
                                  ? "bg-red-50/70 font-bold text-red-700"
                                  : "text-neutral-700 hover:bg-neutral-50"
                              }`}
                            >
                              <td className="py-2 px-3">
                                {tier.minQty} - {tier.maxQty} Packs
                              </td>
                              <td className="py-2 px-3 font-mono font-bold">
                                ₹{tier.pricePerPack.toLocaleString("en-IN")}
                              </td>
                              <td className="py-2 px-3 text-[11px] text-neutral-500">
                                {tier.label}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Specs List */}
              {product.specs && (
                <div className="mt-4">
                  <h4 className="text-xs font-bold text-neutral-900 mb-1.5">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                    {product.specs.map((sp, idx) => (
                      <div key={idx} className="flex justify-between py-0.5 border-b border-neutral-100">
                        <span className="text-neutral-500">{sp.label}:</span>
                        <strong className="text-neutral-800 text-right truncate ml-2">
                          {sp.val}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selector & Add Button */}
            <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-3">
              <div className="flex items-center border-2 border-neutral-300 rounded-xl overflow-hidden bg-white shrink-0">
                <button
                  onClick={() => setSelectedQty((q) => Math.max(1, q - 1))}
                  className="w-9 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 font-bold text-sm"
                >
                  -
                </button>
                <span className="w-10 text-center font-black text-sm text-neutral-950 font-mono">
                  {selectedQty}
                </span>
                <button
                  onClick={() => setSelectedQty((q) => q + 1)}
                  className="w-9 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 font-bold text-sm"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                disabled={isAdded}
                className="flex-1 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-black text-sm py-2.5 rounded-xl shadow-md hover:shadow-red-600/30 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isAdded ? "check" : "add_shopping_cart"}
                </span>
                <span>
                  {isAdded
                    ? "Added to Cart!"
                    : `Add ${selectedQty} to Bulk Cart (₹${totalAmount.toLocaleString("en-IN")})`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
