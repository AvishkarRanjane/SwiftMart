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

function SwiftMartApp() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState("boat-141-anc");
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilterQuery, setActiveFilterQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Scroll to top on navigation
  const navigate = (page, category = "all") => {
    setCurrentPage(page);
    if (category) setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchSubmit = (query) => {
    setActiveFilterQuery(query);
    setSearchQuery(query);
    setCurrentPage("catalogue");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          />
        )}
        {currentPage === "catalogue" && (
          <Catalogue
            onNavigate={navigate}
            onViewProduct={handleViewProduct}
            initialQuery={activeFilterQuery}
            initialCategory={activeCategory}
            onCategoryChange={(cat) => setActiveCategory(cat)}
          />
        )}
        {currentPage === "product" && (
          <ProductDetail
            productId={selectedProductId}
            onNavigate={navigate}
            onViewProduct={handleViewProduct}
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
      </div>

      {/* Global Modals & Notifications */}
      <PincodeModal
        isOpen={isPincodeModalOpen}
        onClose={() => setIsPincodeModalOpen(false)}
      />

      <OrderSuccessModal onNavigateHome={() => navigate("home")} />

      <Toast />

      {/* Footer */}
      <Footer onNavigate={navigate} />
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
