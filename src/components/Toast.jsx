import React from "react";
import { useCart } from "../context/CartContext";

export default function Toast() {
  const { toast } = useCart();

  if (!toast.visible) return null;

  const isError = toast.type === "error";

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none transition-all duration-300 animate-bounce-short">
      <div
        className={`flex items-center gap-2 px-5 py-3 rounded-full shadow-2xl font-label-lg text-label-lg backdrop-blur-md ${
          isError
            ? "bg-red-900 text-white border border-red-500/40"
            : "bg-inverse-surface text-inverse-on-surface border border-white/10"
        }`}
      >
        <span
          className={`material-symbols-outlined text-[20px] ${isError ? "text-red-400" : "text-tertiary-fixed"}`}
        >
          {isError ? "error" : "check_circle"}
        </span>
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
