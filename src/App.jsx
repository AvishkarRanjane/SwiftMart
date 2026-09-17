import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import PincodeModal from "./components/PincodeModal";
import OrderSuccessModal from "./components/OrderSuccessModal";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Catalogue from "./pages/Catalogue";
import Wishlist from "./pages/Wishlist";
import BrandsSpotlight from "./pages/BrandsSpotlight";
import Account from "./pages/Account";

function SwiftMartApp() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState("boat-141-anc");
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilterQuery, setActiveFilterQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Navigation History Stack (supports backtracking through similar products & pages)
  const [historyStack, setHistoryStack] = useState([]);
  const [brandSpotlightData, setBrandSpotlightData] = useState(null);
  const [restoredState, setRestoredState] = useState(null);

  // Helper for glitch-free scroll to top
  const scrollToTopInstant = () => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 50);
  };

  // Dedicated Logo Click: clean reset to root Home page
  const handleLogoClick = () => {
    setHistoryStack([]);
    setSearchQuery("");
    setActiveFilterQuery("");
    setActiveCategory("all");
    setBrandSpotlightData(null);
    setRestoredState(null);
    setCurrentPage("home");
    scrollToTopInstant();
  };

  // Scroll to top on navigation
  const navigate = (page, category = "all") => {
    if (page !== currentPage) {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setHistoryStack((prev) => [
        ...prev,
        {
          page: currentPage,
          productId: selectedProductId,
          category: activeCategory,
          brandSpotlight: brandSpotlightData,
          scrollY: currentScrollY,
        },
      ]);
    }
    if (page !== "product") {
      setBrandSpotlightData(null);
    }
    setCurrentPage(page);
    if (category) setActiveCategory(category);
    scrollToTopInstant();
  };

  const handleViewProduct = (productId, spotlight = null, extraContext = {}) => {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    // Push current view to history stack (even if navigating between products)
    setHistoryStack((prev) => [
      ...prev,
      {
        page: currentPage,
        productId: selectedProductId,
        category: activeCategory,
        brandSpotlight: brandSpotlightData,
        scrollY: currentScrollY,
        expandedSection: extraContext?.expandedSection !== undefined ? extraContext.expandedSection : null,
      },
    ]);
    setSelectedProductId(productId);
    setBrandSpotlightData(spotlight);
    setCurrentPage("product");
    scrollToTopInstant();
  };

  const handleBack = () => {
    if (historyStack.length > 0) {
      // Pop the most recent view from history stack
      const previous = historyStack[historyStack.length - 1];
      setHistoryStack((prev) => prev.slice(0, -1));
      setCurrentPage(previous.page);
      if (previous.productId) {
        setSelectedProductId(previous.productId);
      }
      if (previous.category) {
        setActiveCategory(previous.category);
      }
      setBrandSpotlightData(previous.brandSpotlight || null);

      setRestoredState({
        page: previous.page,
        scrollY: previous.scrollY || 0,
        expandedSection: previous.expandedSection || null,
        timestamp: Date.now(),
      });
    } else {
      setCurrentPage("home");
      setBrandSpotlightData(null);
      scrollToTopInstant();
    }
  };

  const handleSearchSubmit = (query) => {
    const trimmed = query ? query.trim() : "";
    if (!trimmed && currentPage !== "catalogue") {
      return;
    }
    const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    setHistoryStack((prev) => [
      ...prev,
      {
        page: currentPage,
        productId: selectedProductId,
        category: activeCategory,
        scrollY: currentScrollY,
      },
    ]);
    setActiveFilterQuery(trimmed);
    setSearchQuery(trimmed);
    setCurrentPage("catalogue");
    scrollToTopInstant();
  };

  const handleClearFilter = () => {
    setActiveFilterQuery("");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-flipkart-bg/60 font-body-md text-on-surface flex flex-col justify-between selection:bg-primary selection:text-white">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        onLogoClick={handleLogoClick}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Main Content Area (offset for single-row Apple frosted header) */}
      <div className="pt-[64px] sm:pt-[70px] flex-1">
        {currentPage === "home" && (
          <Home
            onNavigate={navigate}
            onViewProduct={handleViewProduct}
            filterQuery={activeFilterQuery}
            onClearFilter={handleClearFilter}
            restoredState={restoredState}
          />
        )}
        {currentPage === "catalogue" && (
          <Catalogue
            onNavigate={navigate}
            onViewProduct={handleViewProduct}
            initialQuery={activeFilterQuery}
            initialCategory={activeCategory}
            onCategoryChange={(cat) => setActiveCategory(cat)}
            restoredState={restoredState}
          />
        )}
        {currentPage === "product" && (
          <ProductDetail
            key={`${selectedProductId}-${brandSpotlightData?.variantName || "default"}`}
            productId={selectedProductId}
            onNavigate={navigate}
            onViewProduct={handleViewProduct}
            onBack={handleBack}
            brandSpotlight={brandSpotlightData}
            restoredState={restoredState}
          />
        )}
        {currentPage === "cart" && (
          <Cart
            onNavigate={navigate}
            onViewProduct={handleViewProduct}
            onOpenPincodeModal={() => setIsPincodeModalOpen(true)}
          />
        )}
        {currentPage === "login" && <Login onNavigate={navigate} />}
        {currentPage === "signup" && <SignUp onNavigate={navigate} />}
        {currentPage === "wishlist" && (
          <Wishlist onNavigate={navigate} onViewProduct={handleViewProduct} />
        )}
        {currentPage === "brands-spotlight" && (
          <BrandsSpotlight
            onNavigate={navigate}
            onViewProduct={handleViewProduct}
            onBack={handleBack}
          />
        )}
        {currentPage === "account" && <Account onNavigate={navigate} />}
      </div>

      {/* Global Modals & Notifications */}
      <PincodeModal
        isOpen={isPincodeModalOpen}
        onClose={() => setIsPincodeModalOpen(false)}
      />

      <OrderSuccessModal onNavigateHome={handleLogoClick} />

      <Toast />

      {/* Footer */}
      <Footer onNavigate={navigate} onLogoClick={handleLogoClick} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SwiftMartApp />
      </CartProvider>
    </AuthProvider>
  );
}
