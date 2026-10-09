import React, { useState, useEffect } from "react";
import {
  WHOLESALE_HERO_SLIDES,
  WHOLESALE_VALUE_PROPS,
} from "../data/wholesaleData";

export default function WholesaleHero({ onScrollToSection }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prev) => (prev + 1) % WHOLESALE_HERO_SLIDES.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeSlide = WHOLESALE_HERO_SLIDES[currentSlideIndex];

  return (
    <section className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin pt-3 sm:pt-4 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
        {/* Expanded Wholesale PayDay Deals Slideshow Carousel (Fixed locked height across all slides) */}
        <div
          className="lg:col-span-9 relative rounded-2xl overflow-hidden shadow-soft-lg flex flex-col justify-between h-[420px] sm:h-[460px] lg:h-[480px] bg-slate-950 text-white group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              key={`bg-${activeSlide.id}`}
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-full object-cover object-right lg:object-center scale-100 group-hover:scale-105 transition-transform duration-700 animate-in fade-in"
            />
            {/* Smooth Left-to-right gradient ensuring text visibility without harsh lines */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent sm:via-black/70 sm:to-black/10"></div>
            {/* Vertical gradient protecting top/bottom elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-black/80 sm:to-black/50"></div>
          </div>

          {/* Top Banner Tags - optimized for mobile width */}
          <div className="relative z-10 px-4 pt-4 sm:px-7 sm:pt-6 flex flex-wrap items-start justify-between gap-2 shrink-0">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
              <span className="bg-red-600 text-white text-[9.5px] sm:text-xs font-black uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full shadow-md animate-pulse">
                {activeSlide.badge}
              </span>
              <span className="bg-black/50 backdrop-blur-md text-white text-[9.5px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full border border-white/20 shadow-xs">
                {activeSlide.discountBadge}
              </span>
            </div>
            {/* Hide the 3rd badge on small mobile screens to prevent clutter/overlapping */}
            <span className="hidden sm:flex text-[11px] font-bold text-amber-300 items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30 shadow-xs">
              <span className="material-symbols-outlined text-[15px] text-amber-400 fill">
                star
              </span>
              Direct Factory Mandi
            </span>
          </div>

          {/* Center Deal Headline with Glassmorphic Container on Mobile */}
          <div
            key={`content-${activeSlide.id}`}
            className="relative z-10 mx-4 sm:mx-8 my-auto p-4 sm:p-0 bg-black/40 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-white/10 sm:border-none rounded-2xl text-left max-w-2xl flex flex-col justify-center animate-in fade-in duration-300"
          >
            <span className="text-amber-400 font-extrabold text-[10px] sm:text-sm tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] shrink-0 mb-1 sm:mb-0">
              {activeSlide.tag}
            </span>
            <h2 className="text-[22px] leading-[1.15] sm:leading-[1.08] sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-1 mb-2 drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] line-clamp-2 min-h-[2.3em] sm:min-h-[2.16em]">
              {activeSlide.title}
            </h2>
            <p className="text-[11.5px] sm:text-sm lg:text-[15px] text-neutral-200 sm:text-neutral-100 font-medium mb-3 sm:mb-3.5 max-w-xl line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {activeSlide.subtitle}
            </p>

            <div className="bg-white/10 sm:bg-black/60 backdrop-blur-md border border-white/10 sm:border-white/20 rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 mb-4 text-[10.5px] sm:text-[13px] text-neutral-100 flex items-center gap-1.5 shadow-md max-w-full shrink-0">
              <span className="font-bold text-amber-300 shrink-0">🔥 Trending:</span>{" "}
              <span className="truncate text-white font-medium min-w-0">{activeSlide.productsFeatured}</span>
            </div>

            <div className="shrink-0 mt-1 sm:mt-0">
              <button
                onClick={() => onScrollToSection("all-products")}
                className="w-full sm:w-fit bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-[13px] sm:text-sm px-6 sm:px-7 py-3 sm:py-3 rounded-xl sm:rounded-full flex items-center justify-center sm:justify-start gap-2 shadow-[0_4px_14px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)] active:scale-[0.98] transition-all group/btn cursor-pointer"
              >
                <span>{activeSlide.cta}</span>
                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1.5 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Bar: Indicators & Slide Navigation Controls */}
          <div className="relative z-10 px-4 sm:px-8 pb-4 sm:pb-5 flex items-center justify-between shrink-0">
            {/* Indicator dots */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none px-2 py-1.5 sm:p-0 rounded-full">
              {WHOLESALE_HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`transition-all duration-300 rounded-full h-1.5 sm:h-2 cursor-pointer ${
                    idx === currentSlideIndex
                      ? "w-5 sm:w-7 bg-red-500 shadow-md"
                      : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                />
              ))}
            </div>

            {/* Quick Arrow Navigation */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() =>
                  setCurrentSlideIndex(
                    (prev) =>
                      (prev - 1 + WHOLESALE_HERO_SLIDES.length) %
                      WHOLESALE_HERO_SLIDES.length
                  )
                }
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm"
                aria-label="Previous slide"
              >
                <span className="material-symbols-outlined text-[17px] sm:text-[19px]">
                  chevron_left
                </span>
              </button>
              <button
                onClick={() =>
                  setCurrentSlideIndex(
                    (prev) => (prev + 1) % WHOLESALE_HERO_SLIDES.length
                  )
                }
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm"
                aria-label="Next slide"
              >
                <span className="material-symbols-outlined text-[17px] sm:text-[19px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Vertical Feature Cards (Exact Matching Fixed Height with Cursor Hover Animations) */}
        <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-3.5 justify-between h-[420px] sm:h-[460px] lg:h-[480px]">
          {WHOLESALE_VALUE_PROPS.map((prop) => {
            // Icon-specific micro-animation on cursor hover
            const iconAnimClass =
              prop.id === "lowest-prices"
                ? "group-hover:-rotate-12 group-hover:scale-120 group-hover:text-rose-600"
                : prop.id === "gst-inclusive"
                ? "group-hover:-translate-y-1.5 group-hover:scale-120 group-hover:text-emerald-700"
                : "group-hover:rotate-12 group-hover:scale-120 group-hover:text-amber-700";

            const circleHoverBg =
              prop.id === "lowest-prices"
                ? "group-hover:bg-rose-100 group-hover:border-rose-300/80 group-hover:shadow-[0_0_16px_rgba(244,63,94,0.25)]"
                : prop.id === "gst-inclusive"
                ? "group-hover:bg-emerald-100 group-hover:border-emerald-300/80 group-hover:shadow-[0_0_16px_rgba(16,185,129,0.25)]"
                : "group-hover:bg-amber-100 group-hover:border-amber-300/80 group-hover:shadow-[0_0_16px_rgba(245,158,11,0.25)]";

            return (
              <div
                key={prop.id}
                className="flex-1 bg-white rounded-2xl border border-neutral-200/90 hover:border-neutral-300/90 p-3.5 sm:p-4 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer min-h-0 select-none"
              >
                {/* Circular Icon in Center with Scale, Glow & Playful Micro-animation */}
                <div
                  className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 border ${prop.accentColor} ${circleHoverBg} group-hover:scale-110 transition-all duration-300 shadow-2xs mb-2`}
                >
                  <span
                    className={`material-symbols-outlined text-[25px] sm:text-[27px] transition-all duration-300 ${iconAnimClass}`}
                  >
                    {prop.icon}
                  </span>
                </div>

                {/* Bold Centered Heading */}
                <h4 className="text-[15px] sm:text-base font-heading font-black text-neutral-900 group-hover:text-primary transition-colors leading-tight tracking-tight">
                  {prop.title}
                </h4>

                {/* Centered Subtitle */}
                <p className="text-xs sm:text-[12.5px] text-neutral-500 group-hover:text-neutral-700 font-medium mt-1 transition-colors">
                  {prop.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
