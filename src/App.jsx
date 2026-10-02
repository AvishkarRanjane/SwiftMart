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
import WholesaleCartDrawer from "./components/WholesaleCartDrawer";
import WholesaleWishlistDrawer from "./components/WholesaleWishlistDrawer";
import WholesaleQuickViewModal from "./components/WholesaleQuickViewModal";
import WholesaleAccountModal from "./components/WholesaleAccountModal";
import WholesaleSupportDrawer from "./components/WholesaleSupportDrawer";
import BecomeVendorModal from "./components/BecomeVendorModal";

function SwiftMartWholesaleApp() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home' | 'category' | 'customer-dashboard' | 'vendor-dashboard'
  const [selectedCategory, setSelectedCategory] = useState("health-beauty");
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isSupportDrawerOpen, setIsSupportDrawerOpen] = useState(false);
  const [isBecomeVendorModalOpen, setIsBecomeVendorModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const { setIsOrderSuccessOpen, setLastOrderDetails } = useCart();

  // Smooth scroll to any section ID on the continuous single page
  const scrollToSection = (sectionId) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    if (currentPage !== "home") {
      setCurrentPage("home");
    }
    setTimeout(() => scrollToSection("all-products"), 100);
  };

  const handleSelectCategory = (catId, subCat = "all", shouldScroll = true) => {
    const homeSections = [
      "all-products",
      "flash-deals",
      "daily-necessities",
      "electronics-gadgets",
      "wholesale-faq",
    ];

    if (homeSections.includes(catId)) {
      if (currentPage !== "home") {
        setCurrentPage("home");
        setTimeout(() => scrollToSection(catId), 100);
      } else {
        scrollToSection(catId);
      }
      return;
    }

    // Open dedicated Category Product Listing Page (matching DeoDap layout)
    const isNewPage = currentPage !== "category";
    setSelectedCategory(catId);
    setSelectedSubCategory(subCat || "all");
    setCurrentPage("category");
    if (isNewPage && shouldScroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
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

      {/* Main Content: Home Single-Page Wholesale | Category Page | Customer Dashboard | Vendor Dashboard | Admin Dashboard */}
      <main className="flex-1 w-full">
        {currentPage === "admin-dashboard" ? (
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
