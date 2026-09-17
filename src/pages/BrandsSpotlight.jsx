import React, { useState } from "react";

export default function BrandsSpotlight({ onNavigate, onViewProduct, onBack }) {
  const [activeBrandFilter, setActiveBrandFilter] = useState("all");

  const BRAND_POSTERS = [
    // =========================================================================
    // COLUMN 1: TOP (Compact Cyberpunk Gold) & BOTTOM (Tall Minimalist Studio Cyan)
    // =========================================================================
    {
      id: "boat-141-anc",
      variantName: "Gunmetal Black",
      col: 1,
      slot: "top",
      brand: "BOAT",
      hollowText: "SALE",
      tagline: "UP TO 80% OFF",
      subtitle: "TODAY'S SPECIAL DEAL",
      badgeText: "BEAST™ LOW LATENCY",
      badgeIcon: "sports_esports",
      themeColor: "#fbbf24",
      strokeColor: "#fbbf24",
      bgGradient: "from-[#24252a] via-[#1b1c20] to-[#121316]",
      glowColor: "rgba(251, 191, 36, 0.18)",
      borderColor: "border-amber-400/30",
      title: "boAt Airdopes 141 ANC",
      price: 1299,
      origPrice: 4990,
      discount: "74% OFF",
      img: "/images/boat-black-1.jpg",
      features: [
        "Active Noise Cancellation (32dB)",
        "42 Hours Total Playback",
        "ENx™ Quad Mics for Clear Calls",
        "ASAP™ Charge (10m = 10h)",
      ],
      layoutType: "compact-split",
    },
    {
      id: "sony-wh1000xm5",
      col: 1,
      slot: "bottom",
      brand: "SONY",
      hollowText: "ANC",
      tagline: "STUDIO SOUND 40% OFF",
      subtitle: "WH-1000XM5 FLAGSHIP MASTER",
      badgeText: "HI-RES WIRELESS AUDIO",
      badgeIcon: "graphic_eq",
      themeColor: "#38bdf8",
      strokeColor: "#38bdf8",
      bgGradient: "from-[#191f2b] via-[#121620] to-[#0a0d13]",
      glowColor: "rgba(56, 189, 248, 0.16)",
      borderColor: "border-sky-400/30",
      title: "Sony WH-1000XM5 Studio Headphones",
      price: 26990,
      origPrice: 34990,
      discount: "23% OFF",
      img: "/images/headphones-black.jpg",
      features: [
        "Industry-Leading Noise Cancellation",
        "Dual Processor V1 + HD QN1 Chip",
        "30-Hour Ultra Battery Life",
        "LDAC High-Resolution Codec",
        "Multipoint 2-Device Seamless Sync",
      ],
      layoutType: "tall-audiophile",
    },

    // =========================================================================
    // COLUMN 2: TOP (Tall Grand Pearl Champagne) & BOTTOM (Sleek Horology Bronze)
    // =========================================================================
    {
      id: "boat-141-anc",
      variantName: "Pure White",
      col: 2,
      slot: "top",
      brand: "BOAT",
      hollowText: "SALE",
      tagline: "UP TO 80% OFF",
      subtitle: "PURE WHITE AESTHETIC EDITION",
      badgeText: "LUXURY SHOWCASE",
      badgeIcon: "auto_awesome",
      themeColor: "#fde047",
      strokeColor: "#fde047",
      bgGradient: "from-[#2f313c] via-[#21232c] to-[#15161c]",
      glowColor: "rgba(253, 224, 71, 0.22)",
      borderColor: "border-yellow-300/40",
      title: "boAt Wireless Audio - Pure White",
      price: 1299,
      origPrice: 4990,
      discount: "74% OFF",
      img: "/images/boat-white-1.jpg",
      features: [
        "Pure White Ceramic Matte Finish",
        "Dual EQ Signature boAt Sound",
        "IPX5 Sweat & Splash Shield",
        "BEAST™ Low-Latency 60ms",
        "42H Marathon Playback Battery",
      ],
      layoutType: "tall-grand",
    },
    {
      id: "fireboltt-smartwatch",
      col: 2,
      slot: "bottom",
      brand: "FIRE-BOLTT",
      hollowText: "PRO",
      tagline: "FLAT 70% OFF",
      subtitle: "ULTRA AMOLED LUXURY CHRONO",
      badgeText: "1.43\" AMOLED ALWAYS-ON",
      badgeIcon: "watch",
      themeColor: "#fb923c",
      strokeColor: "#fb923c",
      bgGradient: "from-[#2b2019] via-[#1d1611] to-[#110d0a]",
      glowColor: "rgba(251, 146, 60, 0.18)",
      borderColor: "border-orange-400/30",
      title: "Fire-Boltt Phoenix Ultra Smartwatch",
      price: 1499,
      origPrice: 4999,
      discount: "70% OFF",
      img: "/images/smartwatch-black.jpg",
      features: [
        "1.43\" Ultra AMOLED 700 Nits Display",
        "Bluetooth Calling with AI Voice Assistant",
        "120+ Sports Tracking Modes",
        "Stainless Steel High-Luster Bezel",
      ],
      layoutType: "compact-horology",
    },

    // =========================================================================
    // COLUMN 3: TOP (Industrial Heavy-Duty Amber) & BOTTOM (Electric Street Cyan)
    // =========================================================================
    {
      id: "val-8",
      variantName: "Standard 12V DC",
      col: 3,
      slot: "top",
      brand: "AGARO",
      hollowText: "AUTO",
      tagline: "UP TO 60% OFF",
      subtitle: "SMART AUTO HIGH-PRESSURE",
      badgeText: "150 PSI AUTO-STOP",
      badgeIcon: "build",
      themeColor: "#f59e0b",
      strokeColor: "#f59e0b",
      bgGradient: "from-[#2a221b] via-[#1e1712] to-[#130f0a]",
      glowColor: "rgba(245, 158, 11, 0.2)",
      borderColor: "border-amber-500/35",
      title: "AGARO Portable Electric Tyre Inflator",
      price: 1899,
      origPrice: 3999,
      discount: "53% OFF",
      img: "/images/deal-inflator.jpg",
      features: [
        "150 PSI Auto-Shutoff Precision",
        "Backlit Digital LCD Pressure Display",
        "Ultra-Bright Emergency LED Flashlight",
        "Includes 3 Universal Multi-Nozzle Adapters",
      ],
      layoutType: "medium-industrial",
    },
    {
      id: "oneplus-nord-buds",
      col: 3,
      slot: "bottom",
      brand: "ONEPLUS",
      hollowText: "BASS",
      tagline: "UP TO 55% OFF",
      subtitle: "NORD BUDS 2R NEVER SETTLE",
      badgeText: "12.4mm TITANIUM DRIVERS",
      badgeIcon: "headphones",
      themeColor: "#06b6d4",
      strokeColor: "#06b6d4",
      bgGradient: "from-[#172530] via-[#0f1b24] to-[#081118]",
      glowColor: "rgba(6, 182, 212, 0.2)",
      borderColor: "border-cyan-400/30",
      title: "OnePlus Nord Buds 2r True Wireless",
      price: 1999,
      origPrice: 2999,
      discount: "33% OFF",
      img: "/images/oneplus-1.jpg",
      features: [
        "12.4mm Extra Bass Titanium Drivers",
        "Dual Mic AI Noise Cancellation",
        "38 Hours Battery with Flash Charge",
        "IP55 Water & Sweat Resistance",
      ],
      layoutType: "medium-street",
    },
  ];

  const filteredPosters =
    activeBrandFilter === "all"
      ? BRAND_POSTERS
      : BRAND_POSTERS.filter(
          (p) =>
            p.brand.toLowerCase() === activeBrandFilter.toLowerCase() ||
            p.title.toLowerCase().includes(activeBrandFilter.toLowerCase())
        );

  const col1 = filteredPosters.filter((p) => p.col === 1);
  const col2 = filteredPosters.filter((p) => p.col === 2);
  const col3 = filteredPosters.filter((p) => p.col === 3);

  // ===========================================================================
  // UNIQUE POSTER CARD RENDERER (Individually Styled Per Product & Proportions)
  // ===========================================================================
  const renderCard = (p) => {
    // -------------------------------------------------------------------------
    // 1. BOAt GUNMETAL BLACK: Compact Split Gaming Tech (~360px)
    // -------------------------------------------------------------------------
    if (p.layoutType === "compact-split") {
      return (
        <div
          key={`${p.id}-${p.slot}`}
          onClick={() => onViewProduct(p.id, p)}
          className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${p.bgGradient} border ${p.borderColor} p-6 sm:p-7 min-h-[350px] sm:min-h-[370px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:-translate-y-1.5`}
        >
          {/* Cyberpunk ambient backlights */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
            style={{ backgroundColor: p.glowColor }}
          />

          {/* Top header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-400 text-neutral-950 shadow-sm">
                <span className="material-symbols-outlined text-[13px]">
                  {p.badgeIcon}
                </span>
                {p.badgeText}
              </span>
              <span className="text-[11px] font-bold text-amber-300/80 uppercase tracking-wider">
                FLAGSHIP AUDIO
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-black uppercase tracking-wider text-amber-400 drop-shadow-sm">
                {p.brand}
              </h2>
              <span className="text-xs font-black text-white/70 uppercase">
                POD 560103
              </span>
            </div>

            <div
              className="text-5xl font-black uppercase tracking-widest text-transparent leading-none my-1 select-none font-sans"
              style={{
                WebkitTextStroke: `2.5px ${p.strokeColor}`,
                letterSpacing: "0.08em",
              }}
            >
              {p.hollowText}
            </div>

            <h3 className="text-xl font-black uppercase text-white tracking-tight">
              {p.tagline}
            </h3>
            <p className="text-xs font-bold text-neutral-300 italic uppercase tracking-wide">
              {p.subtitle}
            </p>
          </div>

          {/* Split Body: Left Features, Right Floating Product */}
          <div className="relative z-10 grid grid-cols-12 gap-3 items-center my-3">
            <div className="col-span-7 flex flex-col gap-1.5">
              {p.features.slice(0, 3).map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
              <div className="mt-2 inline-flex items-center gap-2">
                <span className="text-lg font-black text-white font-mono">
                  ₹{p.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-neutral-400 line-through font-mono">
                  ₹{p.origPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] font-black text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full">
                  {p.discount}
                </span>
              </div>
            </div>

            <div className="col-span-5 flex items-center justify-center relative">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                <div
                  className="absolute inset-1 rounded-full blur-xl pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: p.glowColor }}
                />
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.9)] group-hover:scale-110 transition-transform duration-500 select-none"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-white/10">
            <span className="text-xs font-bold text-amber-300/90 group-hover:text-amber-200 transition-colors flex items-center gap-1">
              <span>Explore Gunmetal Black</span>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
            </span>

            <div className="w-10 h-10 rounded-full bg-neutral-900 group-hover:bg-amber-400 text-amber-400 group-hover:text-neutral-950 border border-amber-400/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      );
    }

    // -------------------------------------------------------------------------
    // 2. SONY WH-1000XM5: Tall Minimalist Japanese Studio Cyan (~540px)
    // -------------------------------------------------------------------------
    if (p.layoutType === "tall-audiophile") {
      return (
        <div
          key={`${p.id}-${p.slot}`}
          onClick={() => onViewProduct(p.id, p)}
          className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${p.bgGradient} border ${p.borderColor} p-6 sm:p-8 min-h-[520px] sm:min-h-[560px] flex flex-col justify-between shadow-2xl hover:shadow-cyan-950/40 transition-all duration-500 group cursor-pointer hover:-translate-y-1.5`}
        >
          {/* Icy Studio Backdrop Glow */}
          <div
            className="absolute -top-28 -right-28 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30 group-hover:opacity-60 transition-all duration-700"
            style={{ backgroundColor: p.glowColor }}
          />

          {/* Top Section */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-950/80 text-sky-300 border border-sky-400/30">
                <span className="material-symbols-outlined text-[13px]">
                  {p.badgeIcon}
                </span>
                {p.badgeText}
              </span>
              <span className="text-[10px] font-black text-white/50 tracking-widest uppercase">
                MASTER SERIE 5
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-[0.18em] text-white drop-shadow-sm">
              {p.brand}
            </h2>

            <div
              className="text-6xl sm:text-7xl font-black uppercase tracking-widest text-transparent leading-none my-1 select-none font-sans"
              style={{
                WebkitTextStroke: `2.5px ${p.strokeColor}`,
                letterSpacing: "0.12em",
              }}
            >
              {p.hollowText}
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase text-sky-200 tracking-tight mt-1">
              {p.tagline}
            </h3>
            <p className="text-xs font-bold text-neutral-400 italic uppercase tracking-wider">
              {p.subtitle}
            </p>

            {/* Acoustic frequency wave visualization bars */}
            <div className="flex items-center gap-1 mt-3 opacity-70">
              {[4, 10, 16, 24, 18, 12, 28, 36, 20, 14, 22, 16, 8, 4].map(
                (h, idx) => (
                  <span
                    key={idx}
                    className="w-1 bg-gradient-to-t from-sky-500 to-sky-200 rounded-full transition-all duration-300 group-hover:opacity-100"
                    style={{ height: `${h}px` }}
                  />
                )
              )}
            </div>
          </div>

          {/* Center: Large Studio Headphone Cutout */}
          <div className="relative z-10 flex items-center justify-center my-4">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
              <div
                className="absolute inset-2 rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-all duration-700"
                style={{ backgroundColor: p.glowColor }}
              />
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-transform duration-700 select-none"
              />
            </div>
          </div>

          {/* Features Pills */}
          <div className="relative z-10 flex flex-wrap gap-1.5 my-2">
            {p.features.slice(0, 4).map((f, i) => (
              <span
                key={i}
                className="bg-sky-950/50 backdrop-blur-md text-sky-200 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-sky-400/20"
              >
                ⚡ {f}
              </span>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10">
            <div>
              <div className="text-xl font-black text-white font-mono">
                ₹{p.price.toLocaleString("en-IN")}
              </div>
              <span className="text-[10px] text-sky-300 font-bold uppercase">
                Save ₹{(p.origPrice - p.price).toLocaleString("en-IN")} Today
              </span>
            </div>

            <div className="w-11 h-11 rounded-full bg-sky-400 text-neutral-950 border border-sky-300 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-[22px]">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      );
    }

    // -------------------------------------------------------------------------
    // 3. BOAt PURE WHITE: Tall Grand Centerpiece Pearl Gold (~540px)
    // -------------------------------------------------------------------------
    if (p.layoutType === "tall-grand") {
      return (
        <div
          key={`${p.id}-${p.slot}`}
          onClick={() => onViewProduct(p.id, p)}
          className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${p.bgGradient} border ${p.borderColor} p-6 sm:p-8 min-h-[520px] sm:min-h-[560px] flex flex-col justify-between shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group cursor-pointer hover:-translate-y-1.5`}
        >
          {/* Luminous Pearl Ambient Glow */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-all duration-700"
            style={{ backgroundColor: p.glowColor }}
          />

          {/* Top Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/15 text-yellow-200 border border-yellow-300/40 shadow-sm backdrop-blur-md">
                <span className="material-symbols-outlined text-[13px] text-yellow-300">
                  {p.badgeIcon}
                </span>
                {p.badgeText}
              </span>
              <span className="text-[11px] font-black text-amber-300 uppercase tracking-widest">
                VERIFIED PARTNER
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wider text-yellow-300 drop-shadow-[0_2px_15px_rgba(253,224,71,0.3)]">
              {p.brand}
            </h2>

            {/* Huge Hollow Outlined SALE */}
            <div
              className="text-6xl sm:text-8xl font-black uppercase tracking-widest text-transparent leading-none my-1 sm:my-2 select-none font-sans"
              style={{
                WebkitTextStroke: `3px ${p.strokeColor}`,
                letterSpacing: "0.1em",
              }}
            >
              {p.hollowText}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              {p.tagline}
            </h3>
            <p className="text-sm font-black italic uppercase text-neutral-200 tracking-wide mt-0.5">
              {p.subtitle}
            </p>
          </div>

          {/* Center: Extra-Large White Cutout with Reflection Aura */}
          <div className="relative z-10 flex items-center justify-center my-4">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center">
              <div
                className="absolute inset-4 rounded-full blur-3xl pointer-events-none opacity-50 group-hover:opacity-90 transition-all duration-700"
                style={{ backgroundColor: p.glowColor }}
              />
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] group-hover:scale-110 transition-transform duration-700 select-none"
              />
            </div>
          </div>

          {/* Feature Chips */}
          <div className="relative z-10 flex flex-wrap gap-1.5 my-2">
            {p.features.slice(0, 4).map((f, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-md text-yellow-100 text-[11px] font-semibold px-3 py-1 rounded-full border border-yellow-300/20"
              >
                ⚡ {f}
              </span>
            ))}
          </div>

          {/* Bottom Bar: Action CTA and Arrow */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/15">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-black text-white font-mono">
                ₹{p.price.toLocaleString("en-IN")}
              </span>
              <span className="text-xs font-black text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded-full border border-yellow-300/30">
                {p.discount}
              </span>
            </div>

            <div className="w-11 h-11 rounded-full bg-yellow-400 text-neutral-950 border border-yellow-200 flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all duration-300">
              <span className="material-symbols-outlined text-[22px]">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      );
    }

    // -------------------------------------------------------------------------
    // 4. FIRE-BOLTT LUXURY SMARTWATCH: Compact Horology Bronze (~360px)
    // -------------------------------------------------------------------------
    if (p.layoutType === "compact-horology") {
      return (
        <div
          key={`${p.id}-${p.slot}`}
          onClick={() => onViewProduct(p.id, p)}
          className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${p.bgGradient} border ${p.borderColor} p-6 sm:p-7 min-h-[350px] sm:min-h-[370px] flex flex-col justify-between shadow-xl hover:shadow-orange-950/40 transition-all duration-500 group cursor-pointer hover:-translate-y-1.5`}
        >
          {/* Burnished Bronze Glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
            style={{ backgroundColor: p.glowColor }}
          />

          {/* Top Section */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-950/70 text-orange-300 border border-orange-400/30">
                <span className="material-symbols-outlined text-[13px]">
                  {p.badgeIcon}
                </span>
                {p.badgeText}
              </span>
              <span className="text-[10px] font-black text-orange-400/80 uppercase">
                HEALTH & FITNESS
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-orange-400 drop-shadow-sm">
                {p.brand}
              </h2>
              <span className="text-xs font-black text-neutral-400 font-mono">
                PHOENIX ULTRA
              </span>
            </div>

            <div
              className="text-5xl font-black uppercase tracking-widest text-transparent leading-none my-1 select-none font-sans"
              style={{
                WebkitTextStroke: `2.5px ${p.strokeColor}`,
                letterSpacing: "0.08em",
              }}
            >
              {p.hollowText}
            </div>

            <h3 className="text-xl font-black uppercase text-white tracking-tight">
              {p.tagline}
            </h3>
            <p className="text-xs font-bold text-neutral-300 italic uppercase">
              {p.subtitle}
            </p>
          </div>

          {/* Split Body: Telemetry Badges + Floating Watch */}
          <div className="relative z-10 grid grid-cols-12 gap-3 items-center my-2">
            <div className="col-span-7 flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange-200">
                <span className="material-symbols-outlined text-[14px] text-orange-400">
                  favorite
                </span>
                <span>24/7 Heart & SpO2 Monitor</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange-200">
                <span className="material-symbols-outlined text-[14px] text-orange-400">
                  call
                </span>
                <span>HD Bluetooth Mic & Speaker</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange-200">
                <span className="material-symbols-outlined text-[14px] text-orange-400">
                  directions_run
                </span>
                <span>120+ Pro Sport Modes</span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-black text-white font-mono">
                  ₹{p.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-neutral-400 line-through font-mono">
                  ₹{p.origPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] font-black text-orange-300 bg-orange-400/20 px-2 py-0.5 rounded-full">
                  {p.discount}
                </span>
              </div>
            </div>

            <div className="col-span-5 flex items-center justify-center relative">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                <div
                  className="absolute inset-2 rounded-full blur-xl pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: p.glowColor }}
                />
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.9)] group-hover:scale-110 transition-transform duration-500 select-none"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-white/10">
            <span className="text-xs font-bold text-orange-300/90 group-hover:text-orange-200 transition-colors flex items-center gap-1">
              <span>View Luxury Smartwatch</span>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
            </span>

            <div className="w-10 h-10 rounded-full bg-neutral-900 group-hover:bg-orange-400 text-orange-400 group-hover:text-neutral-950 border border-orange-400/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      );
    }

    // -------------------------------------------------------------------------
    // 5. AGARO TYRE INFLATOR: Medium Industrial Heavy-Duty Amber (~450px)
    // -------------------------------------------------------------------------
    if (p.layoutType === "medium-industrial") {
      return (
        <div
          key={`${p.id}-${p.slot}`}
          onClick={() => onViewProduct(p.id, p)}
          className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${p.bgGradient} border ${p.borderColor} p-6 sm:p-8 min-h-[440px] sm:min-h-[460px] flex flex-col justify-between shadow-xl hover:shadow-amber-950/40 transition-all duration-500 group cursor-pointer hover:-translate-y-1.5`}
        >
          {/* Industrial Ambient Backlight */}
          <div
            className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
            style={{ backgroundColor: p.glowColor }}
          />

          {/* Top Section */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-500/30">
                <span className="material-symbols-outlined text-[13px]">
                  {p.badgeIcon}
                </span>
                {p.badgeText}
              </span>
              <span className="text-[10px] font-black text-amber-400/80 uppercase">
                HIGHWAY ESSENTIAL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-amber-400 drop-shadow-sm">
              {p.brand}
            </h2>

            {/* Hollow Outlined AUTO */}
            <div
              className="text-5xl sm:text-6xl font-black uppercase tracking-widest text-transparent leading-none my-1 select-none font-sans"
              style={{
                WebkitTextStroke: `2.5px ${p.strokeColor}`,
                letterSpacing: "0.1em",
              }}
            >
              {p.hollowText}
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
              {p.tagline}
            </h3>
            <p className="text-xs font-bold text-neutral-300 italic uppercase">
              {p.subtitle}
            </p>
          </div>

          {/* Center Cutout with HUD Gauge Badge */}
          <div className="relative z-10 flex items-center justify-center my-3">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
              <div
                className="absolute inset-2 rounded-full blur-2xl pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity"
                style={{ backgroundColor: p.glowColor }}
              />
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)] group-hover:scale-110 transition-transform duration-700 select-none"
              />

              {/* HUD Gauge Overlay badge */}
              <div className="absolute -bottom-2 right-0 bg-neutral-900/90 border border-amber-400/40 rounded-xl px-2.5 py-1 text-right backdrop-blur-md shadow-lg">
                <span className="text-[9px] font-black text-amber-400 block uppercase">
                  PRESSURE CUTOFF
                </span>
                <span className="text-xs font-black text-white font-mono">
                  150.0 PSI
                </span>
              </div>
            </div>
          </div>

          {/* Chips */}
          <div className="relative z-10 flex flex-wrap gap-1.5 my-2">
            {p.features.slice(0, 3).map((f, i) => (
              <span
                key={i}
                className="bg-neutral-900/80 backdrop-blur-md text-amber-200 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-amber-400/20"
              >
                ⚡ {f}
              </span>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white font-mono">
                ₹{p.price.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] font-black text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full">
                {p.discount}
              </span>
            </div>

            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-400 text-neutral-950 border border-amber-300 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      );
    }

    // -------------------------------------------------------------------------
    // 6. ONEPLUS NORD BUDS 2R: Medium Electric Street Cyan (~450px)
    // -------------------------------------------------------------------------
    if (p.layoutType === "medium-street") {
      return (
        <div
          key={`${p.id}-${p.slot}`}
          onClick={() => onViewProduct(p.id, p)}
          className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${p.bgGradient} border ${p.borderColor} p-6 sm:p-8 min-h-[440px] sm:min-h-[460px] flex flex-col justify-between shadow-xl hover:shadow-cyan-950/40 transition-all duration-500 group cursor-pointer hover:-translate-y-1.5`}
        >
          {/* Electric Cyan Street Glow */}
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity"
            style={{ backgroundColor: p.glowColor }}
          />

          {/* Top Section */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-400/30">
                <span className="material-symbols-outlined text-[13px]">
                  {p.badgeIcon}
                </span>
                {p.badgeText}
              </span>
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">
                NEVER SETTLE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white drop-shadow-sm">
              {p.brand}
            </h2>

            {/* Hollow Outlined BASS */}
            <div
              className="text-5xl sm:text-6xl font-black uppercase tracking-widest text-transparent leading-none my-1 select-none font-sans"
              style={{
                WebkitTextStroke: `2.5px ${p.strokeColor}`,
                letterSpacing: "0.1em",
              }}
            >
              {p.hollowText}
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase text-cyan-200 tracking-tight">
              {p.tagline}
            </h3>
            <p className="text-xs font-bold text-neutral-300 italic uppercase">
              {p.subtitle}
            </p>
          </div>

          {/* Center Cutout */}
          <div className="relative z-10 flex items-center justify-center my-3">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
              <div
                className="absolute inset-2 rounded-full blur-2xl pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity"
                style={{ backgroundColor: p.glowColor }}
              />
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)] group-hover:scale-110 transition-transform duration-700 select-none"
              />
            </div>
          </div>

          {/* Chips */}
          <div className="relative z-10 flex flex-wrap gap-1.5 my-2">
            {p.features.slice(0, 3).map((f, i) => (
              <span
                key={i}
                className="bg-cyan-950/50 backdrop-blur-md text-cyan-200 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-cyan-400/20"
              >
                ⚡ {f}
              </span>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white font-mono">
                ₹{p.price.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] font-black text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded-full">
                {p.discount}
              </span>
            </div>

            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cyan-400 text-neutral-950 border border-cyan-300 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <main className="w-full bg-[#f4f7fb] min-h-screen pb-24 sm:pb-20 text-left">
      <div className="max-w-[1480px] mx-auto px-4 md:px-margin pt-4 sm:pt-6">
        {/* Breadcrumb & Navigation Bar */}
        <div className="flex items-center justify-between gap-3 mb-4 overflow-x-auto whitespace-nowrap py-1">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => (onBack ? onBack() : onNavigate("home"))}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-100 active:bg-neutral-200 text-neutral-900 border border-neutral-200/90 shadow-xs text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              title="Go Back to Home"
            >
              <span className="material-symbols-outlined text-[17px] text-neutral-700 leading-none">
                arrow_back
              </span>
              <span>Back</span>
            </button>

            <nav className="flex items-center gap-1.5 text-xs text-neutral-500">
              <button
                onClick={() => onNavigate("home")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-neutral-900 font-bold">
                Brands in Spotlight
              </span>
            </nav>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-neutral-500 font-semibold">
              Showing {filteredPosters.length} Tailored Flagship Brand Posters
            </span>
          </div>
        </div>

        {/* Page Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-neutral-900 text-amber-400 shadow-sm">
                Official Showcase
              </span>
              <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-emerald-600">
                  verified
                </span>
                100% Brand Authorized Deals
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Brands in Spotlight
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 mt-1 max-w-2xl">
              Each flagship brand poster is uniquely designed with bespoke color
              palettes, custom typography, audio-visual metrics, and instant 15-minute dispatch.
            </p>
          </div>

          {/* Quick Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 shrink-0">
            {["all", "boAt", "Sony", "AGARO", "Fire-Boltt", "OnePlus"].map(
              (brand) => {
                const isSelected =
                  activeBrandFilter.toLowerCase() === brand.toLowerCase();
                return (
                  <button
                    key={brand}
                    onClick={() => setActiveBrandFilter(brand.toLowerCase())}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer capitalize shrink-0 ${
                      isSelected
                        ? "bg-neutral-900 text-white shadow-md font-black"
                        : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                    }`}
                  >
                    {brand === "all" ? "All Brands" : brand}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* 3-Column Bento / Masonry Grid (Matching User Reference Image 2: Small & Big Interlocking Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-start">
          {/* Column 1: Top (Compact ~360px) + Bottom (Tall ~540px) */}
          <div className="flex flex-col gap-5 lg:gap-7">
            {col1.map((p) => renderCard(p))}
          </div>

          {/* Column 2: Top (Tall ~540px) + Bottom (Compact ~360px) */}
          <div className="flex flex-col gap-5 lg:gap-7">
            {col2.map((p) => renderCard(p))}
          </div>

          {/* Column 3: Top (Medium ~450px) + Bottom (Medium ~450px) */}
          <div className="flex flex-col gap-5 lg:gap-7">
            {col3.map((p) => renderCard(p))}
          </div>
        </div>
      </div>
    </main>
  );
}
