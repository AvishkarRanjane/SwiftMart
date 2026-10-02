# ⚡ SwiftMart — Quick-Commerce & B2B Wholesale Marketplace

<div align="center">

[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy_with-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Full-stack inspired quick-commerce, retail, and B2B wholesale marketplace with a complete 3-Tier Enterprise Workflow (Customer, Vendor, and 20-Module 2FA Admin Control Panel).**

[Explore Repository](https://github.com/AvishkarRanjane/SwiftMart) • [3-Tier Architecture](#-3-tier-enterprise-architecture) • [Key Features](#-key-features) • [Admin Control Panel](#-admin-control-panel-20-modules) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Vercel Deployment](#-vercel-deployment)

</div>

---

## 🌟 Overview

**SwiftMart** bridges consumer retail and business-to-business wholesale commerce. Inspired by platforms like Blinkit, Zepto, Flipkart, and IndiaMART, it delivers lightning-fast quick-commerce darkstore fulfillment alongside high-volume B2B bulk purchases with tiered discounts, profit margin calculators, vendor onboarding, and an enterprise-grade 20-module Admin Control Panel protected by Two-Factor Authentication (2FA).

Built with a high-performance **React 19 + Vite 8** foundation and an **Apple-inspired frosted glassmorphism interface**, SwiftMart ensures fluid 60fps micro-animations, smart section auto-collapse with scroll-spy, responsive navigation, and seamless single-page application (SPA) edge routing.

---

## 🏛️ 3-Tier Enterprise Architecture

SwiftMart is architected into three distinct, interconnected user workflows:

```text
                                  ┌─────────────────────────────┐
                                  │      SwiftMart Platform     │
                                  └──────────────┬──────────────┘
                                                 │
            ┌────────────────────────────────────┼────────────────────────────────────┐
            ▼                                    ▼                                    ▼
┌───────────────────────┐            ┌───────────────────────┐            ┌───────────────────────┐
│   CUSTOMER WORKFLOW   │            │    VENDOR WORKFLOW    │            │     ADMIN CONTROL     │
├───────────────────────┤            ├───────────────────────┤            ├───────────────────────┤
│ • Browse & Smart Reel │            │ • Become Vendor Modal │            │ • 2FA Secure Access   │
│ • Wholesale Margin Clc│            │ • Multi-Step Verify   │            │ • 20 System Modules   │
│ • Persistent Cart     │            │ • Vendor Dashboard    │            │ • User & Vendor Audit │
│ • Customer Dashboard  │            │ • Product Management  │            │ • Payouts & Approvals │
│ • Order Live Tracking │            │ • Order Fulfillment   │            │ • Logistics & Alerts  │
└───────────────────────┘            └───────────────────────┘            └───────────────────────┘
```

---

## ✨ Key Features

### 🛒 1. Customer Workflow & Storefront
- **Dynamic Multi-Feed Home Experience**: 14 category pill selectors, 3-second auto-sliding hero carousel with hover pause and manual controls.
- **Smart Section Collapse & Scroll-Spy**: When browsing deals or expanding category grids, scrolling away automatically collapses previous sections without jumping or layout shift.
- **Category Product Pages**: Rich category banners, faceted sort/filter chips, and real-time product discovery across Groceries, Electronics, Fashion, Home & Kitchen, Toys, and Hardware.
- **Dynamic Color Variant Swapping**: Interactive color swatches (e.g. boAt Airdopes in Gunmetal Black, Cobalt Blue, Pure White, Olive Green) that instantly update both the 4K studio display and thumbnail reels.
- **Customer Dashboard (6 Dedicated Tabs)**:
  - 👤 **My Profile**: Personal information, contact credentials, and membership tier.
  - 📦 **My Orders**: Real-time order history with visual step-by-step progress tracking (*Confirmed → Packed → Out for Delivery → Delivered*).
  - 📍 **Saved Addresses**: Address book management with default tags (Home, Work, Warehouse).
  - 💳 **Swift Wallet & Passbook**: Cashbacks, refund balances, and transaction history.
  - 💖 **Wishlist**: Saved items with 1-click "Move to Basket".
  - 🔔 **Notifications**: Order milestones, promo alerts, and price drops.

---

### 🏬 2. Vendor Workflow & Portal
- **"Become a Vendor" Application Modal**:
  - Step 1: Personal & Primary Contact Information
  - Step 2: Registered Business Name, Trade Type & GSTIN / PAN
  - Step 3: Bank Account Verification (Account Number, IFSC, UPI)
  - Step 4: Identity & Business Document Upload simulation
  - Instant submission review with automated status feedback.
- **Vendor Dashboard (6 Functional Views)**:
  - 📊 **Overview**: Total sales, active product counts, pending shipments, and payout balances.
  - 📦 **Products**: Complete catalog manager with **Add Product**, **Edit**, and **Delete** actions.
  - 🛒 **Orders**: Customer order fulfillment pipeline with status updates (*Pending → Packed → Dispatched*).
  - 📉 **Inventory**: Stock level monitoring with real-time low-stock alerts.
  - 💰 **Payouts**: Earnings ledger and settlement withdrawal requests.
  - ⚙️ **Store Settings**: Business profile, logo, support email, and notification preferences.

---

### 🛡️ 3. Admin Control Panel (20 Modules with 2FA)

Access protected with a dedicated **2-Factor Authentication (2FA)** gate:
- **Default PIN**: `123456`
- **Instant Demo Switch**: Single-click access directly from the account navigation dropdown.

#### The 20 Admin Modules:
| # | Module | Core Functionality |
|---|--------|---------------------|
| 1 | **Dashboard Overview** | Platform Gross Merchandise Value (GMV), active user counts, revenue graphs, and key performance indicators. |
| 2 | **Customer Management** | View registered customer profiles, lifetime spends, order frequencies, and block/activate accounts. |
| 3 | **Vendor Management** | Review vendor onboarding applications, approve/reject GSTIN documents, and adjust commission rates. |
| 4 | **Product Management** | Marketplace-wide product catalog moderation, approval queues, price controls, and stock updates. |
| 5 | **Category Management** | Create, edit, and organize top-level categories and sub-categories with custom imagery and badges. |
| 6 | **Order Management** | Master control of all customer orders, live statuses, invoice downloads, and manual overrides. |
| 7 | **Inventory Management** | Darkstore stock tracking, low-stock threshold triggers, and bulk reorder automations. |
| 8 | **Payment & Transactions** | Financial transaction log across Razorpay, UPI, Net Banking, and COD with settlement states. |
| 9 | **Vendor Payouts** | Vendor balance settlements, pending payout request reviews, and payment approvals. |
| 10 | **Sales & Analytics** | Deep analytics on gross margins, category-wise revenue breakdowns, and seasonal sales trends. |
| 11 | **Market Insights** | Demand forecasting, popular search keywords, top-performing SKUs, and user traffic heatmaps. |
| 12 | **Offers & Discounts** | Create promo coupon codes, flat percentage vouchers, and flash deal schedules. |
| 13 | **Reviews & Ratings** | User feedback moderation, flagged comment removal, and product sentiment scores. |
| 14 | **Darkstore & Logistics** | Darkstore pod allocation, delivery fleet rider tracking, and pincode serviceability rules. |
| 15 | **Helpdesk & Complaints** | Customer support ticket resolution, escalation workflows, and SLA response tracking. |
| 16 | **Banner & Content** | Homepage hero carousel banner uploads, marketing taglines, and announcement ribbons. |
| 17 | **Notifications & Alerts** | System-wide broadcast alerts, SMS/Email campaign triggers, and push notifications. |
| 18 | **Admin Roles & Permissions** | Role-Based Access Control (RBAC) across Super Admins, Operations Managers, and Support Agents. |
| 19 | **System Settings** | Platform base currency, default GST tax rates, platform fees, and darkstore delivery charges. |
| 20 | **Security & Audit Logs** | Real-time immutable audit trail recording admin logins, sensitive overrides, and IP addresses. |

---

### 📦 4. B2B Wholesale Bulk-Buying System
- **Tiered Volume Pricing**: Automatic per-unit discounts based on Minimum Order Quantity (MOQ) brackets (e.g. 10+, 50+, 100+ units).
- **Wholesale Margin Calculator**: Interactive simulator computing resale revenue, net margin (₹), and return percentage (%).
- **Wholesale Cart Drawer**: Dedicated bulk cart drawer showing aggregate margin calculations, MOQ validations, and tax breakdowns.
- **Wholesale Support Drawer**: 1-click direct WhatsApp, phone callback, and quotation request integration.
- **Quick View Modal**: Rapid modal previews without losing catalog navigation position.

---

## 🏗️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) | Component architecture, hooks, and responsive UX |
| **Bundler & Tooling** | [Vite 8](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **Styling & Design System** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Apple-inspired frosted glassmorphism and responsive design |
| **Icons & Typography** | [Google Material Symbols](https://fonts.google.com/icons) + Inter | Optical sizing, variable weights, and typography |
| **State Management** | React Context API (`CartContext`, `AuthContext`) | Global shopping bag, wishlist, and authentication with `localStorage` |
| **Deployment & Edge** | [Vercel](https://vercel.com/) | Edge network hosting with SPA rewrite configuration |

---

## 📁 Project Structure

```
SwiftMart/
├── .gitignore
├── .oxlintrc.json
├── index.html                           # Root HTML entry point
├── package.json                         # Dependencies & npm scripts
├── package-lock.json
├── postcss.config.js                    # PostCSS configuration
├── tailwind.config.js                   # Tailwind CSS styling extensions
├── vercel.json                          # Vercel SPA edge rewrite configuration
├── vite.config.js                       # Vite build configuration
├── README.md                            # Complete Project Documentation
├── public/
│   ├── favicon.svg                      # SwiftMart SVG branding
│   └── images/                          # Curated 4K product photos & category banners
│       ├── category-banners/            # Banners for all retail categories
│       ├── furniture/                   # Curated furniture showcase
│       └── products/                    # Wholesale & retail product imagery
└── src/
    ├── main.jsx                         # React DOM mount point
    ├── App.jsx                          # Master application router & navigation state
    ├── index.css                        # Glassmorphism, animations & Tailwind directives
    ├── components/                      # Reusable modular UI components
    │   ├── Header.jsx                   # Navigation header with user, vendor & admin menus
    │   ├── Footer.jsx                   # Footer with quick links & badges
    │   ├── ProductCard.jsx              # Reusable product card with quick-actions
    │   ├── CuratedCategoryGrid.jsx      # Expandable category deal grids with auto-collapse
    │   ├── BecomeVendorModal.jsx        # Multi-step vendor registration & onboarding
    │   ├── OrderSuccessModal.jsx        # Animated checkout completion confirmation
    │   ├── PincodeModal.jsx             # Darkstore pincode serviceability checker
    │   ├── Toast.jsx                    # Floating toast notification
    │   ├── WholesaleAccountModal.jsx    # Wholesale B2B account login/signup modal
    │   ├── WholesaleCalculator.jsx      # Margin & ROI calculator simulator
    │   ├── WholesaleCartDrawer.jsx      # B2B cart drawer with margin breakdown
    │   ├── WholesaleHero.jsx            # Wholesale promotional hero banner
    │   ├── WholesaleQuickViewModal.jsx  # Rapid product preview modal
    │   ├── WholesaleSupportDrawer.jsx   # Dedicated wholesale helpdesk & WhatsApp drawer
    │   └── WholesaleWishlistDrawer.jsx  # Saved wholesale items drawer
    ├── context/
    │   ├── AuthContext.jsx              # Customer, Vendor & Admin authentication state
    │   └── CartContext.jsx              # Cart, Wishlist, Margin & Toast state
    ├── data/
    │   ├── products.js                  # Flagship 40-product consumer dataset
    │   ├── categoryPageData.js          # Dedicated category-level product catalogs
    │   └── wholesaleData.js             # Wholesale B2B products with tiered pricing & MOQs
    └── pages/
        ├── Home.jsx                     # Flagship B2C homepage with auto-sliding hero
        ├── SinglePageWholesale.jsx      # Dedicated single-page B2B wholesale store
        ├── CategoryProductPage.jsx      # Category-specific catalog view with filters
        ├── CustomerDashboard.jsx        # Customer portal (Profile, Orders, Wallet, Addresses)
        ├── VendorDashboard.jsx          # Vendor portal (Products, Orders, Stock, Payouts)
        ├── AdminDashboard.jsx           # 20-Module 2FA Admin Control Panel
        ├── ProductDetail.jsx            # PDP with multi-angle color variant swapping
        ├── Catalogue.jsx                # Searchable store catalogue with faceted filters
        ├── Cart.jsx                     # Full shopping bag with coupon discounts
        ├── Wishlist.jsx                 # Global saved items page
        ├── Login.jsx                    # Customer sign-in page
        ├── SignUp.jsx                   # Customer registration page
        ├── Account.jsx                  # Account profile management
        └── BrandsSpotlight.jsx          # Partner brands showcase
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/AvishkarRanjane/SwiftMart.git

# 2. Navigate to the project directory
cd SwiftMart

# 3. Install dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

Open **`http://localhost:5173/`** in your browser to view the application.

### Production Build

```bash
# Compile and optimize production bundle into /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Vercel Deployment

This project includes [`vercel.json`](vercel.json) pre-configured with client-side SPA rewrites:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Steps to Deploy:
1. Push your latest code to GitHub:
   ```bash
   git push origin main
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import the repository: **`AvishkarRanjane/SwiftMart`**.
4. Vercel automatically detects the **Vite** framework:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your application will be live within seconds with continuous deployment enabled for every future push to `main`.

---

## 🔑 Quick Demo Credentials

For quick exploration of the different roles:

| Role | Access Route | Demo Credentials |
|---|---|---|
| **Customer** | Header → `Account` or `Sign In` | Email: `alex.morgan@example.com` / Any password |
| **Vendor** | Header → `Account` → `Vendor Dashboard` | Instant access via dropdown |
| **Vendor Application** | Header → `Become a Vendor` | Interactive 4-step modal |
| **Admin Panel** | Header → `Account` → `Admin Control Panel` | **2FA Security PIN:** `123456` |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
