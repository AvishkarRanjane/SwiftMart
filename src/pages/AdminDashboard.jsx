import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { WHOLESALE_PRODUCTS } from "../data/wholesaleData";

export default function AdminDashboard({
  onNavigateHome,
  onNavigateCustomer,
  onNavigateVendor,
  onQuickView,
}) {
  const { showToast } = useCart();

  // Active Tab - 20 Sections matching exact workflow:
  // 'overview' | 'customers' | 'vendors' | 'products' | 'categories' | 'orders' | 'inventory' |
  // 'payments' | 'payouts' | 'analytics' | 'market' | 'offers' | 'reviews' | 'support' |
  // 'notifications' | 'cms' | 'reports' | 'staff' | 'audit' | 'settings'
  const [activeTab, setActiveTab] = useState("overview");

  // Admin RBAC Role Simulation: 'Super Admin' | 'Product Manager' | 'Finance Staff' | 'Support Staff'
  const [currentAdminRole, setCurrentAdminRole] = useState("Super Admin");

  // 1. Admin Login Workflow & 2FA Gate State (Workflow Section 1)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(true);
  const [loginStep, setLoginStep] = useState(1); // 1: Credentials, 2: 2FA Verification
  const [adminEmailInput, setAdminEmailInput] = useState("admin@swiftmart.in");
  const [adminPasswordInput, setAdminPasswordInput] = useState("admin12345");
  const [twoFactorDigits, setTwoFactorDigits] = useState(["8", "4", "9", "2", "0", "1"]);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [orderFilterStatus, setOrderFilterStatus] = useState("all");
  const [customerFilterStatus, setCustomerFilterStatus] = useState("all");
  const [ticketFilterStatus, setTicketFilterStatus] = useState("all");
  const [vendorFilterStatus, setVendorFilterStatus] = useState("all");

  // Modals & Inspection States
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isCreateOfferModalOpen, setIsCreateOfferModalOpen] = useState(false);
  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState(false);
  const [broadcastTarget, setBroadcastTarget] = useState("all");
  const [broadcastMsg, setBroadcastMsg] = useState("");

  // Reject Vendor Modal with Reason (Section 5)
  const [isRejectReasonModalOpen, setIsRejectReasonModalOpen] = useState(false);
  const [vendorToReject, setVendorToReject] = useState(null);
  const [rejectReason, setRejectReason] = useState("Incomplete Mandi Wholesale License or Tax mismatch");

  // Form States for Modals
  const [newOffer, setNewOffer] = useState({
    code: "",
    discount: "",
    minOrder: 1000,
    validUntil: "31 Oct 2026",
    usageLimit: 500,
  });
  const [newCategory, setNewCategory] = useState({
    name: "",
    subcategories: "",
  });
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Daily Necessities & FMCG",
    price: "",
    mrp: "",
    stock: "",
    vendor: "Apex Manufacturing & Mandi Mills",
  });

  // 1. Dashboard 13 KPI Cards Data
  const [kpis, setKpis] = useState({
    totalCustomers: 18450,
    totalVendors: 142,
    activeVendors: 139,
    pendingVendorApps: 3,
    totalProducts: 54,
    outOfStockProducts: 2,
    totalOrders: 1280,
    pendingOrders: 14,
    completedOrders: 1240,
    cancelledOrders: 26,
    totalRevenue: 4892400,
    pendingPayments: 1420500, // Escrow
    pendingVendorPayouts: 267000,
  });

  // 2. Customers Dataset
  const [customers, setCustomers] = useState([
    {
      id: "CUST-B2B-101",
      name: "Avishkar Sharma",
      company: "Shree Balaji Wholesale Traders",
      email: "avishkar@swiftmart.in",
      phone: "+91 98765 43210",
      city: "Navi Mumbai, MH",
      gstin: "27AABCU9603R1ZM",
      ordersCount: 18,
      totalSpent: 384500,
      walletBalance: 24500,
      status: "Active",
      joined: "Jan 2026",
    },
    {
      id: "CUST-B2B-102",
      name: "Ketan Mehta",
      company: "Metro Enterprise & Wholesale",
      email: "ketan@metrodepot.com",
      phone: "+91 98220 11980",
      city: "Ahmedabad, GJ",
      gstin: "24AAECM4401R1Z8",
      ordersCount: 24,
      totalSpent: 512000,
      walletBalance: 42000,
      status: "Active",
      joined: "Nov 2025",
    },
    {
      id: "CUST-B2B-103",
      name: "Rajesh Agarwal",
      company: "Krishna Electronics Megastore",
      email: "rajesh@krishnaelec.in",
      phone: "+91 97110 55432",
      city: "Surat, GJ",
      gstin: "24AACCK8890C1Z2",
      ordersCount: 14,
      totalSpent: 420000,
      walletBalance: 12000,
      status: "Active",
      joined: "Dec 2025",
    },
    {
      id: "CUST-B2B-104",
      name: "Sunil Deshmukh",
      company: "Royal Mart Supermarket Depot",
      email: "sunil@royalmart.co",
      phone: "+91 94220 99812",
      city: "Pune, MH",
      gstin: "27AABCR9910B1ZY",
      ordersCount: 31,
      totalSpent: 690000,
      walletBalance: 58000,
      status: "Active",
      joined: "Oct 2025",
    },
    {
      id: "CUST-B2B-105",
      name: "Vikas Verma",
      company: "Verma General Supplies",
      email: "vikas@vermasupplies.com",
      phone: "+91 98112 00192",
      city: "New Delhi, DL",
      gstin: "07AAACV1029F1Z3",
      ordersCount: 3,
      totalSpent: 35000,
      walletBalance: 1500,
      status: "Blocked",
      joined: "Aug 2026",
    },
  ]);

  // 3. Vendors Dataset
  const [vendors, setVendors] = useState([
    {
      id: "VND-MANDI-772",
      shopName: "Apex Manufacturing & Mandi Mills",
      owner: "Mahesh Patel",
      phone: "+91 97241 88320",
      city: "Surat, Gujarat",
      gstin: "24AAAPA8821B1Z3",
      category: "Daily FMCG & Cookware",
      activeLots: 28,
      rating: 4.9,
      status: "Approved",
      escrowPending: 112450,
      commissionRate: "0% (Festive)",
    },
    {
      id: "VND-MANDI-104",
      shopName: "Hindustan FMCG Mandi Depots",
      owner: "Rameshwar Goel",
      phone: "+91 98112 00412",
      city: "Bhiwandi, Maharashtra",
      gstin: "27AABCH1092F1Z4",
      category: "Cleaning & Detergents",
      activeLots: 42,
      rating: 4.8,
      status: "Approved",
      escrowPending: 248500,
      commissionRate: "0% (Festive)",
    },
    {
      id: "VND-MANDI-312",
      shopName: "GizmoTech Wholesale Lots",
      owner: "Sunil Agarwal",
      phone: "+91 98220 77123",
      city: "Bengaluru, Karnataka",
      gstin: "29AABCG3310D1Z7",
      category: "Mobile & Audio",
      activeLots: 35,
      rating: 4.9,
      status: "Approved",
      escrowPending: 89400,
      commissionRate: "3%",
    },
    {
      id: "VND-MANDI-890",
      shopName: "Jaipur Kundan & Silver Guild",
      owner: "Rajendra Soni",
      phone: "+91 94140 22910",
      city: "Jaipur, Rajasthan",
      gstin: "08AAACJ7720K1Z9",
      category: "Jewellery & Accessories",
      activeLots: 19,
      rating: 4.7,
      status: "Pending Application",
      escrowPending: 0,
      commissionRate: "5%",
    },
    {
      id: "VND-MANDI-912",
      shopName: "Kisan Agro Foods & Edible Oils Mill",
      owner: "Baldev Singh",
      phone: "+91 98765 11990",
      city: "Indore, Madhya Pradesh",
      gstin: "23AABCK9901M1Z1",
      category: "Cooking Oils & Grains",
      activeLots: 12,
      rating: 4.6,
      status: "Pending Application",
      escrowPending: 0,
      commissionRate: "2%",
    },
  ]);

  // 4. Products Dataset
  const [products, setProducts] = useState([
    {
      id: "PRD-B2B-01",
      name: "Commercial Dishwash Liquid 20L Canister",
      category: "Daily Necessities",
      vendor: "Apex Manufacturing & Mandi Mills",
      price: 620,
      mrp: 1299,
      stock: 140,
      status: "Approved",
      image: "/images/hero-fmcg.jpg",
    },
    {
      id: "PRD-B2B-02",
      name: "TWS True Wireless Earbuds ANC (20-Pack Box)",
      category: "Electronics",
      vendor: "GizmoTech Wholesale Lots",
      price: 7200,
      mrp: 19999,
      stock: 45,
      status: "Approved",
      image: "/images/hero-electronics.jpg",
    },
    {
      id: "PRD-B2B-03",
      name: "Stainless Steel 304 Vacuum Flask Set (24 Pcs)",
      category: "Kitchenware",
      vendor: "Apex Manufacturing & Mandi Mills",
      price: 4600,
      mrp: 11990,
      stock: 80,
      status: "Approved",
      image: "/images/hero-payday.jpg",
    },
    {
      id: "PRD-B2B-04",
      name: "German Silver Oxidized Jhumkas (50 Pairs Tray)",
      category: "Jewellery",
      vendor: "Jaipur Kundan & Silver Guild",
      price: 1850,
      mrp: 4999,
      stock: 8,
      status: "Pending Approval",
      image: "/images/hero-mattress.jpg",
    },
    {
      id: "PRD-B2B-05",
      name: "Floor Cleaner Concentrate 50L Commercial Drum",
      category: "Daily Necessities",
      vendor: "Hindustan FMCG Mandi Depots",
      price: 1450,
      mrp: 2999,
      stock: 0,
      status: "Disabled",
      image: "/images/hero-fmcg.jpg",
    },
  ]);

  // 5. Categories Dataset
  const [categories, setCategories] = useState([
    {
      id: "daily-necessities",
      name: "Daily Necessities & FMCG",
      subcategories: ["Dishwash Liquids", "Detergents", "Floor Cleaners", "Personal Care"],
      productsCount: 18,
      status: "Active",
    },
    {
      id: "electronics",
      name: "Electronics & Audio Gadgets",
      subcategories: ["TWS Earbuds", "Fast Chargers", "Power Banks", "Smartwatches"],
      productsCount: 14,
      status: "Active",
    },
    {
      id: "kitchenware",
      name: "Commercial Cookware & Dining",
      subcategories: ["Vacuum Flasks", "Stainless Steel Sets", "Heavy Mixer Grinders"],
      productsCount: 12,
      status: "Active",
    },
    {
      id: "jewellery",
      name: "Artificial Jewellery & Accessories",
      subcategories: ["Oxidized Jhumkas", "Kundan Sets", "Bridal Bangles"],
      productsCount: 10,
      status: "Active",
    },
  ]);

  // 6. Orders Dataset
  const [orders, setOrders] = useState([
    {
      id: "ORD-B2B-90214",
      date: "Today, 10:15 AM",
      customer: "Shree Balaji Wholesale Traders",
      vendor: "Apex Manufacturing & Mandi Mills",
      lot: "Commercial Dishwash Liquid 20L Canister (10 Cartons)",
      amount: 6200,
      paymentMethod: "Mandi Escrow (Netbanking)",
      paymentStatus: "Escrow Locked",
      orderStatus: "Processing",
      carrier: "Delhivery Heavy Cargo",
      waybill: "eWB-411098234",
    },
    {
      id: "ORD-B2B-90188",
      date: "Today, 08:30 AM",
      customer: "Metro Enterprise & Wholesale",
      vendor: "Apex Manufacturing & Mandi Mills",
      lot: "Stainless Steel 304 Vacuum Flask Set (4 Cartons)",
      amount: 18400,
      paymentMethod: "UPI Instant B2B",
      paymentStatus: "Escrow Locked",
      orderStatus: "Shipped",
      carrier: "Delhivery Heavy Cargo",
      waybill: "eWB-411092019",
    },
    {
      id: "ORD-B2B-89945",
      date: "Yesterday",
      customer: "Royal Mart Supermarket Depot",
      vendor: "GizmoTech Wholesale Lots",
      lot: "TWS True Wireless Earbuds ANC (2 Cartons)",
      amount: 14400,
      paymentMethod: "Mandi Wallet",
      paymentStatus: "Escrow Locked",
      orderStatus: "Out for Delivery",
      carrier: "VRL Logistics",
      waybill: "eWB-410884920",
    },
    {
      id: "ORD-B2B-89421",
      date: "29 Sep 2026",
      customer: "Shree Balaji Wholesale Traders",
      vendor: "Hindustan FMCG Mandi Depots",
      lot: "Surf Excel 25kg (5 Sacks) + Lizol 20L (3 Crates)",
      amount: 24850,
      paymentMethod: "Mandi Escrow",
      paymentStatus: "Escrow Released",
      orderStatus: "Delivered",
      carrier: "Delhivery Heavy Cargo",
      waybill: "eWB-410772190",
    },
    {
      id: "ORD-B2B-88104",
      date: "28 Sep 2026",
      customer: "Krishna Electronics Megastore",
      vendor: "GizmoTech Wholesale Lots",
      lot: "boAt ANC Earbuds 20-Pack Master Box (3 Cartons)",
      amount: 38400,
      paymentMethod: "Bank Transfer (NEFT)",
      paymentStatus: "Escrow Released",
      orderStatus: "Delivered",
      carrier: "TCI Freight Express",
      waybill: "eWB-410552011",
    },
  ]);

  // 7. Payouts Dataset
  const [payouts, setPayouts] = useState([
    {
      id: "PAY-REQ-4401",
      vendor: "Apex Manufacturing & Mandi Mills",
      amount: 75000,
      bank: "HDFC Bank A/c **4092",
      date: "Today, 11:20 AM",
      status: "Pending Approval",
      utr: null,
    },
    {
      id: "PAY-REQ-4398",
      vendor: "Hindustan FMCG Mandi Depots",
      amount: 140000,
      bank: "ICICI Bank A/c **8819",
      date: "Today, 09:10 AM",
      status: "Pending Approval",
      utr: null,
    },
    {
      id: "PAY-REQ-4350",
      vendor: "GizmoTech Wholesale Lots",
      amount: 52000,
      bank: "State Bank of India A/c **2104",
      date: "Yesterday",
      status: "Completed (IMPS)",
      utr: "IMPS-UTR-9912048",
    },
  ]);

  // 8. Offers & Coupons Dataset
  const [offers, setOffers] = useState([
    {
      code: "SWIFT100",
      discount: "₹100 Flat",
      minOrder: 5000,
      validUntil: "31 Oct 2026",
      usageCount: 1420,
      status: "Active",
    },
    {
      code: "FMCG500",
      discount: "5% Off",
      minOrder: 25000,
      validUntil: "15 Nov 2026",
      usageCount: 412,
      status: "Active",
    },
    {
      code: "DIWALI10",
      discount: "10% Bulk",
      minOrder: 50000,
      validUntil: "05 Nov 2026",
      usageCount: 890,
      status: "Active",
    },
  ]);

  // 9. Customer Support Tickets
  const [tickets, setTickets] = useState([
    {
      id: "TCK-8012",
      customer: "Shree Balaji Wholesale Traders",
      subject: "Delayed dock unloading at Vashi APMC",
      category: "Delivery Logistics",
      priority: "High",
      status: "In Progress",
      date: "Today, 11:00 AM",
    },
    {
      id: "TCK-8004",
      customer: "Metro Enterprise & Wholesale",
      subject: "GST Input Tax Credit missing on invoice #INV-8819",
      category: "Invoicing & Tax",
      priority: "Medium",
      status: "Open",
      date: "Yesterday",
    },
    {
      id: "TCK-7988",
      customer: "Krishna Electronics",
      subject: "Carton damage reported by driver during transit",
      category: "Freight Damage",
      priority: "High",
      status: "Resolved",
      date: "28 Sep 2026",
    },
  ]);

  // 10. Audit Logs
  const [auditLogs, setAuditLogs] = useState([
    {
      id: "AUD-991",
      admin: "Avishkar (Super Admin)",
      action: "Vendor Approved",
      target: "Apex Manufacturing (VND-MANDI-772)",
      ip: "103.21.244.12",
      time: "Today, 10:45 AM",
    },
    {
      id: "AUD-990",
      admin: "Avishkar (Super Admin)",
      action: "IMPS Payout Released",
      target: "GizmoTech (₹52,000)",
      ip: "103.21.244.12",
      time: "Yesterday, 04:30 PM",
    },
    {
      id: "AUD-989",
      admin: "Priya (Product Manager)",
      action: "Product Lot Approved",
      target: "Commercial Dishwash Liquid 20L",
      ip: "103.21.244.18",
      time: "Yesterday, 02:15 PM",
    },
    {
      id: "AUD-988",
      admin: "Avishkar (Super Admin)",
      action: "Platform Commission Modified",
      target: "Set 0% Festive Mandi Mode",
      ip: "103.21.244.12",
      time: "29 Sep 2026",
    },
  ]);

  // Handlers for Admin Actions
  const handleApproveVendor = (vendorId) => {
    setVendors((prev) =>
      prev.map((v) => (v.id === vendorId ? { ...v, status: "Approved" } : v))
    );
    setAuditLogs([
      {
        id: `AUD-${Math.floor(1000 + Math.random() * 9000)}`,
        admin: `${currentAdminRole}`,
        action: "Vendor Approved",
        target: `Vendor ${vendorId}`,
        ip: "127.0.0.1",
        time: "Just now",
      },
      ...auditLogs,
    ]);
    showToast(`Vendor ${vendorId} approved & verified! ✅`);
  };

  const handleRejectVendor = (vendor) => {
    setVendorToReject(vendor);
    setIsRejectReasonModalOpen(true);
  };

  const handleConfirmRejectVendor = () => {
    if (!vendorToReject) return;
    setVendors((prev) =>
      prev.map((v) =>
        v.id === vendorToReject.id
          ? { ...v, status: `Rejected (${rejectReason})` }
          : v
      )
    );
    setAuditLogs([
      {
        id: `AUD-${Math.floor(1000 + Math.random() * 9000)}`,
        admin: `${currentAdminRole}`,
        action: "Vendor Application Rejected",
        target: `${vendorToReject.shopName} - Reason: ${rejectReason}`,
        ip: "127.0.0.1",
        time: "Just now",
      },
      ...auditLogs,
    ]);
    showToast(`Application for ${vendorToReject.shopName} rejected. Reason given: "${rejectReason}".`);
    setIsRejectReasonModalOpen(false);
    setVendorToReject(null);
    setSelectedVendor(null);
  };

  const handleCreateOffer = (e) => {
    e.preventDefault();
    if (!newOffer.code) return;
    const created = {
      code: newOffer.code.toUpperCase().trim(),
      discount: newOffer.discount || "10% Off",
      minOrder: Number(newOffer.minOrder) || 1000,
      validUntil: newOffer.validUntil || "31 Oct 2026",
      usageCount: 0,
      status: "Active",
    };
    setOffers([created, ...offers]);
    setIsCreateOfferModalOpen(false);
    setNewOffer({ code: "", discount: "", minOrder: 1000, validUntil: "31 Oct 2026", usageLimit: 500 });
    showToast(`Wholesale coupon ${created.code} published! 🏷️`);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory.name) return;
    const subs = newCategory.subcategories.split(",").map((s) => s.trim()).filter(Boolean);
    const created = {
      id: newCategory.name.toLowerCase().replace(/\s+/g, "-"),
      name: newCategory.name,
      subcategories: subs.length ? subs : ["Wholesale Bulk Lots"],
      productsCount: 0,
      status: "Active",
    };
    setCategories([...categories, created]);
    setIsAddCategoryModalOpen(false);
    setNewCategory({ name: "", subcategories: "" });
    showToast(`New category "${created.name}" created! 📁`);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    const created = {
      id: `PRD-B2B-${Math.floor(10 + Math.random() * 90)}`,
      name: newProduct.name,
      category: newProduct.category,
      vendor: newProduct.vendor,
      price: Number(newProduct.price),
      mrp: Number(newProduct.mrp) || Math.round(Number(newProduct.price) * 1.5),
      stock: Number(newProduct.stock) || 50,
      status: "Approved",
      image: "/images/hero-fmcg.jpg",
    };
    setProducts([created, ...products]);
    setIsAddProductModalOpen(false);
    setNewProduct({
      name: "",
      category: "Daily Necessities & FMCG",
      price: "",
      mrp: "",
      stock: "",
      vendor: "Apex Manufacturing & Mandi Mills",
    });
    showToast(`Wholesale product "${created.name}" published to catalog! 📦`);
  };

  const handleToggleCustomerBlock = (customerId) => {
    setCustomers((prev) =>
      prev.map((c) =>
        c.id === customerId
          ? { ...c, status: c.status === "Active" ? "Blocked" : "Active" }
          : c
      )
    );
    showToast("Customer account status updated! 👤");
  };

  const handleApprovePayout = (reqId, amount) => {
    const utr = `IMPS-${Math.floor(1000000 + Math.random() * 9000000)}`;
    setPayouts((prev) =>
      prev.map((p) =>
        p.id === reqId ? { ...p, status: "Completed (IMPS)", utr } : p
      )
    );
    showToast(`IMPS Payout of ₹${amount.toLocaleString("en-IN")} released (UTR: ${utr})! 💳`);
  };

  const handleApproveProduct = (productId) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, status: "Approved" } : p))
    );
    showToast(`Product ${productId} approved for storefront display! 🏷️`);
  };

  const handleBroadcast = (e) => {
    e.preventDefault();
    if (!broadcastMsg) return;
    showToast(`Broadcast sent to [${broadcastTarget.toUpperCase()}]: "${broadcastMsg}" 📢`);
    setIsBroadcastModalOpen(false);
    setBroadcastMsg("");
  };

  // 1. ADMIN LOGIN & 2FA GATE (Workflow Section 1)
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-10 bg-neutral-950/5 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full bg-white rounded-3xl border border-neutral-200/90 shadow-2xl p-6 sm:p-8 relative z-10">
          {/* Header Badge */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
              </div>
              <div>
                <h2 className="font-heading font-black text-base text-neutral-950">
                  SwiftMart Admin Control
                </h2>
                <span className="text-[10px] text-red-600 font-bold uppercase tracking-wider block">
                  Central Mandi Command
                </span>
              </div>
            </div>
            <button
              onClick={onNavigateHome}
              className="text-xs text-neutral-400 hover:text-neutral-700 flex items-center gap-1 cursor-pointer"
              title="Return to Storefront"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Stepper matching blueprint: Admin Login -> Authentication -> Admin Verification / 2FA -> Admin Dashboard */}
          <div className="flex items-center justify-center gap-3 mb-6 bg-neutral-50 py-2.5 px-4 rounded-2xl border border-neutral-100">
            <div className={`flex items-center gap-1.5 text-xs font-bold ${loginStep === 1 ? "text-red-600" : "text-emerald-600"}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${loginStep === 1 ? "bg-red-600 text-white" : "bg-emerald-600 text-white"}`}>
                {loginStep > 1 ? "✓" : "1"}
              </span>
              <span>1. Credentials</span>
            </div>
            <span className="w-5 h-0.5 bg-neutral-200" />
            <div className={`flex items-center gap-1.5 text-xs font-bold ${loginStep === 2 ? "text-red-600" : "text-neutral-400"}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${loginStep === 2 ? "bg-red-600 text-white" : "bg-neutral-200 text-neutral-600"}`}>
                2
              </span>
              <span>2. 2FA Code</span>
            </div>
          </div>

          {loginStep === 1 ? (
            /* STEP 1: Admin Credentials */
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoginStep(2);
                showToast("Admin credentials authenticated! Please enter your 2FA OTP. 🔐");
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Administrative Role (RBAC)</label>
                <select
                  value={currentAdminRole}
                  onChange={(e) => setCurrentAdminRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 font-heading font-black text-xs text-neutral-900 bg-neutral-50 focus:outline-none focus:border-red-600 focus:bg-white cursor-pointer"
                >
                  <option>Super Admin</option>
                  <option>Product Manager</option>
                  <option>Finance Staff</option>
                  <option>Support Staff</option>
                </select>
                <span className="text-[10px] text-neutral-400 block mt-1">
                  RBAC level determines accessibility across the 20 control modules
                </span>
              </div>

              <div>
                <label className="block font-bold text-neutral-700 mb-1">Admin Email / Operator ID</label>
                <input
                  type="email"
                  required
                  value={adminEmailInput}
                  onChange={(e) => setAdminEmailInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs font-medium text-neutral-900 focus:outline-none focus:border-red-600"
                  placeholder="admin@swiftmart.in"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={adminPasswordInput}
                  onChange={(e) => setAdminPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs font-medium text-neutral-900 focus:outline-none focus:border-red-600"
                  placeholder="••••••••••••"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-heading font-black py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Authenticate &amp; Proceed to 2FA</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsAdminAuthenticated(true);
                    showToast(`Direct access granted as ${currentAdminRole} (Demo Mode) ✅`);
                  }}
                  className="w-full bg-red-50 hover:bg-red-100 text-red-700 font-heading font-bold py-2 rounded-xl text-xs border border-red-200 transition-all cursor-pointer"
                >
                  ⚡ Quick Demo Access (Bypass 2FA)
                </button>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 text-[10.5px] text-neutral-500 leading-tight">
                🔒 <strong>Restricted Access:</strong> Only authorized SwiftMart staff with verified credentials and 2FA hardware keys are permitted to enter.
              </div>
            </form>
          ) : (
            /* STEP 2: 2FA Verification */
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsAdminAuthenticated(true);
                showToast(`2FA Verified! Welcome to Central Command, ${currentAdminRole}. 🛡️`);
              }}
              className="space-y-4 text-xs"
            >
              <div className="text-center py-1">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 mx-auto flex items-center justify-center border border-red-200 mb-2">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <h3 className="font-heading font-black text-sm text-neutral-950">
                  Two-Factor Verification (2FA)
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Enter the 6-digit TOTP security code from your Authenticator App
                </p>
              </div>

              {/* 6 OTP Inputs */}
              <div className="flex items-center justify-center gap-2 my-3">
                {twoFactorDigits.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const val = e.target.value.slice(-1);
                      const updated = [...twoFactorDigits];
                      updated[idx] = val;
                      setTwoFactorDigits(updated);
                    }}
                    className="w-10 h-12 text-center text-lg font-mono font-black border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-red-600 bg-neutral-50 focus:bg-white"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-500 px-1">
                <span>Code expires in: <strong className="text-red-600 font-mono">00:24s</strong></span>
                <button
                  type="button"
                  onClick={() => showToast("New 2FA security code dispatched! 📱")}
                  className="text-primary hover:underline font-bold cursor-pointer"
                >
                  Resend OTP
                </button>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-heading font-black py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">lock_open</span>
                  <span>Verify 2FA &amp; Access Dashboard</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLoginStep(1)}
                  className="w-full border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-heading font-bold py-2 rounded-xl text-xs cursor-pointer"
                >
                  ← Back to Step 1 (Change Account)
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1520px] mx-auto px-3 sm:px-4 md:px-margin py-4 sm:py-6 w-full">
      {/* Top Breadcrumb & Dual Cross-Portal Switch Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 font-medium">
          <button
            onClick={onNavigateHome}
            className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">storefront</span>
            Storefront
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-red-600">
              admin_panel_settings
            </span>
            Central Admin Control Panel
          </span>
        </div>

        {/* Top Status & Role Matrix Switcher */}
        <div className="flex items-center gap-2">
          {/* RBAC Role Selector */}
          <div className="flex items-center gap-1.5 bg-white border border-neutral-300 rounded-full px-3 py-1 text-xs">
            <span className="text-neutral-500 font-bold hidden sm:inline">Role:</span>
            <select
              value={currentAdminRole}
              onChange={(e) => {
                setCurrentAdminRole(e.target.value);
                showToast(`Switched staff role to: ${e.target.value}`);
              }}
              className="font-heading font-black text-neutral-950 bg-transparent focus:outline-none cursor-pointer"
            >
              <option>Super Admin</option>
              <option>Product Manager</option>
              <option>Finance Staff</option>
              <option>Support Staff</option>
            </select>
          </div>

          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            2FA Verified
          </span>

          <button
            onClick={() => {
              setIsAdminAuthenticated(false);
              setLoginStep(1);
              showToast("Admin session locked. Please re-authenticate with 2FA 🔒");
            }}
            title="Lock Console / Sign Out (Test 2FA Login Workflow)"
            className="border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-heading font-bold px-2.5 py-1 rounded-full cursor-pointer flex items-center gap-1 transition-colors"
          >
            <span className="material-symbols-outlined text-[14px]">lock</span>
            <span className="hidden sm:inline">Lock / 2FA Gate</span>
          </button>

          <button
            onClick={onNavigateCustomer}
            className="border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs font-heading font-bold px-3 py-1.5 rounded-full cursor-pointer hidden md:flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[15px] text-blue-600">person</span>
            Customer View
          </button>

          <button
            onClick={onNavigateVendor}
            className="border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs font-heading font-bold px-3 py-1.5 rounded-full cursor-pointer hidden md:flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[15px] text-amber-600">store</span>
            Vendor View
          </button>
        </div>
      </div>

      {/* Main Grid: Comprehensive 20-Section Sidebar + Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Admin Navigation Sidebar (All 20 modules organized in logical clusters) */}
        <aside className="lg:col-span-3 flex flex-col gap-2">
          {/* Admin Identity Card */}
          <div className="bg-gradient-to-r from-red-950 via-neutral-950 to-slate-950 text-white rounded-2xl p-4 shadow-sm border border-red-900/40 mb-1">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shrink-0">
                <span className="material-symbols-outlined text-[22px]">shield_person</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading font-black text-sm text-white truncate">
                  Master Admin Console
                </h3>
                <span className="text-[10.5px] text-red-300 font-mono block">
                  {currentAdminRole}
                </span>
                <span className="text-[9.5px] text-emerald-400 font-bold block mt-0.5">
                  ● 100% Platform Operational
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar Modules List */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-2 shadow-xs space-y-1 max-h-[82vh] overflow-y-auto">
            {/* Group 1: Core */}
            <div className="text-[10px] font-black uppercase text-neutral-400 px-3 pt-1 tracking-wider">
              Core Overview
            </div>
            {[
              { id: "overview", label: "Dashboard Summary", icon: "space_dashboard" },
              { id: "analytics", label: "Sales & Analytics", icon: "monitoring" },
              { id: "market", label: "Market Insights", icon: "trending_up" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-neutral-950 text-white shadow-xs"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`material-symbols-outlined text-[18px] ${activeTab === item.id ? "text-white" : "text-neutral-500"}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              </button>
            ))}

            {/* Group 2: Operations & Partners */}
            <div className="text-[10px] font-black uppercase text-neutral-400 px-3 pt-3 tracking-wider">
              Partners &amp; Commerce
            </div>
            {[
              { id: "customers", label: "Customer Management", icon: "people", count: customers.length },
              { id: "vendors", label: "Vendor Management", icon: "store", badge: "3 New" },
              { id: "orders", label: "Order Management", icon: "receipt_long", count: orders.length },
              { id: "products", label: "Product Management", icon: "inventory_2", count: products.length },
              { id: "categories", label: "Category Management", icon: "category" },
              { id: "inventory", label: "Inventory & Stock", icon: "warehouse" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-neutral-950 text-white shadow-xs"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`material-symbols-outlined text-[18px] ${activeTab === item.id ? "text-white" : "text-neutral-500"}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] font-black bg-amber-500 text-white px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.count !== undefined && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${activeTab === item.id ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-600"}`}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}

            {/* Group 3: Financials */}
            <div className="text-[10px] font-black uppercase text-neutral-400 px-3 pt-3 tracking-wider">
              Financial Settlements
            </div>
            {[
              { id: "payments", label: "Payments & Gateways", icon: "account_balance_wallet" },
              { id: "payouts", label: "Vendor Payouts (IMPS)", icon: "payments", badge: "2 Pending" },
              { id: "reports", label: "Reports & Exports", icon: "summarize" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-neutral-950 text-white shadow-xs"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`material-symbols-outlined text-[18px] ${activeTab === item.id ? "text-white" : "text-neutral-500"}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] font-black bg-red-600 text-white px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            {/* Group 4: Growth & Customer Care */}
            <div className="text-[10px] font-black uppercase text-neutral-400 px-3 pt-3 tracking-wider">
              Growth &amp; Support
            </div>
            {[
              { id: "offers", label: "Offers & Coupons", icon: "local_offer" },
              { id: "reviews", label: "Reviews & Ratings", icon: "star" },
              { id: "support", label: "Support Tickets", icon: "support_agent", badge: "1 Open" },
              { id: "notifications", label: "Notifications & Alerts", icon: "campaign" },
              { id: "cms", label: "Website / CMS Content", icon: "web" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-neutral-950 text-white shadow-xs"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`material-symbols-outlined text-[18px] ${activeTab === item.id ? "text-white" : "text-neutral-500"}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              </button>
            ))}

            {/* Group 5: Governance */}
            <div className="text-[10px] font-black uppercase text-neutral-400 px-3 pt-3 tracking-wider">
              Governance &amp; Config
            </div>
            {[
              { id: "staff", label: "Admin Staff & RBAC", icon: "manage_accounts" },
              { id: "audit", label: "Security & Audit Logs", icon: "security" },
              { id: "settings", label: "System Settings", icon: "settings" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-neutral-950 text-white shadow-xs"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`material-symbols-outlined text-[18px] ${activeTab === item.id ? "text-white" : "text-neutral-500"}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-6">
          {/* TAB 1: DASHBOARD OVERVIEW (With 13 KPI Cards & Visual Graphs) */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Top Banner with Broadcast Button */}
              <div className="bg-gradient-to-r from-red-950 via-neutral-950 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm border border-red-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    Executive Mandi Operations
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                    Platform Performance Overview
                  </h2>
                  <p className="text-xs text-neutral-300 mt-1">
                    Real-time monitoring across 18,450+ buyers, 142 vendors, and pan-India freight docks.
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => setIsBroadcastModalOpen(true)}
                    className="bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[18px]">campaign</span>
                    <span>Broadcast Alert</span>
                  </button>
                </div>
              </div>

              {/* 13 KPI Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                <div className="bg-white rounded-2xl border border-neutral-200 p-3.5 shadow-xs">
                  <span className="text-[11px] font-bold text-neutral-500 block">Total Revenue</span>
                  <strong className="text-lg font-black text-neutral-950 font-heading">
                    ₹{kpis.totalRevenue.toLocaleString("en-IN")}
                  </strong>
                  <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">+24.8% Monthly</span>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-3.5 shadow-xs">
                  <span className="text-[11px] font-bold text-neutral-500 block">Pending Escrow</span>
                  <strong className="text-lg font-black text-primary font-heading">
                    ₹{kpis.pendingPayments.toLocaleString("en-IN")}
                  </strong>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Held until delivery OTP</span>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-3.5 shadow-xs">
                  <span className="text-[11px] font-bold text-neutral-500 block">Pending Vendor Payouts</span>
                  <strong className="text-lg font-black text-amber-600 font-heading">
                    ₹{kpis.pendingVendorPayouts.toLocaleString("en-IN")}
                  </strong>
                  <span className="text-[10px] text-amber-700 block mt-0.5">2 requests waiting</span>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-3.5 shadow-xs">
                  <span className="text-[11px] font-bold text-neutral-500 block">Total Orders</span>
                  <strong className="text-lg font-black text-neutral-950 font-heading">
                    {kpis.totalOrders}
                  </strong>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">
                    {kpis.completedOrders} completed • {kpis.cancelledOrders} cancelled
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-3.5 shadow-xs">
                  <span className="text-[11px] font-bold text-neutral-500 block">Pending Orders</span>
                  <strong className="text-lg font-black text-amber-600 font-heading">
                    {kpis.pendingOrders}
                  </strong>
                  <span className="text-[10px] text-amber-700 block mt-0.5">Dock dispatch needed</span>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-3.5 shadow-xs">
                  <span className="text-[11px] font-bold text-neutral-500 block">Total Customers</span>
                  <strong className="text-lg font-black text-neutral-950 font-heading">
                    {kpis.totalCustomers.toLocaleString("en-IN")}
                  </strong>
                  <span className="text-[10px] text-emerald-600 block mt-0.5">+340 new this week</span>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-3.5 shadow-xs">
                  <span className="text-[11px] font-bold text-neutral-500 block">Active Vendors</span>
                  <strong className="text-lg font-black text-neutral-950 font-heading">
                    {kpis.activeVendors} / {kpis.totalVendors}
                  </strong>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Verified Mandi Mills</span>
                </div>

                <div className="bg-white rounded-2xl border border-amber-200 bg-amber-50/50 p-3.5 shadow-xs">
                  <span className="text-[11px] font-bold text-amber-900 block">Pending Vendor Apps</span>
                  <strong className="text-lg font-black text-amber-700 font-heading">
                    {kpis.pendingVendorApps}
                  </strong>
                  <button
                    onClick={() => setActiveTab("vendors")}
                    className="text-[10px] text-amber-800 font-bold underline block mt-0.5"
                  >
                    Review Applications ➔
                  </button>
                </div>
              </div>

              {/* Graphical Overview Visualizations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Sales & Revenue Trend */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3">
                    <h4 className="font-heading font-black text-sm text-neutral-950">
                      Platform Sales Overview (Monthly GMV)
                    </h4>
                    <span className="text-xs font-bold text-emerald-600">+24.8% YoY</span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-40 border-b border-neutral-200 pb-2">
                    {[
                      { m: "May", v: "₹28L", h: "50%" },
                      { m: "Jun", v: "₹34L", h: "60%" },
                      { m: "Jul", v: "₹41L", h: "75%" },
                      { m: "Aug", v: "₹39L", h: "70%" },
                      { m: "Sep", v: "₹46L", h: "85%" },
                      { m: "Oct", v: "₹48.9L", h: "95%" },
                    ].map((bar) => (
                      <div key={bar.m} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[9px] font-mono text-neutral-500">{bar.v}</span>
                        <div
                          className="w-full bg-gradient-to-t from-red-600 to-rose-400 rounded-t-md"
                          style={{ height: bar.h }}
                        />
                        <span className="text-[10px] font-bold text-neutral-700">{bar.m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Orders Breakdown Status */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3">
                    <h4 className="font-heading font-black text-sm text-neutral-950">
                      Order Fulfillment Breakdown
                    </h4>
                    <span className="text-xs font-mono text-neutral-500">{kpis.totalOrders} Total</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    {[
                      { status: "Delivered (Completed)", count: 1240, color: "bg-emerald-500", pct: "96.8%" },
                      { status: "In Transit / Shipped", count: 14, color: "bg-blue-500", pct: "1.1%" },
                      { status: "Processing / Pending", count: 8, color: "bg-amber-500", pct: "0.6%" },
                      { status: "Cancelled / Returned", count: 26, color: "bg-red-500", pct: "2.0%" },
                    ].map((row) => (
                      <div key={row.status} className="space-y-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="font-bold text-neutral-800">{row.status}</span>
                          <span className="font-mono text-neutral-600">{row.count} ({row.pct})</span>
                        </div>
                        <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                          <div className={`h-full ${row.color}`} style={{ width: row.pct }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CUSTOMER MANAGEMENT */}
          {activeTab === "customers" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Customer Account Directory ({customers.length})
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Inspect orders, manage wallet balances, and block/unblock accounts
                  </p>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search by name, company, GSTIN..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-red-500 w-full sm:w-64"
                  />
                </div>
              </div>

              {/* Customer Filter Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: `All Customers (${customers.length})` },
                  { id: "Active", label: `Active (${customers.filter((c) => c.status === "Active").length})` },
                  { id: "Blocked", label: `Blocked (${customers.filter((c) => c.status === "Blocked").length})` },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setCustomerFilterStatus(f.id)}
                    className={`px-3 py-1 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                      customerFilterStatus === f.id
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 text-neutral-600 font-bold uppercase text-[10px] tracking-wider border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-3">Customer Profile</th>
                      <th className="py-3 px-3">Location / GSTIN</th>
                      <th className="py-3 px-3">Orders</th>
                      <th className="py-3 px-3">Total Spend</th>
                      <th className="py-3 px-3">Wallet</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {customers
                      .filter((c) => {
                        const matchSearch = searchQuery
                          ? c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            c.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            c.gstin.toLowerCase().includes(searchQuery.toLowerCase())
                          : true;
                        const matchStatus =
                          customerFilterStatus === "all"
                            ? true
                            : c.status.toLowerCase() === customerFilterStatus.toLowerCase();
                        return matchSearch && matchStatus;
                      })
                      .map((c) => (
                        <tr key={c.id} className="hover:bg-neutral-50 transition-colors">
                          <td className="py-3 px-3">
                            <strong className="text-neutral-950 block font-bold">{c.name}</strong>
                            <span className="text-[11px] text-neutral-600">{c.company}</span>
                            <span className="text-[10px] text-neutral-400 font-mono block">{c.phone}</span>
                          </td>
                          <td className="py-3 px-3">
                            <span className="text-neutral-800 block">{c.city}</span>
                            <span className="font-mono text-[10px] text-neutral-500">{c.gstin}</span>
                          </td>
                          <td className="py-3 px-3 font-bold text-neutral-900">{c.ordersCount} orders</td>
                          <td className="py-3 px-3 font-mono font-bold text-neutral-950">
                            ₹{c.totalSpent.toLocaleString("en-IN")}
                          </td>
                          <td className="py-3 px-3 font-mono font-bold text-emerald-600">
                            ₹{c.walletBalance.toLocaleString("en-IN")}
                          </td>
                          <td className="py-3 px-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                                c.status === "Active"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }`}
                            >
                              {c.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => setSelectedCustomer(c)}
                              className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-2.5 py-1 rounded text-xs font-bold cursor-pointer"
                            >
                              Inspect
                            </button>
                            <button
                              onClick={() => handleToggleCustomerBlock(c.id)}
                              className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                                c.status === "Active"
                                  ? "bg-red-50 text-red-700 hover:bg-red-100"
                                  : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                              }`}
                            >
                              {c.status === "Active" ? "Block" : "Unblock"}
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: VENDOR MANAGEMENT */}
          {activeTab === "vendors" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Vendor &amp; Mandi Mill Management ({vendors.length})
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Approve/reject factory applications, verify GSTINs, and manage platform commission
                  </p>
                </div>
              </div>

              {/* Vendor Filter Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: `All Vendors (${vendors.length})` },
                  {
                    id: "Pending Application",
                    label: `Pending Applications (${vendors.filter((v) => v.status === "Pending Application").length})`,
                  },
                  { id: "Approved", label: `Approved (${vendors.filter((v) => v.status === "Approved").length})` },
                  { id: "Rejected", label: `Rejected` },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setVendorFilterStatus(f.id)}
                    className={`px-3 py-1 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                      vendorFilterStatus === f.id
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 text-neutral-600 font-bold uppercase text-[10px] tracking-wider border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-3">Shop / Mill Name</th>
                      <th className="py-3 px-3">Category</th>
                      <th className="py-3 px-3">Location / GSTIN</th>
                      <th className="py-3 px-3">Commission</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3 text-right">Admin Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {vendors
                      .filter((v) => {
                        if (vendorFilterStatus === "all") return true;
                        if (vendorFilterStatus === "Rejected") return v.status.startsWith("Rejected");
                        return v.status === vendorFilterStatus;
                      })
                      .map((v) => (
                        <tr key={v.id} className="hover:bg-neutral-50 transition-colors">
                          <td className="py-3 px-3">
                            <strong className="text-neutral-950 block font-bold">{v.shopName}</strong>
                            <span className="text-[11px] text-neutral-500 font-mono">
                              {v.id} • Owner: {v.owner}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-neutral-700">{v.category}</td>
                          <td className="py-3 px-3">
                            <span className="text-neutral-900 block">{v.city}</span>
                            <span className="font-mono text-[10px] text-neutral-500">{v.gstin}</span>
                          </td>
                          <td className="py-3 px-3 font-bold text-neutral-900">{v.commissionRate}</td>
                          <td className="py-3 px-3">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                                v.status === "Approved"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : v.status === "Pending Application"
                                  ? "bg-amber-50 text-amber-700 border-amber-300 animate-pulse"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }`}
                            >
                              {v.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => setSelectedVendor(v)}
                              className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-2.5 py-1 rounded text-xs font-bold cursor-pointer"
                            >
                              {v.status === "Pending Application" ? "Review Documents" : "Details"}
                            </button>
                            {v.status === "Pending Application" && (
                              <>
                                <button
                                  onClick={() => handleApproveVendor(v.id)}
                                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded text-xs font-bold cursor-pointer shadow-xs"
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={() => handleRejectVendor(v)}
                                  className="border border-red-300 text-red-600 hover:bg-red-50 px-2 py-1 rounded text-xs font-bold cursor-pointer"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: PRODUCT MANAGEMENT */}
          {activeTab === "products" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Product Catalog &amp; Moderation ({products.length})
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Review vendor product submissions before publishing publicly
                  </p>
                </div>
                <button
                  onClick={() => setIsAddProductModalOpen(true)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white font-heading font-black text-xs px-3.5 py-2 rounded-xl cursor-pointer shadow-xs flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <span className="material-symbols-outlined text-[16px]">add_circle</span>
                  <span>+ Add Product</span>
                </button>
              </div>

              {/* Product Status Filter Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: `All Products (${products.length})` },
                  { id: "Approved", label: `Approved (${products.filter((p) => p.status === "Approved").length})` },
                  { id: "Pending Approval", label: `Pending Review (${products.filter((p) => p.status === "Pending Approval").length})` },
                  { id: "Disabled", label: `Disabled (${products.filter((p) => p.status === "Disabled").length})` },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilterStatus(f.id)}
                    className={`px-3 py-1 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                      filterStatus === f.id
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 text-neutral-600 font-bold uppercase text-[10px] tracking-wider border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-3">Product Name</th>
                      <th className="py-3 px-3">Category</th>
                      <th className="py-3 px-3">Vendor / Mill</th>
                      <th className="py-3 px-3">Price</th>
                      <th className="py-3 px-3">Stock</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3 text-right">Moderation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {products
                      .filter((p) => (filterStatus === "all" ? true : p.status === filterStatus))
                      .map((p) => (
                        <tr key={p.id} className="hover:bg-neutral-50 transition-colors">
                          <td className="py-3 px-3">
                            <strong className="text-neutral-900 block font-bold">{p.name}</strong>
                            <span className="font-mono text-[10px] text-neutral-400">{p.id}</span>
                          </td>
                          <td className="py-3 px-3 text-neutral-700">{p.category}</td>
                          <td className="py-3 px-3 text-neutral-700">{p.vendor}</td>
                          <td className="py-3 px-3 font-mono font-bold text-neutral-950">₹{p.price}</td>
                          <td className="py-3 px-3 font-bold text-neutral-900">{p.stock} Cartons</td>
                          <td className="py-3 px-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                                p.status === "Approved"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : p.status === "Pending Approval"
                                  ? "bg-amber-50 text-amber-700 border-amber-300"
                                  : "bg-neutral-100 text-neutral-600"
                              }`}
                            >
                              {p.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
                            {p.status === "Pending Approval" ? (
                              <button
                                onClick={() => handleApproveProduct(p.id)}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded text-xs font-bold cursor-pointer"
                              >
                                Approve
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setProducts((prev) =>
                                    prev.map((item) =>
                                      item.id === p.id
                                        ? { ...item, status: item.status === "Approved" ? "Disabled" : "Approved" }
                                        : item
                                    )
                                  );
                                  showToast("Product status updated!");
                                }}
                                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-2 py-1 rounded text-xs font-bold cursor-pointer"
                              >
                                {p.status === "Approved" ? "Disable" : "Enable"}
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: CATEGORY MANAGEMENT */}
          {activeTab === "categories" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Category Hierarchy ({categories.length})
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Structure main categories, sub-categories, and landing banner assignments
                  </p>
                </div>
                <button
                  onClick={() => setIsAddCategoryModalOpen(true)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white font-heading font-black text-xs px-3.5 py-2 rounded-xl cursor-pointer shadow-xs flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <span className="material-symbols-outlined text-[16px]">add_circle</span>
                  <span>+ Add Category</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((c) => (
                  <div key={c.id} className="border border-neutral-200 rounded-2xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-black text-sm text-neutral-950">{c.name}</h4>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {c.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {c.subcategories.map((sub, i) => (
                        <span key={i} className="bg-neutral-100 text-neutral-700 text-[11px] px-2 py-0.5 rounded-md font-medium">
                          {sub}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] text-neutral-500 block pt-1 font-mono">
                      {c.productsCount} Active Wholesale Products
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: ORDER MANAGEMENT */}
          {activeTab === "orders" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Master Orders Dispatch &amp; Freight ({orders.length})
                  </h3>
                  <p className="text-xs text-neutral-500">
                    End-to-end order lifecycle tracking, waybill audits, and escrow lock status
                  </p>
                </div>
              </div>

              {/* Order Filter Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: `All Orders (${orders.length})` },
                  { id: "Processing", label: "Processing" },
                  { id: "Shipped", label: "Shipped" },
                  { id: "Out for Delivery", label: "Out for Delivery" },
                  { id: "Delivered", label: "Delivered" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setOrderFilterStatus(f.id)}
                    className={`px-3 py-1 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                      orderFilterStatus === f.id
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 text-neutral-600 font-bold uppercase text-[10px] tracking-wider border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-3">Order Details</th>
                      <th className="py-3 px-3">Buyer</th>
                      <th className="py-3 px-3">Vendor</th>
                      <th className="py-3 px-3">Amount</th>
                      <th className="py-3 px-3">Escrow Status</th>
                      <th className="py-3 px-3">Delivery Status</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {orders
                      .filter((o) => (orderFilterStatus === "all" ? true : o.orderStatus === orderFilterStatus))
                      .map((o) => (
                        <tr key={o.id} className="hover:bg-neutral-50 transition-colors">
                          <td className="py-3 px-3">
                            <strong className="font-mono text-neutral-950 block font-bold">{o.id}</strong>
                            <span className="text-[10px] text-neutral-400">{o.date}</span>
                          </td>
                          <td className="py-3 px-3 text-neutral-800 font-medium">{o.customer}</td>
                          <td className="py-3 px-3 text-neutral-800">{o.vendor}</td>
                          <td className="py-3 px-3 font-mono font-bold text-neutral-950">
                            ₹{o.amount.toLocaleString("en-IN")}
                          </td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-primary border border-blue-200">
                              {o.paymentStatus}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-300">
                              {o.orderStatus}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right whitespace-nowrap">
                            <button
                              onClick={() => setSelectedOrder(o)}
                              className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-2.5 py-1 rounded text-xs font-bold cursor-pointer"
                            >
                              Inspect
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 7: INVENTORY & STOCK */}
          {activeTab === "inventory" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <h3 className="text-lg font-black font-heading text-neutral-950">
                Centralized Warehouse Stock Monitoring
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <span className="text-xs text-emerald-800 font-bold block">Available Stock</span>
                  <strong className="text-2xl font-black text-emerald-950 font-heading">273 Cartons</strong>
                </div>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <span className="text-xs text-amber-800 font-bold block">Low Stock Alert</span>
                  <strong className="text-2xl font-black text-amber-950 font-heading">1 Lot (8 Cartons)</strong>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <span className="text-xs text-red-800 font-bold block">Out of Stock</span>
                  <strong className="text-2xl font-black text-red-950 font-heading">1 Lot (0 Cartons)</strong>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: PAYMENTS & TRANSACTIONS */}
          {activeTab === "payments" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <h3 className="text-lg font-black font-heading text-neutral-950 pb-2 border-b border-neutral-100">
                Financial Transactions &amp; Escrow Ledger
              </h3>
              <div className="space-y-2 text-xs">
                {orders.map((o) => (
                  <div key={o.id} className="p-3 bg-neutral-50 rounded-xl flex items-center justify-between">
                    <div>
                      <strong className="font-mono text-neutral-950 block">{o.id} • {o.customer}</strong>
                      <span className="text-[11px] text-neutral-500">{o.paymentMethod}</span>
                    </div>
                    <div className="text-right">
                      <strong className="font-mono text-sm text-neutral-950 block">₹{o.amount.toLocaleString("en-IN")}</strong>
                      <span className="text-[10px] text-emerald-600 font-bold">{o.paymentStatus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: VENDOR PAYOUTS */}
          {activeTab === "payouts" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black font-heading text-neutral-950">
                    Vendor Escrow Settlements (IMPS Approvals)
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Approve disbursements to verified supplier bank accounts
                  </p>
                </div>
              </div>

              <div className="divide-y divide-neutral-100">
                {payouts.map((p) => (
                  <div key={p.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="font-heading font-black text-sm text-neutral-900">{p.vendor}</strong>
                        <span className="font-mono text-[10px] text-neutral-400">{p.id}</span>
                      </div>
                      <span className="text-neutral-600 block">{p.bank} • {p.date}</span>
                      {p.utr && <span className="font-mono text-[10px] text-emerald-600 font-bold block">UTR: {p.utr}</span>}
                    </div>

                    <div className="flex items-center gap-3">
                      <strong className="font-mono text-base font-black text-neutral-950">
                        ₹{p.amount.toLocaleString("en-IN")}
                      </strong>
                      {p.status === "Pending Approval" ? (
                        <button
                          onClick={() => handleApprovePayout(p.id, p.amount)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs px-3.5 py-1.5 rounded-xl cursor-pointer shadow-xs"
                        >
                          Approve IMPS
                        </button>
                      ) : (
                        <span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                          {p.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: SALES & BUSINESS ANALYTICS */}
          {activeTab === "analytics" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <h3 className="text-lg font-black font-heading text-neutral-950">
                Platform Sales &amp; Growth Analytics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-neutral-50 rounded-xl">
                  <span className="text-xs text-neutral-500 block">Average Order Value (AOV)</span>
                  <strong className="text-xl font-black text-neutral-950 font-heading">₹28,640</strong>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl">
                  <span className="text-xs text-neutral-500 block">Platform Commission Earned</span>
                  <strong className="text-xl font-black text-purple-700 font-heading">₹1,46,760</strong>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl">
                  <span className="text-xs text-neutral-500 block">Refund Rate</span>
                  <strong className="text-xl font-black text-emerald-600 font-heading">0.32%</strong>
                </div>
              </div>
            </div>
          )}

          {/* TAB 11: MARKET INSIGHTS */}
          {activeTab === "market" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <h3 className="text-lg font-black font-heading text-neutral-950">
                Market Insights &amp; Customer Search Trends
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <strong className="text-emerald-900 block font-bold">Top Trending Search: "boAt TWS Earbuds ANC (20-Pack)"</strong>
                  <p className="text-emerald-800 text-[11px] mt-0.5">Surged by 320% this month across Maharashtra and Gujarat retailer accounts.</p>
                </div>
                <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
                  <strong className="text-blue-900 block font-bold">Top Volume FMCG: "20L Commercial Dishwash Canisters"</strong>
                  <p className="text-blue-800 text-[11px] mt-0.5">140 cartons ordered weekly by hospitality and canteen catering procurement.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 12: OFFERS & DISCOUNTS */}
          {activeTab === "offers" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <h3 className="text-lg font-black font-heading text-neutral-950">
                  Offers &amp; Coupon Codes ({offers.length})
                </h3>
                <button
                  onClick={() => setIsCreateOfferModalOpen(true)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl cursor-pointer flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  <span>+ Create Offer</span>
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {offers.map((off) => (
                  <div key={off.code} className="p-3 bg-neutral-50 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-mono font-black text-sm text-red-600 block">{off.code}</span>
                      <span className="text-neutral-600 text-[11px]">{off.discount} • Min Order: ₹{off.minOrder.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="text-right">
                      <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200 block mb-0.5">
                        {off.status}
                      </span>
                      <span className="text-[10px] text-neutral-400">Used {off.usageCount} times</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 13: REVIEWS & RATINGS */}
          {activeTab === "reviews" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-3">
              <h3 className="text-lg font-black font-heading text-neutral-950 pb-2 border-b border-neutral-100">
                Review Moderation Queue
              </h3>
              <p className="text-xs text-neutral-500">All customer wholesale ratings are reviewed for verification compliance.</p>
              <div className="p-3 bg-neutral-50 rounded-xl text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-neutral-900">Shree Balaji Traders on Dishwash 20L</strong>
                  <span className="text-amber-500 font-bold">★★★★★</span>
                </div>
                <p className="text-neutral-600">Great quality. Packaging was intact and arrived in 4 hours.</p>
                <span className="bg-emerald-100 text-emerald-800 font-bold text-[9px] px-1.5 py-0.2 rounded">
                  Approved
                </span>
              </div>
            </div>
          )}

          {/* TAB 14: CUSTOMER SUPPORT */}
          {activeTab === "support" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-neutral-100">
                <h3 className="text-lg font-black font-heading text-neutral-950">
                  Customer Support Tickets &amp; Disputes ({tickets.length})
                </h3>

                {/* Ticket Filter Chips */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { id: "all", label: "All" },
                    { id: "Open", label: "Open" },
                    { id: "In Progress", label: "In Progress" },
                    { id: "Resolved", label: "Resolved" },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setTicketFilterStatus(f.id)}
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-heading font-bold transition-all cursor-pointer ${
                        ticketFilterStatus === f.id
                          ? "bg-neutral-900 text-white"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {tickets
                  .filter((t) => (ticketFilterStatus === "all" ? true : t.status === ticketFilterStatus))
                  .map((t) => (
                    <div key={t.id} className="p-3.5 bg-neutral-50 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <strong className="text-neutral-950 font-bold">{t.subject}</strong>
                          <span className="font-mono text-[10px] text-neutral-400">{t.id}</span>
                        </div>
                        <span className="text-neutral-500 block text-[11px]">
                          Buyer: {t.customer} • {t.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-bold text-[10px] px-2 py-0.5 rounded-full ${
                            t.status === "Resolved"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-900"
                          }`}
                        >
                          {t.status}
                        </span>
                        {t.status !== "Resolved" && (
                          <button
                            onClick={() => {
                              setTickets((prev) =>
                                prev.map((item) => (item.id === t.id ? { ...item, status: "Resolved" } : item))
                              );
                              showToast(`Support Ticket ${t.id} marked as resolved! ✅`);
                            }}
                            className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-2.5 py-1 rounded text-xs cursor-pointer"
                          >
                            Resolve
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 15: NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <h3 className="text-lg font-black font-heading text-neutral-950">
                  Platform Broadcasts &amp; Alerts
                </h3>
                <button
                  onClick={() => setIsBroadcastModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl cursor-pointer"
                >
                  + New Broadcast
                </button>
              </div>
              <p className="text-xs text-neutral-500">Dispatch alerts to all buyers, all vendors, or target specific trade hubs.</p>
            </div>
          )}

          {/* TAB 16: WEBSITE / CMS MANAGEMENT */}
          {activeTab === "cms" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <h3 className="text-lg font-black font-heading text-neutral-950 pb-2 border-b border-neutral-100">
                Website &amp; CMS Content Management
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 border border-neutral-200 rounded-xl flex items-center justify-between">
                  <div>
                    <strong className="text-neutral-950 block font-bold">Homepage Hero Carousel Banner #1</strong>
                    <span className="text-neutral-500 text-[11px]">"India's #1 Wholesale B2B Procurement Mandi"</span>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Published
                  </span>
                </div>
                <div className="p-3.5 border border-neutral-200 rounded-xl flex items-center justify-between">
                  <div>
                    <strong className="text-neutral-950 block font-bold">0% Mandi Commission Announcement Strip</strong>
                    <span className="text-neutral-500 text-[11px]">Visible on Top Header Bar</span>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Active
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 17: REPORTS */}
          {activeTab === "reports" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <h3 className="text-lg font-black font-heading text-neutral-950 pb-2 border-b border-neutral-100">
                Platform Reports Generator &amp; Tax Exports
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { title: "Monthly Sales & GMV Report (Excel)", desc: "Complete order breakups with GST rates" },
                  { title: "GSTR-1 & TCS Invoicing Summary (PDF)", desc: "Govt compliant TCS 1% deduction report" },
                  { title: "Vendor Payouts & IMPS UTR Ledger", desc: "Settlement registry with bank account hashes" },
                  { title: "Freight Carrier Logistics Performance", desc: "Delhivery, VRL, TCI SLA fulfillment rates" },
                ].map((rep, i) => (
                  <div key={i} className="p-3.5 border border-neutral-200 rounded-xl flex items-center justify-between">
                    <div>
                      <strong className="text-neutral-950 block font-bold">{rep.title}</strong>
                      <span className="text-neutral-500 text-[11px]">{rep.desc}</span>
                    </div>
                    <button
                      onClick={() => showToast(`Generating & Downloading ${rep.title}... 📊`)}
                      className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-3 py-1.5 rounded-lg text-xs cursor-pointer shrink-0"
                    >
                      Export
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 18: ADMIN STAFF & RBAC */}
          {activeTab === "staff" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <h3 className="text-lg font-black font-heading text-neutral-950 pb-2 border-b border-neutral-100">
                Staff Accounts &amp; Role-Based Access Control (RBAC)
              </h3>
              <div className="space-y-2.5 text-xs">
                {[
                  { name: "Avishkar Sharma", role: "Super Admin", access: "Full Master Access to All 20 Modules" },
                  { name: "Priya Nair", role: "Product Manager", access: "Products + Categories + Inventory" },
                  { name: "Rahul Deshmukh", role: "Finance Manager", access: "Payments + Payouts + Reports" },
                  { name: "Sneha Patil", role: "Support Staff", access: "Customers + Tickets + Orders" },
                ].map((st, i) => (
                  <div key={i} className="p-3 bg-neutral-50 rounded-xl flex items-center justify-between">
                    <div>
                      <strong className="text-neutral-950 block font-bold">{st.name}</strong>
                      <span className="text-neutral-500 text-[11px]">{st.access}</span>
                    </div>
                    <span className="bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded-full border border-red-200">
                      {st.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 19: SECURITY & AUDIT LOGS */}
          {activeTab === "audit" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4">
              <h3 className="text-lg font-black font-heading text-neutral-950 pb-2 border-b border-neutral-100">
                System Security &amp; Audit Trail Logs
              </h3>
              <div className="divide-y divide-neutral-100 text-xs font-mono">
                {auditLogs.map((log) => (
                  <div key={log.id} className="py-2.5 flex items-center justify-between">
                    <div>
                      <strong className="text-neutral-900 font-bold">{log.admin}</strong>
                      <span className="text-neutral-600 block text-[11px]">
                        Action: <strong>{log.action}</strong> • Target: {log.target}
                      </span>
                    </div>
                    <div className="text-right text-[11px] text-neutral-500">
                      <span>IP: {log.ip}</span>
                      <span className="block text-[10px] text-neutral-400">{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 20: SYSTEM SETTINGS */}
          {activeTab === "settings" && (
            <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-4 text-xs">
              <h3 className="text-lg font-black font-heading text-neutral-950 pb-2 border-b border-neutral-100">
                Global Platform Settings &amp; Policies
              </h3>
              <div className="space-y-3 max-w-lg">
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                  <div>
                    <strong className="text-neutral-900 block font-bold">0% Mandi Vendor Commission Mode</strong>
                    <span className="text-neutral-500 text-[11px]">Waives commission fees for factory suppliers</span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-red-600 cursor-pointer" />
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                  <div>
                    <strong className="text-neutral-900 block font-bold">Mandatory B2B GSTIN Validation</strong>
                    <span className="text-neutral-500 text-[11px]">Enforces active GSTIN verification before checkout</span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-red-600 cursor-pointer" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL: BROADCAST ALERT */}
      {isBroadcastModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
              <h4 className="font-heading font-black text-base text-neutral-950">
                Dispatch Platform Broadcast
              </h4>
              <button
                onClick={() => setIsBroadcastModalOpen(false)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <form onSubmit={handleBroadcast} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Target Audience</label>
                <select
                  value={broadcastTarget}
                  onChange={(e) => setBroadcastTarget(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 bg-white"
                >
                  <option value="all">All Platform Users (Buyers + Vendors)</option>
                  <option value="customers">All B2B Retail Customers Only</option>
                  <option value="vendors">All Mandi Vendors Only</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-neutral-700 mb-1">Message Content</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Enter broadcast announcement..."
                  value={broadcastMsg}
                  onChange={(e) => setBroadcastMsg(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-heading font-black py-2.5 rounded-xl cursor-pointer"
              >
                Send Broadcast
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: CUSTOMER DETAILS INSPECTOR */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95 text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
              <h4 className="font-heading font-black text-sm text-neutral-950">
                Customer Details: {selectedCustomer.name}
              </h4>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
            <div className="space-y-1 text-neutral-700">
              <div>Company: <strong>{selectedCustomer.company}</strong></div>
              <div>GSTIN: <strong className="font-mono">{selectedCustomer.gstin}</strong></div>
              <div>Email: <strong>{selectedCustomer.email}</strong></div>
              <div>Phone: <strong>{selectedCustomer.phone}</strong></div>
              <div>Wallet Balance: <strong className="font-mono text-emerald-600">₹{selectedCustomer.walletBalance.toLocaleString("en-IN")}</strong></div>
              <div>Total Orders: <strong>{selectedCustomer.ordersCount}</strong></div>
              <div>Total Spend: <strong className="font-mono">₹{selectedCustomer.totalSpent.toLocaleString("en-IN")}</strong></div>
            </div>
            <button
              onClick={() => setSelectedCustomer(null)}
              className="w-full bg-neutral-900 text-white font-bold py-2 rounded-xl cursor-pointer mt-2"
            >
              Close Inspector
            </button>
          </div>
        </div>
      )}

      {/* MODAL: ORDER INSPECTOR */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95 text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
              <h4 className="font-heading font-black text-sm text-neutral-950">
                Order Inspector #{selectedOrder.id}
              </h4>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
            <div className="space-y-1 text-neutral-700">
              <div>Buyer: <strong>{selectedOrder.customer}</strong></div>
              <div>Vendor: <strong>{selectedOrder.vendor}</strong></div>
              <div>Lot: <strong>{selectedOrder.lot}</strong></div>
              <div>Total Amount: <strong className="font-mono text-neutral-950">₹{selectedOrder.amount.toLocaleString("en-IN")}</strong></div>
              <div>Payment: <strong>{selectedOrder.paymentMethod}</strong> ({selectedOrder.paymentStatus})</div>
              <div>Carrier: <strong>{selectedOrder.carrier}</strong> ({selectedOrder.waybill})</div>
            </div>
            <button
              onClick={() => {
                showToast(`Tax invoice generated for ${selectedOrder.id}! 📄`);
                setSelectedOrder(null);
              }}
              className="w-full bg-neutral-900 text-white font-bold py-2 rounded-xl cursor-pointer mt-2"
            >
              Download Tax Invoice
            </button>
          </div>
        </div>
      )}

      {/* MODAL: VENDOR PROFILE & DOCUMENT INSPECTOR (Section 5) */}
      {selectedVendor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                  <span className="material-symbols-outlined text-[20px]">store</span>
                </div>
                <div>
                  <h4 className="font-heading font-black text-sm text-neutral-950">
                    Vendor Dossier: {selectedVendor.shopName}
                  </h4>
                  <span className="font-mono text-[10px] text-neutral-400">ID: {selectedVendor.id}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedVendor(null)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            {/* Profile Overview */}
            <div className="grid grid-cols-2 gap-2 p-3 bg-neutral-50 rounded-xl text-neutral-700">
              <div>
                <span className="text-[10px] text-neutral-400 block font-bold uppercase">Owner Name</span>
                <strong className="text-neutral-900">{selectedVendor.owner}</strong>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 block font-bold uppercase">Category</span>
                <strong className="text-neutral-900">{selectedVendor.category}</strong>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 block font-bold uppercase">Location</span>
                <span className="text-neutral-900">{selectedVendor.city}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 block font-bold uppercase">Commission Rate</span>
                <strong className="text-emerald-700 font-bold">{selectedVendor.commissionRate}</strong>
              </div>
            </div>

            {/* Verified Regulatory Documents Section */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-neutral-900 block">
                Required Mandi &amp; Tax Documents:
              </span>
              <div className="space-y-1.5">
                <div className="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-emerald-600">verified</span>
                    <div>
                      <strong className="text-emerald-950 block">GSTIN Registration Certificate</strong>
                      <span className="font-mono text-[10px] text-emerald-700">{selectedVendor.gstin} (Active Govt Portal Record)</span>
                    </div>
                  </div>
                  <span className="bg-emerald-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">Verified</span>
                </div>

                <div className="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-emerald-600">verified</span>
                    <div>
                      <strong className="text-emerald-950 block">APMC Mandi Wholesale Trade License</strong>
                      <span className="font-mono text-[10px] text-emerald-700">MND-MH-2026-9042 (Valid till 2029)</span>
                    </div>
                  </div>
                  <span className="bg-emerald-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">Verified</span>
                </div>

                <div className="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-emerald-600">verified</span>
                    <div>
                      <strong className="text-emerald-950 block">Commercial Warehouse Proof &amp; Bank Mandate</strong>
                      <span className="font-mono text-[10px] text-emerald-700">HDFC Escrow Linked (Cancelled Cheque on File)</span>
                    </div>
                  </div>
                  <span className="bg-emerald-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">Verified</span>
                </div>
              </div>
            </div>

            {/* Application Actions */}
            <div className="pt-2 flex items-center gap-2">
              {selectedVendor.status === "Pending Application" ? (
                <>
                  <button
                    onClick={() => {
                      handleApproveVendor(selectedVendor.id);
                      setSelectedVendor(null);
                    }}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black py-2.5 rounded-xl cursor-pointer shadow-sm text-center"
                  >
                    ✓ Approve &amp; Activate Vendor
                  </button>
                  <button
                    onClick={() => {
                      setVendorToReject(selectedVendor);
                      setIsRejectReasonModalOpen(true);
                    }}
                    className="border border-red-300 text-red-600 hover:bg-red-50 font-heading font-bold py-2.5 px-4 rounded-xl cursor-pointer"
                  >
                    Reject with Reason
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setVendors((prev) =>
                        prev.map((v) =>
                          v.id === selectedVendor.id
                            ? { ...v, status: v.status === "Suspended" ? "Approved" : "Suspended" }
                            : v
                        )
                      );
                      showToast(`Vendor ${selectedVendor.shopName} account status toggled!`);
                      setSelectedVendor(null);
                    }}
                    className={`flex-1 py-2.5 rounded-xl font-heading font-bold cursor-pointer text-center ${
                      selectedVendor.status === "Suspended"
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                    }`}
                  >
                    {selectedVendor.status === "Suspended" ? "Reactivate Vendor" : "Suspend Vendor Account"}
                  </button>
                  <button
                    onClick={() => setSelectedVendor(null)}
                    className="border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-bold py-2.5 px-4 rounded-xl cursor-pointer"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: VENDOR REJECT REASON (Section 5: "Reject -> Reason Given") */}
      {isRejectReasonModalOpen && vendorToReject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <h4 className="font-heading font-black text-sm text-neutral-950">
                Reject Vendor Application
              </h4>
              <button
                onClick={() => setIsRejectReasonModalOpen(false)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <p className="text-neutral-600">
              Specify the compliance reason for rejecting <strong>{vendorToReject.shopName}</strong>. This official reason will be dispatched to the applicant.
            </p>

            <div className="space-y-2">
              <label className="block font-bold text-neutral-800">Select Common Reason or Type Custom:</label>
              {[
                "Incomplete Mandi Wholesale License or Tax mismatch",
                "GSTIN verification failed (Inactive status on GST Portal)",
                "Physical warehouse facility check did not meet standards",
                "Missing FSSAI Central Wholesale License for food category",
              ].map((r, i) => (
                <label key={i} className="flex items-start gap-2 p-2 rounded-lg hover:bg-neutral-50 cursor-pointer">
                  <input
                    type="radio"
                    name="rejectReasonChoice"
                    checked={rejectReason === r}
                    onChange={() => setRejectReason(r)}
                    className="mt-0.5 accent-red-600"
                  />
                  <span className="text-neutral-700">{r}</span>
                </label>
              ))}
              <textarea
                rows={2}
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="Or type custom rejection reason..."
                className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleConfirmRejectVendor}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-heading font-black py-2.5 rounded-xl cursor-pointer shadow-sm text-center"
              >
                Confirm Rejection &amp; Send Reason
              </button>
              <button
                onClick={() => setIsRejectReasonModalOpen(false)}
                className="border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-bold py-2.5 px-4 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: CREATE OFFER & COUPON (Section 14) */}
      {isCreateOfferModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <h4 className="font-heading font-black text-sm text-neutral-950">
                Create New Promotional Offer / Coupon
              </h4>
              <button
                onClick={() => setIsCreateOfferModalOpen(false)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <form onSubmit={handleCreateOffer} className="space-y-3">
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Coupon Code</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SAVE10, DIWALI500"
                  value={newOffer.code}
                  onChange={(e) => setNewOffer({ ...newOffer, code: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-xl uppercase font-mono font-bold focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Discount Value</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 10% Off, ₹500 Flat"
                    value={newOffer.discount}
                    onChange={(e) => setNewOffer({ ...newOffer, discount: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Min Order (₹)</label>
                  <input
                    type="number"
                    required
                    placeholder="5000"
                    value={newOffer.minOrder}
                    onChange={(e) => setNewOffer({ ...newOffer, minOrder: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Valid Until</label>
                  <input
                    type="text"
                    placeholder="30 Nov 2026"
                    value={newOffer.validUntil}
                    onChange={(e) => setNewOffer({ ...newOffer, validUntil: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Usage Limit</label>
                  <input
                    type="number"
                    placeholder="500"
                    value={newOffer.usageLimit}
                    onChange={(e) => setNewOffer({ ...newOffer, usageLimit: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-heading font-black py-2.5 rounded-xl cursor-pointer shadow-md mt-2"
              >
                Publish Coupon Code
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD CATEGORY (Section 7) */}
      {isAddCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <h4 className="font-heading font-black text-sm text-neutral-950">
                Add Wholesale Category
              </h4>
              <button
                onClick={() => setIsAddCategoryModalOpen(false)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <form onSubmit={handleAddCategory} className="space-y-3">
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Main Category Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Footwear & Shoes, Industrial Machinery"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 mb-1">
                  Sub-Categories (comma separated)
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Formal Shoes, Sports Shoes, Leather Chappals, Socks"
                  value={newCategory.subcategories}
                  onChange={(e) => setNewCategory({ ...newCategory, subcategories: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-heading font-black py-2.5 rounded-xl cursor-pointer shadow-md mt-2"
              >
                Create Category
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD PRODUCT LOT (Section 6) */}
      {isAddProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <h4 className="font-heading font-black text-sm text-neutral-950">
                Add Wholesale Product Lot
              </h4>
              <button
                onClick={() => setIsAddProductModalOpen(false)}
                className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-3">
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Product Lot Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Stainless Steel Insulated Casserole Set (12 Pcs)"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-xl bg-white"
                  >
                    <option>Daily Necessities & FMCG</option>
                    <option>Electronics & Audio Gadgets</option>
                    <option>Commercial Cookware & Dining</option>
                    <option>Artificial Jewellery & Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Mandi Vendor</label>
                  <select
                    value={newProduct.vendor}
                    onChange={(e) => setNewProduct({ ...newProduct, vendor: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-xl bg-white"
                  >
                    {vendors.map((v) => (
                      <option key={v.id}>{v.shopName}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    required
                    placeholder="1200"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">MRP (₹)</label>
                  <input
                    type="number"
                    placeholder="2400"
                    value={newProduct.mrp}
                    onChange={(e) => setNewProduct({ ...newProduct, mrp: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Initial Stock</label>
                  <input
                    type="number"
                    placeholder="50"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-heading font-black py-2.5 rounded-xl cursor-pointer shadow-md mt-2"
              >
                Publish Product Lot
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
