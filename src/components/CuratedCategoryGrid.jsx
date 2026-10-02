import React from "react";

export default function CuratedCategoryGrid({ onSelectCategory, onScrollToSection }) {
  const CATEGORY_CARDS = [
    {
      id: "kitchen-dining",
      subtitle: "EVERYDAY LIVING",
      title: "HOME &\nKITCHEN",
      image: "/images/category-banners/home-kitchen.jpg",
      targetId: "kitchen-dining",
      subTextColor: "text-emerald-900/90",
      titleColor: "text-[#0f1d3a]",
      overlayGradient: "bg-gradient-to-r from-white/90 via-white/50 to-transparent",
    },
    {
      id: "health-beauty",
      subtitle: "CARE FOR YOUR EVERYDAY",
      title: "HEALTH &\nPERSONAL CARE",
      image: "/images/category-banners/health-personal-care.jpg",
      targetId: "health-beauty",
      subTextColor: "text-purple-900/90",
      titleColor: "text-[#0f1d3a]",
      overlayGradient: "bg-gradient-to-r from-white/90 via-white/50 to-transparent",
    },
    {
      id: "jewellery-accessories",
      subtitle: "THE FINISHING TOUCH",
      title: "JEWELLERY &\nACCESSORIES",
      image: "/images/category-banners/jewellery-accessories.jpg",
      targetId: "jewellery-accessories",
      subTextColor: "text-rose-950/90",
      titleColor: "text-[#0f1d3a]",
      overlayGradient: "bg-gradient-to-r from-white/90 via-white/50 to-transparent",
    },
    {
      id: "home-improvement",
      subtitle: "SMARTER HOMES START HERE",
      title: "HOME\nIMPROVEMENT",
      image: "/images/category-banners/home-improvement.jpg",
      targetId: "home-improvement",
      subTextColor: "text-blue-950/90",
      titleColor: "text-[#0f1d3a]",
      overlayGradient: "bg-gradient-to-r from-white/90 via-white/50 to-transparent",
    },
    {
      id: "office-products",
      subtitle: "WORK. PLAN. CREATE.",
      title: "OFFICE\nPRODUCTS",
      image: "/images/category-banners/office-products.jpg",
      targetId: "stationery-office",
      subTextColor: "text-teal-900/90",
      titleColor: "text-[#0f1d3a]",
      overlayGradient: "bg-gradient-to-r from-white/90 via-white/50 to-transparent",
    },
    {
      id: "toys-games",
      subtitle: "MAKE ROOM FOR PLAY",
      title: "TOYS &\nGAMES",
      image: "/images/category-banners/toys-games.jpg",
      targetId: "toys-baby",
      subTextColor: "text-amber-950/90",
      titleColor: "text-[#0f1d3a]",
      overlayGradient: "bg-gradient-to-r from-white/90 via-white/50 to-transparent",
    },
    {
      id: "bags-luggage",
      subtitle: "PACK FOR EVERY DAY",
      title: "BAGS &\nLUGGAGE",
      image: "/images/category-banners/bags-luggage.jpg",
      targetId: "bags-luggage",
      subTextColor: "text-stone-900/90",
      titleColor: "text-[#0f1d3a]",
      overlayGradient: "bg-gradient-to-r from-white/90 via-white/50 to-transparent",
    },
    {
      id: "all",
      subtitle: "EXPLORE ALL",
      title: "DAILY &\nFMCG STAPLES",
      description: "Direct mandi warehouse packs",
      image: "/images/category-banners/more-categories.jpg",
      targetId: "daily-necessities",
      subTextColor: "text-blue-900/90",
      titleColor: "text-[#0f1d3a]",
      overlayGradient: "bg-gradient-to-r from-white/90 via-white/50 to-transparent",
    },
  ];

  const handleCardClick = (card) => {
    if (onSelectCategory) {
      onSelectCategory(card.targetId);
    } else if (onScrollToSection) {
      onScrollToSection(card.targetId);
    }
  };

  return (
    <section className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin w-full py-2">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-6">
        <div>
          <span className="text-[11px] sm:text-xs font-black tracking-widest uppercase text-neutral-400 block mb-1">
            SHOP BY CATEGORY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f1d3a] tracking-tight font-heading leading-tight">
            Curated for retailers and<br className="hidden sm:inline" /> shoppers
          </h2>
        </div>

        <button
          onClick={() => {
            if (onScrollToSection) onScrollToSection("all-products");
          }}
          className="text-xs sm:text-sm font-bold text-neutral-700 hover:text-red-600 flex items-center gap-1.5 transition-colors cursor-pointer group self-start sm:self-auto"
        >
          <span>All categories</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      {/* 8-Card Grid (4 Columns on Desktop, 2 on Tablet/Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
        {CATEGORY_CARDS.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className="group relative rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg border border-neutral-200/80 transition-all duration-300 cursor-pointer h-[180px] sm:h-[195px] lg:h-[205px] flex flex-col justify-between p-4 sm:p-5 select-none active:scale-[0.99]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-100">
              <img
                src={card.image}
                alt={card.title.replace("\n", " ")}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              {/* Soft overlay gradient ensuring title readability on top-left */}
              <div className={`absolute inset-0 ${card.overlayGradient} pointer-events-none`}></div>
            </div>

            {/* Top-Left Content: Subtitle & Bold Category Title */}
            <div className="relative z-10 max-w-[65%]">
              <span
                className={`text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider block mb-1 drop-shadow-2xs ${card.subTextColor}`}
              >
                {card.subtitle}
              </span>
              <h3
                className={`text-base sm:text-[18px] lg:text-[19px] font-black font-heading leading-tight tracking-tight drop-shadow-2xs whitespace-pre-line ${card.titleColor}`}
              >
                {card.title}
              </h3>
              {card.description && (
                <p className="text-[11px] sm:text-[11.5px] text-neutral-600 font-medium mt-1 leading-snug">
                  {card.description}
                </p>
              )}
            </div>

            {/* Bottom-Left: White Circular Action Button with ↗ Arrow */}
            <div className="relative z-10">
              <div className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs text-[#0f1d3a] shadow-md border border-neutral-100 flex items-center justify-center group-hover:bg-[#0f1d3a] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-[17px] font-bold">
                  north_east
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
