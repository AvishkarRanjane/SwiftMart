import React, { useState, useRef, useEffect } from "react";

const QUICK_TOPICS = [
  {
    id: "track",
    icon: "local_shipping",
    label: "Track My Bulk Shipment",
    reply:
      "📦 To track your bulk freight order, please enter your Invoice or Order ID (e.g., INV-8921). All wholesale shipments are dispatched via BlueDart Surface & Delhivery Freight with end-to-end GPS monitoring.",
  },
  {
    id: "gst",
    icon: "receipt_long",
    label: "GST Input Tax Invoice",
    reply:
      "📑 Every SwiftMart wholesale purchase comes with a 100% compliant B2B Tax Invoice detailing CGST/SGST/IGST breakdown so your firm can claim full input tax credit on your monthly GSTR-2B filing.",
  },
  {
    id: "moq",
    icon: "inventory_2",
    label: "MOQ & Carton Discounts",
    reply:
      "🏷️ SwiftMart has No MOQ (Minimum Order Quantity)! You can buy 1 master pack or 500 cartons. Plus, our tiered discount model automatically gives you 12% to 25% extra profit margins as your quantity increases.",
  },
  {
    id: "sample",
    icon: "package_2",
    label: "Sample Kit for Resellers",
    reply:
      "🎁 Verified retail shopkeepers and e-commerce resellers can order single-piece sample units before booking full container lots. Simply click 'Quick View' on any product and select Tier 1 (Single Pack).",
  },
  {
    id: "contact",
    icon: "headset_mic",
    label: "Speak with B2B Manager",
    reply:
      "📞 Your dedicated Key Account Manager is Priya Sharma (Direct Line: 1800-889-9999). Office hours: Monday – Saturday, 9:00 AM – 8:00 PM IST. Or reach our priority WhatsApp desk anytime!",
  },
];

// SOFT EYE-COMFORT THEME: Velvet Merlot & Almond Cream (Eye-Friendly Wholesale Luxury)
const VELVET_THEME = {
  headerBg: "bg-gradient-to-r from-[#4f121a] via-[#5c1620] to-[#430e15]",
  headerBorder: "border-b border-[#3b0b12]",
  headerText: "text-rose-50",
  headerSubtext: "text-rose-200/80",
  headerBtn: "bg-white/10 hover:bg-white/20 text-rose-100 hover:text-white",
  canvasBg: "bg-gradient-to-b from-[#f8fafc] via-[#f8fafc] to-[#f1f5f9]",
  userBubble: "bg-gradient-to-r from-[#701620] to-[#591119] text-white shadow-xs",
  userTime: "text-rose-200/80",
  botBubble: "bg-white border-neutral-200/80 text-neutral-700 shadow-xs",
  pillBadge: "bg-white hover:bg-rose-50/70 hover:border-rose-200 hover:text-[#591119] text-neutral-600 border-neutral-200/80 shadow-2xs",
  pillIcon: "text-neutral-400 group-hover:text-[#591119]",
  ctaBtn: "bg-gradient-to-r from-[#701620] to-[#591119] hover:from-[#5e121b] hover:to-[#490d14] text-white shadow-[0_4px_14px_rgba(79,18,26,0.18)]",
  sendBtn: "bg-gradient-to-r from-[#701620] to-[#591119] hover:from-[#5e121b] hover:to-[#490d14] text-white shadow-xs",
  inputFocus: "focus-within:border-[#701620] focus-within:ring-rose-500/15",
  accentDot: "bg-[#701620]",
  accentText: "text-[#701620]",
};

