import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function VendorDashboard({ onNavigateHome, onNavigateCustomer }) {
  const { showToast } = useCart();
  const { user } = useAuth();

  // Active Tab: 'overview' | 'shop' | 'products' | 'inventory' | 'orders' | 'analytics' | 'market' | 'earnings' | 'reviews' | 'notifications' | 'settings'
  const [activeTab, setActiveTab] = useState("overview");

  // Search & Filter
  const [productSearch, setProductSearch] = useState("");
  const [orderFilter, setOrderFilter] = useState("all");
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [selectedOrderToReject, setSelectedOrderToReject] = useState(null);
  const [rejectReason, setRejectReason] = useState("");

  // Vendor Wallet & Stats
  const [walletBalance, setWalletBalance] = useState(112450);
  const [escrowPending, setEscrowPending] = useState(38400);
  const [payoutAmount, setPayoutAmount] = useState("");

  // Master Products Catalog
  const [products, setProducts] = useState([
    {
      id: "VND-PRD-101",
      name: "Commercial Dishwash Liquid 20L Canister",
      category: "Daily Necessities",
      packSize: "20L Heavy Canister",
      unitsPerCarton: 1,
      factoryRate: 620,
      suggestedMrp: 1299,
      margin: "52%",
      cartonsInStock: 140,
      lowStockThreshold: 30,
      status: "Active",
      image: "/images/hero-fmcg.jpg",
    },
    {
      id: "VND-PRD-102",
      name: "TWS True Wireless Earbuds ANC (Master Box of 20)",
      category: "Electronics",
      packSize: "Master Box of 20 Units",
      unitsPerCarton: 20,
      factoryRate: 7200,
      suggestedMrp: 19999,
      margin: "64%",
      cartonsInStock: 45,
      lowStockThreshold: 20,
      status: "Active",
      image: "/images/hero-electronics.jpg",
    },
    {
      id: "VND-PRD-103",
      name: "Stainless Steel 304 Thermal Vacuum Flask Set (24 Pcs)",
      category: "Kitchenware",
      packSize: "Carton of 24 Pcs",
      unitsPerCarton: 24,
      factoryRate: 4600,
      suggestedMrp: 11990,
      margin: "61%",
      cartonsInStock: 80,
      lowStockThreshold: 25,
      status: "Active",
      image: "/images/hero-payday.jpg",
    },
    {
      id: "VND-PRD-104",
      name: "German Silver Oxidized Jhumkas Assorted Tray (50 Pairs)",
      category: "Jewellery",
      packSize: "Tray of 50 Pairs",
      unitsPerCarton: 50,
      factoryRate: 1850,
      suggestedMrp: 4999,
      margin: "63%",
      cartonsInStock: 8, // Low Stock example
      lowStockThreshold: 20,
      status: "Active",
      image: "/images/hero-mattress.jpg",
    },
    {
      id: "VND-PRD-105",
      name: "Institutional Grade Floor Cleaner Concentrate 50L Drum",
      category: "Daily Necessities",
      packSize: "50L Commercial Drum",
      unitsPerCarton: 1,
      factoryRate: 1450,
      suggestedMrp: 2999,
      margin: "51%",
      cartonsInStock: 0, // Out of stock example
      lowStockThreshold: 10,
      status: "Out of Stock",
      image: "/images/hero-fmcg.jpg",
    },
  ]);

  // Form for New Product
  const [newProductForm, setNewProductForm] = useState({
    name: "",
    category: "Daily Necessities",
    packSize: "",
    unitsPerCarton: 1,
    factoryRate: "",
    suggestedMrp: "",
    cartonsInStock: 50,
    description: "",
  });

  // Orders Received from Customers
  const [orders, setOrders] = useState([
    {
      id: "ORD-B2B-90214",
      buyer: "Shree Balaji Traders (Navi Mumbai)",
      date: "Today, 10:15 AM",
      lot: "Commercial Dishwash Liquid 20L Canister (10 Cartons)",
      amount: 6200,
      cartons: 10,
      status: "New", // 'New' | 'Accepted' | 'Processing' | 'Shipped' | 'Delivered' | 'Rejected'
      eWayBill: false,
    },
    {
      id: "ORD-B2B-90188",
      buyer: "Metro Enterprise & Wholesale (Ahmedabad)",
      date: "Today, 08:30 AM",
      lot: "Stainless Steel 304 Thermal Vacuum Flask Set (4 Cartons)",
      amount: 18400,
      cartons: 4,
      status: "Accepted",
      eWayBill: true,
    },
    {
      id: "ORD-B2B-89945",
      buyer: "Royal Mart Supermarket Depot (Pune)",
      date: "Yesterday",
      lot: "TWS True Wireless Earbuds ANC (2 Cartons)",
      amount: 14400,
      cartons: 2,
      status: "Shipped",
      eWayBill: true,
    },
    {
      id: "ORD-B2B-88102",
      buyer: "Krishna Electronics Megastore (Surat)",
      date: "28 Sep 2026",
      lot: "TWS True Wireless Earbuds ANC (5 Cartons)",
      amount: 36000,
      cartons: 5,
      status: "Delivered",
      eWayBill: true,
    },
  ]);

  // Payout Settlements
  const [payouts, setPayouts] = useState([
    {
      id: "PAY-UTR-9912048",
      date: "29 Sep 2026",
      amount: 75000,
      account: "HDFC Bank A/c **4092",
      status: "Credited via IMPS",
    },
    {
      id: "PAY-UTR-9840219",
      date: "22 Sep 2026",
      amount: 62500,
      account: "HDFC Bank A/c **4092",
      status: "Credited via IMPS",
    },
    {
      id: "PAY-UTR-9710328",
      date: "15 Sep 2026",
      amount: 98000,
      account: "HDFC Bank A/c **4092",
      status: "Credited via IMPS",
    },
  ]);

  // Handlers
  const handleAddNewProduct = (e) => {
    e.preventDefault();
    if (!newProductForm.name || !newProductForm.factoryRate) {
      showToast("Please enter product name and factory rate");
      return;
    }

    const rate = parseFloat(newProductForm.factoryRate);
    const mrp = parseFloat(newProductForm.suggestedMrp) || Math.round(rate * 1.7);
    const margin = Math.round(((mrp - rate) / mrp) * 100);

    const newPrd = {
      id: `VND-PRD-${Math.floor(100 + Math.random() * 900)}`,
      name: newProductForm.name,
      category: newProductForm.category,
      packSize: newProductForm.packSize || "Standard Master Carton",
      unitsPerCarton: parseInt(newProductForm.unitsPerCarton) || 1,
      factoryRate: rate,
      suggestedMrp: mrp,
      margin: `${margin}%`,
      cartonsInStock: parseInt(newProductForm.cartonsInStock) || 50,
      lowStockThreshold: 15,
      status: "Active",
      image: "/images/hero-payday.jpg",
    };

    setProducts([newPrd, ...products]);
    setIsAddProductModalOpen(false);
    setNewProductForm({
      name: "",
      category: "Daily Necessities",
      packSize: "",
      unitsPerCarton: 1,
      factoryRate: "",
      suggestedMrp: "",
      cartonsInStock: 50,
      description: "",
    });
    showToast(`Product "${newPrd.name}" published to Wholesale Mandi! 🏷️`);
  };

  const handleUpdateStock = (productId, delta) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const nextStock = Math.max(0, p.cartonsInStock + delta);
          return {
            ...p,
            cartonsInStock: nextStock,
            status: nextStock === 0 ? "Out of Stock" : "Active",
          };
        }
        return p;
      })
    );
    showToast("Stock quantity updated! 📦");
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    showToast("Product listing removed from Mandi.");
  };

  const handleAcceptOrder = (orderId) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: "Accepted" } : o))
    );
    showToast(`Order ${orderId} Accepted! Transport dock will be notified. ✅`);
  };

  const handleOpenRejectModal = (order) => {
    setSelectedOrderToReject(order);
    setIsRejectModalOpen(true);
  };

  const handleConfirmReject = (e) => {
    e.preventDefault();
    if (!selectedOrderToReject) return;
    setOrders((prev) =>
      prev.map((o) =>
        o.id === selectedOrderToReject.id
          ? { ...o, status: "Rejected", rejectionReason: rejectReason || "Out of Stock" }
          : o
      )
    );
    showToast(`Order ${selectedOrderToReject.id} rejected. Customer notified. ⚠️`);
    setIsRejectModalOpen(false);
    setSelectedOrderToReject(null);
    setRejectReason("");
  };

  const handleUpdateOrderStatus = (orderId, nextStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: nextStatus } : o))
    );
    showToast(`Order ${orderId} status updated to: ${nextStatus}! 🚚`);
  };

  const handleRequestPayout = (e) => {
    e.preventDefault();
    const amt = parseFloat(payoutAmount);
    if (!amt || amt <= 0 || amt > walletBalance) {
      showToast("Please enter an amount within your available balance");
      return;
    }

    const newPayout = {
      id: `PAY-UTR-${Math.floor(1000000 + Math.random() * 9000000)}`,
      date: "Just Now",
      amount: amt,
      account: "HDFC Bank A/c **4092",
      status: "Credited via IMPS",
    };

    setWalletBalance((prev) => prev - amt);
    setPayouts([newPayout, ...payouts]);
    setIsPayoutModalOpen(false);
    setPayoutAmount("");
    showToast(`IMPS payout of ₹${amt.toLocaleString("en-IN")} transferred instantly! 💳`);
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(productSearch.toLowerCase())
  );

  const filteredOrders = orders.filter((o) => {
    if (orderFilter !== "all" && o.status.toLowerCase() !== orderFilter.toLowerCase()) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin py-4 sm:py-6 w-full">
      {/* Top Breadcrumb & Dual Switch Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 font-medium">
          <button
            onClick={onNavigateHome}
            className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">storefront</span>
            Wholesale Store
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-amber-600">store</span>
            Vendor Portal • {user?.vendorDetails?.shopName || "Mandi Mills"}
          </span>
        </div>

        {/* Dual Account Switcher: Switch to Customer View */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onNavigateCustomer}
            className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-heading font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-sm transition-all cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[17px] text-blue-400">person</span>
            <span>Switch to Customer Dashboard</span>
          </button>
          <button
            onClick={onNavigateHome}
            className="border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-heading font-bold px-3.5 py-2 rounded-full transition-all cursor-pointer"
          >
            Storefront
          </button>
        </div>
      </div>

      {/* Main Grid: Sidebar + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Vendor Sidebar (Exact 12 sections matching user workflow) */}
        <aside className="lg:col-span-3 flex flex-col gap-2">
          {/* Shop Card */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-black text-base flex items-center justify-center shadow-xs shrink-0">
                <span className="material-symbols-outlined text-[24px]">factory</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading font-black text-sm text-neutral-950 truncate">
                  {user?.vendorDetails?.shopName || "Sharma Wholesale Mills"}
                </h3>
                <span className="text-[11px] text-neutral-500 font-mono block truncate">
                  GST: {user?.vendorDetails?.gstin || "24AAECS9910D1Z2"}
                </span>
                <span className="inline-block mt-1 bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  Mandi Verified Mill
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-2 shadow-xs space-y-1">
            {[
              { id: "overview", label: "Dashboard", icon: "space_dashboard" },
              { id: "shop", label: "My Shop & Profile", icon: "store" },
              { id: "products", label: "Products", icon: "inventory_2", badge: products.length },
              { id: "inventory", label: "Inventory / Stock", icon: "warehouse" },
              { id: "orders", label: "Orders Management", icon: "local_shipping", badge: orders.length },
              { id: "analytics", label: "Sales Analytics", icon: "monitoring" },
              { id: "market", label: "Market Insights", icon: "trending_up", highlight: true },
              {
                id: "earnings",
                label: "Earnings & Payouts",
                icon: "payments",
                sub: `₹${walletBalance.toLocaleString("en-IN")}`,
              },
              { id: "reviews", label: "Reviews & Ratings", icon: "star", sub: "4.9 ★" },
              { id: "notifications", label: "Notifications", icon: "notifications", badge: 3 },
              { id: "settings", label: "Shop Settings", icon: "settings" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-neutral-950 text-white shadow-xs"
                    : item.highlight
                    ? "bg-amber-500/10 text-amber-950 hover:bg-amber-500/20 border border-amber-300/40"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`material-symbols-outlined text-[19px] shrink-0 ${
                      activeTab === item.id
                        ? "text-white"
                        : item.highlight
                        ? "text-amber-700"
                        : "text-neutral-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {item.sub && (
                    <span
                      className={`text-[11px] font-mono font-extrabold ${
                        activeTab === item.id ? "text-amber-300" : "text-emerald-700"
                      }`}
                    >
                      {item.sub}
                    </span>
                  )}
                  {item.badge !== undefined && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                        activeTab === item.id
                          ? "bg-white/20 text-white"
                          : "bg-neutral-200 text-neutral-800"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              </button>
            ))}

            {/* Quick Button: Switch to Customer */}
            <div className="pt-2 border-t border-neutral-100">
              <button
                onClick={onNavigateCustomer}
                className="w-full text-left px-3 py-2.5 rounded-xl bg-blue-50/70 hover:bg-blue-100 text-primary text-xs font-heading font-bold flex items-center gap-2.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[19px]">swap_horiz</span>
                <span>Switch to Customer</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Master 4 KPI Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs">
                  <span className="text-xs font-bold text-neutral-500 block mb-1">Total Sales</span>
                  <h4 className="text-xl sm:text-2xl font-black text-neutral-950 font-heading">
                    ₹3,42,800
                  </h4>
                  <span className="text-[11px] text-emerald-600 font-bold">+28% this month</span>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs">
                  <span className="text-xs font-bold text-neutral-500 block mb-1">Available Payout</span>
                  <h4 className="text-xl sm:text-2xl font-black text-emerald-600 font-heading">
                    ₹{walletBalance.toLocaleString("en-IN")}
                  </h4>
                  <button
                    onClick={() => setIsPayoutModalOpen(true)}
                    className="text-[11px] text-primary font-bold hover:underline cursor-pointer"
                  >
                    Withdraw IMPS
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs">
                  <span className="text-xs font-bold text-neutral-500 block mb-1">Pending Orders</span>
                  <h4 className="text-xl sm:text-2xl font-black text-amber-600 font-heading">
                    {orders.filter((o) => o.status === "New" || o.status === "Accepted").length}
                  </h4>
                  <span className="text-[11px] text-neutral-500">Awaiting dispatch</span>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs">
                  <span className="text-xs font-bold text-neutral-500 block mb-1">Escrow Balance</span>
                  <h4 className="text-xl sm:text-2xl font-black text-primary font-heading">
                    ₹{escrowPending.toLocaleString("en-IN")}
                  </h4>
                  <span className="text-[11px] text-neutral-500">Unlocks on delivery</span>
                </div>
              </div>

              {/* Action Banner */}
              <div className="bg-gradient-to-r from-amber-950 via-neutral-950 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Quick Vendor Actions
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                    Expand Your Mandi Catalog
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 max-w-xl">
                    Publish new master cartons or clear surplus stock with 0% platform fee.
                  </p>
                </div>
                <div className="flex gap-2.5 shrink-0">
                  <button
                    onClick={() => setIsAddProductModalOpen(true)}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-heading font-black text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[19px]">add_circle</span>
                    <span>Add New Product</span>
                  </button>
                </div>
              </div>

              {/* Recent Orders Preview */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3">
                  <h4 className="font-heading font-black text-base text-neutral-950">
                    Latest Buyer Orders
                  </h4>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className="text-xs font-bold text-primary hover:underline cursor-pointer"
                  >
                    View All Orders ➔
                  </button>
                </div>
                <div className="divide-y divide-neutral-100 text-xs">
                  {orders.slice(0, 3).map((o) => (
                    <div key={o.id} className="py-3 flex items-center justify-between">
                      <div>
                        <strong className="text-neutral-900 font-bold block">{o.buyer}</strong>
                        <span className="text-neutral-600 text-[11px]">{o.lot}</span>
                        <span className="text-neutral-400 text-[10px] block font-mono">{o.id} • {o.date}</span>
                      </div>
                      <div className="text-right">
                        <strong className="font-mono text-sm text-neutral-950 block">
                          ₹{o.amount.toLocaleString("en-IN")}
                        </strong>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-neutral-100 text-neutral-800">
                          {o.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MY SHOP & PROFILE */}
          {activeTab === "shop" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-7 shadow-xs space-y-5">
              <h3 className="text-lg font-black font-heading text-neutral-950 pb-3 border-b border-neutral-100">
                Shop Information &amp; Mandi Settings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="text-neutral-500 block mb-1">Shop / Business Name</label>
                  <strong className="text-neutral-900 text-sm block">
                    {user?.vendorDetails?.shopName || "Sharma Wholesale & Mandi Mills"}
                  </strong>
                </div>
                <div>
                  <label className="text-neutral-500 block mb-1">Primary Business Category</label>
                  <strong className="text-neutral-900 text-sm block">
                    {user?.vendorDetails?.category || "Daily Necessities & FMCG"}
                  </strong>
                </div>
                <div>
                  <label className="text-neutral-500 block mb-1">Verified GSTIN</label>
                  <strong className="font-mono text-neutral-900 text-sm block">
                    {user?.vendorDetails?.gstin || "24AAECS9910D1Z2"}
                  </strong>
                </div>
                <div>
                  <label className="text-neutral-500 block mb-1">Settlement Bank</label>
                  <strong className="text-neutral-900 text-sm block">
                    {user?.vendorDetails?.bankName || "HDFC Bank"} (A/c **4092)
                  </strong>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-neutral-500 block mb-1">Factory Warehouse Address</label>
                  <strong className="text-neutral-900 text-sm block">
                    {user?.vendorDetails?.address || "Plot 42, GIDC Industrial Estate, Surat, Gujarat - 395023"}
                  </strong>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRODUCTS (Add Product, View, Edit, Delete, Status) */}
          {activeTab === "products" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Product Management ({products.length})
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Add, edit, update stock and manage product status
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-amber-500"
                  />
                  <button
                    onClick={() => setIsAddProductModalOpen(true)}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-xs px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-1 shrink-0"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                    <span>Add Product</span>
                  </button>
                </div>
              </div>

              {/* Products Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 text-neutral-600 font-bold uppercase text-[10px] tracking-wider border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-3">Product Name</th>
                      <th className="py-3 px-3">Category</th>
                      <th className="py-3 px-3">Factory Price</th>
                      <th className="py-3 px-3">Suggested MRP</th>
                      <th className="py-3 px-3">Cartons Stock</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-neutral-50 transition-colors">
                        <td className="py-3 px-3">
                          <strong className="text-neutral-900 block font-bold">{p.name}</strong>
                          <span className="text-[10px] font-mono text-neutral-400">{p.id} • {p.packSize}</span>
                        </td>
                        <td className="py-3 px-3 text-neutral-700">{p.category}</td>
                        <td className="py-3 px-3 font-mono font-bold text-neutral-950">₹{p.factoryRate}</td>
                        <td className="py-3 px-3 font-mono text-neutral-500">₹{p.suggestedMrp}</td>
                        <td className="py-3 px-3">
                          <span
                            className={`font-bold ${
                              p.cartonsInStock === 0
                                ? "text-red-600"
                                : p.cartonsInStock <= p.lowStockThreshold
                                ? "text-amber-600"
                                : "text-emerald-700"
                            }`}
                          >
                            {p.cartonsInStock} Cartons
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              p.status === "Active"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                          >
                            {p.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right space-x-1 whitespace-nowrap">
                          <button
                            onClick={() => handleUpdateStock(p.id, 10)}
                            className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-2 py-1 rounded text-[11px] font-bold cursor-pointer"
                            title="Add 10 Cartons"
                          >
                            +10
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(p.id)}
                            className="text-red-600 hover:bg-red-50 px-2 py-1 rounded text-[11px] font-bold cursor-pointer"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: INVENTORY / STOCK (Current, Update, Low Stock Alerts) */}
          {activeTab === "inventory" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs">
                  <span className="text-xs font-bold text-neutral-500 block mb-1">Total Stock</span>
                  <h4 className="text-2xl font-black text-neutral-950 font-heading">
                    {products.reduce((acc, p) => acc + p.cartonsInStock, 0)} Cartons
                  </h4>
                  <span className="text-[11px] text-neutral-500">Across {products.length} products</span>
                </div>

                <div className="bg-white rounded-2xl border border-amber-200 bg-amber-50/50 p-4 shadow-xs">
                  <span className="text-xs font-bold text-amber-800 block mb-1">Low Stock Alerts</span>
                  <h4 className="text-2xl font-black text-amber-700 font-heading">
                    {products.filter((p) => p.cartonsInStock > 0 && p.cartonsInStock <= p.lowStockThreshold).length} Lots
                  </h4>
                  <span className="text-[11px] text-amber-800">Replenishment recommended</span>
                </div>

                <div className="bg-white rounded-2xl border border-red-200 bg-red-50/50 p-4 shadow-xs">
                  <span className="text-xs font-bold text-red-800 block mb-1">Out of Stock</span>
                  <h4 className="text-2xl font-black text-red-700 font-heading">
                    {products.filter((p) => p.cartonsInStock === 0).length} Lots
                  </h4>
                  <span className="text-[11px] text-red-800">Hidden from storefront</span>
                </div>
              </div>

              {/* Stock Management Table */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs">
                <h4 className="font-heading font-black text-base text-neutral-950 mb-3">
                  Current Stock Levels &amp; Quick Adjustments
                </h4>
                <div className="divide-y divide-neutral-100 text-xs">
                  {products.map((p) => (
                    <div key={p.id} className="py-3 flex items-center justify-between">
                      <div>
                        <strong className="text-neutral-900 block font-bold">{p.name}</strong>
                        <span className="text-neutral-400 font-mono text-[10px]">{p.id} • Min Threshold: {p.lowStockThreshold} Cartons</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-black text-neutral-950">
                          {p.cartonsInStock} Cartons
                        </span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleUpdateStock(p.id, -5)}
                            className="w-7 h-7 rounded bg-neutral-100 hover:bg-neutral-200 font-bold text-neutral-700 flex items-center justify-center cursor-pointer"
                          >
                            -5
                          </button>
                          <button
                            onClick={() => handleUpdateStock(p.id, 10)}
                            className="w-7 h-7 rounded bg-amber-100 hover:bg-amber-200 font-bold text-amber-800 flex items-center justify-center cursor-pointer"
                          >
                            +10
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ORDERS & ORDER MANAGEMENT */}
          {activeTab === "orders" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Vendor Orders Management ({orders.length})
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Accept, reject, process, pack, and ship bulk customer purchases
                  </p>
                </div>

                <select
                  value={orderFilter}
                  onChange={(e) => setOrderFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-amber-500 bg-white"
                >
                  <option value="all">All Orders</option>
                  <option value="new">New Orders</option>
                  <option value="accepted">Accepted Orders</option>
                  <option value="shipped">Shipped Orders</option>
                  <option value="delivered">Delivered Orders</option>
                </select>
              </div>

              {/* Orders List */}
              <div className="space-y-3">
                {filteredOrders.map((o) => (
                  <div
                    key={o.id}
                    className="border border-neutral-200 rounded-2xl p-4 hover:shadow-xs transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="font-mono text-sm text-neutral-950 font-black">{o.id}</strong>
                        <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-2 py-0.5 rounded-full">
                          {o.status}
                        </span>
                      </div>
                      <p className="text-neutral-800 font-medium mt-1">{o.lot}</p>
                      <span className="text-neutral-500 text-[11px] block mt-0.5">
                        Buyer: <strong>{o.buyer}</strong> • {o.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <span className="font-mono font-black text-base text-neutral-950 block">
                          ₹{o.amount.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[10px] text-neutral-400 block font-bold">{o.cartons} Cartons</span>
                      </div>

                      {/* Order Action Buttons */}
                      <div className="flex gap-1.5">
                        {o.status === "New" && (
                          <>
                            <button
                              onClick={() => handleAcceptOrder(o.id)}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs cursor-pointer shadow-xs"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleOpenRejectModal(o)}
                              className="border border-red-300 text-red-600 hover:bg-red-50 font-bold px-3 py-1.5 rounded-lg text-xs cursor-pointer"
                            >
                              Reject
                            </button>
                          </>
                        )}

                        {o.status === "Accepted" && (
                          <button
                            onClick={() => handleUpdateOrderStatus(o.id, "Shipped")}
                            className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs cursor-pointer shadow-xs"
                          >
                            Mark Shipped
                          </button>
                        )}

                        {o.status === "Shipped" && (
                          <button
                            onClick={() => handleUpdateOrderStatus(o.id, "Delivered")}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs cursor-pointer"
                          >
                            Mark Delivered
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: SALES ANALYTICS */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-xs space-y-4">
                <h3 className="text-lg font-black font-heading text-neutral-950">
                  Sales Analytics &amp; Revenue Overview
                </h3>

                {/* CSS Bar Chart Simulation */}
                <div className="pt-4">
                  <div className="flex items-end justify-between gap-2 h-44 border-b border-neutral-200 pb-2">
                    {[
                      { month: "May", rev: 180000, height: "45%" },
                      { month: "Jun", rev: 220000, height: "55%" },
                      { month: "Jul", rev: 290000, height: "72%" },
                      { month: "Aug", rev: 260000, height: "65%" },
                      { month: "Sep", rev: 342800, height: "88%" },
                      { month: "Oct (Proj)", rev: 390000, height: "98%" },
                    ].map((bar) => (
                      <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5">
                        <span className="text-[10px] font-mono text-neutral-500">₹{(bar.rev / 1000).toFixed(0)}k</span>
                        <div
                          className="w-full bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-lg transition-all"
                          style={{ height: bar.height }}
                        />
                        <span className="text-xs font-bold text-neutral-700">{bar.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  <div className="p-3 bg-neutral-50 rounded-xl">
                    <span className="text-neutral-500 text-xs block">Best-Selling Category</span>
                    <strong className="text-neutral-900 text-sm font-heading font-black">Daily Necessities (44%)</strong>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-xl">
                    <span className="text-neutral-500 text-xs block">Average Order Value (AOV)</span>
                    <strong className="text-neutral-900 text-sm font-heading font-black">₹18,650 / Order</strong>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-xl">
                    <span className="text-neutral-500 text-xs block">Repeat Buyer Rate</span>
                    <strong className="text-neutral-900 text-sm font-heading font-black">68.4%</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: MARKET INSIGHTS / MARKET REQUIREMENT (Matching user specification exactly) */}
          {activeTab === "market" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-300 rounded-2xl p-5">
                <span className="text-xs font-black uppercase text-amber-900 tracking-wider">
                  Mandi Demand Intelligence
                </span>
                <h3 className="text-xl font-black font-heading text-neutral-950 mt-1">
                  Market Requirement &amp; Buyer Interest Trends
                </h3>
                <p className="text-xs text-neutral-700 mt-1">
                  Real-time analytics collected from 45,000+ retail buyers across Maharashtra, Gujarat &amp; Karnataka.
                </p>
              </div>

              {/* Category Demand Cards (as outlined in user prompt example) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Category 1: Electronics */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                    <h4 className="font-heading font-black text-sm text-neutral-950 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[19px] text-amber-600">devices</span>
                      Category: Electronics &amp; Audio
                    </h4>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      High Growth
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-emerald-700 font-bold block flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">arrow_upward</span>
                        High Demand:
                      </span>
                      <ul className="list-disc list-inside text-neutral-700 pl-1 text-[11px]">
                        <li>Wireless ANC Earphones (boAt &amp; OnePlus lots)</li>
                        <li>Smart Watches (AMOLED Display)</li>
                      </ul>
                    </div>

                    <div>
                      <span className="text-blue-700 font-bold block flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">trending_up</span>
                        Growing Demand:
                      </span>
                      <ul className="list-disc list-inside text-neutral-700 pl-1 text-[11px]">
                        <li>Bluetooth Party Speakers</li>
                        <li>65W GaN Fast Chargers</li>
                      </ul>
                    </div>

                    <div>
                      <span className="text-neutral-500 font-bold block flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">arrow_downward</span>
                        Low Demand:
                      </span>
                      <ul className="list-disc list-inside text-neutral-500 pl-1 text-[11px]">
                        <li>Wired 3.5mm Earphone Accessories</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-950 font-bold">
                    💡 Recommendation: Increase stock for TWS Wireless Earphones ahead of festive season orders.
                  </div>
                </div>

                {/* Category 2: Daily Necessities & FMCG */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                    <h4 className="font-heading font-black text-sm text-neutral-950 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[19px] text-emerald-600">cleaning_services</span>
                      Category: Daily FMCG &amp; Cleaning
                    </h4>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Consistent Bulk
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-emerald-700 font-bold block flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">arrow_upward</span>
                        High Demand:
                      </span>
                      <ul className="list-disc list-inside text-neutral-700 pl-1 text-[11px]">
                        <li>Commercial Dishwash 20L Canisters</li>
                        <li>Detergent Powder 25kg Industrial Sacks</li>
                      </ul>
                    </div>

                    <div>
                      <span className="text-blue-700 font-bold block flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">trending_up</span>
                        Growing Demand:
                      </span>
                      <ul className="list-disc list-inside text-neutral-700 pl-1 text-[11px]">
                        <li>5L Floor Disinfectant Concentrate</li>
                      </ul>
                    </div>

                    <div>
                      <span className="text-neutral-500 font-bold block flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">arrow_downward</span>
                        Low Demand:
                      </span>
                      <ul className="list-disc list-inside text-neutral-500 pl-1 text-[11px]">
                        <li>Single 100g Soap Bars</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-[11px] text-emerald-950 font-bold">
                    💡 Recommendation: Maintain 100+ master canisters buffer to satisfy commercial hotel &amp; depot orders.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: EARNINGS & PAYOUTS */}
          {activeTab === "earnings" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-950 via-neutral-950 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-emerald-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Available Mandi Balance
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mt-1">
                    ₹{walletBalance.toLocaleString("en-IN")}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    Instant 24x7 IMPS transfer to HDFC Bank A/c **4092 with 0% platform deduction
                  </p>
                </div>

                <button
                  onClick={() => setIsPayoutModalOpen(true)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5 shrink-0"
                >
                  <span className="material-symbols-outlined text-[19px]">account_balance</span>
                  <span>Withdraw via IMPS</span>
                </button>
              </div>

              {/* Payout History */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs">
                <h4 className="font-heading font-black text-base text-neutral-950 mb-3">
                  Settlement &amp; Withdrawal History
                </h4>
                <div className="divide-y divide-neutral-100 text-xs">
                  {payouts.map((p) => (
                    <div key={p.id} className="py-3 flex items-center justify-between">
                      <div>
                        <strong className="text-neutral-900 font-bold block">{p.account}</strong>
                        <span className="text-[10px] text-neutral-400 font-mono">{p.id} • {p.date}</span>
                      </div>
                      <div className="text-right">
                        <strong className="font-mono text-sm font-black text-emerald-600 block">
                          ₹{p.amount.toLocaleString("en-IN")}
                        </strong>
                        <span className="text-[10px] text-neutral-500 font-bold">{p.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: REVIEWS & RATINGS */}
          {activeTab === "reviews" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Buyer Reviews &amp; Mill Rating
                  </h3>
                  <p className="text-xs text-neutral-500">Based on 140+ verified B2B orders</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-amber-500 font-heading">4.9 ★</span>
                  <span className="text-[10px] text-neutral-400 block font-bold">99.2% Positive</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  { buyer: "Shree Balaji Traders", rating: 5, date: "Yesterday", comment: "Outstanding carton packaging. The 20L dishwash canisters arrived without any leakage via Delhivery." },
                  { buyer: "Krishna Electronics", rating: 5, date: "3 days ago", comment: "boAt TWS Earbuds cartons were factory sealed. Great wholesale margin for retail selling." },
                  { buyer: "Royal Mart Supermarket", rating: 4, date: "1 week ago", comment: "Prompt dispatch within 4 hours. Dock unloading was quick with the OTP." },
                ].map((r, i) => (
                  <div key={i} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="flex items-center justify-between mb-1">
                      <strong className="text-neutral-900 font-bold">{r.buyer}</strong>
                      <span className="text-amber-500 font-bold">{"★".repeat(r.rating)}</span>
                    </div>
                    <p className="text-neutral-600">{r.comment}</p>
                    <span className="text-[10px] text-neutral-400 mt-1 block">{r.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-xs space-y-3">
              <h3 className="text-lg font-black font-heading text-neutral-950 mb-3">
                Vendor Order &amp; Stock Alerts
              </h3>
              <div className="divide-y divide-neutral-100 text-xs">
                <div className="py-3 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[19px] text-amber-600">notifications_active</span>
                  <div>
                    <strong className="text-neutral-900 block">New Wholesale Order #ORD-B2B-90214 Received</strong>
                    <p className="text-neutral-600 mt-0.5">Shree Balaji Traders ordered 10 Cartons of Dishwash Liquid.</p>
                    <span className="text-[10px] text-neutral-400 font-mono mt-1 block">Today, 10:15 AM</span>
                  </div>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[19px] text-red-600">warning</span>
                  <div>
                    <strong className="text-neutral-900 block">Low Stock Alert: German Silver Jhumkas</strong>
                    <p className="text-neutral-600 mt-0.5">Only 8 cartons remaining in stock (below threshold of 20).</p>
                    <span className="text-[10px] text-neutral-400 font-mono mt-1 block">Yesterday</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 11: SHOP SETTINGS */}
          {activeTab === "settings" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-black font-heading text-neutral-950 pb-3 border-b border-neutral-100">
                Vendor Operations &amp; Logistics Settings
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                  <div>
                    <strong className="text-neutral-900 block font-bold">Auto-Accept Orders from Verified GSTIN Buyers</strong>
                    <span className="text-neutral-500 text-[11px]">Orders below 20 Cartons are confirmed automatically</span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-amber-600 cursor-pointer" />
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                  <div>
                    <strong className="text-neutral-900 block font-bold">Automated NIC e-Way Bill Integration</strong>
                    <span className="text-neutral-500 text-[11px]">Generate eWB automatically on freight truck dispatch</span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-amber-600 cursor-pointer" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL: ADD NEW PRODUCT */}
      {isAddProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
              <h4 className="font-heading font-black text-base text-neutral-950">
                Add Wholesale Product Lot
              </h4>
              <button
                onClick={() => setIsAddProductModalOpen(false)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <form onSubmit={handleAddNewProduct} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Product / Lot Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Copper Bottom Cookware 10-Piece Carton"
                  value={newProductForm.name}
                  onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Category *</label>
                  <select
                    value={newProductForm.category}
                    onChange={(e) => setNewProductForm({ ...newProductForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-amber-500 bg-white"
                  >
                    <option>Daily Necessities</option>
                    <option>Electronics</option>
                    <option>Kitchenware</option>
                    <option>Jewellery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Master Carton Size</label>
                  <input
                    type="text"
                    placeholder="e.g. Carton of 24 Pcs"
                    value={newProductForm.packSize}
                    onChange={(e) => setNewProductForm({ ...newProductForm, packSize: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Factory Wholesale Rate (₹) *</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 2400"
                    value={newProductForm.factoryRate}
                    onChange={(e) => setNewProductForm({ ...newProductForm, factoryRate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Suggested Retail MRP (₹)</label>
                  <input
                    type="number"
                    placeholder="e.g. 5999"
                    value={newProductForm.suggestedMrp}
                    onChange={(e) => setNewProductForm({ ...newProductForm, suggestedMrp: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Available Cartons in Stock *</label>
                <input
                  type="number"
                  required
                  value={newProductForm.cartonsInStock}
                  onChange={(e) => setNewProductForm({ ...newProductForm, cartonsInStock: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-xs sm:text-sm py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Publish Product to Wholesale Mandi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: REJECT ORDER WITH REASON */}
      {isRejectModalOpen && selectedOrderToReject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95">
            <h4 className="font-heading font-black text-base text-neutral-950 mb-2">
              Reject Order {selectedOrderToReject.id}
            </h4>
            <p className="text-xs text-neutral-500 mb-4">
              Please specify the reason so the customer is notified and escrow refunded.
            </p>

            <form onSubmit={handleConfirmReject} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Rejection Reason</label>
                <select
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-red-500"
                >
                  <option value="Temporary Out of Stock">Temporary Out of Stock</option>
                  <option value="Manufacturing Capacity Exceeded">Manufacturing Capacity Exceeded</option>
                  <option value="Packaging Delay at Factory">Packaging Delay at Factory</option>
                  <option value="Other Logistics Constraint">Other Logistics Constraint</option>
                </select>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsRejectModalOpen(false)}
                  className="flex-1 py-2 rounded-xl border border-neutral-200 text-xs font-bold text-neutral-700 hover:bg-neutral-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs py-2 rounded-xl cursor-pointer"
                >
                  Confirm Reject
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: WITHDRAW PAYOUT */}
      {isPayoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
              <h4 className="font-heading font-black text-base text-neutral-950">
                Instant Mandi Payout (IMPS)
              </h4>
              <button
                onClick={() => setIsPayoutModalOpen(false)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <form onSubmit={handleRequestPayout} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Withdrawal Amount (Max: ₹{walletBalance.toLocaleString("en-IN")})
                </label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 50000"
                  value={payoutAmount}
                  onChange={(e) => setPayoutAmount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 font-mono text-sm text-neutral-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-xs text-neutral-600">
                Destination: <strong>HDFC Bank A/c **4092</strong>
                <span className="text-[10px] text-emerald-700 block font-bold mt-0.5">
                  0% TCS / Zero Fee Instant Settlement
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs sm:text-sm py-3 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Transfer via 24x7 IMPS
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
