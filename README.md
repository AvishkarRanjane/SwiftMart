# ⚡ SwiftMart — Quick-Commerce & Flagship Retail Platform

<div align="center">

[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy_with-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Next-generation Flipkart & Blinkit-inspired 15-minute quick-commerce & flagship retail platform with interactive multi-feed reels, 3-second auto-sliding drops, dynamic color variant image swapping, live store catalogue with spec filters, persistent basket, and Apple frosted glassmorphism UI.**

[Explore Live Demo](https://swiftmart-three.vercel.app) • [Key Features](#-key-features) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start)

</div>

---

## 🌟 Overview

**SwiftMart** combines the lightning-fast darkstore fulfillment of instant grocery apps (Blinkit, Zepto) with the comprehensive catalog depth and flagship electronics showcases of modern marketplaces (Flipkart, Amazon). Built with a modern, high-performance **React 19 + Vite 8** foundation and an **Apple-inspired frosted glassmorphism interface**, SwiftMart delivers fluid 60fps micro-animations, optical icon alignment, and responsive layouts across mobile, tablet, and ultra-wide displays.

---

## ✨ Key Features

### 🛒 1. Dynamic Multi-Feed Home Experience
- **Top Sub-Category Ribbon**: 14 category pill selectors (*For You*, *Fashion*, *Mobiles*, *Electronics*, *Home*, *Food & More*, etc.) with smooth horizontal drag.
- **3-Second Auto-Sliding Hero Carousel**: Auto-slides left every 3,000ms across 4 flagship product drops (5G Mobiles, Orthopedic Mattresses, POCO Turbo series, and boAt ANC Audio) with hover pause, manual chevron controls, and reactive pagination indicators.
- **Curated Multi-Section Deal Feeds**:
  - *Trending Deals on Furniture* (Shoe Racks, Drawers, Home Temples, Kid Seating)
  - *Add to Your Wishlist* (Bestsellers, Top Rated, Most Loved, In Focus Now)
  - *Top Value Zone* (Earrings, Garment Covers, Anklets)
  - *Popular Nearby Express Pod* (boAt Audio, Milton Thermos, Chronograph Watches, Sneakers)
  - *Trending Gadgets & Appliances* (True Wireless, Trimmers, Neckbands, Mixers)
  - *Hair & Skincare Essentials* (Face Wash, Hair Clips, Men's Grooming, Hair Oils)
  - *Best Value Deals on Fashion* (Casual Sneakers, Sarees, Sports Shoes, Party Gowns)
- **SuperSaver Grocery & Flagship 40-Product Reel**: Clean card layouts with category discount badges, star ratings, pack sizes, and 1-tap navigation.

### 🎧 2. Dynamic Color Variant Image Swapping
- **Multi-Angle Color Synchronisation**:
  - Selecting any color swatch (e.g. **Gunmetal Black**, **Cobalt Blue**, **Pure White**, or **Olive Green** on the *boAt Airdopes 141 ANC*) immediately updates **both the main 4K studio display image and all vertical thumbnails** on the left to show that specific color.
  - Dedicated 4-angle studio photography per color variant (Case Open Front, 45° Cradle Angle, Standing Earbuds Pair, Closed Pocket Case).
- **Interactive Color Swatches**: High-contrast tactile active states with checkmark indicators and real-time inventory readouts (*"⚡ In Stock at Pod 400001"*).

### 🔍 3. Store Catalogue & Spec Filter Engine
- **Faceted Sidebar Filters**:
  - **Live Search**: Instant keyword debounced search across titles, brands, and categories.
  - **Category Selector**: Filter between *Grocery & Staples*, *Electronics & Audio*, *DMart Value Packs*, and *Smart Gadgets & Hardware* with live item counters.
  - **Dynamic Price Slider**: Real-time interactive range slider (₹20 to ₹90,000+).
  - **Minimum Rating Chips**: Multi-select pills for `All`, `4.5★`, `4.7★`, and `4.8★`.
  - **In-Stock Only Filter**: Toggle out-of-stock items instantly.
  - **Sort Controls**: Sort by *Featured*, *Price: Low to High*, *Price: High to Low*, or *Highest Rated*.

### 📍 4. Darkstore Pincode & Express Delivery
- **6-Digit Pincode Verification**: Interactive delivery checker testing serviceable Indian pincodes with instant darkstore status readout.
- **15-20 Minute Express Dispatch**: Guaranteed slot confirmation and local pod routing.

### 💖 5. Dedicated Wishlist & Persistent Basket
- **Global Wishlist Synchronization**: Real-time heart toggles across all product feeds, catalogue cards, and PDPs backed by `localStorage` persistence.
- **1-Click "Move to Basket"**: Seamless basket migration for single items or full wishlist bulk transfer.
- **Full-Featured Shopping Bag**: Promo coupon engine, price breakdown, item quantity steppers, and animated checkout modal.

### 🎨 6. Apple-Inspired Frosted Glassmorphism UI
- **Header Navigation Bar**: Frosted blur (`backdrop-blur-xl bg-white/80 border-b border-black/[0.06]`), Apple SF Pro font styling, optical icon weights (`wght 350, opsz 20`), and textless minimalist action icons.
- **Mobile Floating Bottom Dock**: Tactile mobile navigation with real-time reactive badge counters.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Core** | [React 19](https://react.dev/) + JSX |
| **Build & Bundler** | [Vite 8](https://vitejs.dev/) with Rollup/Oxc pipeline |
| **Styling & Design System** | [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + CSS Variables |
| **Typography & Icons** | Inter font + [Google Material Symbols Outlined](https://fonts.google.com/icons) |
| **State Management** | React Context API (`CartContext`, `AuthContext`) with `localStorage` persistence |
| **Deployment & Hosting** | [Vercel](https://vercel.com/) Edge Network |

---

## 📁 Project Structure

```
SwiftMart/
├── .gitignore
├── .oxlintrc.json
├── index.html                      # Root HTML entry point
├── package.json                    # Project dependencies & scripts
├── package-lock.json
├── vite.config.js                  # Vite bundler configuration
├── tailwind.config.js               # Tailwind CSS theme extensions
├── postcss.config.js
├── README.md                       # Documentation
├── public/
│   └── images/                     # Curated 4K product photos & deal assets
└── src/
    ├── components/                 # Reusable UI components
    │   ├── Header.jsx              # Frosted glassmorphism header & dock
    │   ├── Footer.jsx              # Store footer with links & payment badges
    │   ├── Toast.jsx               # Floating notification toast
    │   ├── OrderSuccessModal.jsx   # Animated checkout success overlay
    │   └── PincodeModal.jsx        # Pincode delivery selector
    ├── context/
    │   ├── CartContext.jsx         # Cart, Wishlist, and Toast state provider
    │   └── AuthContext.jsx         # Authentication & user profile state
    ├── data/
    │   └── products.js             # 40 products across 4 categories with variants
    ├── pages/
    │   ├── Home.jsx                # Feed homepage with 3s auto-slider
    │   ├── Catalogue.jsx           # Store catalogue with faceted sidebar filters
    │   ├── ProductDetail.jsx       # PDP with color variant image swapping
    │   ├── Cart.jsx                # Shopping bag with coupon engine
    │   ├── Wishlist.jsx            # Saved items management page
    │   ├── Login.jsx               # Member sign-in
    │   └── SignUp.jsx              # New account registration
    ├── App.jsx                     # Route coordinator & view switcher
    ├── index.css                   # Global styles, glassmorphism, animations
    └── main.jsx                    # React DOM root mounting
```

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AvishkarRanjane/SwiftMart.git

# 2. Navigate into the project folder
cd SwiftMart

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

Visit **`http://localhost:5173/`** in your browser to view the application.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Live Deployment

The application is deployed on **Vercel**:
- **Live URL**: [https://swiftmart-three.vercel.app](https://swiftmart-three.vercel.app)
- **GitHub Repository**: [https://github.com/AvishkarRanjane/SwiftMart](https://github.com/AvishkarRanjane/SwiftMart)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and adapt for personal or commercial projects.
