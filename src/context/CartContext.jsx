import React, { createContext, useContext, useState, useEffect } from "react";
import { PINCODES } from "../data/products";

const CartContext = createContext();

const INITIAL_CART = [
  {
    id: "fortune-oil",
    name: "Fortune Sunlite Refined Sunflower Oil",
    pack: "Cooking Essentials • 1L Pouch",
    price: 118,
    originalPrice: 160,
    discount: "26% OFF",
    qty: 1,
    image: "/images/oil-1.jpg",
  },
  {
    id: "atta-5kg",
    name: "Aashirvaad Sharbati Whole Wheat Atta",
    pack: "5 kg Value Bag",
    price: 265,
    originalPrice: 320,
    discount: "17% OFF",
    qty: 1,
    image: "/images/atta-1.jpg",
  },
  {
    id: "boat-141-anc",
    name: "boAt Airdopes 141 ANC True Wireless",
    pack: "Electronics • Gunmetal Black",
    price: 1299,
    originalPrice: 4990,
    discount: "74% OFF",
    qty: 1,
    image: "/images/boat-1.jpg",
  },
];

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("swiftmart_cart_v2");
      return saved ? JSON.parse(saved) : INITIAL_CART;
    } catch {
      return INITIAL_CART;
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("swiftmart_wishlist_v2");
      return saved
        ? JSON.parse(saved)
        : ["boat-141-anc", "fortune-oil", "sony-wh1000xm5"];
    } catch {
      return ["boat-141-anc", "fortune-oil", "sony-wh1000xm5"];
    }
  });

  const [appliedPromo, setAppliedPromo] = useState({
    code: "SWIFT100",
    discount: 100,
    label: "Extra ₹100 unlocked via Welcome Offer",
  });

  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });
  const [selectedPincode, setSelectedPincode] = useState(PINCODES[0]);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [lastOrderDetails, setLastOrderDetails] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("swiftmart_cart_v2", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("swiftmart_wishlist_v2", JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (message, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.shortName || product.name,
          pack: product.pack || "Standard Pack",
          price: product.price,
          originalPrice:
            product.originalPrice || Math.round(product.price * 1.3),
          discount: product.discount || "SuperSaver",
          image: product.image || (product.images ? product.images[0] : ""),
          qty: quantity,
        },
      ];
    });
    showToast(`${product.shortName || product.name} added to cart! 🛒`);
  };

  const updateQty = (productId, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    const item = cart.find((i) => i.id === productId);
    setCart((prev) => prev.filter((i) => i.id !== productId));
    if (item) {
      showToast(`${item.name} removed from cart`);
    }
  };

  const getItemQty = (productId) => {
    const item = cart.find((i) => i.id === productId);
    return item ? item.qty : 0;
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromo = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === "SWIFT100") {
      setAppliedPromo({
        code: "SWIFT100",
        discount: 100,
        label: "₹100 Super Discount Applied",
      });
      showToast("Promo SWIFT100 applied! ₹100 saved ✅");
      return true;
    } else if (clean === "SWIFT10") {
      setAppliedPromo({
        code: "SWIFT10",
        discount: 150,
        label: "10% Flash Discount (₹150 OFF)",
      });
      showToast("Promo SWIFT10 applied! ₹150 saved ✅");
      return true;
    } else if (clean === "SWIFTANC") {
      setAppliedPromo({
        code: "SWIFTANC",
        discount: 300,
        label: "Audio SuperDeal (₹300 OFF)",
      });
      showToast("Promo SWIFTANC applied! ₹300 saved ✅");
      return true;
    } else if (clean === "SUPER15") {
      setAppliedPromo({
        code: "SUPER15",
        discount: 50,
        label: "DMart Saver (₹50 OFF)",
      });
      showToast("Promo SUPER15 applied! ₹50 saved ✅");
      return true;
    } else {
      showToast("Invalid promo code. Try SWIFT100 or SWIFT10", "error");
      return false;
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    showToast("Promo coupon removed");
  };

  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const mrpTotal = cart.reduce(
    (sum, item) => sum + (item.originalPrice || item.price) * item.qty,
    0,
  );
  const baseSavings = mrpTotal - subtotal;
  const promoDiscount = appliedPromo ? appliedPromo.discount : 0;
  const deliveryFee = subtotal > 499 || subtotal === 0 ? 0 : 29;
  const platformFee = subtotal > 0 ? 5 : 0;
  const grandTotal = Math.max(
    0,
    subtotal - promoDiscount + deliveryFee + platformFee,
  );
  const totalSavings = baseSavings + promoDiscount;

  // Wishlist Actions
  const isInWishlist = (productId) => wishlist.includes(productId);

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast("Removed from Wishlist");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Saved to Wishlist ❤️");
        return [...prev, productId];
      }
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
    showToast("Removed from Wishlist");
  };

  const clearWishlist = () => {
    setWishlist([]);
    showToast("Wishlist cleared");
  };

  const moveWishlistToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
    showToast(`Moved ${product.shortName || product.name} to Basket 🛒`);
  };

  const checkoutOrder = () => {
    if (cart.length === 0) {
      showToast("Your basket is empty! Add items first.", "error");
      return false;
    }
    const orderInfo = {
      orderId: "SWM-" + Math.floor(100000 + Math.random() * 900000),
      items: [...cart],
      totalPaid: grandTotal,
      pincode: selectedPincode.code,
      deliveryAddress: `Flat 402, Green Glen Towers, ${selectedPincode.area}, ${selectedPincode.city}`,
      placedAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      eta: "14 Mins",
    };
    setLastOrderDetails(orderInfo);
    setIsOrderSuccessOpen(true);
    clearCart();
    return true;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeFromCart,
        getItemQty,
        clearCart,
        wishlist,
        wishlistCount: wishlist.length,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist,
        moveWishlistToCart,
        appliedPromo,
        applyPromo,
        removePromo,
        itemCount,
        subtotal,
        mrpTotal,
        baseSavings,
        promoDiscount,
        deliveryFee,
        platformFee,
        grandTotal,
        totalSavings,
        selectedPincode,
        setSelectedPincode,
        toast,
        showToast,
        isOrderSuccessOpen,
        setIsOrderSuccessOpen,
        lastOrderDetails,
        checkoutOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
