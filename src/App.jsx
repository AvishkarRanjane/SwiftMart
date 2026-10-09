import React, { useState } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import OrderSuccessModal from "./components/OrderSuccessModal";
import SinglePageWholesale from "./pages/SinglePageWholesale";
import CategoryProductPage from "./pages/CategoryProductPage";
import CustomerDashboard from "./pages/CustomerDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { WHOLESALE_PRODUCTS } from "./data/wholesaleData";
import { PRODUCTS } from "./data/products";
import WholesaleCartDrawer from "./components/WholesaleCartDrawer";
import WholesaleWishlistDrawer from "./components/WholesaleWishlistDrawer";
import WholesaleQuickViewModal from "./components/WholesaleQuickViewModal";
import WholesaleAccountModal from "./components/WholesaleAccountModal";
import WholesaleSupportDrawer from "./components/WholesaleSupportDrawer";
import BecomeVendorModal from "./components/BecomeVendorModal";
import { appleSmoothScroll } from "./utils/scrollAnimation";

function SwiftMartWholesaleApp() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home' | 'category' | 'customer-dashboard' | 'vendor-dashboard'
  const [selectedCategory, setSelectedCategory] = useState("health-beauty");
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const [activeHomePill, setActiveHomePill] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isSupportDrawerOpen, setIsSupportDrawerOpen] = useState(false);
  const [isBecomeVendorModalOpen, setIsBecomeVendorModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const { setIsOrderSuccessOpen, setLastOrderDetails } = useCart();

  // Smooth scroll to any section ID with Apple-grade fluid animation
  const scrollToSection = (sectionId, options = {}) => {
    if (sectionId === "top") {
      appleSmoothScroll(0, options);
      return;
    }

    let targetId = sectionId;
    if (sectionId === "just-arrived") {
      setActiveHomePill("all");
    } else if (sectionId === "best-sellers") {
      setActiveHomePill("all");
    } else if (
      sectionId === "festive-specials" ||
      sectionId === "navratri-specials" ||
      sectionId === "festive"
    ) {
      setActiveHomePill("festive");
    }
    // daily-necessities, electronics-gadgets, kitchen-dining, home-improvement
    // will now be handled via direct content load.

    if (currentPage !== "home") {
      setCurrentPage("home");
      requestAnimationFrame(() => {
        setTimeout(() => {
          appleSmoothScroll(targetId, options);
        }, 80);
      });
    } else {
      appleSmoothScroll(targetId, options);
    }
  };

  const handleNavigateHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateCustomer = () => {
    setCurrentPage("customer-dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateVendor = () => {
    setCurrentPage("vendor-dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateAdmin = () => {
    setCurrentPage("admin-dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (page, extra) => {
    if (page === "home") {
      handleNavigateHome();
    } else if (page === "cart") {
      setCurrentPage("cart");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "wishlist") {
      setCurrentPage("wishlist");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "catalogue" || page === "category") {
      handleSelectCategory(extra || "just-arrived");
    } else if (page === "customer-dashboard" || page === "login" || page === "customer") {
      handleNavigateCustomer();
    } else if (page === "vendor-dashboard" || page === "vendor") {
      handleNavigateVendor();
    } else if (page === "admin-dashboard" || page === "admin") {
      handleNavigateAdmin();
    } else {
      handleNavigateHome();
    }
  };

  const handleSearchSubmit = (query) => {
    if (!query || !query.trim()) return;
    setSearchQuery(query.trim());
    if (currentPage !== "home") {
      setCurrentPage("home");
    }
    setTimeout(() => scrollToSection("all-products"), 100);
  };

  const handleSelectCategory = (catId, subCat = "all", shouldScroll = true) => {
    // 1. Sections that live on the Home page — smooth-scroll to them instead of loading CategoryProductPage
    const homeSections = [
      "just-arrived",
      "best-sellers",
      "festive-specials",
      "navratri-specials",
      "flash-deals",
      "wholesale-faq",
    ];
    if (homeSections.includes(catId)) {
      scrollToSection(catId);
      return;
    }

    // 2. Direct Product Category Loading for all other options located within Category dropdown
    setSelectedCategory(catId);
    setSelectedSubCategory(subCat || "all");

    if (currentPage !== "category") {
      setCurrentPage("category");
      if (shouldScroll) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
  };

  const handleCheckoutSuccess = (orderSummary) => {
    setLastOrderDetails({
      orderId: "INV-" + Math.floor(100000 + Math.random() * 900000),
      grandTotal: orderSummary.grandTotal,
      gstin: orderSummary.gstin,
      gstCredit: orderSummary.gstCredit,
      itemCount: orderSummary.itemCount,
    });
    setIsOrderSuccessOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-neutral-900 flex flex-col justify-between selection:bg-red-600 selection:text-white">
      {/* Upgraded Navigation & Top Bar (Matching Reference Images 1 & 2) */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        onOpenWishlist={() => setIsWishlistDrawerOpen(true)}
        onOpenAccount={() => setIsAccountModalOpen(true)}
        onOpenSupport={() => setIsSupportDrawerOpen(true)}
        onSelectCategory={handleSelectCategory}
        onScrollToSection={scrollToSection}
        onLogoClick={handleNavigateHome}
        onNavigateCustomer={handleNavigateCustomer}
        onNavigateVendor={handleNavigateVendor}
        onNavigateAdmin={handleNavigateAdmin}
        onOpenBecomeVendor={() => setIsBecomeVendorModalOpen(true)}
      />

      {/* Main Content: Home Single-Page Wholesale | Category Page | Customer Dashboard | Vendor Dashboard | Admin Dashboard | Cart | Wishlist */}
      <main className="flex-1 w-full">
        {currentPage === "cart" ? (
          <Cart
            onNavigate={handleNavigate}
            onViewProduct={(id) => {
              const product =
                WHOLESALE_PRODUCTS.find((p) => p.id === id) ||
                PRODUCTS.find((p) => p.id === id);
              if (product) setQuickViewProduct(product);
            }}
            onOpenPincodeModal={() => setIsAccountModalOpen(true)}
          />
        ) : currentPage === "wishlist" ? (
          <Wishlist
            onNavigate={handleNavigate}
            onViewProduct={(id) => {
              const product =
                WHOLESALE_PRODUCTS.find((p) => p.id === id) ||
                PRODUCTS.find((p) => p.id === id);
              if (product) setQuickViewProduct(product);
            }}
          />
        ) : currentPage === "admin-dashboard" ? (
          <AdminDashboard
            onNavigateHome={handleNavigateHome}
            onNavigateCustomer={handleNavigateCustomer}
            onNavigateVendor={handleNavigateVendor}
            onQuickView={(product) => setQuickViewProduct(product)}
          />
        ) : currentPage === "customer-dashboard" ? (
          <CustomerDashboard
            onNavigateHome={handleNavigateHome}
            onNavigateVendor={handleNavigateVendor}
            onOpenBecomeVendor={() => setIsBecomeVendorModalOpen(true)}
            onOpenCart={() => setIsCartDrawerOpen(true)}
            onQuickView={(product) => setQuickViewProduct(product)}
          />
        ) : currentPage === "vendor-dashboard" ? (
          <VendorDashboard
            onNavigateHome={handleNavigateHome}
            onNavigateCustomer={handleNavigateCustomer}
          />
        ) : currentPage === "category" ? (
          <CategoryProductPage
            category={selectedCategory}
            subCategory={selectedSubCategory}
            onSelectCategory={handleSelectCategory}
            onNavigateHome={handleNavigateHome}
            onQuickView={(product) => setQuickViewProduct(product)}
            onOpenSupport={() => setIsSupportDrawerOpen(true)}
          />
        ) : (
          <SinglePageWholesale
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            onQuickView={(product) => setQuickViewProduct(product)}
            activePillProp={activeHomePill}
            onPillChange={(pill) => setActiveHomePill(pill)}
          />
        )}
      </main>

      {/* Wholesale Slide-over Cart Drawer with GSTIN Verification */}
      <WholesaleCartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        onCheckoutSuccess={handleCheckoutSuccess}
      />

      {/* Saved / Wishlist Slide-over Drawer */}
      <WholesaleWishlistDrawer
        isOpen={isWishlistDrawerOpen}
        onClose={() => setIsWishlistDrawerOpen(false)}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

      {/* Creative Left Slide-Over Wholesale Support & Expert Drawer */}
      <WholesaleSupportDrawer
        isOpen={isSupportDrawerOpen}
        onClose={() => setIsSupportDrawerOpen(false)}
        onOpenCart={() => {
          setIsSupportDrawerOpen(false);
          setIsCartDrawerOpen(true);
        }}
      />

      {/* B2B Wholesale Specs & Carton Logistics Quick View Modal */}
      <WholesaleQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Wholesale Account & GSTIN Business Login Modal */}
      <WholesaleAccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
      />

      {/* Become a Mandi Vendor Modal */}
      <BecomeVendorModal
        isOpen={isBecomeVendorModalOpen}
        onClose={() => setIsBecomeVendorModalOpen(false)}
        onRegisterSuccess={() => {
          setCurrentPage("vendor-dashboard");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* B2B Order Success & Freight Dispatch Modal */}
      <OrderSuccessModal onNavigateHome={handleNavigateHome} />

      {/* Real-time Feedback Toast */}
      <Toast />

      {/* Comprehensive Wholesale Footer */}
      <Footer
        onLogoClick={handleNavigateHome}
        onNavigateCustomer={handleNavigateCustomer}
        onNavigateVendor={handleNavigateVendor}
        onNavigateAdmin={handleNavigateAdmin}
        onOpenBecomeVendor={() => setIsBecomeVendorModalOpen(true)}
        onScrollToSection={(sectionId) => {
          if (currentPage !== "home") {
            setCurrentPage("home");
            setTimeout(() => scrollToSection(sectionId), 100);
          } else {
            scrollToSection(sectionId);
          }
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SwiftMartWholesaleApp />
      </CartProvider>
    </AuthProvider>
  );
}
