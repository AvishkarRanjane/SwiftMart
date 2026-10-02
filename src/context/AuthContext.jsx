import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const DEFAULT_USER = {
  name: "Avishkar Sharma",
  phone: "+91 98765 43210",
  email: "avishkar@swiftmart.in",
  avatar: "/images/hero-payday.jpg",
  isSuperSaver: true,
  coins: 540,
  gstin: "27AABCU9603R1ZM",
  company: "Balaji Wholesale Traders",
  // Unified Account Architecture
  role: "customer", // 'customer' | 'customer_vendor'
  isVendor: false, // Default is false (Customer). Becomes true after vendor approval.
  vendorStatus: "not_applied", // 'not_applied' | 'pending_review' | 'active'
  vendorDetails: {
    shopName: "Sharma Wholesale & Mandi Mills",
    category: "Daily Necessities & FMCG",
    city: "Surat, Gujarat",
    address: "Plot 42, GIDC Industrial Estate, Surat, Gujarat - 395023",
    gstin: "24AAECS9910D1Z2",
    description: "Direct manufacturer & bulk distributor of household cleaning, food staples & FMCG goods.",
    bankName: "HDFC Bank",
    accountNumber: "50200012345678",
    ifsc: "HDFC0001234",
    upiId: "sharmawholesale@okaxis",
    joinedDate: "October 2026",
  },
  walletBalance: 24500,
  walletTransactions: [
    {
      id: "TXN-8091",
      type: "credit",
      desc: "Wholesale Bulk Cashback (SWIFT100)",
      amount: 1500,
      date: "01 Oct 2026",
      status: "Completed",
    },
    {
      id: "TXN-8042",
      type: "debit",
      desc: "Order Payment #SW-89421",
      amount: 12000,
      date: "29 Sep 2026",
      status: "Completed",
    },
    {
      id: "TXN-7910",
      type: "credit",
      desc: "Mandi Escrow Refund #SW-87110",
      amount: 4800,
      date: "24 Sep 2026",
      status: "Completed",
    },
    {
      id: "TXN-7801",
      type: "credit",
      desc: "Added Money via UPI (Netbanking)",
      amount: 20000,
      date: "20 Sep 2026",
      status: "Completed",
    },
  ],
  addresses: [
    {
      id: "addr-1",
      type: "Primary Shop / Warehouse",
      name: "Avishkar Sharma (Balaji Traders)",
      phone: "+91 98765 43210",
      street: "APMC Market, Shed #14, Sector 19",
      city: "Navi Mumbai",
      state: "Maharashtra",
      pincode: "400703",
      isDefault: true,
    },
    {
      id: "addr-2",
      type: "Sub-Depot Warehouse",
      name: "Avishkar Sharma",
      phone: "+91 98765 43210",
      street: "Gala No 5, Bhiwandi Logistics Park",
      city: "Thane",
      state: "Maharashtra",
      pincode: "421302",
      isDefault: false,
    },
  ],
  notifications: [
    {
      id: "notif-1",
      title: "Order #SW-89421 Out for Delivery",
      description: "Delhivery Heavy Cargo vehicle MH-04-AZ-8821 will arrive at your dock today by 4:30 PM.",
      time: "10 mins ago",
      unread: true,
      icon: "local_shipping",
      type: "order",
    },
    {
      id: "notif-2",
      title: "Diwali Wholesale Mandi 0% Fee Live",
      description: "Special zero commission for all verified factory sellers this festive season.",
      time: "2 hours ago",
      unread: true,
      icon: "campaign",
      type: "promo",
    },
    {
      id: "notif-3",
      title: "₹1,500 Credited to Wallet",
      description: "Promotional cashback credited for high-volume detergent bulk procurement.",
      time: "1 day ago",
      unread: false,
      icon: "account_balance_wallet",
      type: "wallet",
    },
  ],
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("swiftmart_user_unified_v1");
      return saved ? JSON.parse(saved) : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  const [authTab, setAuthTab] = useState("otp"); // 'otp' | 'password'

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("swiftmart_user_unified_v1", JSON.stringify(user));
      } else {
        localStorage.removeItem("swiftmart_user_unified_v1");
      }
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  // Submit Vendor Application
  const applyForVendor = (applicationData) => {
    setUser((prev) => {
      const updated = {
        ...prev,
        vendorStatus: "active", // Auto-activate upon application for seamless UX
        isVendor: true,
        role: "customer_vendor",
        vendorDetails: {
          ...prev.vendorDetails,
          ...applicationData,
        },
      };
      return updated;
    });
  };

  // Explicit Activation
  const activateVendor = (vendorDetails = {}) => {
    setUser((prev) => ({
      ...prev,
      isVendor: true,
      vendorStatus: "active",
      role: "customer_vendor",
      vendorDetails: {
        ...prev.vendorDetails,
        ...vendorDetails,
      },
    }));
  };

  // Quick toggle between Customer-only and Customer+Vendor states
  const toggleVendorStatus = () => {
    setUser((prev) => {
      const nextIsVendor = !prev.isVendor;
      return {
        ...prev,
        isVendor: nextIsVendor,
        vendorStatus: nextIsVendor ? "active" : "not_applied",
        role: nextIsVendor ? "customer_vendor" : "customer",
      };
    });
  };

  // Wallet operations
  const addWalletMoney = (amount) => {
    const num = Number(amount);
    if (!num || num <= 0) return;
    setUser((prev) => ({
      ...prev,
      walletBalance: prev.walletBalance + num,
      walletTransactions: [
        {
          id: "TXN-" + Math.floor(1000 + Math.random() * 9000),
          type: "credit",
          desc: "Added Money via UPI / Netbanking",
          amount: num,
          date: "Today, Just now",
          status: "Completed",
        },
        ...prev.walletTransactions,
      ],
    }));
  };

  // Profile update
  const updateProfile = (profileData) => {
    setUser((prev) => ({
      ...prev,
      ...profileData,
    }));
  };

  const loginWithPhone = (phone) => {
    const newUser = {
      ...DEFAULT_USER,
      phone: phone || DEFAULT_USER.phone,
    };
    setUser(newUser);
    return newUser;
  };

  const loginWithSocial = (provider) => {
    const newUser = {
      ...DEFAULT_USER,
      name: provider === "google" ? "Avishkar (Google)" : "Avishkar (Apple)",
      email: provider === "google" ? "avishkar@gmail.com" : "avishkar@icloud.com",
    };
    setUser(newUser);
    return newUser;
  };

  const registerUser = ({ name, phone, email }) => {
    const newUser = {
      ...DEFAULT_USER,
      name: name || DEFAULT_USER.name,
      phone: phone || DEFAULT_USER.phone,
      email: email || DEFAULT_USER.email,
      isVendor: false,
      role: "customer",
      vendorStatus: "not_applied",
    };
    setUser(newUser);
    return newUser;
  };

  const login = (userData) => {
    setUser((prev) => ({
      ...prev,
      ...userData,
    }));
  };

  const logout = () => {
    // Reset to a clean customer profile
    setUser({
      ...DEFAULT_USER,
      isVendor: false,
      role: "customer",
      vendorStatus: "not_applied",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        authTab,
        setAuthTab,
        applyForVendor,
        activateVendor,
        toggleVendorStatus,
        addWalletMoney,
        updateProfile,
        login,
        loginWithPhone,
        loginWithSocial,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