export default function WholesaleSupportDrawer({ isOpen, onClose, onOpenCart }) {
  // Dual-state management for smooth entry AND exit animations
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  // Soft Eye-Comfort Theme: Velvet Wine (Merlot & Almond Cream)
  const p = VELVET_THEME;

  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Hi, welcome to SwiftMart Wholesale! Need a quick suggestion or a little guidance?",
      time: "Just now",
    },
    {
      id: "welcome-2",
      sender: "bot",
      isSecurityNote: true,
      text: "Note: SwiftMart NEVER asks for money, OTPs, or delivery fees over the phone. Stay safe—don't pay!",
      time: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showCallCard, setShowCallCard] = useState(false);
  const [showSuggestionsMenu, setShowSuggestionsMenu] = useState(false);
  const messagesEndRef = useRef(null);

  // Manage smooth enter & exit animation timing
  useEffect(() => {
    let animFrame1;
    let animFrame2;
    let exitTimer;

    if (isOpen) {
      setShouldRender(true);
      // Wait for DOM paint, then trigger sliding from left
      animFrame1 = requestAnimationFrame(() => {
        animFrame2 = requestAnimationFrame(() => {
          setIsAnimatingIn(true);
        });
      });
    } else {
      // Trigger smooth slow slide out to left
      setIsAnimatingIn(false);
      exitTimer = setTimeout(() => {
        setShouldRender(false);
      }, 720); // Wait for transition duration
    }

    return () => {
      cancelAnimationFrame(animFrame1);
      cancelAnimationFrame(animFrame2);
      clearTimeout(exitTimer);
    };
  }, [isOpen]);

  // Smooth slow close handler with slide-out transition
  const handleSmoothClose = () => {
    setIsAnimatingIn(false);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  // Auto scroll to latest message
  useEffect(() => {
    if (isAnimatingIn) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isAnimatingIn]);

  // Handle ESC key to close smoothly
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

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMsg = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate smart support expert response
    setTimeout(() => {
      let replyText =
        "Thank you for contacting SwiftMart B2B Support. A wholesale fulfillment specialist is reviewing your query: '" +
        query +
        "'. For immediate consignment dispatch assistance, feel free to call our toll-free desk at 1800-889-9999.";

      // Match predefined topics if applicable
      const lower = query.toLowerCase();
      const matched = QUICK_TOPICS.find((t) =>
        lower.includes(t.id) ||
        lower.includes(t.label.toLowerCase()) ||
        (t.id === "track" && (lower.includes("track") || lower.includes("order") || lower.includes("shipment"))) ||
        (t.id === "gst" && (lower.includes("gst") || lower.includes("tax") || lower.includes("invoice") || lower.includes("bill"))) ||
        (t.id === "moq" && (lower.includes("moq") || lower.includes("minimum") || lower.includes("bulk") || lower.includes("discount"))) ||
        (t.id === "sample" && (lower.includes("sample") || lower.includes("trial"))) ||
        (t.id === "contact" && (lower.includes("call") || lower.includes("phone") || lower.includes("whatsapp") || lower.includes("manager") || lower.includes("help")))
      );

      if (matched) {
        replyText = matched.reply;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: "bot-" + Date.now(),
          sender: "bot",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  const handleVoiceInputSimulate = () => {
    setIsListening(true);
    setTimeout(() => {
      setInputValue("Tell me about wholesale carton tier discounts and delivery timeline");
      setIsListening(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden flex pointer-events-auto">
      {/* 1. Backdrop Overlay with Smooth Slow Fade In & Fade Out */}
      <div
        onClick={handleSmoothClose}
        className={`fixed inset-0 bg-neutral-950/50 backdrop-blur-[2px] transition-opacity duration-700 ease-in-out cursor-pointer ${
          isAnimatingIn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* 2. Slide-Over Panel from Left with Soft, Soothing Eye-Friendly Styling */}
      <div
        className={`relative w-full max-w-[425px] bg-[#f8fafc] h-full shadow-[0_10px_40px_rgba(0,0,0,0.18)] z-10 flex flex-col justify-between overflow-hidden border-r border-neutral-200/80 transition-transform duration-700 will-change-transform ${
          isAnimatingIn
            ? "translate-x-0"
            : "-translate-x-full pointer-events-none"
        }`}
        style={{
          transitionTimingFunction: isAnimatingIn
            ? "cubic-bezier(0.22, 1, 0.36, 1)" /* Silky-smooth slow ease-out deceleration glide in */
            : "cubic-bezier(0.32, 0, 0.67, 0)", /* Gentle smooth glide back out */
        }}
      >
        
        {/* PANEL HEADER: Calming, eye-friendly palette (Soft Merlot / Midnight Slate / Daylight Pearl) */}
        <div className={`${p.headerBg} ${p.headerBorder} ${p.headerText} px-4 py-3 sm:py-3.5 flex items-center justify-between shadow-xs shrink-0 transition-colors duration-300`}>
          {/* Left: Avatar & Expert Info */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              <img
                src="/images/support-expert.jpg"
                alt="SwiftMart Expert Priya Sharma"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover object-top border-2 border-white/90 shadow-xs ring-1 ring-white/20"
              />
              {/* Online Green Pulsing Indicator */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-neutral-900 rounded-full animate-pulse" />
            </div>

            <div className="flex flex-col min-w-0 leading-tight">
              <div className="flex items-center gap-1.5">
                <h3 className={`font-heading font-extrabold text-base sm:text-[17px] ${p.headerText} tracking-tight truncate`}>
                  SwiftMart Expert
                </h3>
                <span className="material-symbols-outlined text-[15px] text-amber-300 fill" title="Verified Wholesale Specialist">
                  verified
                </span>
              </div>
              <span className={`text-[11px] ${p.headerSubtext} font-sans font-medium flex items-center gap-1.5 mt-0.5`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                Priya Sharma • Online Now
              </span>
            </div>
          </div>

          {/* Right: Quick Bag & Close Buttons with Custom Hover Animations */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Cart / Shop Quick Link: Icon turns gold on hover */}
            <button
              onClick={() => {
                handleSmoothClose();
                setTimeout(() => {
                  onOpenCart();
                }, 400);
              }}
              className="group relative w-8 h-8 rounded-full bg-white/10 hover:bg-amber-400/20 border border-transparent hover:border-amber-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-xs hover:shadow-[0_0_12px_rgba(251,191,36,0.35)]"
              title="Open Wholesale Cart"
            >
              <span className="material-symbols-outlined text-[18px] text-white/90 group-hover:text-amber-300 transition-colors duration-300">
                local_mall
              </span>
            </button>

            {/* Circular Close Button: Animates with rotation and turns into a bold black cross */}
            <button
              onClick={handleSmoothClose}
              className="group relative w-8 h-8 rounded-full bg-white/10 hover:bg-white border border-transparent hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-xs hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              title="Close Expert Panel"
            >
              <span className="material-symbols-outlined text-[19px] text-white/90 group-hover:text-neutral-950 group-hover:rotate-90 group-hover:scale-110 transition-all duration-300 ease-out font-bold">
                close
              </span>
            </button>
          </div>
        </div>

        {/* PANEL BODY: Scrollable Message Thread with soothing soft canvas (Zero Harsh Glare) */}
        <div className={`flex-1 overflow-y-auto p-4 sm:p-5 ${p.canvasBg} flex flex-col gap-3.5 text-neutral-700 text-[13px] sm:text-sm font-sans transition-colors duration-300`}>
          {messages.map((msg) => {
            if (msg.sender === "bot") {
              if (msg.isSecurityNote) {
                return (
                  <div
                    key={msg.id}
                    className="bg-[#fffdf5] border border-amber-200/70 rounded-2xl p-3.5 text-stone-600 text-xs sm:text-[13px] leading-relaxed shadow-[0_2px_8px_rgba(245,158,11,0.04)] animate-in fade-in slide-in-from-bottom-1 duration-200"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-amber-700/85 text-[19px] shrink-0 mt-0.5">
                        verified_user
                      </span>
                      <div>
                        <strong className="text-amber-950 font-bold block mb-0.5">
                          Fraud Prevention Notice:
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{msg.text}</p>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={msg.id}
                  className="flex items-start gap-2.5 max-w-[92%] animate-in fade-in slide-in-from-bottom-1 duration-200"
                >
                  <img
                    src="/images/support-expert.jpg"
                    alt="Priya"
                    className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5 border border-neutral-200 shadow-2xs"
                  />
                  <div className={`${p.botBubble} rounded-2xl rounded-tl-xs p-3.5 leading-relaxed`}>
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className="text-[10px] text-neutral-400 block text-right mt-1.5 font-medium">
                      {msg.time}
                    </span>
                  </div>
                </div>
              );
            }

            // User Message Bubble with soft velvety gradient
            return (
              <div
                key={msg.id}
                className="flex items-end justify-end max-w-[85%] self-end animate-in fade-in slide-in-from-bottom-1 duration-150"
              >
                <div className={`${p.userBubble} rounded-2xl rounded-br-xs p-3.5 leading-relaxed`}>
                  <p>{msg.text}</p>
                  <span className={`text-[10px] ${p.userTime} block text-right mt-1 font-medium`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator with soft neutral card */}
          {isTyping && (
            <div className="flex items-center gap-2 max-w-[85%] animate-in fade-in duration-150">
              <img
                src="/images/support-expert.jpg"
                alt="Priya"
                className="w-7 h-7 rounded-full object-cover shrink-0 border border-neutral-200"
              />
              <div className="bg-white border border-neutral-200/80 rounded-2xl rounded-tl-xs px-3.5 py-2 shadow-xs flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${p.accentDot} animate-bounce`} style={{ animationDelay: "0ms" }} />
                <span className={`w-1.5 h-1.5 rounded-full ${p.accentDot} animate-bounce`} style={{ animationDelay: "150ms" }} />
                <span className={`w-1.5 h-1.5 rounded-full ${p.accentDot} animate-bounce`} style={{ animationDelay: "300ms" }} />
                <span className="text-xs text-neutral-400 font-medium ml-1">Priya is typing...</span>
              </div>
            </div>
          )}

          {/* Voice Listening Wave Indicator with soft styling */}
          {isListening && (
            <div className="bg-neutral-100/90 border border-neutral-200 rounded-xl p-3 flex items-center gap-3 animate-pulse">
              <span className={`material-symbols-outlined ${p.accentText} animate-spin text-[20px]`}>
                graphic_eq
              </span>
              <span className="text-xs font-semibold text-neutral-800">
                Listening to your wholesale question...
              </span>
            </div>
          )}

          {/* Quick Guidance Chips with soothing soft pills */}
          <div className="mt-2 pt-2.5 border-t border-neutral-200/60 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Quick Suggestions:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_TOPICS.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleSendMessage(topic.label)}
                  className={`group flex items-center gap-1.5 ${p.pillBadge} text-xs px-3 py-1.5 rounded-full transition-all cursor-pointer text-left font-medium active:scale-95`}
                >
                  <span className={`material-symbols-outlined text-[15px] ${p.pillIcon} transition-colors`}>
                    {topic.icon}
                  </span>
                  <span>{topic.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div ref={messagesEndRef} />
        </div>

        {/* CALL TO SUPPORT FLOATING MODAL CARD (When clicked from floating pill button) */}
        {showCallCard && (
          <div className="mx-4 mb-2 p-4 bg-neutral-900 text-white rounded-2xl shadow-xl border border-neutral-700/80 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                  support_agent
                </span>
                <span className="font-heading font-extrabold text-sm text-white">
                  Direct Wholesale Support
                </span>
              </div>
              <button
                onClick={() => setShowCallCard(false)}
                className="text-neutral-400 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
              Connect directly with our Mumbai Mandi wholesale fulfillment desk.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:18008899999"
                className={`flex items-center justify-center gap-1.5 ${p.ctaBtn} text-white font-bold text-xs py-2 rounded-xl transition-all shadow-xs`}
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                1800-889-9999
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs py-2 rounded-xl transition-all shadow-xs"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* BOTTOM SECTION: Floating Support Pill Button & Soft Rounded Input (No harsh red outline) */}
        <div className="p-3 sm:p-4 bg-white border-t border-neutral-200/70 flex flex-col gap-2.5 shrink-0 shadow-xs">
          
          {/* Floating Prominent Action Button with soft velvety gradient and warm glow */}
          <div className="flex justify-end">
            <button
              onClick={() => setShowCallCard((prev) => !prev)}
              className={`flex items-center gap-1.5 ${p.ctaBtn} text-xs sm:text-[13px] font-heading font-bold px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-tight`}
            >
              <span className="material-symbols-outlined text-[16px] text-amber-200">
                support_agent
              </span>
              <span>Click Here To Support</span>
            </button>
          </div>

          {/* Pill Input Bar with Soft Neutral Border and Understated Focus Ring (Relaxing on Eyes) */}
          <div className={`relative flex items-center w-full rounded-full border border-neutral-300 hover:border-neutral-400 bg-white p-1 pl-3 sm:pl-3.5 shadow-2xs ${p.inputFocus} ring-2 ring-transparent transition-all`}>
            
            {/* Left Grid / Category Menu Icon */}
            <button
              onClick={() => setShowSuggestionsMenu((prev) => !prev)}
              className="text-neutral-400 hover:text-neutral-700 transition-colors p-1 cursor-pointer shrink-0"
              title="Quick Suggestions"
            >
              <span className="material-symbols-outlined text-[20px]">
                grid_view
              </span>
            </button>

            {/* Input Field with gentle text styling */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 px-2 py-1 text-xs sm:text-sm font-sans font-medium text-neutral-800 placeholder:text-neutral-400 focus:outline-none bg-transparent min-w-0"
            />

            {/* Right Action: Softer Circular Mic/Send Button */}
            <button
              onClick={inputValue.trim() ? () => handleSendMessage() : handleVoiceInputSimulate}
              className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full ${p.sendBtn} flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95 shrink-0`}
              title={inputValue.trim() ? "Send Message" : "Voice Ask"}
            >
              <span className="material-symbols-outlined text-[17px]">
                {inputValue.trim() ? "send" : "mic"}
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
