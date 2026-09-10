import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("swiftmart_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [authTab, setAuthTab] = useState("otp"); // 'otp' | 'password'

  const loginWithPhone = (phone) => {
    const newUser = {
      name: "Avishkar Sharma",
      phone: phone || "9876543210",
      email: "avishkar@swiftmart.in",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-eLD1Wn0pjPxGr6ynxNDXkYQiIoiDUa8p82OaOxYHAWnHDdGE0PVrd-PT8ztQxao5oSmNQNNWLTJW4KQwvMyd3XSMVYkjYLX7HdimGAKhPXdyGWQDPMXVyjVLUBSWkkWthC3B0IC7_7ECitqSDqwCwdz-wLQgZMJSioHb1J-vglfzbR_hIXjC6j1TeUxFqLUiAl5WZpg9nDXALX1qFm1GqWs30Q4cRkR8G_Sk9RGTja9JNJ_cnTys",
      isSuperSaver: true,
      coins: 340,
    };
    setUser(newUser);
    try {
      localStorage.setItem("swiftmart_user", JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }
    return newUser;
  };

  const loginWithSocial = (provider) => {
    const newUser = {
      name: provider === "google" ? "Avishkar (Google)" : "Avishkar (Apple)",
      phone: "9876543210",
      email:
        provider === "google" ? "avishkar@gmail.com" : "avishkar@icloud.com",
      isSuperSaver: true,
      coins: 500,
    };
    setUser(newUser);
    try {
      localStorage.setItem("swiftmart_user", JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }
    return newUser;
  };

  const registerUser = ({ name, phone, email, password, referralCode }) => {
    const newUser = {
      name: name || "New Swift Shopper",
      phone: phone || "9876543210",
      email: email || "shopper@swiftmart.in",
      avatar: "/images/oneplus-2.jpg",
      isSuperSaver: true,
      coins: referralCode ? 500 : 250,
      referralCode: referralCode || null,
    };
    setUser(newUser);
    try {
      localStorage.setItem("swiftmart_user", JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }
    return newUser;
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("swiftmart_user");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        authTab,
        setAuthTab,
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
