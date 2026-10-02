import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { WHOLESALE_PRODUCTS } from "../data/wholesaleData";

export default function CustomerDashboard({
  onNavigateHome,
  onNavigateVendor,
  onOpenBecomeVendor,
  onOpenCart,
  onQuickView,
}) {
  const { showToast, addToCart, wishlist } = useCart();
  const { user, addWalletMoney, updateProfile } = useAuth();

  // Active Tab: 'overview' | 'profile' | 'orders' | 'tracking' | 'wallet' | 'wishlist' | 'notifications' | 'become-vendor'
  const [activeTab, setActiveTab] = useState("overview");

  // Order Search & Filter
  const [orderFilter, setOrderFilter] = useState("all");
  const [searchOrderQuery, setSearchOrderQuery] = useState("");
  const [selectedTrackingOrder, setSelectedTrackingOrder] = useState("SW-89421");

  // Modals & Forms
  const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false);
  const [addAmount, setAddAmount] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);

  // Profile Edit State
  const [profileForm, setProfileForm] = useState({
    name: user?.name || "Avishkar Sharma",
    email: user?.email || "avishkar@swiftmart.in",
    phone: user?.phone || "+91 98765 43210",
    company: user?.company || "Balaji Wholesale Traders",
    gstin: user?.gstin || "27AABCU9603R1ZM",
    address: user?.addresses?.[0]?.street || "APMC Market, Shed #14, Sector 19, Vashi, Navi Mumbai, MH - 400703",
  });
  const [passwordForm, setPasswordForm] = useState({ current: "", newPass: "", confirm: "" });

  // Sample Customer Wholesale Orders
  const [orders, setOrders] = useState([
    {
      id: "SW-89421",
      date: "Today, 09:30 AM",
      itemsSummary: "Surf Excel 25kg (5 Sacks) + Lizol 20L (3 Crates)",
      cartonCount: 8,
      unitsTotal: 8,
      grandTotal: 24850,
      gstin: "27AABCU9603R1ZM",
      gstCredit: 3790,
      status: "In Transit",
      statusStep: 4, // 1: Placed, 2: Confirmed, 3: Processing, 4: Shipped/In Transit, 5: Out for Delivery, 6: Delivered
      statusColor: "text-amber-700 bg-amber-50 border-amber-200",
      transportPartner: "Delhivery Heavy Cargo",
      trackingNumber: "DEL-FRT-9921448",
      eta: "Today by 4:30 PM",
      vehicleNo: "MH-04-AZ-8821 (14-Wheel Container)",
      driverName: "Vikram Singh",
      driverPhone: "+91 98230 11234",
      unloadingOtp: "4819",
      deliveryAddress: "APMC Market, Shed #14, Sector 19, Vashi, Navi Mumbai, MH - 400703",
    },
    {
      id: "SW-88104",
      date: "28 Sep 2026",
      itemsSummary: "boAt ANC Earbuds 20-Pack Master Box + 65W GaN Chargers (2 Cartons)",
      cartonCount: 3,
      unitsTotal: 60,
      grandTotal: 38400,
      gstin: "27AABCU9603R1ZM",
      gstCredit: 5857,
      status: "Delivered",
      statusStep: 6,
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      transportPartner: "VRL Logistics",
      trackingNumber: "VRL-B2B-331092",
      eta: "Delivered on 30 Sep 2026",
      vehicleNo: "MH-43-BB-1092",
      driverName: "Sanjay Patil",
      driverPhone: "+91 98112 44321",
      deliveryAddress: "APMC Market, Shed #14, Sector 19, Vashi, Navi Mumbai, MH - 400703",
    },
    {
      id: "SW-85920",
      date: "21 Sep 2026",
      itemsSummary: "German Silver Jhumkas (50 Pairs Assorted) + Oxidized Sets (4 Cartons)",
      cartonCount: 5,
      unitsTotal: 150,
      grandTotal: 14200,
      gstin: "27AABCU9603R1ZM",
      gstCredit: 2166,
      status: "Delivered",
      statusStep: 6,
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      transportPartner: "TCI Freight Express",
      trackingNumber: "TCI-7731290",
      eta: "Delivered on 23 Sep 2026",
      deliveryAddress: "APMC Market, Shed #14, Sector 19, Vashi, Navi Mumbai, MH - 400703",
    },
    {
      id: "SW-82410",
      date: "14 Sep 2026",
      itemsSummary: "Stainless Steel Vacuum Flask 24-Piece Carton + Copper Grinders (10 Pcs)",
      cartonCount: 2,
      unitsTotal: 34,
      grandTotal: 19600,
      gstin: "27AABCU9603R1ZM",
      gstCredit: 2990,
      status: "Delivered",
      statusStep: 6,
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      transportPartner: "Delhivery Heavy Cargo",
      trackingNumber: "DEL-FRT-664019",
      eta: "Delivered on 16 Sep 2026",
      deliveryAddress: "APMC Market, Shed #14, Sector 19, Vashi, Navi Mumbai, MH - 400703",
    },
  ]);

  const activeTracking = orders.find((o) => o.id === selectedTrackingOrder) || orders[0];

  const filteredOrders = orders.filter((order) => {
    if (orderFilter !== "all" && order.status.toLowerCase() !== orderFilter.toLowerCase()) {
      return false;
    }
    if (searchOrderQuery) {
      const q = searchOrderQuery.toLowerCase();
      return (
        order.id.toLowerCase().includes(q) ||
        order.itemsSummary.toLowerCase().includes(q) ||
        order.trackingNumber.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile({
      name: profileForm.name,
      email: profileForm.email,
      phone: profileForm.phone,
      company: profileForm.company,
      gstin: profileForm.gstin,
    });
    showToast("Profile information updated successfully! 👤");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!passwordForm.newPass || passwordForm.newPass !== passwordForm.confirm) {
      showToast("New passwords do not match!");
      return;
    }
    showToast("Password updated securely! 🔒");
    setPasswordForm({ current: "", newPass: "", confirm: "" });
  };

  const handleAddMoneySubmit = (e) => {
    e.preventDefault();
    const val = Number(addAmount);
    if (!val || val <= 0) {
      showToast("Please enter a valid amount");
      return;
    }
    addWalletMoney(val);
    showToast(`₹${val.toLocaleString("en-IN")} credited to your Mandi Wallet! 💳`);
    setIsAddMoneyOpen(false);
    setAddAmount("");
  };

  const handleReorder = (order) => {
    showToast(`Added items from ${order.id} to wholesale cart! 🛒`);
  };

  const handleDownloadInvoice = (orderId) => {
    showToast(`Downloading Tax Invoice for ${orderId} (PDF with GST ITC breakdown)... 📄`);
  };

  // Saved Wishlist Products
  const savedProducts = WHOLESALE_PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-[1480px] mx-auto px-3 sm:px-4 md:px-margin py-4 sm:py-6 w-full">
      {/* Top Breadcrumb & Dual Account Bar */}
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
            <span className="material-symbols-outlined text-[16px] text-blue-600">person</span>
            Customer Account Dashboard
          </span>
        </div>

        {/* Switcher & Vendor Status Banner */}
        <div className="flex items-center gap-2.5">
          {user?.isVendor ? (
            <button
              onClick={onNavigateVendor}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs sm:text-sm font-heading font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-sm transition-all cursor-pointer group"
            >
              <span className="material-symbols-outlined text-[18px]">store</span>
              <span>Switch to Vendor Dashboard</span>
              <span className="bg-white/20 text-white text-[9px] px-1.5 py-0.2 rounded font-mono">
                Active
              </span>
            </button>
          ) : (
            <button
              onClick={onOpenBecomeVendor}
              className="bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs sm:text-sm font-heading font-black px-4 py-2 rounded-full flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px] text-amber-700">handshake</span>
              <span>Become a Vendor (0% Fee)</span>
            </button>
          )}

          <button
            onClick={onNavigateHome}
            className="border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-heading font-bold px-3.5 py-2 rounded-full transition-all cursor-pointer"
          >
            Continue Sourcing
          </button>
        </div>
      </div>

      {/* Main Dual Layout: Sidebar + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Customer Sidebar (Exact 10 sections requested in workflow) */}
        <aside className="lg:col-span-3 flex flex-col gap-2">
          {/* User Mini Card */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white font-black text-base flex items-center justify-center shadow-xs shrink-0">
                {user?.name?.slice(0, 2).toUpperCase() || "AS"}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading font-black text-sm text-neutral-950 truncate">
                  {user?.name || "Avishkar Sharma"}
                </h3>
                <span className="text-[11px] text-neutral-500 font-mono block truncate">
                  {user?.phone || "+91 98765 43210"}
                </span>
                <span className="inline-block mt-1 bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  Customer Account
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar Nav Buttons */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-2 shadow-xs space-y-1">
            {[
              { id: "overview", label: "Dashboard Overview", icon: "space_dashboard" },
              { id: "profile", label: "My Profile", icon: "person" },
              { id: "orders", label: "Purchase History", icon: "receipt_long", badge: orders.length },
              { id: "tracking", label: "Track Orders", icon: "local_shipping", alert: true },
              {
                id: "wallet",
                label: "My Wallet",
                icon: "account_balance_wallet",
                sub: `₹${(user?.walletBalance || 0).toLocaleString("en-IN")}`,
              },
              { id: "wishlist", label: "Wishlist", icon: "favorite", badge: wishlist.length },
              { id: "notifications", label: "Notifications", icon: "notifications", badge: user?.notifications?.length },
              {
                id: "become-vendor",
                label: user?.isVendor ? "Vendor Account (Active)" : "Become a Vendor",
                icon: "store",
                highlight: true,
              },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === "become-vendor" && !user?.isVendor && onOpenBecomeVendor) {
                    onOpenBecomeVendor();
                  } else {
                    setActiveTab(item.id);
                  }
                }}
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
                  {item.alert && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-6">
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Top 4 KPI Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-neutral-500">Total Orders</span>
                    <span className="material-symbols-outlined text-primary text-[19px]">
                      shopping_bag
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-neutral-950 font-heading">
                    {orders.length}
                  </h4>
                  <span className="text-[11px] text-emerald-600 font-bold">+1 Arriving Today</span>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-neutral-500">Mandi Wallet</span>
                    <span className="material-symbols-outlined text-emerald-600 text-[19px]">
                      account_balance_wallet
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-emerald-600 font-heading">
                    ₹{(user?.walletBalance || 0).toLocaleString("en-IN")}
                  </h4>
                  <button
                    onClick={() => setIsAddMoneyOpen(true)}
                    className="text-[11px] text-primary font-bold hover:underline cursor-pointer"
                  >
                    + Add Money
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-neutral-500">Saved Lots</span>
                    <span className="material-symbols-outlined text-rose-600 text-[19px]">
                      favorite
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-neutral-950 font-heading">
                    {wishlist.length}
                  </h4>
                  <button
                    onClick={() => setActiveTab("wishlist")}
                    className="text-[11px] text-rose-600 font-bold hover:underline cursor-pointer"
                  >
                    View Saved
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-neutral-500">GST Input Tax Credit</span>
                    <span className="material-symbols-outlined text-purple-600 text-[19px]">
                      receipt
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-purple-600 font-heading">
                    ₹14,803
                  </h4>
                  <span className="text-[11px] text-neutral-500">100% Verified GSTR-2B</span>
                </div>
              </div>

              {/* Active In-Transit Shipment Highlight Card */}
              <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-neutral-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-blue-900/40 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                      <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                        Active Bulk Cargo In Transit
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                      Order #{orders[0].id}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                      {orders[0].itemsSummary} • Vehicle: {orders[0].vehicleNo}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 text-center">
                      <span className="text-[10px] text-neutral-300 block uppercase font-bold">
                        Unloading OTP
                      </span>
                      <strong className="font-mono text-xl text-amber-300 tracking-widest">
                        {orders[0].unloadingOtp}
                      </strong>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedTrackingOrder(orders[0].id);
                        setActiveTab("tracking");
                      }}
                      className="bg-primary hover:bg-blue-600 text-white font-heading font-black text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Track Shipment
                    </button>
                  </div>
                </div>
              </div>

              {/* Dual Account Status & Promotion */}
              <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-300/70 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[26px]">store</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-sm sm:text-base text-neutral-950">
                      {user?.isVendor
                        ? "Your Vendor Portal is Active!"
                        : "Turn Your Retail Shop into a Mandi Vendor"}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-0.5 max-w-xl">
                      {user?.isVendor
                        ? `You are verified to list wholesale lots and receive IMPS payouts under "${user.vendorDetails?.shopName}".`
                        : "List factory lots, clear overstock, and supply directly to 45,000+ verified retailers at 0% platform commission."}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  {user?.isVendor ? (
                    <button
                      onClick={onNavigateVendor}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                    >
                      <span>Open Vendor Dashboard</span>
                      <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                    </button>
                  ) : (
                    <button
                      onClick={onOpenBecomeVendor}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                    >
                      <span>Apply in 2 Mins</span>
                      <span className="material-symbols-outlined text-[17px]">handshake</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MY PROFILE */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-7 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
                  <div>
                    <h3 className="text-lg font-black font-heading text-neutral-950">
                      Personal &amp; Business Information
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Manage your contact and delivery depot identity
                    </p>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                    GSTIN Verified
                  </span>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        value={profileForm.company}
                        onChange={(e) => setProfileForm({ ...profileForm, company: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Primary Delivery Address
                    </label>
                    <input
                      type="text"
                      value={profileForm.address}
                      onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-blue-600 text-white font-heading font-black text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs"
                    >
                      Save Profile Changes
                    </button>
                  </div>
                </form>
              </div>

              {/* Password & Security Card */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-7 shadow-xs">
                <h3 className="text-lg font-black font-heading text-neutral-950 mb-1">
                  Change Password &amp; Security
                </h3>
                <p className="text-xs text-neutral-500 mb-5">
                  Update your authentication credentials
                </p>

                <form onSubmit={handleChangePassword} className="space-y-3.5 max-w-lg">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={passwordForm.current}
                      onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={passwordForm.newPass}
                        onChange={(e) => setPasswordForm({ ...passwordForm, newPass: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        value={passwordForm.confirm}
                        onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-neutral-900 hover:bg-neutral-800 text-white font-heading font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* TAB 3: PURCHASE HISTORY / MY ORDERS */}
          {activeTab === "orders" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Wholesale Purchase History ({orders.length})
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Track previous bulk orders, download official tax invoices, and reorder
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search orders..."
                      value={searchOrderQuery}
                      onChange={(e) => setSearchOrderQuery(e.target.value)}
                      className="pl-8 pr-3 py-1.5 rounded-xl border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-primary"
                    />
                    <span className="material-symbols-outlined text-[16px] text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2">
                      search
                    </span>
                  </div>

                  <select
                    value={orderFilter}
                    onChange={(e) => setOrderFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-primary bg-white"
                  >
                    <option value="all">All Statuses</option>
                    <option value="in transit">In Transit</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </div>
              </div>

              {/* Orders Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 text-neutral-600 font-bold uppercase text-[10px] tracking-wider border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-3">Order Details</th>
                      <th className="py-3 px-3">Cartons</th>
                      <th className="py-3 px-3">Total Amount</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3">Logistics</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {filteredOrders.map((o) => (
                      <tr key={o.id} className="hover:bg-neutral-50/80 transition-colors">
                        <td className="py-3 px-3">
                          <strong className="font-mono text-neutral-900 block">{o.id}</strong>
                          <span className="text-[11px] text-neutral-700 block font-medium max-w-xs truncate">
                            {o.itemsSummary}
                          </span>
                          <span className="text-[10px] text-neutral-400">{o.date}</span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="font-bold text-neutral-900">{o.cartonCount} Cartons</span>
                          <span className="text-[10px] text-neutral-400 block">{o.unitsTotal} units</span>
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-neutral-950">
                          ₹{o.grandTotal.toLocaleString("en-IN")}
                          <span className="text-[10px] text-purple-700 block font-sans">
                            ITC: ₹{o.gstCredit}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${o.statusColor}`}>
                            {o.status}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="font-bold text-neutral-800 block truncate max-w-[130px]">
                            {o.transportPartner}
                          </span>
                          <span className="font-mono text-[10px] text-neutral-400">
                            {o.trackingNumber}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
                          <button
                            onClick={() => {
                              setSelectedTrackingOrder(o.id);
                              setActiveTab("tracking");
                            }}
                            className="bg-blue-50 hover:bg-blue-100 text-primary font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                          >
                            Track
                          </button>
                          <button
                            onClick={() => handleDownloadInvoice(o.id)}
                            className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                          >
                            Invoice
                          </button>
                          <button
                            onClick={() => handleReorder(o)}
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                          >
                            Reorder
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: TRACK ORDERS (Visual 6-stage Stepper matching user spec) */}
          {activeTab === "tracking" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-7 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-100 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      Live Freight Tracking
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <h3 className="text-xl font-black font-heading text-neutral-950 mt-0.5">
                    Order #{activeTracking.id}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    AWB: <strong className="font-mono">{activeTracking.trackingNumber}</strong> • Partner: {activeTracking.transportPartner}
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-center sm:text-right shrink-0">
                  <span className="text-[10px] text-amber-800 uppercase font-black block">
                    Unloading Verification OTP
                  </span>
                  <span className="font-mono text-2xl font-black text-amber-950 tracking-widest">
                    {activeTracking.unloadingOtp || "9182"}
                  </span>
                  <span className="text-[10px] text-amber-800/80 block">Give to truck driver at dock</span>
                </div>
              </div>

              {/* 6-Stage Progress Stepper: Placed -> Confirmed -> Processing -> Shipped -> Out for Delivery -> Delivered */}
              <div>
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
                  Logistics Milestones
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                  {[
                    { step: 1, name: "Order Placed", desc: "Paid in Escrow" },
                    { step: 2, name: "Confirmed", desc: "Factory Accepted" },
                    { step: 3, name: "Processing", desc: "Master Carton Packed" },
                    { step: 4, name: "Shipped", desc: "Dock Dispatched" },
                    { step: 5, name: "Out for Delivery", desc: "Final Mile Truck" },
                    { step: 6, name: "Delivered", desc: "Unloaded & Signed" },
                  ].map((s) => {
                    const isDone = (activeTracking.statusStep || 4) >= s.step;
                    const isCurrent = (activeTracking.statusStep || 4) === s.step;
                    return (
                      <div
                        key={s.step}
                        className={`rounded-xl p-3 border text-center transition-all ${
                          isCurrent
                            ? "bg-amber-50 border-amber-300 shadow-xs"
                            : isDone
                            ? "bg-emerald-50/70 border-emerald-200"
                            : "bg-neutral-50 border-neutral-200 opacity-60"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center mx-auto mb-1.5 text-xs font-bold ${
                            isDone ? "bg-emerald-600 text-white" : "bg-neutral-200 text-neutral-700"
                          }`}
                        >
                          {isDone ? <span className="material-symbols-outlined text-[15px]">check</span> : s.step}
                        </div>
                        <strong className="text-xs text-neutral-900 block leading-tight">{s.name}</strong>
                        <span className="text-[10px] text-neutral-500 block mt-0.5">{s.desc}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Truck & Driver Info */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-neutral-500 block">Assigned Transport:</span>
                  <strong className="text-neutral-900 font-bold">{activeTracking.transportPartner}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Vehicle Registration:</span>
                  <strong className="font-mono text-neutral-900">{activeTracking.vehicleNo}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Driver Contact:</span>
                  <strong className="text-neutral-900 font-bold">
                    {activeTracking.driverName} ({activeTracking.driverPhone})
                  </strong>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: MY WALLET */}
          {activeTab === "wallet" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-950 via-neutral-950 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-emerald-900/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      SwiftMart Mandi B2B Wallet
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mt-1">
                      ₹{(user?.walletBalance || 0).toLocaleString("en-IN")}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-1">
                      Instant 1-click checkout for high-speed bulk order procurement
                    </p>
                  </div>

                  <button
                    onClick={() => setIsAddMoneyOpen(true)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5 shrink-0"
                  >
                    <span className="material-symbols-outlined text-[19px]">add_circle</span>
                    <span>Add Money to Wallet</span>
                  </button>
                </div>
              </div>

              {/* Wallet Transactions History */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-xs">
                <h4 className="font-heading font-black text-base text-neutral-950 mb-3">
                  Wallet Activity &amp; Mandi Refunds
                </h4>
                <div className="divide-y divide-neutral-100">
                  {user?.walletTransactions?.map((t) => (
                    <div key={t.id} className="py-3 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            t.type === "credit"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {t.type === "credit" ? "arrow_downward" : "arrow_upward"}
                          </span>
                        </div>
                        <div>
                          <strong className="text-neutral-900 block font-bold">{t.desc}</strong>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            {t.id} • {t.date}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`font-mono font-black text-sm ${
                            t.type === "credit" ? "text-emerald-600" : "text-neutral-950"
                          }`}
                        >
                          {t.type === "credit" ? "+" : "-"}₹{t.amount.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[10px] text-emerald-700 block font-bold">
                          {t.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: WISHLIST */}
          {activeTab === "wishlist" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
                <h3 className="text-lg font-black font-heading text-neutral-950">
                  Saved Wholesale Lots ({savedProducts.length})
                </h3>
                <span className="text-xs text-neutral-500">Fast one-click carton additions</span>
              </div>

              {savedProducts.length === 0 ? (
                <div className="py-12 text-center text-neutral-500">
                  <span className="material-symbols-outlined text-[36px] text-neutral-300 block mb-1">
                    favorite_border
                  </span>
                  <p className="text-xs">No saved lots yet. Click the heart icon on any wholesale product!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {savedProducts.map((p) => (
                    <div
                      key={p.id}
                      className="border border-neutral-200 rounded-2xl p-3 flex flex-col justify-between hover:shadow-sm transition-shadow"
                    >
                      <div className="flex gap-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-16 h-16 rounded-xl object-cover bg-neutral-100 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-heading font-bold text-xs text-neutral-900 line-clamp-2 leading-snug">
                            {p.name}
                          </h4>
                          <span className="text-[11px] font-mono font-black text-primary mt-1 block">
                            ₹{p.price}/unit
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-neutral-100 flex gap-2">
                        <button
                          onClick={() => addToCart(p, 1)}
                          className="flex-1 bg-neutral-950 hover:bg-neutral-800 text-white font-heading font-bold text-xs py-1.5 rounded-lg cursor-pointer"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => onQuickView && onQuickView(p)}
                          className="px-2.5 py-1.5 border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs rounded-lg cursor-pointer"
                        >
                          Quick View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 7: NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-xs">
              <h3 className="text-lg font-black font-heading text-neutral-950 mb-3">
                Account &amp; Logistics Notifications
              </h3>
              <div className="divide-y divide-neutral-100">
                {user?.notifications?.map((n) => (
                  <div key={n.id} className="py-3.5 flex items-start gap-3 text-xs">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">{n.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <strong className="text-neutral-900 block font-bold">{n.title}</strong>
                      <p className="text-neutral-600 mt-0.5">{n.description}</p>
                      <span className="text-[10px] text-neutral-400 mt-1 block">{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: BECOME A VENDOR / VENDOR STATUS */}
          {activeTab === "become-vendor" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs text-center">
              {user?.isVendor ? (
                <div className="max-w-md mx-auto space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-[32px]">verified</span>
                  </div>
                  <h3 className="text-2xl font-black font-heading text-neutral-950">
                    Vendor Account is Active!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    You have unlocked dual Customer + Vendor privileges. You can manage lots, orders, and payouts from your Vendor Dashboard.
                  </p>
                  <button
                    onClick={onNavigateVendor}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
                  >
                    <span>Switch to Vendor Dashboard</span>
                    <span className="material-symbols-outlined text-[18px]">store</span>
                  </button>
                </div>
              ) : (
                <div className="max-w-md mx-auto space-y-3">
                  <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-[32px]">handshake</span>
                  </div>
                  <h3 className="text-2xl font-black font-heading text-neutral-950">
                    Ready to Supply Wholesale Lots?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Join over 140+ verified factory mills and distributors on SwiftMart. 0% Commission on all B2B orders.
                  </p>
                  <button
                    onClick={onOpenBecomeVendor}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-black text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
                  >
                    <span>Launch 4-Step Vendor Application</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ADD MONEY TO WALLET MODAL */}
      {isAddMoneyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
              <h4 className="font-heading font-black text-base text-neutral-950">
                Add Money to Wallet
              </h4>
              <button
                onClick={() => setIsAddMoneyOpen(false)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <form onSubmit={handleAddMoneySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Enter Amount (₹)
                </label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 5000"
                  value={addAmount}
                  onChange={(e) => setAddAmount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 font-mono text-sm text-neutral-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex gap-2">
                {[2000, 5000, 10000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setAddAmount(amt.toString())}
                    className="flex-1 py-1.5 rounded-lg border border-neutral-200 text-xs font-bold text-neutral-700 hover:bg-neutral-50 cursor-pointer"
                  >
                    +₹{amt}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs sm:text-sm py-3 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Pay via UPI / Netbanking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
