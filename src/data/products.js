export const CATEGORIES = [
  {
    id: "grocery",
    name: "Grocery & Staples",
    count: "10 items",
    badge: "15-Min Delivery",
    image: "/images/atta-2.jpg",
    description:
      "Daily fresh kitchen essentials, premium grains, pulses & oils",
  },
  {
    id: "electronics",
    name: "Electronics & Audio",
    count: "10 items",
    badge: "SuperSaver",
    image: "/images/boat-1.jpg",
    description:
      "Noise cancelling earbuds, studio headphones, speakers & powerbanks",
  },
  {
    id: "dmart-packs",
    name: "DMart Value Packs",
    count: "10 items",
    badge: "Wholesale Rate",
    image: "/images/surfexcel-1.jpg",
    description: "Bulk family cleaning essentials, detergents & personal care",
  },
  {
    id: "gadgets",
    name: "Smart Gadgets & Hardware",
    count: "10 items",
    badge: "Flagship Tech",
    image: "/images/mouse-black.jpg",
    description:
      "Ergonomic mice, Dolby soundbars, mechanical keyboards & GaN chargers",
  },
  {
    id: "furniture",
    name: "Furniture & Decor",
    count: "15 items",
    badge: "Trending Deals",
    image: "/images/furniture/shoe-rack.jpg",
    description: "Solid wood furniture, ergonomic chairs, luxury beds & storage",
  },
  {
    id: "wishlist",
    name: "Wishlist & Lifestyle",
    count: "15 items",
    badge: "Most Loved",
    image: "/images/deal-apparel.jpg",
    description: "Trending fashion, luxury beauty, lifestyle apparel & curated picks",
  },
  {
    id: "top-value",
    name: "Top Value Deals",
    count: "15 items",
    badge: "Value Zone",
    image: "/images/deal-earrings.jpg",
    description: "Budget-friendly lifestyle finds, home utilities & daily essentials",
  },
  {
    id: "gadgets-appliances",
    name: "Trending Gadgets & Appliances",
    count: "15 items",
    badge: "Smart Living",
    image: "/images/deal-mixer.jpg",
    description: "High-performance kitchen appliances, personal groomers & home smart gadgets",
  },
  {
    id: "skincare-haircare",
    name: "Hair & Skincare Essentials",
    count: "15 items",
    badge: "Pure Glow",
    image: "/images/deal-facewash.jpg",
    description: "Dermatologist-tested face washes, herbal hair oils, serums & grooming essentials",
  },
  {
    id: "fashion-deals",
    name: "Best Value Deals on Fashion",
    count: "15 items",
    badge: "Trendsetter",
    image: "/images/deal-sneakers.jpg",
    description: "Trending sneakers, festive anarkali kurtas, party gowns & everyday casuals",
  },
  {
    id: "popular-nearby",
    name: "Popular Nearby (15-Min Express)",
    count: "15 items",
    badge: "15-Min Express",
    image: "/images/lemons.jpg",
    description: "Farm fresh fruits, daily organic dairy, grains & instant pantry delivery in 15 mins",
  },
];

export const PRODUCTS = [
  // ==========================================
  // CATEGORY 1: GROCERY & STAPLES (10 Items)
  // ==========================================
  {
    id: "atta-5kg",
    name: "Aashirvaad Superior MP Sharbati Whole Wheat Atta",
    shortName: "Aashirvaad Sharbati Atta",
    brand: "Aashirvaad",
    pack: "5 kg Value Bag",
    category: "grocery",
    tag: "SHARBATI",
    price: 265,
    originalPrice: 320,
    discount: "17% OFF",
    rating: 4.8,
    ratingsCount: "28,450 Ratings",
    reviewsCount: "3,820 Reviews",
    badge: "Top Seller",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "100% Sharbati wheat grains from Madhya Pradesh. Slow stone-ground chakki process for ultra-soft rotis.",
    image: "/images/atta-1.jpg",
    images: ["/images/atta-1.jpg", "/images/atta-2.jpg"],
    variantType: "pack",
    variants: [
      { name: "5 kg Bag", price: 265, orig: 320, image: "/images/atta-1.jpg" },
      {
        name: "10 kg Family Saver",
        price: 510,
        orig: 620,
        image: "/images/atta-2.jpg",
      },
    ],
    offers: [
      {
        title: "DMart Rate Match",
        desc: "Guaranteed lowest wheat flour rate across retail darkstores",
      },
      { title: "Bank Offer", desc: "Extra ₹30 OFF with SwiftPay UPI" },
    ],
    highlights: [
      "Crafted using only 100% Madhya Pradesh Sharbati golden wheat grains",
      "Traditional slow stone-ground chakki method preserves grain fibers & nutrients",
      "Rotis absorb more water and remain soft, fluffy, and fresh for over 8 hours",
      "Zero added maida, preservatives, or artificial bleaching agents",
    ],
    specs: [
      { label: "Grain Variety", val: "100% Pure MP Sharbati Wheat" },
      { label: "Milling Type", val: "Traditional Slow Chakki Ground" },
      { label: "Dietary Info", val: "High Dietary Fiber • 0% Maida" },
      { label: "Shelf Life", val: "90 Days from Milling Date" },
      { label: "Country of Origin", val: "India" },
    ],
    inTheBox: [
      "1x Aashirvaad Superior MP Sharbati Whole Wheat Atta (5 kg Sealed Bag)",
      "Quality Assurance Certificate & Moisture Barrier Seal",
    ],
    reviews: [
      {
        author: "Kavita R.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment:
          "Rotis stay extraordinarily soft for over 8 hours! Best chakki atta in market.",
      },
      {
        author: "Suresh P.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment:
          "Super fast 14-min delivery by SwiftMart. Packaging was clean and sealed.",
      },
    ],
  },
  {
    id: "fortune-oil",
    name: "Fortune Sunlite Refined Sunflower Cooking Oil",
    shortName: "Fortune Sunflower Oil",
    brand: "Fortune",
    pack: "1 Litre Pouch",
    category: "grocery",
    tag: "HEART HEALTH",
    price: 118,
    originalPrice: 160,
    discount: "26% OFF",
    rating: 4.7,
    ratingsCount: "19,840 Ratings",
    reviewsCount: "2,410 Reviews",
    badge: "DMart Rate",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Light and healthy cooking oil fortified with Vitamins A & D. Low absorption technology for crispy foods.",
    image: "/images/oil-1.jpg",
    images: ["/images/oil-1.jpg", "/images/oil-2.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "1 Litre Pouch",
        price: 118,
        orig: 160,
        image: "/images/oil-1.jpg",
      },
      {
        name: "5 Litre Jerry Can",
        price: 575,
        orig: 790,
        image: "/images/oil-2.jpg",
      },
    ],
    offers: [
      {
        title: "DMart Wholesale Combo",
        desc: "Buy 5L Jerry can and save additional ₹215",
      },
      {
        title: "Zero Cholesterol Tag",
        desc: "Certified heart friendly cooking oil",
      },
    ],
    highlights: [
      "Enriched with Vitamins A, D, and E for holistic daily wellness",
      "Low oil absorb technology keeps fried treats light and non-greasy",
      "High smoke point ideal for Indian tadka, sautéing, and deep frying",
      "Crystal clear light golden refining with neutral aroma",
    ],
    specs: [
      { label: "Oil Type", val: "Refined Sunflower Seed Oil" },
      { label: "Fortification", val: "Vitamin A, Vitamin D & Vitamin E" },
      { label: "Processing", val: "Multi-stage Vacuum Deodorized" },
      {
        label: "Storage",
        val: "Store in cool, dry place away from direct sunlight",
      },
    ],
    inTheBox: [
      "1x Fortune Sunlite Refined Sunflower Oil (1 Litre Leakproof Pouch)",
    ],
    reviews: [
      {
        author: "Anita G.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment:
          "Very light on the stomach. Does not make pakoras oily. Delivered in 12 mins!",
      },
      {
        author: "Vikram N.",
        stars: "★★★★☆",
        date: "Verified 5 days ago",
        comment: "Great price match compared to local supermarkets.",
      },
    ],
  },
  {
    id: "tata-tea",
    name: "Tata Tea Gold Fragrant Leaf & CTC Tea",
    shortName: "Tata Tea Gold",
    brand: "Tata Tea",
    pack: "500g Fresh Pack",
    category: "grocery",
    tag: "AROMATIC",
    price: 285,
    originalPrice: 370,
    discount: "23% OFF",
    rating: 4.8,
    ratingsCount: "32,100 Ratings",
    reviewsCount: "4,190 Reviews",
    badge: "Wholesale Value",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Unique blend of Assam valley CTC granules with gently rolled aromatic long tea leaves.",
    image: "/images/tea-1.jpg",
    images: ["/images/tea-1.jpg", "/images/goodday.jpg"],
    variantType: "pack",
    variants: [
      { name: "500g Pouch", price: 285, orig: 370, image: "/images/tea-1.jpg" },
      {
        name: "1 kg Value Pack",
        price: 540,
        orig: 720,
        image: "/images/tea-1.jpg",
      },
    ],
    offers: [
      {
        title: "Morning Chai Offer",
        desc: "Complimentary Britannia Good Day biscuits with 1kg pack",
      },
      {
        title: "Card Savings",
        desc: "5% cashback on Axis and SBI Credit Cards",
      },
    ],
    highlights: [
      "Rich blend of 85% full-bodied Assam CTC and 15% long orthodox leaf",
      "Creates exquisite golden liquor and intense morning aroma",
      "Leaves unroll in boiling milk to release authentic garden freshness",
      "Packed in nitrogen flushed triple layer foil",
    ],
    specs: [
      { label: "Leaf Grade", val: "Assam CTC granules with 15% Long Leaves" },
      { label: "Origin", val: "Assam High Elevations" },
      {
        label: "Brew Recommendation",
        val: "Boil with milk and ginger/cardamom",
      },
      { label: "Net Quantity", val: "500 grams" },
    ],
    inTheBox: [
      "1x Tata Tea Gold Fragrant Leaf Tea (500g Moisture-proof Pouch)",
    ],
    reviews: [
      {
        author: "Deepak V.",
        stars: "★★★★★",
        date: "Verified yesterday",
        comment:
          "The aroma when boiling this tea fills the entire kitchen. Top quality!",
      },
      {
        author: "Meena K.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment: "Pure Assam taste, strong color and fragrance.",
      },
    ],
  },
  {
    id: "amul-butter",
    name: "Amul Pasteurised Pure Milk Salted Butter",
    shortName: "Amul Salted Butter",
    brand: "Amul",
    pack: "500g Tub",
    category: "grocery",
    tag: "PURE DAIRY",
    price: 275,
    originalPrice: 295,
    discount: "7% OFF",
    rating: 4.9,
    ratingsCount: "45,800 Ratings",
    reviewsCount: "6,200 Reviews",
    badge: "Utterly Delicious",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "The classic Taste of India butter made from fresh dairy cream. Delivered in insulated cold bags.",
    image: "/images/butter-1.jpg",
    images: ["/images/butter-1.jpg", "/images/lemons.jpg"],
    variantType: "pack",
    variants: [
      { name: "100g Bar", price: 56, orig: 60, image: "/images/butter-1.jpg" },
      {
        name: "500g Family Tub",
        price: 275,
        orig: 295,
        image: "/images/butter-1.jpg",
      },
    ],
    offers: [
      {
        title: "Chilled Cold Chain Guarantee",
        desc: "Packed in temperature controlled thermal darkstore pouch",
      },
      {
        title: "Dairy Combo",
        desc: "Save ₹20 when bought with Whole Wheat Bread",
      },
    ],
    highlights: [
      "100% pure cow & buffalo milk cream churned to perfection",
      "Contains no synthetic emulsifiers or vegetable hydrogenated fats",
      "Signature rich salted taste loved across generations in India",
      "Shipped directly in insulated thermal pouches to prevent melting",
    ],
    specs: [
      { label: "Fat Content", val: "80% Milk Fat Minimum" },
      { label: "Salt Content", val: "Pasteurized with 2.5% Table Salt" },
      { label: "Storage Temperature", val: "Keep refrigerated below 4°C" },
    ],
    inTheBox: [
      "1x Amul Pasteurised Salted Butter (500g Tub with freshness seal)",
    ],
    reviews: [
      {
        author: "Aman T.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment:
          "Arrived chilled and perfectly firm in Bangalore heat within 11 mins!",
      },
      {
        author: "Radha S.",
        stars: "★★★★★",
        date: "Verified 6 days ago",
        comment: "Nothing beats Amul butter on hot parathas and toast.",
      },
    ],
  },
  {
    id: "maggi-noodles",
    name: "Maggi 2-Minute Masala Instant Noodles",
    shortName: "Maggi Masala Noodles",
    brand: "Nestle",
    pack: "Pack of 12 (840g)",
    category: "grocery",
    tag: "INSTANT MEAL",
    price: 144,
    originalPrice: 168,
    discount: "14% OFF",
    rating: 4.8,
    ratingsCount: "58,900 Ratings",
    reviewsCount: "7,800 Reviews",
    badge: "Midnight Craving",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "India's favorite 2-minute snack with authentic roasted spices and herbs tastemaker.",
    image: "/images/maggi-1.jpg",
    images: ["/images/maggi-1.jpg", "/images/atta-1.jpg"],
    variantType: "pack",
    variants: [
      { name: "Pack of 6", price: 78, orig: 90, image: "/images/maggi-1.jpg" },
      {
        name: "Pack of 12 Saver",
        price: 144,
        orig: 168,
        image: "/images/maggi-1.jpg",
      },
    ],
    offers: [
      { title: "Quick Snack Deal", desc: "Flat ₹24 off on 12-pack value box" },
      {
        title: "Midnight Rush",
        desc: "Available for delivery 24 hours round the clock",
      },
    ],
    highlights: [
      "Authentic Tastemaker enriched with 10 roasted Indian spices and herbs",
      "Source of Iron & Vitamin A with wholesome wheat noodles",
      "Cooks in 2 minutes for late night cravings, breakfasts, and study breaks",
    ],
    specs: [
      { label: "Flavour", val: "Authentic Masala Magic" },
      { label: "Pack Size", val: "12 units x 70g = 840g total" },
      { label: "Cooking Time", val: "2 Minutes in boiling water" },
    ],
    inTheBox: [
      "1x Maggi Masala Instant Noodles (Pack of 12 noodle cakes + 12 tastemaker sachets)",
    ],
    reviews: [
      {
        author: "Pranav M.",
        stars: "★★★★★",
        date: "Verified yesterday",
        comment:
          "Ordered at 1:30 AM during coding session, delivered in 13 minutes!",
      },
    ],
  },
  {
    id: "icecream-tub",
    name: "Kwality Wall's Dark Belgian Chocolate Ice Cream",
    shortName: "Belgian Chocolate Ice Cream",
    brand: "Kwality Wall's",
    pack: "750 ml Tub (BOGO)",
    category: "grocery",
    tag: "RICH CHOCOLATE",
    price: 169,
    originalPrice: 250,
    discount: "32% OFF",
    rating: 4.7,
    ratingsCount: "9,420 Ratings",
    reviewsCount: "1,120 Reviews",
    badge: "Buy 1 Get 1",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Heavenly dark chocolate ice cream loaded with chocolate truffle chunks and rich fudge swirl.",
    image: "/images/icecream-1.jpg",
    images: ["/images/icecream-1.jpg", "/images/butter-1.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "500 ml Tub",
        price: 169,
        orig: 250,
        image: "/images/icecream-1.jpg",
      },
      {
        name: "750 ml BOGO Tub",
        price: 249,
        orig: 499,
        image: "/images/icecream-1.jpg",
      },
    ],
    offers: [
      {
        title: "BOGO Offer",
        desc: "Buy 1 Get 1 Free tub automatically included in package",
      },
      {
        title: "Dry Ice Pack",
        desc: "Shipped with frozen gel pack to prevent melting",
      },
    ],
    highlights: [
      "Infused with imported 70% dark Belgian cocoa powder",
      "Loaded with crunchy chocolate drops and gooey brownie ripples",
      "100% real dairy cream base with zero trans fats",
    ],
    specs: [
      { label: "Cocoa Source", val: "Imported Belgian Dark Cocoa" },
      { label: "Volume", val: "750 ml + 750 ml BOGO Promo Tub" },
      { label: "Storage", val: "Keep frozen at -18°C" },
    ],
    inTheBox: [
      "2x Kwality Wall's Dark Belgian Chocolate Ice Cream Tubs (750ml each)",
      "Frozen Gel Pouch Insulation",
    ],
    reviews: [
      {
        author: "Rohan D.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment:
          "Arrived completely frozen solid, no melt whatsoever. Best dark chocolate taste!",
      },
    ],
  },
  {
    id: "dryfruits-mix",
    name: "Royal California Whole Almonds & Jumbo Cashews Jar",
    shortName: "Almonds & Cashews Jar",
    brand: "Royal Harvest",
    pack: "500 g Airtight Jar",
    category: "grocery",
    tag: "SUPERFOOD",
    price: 449,
    originalPrice: 799,
    discount: "44% OFF",
    rating: 4.8,
    ratingsCount: "14,800 Ratings",
    reviewsCount: "1,980 Reviews",
    badge: "SuperSaver",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Premium handpicked California Nonpareil almonds and jumbo Goa W320 cashews in reusable jar.",
    image: "/images/dryfruits-1.jpg",
    images: ["/images/dryfruits-1.jpg", "/images/atta-1.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "250g Jar",
        price: 240,
        orig: 420,
        image: "/images/dryfruits-1.jpg",
      },
      {
        name: "500g Luxury Jar",
        price: 449,
        orig: 799,
        image: "/images/dryfruits-1.jpg",
      },
    ],
    offers: [
      { title: "Dry Fruit Fest", desc: "Extra ₹50 off with coupon FIRST50" },
      { title: "Packaging", desc: "Re-usable PET airtight jar included" },
    ],
    highlights: [
      "100% raw, unroasted, and unsalted California Nonpareil nuts",
      "Zero broken bits, uniform jumbo sizes, and crunch guarantee",
      "Packed with Omega-3, Vitamin E, protein, and heart-healthy minerals",
    ],
    specs: [
      { label: "Nut Grades", val: "Nonpareil Almonds & Goa W320 Cashews" },
      { label: "Packaging", val: "Nitrogen flushed vacuum sealed PET jar" },
    ],
    inTheBox: [
      "1x Royal Harvest Whole Almonds & Cashews (500g Airtight Clear Jar)",
    ],
    reviews: [
      {
        author: "Amit S.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Super fresh and crunchy! No broken pieces. 5 stars.",
      },
    ],
  },
  {
    id: "basmati-rice",
    name: "India Gate Classic Aged Super Basmati Rice",
    shortName: "India Gate Basmati Rice",
    brand: "India Gate",
    pack: "5 kg Cloth Bag",
    category: "grocery",
    tag: "EXTRA LONG GRAIN",
    price: 485,
    originalPrice: 620,
    discount: "22% OFF",
    rating: 4.8,
    ratingsCount: "22,300 Ratings",
    reviewsCount: "3,100 Reviews",
    badge: "Aged 2 Years",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Naturally aged for 2 years. Cooks into slender, pearly white extra long rice grains with heavenly aroma.",
    image: "/images/basmati.jpg",
    images: ["/images/basmati.jpg", "/images/atta-2.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "1 kg Pouch",
        price: 115,
        orig: 145,
        image: "/images/basmati.jpg",
      },
      {
        name: "5 kg Cloth Bag",
        price: 485,
        orig: 620,
        image: "/images/basmati.jpg",
      },
    ],
    offers: [
      {
        title: "Biryani Special",
        desc: "Flat ₹135 discount on 5kg family bag",
      },
      {
        title: "Free Masala",
        desc: "Complimentary Everest Shahi Biryani Masala inside",
      },
    ],
    highlights: [
      "Aged naturally in Himalayan foothills for 24+ months",
      "Cooks up to 2.5 times its raw length with non-sticky grains",
      "Distinct sweet aroma and delicate melt-in-mouth texture",
    ],
    specs: [
      { label: "Grain Length", val: "8.4 mm average uncooked grain length" },
      { label: "Aging", val: "2 Years Traditional Grain Aging" },
    ],
    inTheBox: [
      "1x India Gate Classic Aged Basmati Rice (5 kg Zipper Cloth Bag)",
    ],
    reviews: [
      {
        author: "Sameer K.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment:
          "Every single grain stays separate and long. Perfect for royal dum biryani!",
      },
    ],
  },
  {
    id: "tata-salt",
    name: "Tata Salt Vacuum Evaporated Pure Iodised Salt",
    shortName: "Tata Salt Iodised",
    brand: "Tata Salt",
    pack: "1 kg Pouch",
    category: "grocery",
    tag: "IODISED",
    price: 24,
    originalPrice: 28,
    discount: "14% OFF",
    rating: 4.9,
    ratingsCount: "67,400 Ratings",
    reviewsCount: "8,900 Reviews",
    badge: "Desh Ka Namak",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Desh Ka Namak made using vacuum evaporation technology. Guarantees pure iodine for child mental development.",
    image: "/images/tatasalt.jpg",
    images: ["/images/tatasalt.jpg", "/images/oil-1.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "1 kg Pouch",
        price: 24,
        orig: 28,
        image: "/images/tatasalt.jpg",
      },
      {
        name: "2 kg Combo",
        price: 46,
        orig: 56,
        image: "/images/tatasalt.jpg",
      },
    ],
    offers: [
      {
        title: "Essential Pantry Match",
        desc: "Wholesale darkstore price guaranteed",
      },
    ],
    highlights: [
      "Pioneered vacuum evaporation process ensuring 99.9% pure salt crystals",
      "Properly iodised according to WHO guidelines for cognitive growth",
      "Free-flowing snowy white consistency that dissolves evenly",
    ],
    specs: [
      { label: "Purity", val: "99.9% Sodium Chloride" },
      { label: "Iodine Level", val: "15-30 ppm at retail level" },
    ],
    inTheBox: [
      "1x Tata Salt Vacuum Evaporated Iodised Salt (1 kg sealed pack)",
    ],
    reviews: [
      {
        author: "Bhavna P.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Standard kitchen essential. Always reliable.",
      },
    ],
  },
  {
    id: "toor-dal",
    name: "Organic Tattva Unpolished Toor Arhar Dal",
    shortName: "Unpolished Toor Dal",
    brand: "Organic Tattva",
    pack: "1 kg Pouch",
    category: "grocery",
    tag: "UNPOLISHED",
    price: 175,
    originalPrice: 225,
    discount: "22% OFF",
    rating: 4.8,
    ratingsCount: "16,200 Ratings",
    reviewsCount: "2,050 Reviews",
    badge: "100% Protein",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Pure unpolished toor dal without water, oil or marble polish. Rich in dietary protein and natural nutrients.",
    image: "/images/toordal.jpg",
    images: ["/images/toordal.jpg", "/images/atta-1.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "1 kg Pouch",
        price: 175,
        orig: 225,
        image: "/images/toordal.jpg",
      },
      {
        name: "2 kg Value Pack",
        price: 330,
        orig: 450,
        image: "/images/toordal.jpg",
      },
    ],
    offers: [
      { title: "Protein Saver", desc: "Extra ₹20 off on 2kg value bundle" },
    ],
    highlights: [
      "Zero polish treatment retains the nutritious outer aleurone layer",
      "Cooks quickly and produces thick, flavourful home dal tadka",
      "Non-GMO certified and organically grown in Maharashtra",
    ],
    specs: [
      { label: "Pulse Type", val: "Unpolished Pigeon Pea (Toor Dal)" },
      { label: "Protein Content", val: "22g Plant Protein per 100g" },
    ],
    inTheBox: ["1x Organic Tattva Unpolished Toor Dal (1 kg Pack)"],
    reviews: [
      {
        author: "Neelam J.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment:
          "The sambar and tadka taste so much better compared to polished store dal.",
      },
    ],
  },

  // ==========================================
  // CATEGORY 2: ELECTRONICS & AUDIO (10 Items - with Color Variants!)
  // ==========================================
  {
    id: "boat-141-anc",
    name: "boAt Airdopes 141 ANC True Wireless Earbuds",
    shortName: "boAt Airdopes 141 ANC",
    brand: "boAt",
    pack: "32dB ANC • 42H Playback",
    category: "electronics",
    tag: "32dB ANC",
    price: 1299,
    originalPrice: 4990,
    discount: "74% OFF",
    rating: 4.6,
    ratingsCount: "64,812 Ratings",
    reviewsCount: "8,940 Reviews",
    badge: "Deal of the Day",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Flagship active noise cancellation earbuds with 32dB Hybrid ANC, Quad ENx mics, and BEAST 50ms low latency.",
    image: "/images/boat-black-1.jpg",
    images: [
      "/images/boat-black-1.jpg",
      "/images/boat-black-2.jpg",
      "/images/boat-black-3.jpg",
      "/images/boat-black-4.jpg",
    ],
    variantType: "color",
    variants: [
      {
        name: "Gunmetal Black",
        hex: "#1c1d21",
        image: "/images/boat-black-1.jpg",
        images: [
          "/images/boat-black-1.jpg",
          "/images/boat-black-2.jpg",
          "/images/boat-black-3.jpg",
          "/images/boat-black-4.jpg",
        ],
        price: 1299,
        orig: 4990,
      },
      {
        name: "Cobalt Blue",
        hex: "#0056c3",
        image: "/images/boat-blue-1.jpg",
        images: [
          "/images/boat-blue-1.jpg",
          "/images/boat-blue-2.jpg",
          "/images/boat-blue-3.jpg",
          "/images/boat-blue-4.jpg",
        ],
        price: 1299,
        orig: 4990,
      },
      {
        name: "Pure White",
        hex: "#f1f3f5",
        image: "/images/boat-white-1.jpg",
        images: [
          "/images/boat-white-1.jpg",
          "/images/boat-white-2.jpg",
          "/images/boat-white-3.jpg",
          "/images/boat-white-4.jpg",
        ],
        price: 1299,
        orig: 4990,
      },
      {
        name: "Olive Green",
        hex: "#2e5a44",
        image: "/images/boat-green-1.jpg",
        images: [
          "/images/boat-green-1.jpg",
          "/images/boat-green-2.jpg",
          "/images/boat-green-3.jpg",
          "/images/boat-green-4.jpg",
        ],
        price: 1299,
        orig: 4990,
      },
    ],
    offers: [
      {
        title: "Bank Offer",
        desc: "10% Instant Discount up to ₹150 on HDFC & ICICI Cards",
      },
      {
        title: "Special Price",
        desc: "Get extra ₹300 OFF with coupon SWIFTANC at checkout",
      },
      {
        title: "SwiftMart SuperCoins",
        desc: "Earn 65 SuperCoins on this purchase",
      },
    ],
    highlights: [
      "Up to 32dB Hybrid Active Noise Cancellation blocks external chatter, aircraft, and traffic hum",
      "Massive 42 hours combined battery life with sleek pocket-sized charging case",
      "ASAP Charge: 10 minutes of Type-C quick charging provides 120 minutes of music playback",
      "BEAST Mode with 50ms ultra-low latency guarantees zero audio lag for competitive gaming",
      "Quad Mics equipped with ENx AI Environmental Noise Cancellation for crystal-clear phone calls",
    ],
    specs: [
      { label: "Active Noise Cancellation", val: "Up to 32 dB Hybrid ANC" },
      { label: "Total Playtime", val: "Up to 42 Hours (Case + Buds)" },
      { label: "Driver Size", val: "10mm Dynamic Audio Drivers" },
      { label: "Connectivity", val: "Bluetooth v5.3 (Instant Fast Pair)" },
      {
        label: "Fast Charge (ASAP™)",
        val: "10 mins charge = 120 mins playback",
      },
      { label: "Water Resistance", val: "IPX5 Splash & Sweat Resistance" },
      {
        label: "Microphone",
        val: "Quad Mics with ENx™ Environmental Noise Tech",
      },
    ],
    inTheBox: [
      "1x boAt Airdopes 141 ANC Earbuds Pair (L + R)",
      "1x Wireless Charging Case",
      "2x Pairs of Extra Silicone Eartips (S, L)",
      "1x USB Type-C Fast Charging Cable",
      "1x boAt Official Warranty & User Manual Card",
    ],
    reviews: [
      {
        author: "Rahul S.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment:
          "Delivered in just 13 minutes by SwiftMart! Noise cancellation works like a charm in metro.",
      },
      {
        author: "Priya N.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment:
          "The bass is incredible and calls are very clear with ENx mic. Best purchase this month.",
      },
    ],
  },
  {
    id: "oneplus-nord-buds",
    name: "OnePlus Nord Buds 2r True Wireless Earbuds",
    shortName: "OnePlus Nord Buds 2r",
    brand: "OnePlus",
    pack: "12.4mm Drivers • 38H Playtime",
    category: "electronics",
    tag: "12.4MM DRIVER",
    price: 1799,
    originalPrice: 2299,
    discount: "22% OFF",
    rating: 4.5,
    ratingsCount: "41,200 Ratings",
    reviewsCount: "5,300 Reviews",
    badge: "OnePlus Assured",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Extra large 12.4mm titanium coated dynamic drivers with Sound Master Equalizer and 38H battery.",
    image: "/images/oneplus-1.jpg",
    images: [
      "/images/oneplus-1.jpg",
      "/images/oneplus-2.jpg",
      "/images/boat-2.jpg",
    ],
    variantType: "color",
    variants: [
      {
        name: "Deep Grey",
        hex: "#2f3542",
        image: "/images/oneplus-1.jpg",
        price: 1799,
        orig: 2299,
      },
      {
        name: "Triple Blue",
        hex: "#1e3799",
        image: "/images/oneplus-2.jpg",
        price: 1799,
        orig: 2299,
      },
    ],
    offers: [
      {
        title: "OnePlus Offer",
        desc: "1 Year Extended Brand Warranty with Red Cable Club",
      },
      {
        title: "UPI Cashback",
        desc: "Extra ₹100 instant discount on pre-paid checkout",
      },
    ],
    highlights: [
      "12.4mm Extra Large Titanium Coated Drivers deliver punchy, distortion-free deep bass",
      "Dual Microphones with AI Clear Call Noise Reduction filter ambient wind and background sounds",
      "Sound Master Equalizer offers 3 tailored sound profiles: Balanced, Bold, and Bass",
      "IP55 Water and Dust Resistance protects against rain showers and heavy gym workouts",
    ],
    specs: [
      {
        label: "Driver Size",
        val: "12.4mm Extra Large Titanium Coated Drivers",
      },
      { label: "Battery Life", val: "38 Hours Total with USB Type-C Charging" },
      {
        label: "Audio Profiles",
        val: "Sound Master Equalizer (Bold, Bass, Balanced)",
      },
      { label: "Microphones", val: "Dual Mics with AI Clear Call Technology" },
      { label: "Durability", val: "IP55 Water & Sweat Resistance" },
    ],
    inTheBox: [
      "1x OnePlus Nord Buds 2r Pair",
      "1x Matte Finish Pocket Charging Case",
      "3x Pairs of Silicone Eartips (S, M, L)",
      "1x OnePlus Red Type-C Charging Cable",
    ],
    reviews: [
      {
        author: "Karthik B.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment:
          "Sound quality is unmatched at this budget. Deep punchy bass and crystal clear treble.",
      },
    ],
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    shortName: "Sony WH-1000XM5",
    brand: "Sony",
    pack: "Industry Leading ANC • 30H Battery",
    category: "electronics",
    tag: "STUDIO ANC",
    price: 26990,
    originalPrice: 34990,
    discount: "23% OFF",
    rating: 4.9,
    ratingsCount: "18,400 Ratings",
    reviewsCount: "2,750 Reviews",
    badge: "Audiophile Gold",
    deliveryTime: "20-25 Mins",
    inStock: true,
    assured: true,
    description:
      "Industry leading noise cancellation with two processors and 8 microphones. Hi-Res LDAC audio.",
    image: "/images/headphones-black.jpg",
    images: ["/images/headphones-black.jpg", "/images/headphones-silver.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Midnight Black",
        hex: "#111111",
        image: "/images/headphones-black.jpg",
        price: 26990,
        orig: 34990,
      },
      {
        name: "Platinum Silver",
        hex: "#e0e0e0",
        image: "/images/headphones-silver.jpg",
        price: 26990,
        orig: 34990,
      },
    ],
    offers: [
      {
        title: "No Cost EMI",
        desc: "Available starting at ₹2,249/month on all major credit cards",
      },
      {
        title: "Instant Bank Discount",
        desc: "Flat ₹2,000 off on HDFC, ICICI, and Axis Bank cards",
      },
    ],
    highlights: [
      "Dual processors (Integrated Processor V1 + HD Noise Cancelling Processor QN1)",
      "Auto NC Optimizer adjusts cancellation dynamically based on atmospheric pressure & wearing conditions",
      "Magnificent Sound with 30mm precision-engineered carbon fiber drivers",
      "Crystal clear hands-free calling with 4 beamforming microphones and AI noise reduction",
    ],
    specs: [
      {
        label: "Noise Cancellation",
        val: "8-Mic Multi Noise Sensor Technology",
      },
      { label: "Battery Playtime", val: "Up to 30 hours with ANC turned ON" },
      { label: "Hi-Res Audio", val: "LDAC, DSEE Extreme AI Upscaling" },
    ],
    inTheBox: [
      "1x Sony WH-1000XM5 Headphones",
      "1x Collapsible Hard Carrying Case",
      "1x Gold-plated 3.5mm Headphone Cable",
      "1x USB-C Charging Cable",
    ],
    reviews: [
      {
        author: "Aditya V.",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment:
          "The noise cancellation is miraculous. Complete silence in busy flights.",
      },
    ],
  },
  {
    id: "jbl-flip6",
    name: "JBL Flip 6 Portable Waterproof Bluetooth Speaker",
    shortName: "JBL Flip 6 Speaker",
    brand: "JBL",
    pack: "2-Way Speaker • IP67 Waterproof",
    category: "electronics",
    tag: "IP67 RUGGED",
    price: 9999,
    originalPrice: 13999,
    discount: "29% OFF",
    rating: 4.7,
    ratingsCount: "12,900 Ratings",
    reviewsCount: "1,840 Reviews",
    badge: "Party Essential",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Bold sound for every adventure. 2-way speaker system with racetrack woofer, separate tweeter and dual radiators.",
    image: "/images/soundbar.jpg",
    images: ["/images/soundbar.jpg", "/images/boat-3.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Midnight Black",
        hex: "#1a1a1a",
        image: "/images/soundbar.jpg",
        price: 9999,
        orig: 13999,
      },
      {
        name: "Ocean Blue",
        hex: "#1e3799",
        image: "/images/boat-3.jpg",
        price: 9999,
        orig: 13999,
      },
    ],
    offers: [
      {
        title: "Exchange Bonus",
        desc: "Up to ₹1,000 off on exchange of old bluetooth speaker",
      },
    ],
    highlights: [
      "2-way speaker system engineered for loud, crystal-clear, powerful audio",
      "IP67 waterproof and dustproof design built for poolside parties and beach trips",
      "12 Hours of nonstop playtime on a single charge with USB-C protection",
    ],
    specs: [
      { label: "Output Power", val: "20W RMS Woofer + 10W RMS Tweeter" },
      { label: "Protection", val: "IP67 Waterproof & Dustproof" },
      { label: "Battery", val: "4800mAh (Up to 12h playtime)" },
    ],
    inTheBox: [
      "1x JBL Flip 6 Speaker",
      "1x Type-C USB Charging Cable",
      "1x Safety Sheet & Quick Start Guide",
    ],
    reviews: [
      {
        author: "Nikhil G.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment:
          "Bass is mindblowing for this portable size. Waterproof body survived pool drops!",
      },
    ],
  },
  {
    id: "fireboltt-smartwatch",
    name: "Fire-Boltt Phoenix Ultra Luxury Smartwatch",
    shortName: "Fire-Boltt Phoenix",
    brand: "Fire-Boltt",
    pack: "Bluetooth Calling • Metal Body",
    category: "electronics",
    tag: "LUXURY METAL",
    price: 1999,
    originalPrice: 8999,
    discount: "78% OFF",
    rating: 4.4,
    ratingsCount: "34,200 Ratings",
    reviewsCount: "4,600 Reviews",
    badge: "Trending Watch",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Stainless steel luxury smartwatch with crystal-clear Bluetooth calling, SpO2 monitor, and 120+ sports modes.",
    image: "/images/smartwatch-black.jpg",
    images: ["/images/smartwatch-black.jpg", "/images/smartwatch-gold.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Stealth Black",
        hex: "#1c1c1e",
        image: "/images/smartwatch-black.jpg",
        price: 1999,
        orig: 8999,
      },
      {
        name: "Royal Gold",
        hex: "#d4af37",
        image: "/images/smartwatch-gold.jpg",
        price: 2199,
        orig: 9999,
      },
    ],
    offers: [
      {
        title: "Launch Special",
        desc: "Save extra ₹200 on UPI instant checkout",
      },
    ],
    highlights: [
      "Full metallic casing with high-gloss polished stainless steel bezel",
      "AI Voice Assistant support with integrated HD speaker & microphone",
      "Comprehensive 24x7 health tracking: Heart Rate, SpO2, Sleep stages",
    ],
    specs: [
      { label: "Display", val: "1.39-inch High Definition Round TFT" },
      { label: "Calling", val: "Bluetooth Calling with Dial Pad & Contacts" },
      {
        label: "Battery",
        val: "Up to 7 Days Normal Use (4 Days with Calling)",
      },
    ],
    inTheBox: [
      "1x Fire-Boltt Phoenix Smartwatch",
      "1x Magnetic USB Charging Dock",
      "1x User Manual & Warranty Card",
    ],
    reviews: [
      {
        author: "Vijay R.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment:
          "Looks like a 20k watch on the wrist. Metal strap is very comfortable.",
      },
    ],
  },
  {
    id: "noise-colorfit",
    name: "Noise ColorFit Pulse 4 AMOLED Calling Smartwatch",
    shortName: "Noise ColorFit Pulse 4",
    brand: "Noise",
    pack: '1.85" AMOLED • Always On Display',
    category: "electronics",
    tag: "AMOLED DISPLAY",
    price: 2499,
    originalPrice: 6999,
    discount: "64% OFF",
    rating: 4.6,
    ratingsCount: "29,400 Ratings",
    reviewsCount: "3,800 Reviews",
    badge: "AMOLED Top Pick",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Vibrant 1.85-inch AMOLED screen with 600 nits brightness, Functional Crown dial, and TruSync calling.",
    image: "/images/smartwatch-gold.jpg",
    images: ["/images/smartwatch-gold.jpg", "/images/smartwatch-black.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Royal Gold",
        hex: "#d4af37",
        image: "/images/smartwatch-gold.jpg",
        price: 2499,
        orig: 6999,
      },
      {
        name: "Jet Black",
        hex: "#111111",
        image: "/images/smartwatch-black.jpg",
        price: 2499,
        orig: 6999,
      },
    ],
    offers: [
      {
        title: "Special Discount",
        desc: "Extra ₹150 coupon applied at checkout",
      },
    ],
    highlights: [
      '1.85" AMOLED Display with vibrant colors and deep true blacks',
      "Always-On Display (AOD) with customizable analogue and digital watchfaces",
      "Functional digital crown for smooth menu scrolling and volume adjustments",
    ],
    specs: [
      { label: "Display", val: '1.85" AMOLED 410x502 Pixels • 600 Nits' },
      {
        label: "Health Suite",
        val: "Noise Health Suite™ (SpO2, Heart, Stress)",
      },
    ],
    inTheBox: [
      "1x Noise ColorFit Pulse 4 Smartwatch",
      "1x Magnetic Charging Cable",
      "1x Warranty Card",
    ],
    reviews: [
      {
        author: "Sneha M.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment:
          "The AMOLED display is super bright outdoors even in full sunlight.",
      },
    ],
  },
  {
    id: "boat-stone-1200",
    name: "boAt Stone 1200 14W RGB Bluetooth Party Speaker",
    shortName: "boAt Stone 1200",
    brand: "boAt",
    pack: "14W Signature Sound • RGB LEDs",
    category: "electronics",
    tag: "RGB PARTY",
    price: 3499,
    originalPrice: 6990,
    discount: "50% OFF",
    rating: 4.5,
    ratingsCount: "17,800 Ratings",
    reviewsCount: "2,400 Reviews",
    badge: "Big Bass",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Pump up the volume with 14W stereo sound, dynamic RGB party lights, shoulder carry strap and 9H playback.",
    image: "/images/soundbar.jpg",
    images: ["/images/soundbar.jpg", "/images/boat-1.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Stealth Black",
        hex: "#1a1a1a",
        image: "/images/soundbar.jpg",
        price: 3499,
        orig: 6990,
      },
    ],
    offers: [
      { title: "Party Combo", desc: "Get boAt Aux Cable free with this order" },
    ],
    highlights: [
      "14W boAt Signature Sound with dual passive radiators for thumping bass",
      "Dynamic multi-color 360-degree ambient RGB lighting beats to the music",
      "IPX7 Water Resistance and durable rubberized chassis",
    ],
    specs: [
      { label: "Audio Output", val: "14W RMS Stereo" },
      { label: "Battery", val: "3600mAh (Up to 9 Hours playback)" },
    ],
    inTheBox: [
      "1x boAt Stone 1200 Speaker",
      "1x Nylon Shoulder Carry Strap",
      "1x Type-C Cable",
    ],
    reviews: [
      {
        author: "Kunal S.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment:
          "Unbelievable bass for house parties and rooftop chill sessions.",
      },
    ],
  },
  {
    id: "realme-buds-air5",
    name: "Realme Buds Air 5 Pro Dual Driver Flagship TWS",
    shortName: "Realme Buds Air 5 Pro",
    brand: "Realme",
    pack: "50dB ANC • Hi-Res LDAC",
    category: "electronics",
    tag: "50dB ANC",
    price: 4499,
    originalPrice: 7999,
    discount: "44% OFF",
    rating: 4.7,
    ratingsCount: "11,200 Ratings",
    reviewsCount: "1,600 Reviews",
    badge: "Flagship Dual Driver",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Dual coaxial drivers (11mm bass + 6mm planar tweeter) with ultra-deep 50dB active noise cancellation.",
    image: "/images/boat-2.jpg",
    images: ["/images/boat-2.jpg", "/images/boat-1.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Sunrise Beige",
        hex: "#f5f0e6",
        image: "/images/boat-2.jpg",
        price: 4499,
        orig: 7999,
      },
      {
        name: "Astral Black",
        hex: "#141414",
        image: "/images/boat-1.jpg",
        price: 4499,
        orig: 7999,
      },
    ],
    offers: [
      {
        title: "Hi-Res Audio Offer",
        desc: "Enjoy 3 months free lossless Apple Music trial",
      },
    ],
    highlights: [
      "Class-leading 50dB Deep Active Noise Cancellation with 4000Hz ultra-wide frequency",
      "Dual dynamic acoustic architecture produces audiophile grade studio clarity",
      "40 Hours of long battery life and 40ms low latency gaming mode",
    ],
    specs: [
      { label: "ANC Depth", val: "Up to 50 dB Smart ANC" },
      { label: "Drivers", val: "11mm Bass Driver + 6mm Planar Micro-Tweeter" },
    ],
    inTheBox: [
      "1x Realme Buds Air 5 Pro Earbuds Pair",
      "1x Glossy Pebble Charging Case",
      "3x Pairs of Silicone Eartips",
    ],
    reviews: [
      {
        author: "Varun P.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment:
          "50dB ANC is terrifyingly quiet. The audio detail with planar tweeter is mindblowing.",
      },
    ],
  },
  {
    id: "mi-powerbank-3i",
    name: "Mi 20000mAh 18W Fast Charging Power Bank 3i",
    shortName: "Mi 20000mAh Power Bank",
    brand: "Xiaomi",
    pack: "Triple Output • 18W Two-Way Fast Charge",
    category: "electronics",
    tag: "20000MAH",
    price: 1899,
    originalPrice: 2499,
    discount: "24% OFF",
    rating: 4.6,
    ratingsCount: "82,000 Ratings",
    reviewsCount: "11,500 Reviews",
    badge: "Travel Best Seller",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "High capacity 20000mAh lithium polymer battery with triple USB output and dual input (Type-C & Micro-USB).",
    image: "/images/ssd-black.jpg",
    images: ["/images/ssd-black.jpg", "/images/ssd-orange.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Sandstone Black",
        hex: "#1b1b1b",
        image: "/images/ssd-black.jpg",
        price: 1899,
        orig: 2499,
      },
    ],
    offers: [
      {
        title: "Travel Offer",
        desc: "Charge 3 devices simultaneously at airport gates",
      },
    ],
    highlights: [
      "Charges standard smartphone 4 to 5 times on a single full recharge",
      "Advanced 12-layer circuit protection prevents overheating and short circuits",
      "Low current charging mode for smartwatches and Bluetooth earphones",
    ],
    specs: [
      {
        label: "Battery Capacity",
        val: "20000mAh 3.7V (74Wh) Lithium Polymer",
      },
      { label: "Charging Speed", val: "18W Two-Way Fast Charging" },
    ],
    inTheBox: [
      "1x Mi Power Bank 3i 20000mAh",
      "1x Micro-USB & Type-C Combo Cable",
      "1x User Manual",
    ],
    reviews: [
      {
        author: "Ankur D.",
        stars: "★★★★★",
        date: "Verified 6 days ago",
        comment:
          "Charges my iPhone 15 and iPad all weekend without needing a wall socket.",
      },
    ],
  },
  {
    id: "sandisk-ultra-ssd",
    name: "SanDisk 1TB Extreme Portable External Solid State Drive",
    shortName: "SanDisk 1TB Extreme SSD",
    brand: "SanDisk",
    pack: "1050MB/s Read • IP65 Rugged",
    category: "electronics",
    tag: "1050MB/S SPEED",
    price: 8499,
    originalPrice: 14500,
    discount: "41% OFF",
    rating: 4.8,
    ratingsCount: "19,800 Ratings",
    reviewsCount: "2,900 Reviews",
    badge: "Creator Essential",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Rugged NVMe solid state performance featuring 1050MB/s read and 1000MB/s write speeds with 2-meter drop protection.",
    image: "/images/ssd-orange.jpg",
    images: ["/images/ssd-orange.jpg", "/images/ssd-black.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Cyber Orange",
        hex: "#ff6f00",
        image: "/images/ssd-orange.jpg",
        price: 8499,
        orig: 14500,
      },
      {
        name: "Stealth Black",
        hex: "#151515",
        image: "/images/ssd-black.jpg",
        price: 8499,
        orig: 14500,
      },
    ],
    offers: [
      {
        title: "Creator Discount",
        desc: "Flat ₹500 off using coupon SSDCREATOR",
      },
    ],
    highlights: [
      "Fast NVMe solid-state speeds up to 1050MB/s read and 1000MB/s write",
      "Up to 2-meter drop protection and IP65 water and dust resistance",
      "Handy carabiner loop to secure the drive to your backpack or belt",
    ],
    specs: [
      { label: "Sequential Read", val: "Up to 1050 MB/s" },
      { label: "Interface", val: "USB 3.2 Gen 2 (Type-C)" },
      {
        label: "Durability",
        val: "2m Drop Tested • IP65 Water & Dust Resistant",
      },
    ],
    inTheBox: [
      "1x SanDisk Extreme Portable SSD 1TB",
      "1x USB-C to USB-C Cable",
      "1x USB-C to USB-A Adapter",
    ],
    reviews: [
      {
        author: "Gaurav S.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment:
          "Transfers 50GB 4K video footage in under 1 minute. Outstanding speed!",
      },
    ],
  },

  // ==========================================
  // CATEGORY 3: DMART VALUE PACKS & CLEANING (10 Items)
  // ==========================================
  {
    id: "surf-excel-matic",
    name: "Surf Excel Matic Front Load Detergent Powder",
    shortName: "Surf Excel Matic Powder",
    brand: "Surf Excel",
    pack: "2 kg Value Box",
    category: "dmart-packs",
    tag: "MACHINE CARE",
    price: 410,
    originalPrice: 500,
    discount: "18% OFF",
    rating: 4.8,
    ratingsCount: "37,900 Ratings",
    reviewsCount: "4,150 Reviews",
    badge: "Machine Specialist",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Specially formulated for front load washing machines. Low lather technology protects machine drum while lifting stubborn stains.",
    image: "/images/surfexcel-1.jpg",
    images: ["/images/surfexcel-1.jpg", "/images/surfexcel-2.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "1 kg Refill",
        price: 215,
        orig: 260,
        image: "/images/surfexcel-1.jpg",
      },
      {
        name: "2 kg Value Box",
        price: 410,
        orig: 500,
        image: "/images/surfexcel-1.jpg",
      },
      {
        name: "4 kg Mega Saver",
        price: 780,
        orig: 980,
        image: "/images/surfexcel-2.jpg",
      },
    ],
    offers: [
      {
        title: "DMart Laundry Fest",
        desc: "Save up to ₹200 on 4kg bulk combo pack",
      },
      {
        title: "Comfort Combo",
        desc: "Get ₹30 off on Comfort Fabric Conditioner with this",
      },
    ],
    highlights: [
      "Low foam formula dissolves completely in high water pressure without clogging nozzles",
      "Powerful stain removal technology penetrates deep into fabric fibers in one wash",
      "Safe for baby clothes, whites, bright colored cottons, and synthetic sportswear",
    ],
    specs: [
      {
        label: "Machine Compatibility",
        val: "Front Load Fully Automatic Washers",
      },
      { label: "Enzymes", val: "Multi-enzyme Targeted Stain Eradication" },
      { label: "Fragrance", val: "Long-lasting Spring Breeze Perfume" },
    ],
    inTheBox: [
      "1x Surf Excel Matic Front Load Detergent Powder (2 kg Heavy-Duty Box)",
    ],
    reviews: [
      {
        author: "Sunita D.",
        stars: "★★★★★",
        date: "Verified 1 day ago",
        comment:
          "Leaves clothes spotless without leaving soap marks on dark trousers. Delivered to doorstep!",
      },
    ],
  },
  {
    id: "comfort-fabric",
    name: "Comfort After Wash Morning Fresh Fabric Conditioner",
    shortName: "Comfort Fabric Conditioner",
    brand: "Comfort",
    pack: "2 Litre Economy Bottle",
    category: "dmart-packs",
    tag: "LONG FRESHNESS",
    price: 360,
    originalPrice: 475,
    discount: "24% OFF",
    rating: 4.8,
    ratingsCount: "18,400 Ratings",
    reviewsCount: "2,200 Reviews",
    badge: "14-Day Fragrance",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Infused with fragrance pearls that untangle fabric fibers, keeping clothes silky soft and fragranced for 14 days.",
    image: "/images/comfort.jpg",
    images: ["/images/comfort.jpg", "/images/surfexcel-1.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "860ml Pouch",
        price: 180,
        orig: 235,
        image: "/images/comfort.jpg",
      },
      {
        name: "2 Litre Economy Can",
        price: 360,
        orig: 475,
        image: "/images/comfort.jpg",
      },
    ],
    offers: [
      {
        title: "Soft Clothes Deal",
        desc: "Wholesale bulk rate matches DMart retail stores",
      },
    ],
    highlights: [
      "Conditions fabric threads to prevent roughness and lint damage",
      "Encapsulated fragrance pearls burst on touch for up to 14 days",
      "Maintains new-like shine and color brilliance wash after wash",
    ],
    specs: [
      { label: "Bottle Size", val: "2 Litres (Up to 80 Washes)" },
      { label: "Suitability", val: "Hand Wash & Machine Wash" },
    ],
    inTheBox: [
      "1x Comfort After Wash Morning Fresh Fabric Conditioner (2 Litre Bottle)",
    ],
    reviews: [
      {
        author: "Monika C.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment: "Bed sheets and towels smell like a luxury 5-star hotel!",
      },
    ],
  },
  {
    id: "vim-dishwash-gel",
    name: "Vim Lemon Fragrance Concentrated Dishwash Liquid Gel Can",
    shortName: "Vim Dishwash Gel 2L",
    brand: "Vim",
    pack: "2 Litre Value Can",
    category: "dmart-packs",
    tag: "GREASE CUTTER",
    price: 299,
    originalPrice: 410,
    discount: "27% OFF",
    rating: 4.7,
    ratingsCount: "29,100 Ratings",
    reviewsCount: "3,400 Reviews",
    badge: "100 Lemons Power",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Concentrated power of 100 lemons. 1 spoon cleans an entire sink full of tough oily utensils without scratching.",
    image: "/images/vim.jpg",
    images: ["/images/vim.jpg", "/images/scotchbrite.jpg"],
    variantType: "pack",
    variants: [
      { name: "750ml Bottle", price: 135, orig: 180, image: "/images/vim.jpg" },
      {
        name: "2 Litre Economy Can",
        price: 299,
        orig: 410,
        image: "/images/vim.jpg",
      },
    ],
    offers: [
      { title: "Kitchen Combo", desc: "Free Scotch-Brite sponge pad included" },
    ],
    highlights: [
      "Degreases non-stick cookware and burnt stainless steel kadhais effortlessly",
      "Gentle on hands with balanced pH formula",
      "Leaves zero white powdery residue on glassware and melamine dinner sets",
    ],
    specs: [
      { label: "Concentration", val: "1 Spoon = 1 Sink full of dishes" },
      { label: "Volume", val: "2 Litre Can with sturdy handle" },
    ],
    inTheBox: ["1x Vim Dishwash Liquid Gel (2 Litre Value Can)"],
    reviews: [
      {
        author: "Pooja V.",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment:
          "Removes oily fish and ghee curry grease without soaking for hours.",
      },
    ],
  },
  {
    id: "harpic-power-plus",
    name: "Harpic Power Plus 10X Disinfectant Toilet Cleaner Combo",
    shortName: "Harpic 10X Cleaner (Pack of 2)",
    brand: "Harpic",
    pack: "1 Litre x 2 Twin Pack",
    category: "dmart-packs",
    tag: "10X CLEANING",
    price: 310,
    originalPrice: 430,
    discount: "28% OFF",
    rating: 4.8,
    ratingsCount: "35,400 Ratings",
    reviewsCount: "4,200 Reviews",
    badge: "99.9% Germ Kill",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "10X better limescale and yellowish stain removal than ordinary bleach and detergents. Kills 99.9% germs.",
    image: "/images/harpic.jpg",
    images: ["/images/harpic.jpg", "/images/lizol.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "1L Single Bottle",
        price: 175,
        orig: 225,
        image: "/images/harpic.jpg",
      },
      {
        name: "1L x 2 Twin Saver Pack",
        price: 310,
        orig: 430,
        image: "/images/harpic.jpg",
      },
    ],
    offers: [
      {
        title: "DMart Hygiene Bundle",
        desc: "Flat ₹120 off on 2-litre twin bundle",
      },
    ],
    highlights: [
      "Thick blue formula grips toilet bowl surface to eradicate stubborn stains",
      "Kills 99.9% of harmful toilet bacteria and viruses in 20 minutes",
      "Angled nozzle reaches deep under the rim where brushes can't reach",
    ],
    specs: [
      { label: "Action", val: "10X Stain & Limescale Removal" },
      { label: "Pack", val: "2 x 1000ml Bottles" },
    ],
    inTheBox: [
      "2x Harpic Power Plus Disinfectant Toilet Cleaner Bottles (1 Litre each)",
    ],
    reviews: [
      {
        author: "Kishore M.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment:
          "Best toilet cleaner hands down. Delivered cleanly packaged in 14 mins.",
      },
    ],
  },
  {
    id: "dettol-liquid",
    name: "Dettol Antiseptic Disinfectant Liquid 1 Litre Family Bottle",
    shortName: "Dettol Liquid 1L",
    brand: "Dettol",
    pack: "1 Litre Family Bottle",
    category: "dmart-packs",
    tag: "FIRST AID",
    price: 315,
    originalPrice: 385,
    discount: "18% OFF",
    rating: 4.9,
    ratingsCount: "51,200 Ratings",
    reviewsCount: "6,900 Reviews",
    badge: "Hospital Grade",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Multipurpose antibacterial disinfectant liquid trusted by doctors for cuts, shaving, bathing, and home hygiene.",
    image: "/images/dettol.jpg",
    images: ["/images/dettol.jpg", "/images/harpic.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "500ml Bottle",
        price: 175,
        orig: 210,
        image: "/images/dettol.jpg",
      },
      {
        name: "1 Litre Family Bottle",
        price: 315,
        orig: 385,
        image: "/images/dettol.jpg",
      },
    ],
    offers: [
      { title: "Family Protection", desc: "Extra ₹25 off when paying via UPI" },
    ],
    highlights: [
      "Kills 100 illness-causing germs and bacteria",
      "Recommended by the Indian Medical Association (IMA)",
      "Ideal for bathing, laundry disinfection, floor mopping, and first-aid",
    ],
    specs: [
      { label: "Active Agent", val: "Chloroxylenol (C8H9ClO) 4.8% w/v" },
      { label: "Volume", val: "1000ml" },
    ],
    inTheBox: [
      "1x Dettol Antiseptic Disinfectant Liquid (1000ml Bottle with safety seal)",
    ],
    reviews: [
      {
        author: "Dr. Arvind N.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Essential for every Indian household. Fast delivery.",
      },
    ],
  },
  {
    id: "colgate-strong-teeth",
    name: "Colgate Strong Teeth Dental Paste Saver Pack",
    shortName: "Colgate Strong Teeth (500g)",
    brand: "Colgate",
    pack: "500g Family Pack",
    category: "dmart-packs",
    tag: "AMINO SHAKTI",
    price: 199,
    originalPrice: 280,
    discount: "29% OFF",
    rating: 4.8,
    ratingsCount: "44,100 Ratings",
    reviewsCount: "5,100 Reviews",
    badge: "Dental Gold",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Enriched with Amino Shakti formula that adds natural calcium to teeth, making them 2X stronger.",
    image: "/images/colgate.jpg",
    images: ["/images/colgate.jpg", "/images/dettol.jpg"],
    variantType: "pack",
    variants: [
      { name: "200g Tube", price: 95, orig: 125, image: "/images/colgate.jpg" },
      {
        name: "500g Family Saver",
        price: 199,
        orig: 280,
        image: "/images/colgate.jpg",
      },
    ],
    offers: [
      {
        title: "Toothbrush Free",
        desc: "Comes with 1 Colgate Super Flexi toothbrush",
      },
    ],
    highlights: [
      "Nourishes tooth enamel with natural bio-available calcium",
      "Prevents cavities, removes plaque and freshens breath for 12 hours",
    ],
    specs: [
      { label: "Active Formula", val: "Arginine + Calcium Technology" },
      { label: "Net Weight", val: "500g" },
    ],
    inTheBox: [
      "1x Colgate Strong Teeth Dental Paste (500g Tube)",
      "1x Free Colgate Super Flexi Toothbrush",
    ],
    reviews: [
      {
        author: "Harish S.",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment:
          "Great value pack for the entire family. Saved ₹81 compared to retail.",
      },
    ],
  },
  {
    id: "ariel-matic-liquid",
    name: "Ariel Matic Top Load Liquid Detergent Pouch",
    shortName: "Ariel Matic Liquid 2L",
    brand: "Ariel",
    pack: "2 Litre Mega Refill",
    category: "dmart-packs",
    tag: "STAIN REMOVER",
    price: 389,
    originalPrice: 490,
    discount: "21% OFF",
    rating: 4.8,
    ratingsCount: "21,600 Ratings",
    reviewsCount: "2,700 Reviews",
    badge: "Top Machine Pick",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Tough stain removal in 1 wash inside top loading automatic machines. Dissolves 100% with no residue.",
    image: "/images/ariel.jpg",
    images: ["/images/ariel.jpg", "/images/surfexcel-2.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "1 Litre Pouch",
        price: 210,
        orig: 260,
        image: "/images/ariel.jpg",
      },
      {
        name: "2 Litre Mega Refill",
        price: 389,
        orig: 490,
        image: "/images/ariel.jpg",
      },
    ],
    offers: [
      { title: "DMart Laundry Rate", desc: "Wholesale savings applied" },
    ],
    highlights: [
      "Designed specifically for high water volume top load machines",
      "Lifts tea, coffee, chocolate and curry stains in single cycle",
      "Leaves garments with a fresh, clean, crisp fragrance",
    ],
    specs: [
      { label: "Compatibility", val: "Top Load Washing Machines" },
      { label: "Volume", val: "2 Litres" },
    ],
    inTheBox: [
      "1x Ariel Matic Top Load Liquid Detergent (2 Litre Pouch with spout)",
    ],
    reviews: [
      {
        author: "Deepa L.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment:
          "No detergent powder residue left on black shirts. Works wonderfully.",
      },
    ],
  },
  {
    id: "godrej-aer-spray",
    name: "Godrej aer Pocket Bathroom Fragrance Diffuser (Pack of 4)",
    shortName: "Godrej aer Pocket (4 Pack)",
    brand: "Godrej",
    pack: "Pack of 4 Assorted",
    category: "dmart-packs",
    tag: "SLIM GEL",
    price: 199,
    originalPrice: 280,
    discount: "29% OFF",
    rating: 4.6,
    ratingsCount: "17,200 Ratings",
    reviewsCount: "2,100 Reviews",
    badge: "30 Days Fresh",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Slim gel technology bathroom fragrance diffuser that lasts up to 30 days per pocket. Pack of 4 delightful scents.",
    image: "/images/godrej.jpg",
    images: ["/images/godrej.jpg", "/images/lizol.jpg"],
    variantType: "pack",
    variants: [
      { name: "Pack of 2", price: 110, orig: 140, image: "/images/godrej.jpg" },
      {
        name: "Pack of 4 Assorted",
        price: 199,
        orig: 280,
        image: "/images/godrej.jpg",
      },
    ],
    offers: [
      {
        title: "Fresh Home Combo",
        desc: "Assorted scents: Petal Crush, Violet, Fresh Lush, Tangy",
      },
    ],
    highlights: [
      "Unique power gel technology diffuses scent continuously for 30 days",
      "Eliminates bad odors and damp bathroom smell instantly",
      "Easy peel-and-hang hook designed for any bathroom corner",
    ],
    specs: [
      { label: "Duration", val: "Up to 30 Days per Pocket (120 Days total)" },
      { label: "Fragrances", val: "4 Assorted Natural Floral Blends" },
    ],
    inTheBox: ["4x Godrej aer Pocket Bathroom Fragrance Packs"],
    reviews: [
      {
        author: "Alok N.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment:
          "Smells pleasant and not overpowering. Lasts full month easily.",
      },
    ],
  },
  {
    id: "scotch-brite-scrub",
    name: "Scotch-Brite Heavy Duty Scrub Pad Saver Pack (Pack of 12)",
    shortName: "Scotch-Brite Scrub (Pack of 12)",
    brand: "3M",
    pack: "Pack of 12 Pads",
    category: "dmart-packs",
    tag: "NON RUST",
    price: 135,
    originalPrice: 190,
    discount: "29% OFF",
    rating: 4.8,
    ratingsCount: "38,500 Ratings",
    reviewsCount: "4,600 Reviews",
    badge: "Heavy Duty",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "Original green scrub pad with abrasive mineral particles distributed evenly throughout the fiber.",
    image: "/images/scotchbrite.jpg",
    images: ["/images/scotchbrite.jpg", "/images/vim.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "Pack of 6",
        price: 75,
        orig: 95,
        image: "/images/scotchbrite.jpg",
      },
      {
        name: "Pack of 12 Saver",
        price: 135,
        orig: 190,
        image: "/images/scotchbrite.jpg",
      },
    ],
    offers: [
      { title: "DMart Kitchen Fest", desc: "Wholesale bulk pack saves 29%" },
    ],
    highlights: [
      "Resists rust, fraying, and odor build-up over repeated uses",
      "Evenly spread mineral abrasive cleans tough burnt food without disintegrating",
      "Ergonomic size fits comfortably in hand",
    ],
    specs: [
      { label: "Material", val: "Nylon Synthetic Fiber with Mineral Abrasive" },
      { label: "Quantity", val: "12 Individual Scrub Pads" },
    ],
    inTheBox: ["1x Scotch-Brite Heavy Duty Scrub Pad Pack (12 Units)"],
    reviews: [
      {
        author: "Nirmala B.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment:
          "Lasts much longer than cheap duplicates. 3M quality is genuine.",
      },
    ],
  },
  {
    id: "lizol-disinfectant",
    name: "Lizol Citrus Surface Cleaner Floral & Pine Multi Surface",
    shortName: "Lizol Surface Cleaner 2L",
    brand: "Lizol",
    pack: "2 Litre Family Can",
    category: "dmart-packs",
    tag: "SURFACE CARE",
    price: 345,
    originalPrice: 440,
    discount: "22% OFF",
    rating: 4.8,
    ratingsCount: "33,000 Ratings",
    reviewsCount: "3,900 Reviews",
    badge: "10X Germ Kill",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description:
      "India's No.1 floor disinfectant cleaner. Safe for tiles, marble, granite and wooden floors.",
    image: "/images/lizol.jpg",
    images: ["/images/lizol.jpg", "/images/harpic.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "1 Litre Bottle",
        price: 185,
        orig: 230,
        image: "/images/lizol.jpg",
      },
      {
        name: "2 Litre Family Can",
        price: 345,
        orig: 440,
        image: "/images/lizol.jpg",
      },
    ],
    offers: [
      { title: "Clean Home Bundle", desc: "Save extra ₹95 on 2L Family Can" },
    ],
    highlights: [
      "Kills 99.99% of germs including Covid-19 virus and bacteria",
      "Removes 100 types of stains like grease, ketchup, and coffee spots",
      "Leaves long-lasting soothing citrus floral fragrance",
    ],
    specs: [
      {
        label: "Floor Safety",
        val: "Marble, Granite, Ceramic Tiles, Polished Wood",
      },
      { label: "Volume", val: "2000 ml" },
    ],
    inTheBox: ["1x Lizol Citrus Surface Floor Cleaner (2 Litre Can)"],
    reviews: [
      {
        author: "Geetika T.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Floor shines and smells so fresh. Delivered in 12 minutes.",
      },
    ],
  },

  // ==========================================
  // CATEGORY 4: SMART GADGETS & HARDWARE (10 Items - Image 4 Reference!)
  // ==========================================
  {
    id: "aurora-mouse",
    name: "Aurora Master Ergonomic Precision Wireless Mouse",
    shortName: "Aurora Master Mouse",
    brand: "Aurora Lab",
    pack: "8K DPI • MagSpeed Wheel",
    category: "gadgets",
    tag: "ERGONOMIC",
    price: 9999,
    originalPrice: 11999,
    discount: "17% OFF",
    rating: 4.7,
    ratingsCount: "11,800 Ratings",
    reviewsCount: "1,420 Reviews",
    badge: "Ergonomic Gold",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Electromagnetic MagSpeed scrolling with 8K DPI Darkfield sensor. Effortless quiet clicks across glass and any surface.",
    image: "/images/mouse-black.jpg",
    images: ["/images/mouse-black.jpg", "/images/mouse-grey.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Matte Black",
        hex: "#1a1a1a",
        image: "/images/mouse-black.jpg",
        price: 9999,
        orig: 11999,
      },
      {
        name: "Space Grey",
        hex: "#7d8597",
        image: "/images/mouse-grey.jpg",
        price: 9999,
        orig: 11999,
      },
    ],
    offers: [
      {
        title: "Desk Setup Special",
        desc: "Get free leather desk mat with this order",
      },
      { title: "Bank Offer", desc: "Extra ₹500 off on Axis Bank credit cards" },
    ],
    highlights: [
      "MagSpeed Electromagnetic scrolling scrolls 1,000 lines in a single second with pinpoint tactile precision",
      "High-precision 8,000 DPI Darkfield glass tracking works seamlessly on any glass tabletop",
      "Quiet-Click acoustic dampers reduce click noise by 90% while maintaining crisp feedback",
      "Full palm ergonomic contour engineered to eliminate carpal tunnel wrist strain during 12-hour workdays",
      "Connects up to 3 devices simultaneously via Bluetooth and 2.4GHz Bolt receiver with instant Easy-Switch",
    ],
    specs: [
      {
        label: "Sensor Resolution",
        val: "200 to 8,000 DPI (Configurable in 50 DPI increments)",
      },
      {
        label: "Battery Life",
        val: "Up to 70 days on full charge (3 hours from 1-min quick charge)",
      },
      { label: "Scrolling", val: "MagSpeed Electromagnetic Smart-Shift Wheel" },
      {
        label: "Connectivity",
        val: "Bluetooth Low Energy + 2.4GHz Bolt USB Receiver",
      },
      { label: "Weight", val: "141 grams (Weighted ergonomic balance)" },
    ],
    inTheBox: [
      "1x Aurora Master Ergonomic Wireless Mouse",
      "1x Bolt Low-Latency USB Wireless Receiver",
      "1x Braided USB-C to USB-C Fast Charging Cable",
      "1x User Documentation & 2-Year Warranty",
    ],
    reviews: [
      {
        author: "Vikramaditya S.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment:
          "The MagSpeed scroll wheel feels futuristic. Wrist pain completely vanished after 2 days!",
      },
      {
        author: "Ananya B.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment:
          "Works flawlessly across both my MacBook Pro and Windows workstation.",
      },
    ],
  },
  {
    id: "aurora-soundbar",
    name: "Aurora Cinema SoundBar Dolby Atmos 7.1.4 Spatial System",
    shortName: "Aurora Cinema SoundBar",
    brand: "Aurora Audio",
    pack: "Dolby Atmos 7.1.4 • Dual Subwoofers",
    category: "gadgets",
    tag: "ATMOS 7.1.4",
    price: 79999,
    originalPrice: 89999,
    discount: "11% OFF",
    rating: 4.9,
    ratingsCount: "6,300 Ratings",
    reviewsCount: "820 Reviews",
    badge: "Cinema Master",
    deliveryTime: "20-25 Mins",
    inStock: true,
    assured: true,
    description:
      "Dolby Atmos 7.1.4 spatial audio bar with dual integrated force-balanced subwoofers and room acoustics AI calibration.",
    image: "/images/soundbar.jpg",
    images: ["/images/soundbar.jpg", "/images/keyboard-slate.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Anodized Black",
        hex: "#161616",
        image: "/images/soundbar.jpg",
        price: 79999,
        orig: 89999,
      },
    ],
    offers: [
      {
        title: "Home Theater Bundle",
        desc: "Complimentary Optical Audio + High-Speed HDMI eARC cable",
      },
      {
        title: "No Cost EMI",
        desc: "Starting at ₹6,666/month with 0% interest",
      },
    ],
    highlights: [
      "11 Precision drivers including upward-firing height channels for genuine Dolby Atmos spatial 3D audio",
      "Dual force-balanced built-in subwoofers eliminate cabinet vibration while delivering earthquake-level 28Hz bass",
      "AI Room Tuning acoustically maps your living room walls to project cinematic surround sound",
      "Supports HDMI eARC 4K 120Hz Dolby Vision passthrough, Apple AirPlay 2, Spotify Connect, and Bluetooth 5.3",
    ],
    specs: [
      {
        label: "Audio Channels",
        val: "7.1.4 Discrete Channel Spatial Acoustics",
      },
      { label: "Total Power Output", val: "650 Watts Peak Power" },
      { label: "Frequency Response", val: "28 Hz - 22,000 Hz" },
      { label: "Inputs", val: "HDMI eARC, Optical, AUX, Ethernet, USB" },
    ],
    inTheBox: [
      "1x Aurora Cinema SoundBar",
      "1x Aluminum Premium Remote Control",
      "1x Ultra High Speed HDMI 2.1 Cable (2m)",
      "1x Wall Mount Kit & Template",
    ],
    reviews: [
      {
        author: "Dr. Karan M.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment:
          "Dialogue clarity is unbelievable. Movie explosions shake the sofa without any distortion.",
      },
    ],
  },
  {
    id: "aurora-magic-pen",
    name: "Aurora Precision Magic Pen Stylus with Barrel Roll",
    shortName: "Aurora Precision Magic Pen",
    brand: "Aurora Lab",
    pack: "Haptic Feedback • Gyro Roll",
    category: "gadgets",
    tag: "HAPTIC",
    price: 11999,
    originalPrice: 13999,
    discount: "14% OFF",
    rating: 4.9,
    ratingsCount: "7,600 Ratings",
    reviewsCount: "980 Reviews",
    badge: "Artist Precision",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Pixel-perfect accuracy, barrel roll gyroscope, haptic feedback engine, and magnetic wireless charging.",
    image: "/images/magicpen.jpg",
    images: ["/images/magicpen.jpg", "/images/mouse-grey.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Matte White",
        hex: "#f8f9fa",
        image: "/images/magicpen.jpg",
        price: 11999,
        orig: 13999,
      },
    ],
    offers: [
      {
        title: "Artist Discount",
        desc: "Extra ₹1,000 instant discount on pre-paid checkout",
      },
    ],
    highlights: [
      "Engineered haptic engine creates microscopic vibrations simulating real paper texture and pencil drag",
      "Barrel roll gyroscope allows natural shading and calligraphy brush rotation",
      "Virtually zero latency (2.8ms) for instantaneous digital drawing and notes",
      "Snaps magnetically onto tablet edge for instant Qi wireless charging",
    ],
    specs: [
      { label: "Pressure Sensitivity", val: "8,192 Pressure Levels" },
      { label: "Latency", val: "2.8 ms Ultra-Low Latency" },
      {
        label: "Battery",
        val: "14 Hours Continuous Use (Snap-on Magnetic Charge)",
      },
    ],
    inTheBox: [
      "1x Aurora Precision Magic Pen",
      "3x Replacement Ceramic & POM Drawing Nibs",
      "1x Nib Removal Tool",
    ],
    reviews: [
      {
        author: "Tanvi S.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment:
          "Feels exactly like drawing on heavy archival paper with a 2B pencil. Outstanding engineering!",
      },
    ],
  },
  {
    id: "aurora-keyboard",
    name: "Mechanical Haptic Numpad & Keyboard Slate/Orange MK-1",
    shortName: "Aurora Mechanical Keyboard",
    brand: "Aurora Lab",
    pack: "Hot-Swap Switches • Gasket Mounted",
    category: "gadgets",
    tag: "HAPTIC MK-1",
    price: 14999,
    originalPrice: 18999,
    discount: "21% OFF",
    rating: 4.8,
    ratingsCount: "5,400 Ratings",
    reviewsCount: "710 Reviews",
    badge: "Pro Mechanical",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Premium gasket-mounted mechanical keyboard with pre-lubed tactile switches, PBT keycaps and coiled aviator cable.",
    image: "/images/keyboard-slate.jpg",
    images: ["/images/keyboard-slate.jpg", "/images/keyboard-orange.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Slate Grey",
        hex: "#3a3d40",
        image: "/images/keyboard-slate.jpg",
        price: 14999,
        orig: 18999,
      },
      {
        name: "Cyber Orange",
        hex: "#ff6f00",
        image: "/images/keyboard-orange.jpg",
        price: 14999,
        orig: 18999,
      },
    ],
    offers: [
      {
        title: "Desk Setup Special",
        desc: "Includes custom coiled aviator USB-C cable free",
      },
    ],
    highlights: [
      "Gasket mounted structure with 5-layer acoustic dampening foam produces deep 'thocky' acoustics",
      "Factory pre-lubricated custom tactile mechanical switches with 50 million keystroke lifespan",
      "Double-shot thick PBT keycaps with crisp legends that will never wear off or develop shine",
    ],
    specs: [
      {
        label: "Switch Type",
        val: "Hot-Swappable 5-Pin Tactile Aurora Cream Switches",
      },
      { label: "Mounting", val: "Gasket Mount with Polycarbonate Plate" },
      {
        label: "Connectivity",
        val: "Tri-Mode (Bluetooth 5.2, 2.4Ghz Wireless, USB-C)",
      },
    ],
    inTheBox: [
      "1x Aurora Mechanical Keyboard MK-1",
      "1x Braided Coiled Aviator Cable (Type-C)",
      "1x 2-in-1 Keycap & Switch Puller Tool",
      "4x Extra Accent Keycaps",
    ],
    reviews: [
      {
        author: "Karthik E.",
        stars: "★★★★★",
        date: "Verified yesterday",
        comment:
          "The sound profile is pure ASMR. Best mechanical keyboard I have ever owned.",
      },
    ],
  },
  {
    id: "magcharge-qi2",
    name: "MagCharge Qi2 15W Fast 3-in-1 Wireless Charging Stand",
    shortName: "MagCharge Qi2 Stand",
    brand: "MagCharge",
    pack: "15W MagSafe • iPhone, Watch & Buds",
    category: "gadgets",
    tag: "QI2 FAST",
    price: 4999,
    originalPrice: 7499,
    discount: "33% OFF",
    rating: 4.7,
    ratingsCount: "9,800 Ratings",
    reviewsCount: "1,200 Reviews",
    badge: "Desk Essential",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Next-gen Qi2 magnetic 15W fast wireless charging for iPhone, Apple Watch fast charging, and AirPods wireless pad.",
    image: "/images/charger-black.jpg",
    images: ["/images/charger-black.jpg", "/images/charger-white.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Obsidian Black",
        hex: "#1a1a1a",
        image: "/images/charger-black.jpg",
        price: 4999,
        orig: 7499,
      },
      {
        name: "Glacier White",
        hex: "#f0f2f5",
        image: "/images/charger-white.jpg",
        price: 4999,
        orig: 7499,
      },
    ],
    offers: [
      {
        title: "Power Adapter Included",
        desc: "Comes with 30W USB-C GaN power brick in the box",
      },
    ],
    highlights: [
      "Official Qi2 magnetic alignment delivers full 15W high-speed wireless charging to iPhone 13-16",
      "Weighted aerospace aluminum stand keeps your phone elevated at ideal StandBy viewing angle",
      "Simultaneously powers 3 devices: Smartphone (15W), Smartwatch (5W), and Earbuds (5W)",
    ],
    specs: [
      {
        label: "Wireless Standard",
        val: "Official Qi2 Magnetic Induction 15W",
      },
      { label: "Total Output", val: "25W Simultaneous Multi-Device Delivery" },
    ],
    inTheBox: [
      "1x MagCharge Qi2 3-in-1 Charging Stand",
      "1x 30W GaN Fast Wall Adapter",
      "1x Braided USB-C to USB-C Cable (1.5m)",
    ],
    reviews: [
      {
        author: "Siddharth N.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment:
          "Cleared all cable clutter from my nightstand. Strong magnetic hold!",
      },
    ],
  },
  {
    id: "gan-100w-charger",
    name: "GaN 100W Multi-Port Ultra Fast Desktop Wall Charger",
    shortName: "GaN 100W Fast Charger",
    brand: "VoltCraft",
    pack: "100W PD 3.0 • 3x USB-C + 1x USB-A",
    category: "gadgets",
    tag: "100W GAN",
    price: 3499,
    originalPrice: 4999,
    discount: "30% OFF",
    rating: 4.8,
    ratingsCount: "14,300 Ratings",
    reviewsCount: "1,800 Reviews",
    badge: "MacBook Ready",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Gallium Nitride (GaN III) chip delivers 100W laptop fast charging in half the size of standard adapters.",
    image: "/images/charger-white.jpg",
    images: ["/images/charger-white.jpg", "/images/charger-black.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Glacier White",
        hex: "#f0f2f5",
        image: "/images/charger-white.jpg",
        price: 3499,
        orig: 4999,
      },
      {
        name: "Midnight Black",
        hex: "#1a1a1a",
        image: "/images/charger-black.jpg",
        price: 3499,
        orig: 4999,
      },
    ],
    offers: [
      { title: "Cable Combo", desc: "Includes 100W 5A E-Marker braided cable" },
    ],
    highlights: [
      "Powers a 16-inch MacBook Pro from 0 to 50% in just 30 minutes",
      "Smart power distribution dynamically splits 100W across 4 connected gadgets",
      "GaN III technology runs 30% cooler than silicon chargers",
    ],
    specs: [
      { label: "Total Power", val: "100W Maximum Output" },
      {
        label: "Ports",
        val: "3x USB-C Power Delivery + 1x USB-A Quick Charge 4.0",
      },
    ],
    inTheBox: [
      "1x VoltCraft 100W GaN III Fast Charger",
      "1x 100W 5A E-Marker Braided USB-C Cable (2m)",
    ],
    reviews: [
      {
        author: "Rishabh K.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment:
          "One single brick charges my laptop, phone, watch, and kindle all at once.",
      },
    ],
  },
  {
    id: "laptop-riser-stand",
    name: "Ergonomic Aerospace Aluminum 360° Swivel Laptop Stand",
    shortName: "Aluminum Laptop Riser",
    brand: "DeskErgo",
    pack: "Foldable • 360° Rotating Base",
    category: "gadgets",
    tag: "360° SWIVEL",
    price: 2199,
    originalPrice: 3499,
    discount: "37% OFF",
    rating: 4.7,
    ratingsCount: "8,900 Ratings",
    reviewsCount: "1,100 Reviews",
    badge: "Spine Friendly",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Solid CNC milled aluminum stand with smooth 360-degree rotating turntable base and dual height adjustment hinges.",
    image: "/images/stand.jpg",
    images: ["/images/stand.jpg", "/images/cable.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Silver Anodized",
        hex: "#d1d5db",
        image: "/images/stand.jpg",
        price: 2199,
        orig: 3499,
      },
    ],
    offers: [
      {
        title: "Ergonomic Bundle",
        desc: "Save ₹300 when ordered with Aurora Master Mouse",
      },
    ],
    highlights: [
      "Raises laptop screen up to 10 inches to match natural eye level and prevent neck hunching",
      "360-degree ball-bearing swivel base clicks smoothly when turning to share screen in meetings",
      "Hollow cooling vents ensure maximum airflow to keep laptop CPU chilled",
    ],
    specs: [
      { label: "Material", val: "Solid 4mm Aerospace Anodized Aluminum" },
      {
        label: "Compatibility",
        val: "All laptops from 10 inches to 17.3 inches",
      },
      { label: "Load Capacity", val: "Up to 10 kg without sagging" },
    ],
    inTheBox: [
      "1x Ergonomic 360° Aluminum Laptop Stand",
      "1x Hex Key Hinge Tightening Tool",
    ],
    reviews: [
      {
        author: "Aakash M.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment:
          "Rock solid. Does not wobble even when typing furiously on heavy 16-inch gaming laptop.",
      },
    ],
  },
  {
    id: "thunderbolt-cable",
    name: "Braided 240W Thunderbolt 4 USB-C Cable (40Gbps & 8K Video)",
    shortName: "240W Thunderbolt 4 Cable",
    brand: "VoltCraft",
    pack: "40Gbps • 8K Display • 240W PD",
    category: "gadgets",
    tag: "40GBPS / 240W",
    price: 1499,
    originalPrice: 2499,
    discount: "40% OFF",
    rating: 4.9,
    ratingsCount: "6,800 Ratings",
    reviewsCount: "890 Reviews",
    badge: "Certified TB4",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Ultra-fast certified Thunderbolt 4 braided cable delivering up to 40Gbps data, 8K 60Hz single monitor or dual 4K, and 240W charging.",
    image: "/images/cable.jpg",
    images: ["/images/cable.jpg", "/images/charger-black.jpg"],
    variantType: "pack",
    variants: [
      {
        name: "1 Meter Cable",
        price: 1499,
        orig: 2499,
        image: "/images/cable.jpg",
      },
      {
        name: "2 Meter Cable",
        price: 1899,
        orig: 2999,
        image: "/images/cable.jpg",
      },
    ],
    offers: [
      {
        title: "High Speed Data",
        desc: "Transfers 4K movies in under 5 seconds",
      },
    ],
    highlights: [
      "40Gbps data bandwidth supports external eGPU, NVMe SSD enclosures, and 8K displays",
      "EPR 240W Power Delivery charges all high-end gaming laptops and MacBooks at max speed",
      "Reinforced ballistic nylon braiding tested for 30,000+ bends",
    ],
    specs: [
      { label: "Data Bandwidth", val: "Up to 40 Gbps" },
      { label: "Video Output", val: "Single 8K@60Hz or Dual 4K@120Hz" },
      { label: "Charging", val: "240W (48V / 5A) EPR Certified" },
    ],
    inTheBox: [
      "1x Braided 240W Thunderbolt 4 USB-C Cable",
      "1x Silicone Cable Organizer Strap",
    ],
    reviews: [
      {
        author: "Mayank T.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment:
          "Drives my 5K Studio Display and charges laptop with single neat cable.",
      },
    ],
  },
  {
    id: "magnetic-wallet",
    name: "Slim 5.1mm Bifold Magnetic Card Wallet & Phone Stand",
    shortName: "Slim 5.1mm Magnetic Wallet",
    brand: "DeskErgo",
    pack: "5.1mm Slim • MagSafe Stand",
    category: "gadgets",
    tag: "5.1MM SLIM",
    price: 1299,
    originalPrice: 1999,
    discount: "35% OFF",
    rating: 4.6,
    ratingsCount: "9,100 Ratings",
    reviewsCount: "1,040 Reviews",
    badge: "Everyday Carry",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Ultra-thin 5.1mm magnetic vegan leather wallet holding 3 cards with integrated portrait and landscape folding stand.",
    image: "/images/cat-fashion.jpg",
    images: ["/images/cat-fashion.jpg", "/images/mouse-black.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Caramel Brown",
        hex: "#8d5b4c",
        image: "/images/cat-fashion.jpg",
        price: 1299,
        orig: 1999,
      },
      {
        name: "Stealth Black",
        hex: "#1a1a1a",
        image: "/images/mouse-black.jpg",
        price: 1299,
        orig: 1999,
      },
    ],
    offers: [
      { title: "EDC Special", desc: "Save 35% on everyday carry combo" },
    ],
    highlights: [
      "Ultra-strong N52 neodymium magnets latch securely to MagSafe phones and cases",
      "Folds effortlessly into 3 viewing angles: Portrait, Landscape, and Floating desk mode",
      "RFID blocking lining protects credit cards from contactless skimming",
    ],
    specs: [
      { label: "Thickness", val: "Only 5.1 mm folded" },
      { label: "Capacity", val: "Holds 3 Cards + Cash Bill" },
      { label: "Material", val: "Premium Sustainable Vegan Leather" },
    ],
    inTheBox: ["1x Slim 5.1mm Bifold Magnetic Card Wallet"],
    reviews: [
      {
        author: "Rohan M.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Magnets are incredibly strong. Never slips off in my pocket.",
      },
    ],
  },
  {
    id: "flagship-phone-frame",
    name: "AeroShield Titanium Bumper Case with MagCharge Ring",
    shortName: "Titanium Bumper Case",
    brand: "DeskErgo",
    pack: "Grade 5 Titanium • MagCharge",
    category: "gadgets",
    tag: "NEW",
    price: 1999,
    originalPrice: 2999,
    discount: "33% OFF",
    rating: 4.8,
    ratingsCount: "5,100 Ratings",
    reviewsCount: "620 Reviews",
    badge: "Military Drop Rated",
    deliveryTime: "15-20 Mins",
    inStock: true,
    assured: true,
    description:
      "Grade 5 titanium alloy frame with shock-absorbing honeycomb corners and built-in MagSafe magnetic ring.",
    image: "/images/cat-chargers.jpg",
    images: ["/images/cat-chargers.jpg", "/images/stand.jpg"],
    variantType: "color",
    variants: [
      {
        name: "Natural Titanium",
        hex: "#9a9a9a",
        image: "/images/cat-chargers.jpg",
        price: 1999,
        orig: 2999,
      },
      {
        name: "Dark Titanium",
        hex: "#2b2b2b",
        image: "/images/stand.jpg",
        price: 1999,
        orig: 2999,
      },
    ],
    offers: [
      {
        title: "Protection Guarantee",
        desc: "Includes 9H tempered glass screen protector free",
      },
    ],
    highlights: [
      "Precision CNC machined Grade 5 titanium edge bumper feels ultra-sleek and lightweight",
      "12-foot military drop tested with internal corner air cushions",
      "Raised 1.5mm lips protect camera lenses and front OLED screen from scratches",
    ],
    specs: [
      { label: "Material", val: "Aerospace Grade 5 Titanium + Bayer TPU" },
      { label: "Drop Standard", val: "MIL-STD-810H (12ft Drop Certified)" },
    ],
    inTheBox: [
      "1x AeroShield Titanium Bumper Case",
      "1x 9H Tempered Glass Screen Guard & Cleaning Kit",
    ],
    reviews: [
      {
        author: "Sanjay D.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment:
          "Feels exactly like the natural phone finish without bulky case rubber.",
      },
    ],
  },
  // ==========================================
  // CATEGORY 5: FURNITURE & HOME DECOR (15 Items)
  // ==========================================
  {
    id: "furn-1",
    name: "Solid Sheesham Wood Shoe Rack Bench with Padded Cushion",
    shortName: "Shoe Rack Bench",
    brand: "Wakefit",
    pack: "Solid Sheesham • 3-Tier Storage",
    category: "furniture",
    tag: "BESTSELLER",
    price: 2499,
    originalPrice: 4999,
    discount: "50% OFF",
    rating: 4.8,
    ratingsCount: "14,820 Ratings",
    reviewsCount: "2,190 Reviews",
    badge: "Top Seller",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Handcrafted from 100% seasoned Sheesham hardwood with natural wood grain. Built-in high-density cushion seat and dual slatted shoe shelves with utility drawer.",
    image: "/images/furniture/shoe-rack.jpg",
    images: ["/images/furniture/shoe-rack.jpg", "/images/furniture/storage-drawers.jpg"],
    variantType: "finish",
    variants: [
      { name: "Teak Brown", price: 2499, orig: 4999, image: "/images/furniture/shoe-rack.jpg" },
      { name: "Walnut Finish", price: 2699, orig: 5299, image: "/images/furniture/shoe-rack.jpg" },
      { name: "Honey Oak", price: 2599, orig: 5199, image: "/images/furniture/shoe-rack.jpg" },
    ],
    offers: [
      { title: "No Cost EMI", desc: "Available on all major credit cards starting ₹416/mo" },
      { title: "Bank Offer", desc: "Flat ₹250 instant discount with SwiftPay Card" },
      { title: "Free Assembly", desc: "Free carpenter doorstep installation included" },
    ],
    highlights: [
      "Crafted with 100% seasoned Sheesham hardwood with natural wood grain",
      "High-density ergonomic sponge cushion upholstered in premium linen fabric",
      "Holds up to 10 pairs of footwear across dual open ventilated slatted shelves",
      "Hidden utility drawer on smooth telescopic slide runners for keys & accessories",
      "Tested load-bearing capacity up to 180 kg with anti-scratch floor protectors",
    ],
    specs: [
      { label: "Primary Material", val: "Solid Sheesham Wood (Indian Rosewood)" },
      { label: "Upholstery", val: "Premium Washable Linen Fabric Cushion" },
      { label: "Dimensions", val: "85 cm (W) x 35 cm (D) x 48 cm (H)" },
      { label: "Seating Capacity", val: "2 Persons (Up to 180 kg load)" },
      { label: "Assembly", val: "Pre-assembled (Do-it-yourself handles only)" },
      { label: "Warranty", val: "3 Years Manufacturer Structural Warranty" },
      { label: "Country of Origin", val: "India" },
    ],
    inTheBox: [
      "1x Solid Sheesham Shoe Rack Bench Unit",
      "1x Removable Padded Linen Seat Cushion",
      "Hardware Fitting Kit & Hex Key",
      "Care Instructions & 3-Year Warranty Card",
    ],
    reviews: [
      {
        author: "Rahul Sharma",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Super sturdy wood and very premium cushion! Fits 9 pairs of shoes easily.",
      },
      {
        author: "Pooja Hegde",
        stars: "★★★★★",
        date: "Verified 2 weeks ago",
        comment: "Arrived in great packaging. The wood grain looks beautiful in our entryway.",
      },
    ],
  },
  {
    id: "furn-2",
    name: "Scandinavian 5-Drawer Modular Storage Chest & Dresser",
    shortName: "Modular Drawers",
    brand: "IKEA Style",
    pack: "5-Tier Chest • Silent Glides",
    category: "furniture",
    tag: "HOT DEAL",
    price: 3299,
    originalPrice: 6599,
    discount: "50% OFF",
    rating: 4.7,
    ratingsCount: "11,350 Ratings",
    reviewsCount: "1,640 Reviews",
    badge: "Best Value",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Minimalist Scandinavian design with 5 spacious drawers. Dual-tone natural oak and matte white finish with smooth ball-bearing soft-close slide rails.",
    image: "/images/furniture/storage-drawers.jpg",
    images: ["/images/furniture/storage-drawers.jpg", "/images/furniture/shoe-rack.jpg"],
    variantType: "finish",
    variants: [
      { name: "Oak & White", price: 3299, orig: 6599, image: "/images/furniture/storage-drawers.jpg" },
      { name: "Dark Walnut", price: 3499, orig: 6999, image: "/images/furniture/storage-drawers.jpg" },
    ],
    offers: [
      { title: "Special Deal", desc: "Extra ₹200 off on checkout with SwiftMart UPI" },
      { title: "Free Assembly", desc: "Free doorstep installation within 48 hours" },
    ],
    highlights: [
      "5 heavy-duty pullout drawers with deep storage space for clothes and essentials",
      "Smooth full-extension ball-bearing metal runners with anti-tip safety anchors",
      "Moisture-resistant scratch-proof melamine laminate top",
      "Solid tapered solid pine wood legs elevated 12cm for easy robotic vacuum cleaning",
    ],
    specs: [
      { label: "Material", val: "Engineered Wood & Solid Pine Wood Legs" },
      { label: "Finish", val: "Matte Polyurethane Protective Coating" },
      { label: "Dimensions", val: "70 cm (W) x 40 cm (D) x 105 cm (H)" },
      { label: "Weight", val: "32 kg" },
      { label: "Warranty", val: "2 Years Brand Warranty" },
    ],
    inTheBox: [
      "1x 5-Drawer Storage Chest",
      "Wall Anchoring Hardware Kit",
      "Assembly Guide",
    ],
    reviews: [
      {
        author: "Ananya Iyer",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "The drawers glide like butter. Very chic Scandinavian look.",
      },
    ],
  },
  {
    id: "furn-3",
    name: "Handcrafted Teakwood Carved Pooja Temple with Warm LED Mandir",
    shortName: "Carved Pooja Temple",
    brand: "MandirArt",
    pack: "Teakwood • Brass Bells & LED",
    category: "furniture",
    tag: "DIVINE CRAFT",
    price: 4599,
    originalPrice: 8999,
    discount: "49% OFF",
    rating: 4.9,
    ratingsCount: "19,200 Ratings",
    reviewsCount: "4,100 Reviews",
    badge: "Divine Craft",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Intricately hand-carved traditional wooden temple crafted from premium seasoned teakwood with warm integrated LED ambient illumination, pullout diya tray and storage drawer.",
    image: "/images/furniture/home-temple.jpg",
    images: ["/images/furniture/home-temple.jpg"],
    variantType: "finish",
    variants: [
      { name: "Antique Teak", price: 4599, orig: 8999, image: "/images/furniture/home-temple.jpg" },
      { name: "Rosewood Gloss", price: 4899, orig: 9499, image: "/images/furniture/home-temple.jpg" },
    ],
    offers: [
      { title: "Festive Offer", desc: "Free brass diya & bell accessories pack included" },
      { title: "Bank Offer", desc: "10% Instant Discount on HDFC & ICICI cards" },
    ],
    highlights: [
      "Exquisite lattice jaali work backdrop with traditional temple dome kalash",
      "Warm waterproof LED backlight casts divine shadows on deities",
      "Pullout Prasad & incense tray with high-load bearing capacity",
      "Spacious bottom storage drawer for pooja samagri, books and cotton wicks",
    ],
    specs: [
      { label: "Wood Type", val: "100% Solid Seasoned Teak Wood" },
      { label: "Lighting", val: "Warm 3000K Concealed Low-Voltage LED Strip" },
      { label: "Dimensions", val: "60 cm (W) x 30 cm (D) x 80 cm (H)" },
      { label: "Mounting", val: "Wall Mountable or Floor Standing" },
      { label: "Warranty", val: "5 Years Structural Guarantee" },
    ],
    inTheBox: [
      "1x Handcrafted Teak Pooja Temple",
      "1x 12V Power Adapter with 2-Meter Cable",
      "Heavy-Duty Wall Mounting Brackets",
      "Brass Bell Set & Cleaning Microfiber Cloth",
    ],
    reviews: [
      {
        author: "Venkat Raman",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment: "The carving work is breathtaking. The LED backlight creates such a peaceful aura.",
      },
    ],
  },
  {
    id: "furn-4",
    name: "Nordic Wingback Velvet Accent Chair Lounge Reading Armchair",
    shortName: "Velvet Accent Chair",
    brand: "Urban Ladder",
    pack: "Royal Velvet • Matte Black Legs",
    category: "furniture",
    tag: "TRENDING",
    price: 5499,
    originalPrice: 9999,
    discount: "45% OFF",
    rating: 4.8,
    ratingsCount: "8,940 Ratings",
    reviewsCount: "1,280 Reviews",
    badge: "Popular Pick",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Plush mid-century modern accent chair upholstered in stain-resistant velvet with contoured wingback lumbar support and powder-coated steel spindle legs.",
    image: "/images/furniture/accent-chair.jpg",
    images: ["/images/furniture/accent-chair.jpg"],
    variantType: "color",
    variants: [
      { name: "Mustard Gold", hex: "#d4a017", price: 5499, orig: 9999, image: "/images/furniture/accent-chair.jpg" },
      { name: "Emerald Green", hex: "#046307", price: 5699, orig: 10499, image: "/images/furniture/accent-chair.jpg" },
      { name: "Midnight Navy", hex: "#1e3a8a", price: 5499, orig: 9999, image: "/images/furniture/accent-chair.jpg" },
    ],
    offers: [
      { title: "No Cost EMI", desc: "Starting at ₹916/month on select cards" },
      { title: "Warranty Plus", desc: "1 Year extended foam density guarantee" },
    ],
    highlights: [
      "High-resilience 32-density cold foam provides plush contouring comfort",
      "Stain-shield treated velvet fabric resists liquid spills and pet fur",
      "Heavy-duty carbon steel legs with self-leveling floor glides",
      "Tested to support up to 150 kg static load without flexing",
    ],
    specs: [
      { label: "Fabric", val: "Premium Dutch Velvet (350 GSM)" },
      { label: "Frame", val: "Solid Kiln-Dried Eucalyptus Hardwood" },
      { label: "Dimensions", val: "75 cm (W) x 78 cm (D) x 88 cm (H)" },
      { label: "Seat Height", val: "45 cm from floor" },
      { label: "Warranty", val: "3 Years Frame & Foam Warranty" },
    ],
    inTheBox: [
      "1x Velvet Wingback Armchair Body",
      "4x Matte Black Carbon Steel Legs",
      "Hardware Bolt Pack & Allen Key",
    ],
    reviews: [
      {
        author: "Deepika Sen",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment: "The mustard yellow color is stunning! Perfect reading chair in my living room.",
      },
    ],
  },
  {
    id: "furn-5",
    name: "Nesting Round Marble Center Coffee Table Set of 2",
    shortName: "Marble Coffee Table",
    brand: "West Elm",
    pack: "Set of 2 • Natural Marble & Brass",
    category: "furniture",
    tag: "MODERN LIVING",
    price: 3899,
    originalPrice: 6999,
    discount: "44% OFF",
    rating: 4.7,
    ratingsCount: "6,410 Ratings",
    reviewsCount: "890 Reviews",
    badge: "Modern Living",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Pair of nesting round center tables featuring Italian Calacatta faux marble tops with heat-resistant nano coating and solid walnut finish wood legs.",
    image: "/images/furniture/coffee-table.jpg",
    images: ["/images/furniture/coffee-table.jpg"],
    variantType: "finish",
    variants: [
      { name: "White Marble & Walnut", price: 3899, orig: 6999, image: "/images/furniture/coffee-table.jpg" },
      { name: "Black Marble & Gold", price: 4199, orig: 7499, image: "/images/furniture/coffee-table.jpg" },
    ],
    offers: [
      { title: "Bank Discount", desc: "Extra ₹300 off on HDFC cards" },
      { title: "Free Returns", desc: "7-day hassle-free replacement" },
    ],
    highlights: [
      "Space-saving nesting design allows smaller table to slide underneath",
      "Scratch-resistant and waterproof sealed marble composite top",
      "Beveled polished edges for child-safe and elegant aesthetic",
      "Solid tapered wood legs with brass accent feet caps",
    ],
    specs: [
      { label: "Top Material", val: "Engineered Marble Stone (18mm thickness)" },
      { label: "Base", val: "Solid Malaysian Oak with Walnut Stain" },
      { label: "Large Table", val: "70 cm Dia x 45 cm Height" },
      { label: "Small Table", val: "50 cm Dia x 38 cm Height" },
      { label: "Warranty", val: "2 Years Brand Warranty" },
    ],
    inTheBox: [
      "1x Large Center Coffee Table",
      "1x Small Nesting Accent Table",
      "Assembly Bolts & Floor Protector Pads",
    ],
    reviews: [
      {
        author: "Aditya Roy",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Looks super premium. The marble top is smooth and heavy.",
      },
    ],
  },
  {
    id: "furn-6",
    name: "L-Shaped Sectional 3-Seater Comfort Fabric Living Room Sofa",
    shortName: "Sectional Living Sofa",
    brand: "HomeTown",
    pack: "3-Seater + Chaise Lounge",
    category: "furniture",
    tag: "MEGA DROP",
    price: 16999,
    originalPrice: 37999,
    discount: "55% OFF",
    rating: 4.9,
    ratingsCount: "14,200 Ratings",
    reviewsCount: "2,350 Reviews",
    badge: "Mega Drop",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Spacious L-shaped modular sectional sofa featuring premium breathable linen upholstery, pocket spring seat core, and deep chaise lounge.",
    image: "/images/furniture/sectional-sofa.jpg",
    images: ["/images/furniture/sectional-sofa.jpg"],
    variantType: "color",
    variants: [
      { name: "Heather Grey", hex: "#8e9196", price: 16999, orig: 37999, image: "/images/furniture/sectional-sofa.jpg" },
      { name: "Midnight Navy", hex: "#1e293b", price: 17499, orig: 38999, image: "/images/furniture/sectional-sofa.jpg" },
      { name: "Sand Beige", hex: "#d5ccbb", price: 16999, orig: 37999, image: "/images/furniture/sectional-sofa.jpg" },
    ],
    offers: [
      { title: "No Cost EMI", desc: "Starting ₹1,416/mo for 12 months" },
      { title: "Free White Glove Delivery", desc: "Room placement and assembly included" },
    ],
    highlights: [
      "Pocket spring base with 35-density supersoft foam for cloud-like seating",
      "Reversible chaise design allows left or right-side configuration",
      "Removable and washable cushion zip covers for easy maintenance",
      "Heavy kiln-dried Neem wood frame with anti-sag zigzag spring foundation",
    ],
    specs: [
      { label: "Dimensions", val: "215 cm (W) x 150 cm (Chaise D) x 85 cm (H)" },
      { label: "Frame", val: "Seasoned Solid Neem & Sal Wood" },
      { label: "Fabric", val: "380 GSM Heavy-Duty Poly-Linen" },
      { label: "Warranty", val: "5 Years Frame & Spring Warranty" },
    ],
    inTheBox: [
      "1x 3-Seater Sofa Section",
      "1x Chaise Lounge Section",
      "3x Backrest Cushions & 2x Throw Pillows",
      "Connecting Hardware Kit",
    ],
    reviews: [
      {
        author: "Karan Mehta",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Incredible value! The sofa is huge, deeply comfortable, and fabric quality is top tier.",
      },
    ],
  },
  {
    id: "furn-7",
    name: "Hydraulic Storage King Size Bed with Tufted Velvet Headboard",
    shortName: "Hydraulic Storage Bed",
    brand: "Sleepyhead",
    pack: "King Size 78x72 • Hydraulic Lift",
    category: "furniture",
    tag: "LUXURY SLEEP",
    price: 18499,
    originalPrice: 34999,
    discount: "47% OFF",
    rating: 4.8,
    ratingsCount: "17,600 Ratings",
    reviewsCount: "2,890 Reviews",
    badge: "Luxury Sleep",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Heavy-duty king size hydraulic storage bed with German gas lift struts, deep under-bed storage compartment, and tufted ergonomic headboard.",
    image: "/images/furniture/storage-bed.jpg",
    images: ["/images/furniture/storage-bed.jpg"],
    variantType: "size",
    variants: [
      { name: "King Size (78 x 72 in)", price: 18499, orig: 34999, image: "/images/furniture/storage-bed.jpg" },
      { name: "Queen Size (78 x 60 in)", price: 16499, orig: 31999, image: "/images/furniture/storage-bed.jpg" },
    ],
    offers: [
      { title: "No Cost EMI", desc: "₹1,541/mo on credit cards" },
      { title: "Free Assembly", desc: "Full expert installation included" },
    ],
    highlights: [
      "Effortless German engineered dual 1200N gas-lift hydraulic pistons",
      "Full-width 1000L storage chamber with dust-barrier bottom baseboard",
      "Diamond button-tufted headboard with 3-inch high-density cushioning",
      "Termite & borer resistant pre-laminated engineered wood construction",
    ],
    specs: [
      { label: "Mattress Size", val: "78 in x 72 in (King Size standard)" },
      { label: "Dimensions", val: "205 cm (L) x 190 cm (W) x 110 cm (Headboard H)" },
      { label: "Lift Mechanism", val: "Dual 1200N Heavy-Duty Pneumatic Struts" },
      { label: "Warranty", val: "5 Years Manufacturer Warranty" },
    ],
    inTheBox: [
      "1x King Bed Frame & Headboard",
      "Hydraulic Lifting Mechanism & Steel Slat Base",
      "Storage Floor Boards & Hardware Kit",
    ],
    reviews: [
      {
        author: "Sneha Patil",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "The hydraulic lift is so light that I can lift it with one hand. Tons of storage!",
      },
    ],
  },
  {
    id: "furn-8",
    name: "Executive Ergonomic High-Back Mesh Office Chair with 3D Armrests",
    shortName: "Executive Mesh Chair",
    brand: "Green Soul",
    pack: "High-Back • 3D Armrest & Lumbar",
    category: "furniture",
    tag: "WORK ESSENTIAL",
    price: 5899,
    originalPrice: 14999,
    discount: "60% OFF",
    rating: 4.9,
    ratingsCount: "22,500 Ratings",
    reviewsCount: "4,700 Reviews",
    badge: "Work Essential",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Engineered ergonomic office chair featuring Korean breathable mesh back, adaptive 2D lumbar support, multi-angle synchro-tilt lock, and heavy-duty Class-4 gas lift.",
    image: "/images/furniture/office-chair.jpg",
    images: ["/images/furniture/office-chair.jpg"],
    variantType: "color",
    variants: [
      { name: "All Black", hex: "#111111", price: 5899, orig: 14999, image: "/images/furniture/office-chair.jpg" },
      { name: "Grey & Chrome", hex: "#777777", price: 6199, orig: 15499, image: "/images/furniture/office-chair.jpg" },
    ],
    offers: [
      { title: "Special Discount", desc: "Flat 60% OFF festive price drop" },
      { title: "Corporate Billing", desc: "GST invoice available with input credit" },
    ],
    highlights: [
      "BIFMA-certified ergonomic design alleviates back fatigue during 10+ hour workdays",
      "Adaptive dynamic lumbar support flexes with spine posture movements",
      "3D multi-directional armrests adjust for height, depth, and pivot angles",
      "Class-4 heavy duty hydraulic gas lift with 135° synchro reclining tilt lock",
      "Heavy mirror-polished aluminum wheelbase with silent PU caster wheels",
    ],
    specs: [
      { label: "Weight Capacity", val: "Up to 150 kg" },
      { label: "Gas Lift", val: "BIFMA Level 4 Heavy Duty Cylinder" },
      { label: "Backrest Angle", val: "90° to 135° Multi-Lock" },
      { label: "Warranty", val: "3 Years Comprehensive On-Site Warranty" },
    ],
    inTheBox: [
      "1x Ergonomic Chair Backrest & Seat Unit",
      "1x Adjustable Headrest & 3D Armrests",
      "Aluminum Base & 5x Smooth Rolling PU Casters",
      "Assembly Screws & Hex Wrench",
    ],
    reviews: [
      {
        author: "Vikram Nambiar",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "My lower back pain disappeared in a week. Outstanding lumbar support and mesh.",
      },
    ],
  },
  {
    id: "furn-9",
    name: "Solid Teakwood 6-Seater Dining Table Set with Cushioned Chairs",
    shortName: "6-Seater Dining Set",
    brand: "Royal Oak",
    pack: "Table + 6 Cushioned Chairs",
    category: "furniture",
    tag: "FAMILY SPECIAL",
    price: 21999,
    originalPrice: 38999,
    discount: "43% OFF",
    rating: 4.8,
    ratingsCount: "9,800 Ratings",
    reviewsCount: "1,450 Reviews",
    badge: "Family Special",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Grand 6-seater dining set made from 100% solid seasoned teakwood with warm honey matte finish. Includes 6 ergonomic high-back chairs with stain-resistant fabric cushions.",
    image: "/images/furniture/dining-set.jpg",
    images: ["/images/furniture/dining-set.jpg"],
    variantType: "finish",
    variants: [
      { name: "Honey Teak", price: 21999, orig: 38999, image: "/images/furniture/dining-set.jpg" },
      { name: "Dark Walnut", price: 22499, orig: 39999, image: "/images/furniture/dining-set.jpg" },
    ],
    offers: [
      { title: "No Cost EMI", desc: "Starting ₹1,833/mo on all credit cards" },
      { title: "Free Assembly", desc: "Professional carpenter installation included" },
    ],
    highlights: [
      "100% solid timber construction with no MDF or hollow particle boards",
      "Heat and water-resistant polyurethane clear coat protects wood grains",
      "Chairs feature contoured back slats and 40mm thick foam seat padding",
      "Solid 4-inch square table legs ensure zero wobbling",
    ],
    specs: [
      { label: "Table Dimensions", val: "150 cm (L) x 90 cm (W) x 76 cm (H)" },
      { label: "Chair Dimensions", val: "45 cm (W) x 45 cm (D) x 95 cm (H)" },
      { label: "Material", val: "Solid Teak Wood (Sagwan)" },
      { label: "Warranty", val: "5 Years Manufacturer Warranty" },
    ],
    inTheBox: [
      "1x Solid Teakwood Dining Tabletop & 4 Legs",
      "6x Assembled Dining Chairs",
      "Mounting Bolts Kit & Wood Polish Sample",
    ],
    reviews: [
      {
        author: "Manish Agarwal",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Pure solid wood. The weight of the table and chairs speaks for the quality.",
      },
    ],
  },
  {
    id: "furn-10",
    name: "Architectural 5-Tier Open Display Geometric Wooden Bookshelf",
    shortName: "Architectural Bookshelf",
    brand: "DeckUp",
    pack: "5-Tier Open Unit • 40kg/Shelf",
    category: "furniture",
    tag: "TOP VALUE",
    price: 3499,
    originalPrice: 6999,
    discount: "50% OFF",
    rating: 4.7,
    ratingsCount: "7,300 Ratings",
    reviewsCount: "1,120 Reviews",
    badge: "Top Value",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Modern architectural S-style geometric bookcase featuring 5 spacious display tiers for books, artifacts, indoor planters and vinyl records.",
    image: "/images/furniture/bookshelf.jpg",
    images: ["/images/furniture/bookshelf.jpg"],
    variantType: "finish",
    variants: [
      { name: "Walnut & Matte Black", price: 3499, orig: 6999, image: "/images/furniture/bookshelf.jpg" },
      { name: "Natural Oak", price: 3499, orig: 6999, image: "/images/furniture/bookshelf.jpg" },
    ],
    offers: [
      { title: "Bank Offer", desc: "Extra ₹150 OFF with UPI payment" },
      { title: "Free Wall Anchor", desc: "Includes anti-tip safety bracket kit" },
    ],
    highlights: [
      "Architectural S-shaped alternating tiered layout creates a striking focal wall",
      "Reinforced 18mm engineered wood shelves support up to 40 kg per tier",
      "Scratch-proof and spill-resistant melamine protective textured coating",
      "Can be used as a room divider or free-standing against walls",
    ],
    specs: [
      { label: "Dimensions", val: "75 cm (W) x 30 cm (D) x 160 cm (H)" },
      { label: "Number of Tiers", val: "5 Open Shelves" },
      { label: "Material", val: "E1 Grade Engineered Wood" },
      { label: "Warranty", val: "2 Years Brand Warranty" },
    ],
    inTheBox: [
      "1x 5-Tier Bookshelf Component Panels",
      "Wall Mounting Anti-Tip Kit",
      "Assembly Fasteners & Manual",
    ],
    reviews: [
      {
        author: "Priya Sridhar",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment: "Transformed my study room! Holds my entire encyclopaedia collection without sagging.",
      },
    ],
  },
  {
    id: "furn-11",
    name: "Minimalist Dual Drawer Oak Bedside Table & Nightstand",
    shortName: "Oak Bedside Table",
    brand: "Nilkamal",
    pack: "Dual Drawer • Soft Glides",
    category: "furniture",
    tag: "BEDROOM",
    price: 1899,
    originalPrice: 3499,
    discount: "46% OFF",
    rating: 4.8,
    ratingsCount: "5,400 Ratings",
    reviewsCount: "780 Reviews",
    badge: "Bedroom Essential",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Compact bedside table with dual smooth-sliding drawers and open top surface. Designed with rounded bevelled corners and solid wood legs.",
    image: "/images/furniture/bedside-table.jpg",
    images: ["/images/furniture/bedside-table.jpg"],
    variantType: "finish",
    variants: [
      { name: "Natural Oak", price: 1899, orig: 3499, image: "/images/furniture/bedside-table.jpg" },
      { name: "Wenge Dark Brown", price: 1899, orig: 3499, image: "/images/furniture/bedside-table.jpg" },
    ],
    offers: [
      { title: "Bundle Savings", desc: "Buy Pair of 2 and get extra 10% discount" },
    ],
    highlights: [
      "Dual spacious storage drawers for reading glasses, phone chargers and books",
      "Smooth ball-bearing silent glide rails with brushed metal handles",
      "Elevated 15cm solid wood legs for easy floor sweeping and dusting",
      "Compact footprint fits beside any queen or king bed",
    ],
    specs: [
      { label: "Dimensions", val: "45 cm (W) x 38 cm (D) x 50 cm (H)" },
      { label: "Material", val: "Engineered Wood with Solid Wood Legs" },
      { label: "Warranty", val: "2 Years Brand Warranty" },
    ],
    inTheBox: [
      "1x Bedside Nightstand Unit",
      "4x Screw-in Solid Wood Legs",
      "Assembly Instructions",
    ],
    reviews: [
      {
        author: "Tanvi Roy",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Super cute and sturdy nightstand. Exactly the height of my mattress.",
      },
    ],
  },
  {
    id: "furn-12",
    name: "Compact Foldable Solid Wood Study & Writing Computer Desk",
    shortName: "Foldable Study Desk",
    brand: "Spacewood",
    pack: "Space-Saving Foldable Workstation",
    category: "furniture",
    tag: "SPACE SAVER",
    price: 2699,
    originalPrice: 5699,
    discount: "52% OFF",
    rating: 4.8,
    ratingsCount: "8,600 Ratings",
    reviewsCount: "1,240 Reviews",
    badge: "Space Saver",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "No-assembly folding home office desk. Sets up in 10 seconds and folds flat to 4cm depth for easy storage behind doors or under beds.",
    image: "/images/furniture/study-desk.jpg",
    images: ["/images/furniture/study-desk.jpg"],
    variantType: "finish",
    variants: [
      { name: "Rustic Walnut & Black", price: 2699, orig: 5699, image: "/images/furniture/study-desk.jpg" },
      { name: "Natural Birch & White", price: 2799, orig: 5899, image: "/images/furniture/study-desk.jpg" },
    ],
    offers: [
      { title: "Student Offer", desc: "Extra ₹200 OFF on educational purchase" },
    ],
    highlights: [
      "Zero assembly required: unfolds and locks into place in under 10 seconds",
      "Heavy-duty carbon steel frame with triangular stability reinforcement",
      "Spacious 100cm desktop easily accommodates laptop, dual monitor and notebooks",
      "Waterproof and heat-resistant textured woodgrain tabletop",
    ],
    specs: [
      { label: "Dimensions", val: "100 cm (W) x 50 cm (D) x 75 cm (H)" },
      { label: "Folded Thickness", val: "Only 4.5 cm" },
      { label: "Weight Capacity", val: "Up to 80 kg" },
      { label: "Warranty", val: "3 Years Frame Warranty" },
    ],
    inTheBox: [
      "1x Pre-Assembled Foldable Study Desk",
      "Adjustable Leveling Feet Pads",
    ],
    reviews: [
      {
        author: "Abhishek Verma",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Brilliant design! Takes zero space when folded and is rock steady when working.",
      },
    ],
  },
  {
    id: "furn-13",
    name: "Wall-Mounted Floating TV Entertainment Console with Ambient Light",
    shortName: "Floating TV Console",
    brand: "Bluewud",
    pack: "Wall Mount • For TVs up to 65 inch",
    category: "furniture",
    tag: "SMART MEDIA",
    price: 4999,
    originalPrice: 9699,
    discount: "48% OFF",
    rating: 4.9,
    ratingsCount: "13,400 Ratings",
    reviewsCount: "2,050 Reviews",
    badge: "Smart Media",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Sleek wall-mounted media console with concealed cable pass-through channels, flip-down drop doors, and underglow ambient warm LED lighting.",
    image: "/images/furniture/tv-unit.jpg",
    images: ["/images/furniture/tv-unit.jpg"],
    variantType: "finish",
    variants: [
      { name: "Wenge & Frosted White", price: 4999, orig: 9699, image: "/images/furniture/tv-unit.jpg" },
      { name: "Smoked Grey Oak", price: 5299, orig: 9999, image: "/images/furniture/tv-unit.jpg" },
    ],
    offers: [
      { title: "Bank Offer", desc: "10% Instant Discount on credit cards" },
      { title: "Free Assembly", desc: "Wall mounting technician service included" },
    ],
    highlights: [
      "Designed to complement 43 to 65-inch flat and curved OLED TVs",
      "Integrated cable management holes keep set-top box wires invisible",
      "Pneumatic soft-drop doors conceal gaming consoles and audio receivers",
      "Heavy-duty concealed French cleat wall mounting system tested to 60 kg",
    ],
    specs: [
      { label: "Dimensions", val: "140 cm (W) x 25 cm (D) x 22 cm (H)" },
      { label: "Compatible TV Sizes", val: "Up to 65 Inches" },
      { label: "Material", val: "High Density Moisture-Resistant Engineered Wood" },
      { label: "Warranty", val: "3 Years Manufacturer Warranty" },
    ],
    inTheBox: [
      "1x Floating TV Unit Console",
      "Heavy Duty Wall Anchor Expansion Bolts",
      "Cable Grommet Caps & LED Strip Kit",
    ],
    reviews: [
      {
        author: "Girish K.",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment: "Gives a luxury theater look to our living room! Hides all messy cords.",
      },
    ],
  },
  {
    id: "furn-14",
    name: "Modern 3-Door Wooden Wardrobe Closet with Full-Length Mirror",
    shortName: "3-Door Mirror Wardrobe",
    brand: "Godrej Interio",
    pack: "3-Door • Full Mirror & Lockers",
    category: "furniture",
    tag: "BEDROOM LUXE",
    price: 13999,
    originalPrice: 24999,
    discount: "44% OFF",
    rating: 4.7,
    ratingsCount: "11,800 Ratings",
    reviewsCount: "1,790 Reviews",
    badge: "Bedroom Luxe",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Spacious 3-door wardrobe with full-length dressing mirror, dual internal hanger rods, multiple folded clothes shelves, and secure key-locked internal drawer.",
    image: "/images/furniture/wardrobe.jpg",
    images: ["/images/furniture/wardrobe.jpg"],
    variantType: "finish",
    variants: [
      { name: "Teak Brown & Ivory", price: 13999, orig: 24999, image: "/images/furniture/wardrobe.jpg" },
      { name: "Contemporary Walnut", price: 14499, orig: 25999, image: "/images/furniture/wardrobe.jpg" },
    ],
    offers: [
      { title: "No Cost EMI", desc: "Available starting ₹1,166/mo" },
      { title: "Free Assembly", desc: "Full doorstep assembly by certified carpenter" },
    ],
    highlights: [
      "Full-length crystal clear distortion-free dressing mirror on center door",
      "Stainless steel hanging rods support heavy winter coats and sarees",
      "Internal lockable privacy drawer for jewelry, watches and valuables",
      "Soft-close concealed German hinges with 50,000 cycle test certification",
    ],
    specs: [
      { label: "Dimensions", val: "120 cm (W) x 50 cm (D) x 195 cm (H)" },
      { label: "Material", val: "Commercial Grade Pre-Laminated Particle Board" },
      { label: "Locking Mechanism", val: "Dual Security Keys with Central Lock" },
      { label: "Warranty", val: "5 Years Brand Warranty" },
    ],
    inTheBox: [
      "1x 3-Door Wardrobe Panel Sets",
      "Full Length Beveled Mirror Pane",
      "2x Stainless Steel Hanging Rods & Lock Keys",
    ],
    reviews: [
      {
        author: "Nalini Pillai",
        stars: "★★★★★",
        date: "Verified 2 weeks ago",
        comment: "Huge storage capacity. The mirror is crystal clear and assembly team was very prompt.",
      },
    ],
  },
  {
    id: "furn-15",
    name: "Swivel Counter-Height Bar Stool Pair with Padded Faux Leather",
    shortName: "Swivel Bar Stool Pair",
    brand: "Duroflex",
    pack: "Set of 2 • 360° Swivel & Hydraulic",
    category: "furniture",
    tag: "KITCHEN TREND",
    price: 3699,
    originalPrice: 6999,
    discount: "47% OFF",
    rating: 4.8,
    ratingsCount: "7,900 Ratings",
    reviewsCount: "1,180 Reviews",
    badge: "Kitchen Trend",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Set of 2 modern kitchen island bar stools featuring 360-degree smooth swivel, gas-lift height adjustment from 60cm to 82cm, footrest ring, and cushioned faux leather.",
    image: "/images/furniture/bar-stools.jpg",
    images: ["/images/furniture/bar-stools.jpg"],
    variantType: "color",
    variants: [
      { name: "Matte Black", hex: "#1a1a1a", price: 3699, orig: 6999, image: "/images/furniture/bar-stools.jpg" },
      { name: "Cognac Brown", hex: "#8b4513", price: 3899, orig: 7299, image: "/images/furniture/bar-stools.jpg" },
      { name: "Cloud Grey", hex: "#9ca3af", price: 3699, orig: 6999, image: "/images/furniture/bar-stools.jpg" },
    ],
    offers: [
      { title: "Special Deal", desc: "Extra ₹250 instant discount on payment via UPI" },
    ],
    highlights: [
      "Smooth 360° fluid swivel mechanism allows easy movement at kitchen counters",
      "Pneumatic height adjustment lever smoothly adjusts seat height from 60 to 82 cm",
      "Heavy-duty 41cm circular chrome base with anti-scratch rubber floor ring",
      "Ergonomic half-back support with thick high-density foam padding",
    ],
    specs: [
      { label: "Seat Height Range", val: "60 cm to 82 cm" },
      { label: "Seat Dimensions", val: "40 cm (W) x 38 cm (D)" },
      { label: "Weight Capacity", val: "130 kg per stool" },
      { label: "Warranty", val: "2 Years Brand Warranty" },
    ],
    inTheBox: [
      "2x Swivel Padded Seat Tops",
      "2x Hydraulic Gas Lift Cylinders & Footrest Rings",
      "2x Heavy-Duty Base Plates & Hardware Kit",
    ],
    reviews: [
      {
        author: "Siddharth Jain",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Perfect for our breakfast island! The height adjustment is very smooth.",
      },
    ],
  },
  // ==========================================
  // CATEGORY 6: WISHLIST & LIFESTYLE (15 Items)
  // ==========================================
  {
    id: "wish-1",
    name: "Yahweh Yireh Unisex Premium Heavyweight Graphic Cotton T-Shirt",
    shortName: "Yahweh Graphic T-Shirt",
    brand: "Yahweh Yireh",
    pack: "100% Combed Cotton • 240 GSM",
    category: "wishlist",
    tag: "BESTSELLER",
    price: 699,
    originalPrice: 1799,
    discount: "61% OFF",
    rating: 4.8,
    ratingsCount: "22,480 Ratings",
    reviewsCount: "3,120 Reviews",
    badge: "Bestseller",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Crafted with 240 GSM dense combed cotton, offering a structured drop-shoulder boxy fit. Minimalist typographic chest print with ribbed crew neck collar and bio-wash anti-pilling treatment.",
    image: "/images/deal-apparel.jpg",
    images: ["/images/deal-apparel.jpg", "/images/deal-apparel.jpg"],
    variantType: "size",
    variants: [
      { name: "S (38 in)", price: 699, orig: 1799, image: "/images/deal-apparel.jpg" },
      { name: "M (40 in)", price: 699, orig: 1799, image: "/images/deal-apparel.jpg" },
      { name: "L (42 in)", price: 699, orig: 1799, image: "/images/deal-apparel.jpg" },
      { name: "XL (44 in)", price: 749, orig: 1899, image: "/images/deal-apparel.jpg" },
    ],
    offers: [
      { title: "Bank Offer", desc: "10% Instant discount on Axis Bank cards" },
      { title: "Combo Offer", desc: "Buy 2 get additional 15% off at checkout" },
      { title: "Free Delivery", desc: "Standard delivery free on orders above ₹499" },
    ],
    highlights: [
      "240 GSM ultra-heavyweight combed organic cotton fabric",
      "Modern boxy oversized drop-shoulder unisex silhouette",
      "Durable screen print with high-density water-based ink",
      "Pre-shrunk and bio-washed for zero shrinkage and ultra-soft touch",
      "Double needle hemmed sleeves and reinforced collar tape",
    ],
    specs: [
      { label: "Material", val: "100% Combed Heavy Cotton" },
      { label: "Fabric Weight", val: "240 GSM Heavyweight" },
      { label: "Neckline", val: "Ribbed Crew Neck" },
      { label: "Fit Type", val: "Relaxed Boxy Fit" },
      { label: "Wash Care", val: "Machine wash cold inside out, tumble dry low" },
      { label: "Country of Origin", val: "India" },
    ],
    inTheBox: ["1x Yahweh Yireh Graphic Cotton T-Shirt", "Authentic Hologram Tag"],
    reviews: [
      {
        author: "Dev Patel",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "Insane quality! Fabric is super thick and holds its shape after multiple washes.",
      },
      {
        author: "Ananya Roy",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "The drop shoulder fit looks very aesthetic. Exactly as shown in photos.",
      },
    ],
  },
  {
    id: "wish-2",
    name: "Clinique Pop Lip Colour + Primer Longwear Velvet Matte Lipstick",
    shortName: "Clinique Pop Lipstick",
    brand: "Clinique",
    pack: "3.9g Bullet • 8-Hr Hydration",
    category: "wishlist",
    tag: "TOP RATED",
    price: 1199,
    originalPrice: 2999,
    discount: "60% OFF",
    rating: 4.9,
    ratingsCount: "16,740 Ratings",
    reviewsCount: "2,410 Reviews",
    badge: "Top Rated",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Weightless velvet formula combines bold, saturated pigment with a smoothing built-in primer. Delivers an effortless matte finish without drying lips for up to 8 hours.",
    image: "/images/deal-lipsticks.jpg",
    images: ["/images/deal-lipsticks.jpg", "/images/deal-lipsticks.jpg"],
    variantType: "shade",
    variants: [
      { name: "Ruby Pop (Vibrant Red)", price: 1199, orig: 2999, image: "/images/deal-lipsticks.jpg" },
      { name: "Cherry Pop (Rich Berry)", price: 1199, orig: 2999, image: "/images/deal-lipsticks.jpg" },
      { name: "Bare Pop (Nude Pink)", price: 1249, orig: 3099, image: "/images/deal-lipsticks.jpg" },
    ],
    offers: [
      { title: "Beauty Combo", desc: "Complimentary mini cleanser on orders over ₹1500" },
      { title: "Bank Offer", desc: "Flat ₹150 cashback with UPI payments" },
    ],
    highlights: [
      "Dual-action formula with nourishing built-in lip primer",
      "Non-drying velvet matte texture with intense 8-hour color payoff",
      "Dermatologist developed, 100% fragrance-free and allergy tested",
      "Infused with shea and murumuru butters to lock in deep moisture",
      "Glides effortlessly on lips without feathering or bleeding",
    ],
    specs: [
      { label: "Product Type", val: "Lip Colour + Primer Stick" },
      { label: "Finish", val: "Velvet Satin Matte" },
      { label: "Net Quantity", val: "3.9 g" },
      { label: "Skin Type", val: "Suitable for all skin types" },
      { label: "Formulation", val: "Paraben-Free, Fragrance-Free" },
      { label: "Country of Origin", val: "Belgium" },
    ],
    inTheBox: ["1x Clinique Pop Lip Colour Bullet (3.9g)"],
    reviews: [
      {
        author: "Meera Sen",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment: "Best lipstick I have ever owned! It does not dry my lips at all.",
      },
    ],
  },
  {
    id: "wish-3",
    name: "Royal Kashmiri Jumbo Walnuts & Handpicked Whole Exotic Spices Gift Jar",
    shortName: "Kashmiri Spices & Walnuts",
    brand: "Urban Harvest",
    pack: "750g Artisanal Gift Jar Set",
    category: "wishlist",
    tag: "MOST LOVED",
    price: 899,
    originalPrice: 1799,
    discount: "50% OFF",
    rating: 4.9,
    ratingsCount: "19,250 Ratings",
    reviewsCount: "3,400 Reviews",
    badge: "Most Loved",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "A curated connoisseur assortment of hand-broken Kashmiri snow-white walnut kernels, Ceylon cinnamon quills, green cardamom pods, and Malabar black pepper in airtight glass jars.",
    image: "/images/deal-dryfruits-jar.jpg",
    images: ["/images/deal-dryfruits-jar.jpg", "/images/deal-dryfruits-jar.jpg"],
    variantType: "pack",
    variants: [
      { name: "750g Trio Jar Set", price: 899, orig: 1799, image: "/images/deal-dryfruits-jar.jpg" },
      { name: "1.2kg Grand Heritage Box", price: 1399, orig: 2799, image: "/images/deal-dryfruits-jar.jpg" },
    ],
    offers: [
      { title: "Special Festive Offer", desc: "Extra ₹100 off on gourmet gift hampers" },
      { title: "Freshness Guaranteed", desc: "Vacuum packed directly from Kashmiri orchards" },
    ],
    highlights: [
      "100% natural Grade-A Kashmiri Akhrot with exceptional natural oil content",
      "Artisanal spice medley with cinnamon, cardamom, cloves & star anise",
      "Handpicked and cold-sorted to ensure zero bitter kernels",
      "Packaged in reusable UV-tinted airtight glass jars for lasting freshness",
      "Rich source of Omega-3 fatty acids, antioxidants, and dietary fiber",
    ],
    specs: [
      { label: "Weight", val: "750 g (Net Wt)" },
      { label: "Diet Type", val: "Vegetarian, 100% Vegan & Gluten Free" },
      { label: "Origin", val: "Kashmir Valley, India" },
      { label: "Shelf Life", val: "9 Months from packaging date" },
      { label: "Storage", val: "Store in a cool, dry place away from sunlight" },
    ],
    inTheBox: ["3x 250g Airtight Embossed Glass Preserve Jars", "Authentic Kashmir Origin Seal"],
    reviews: [
      {
        author: "Kavita Rao",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Fresh, crisp and naturally sweet walnuts! The spices smell divine.",
      },
    ],
  },
  {
    id: "wish-4",
    name: "Pure Kanjivaram Zari Banarasi Woven Silk Wedding Saree with Blouse Piece",
    shortName: "Banarasi Silk Saree",
    brand: "Kalamandir",
    pack: "5.5m Saree + 0.8m Blouse",
    category: "wishlist",
    tag: "IN FOCUS NOW",
    price: 3499,
    originalPrice: 8999,
    discount: "61% OFF",
    rating: 4.8,
    ratingsCount: "11,800 Ratings",
    reviewsCount: "1,940 Reviews",
    badge: "Trending",
    deliveryTime: "2-3 Days Free Delivery",
    inStock: true,
    assured: true,
    description:
      "Royal aubergine purple and golden zari Banarasi silk saree featuring traditional floral motifs, opulent golden pallu border, and coordinating woven blouse fabric.",
    image: "/images/deal-saree.jpg",
    images: ["/images/deal-saree.jpg", "/images/deal-saree.jpg"],
    variantType: "color",
    variants: [
      { name: "Royal Aubergine Purple", price: 3499, orig: 8999, image: "/images/deal-saree.jpg" },
      { name: "Ruby Crimson Red", price: 3699, orig: 9299, image: "/images/deal-saree.jpg" },
      { name: "Peacock Emerald Green", price: 3599, orig: 9099, image: "/images/deal-saree.jpg" },
    ],
    offers: [
      { title: "Festive Wedding Discount", desc: "Flat ₹500 off using coupon SILK500" },
      { title: "Silk Mark Certified", desc: "100% authenticated pure silk guarantee" },
    ],
    highlights: [
      "Exquisite Banarasi weave on pure Kanjivaram art silk warp",
      "Heavy golden zari brocade work across the grand ornate pallu",
      "Includes matching 0.8m unstitched heavy zari brocade blouse piece",
      "Lustrous royal drape suitable for weddings, receptions, and festivals",
      "Silk Mark certified quality assurance",
    ],
    specs: [
      { label: "Fabric", val: "Pure Woven Art Silk with Metallic Zari" },
      { label: "Length", val: "Saree: 5.5 m | Blouse: 0.8 m" },
      { label: "Pattern", val: "Floral Jaal & Temple Zari Border" },
      { label: "Occasion", val: "Festive, Wedding, Party" },
      { label: "Wash Care", val: "Dry Clean Only" },
      { label: "Country of Origin", val: "India (Varanasi)" },
    ],
    inTheBox: ["1x Banarasi Woven Silk Saree", "1x Unstitched Blouse Fabric", "Silk Purity Card"],
    reviews: [
      {
        author: "Sunita Verma",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment: "Looked gorgeous for my brother's wedding! The purple and gold contrast is royal.",
      },
    ],
  },
  {
    id: "wish-5",
    name: "Chanderi Silk Floral Embroidered Anarkali Kurta Set with Chiffon Dupatta",
    shortName: "Chanderi Anarkali Set",
    brand: "Biba Luxe",
    pack: "3-Piece Festive Set",
    category: "wishlist",
    tag: "TRENDING ETHNIC",
    price: 2199,
    originalPrice: 4999,
    discount: "56% OFF",
    rating: 4.7,
    ratingsCount: "8,920 Ratings",
    reviewsCount: "1,240 Reviews",
    badge: "Festive Pick",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Flared silhouette Chanderi silk Anarkali kurta accented with intricate hand-embroidered resham zari threadwork, matching cotton silk pants, and lightweight chiffon dupatta.",
    image: "/images/deal-anarkali.jpg",
    images: ["/images/deal-anarkali.jpg", "/images/deal-anarkali.jpg"],
    variantType: "size",
    variants: [
      { name: "S (36 in)", price: 2199, orig: 4999, image: "/images/deal-anarkali.jpg" },
      { name: "M (38 in)", price: 2199, orig: 4999, image: "/images/deal-anarkali.jpg" },
      { name: "L (40 in)", price: 2199, orig: 4999, image: "/images/deal-anarkali.jpg" },
      { name: "XL (42 in)", price: 2299, orig: 5199, image: "/images/deal-anarkali.jpg" },
    ],
    offers: [
      { title: "Special Offer", desc: "Get matching earrings at 50% off on checkout" },
      { title: "No Cost EMI", desc: "Available on debit and credit cards" },
    ],
    highlights: [
      "Soft breathable Chanderi silk blend with Santoon inner lining",
      "Detailed gota patti neckline with delicate zari thread embellishments",
      "3.5-meter flared Anarkali ghera for sweeping festive movement",
      "Semi-elasticated straight trousers with side slash pocket",
      "Includes ethereal 2.25m printed chiffon dupatta with scalloped borders",
    ],
    specs: [
      { label: "Kurta Fabric", val: "Chanderi Silk Blend" },
      { label: "Bottom Fabric", val: "Cotton Silk" },
      { label: "Dupatta Fabric", val: "Poly Chiffon" },
      { label: "Sleeve Length", val: "Three-Quarter Sleeves" },
      { label: "Wash Care", val: "Gentle Hand Wash or Dry Clean" },
    ],
    inTheBox: ["1x Flared Anarkali Kurta", "1x Straight Pant", "1x Chiffon Dupatta"],
    reviews: [
      {
        author: "Ritu Singhal",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Fitting is perfect! Soft material and the flair is amazing.",
      },
    ],
  },
  {
    id: "wish-6",
    name: "22K Gold Plated Handcrafted Kundan & Pearl Jhumka Earrings",
    shortName: "Kundan Pearl Jhumkas",
    brand: "Zaveri Pearls",
    pack: "Pair of Chandbali Jhumkas",
    category: "wishlist",
    tag: "ELEGANT JEWELS",
    price: 799,
    originalPrice: 1999,
    discount: "60% OFF",
    rating: 4.8,
    ratingsCount: "14,300 Ratings",
    reviewsCount: "2,050 Reviews",
    badge: "Heritage Jewellery",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Exquisite temple bridal earrings detailed with micro-faceted Kundan crystals, hand-set pearl drop beads, and 22K yellow gold electroplating with hypoallergenic ear posts.",
    image: "/images/deal-earrings.jpg",
    images: ["/images/deal-earrings.jpg", "/images/deal-earrings.jpg"],
    variantType: "color",
    variants: [
      { name: "Gold & Ivory Pearl", price: 799, orig: 1999, image: "/images/deal-earrings.jpg" },
      { name: "Gold & Ruby Red Drops", price: 849, orig: 2099, image: "/images/deal-earrings.jpg" },
    ],
    offers: [
      { title: "Bank Offer", desc: "Instant ₹100 discount on any UPI transaction" },
      { title: "Gift Box", desc: "Ships in premium velvet-lined presentation jewelry box" },
    ],
    highlights: [
      "Royal Rajputana heritage design with floral crest and dome bell jhumka",
      "High-grade simulated Kundan polki glass stones with brilliant refraction",
      "22 Karat micron gold flash plating with anti-tarnish protective e-coating",
      "Lightweight ergonomic weight distribution for painless all-day wear",
      "Lead and nickel free hypoallergenic push-back studs",
    ],
    specs: [
      { label: "Base Metal", val: "High Grade Brass Alloy" },
      { label: "Plating", val: "22K Micron Gold Plated" },
      { label: "Stones", val: "Faceted Kundan & Cultured Glass Pearls" },
      { label: "Dimensions", val: "7.5 cm (L) x 3.8 cm (W)" },
      { label: "Closure", val: "Push-Back Post with Silicone Stopper" },
    ],
    inTheBox: ["1 Pair of Kundan Jhumka Earrings", "Velvet Travel Pouch", "Care Card"],
    reviews: [
      {
        author: "Aakanksha D.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment: "Look so real and rich! Not heavy on the ears at all.",
      },
    ],
  },
  {
    id: "wish-7",
    name: "925 Sterling Silver Oxidised Floral Filigree Payal Anklet Pair",
    shortName: "Silver Oxidised Payal",
    brand: "Giva Style",
    pack: "Pair of 2 Anklets • 10.5 in",
    category: "wishlist",
    tag: "ARTISAN CRAFT",
    price: 1299,
    originalPrice: 2499,
    discount: "48% OFF",
    rating: 4.7,
    ratingsCount: "9,640 Ratings",
    reviewsCount: "1,420 Reviews",
    badge: "Silver Purity",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Traditional tribal ghungroo anklets crafted in hallmarked 925 sterling silver with antique oxidised finish, floral carved medallions, and secure S-hook clasp.",
    image: "/images/deal-anklet.jpg",
    images: ["/images/deal-anklet.jpg", "/images/deal-anklet.jpg"],
    variantType: "size",
    variants: [
      { name: "Standard (10.5 in)", price: 1299, orig: 2499, image: "/images/deal-anklet.jpg" },
      { name: "Extended (11.5 in)", price: 1399, orig: 2699, image: "/images/deal-anklet.jpg" },
    ],
    offers: [
      { title: "Special Deal", desc: "Free silver polishing cloth included" },
      { title: "Authenticity", desc: "Stamped 925 purity hallmark" },
    ],
    highlights: [
      "92.5% pure sterling silver with hallmark authentication stamp",
      "Intricate handmade floral filigree chain with gentle chime ghungroo bells",
      "Antique black oxidised finish that enhances vintage artisanal charm",
      "Skin-friendly, nickel-free, hypoallergenic composition",
      "Sturdy soldered links prevent accidental breakage",
    ],
    specs: [
      { label: "Metal", val: "925 Sterling Silver (Hallmarked)" },
      { label: "Finish", val: "Antique Oxidised Silver" },
      { label: "Total Length", val: "26.5 cm (10.5 Inches)" },
      { label: "Clasp", val: "Classic Silver S-Hook" },
      { label: "Total Weight", val: "28.4 g (Pair)" },
    ],
    inTheBox: ["1 Pair 925 Silver Anklets", "Authenticity Certificate", "Silver Polishing Cloth"],
    reviews: [
      {
        author: "Sneha G.",
        stars: "★★★★★",
        date: "Verified 6 days ago",
        comment: "The ghungroo sound is so sweet and subtle! Very authentic craftsmanship.",
      },
    ],
  },
  {
    id: "wish-8",
    name: "Royal Midnight Blue Velvet Evening Cocktail Wrap Gown",
    shortName: "Velvet Cocktail Gown",
    brand: "Zara Luxe",
    pack: "Full Length Slit Gown",
    category: "wishlist",
    tag: "PARTY GLAM",
    price: 2799,
    originalPrice: 5999,
    discount: "53% OFF",
    rating: 4.9,
    ratingsCount: "7,310 Ratings",
    reviewsCount: "980 Reviews",
    badge: "Red Carpet Pick",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Opulent plush velvet evening gown featuring a flattering surplice neckline, gathered side drape, thigh-high split, and concealed back zip fastening.",
    image: "/images/deal-gown.jpg",
    images: ["/images/deal-gown.jpg", "/images/deal-gown.jpg"],
    variantType: "size",
    variants: [
      { name: "S (UK 8)", price: 2799, orig: 5999, image: "/images/deal-gown.jpg" },
      { name: "M (UK 10)", price: 2799, orig: 5999, image: "/images/deal-gown.jpg" },
      { name: "L (UK 12)", price: 2799, orig: 5999, image: "/images/deal-gown.jpg" },
    ],
    offers: [
      { title: "Gala Special", desc: "Complimentary evening clutch bag with this order" },
      { title: "Bank Offer", desc: "10% instant discount on ICICI Credit Cards" },
    ],
    highlights: [
      "Ultra-soft premium heavyweight stretch velvet fabric with luminous sheen",
      "Flattering faux-wrap front with ruched waist contouring",
      "Sophisticated side slit for effortless movement and high elegance",
      "Fully lined bodice for structure and comfort",
      "Concealed YKK zipper at center back with hook-and-eye closure",
    ],
    specs: [
      { label: "Fabric", val: "95% Polyester, 5% Spandex Velvet" },
      { label: "Length", val: "Maxi / Floor Length (148 cm)" },
      { label: "Neckline", val: "Surplice V-Neck" },
      { label: "Sleeve", val: "Long Fitted Sleeves" },
      { label: "Wash Care", val: "Dry Clean Only" },
    ],
    inTheBox: ["1x Midnight Blue Velvet Gown", "Garment Dust Cover"],
    reviews: [
      {
        author: "Natasha S.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "Received endless compliments at our annual gala! Fits like a glove.",
      },
    ],
  },
  {
    id: "wish-9",
    name: "AeroGrip Pro Breathable Cushion Road Running Sneakers",
    shortName: "AeroGrip Running Shoes",
    brand: "Nike Air Style",
    pack: "Engineered Mesh • EVA Foam",
    category: "wishlist",
    tag: "ACTIVEWEAR",
    price: 1899,
    originalPrice: 4499,
    discount: "58% OFF",
    rating: 4.8,
    ratingsCount: "25,120 Ratings",
    reviewsCount: "3,890 Reviews",
    badge: "Top Performer",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Engineered jacquard breathable mesh upper paired with high-rebound responsive EVA foam midsole. Non-marking traction rubber outsole for road and treadmill runs.",
    image: "/images/deal-running.jpg",
    images: ["/images/deal-running.jpg", "/images/deal-running.jpg"],
    variantType: "size",
    variants: [
      { name: "UK 7", price: 1899, orig: 4499, image: "/images/deal-running.jpg" },
      { name: "UK 8", price: 1899, orig: 4499, image: "/images/deal-running.jpg" },
      { name: "UK 9", price: 1899, orig: 4499, image: "/images/deal-running.jpg" },
      { name: "UK 10", price: 1999, orig: 4699, image: "/images/deal-running.jpg" },
    ],
    offers: [
      { title: "Sport Offer", desc: "Get 2 pairs of sports socks free" },
      { title: "Easy Returns", desc: "7-day doorstep size exchange guarantee" },
    ],
    highlights: [
      "Ultra-lightweight 210g aerodynamic construction minimizes runner fatigue",
      "High-energy return EVA foam delivers superior heel-to-toe shock absorption",
      "Seamless engineered jacquard mesh maximizes continuous airflow",
      "Anti-pronation TPU heel counter locks foot firmly in place",
      "Durable carbon rubber pods at high-wear outsole strike zones",
    ],
    specs: [
      { label: "Upper Material", val: "Breathable Jacquard Air Mesh" },
      { label: "Midsole", val: "Responsive High-Rebound EVA Foam" },
      { label: "Outsole", val: "High Traction Non-Marking Rubber" },
      { label: "Weight", val: "215 g (Per Shoe, UK 8)" },
      { label: "Ideal For", val: "5K/10K Road Running, Gym, Daily Walking" },
    ],
    inTheBox: ["1 Pair of AeroGrip Pro Running Shoes", "Extra Pair of Laces"],
    reviews: [
      {
        author: "Karan Johar",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Crazy cushioning! Ran a 10k right after opening the box, zero blisters.",
      },
    ],
  },
  {
    id: "wish-10",
    name: "Urban Streetwear Vulcanized High-Top Canvas Skate Sneakers",
    shortName: "High-Top Skate Sneakers",
    brand: "Converse Style",
    pack: "12 oz Canvas • Gum Rubber Sole",
    category: "wishlist",
    tag: "STREET STYLE",
    price: 1499,
    originalPrice: 2999,
    discount: "50% OFF",
    rating: 4.7,
    ratingsCount: "17,800 Ratings",
    reviewsCount: "2,650 Reviews",
    badge: "Timeless Classic",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Heavy-duty 12oz breathable canvas upper with diamond-tread vulcanized rubber outsole, OrthoLite cushioning insole, and metallic lace eyelets.",
    image: "/images/deal-sneakers.jpg",
    images: ["/images/deal-sneakers.jpg", "/images/deal-sneakers.jpg"],
    variantType: "size",
    variants: [
      { name: "UK 7", price: 1499, orig: 2999, image: "/images/deal-sneakers.jpg" },
      { name: "UK 8", price: 1499, orig: 2999, image: "/images/deal-sneakers.jpg" },
      { name: "UK 9", price: 1499, orig: 2999, image: "/images/deal-sneakers.jpg" },
      { name: "UK 10", price: 1549, orig: 3099, image: "/images/deal-sneakers.jpg" },
    ],
    offers: [
      { title: "Student Discount", desc: "Flat 10% off with university email" },
      { title: "Bank Offer", desc: "5% cashback on HDFC Debit Cards" },
    ],
    highlights: [
      "Rugged 12 oz pure cotton duck canvas upper with double stitched stress points",
      "Vulcanized gum rubber foxing tape and protective rubber toe bumper cap",
      "OrthoLite die-cut foam footbed ensures all-day walking comfort",
      "Classic medial ankle patch and metallic rust-proof eyelets",
      "Signature diamond waffle rubber tread pattern for superior skateboard grip",
    ],
    specs: [
      { label: "Upper", val: "Heavy 12 oz Cotton Canvas" },
      { label: "Sole", val: "Vulcanized Waffle Gum Rubber" },
      { label: "Insole", val: "Removable OrthoLite Cushion" },
      { label: "Shaft Height", val: "High-Top (Ankle Height)" },
      { label: "Closure", val: "8-Eyelet Lace-Up" },
    ],
    inTheBox: ["1 Pair High-Top Skate Sneakers", "Classic Flat White Laces"],
    reviews: [
      {
        author: "Arjun N.",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment: "Classic high-top silhouette that goes with practically every outfit.",
      },
    ],
  },
  {
    id: "wish-11",
    name: "Fossil Grant Chronograph Roman Dial Genuine Leather Watch",
    shortName: "Fossil Chrono Watch",
    brand: "Fossil",
    pack: "44mm Stainless Steel Case",
    category: "wishlist",
    tag: "TIMEPIECE",
    price: 5499,
    originalPrice: 10995,
    discount: "50% OFF",
    rating: 4.9,
    ratingsCount: "12,940 Ratings",
    reviewsCount: "1,870 Reviews",
    badge: "Premium Choice",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Classic Roman numerals with 3-subdial stopwatch chronograph movement, scratch-resistant mineral glass crystal, 5 ATM water resistance, and hand-stitched saddle brown leather strap.",
    image: "/images/deal-watch.jpg",
    images: ["/images/deal-watch.jpg", "/images/deal-watch.jpg"],
    variantType: "strap",
    variants: [
      { name: "Saddle Brown Leather", price: 5499, orig: 10995, image: "/images/deal-watch.jpg" },
      { name: "Midnight Black Leather", price: 5699, orig: 11295, image: "/images/deal-watch.jpg" },
    ],
    offers: [
      { title: "No Cost EMI", desc: "Available from ₹916/month on major credit cards" },
      { title: "2-Year Warranty", desc: "Official Fossil international manufacturer warranty" },
    ],
    highlights: [
      "Precision Japanese quartz chronograph movement with 3 sub-dials (24-hr, min, sec)",
      "44 mm surgical grade 316L stainless steel case with polished bezel",
      "Vintage Roman numerals against a rich sunray cream dial",
      "Handcrafted 22mm interchangeable genuine calfskin leather strap",
      "50 meters (5 ATM) water resistance for everyday splash proofing",
    ],
    specs: [
      { label: "Case Size", val: "44 mm | Thickness: 12 mm" },
      { label: "Movement", val: "Quartz Chronograph" },
      { label: "Glass", val: "Scratch-Resistant Mineral Crystal" },
      { label: "Water Resistance", val: "5 ATM (50 Meters)" },
      { label: "Strap Material", val: "100% Genuine Calf Leather (22mm)" },
      { label: "Warranty", val: "2 Years International Warranty" },
    ],
    inTheBox: ["1x Fossil Grant Watch", "Official Fossil Tin Box", "Warranty Booklet"],
    reviews: [
      {
        author: "Vikas Malhotra",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Looks ten times more expensive than it is. The leather is rich and soft.",
      },
    ],
  },
  {
    id: "wish-12",
    name: "Cetaphil Gentle Foaming Skin Cleanser with Vitamin B5 & E",
    shortName: "Cetaphil Foaming Wash",
    brand: "Cetaphil",
    pack: "236ml Pump Bottle",
    category: "wishlist",
    tag: "SKINCARE GLOW",
    price: 649,
    originalPrice: 999,
    discount: "35% OFF",
    rating: 4.9,
    ratingsCount: "34,200 Ratings",
    reviewsCount: "5,400 Reviews",
    badge: "Dermatologist Recommended",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Self-foaming gentle facial cleanser that effortlessly removes dirt, excess oil, and makeup while maintaining the skin's natural moisture barrier with Pro-Vitamin B5.",
    image: "/images/deal-facewash.jpg",
    images: ["/images/deal-facewash.jpg", "/images/deal-facewash.jpg"],
    variantType: "size",
    variants: [
      { name: "236ml Pump Bottle", price: 649, orig: 999, image: "/images/deal-facewash.jpg" },
      { name: "473ml Family Pack", price: 1099, orig: 1699, image: "/images/deal-facewash.jpg" },
    ],
    offers: [
      { title: "Skincare Duo", desc: "Buy with Cetaphil Moisturizing Cream & save 15%" },
      { title: "Free Delivery", desc: "Delivered within 15 minutes in select pincodes" },
    ],
    highlights: [
      "Instant self-foaming pump creates a rich, airy cloud of micro-bubbles",
      "Defends against 5 signs of skin sensitivity: dry, irritate, rough, tight, weak",
      "Formulated with hydrating glycerin, Vitamin B5, and antioxidant Vitamin E",
      "Hypoallergenic, soap-free, paraben-free, non-comedogenic (won't clog pores)",
      "#1 Dermatologist recommended facial skincare brand worldwide",
    ],
    specs: [
      { label: "Skin Type", val: "All Skin Types, including Sensitive" },
      { label: "Volume", val: "236 ml" },
      { label: "Formula", val: "Soap-Free, Fragrance-Free, Non-Comedogenic" },
      { label: "Key Actives", val: "Pro-Vitamin B5, Vitamin E, Pure Glycerin" },
    ],
    inTheBox: ["1x Cetaphil Gentle Foaming Cleanser 236ml Pump Dispenser"],
    reviews: [
      {
        author: "Priyanka T.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "Leaves my face squeaky clean without feeling stripped or tight. Holy grail!",
      },
    ],
  },
  {
    id: "wish-13",
    name: "Indulekha Bringha Ayurvedic Hair Oil with Natural Selfie Comb",
    shortName: "Indulekha Bringha Oil",
    brand: "Indulekha",
    pack: "250ml Comb Bottle",
    category: "wishlist",
    tag: "AYURVEDIC CARE",
    price: 479,
    originalPrice: 720,
    discount: "33% OFF",
    rating: 4.8,
    ratingsCount: "29,800 Ratings",
    reviewsCount: "4,620 Reviews",
    badge: "100% Ayurvedic",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Formulated with 11 Ayurvedic herbs cooked in pure virgin coconut oil under natural sunlight for 7 days. Targeted selfie comb dispenses oil straight to follicles.",
    image: "/images/deal-hairoil.jpg",
    images: ["/images/deal-hairoil.jpg", "/images/deal-hairoil.jpg"],
    variantType: "pack",
    variants: [
      { name: "250ml Single Bottle", price: 479, orig: 720, image: "/images/deal-hairoil.jpg" },
      { name: "Pack of 2 (500ml)", price: 899, orig: 1440, image: "/images/deal-hairoil.jpg" },
    ],
    offers: [
      { title: "Hair Care Offer", desc: "Extra ₹50 off when buying 2 or more" },
      { title: "Clinical Proof", desc: "Clinically proven to reduce hair fall in 4 months" },
    ],
    highlights: [
      "Proprietary Ayurvedic medicine clinically proven to grow new hair",
      "Contains 100% active extracts of Bringharaj, Svetakutaja, Amla, and Virgin Coconut Oil",
      "Patented 'Selfie Comb' applicator delivers oil directly to the scalp roots",
      "Free from artificial color, parabens, sulphates, and synthetic perfume",
      "Slow sun-brewed method preserves authentic natural herbal potency",
    ],
    specs: [
      { label: "Medicine Type", val: "Ayurvedic Proprietary Medicine" },
      { label: "Net Volume", val: "250 ml" },
      { label: "Key Ingredient", val: "Bringharaj (Eclipta Alba), Virgin Coconut Oil" },
      { label: "Applicator", val: "Patented Straight-to-Root Comb Needle Cap" },
    ],
    inTheBox: ["1x Indulekha Bringha Oil 250ml Bottle with Selfie Comb Cap"],
    reviews: [
      {
        author: "Manish K.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Hair fall reduced dramatically within 3 weeks of regular massage.",
      },
    ],
  },
  {
    id: "wish-14",
    name: "Bombay Shaving Co. 6-in-1 Precision Beard Grooming & Styling Kit",
    shortName: "Bombay Beard Grooming Kit",
    brand: "Bombay Shaving Co.",
    pack: "6-Piece Complete Salon Set",
    category: "wishlist",
    tag: "GROOMING ESSENTIAL",
    price: 1199,
    originalPrice: 2499,
    discount: "52% OFF",
    rating: 4.8,
    ratingsCount: "13,410 Ratings",
    reviewsCount: "1,980 Reviews",
    badge: "Gift Choice",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Comprehensive men's beard care kit including cedarwood beard oil, beard wash shampoo, styling beard butter, wooden pocket comb, stainless steel trimming shears, and canvas travel kit bag.",
    image: "/images/deal-mencare.jpg",
    images: ["/images/deal-mencare.jpg", "/images/deal-mencare.jpg"],
    variantType: "pack",
    variants: [
      { name: "6-in-1 Master Kit", price: 1199, orig: 2499, image: "/images/deal-mencare.jpg" },
      { name: "8-in-1 Royal Deluxe Box", price: 1699, orig: 3299, image: "/images/deal-mencare.jpg" },
    ],
    offers: [
      { title: "Special Gift Packaging", desc: "Arrives in bespoke matte black rigid magnetic box" },
      { title: "Bank Offer", desc: "Flat ₹120 off on card payments" },
    ],
    highlights: [
      "Cedarwood & Argan Beard Growth Oil nourishes roots and settles patchiness",
      "Sulphate-free Beard Wash cleanses without stripping natural facial oils",
      "Sheesham wooden beard comb prevents static electricity and beard frizz",
      "Styling Beard Butter delivers light, non-sticky hold and all-day control",
      "Precision micro-serrated Japanese stainless steel trimming shears",
    ],
    specs: [
      { label: "Items Included", val: "Oil (30ml), Wash (100ml), Butter (50g), Comb, Scissors, Bag" },
      { label: "Fragrance Notes", val: "Atlas Cedarwood & Black Pepper" },
      { label: "Skin Type", val: "All Skin & Beard Types" },
      { label: "Chemicals", val: "No Parabens, Sulphates, or Mineral Oils" },
    ],
    inTheBox: [
      "1x Cedarwood Beard Oil (30ml)",
      "1x Hydrating Beard Shampoo (100ml)",
      "1x Styling Beard Butter (50g)",
      "1x Sheesham Wooden Comb",
      "1x Stainless Trimming Shears",
      "1x Canvas Travel Pouch",
    ],
    reviews: [
      {
        author: "Rohan Kapoor",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "The beard oil smells incredible and the wooden comb is top quality!",
      },
    ],
  },
  {
    id: "wish-15",
    name: "Philips Series 3000 Cordless Self-Sharpening Beard Trimmer",
    shortName: "Philips Series 3000 Trimmer",
    brand: "Philips",
    pack: "60-Min Cordless • Lift & Trim",
    category: "wishlist",
    tag: "PRECISION STYLING",
    price: 1399,
    originalPrice: 2295,
    discount: "39% OFF",
    rating: 4.8,
    ratingsCount: "42,100 Ratings",
    reviewsCount: "6,750 Reviews",
    badge: "Top Seller",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Lift & Trim system cuts 30% faster by lifting low-lying hairs. Skin-friendly self-sharpening stainless steel blades with 20 lock-in precision length settings (0.5 - 10mm).",
    image: "/images/deal-trimmer.jpg",
    images: ["/images/deal-trimmer.jpg", "/images/deal-trimmer.jpg"],
    variantType: "model",
    variants: [
      { name: "BT3211/15 (60 Min Run)", price: 1399, orig: 2295, image: "/images/deal-trimmer.jpg" },
      { name: "BT3221/15 (90 Min Fast Charge)", price: 1799, orig: 2695, image: "/images/deal-trimmer.jpg" },
    ],
    offers: [
      { title: "Brand Warranty", desc: "2+1 Year Worldwide Philips Guarantee" },
      { title: "Bank Offer", desc: "10% instant discount on Axis Bank cards" },
    ],
    highlights: [
      "Innovative Lift & Trim guide comb directs hairs smoothly to blade level",
      "Self-sharpening stainless steel blades stay as sharp as Day 1",
      "Zoom wheel with 20 lock-in length settings in 0.5mm precision steps",
      "DuraPower technology extends battery runtime by 4x for 60 minutes trimming",
      "Detachable head allows easy rinse under running water for hygiene",
    ],
    specs: [
      { label: "Precision Steps", val: "0.5 mm Steps (0.5 mm to 10 mm)" },
      { label: "Blades", val: "Self-Sharpening Stainless Steel" },
      { label: "Battery Runtime", val: "60 Minutes Cordless on Full Charge" },
      { label: "Charging", val: "USB Charging Cable Included" },
      { label: "Cleaning", val: "Washable Detachable Blade Head" },
      { label: "Warranty", val: "2 + 1 Years with Online Registration" },
    ],
    inTheBox: [
      "1x Philips Series 3000 Trimmer Unit",
      "1x Lift & Trim Comb Attachment",
      "1x USB Charging Cable",
      "1x Cleaning Brush",
      "User Manual & Guarantee Card",
    ],
    reviews: [
      {
        author: "Gaurav Mehta",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "Zero tugging or irritation! The battery lasts for weeks on a single charge.",
      },
    ],
  },
  // ==========================================
  // CATEGORY 7: TOP VALUE DEALS (15 Items)
  // ==========================================
  {
    id: "val-1",
    name: "Sapphire Crystal Blue Heart Drop Earrings with 18K Gold Plated Hooks",
    shortName: "Crystal Heart Earrings",
    brand: "Shining Diva",
    pack: "Pair of 2 Earrings • Faceted Crystal",
    category: "top-value",
    tag: "SUPER SAVER",
    price: 299,
    originalPrice: 999,
    discount: "70% OFF",
    rating: 4.8,
    ratingsCount: "18,920 Ratings",
    reviewsCount: "2,630 Reviews",
    badge: "Value Pick",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Austrian blue sapphire crystal cut in an elegant faceted heart shape, dangling delicately from hypoallergenic 18K gold-plated french fish hooks.",
    image: "/images/deal-earrings.jpg",
    images: ["/images/deal-earrings.jpg", "/images/deal-earrings.jpg"],
    variantType: "color",
    variants: [
      { name: "Sapphire Blue", price: 299, orig: 999, image: "/images/deal-earrings.jpg" },
      { name: "Ruby Crimson", price: 329, orig: 1049, image: "/images/deal-earrings.jpg" },
    ],
    offers: [
      { title: "Special Deal", desc: "Flat 70% discount on festive jewellery" },
      { title: "Free Delivery", desc: "Free shipping on orders above ₹499" },
    ],
    highlights: [
      "Precision diamond-faceted Austrian synthetic sapphire crystal heart",
      "18K electroplated gold fish hook with anti-tarnish protective coating",
      "Ultra-lightweight 8g design ensures zero earlobe sagging or soreness",
      "Skin-safe nickel and lead free composition",
      "Arrives in signature jewellery gift box with foam cushion",
    ],
    specs: [
      { label: "Material", val: "Austrian Crystal & 18K Gold Plated Brass" },
      { label: "Earring Drop Length", val: "3.2 cm" },
      { label: "Closure", val: "French Fish Hook" },
      { label: "Weight", val: "8 g (Pair)" },
      { label: "Care Instructions", val: "Wipe with soft dry cloth, keep away from water" },
    ],
    inTheBox: ["1 Pair Sapphire Heart Earrings", "Jewelry Gift Box"],
    reviews: [
      {
        author: "Pooja Roy",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "The blue crystal sparkles so brightly in the light! Unbelievable quality for ₹299.",
      },
    ],
  },
  {
    id: "val-2",
    name: "Heavy Duty Oxford Fabric Wardrobe Saree & Garment Storage Cover Bag",
    shortName: "Garment Storage Covers",
    brand: "Kuber Industries",
    pack: "Pack of 6 Storage Bags",
    category: "top-value",
    tag: "HOME ESSENTIAL",
    price: 349,
    originalPrice: 999,
    discount: "65% OFF",
    rating: 4.7,
    ratingsCount: "24,800 Ratings",
    reviewsCount: "3,750 Reviews",
    badge: "Best Value",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Tear-resistant Oxford fabric garment organizer bag with transparent clear view window and smooth dual metallic zipper pulls. Protects expensive ethnic wear from moisture and dust.",
    image: "/images/deal-garmentbox.jpg",
    images: ["/images/deal-garmentbox.jpg", "/images/deal-garmentbox.jpg"],
    variantType: "pack",
    variants: [
      { name: "Pack of 6", price: 349, orig: 999, image: "/images/deal-garmentbox.jpg" },
      { name: "Pack of 12 Jumbo", price: 599, orig: 1799, image: "/images/deal-garmentbox.jpg" },
    ],
    offers: [
      { title: "Combo Saver", desc: "Buy 2 sets get extra 10% off" },
      { title: "Bank Offer", desc: "Instant ₹50 cashback on UPI" },
    ],
    highlights: [
      "Breathable heavy-gauge 120 GSM non-woven Oxford fabric construction",
      "Wide see-through PVC window allows instant identification without opening",
      "Durable dual-directional metal zippers for easy packing and retrieval",
      "Holds up to 10 folded sarees, dresses, suits, or winter blankets per bag",
      "Collapsible flat design saves wardrobe storage space when not in use",
    ],
    specs: [
      { label: "Dimensions", val: "42 cm x 35 cm x 20 cm" },
      { label: "Fabric", val: "Moisture-Resistant Oxford Non-Woven" },
      { label: "Closure", val: "Heavy Duty Two-Way Metal Zipper" },
      { label: "Quantity", val: "6 Storage Bags" },
    ],
    inTheBox: ["6x Oxford Fabric Wardrobe Garment Organizer Bags"],
    reviews: [
      {
        author: "Meenakshi S.",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment: "Organized all my heavy bridal sarees in one afternoon! Sturdy and neat.",
      },
    ],
  },
  {
    id: "val-3",
    name: "Artisanal Dual-Strand Bohemian Silver Filigree Anklet Pair",
    shortName: "Silver Filigree Anklets",
    brand: "Yellow Chimes",
    pack: "Pair of 2 Payals • Adjustable",
    category: "top-value",
    tag: "SPECIAL DEALS",
    price: 399,
    originalPrice: 999,
    discount: "60% OFF",
    rating: 4.8,
    ratingsCount: "12,400 Ratings",
    reviewsCount: "1,820 Reviews",
    badge: "Special Deal",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Boho-chic handcrafted dual-strand silver plated anklet featuring intricate filigree drop charms, miniature chiming beads, and sturdy lobster claw clasp.",
    image: "/images/deal-anklet.jpg",
    images: ["/images/deal-anklet.jpg", "/images/deal-anklet.jpg"],
    variantType: "finish",
    variants: [
      { name: "Antique Silver Plated", price: 399, orig: 999, image: "/images/deal-anklet.jpg" },
      { name: "Golden Lustre", price: 429, orig: 1099, image: "/images/deal-anklet.jpg" },
    ],
    offers: [
      { title: "Special Deal", desc: "Flat 60% off limited value sale" },
      { title: "Bank Offer", desc: "Extra 5% off with Axis Bank cards" },
    ],
    highlights: [
      "Layered bohemian twin-strand links with floral filigree medallions",
      "Authentic silver-tone plating with scratch-resistant protective sealant",
      "Includes 5cm extension tail chain for universal ankle fit",
      "Smooth rounded link edges prevent snagging on churidars and sarees",
      "Hypoallergenic nickel-free metallic alloy",
    ],
    specs: [
      { label: "Length", val: "24 cm + 5 cm Adjustable Extension" },
      { label: "Finish", val: "Vintage Oxidised Silver Plated" },
      { label: "Clasp", val: "Secure Lobster Claw Clasp" },
      { label: "Weight", val: "18 g" },
    ],
    inTheBox: ["1 Pair Bohemian Silver Filigree Anklets", "Protective Pouch"],
    reviews: [
      {
        author: "Shreya Sen",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Looks very trendy with jeans and traditional wear alike!",
      },
    ],
  },
  {
    id: "val-4",
    name: "Pastel Matte Finish Non-Slip Big Hair Claw Clips",
    shortName: "Pastel Hair Claw Clips",
    brand: "Gorgias",
    pack: "Set of 6 Pastel Colors",
    category: "top-value",
    tag: "TOP RATED",
    price: 199,
    originalPrice: 599,
    discount: "67% OFF",
    rating: 4.8,
    ratingsCount: "31,400 Ratings",
    reviewsCount: "4,920 Reviews",
    badge: "Mega Value",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Durable shatter-proof acrylic resin claw clips with heavy-duty metal spring and soft-touch rubberized matte coating. Holds thick hair securely without pulling.",
    image: "/images/deal-hairclips.jpg",
    images: ["/images/deal-hairclips.jpg", "/images/deal-hairclips.jpg"],
    variantType: "pack",
    variants: [
      { name: "6-Piece Pastel Assorted", price: 199, orig: 599, image: "/images/deal-hairclips.jpg" },
      { name: "12-Piece Party Pack", price: 349, orig: 999, image: "/images/deal-hairclips.jpg" },
    ],
    offers: [
      { title: "Crazy Value", desc: "6 stylish clips at just ₹199 (₹33 each!)" },
      { title: "Speed Delivery", desc: "Delivered in 15 mins in select locations" },
    ],
    highlights: [
      "Sturdy Korean acrylic resin with reinforced rust-proof spring steel",
      "Smooth velvety matte rubberized finish feels gentle on scalp",
      "Interlocking teeth grip securely without tugging, creasing, or slipping",
      "Generous 11cm length holds thick, curly, and long hair with ease",
      "Trendy Korean aesthetic neutral palette matches every daily outfit",
    ],
    specs: [
      { label: "Length", val: "11 cm (Large Size)" },
      { label: "Material", val: "Matte Coated Acrylic Resin & Steel Spring" },
      { label: "Colors Included", val: "Blush Pink, Sage Green, Beige, Navy, Taupe, Slate" },
      { label: "Quantity", val: "6 Clips" },
    ],
    inTheBox: ["6x Matte Finish Non-Slip Big Hair Claw Clips"],
    reviews: [
      {
        author: "Kritika B.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "Finally claw clips that actually hold my super thick hair all day long!",
      },
    ],
  },
  {
    id: "val-5",
    name: "Insulated Double Wall Stainless Steel 750ml Temperature Flask",
    shortName: "Stainless Steel Flask",
    brand: "Milton Style",
    pack: "750 ml • 24-Hr Cold / 18-Hr Hot",
    category: "top-value",
    tag: "BEST VALUE",
    price: 499,
    originalPrice: 1199,
    discount: "58% OFF",
    rating: 4.8,
    ratingsCount: "28,300 Ratings",
    reviewsCount: "4,150 Reviews",
    badge: "Value Champion",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Food grade 304 stainless steel vacuum insulated sports bottle. Keeps beverages ice cold for 24 hours or piping hot for 18 hours. Leakproof silicone sealed cap.",
    image: "/images/deal-flask.jpg",
    images: ["/images/deal-flask.jpg", "/images/deal-flask.jpg"],
    variantType: "color",
    variants: [
      { name: "Matte Black", price: 499, orig: 1199, image: "/images/deal-flask.jpg" },
      { name: "Metallic Silver", price: 499, orig: 1199, image: "/images/deal-flask.jpg" },
    ],
    offers: [
      { title: "Hydration Special", desc: "Save 58% on premium thermal flasks" },
      { title: "BPA Free", desc: "100% rustproof food-safe grade steel" },
    ],
    highlights: [
      "Double-walled vacuum copper-shield insulation keeps cold 24h & hot 18h",
      "Crafted with rust-proof 18/8 food-grade 304 stainless steel inside out",
      "100% leak-proof airtight cap with integrated silicone hermetic gasket",
      "Sweat-free condensation-proof matte exterior powder coating",
      "Fits perfectly in standard car cupholders and gym bag side pockets",
    ],
    specs: [
      { label: "Capacity", val: "750 ml" },
      { label: "Material", val: "Grade 304 (18/8) Stainless Steel" },
      { label: "Thermal Retention", val: "24 Hours Cold / 18 Hours Hot" },
      { label: "Leakproof", val: "Yes, 360-Degree Spill Proof" },
    ],
    inTheBox: ["1x 750ml Vacuum Insulated Flask", "Care Guide"],
    reviews: [
      {
        author: "Amit Trivedi",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment: "Keeps boiling water hot until next morning! Fantastic build for this price.",
      },
    ],
  },
  {
    id: "val-6",
    name: "Multi-Functional 300W Hand Blender & Smoothie Immersion Mixer",
    shortName: "300W Hand Blender",
    brand: "Orpat Tech",
    pack: "300W Motor • Stainless Blade",
    category: "top-value",
    tag: "KITCHEN VALUE",
    price: 699,
    originalPrice: 1599,
    discount: "56% OFF",
    rating: 4.7,
    ratingsCount: "16,400 Ratings",
    reviewsCount: "2,380 Reviews",
    badge: "Kitchen Essential",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Powerful 300-watt pure copper motor with anti-splash food-grade stainless steel blade guard. Perfect for blending baby food, purees, soups, lassi, and protein smoothies.",
    image: "/images/deal-mixer.jpg",
    images: ["/images/deal-mixer.jpg", "/images/deal-mixer.jpg"],
    variantType: "color",
    variants: [
      { name: "Pure White", price: 699, orig: 1599, image: "/images/deal-mixer.jpg" },
      { name: "Charcoal Grey", price: 749, orig: 1699, image: "/images/deal-mixer.jpg" },
    ],
    offers: [
      { title: "Warranty Deal", desc: "1 Year manufacturer replacement warranty" },
      { title: "Bank Offer", desc: "Flat ₹50 instant discount on card payment" },
    ],
    highlights: [
      "High-speed 300-watt pure copper motor with whisper-quiet operation",
      "Multi-purpose super sharp 304 stainless steel cross cutting blades",
      "Ergonomic non-slip grip handle with single-touch power button",
      "Bell-shaped anti-splash blade guard prevents messy food splatter",
      "Wall mount bracket included for space-saving kitchen storage",
    ],
    specs: [
      { label: "Power", val: "300 Watts (230V AC, 50Hz)" },
      { label: "Blade Material", val: "Food Grade 304 Stainless Steel" },
      { label: "Cord Length", val: "1.5 Meters" },
      { label: "Warranty", val: "1 Year Domestic Warranty" },
    ],
    inTheBox: ["1x 300W Hand Blender Unit", "Wall Mount Bracket & Screws", "Warranty Card"],
    reviews: [
      {
        author: "Rashmi Joshi",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Makes creamy dal and silky lassi in under 30 seconds. Very light to hold.",
      },
    ],
  },
  {
    id: "val-7",
    name: "Ergonomic Anti-Slip Toddler & Kids Study Activity Chair",
    shortName: "Kids Study Chair",
    brand: "Nilkamal Junior",
    pack: "Heavy-Duty Polymer • Up to 60kg",
    category: "top-value",
    tag: "KIDS ESSENTIAL",
    price: 449,
    originalPrice: 999,
    discount: "55% OFF",
    rating: 4.8,
    ratingsCount: "11,200 Ratings",
    reviewsCount: "1,540 Reviews",
    badge: "Parent Choice",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Child-safe rounded corner polypropylene chair with lumbar support backrest and anti-skid rubber feet. Sturdy enough to support up to 60kg load.",
    image: "/images/deal-kidchair.jpg",
    images: ["/images/deal-kidchair.jpg", "/images/deal-kidchair.jpg"],
    variantType: "color",
    variants: [
      { name: "Aqua Blue", price: 449, orig: 999, image: "/images/deal-kidchair.jpg" },
      { name: "Pastel Pink", price: 449, orig: 999, image: "/images/deal-kidchair.jpg" },
    ],
    offers: [
      { title: "Kid Zone Offer", desc: "Extra ₹50 off when bought with study desk" },
      { title: "Safety Assured", desc: "100% non-toxic BPA free virgin polymer" },
    ],
    highlights: [
      "Ergonomic contoured spine curve supports healthy childhood sitting posture",
      "Reinforced heavy-gauge virgin polypropylene tested up to 60kg weight",
      "Zero sharp edges: all curves are softly rounded for active toddler safety",
      "Non-slip anti-scratch rubber base caps prevent floor scuffing and skidding",
      "Stackable nested design for easy room cleanup and storage",
    ],
    specs: [
      { label: "Dimensions", val: "52 cm (H) x 36 cm (W) x 34 cm (D)" },
      { label: "Seat Height", val: "28 cm (Ideal for ages 2 - 8)" },
      { label: "Load Capacity", val: "Up to 60 kg" },
      { label: "Material", val: "BPA-Free Virgin Polypropylene" },
    ],
    inTheBox: ["1x Nilkamal Kids Ergonomic Study Chair"],
    reviews: [
      {
        author: "Alok Nanda",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Extremely sturdy! Even my 12-year-old sits on it without issues. Great color.",
      },
    ],
  },
  {
    id: "val-8",
    name: "Portable Digital Auto-Stop 150 PSI Car & Bike Tyre Inflator",
    shortName: "Digital Tyre Inflator",
    brand: "Woscher Pro",
    pack: "12V DC Plug • LED Emergency Torch",
    category: "top-value",
    tag: "AUTO ESSENTIAL",
    price: 1299,
    originalPrice: 2999,
    discount: "57% OFF",
    rating: 4.8,
    ratingsCount: "19,800 Ratings",
    reviewsCount: "3,110 Reviews",
    badge: "High Value",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Fast inflating 150 PSI air compressor pump with digital LCD pressure preset and auto shut-off function. Includes 3 meter 12V cigarette lighter power cord and LED light.",
    image: "/images/deal-inflator.jpg",
    images: ["/images/deal-inflator.jpg", "/images/deal-inflator.jpg"],
    variantType: "model",
    variants: [
      { name: "Standard 12V DC", price: 1299, orig: 2999, image: "/images/deal-inflator.jpg" },
      { name: "Wireless Rechargeable 4000mAh", price: 1799, orig: 3999, image: "/images/deal-inflator.jpg" },
    ],
    offers: [
      { title: "Highway Lifesaver", desc: "Top safety tool for car owners at 57% off" },
      { title: "1-Year Warranty", desc: "Full replacement warranty against defects" },
    ],
    highlights: [
      "Inflates standard R15 car tyre from 0 to 35 PSI in under 3.5 minutes",
      "High-precision digital pressure sensor with automatic auto shut-off at preset PSI",
      "Ultra-bright emergency SOS strobe LED flashlight for nighttime punctures",
      "Long 3-meter 12V DC automotive cord easily reaches all 4 wheels",
      "Comes with 3 additional nozzle adaptors for bicycles, sports balls, and air beds",
    ],
    specs: [
      { label: "Max Pressure", val: "150 PSI" },
      { label: "Power Source", val: "12V DC Car Cigarette Lighter Socket" },
      { label: "Display", val: "Backlit Digital LCD (PSI, BAR, KPA)" },
      { label: "Air Hose Length", val: "55 cm Braided Heat-Resistant Hose" },
    ],
    inTheBox: [
      "1x Digital Tyre Inflator",
      "3x Multi-Purpose Nozzle Adaptors",
      "1x Spare Fuse",
      "Storage Carry Pouch",
      "User Manual",
    ],
    reviews: [
      {
        author: "Sameer Gupta",
        stars: "★★★★★",
        date: "Verified 6 days ago",
        comment: "Saved me on the Mumbai-Pune expressway! Fills tyres so fast and accurately.",
      },
    ],
  },
  {
    id: "val-9",
    name: "Extra Bass Magnetic Wireless Bluetooth Neckband Earphones",
    shortName: "Wireless Bass Neckband",
    brand: "boAt Rockerz Style",
    pack: "30-Hr Playtime • Fast Charge",
    category: "top-value",
    tag: "HOT AUDIO",
    price: 599,
    originalPrice: 1999,
    discount: "70% OFF",
    rating: 4.7,
    ratingsCount: "38,500 Ratings",
    reviewsCount: "5,840 Reviews",
    badge: "Massive Saver",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Flexible silicone neckband with 10mm dynamic bass drivers, magnetic latch earbuds, and IPX5 sweat resistance. 10-minute charge gives 10 hours playback.",
    image: "/images/deal-neckband.jpg",
    images: ["/images/deal-neckband.jpg", "/images/deal-neckband.jpg"],
    variantType: "color",
    variants: [
      { name: "Stealth Black", price: 599, orig: 1999, image: "/images/deal-neckband.jpg" },
      { name: "Active Teal", price: 629, orig: 2099, image: "/images/deal-neckband.jpg" },
    ],
    offers: [
      { title: "Super Audio Deal", desc: "Flat 70% off during flash sale" },
      { title: "Bank Offer", desc: "Extra 10% off with ICICI debit card" },
    ],
    highlights: [
      "10mm dynamic acoustic drivers tuned for deep thumping bass",
      "Massive 30-hour nonstop playback on a single full charge",
      "ASAP Fast Charge: 10 minutes plug gives 10 hours music time",
      "Magnetic instant snap earbuds keep cords tangle-free around your neck",
      "IPX5 certified sweat and splash water resistant for intense gym workouts",
    ],
    specs: [
      { label: "Bluetooth Version", val: "v5.2 (10m Wireless Range)" },
      { label: "Battery Life", val: "Up to 30 Hours Playtime" },
      { label: "Driver Size", val: "10 mm Bass Boost Neodymium" },
      { label: "Charging Port", val: "Type-C Fast Charging" },
      { label: "Water Resistance", val: "IPX5 Splash & Sweatproof" },
    ],
    inTheBox: ["1x Wireless Neckband", "Type-C Cable", "Extra Silicone Ear Tips (S/M/L)"],
    reviews: [
      {
        author: "Kunal Shah",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "The bass is unreal for ₹599! Battery easily lasted me 4 full work days.",
      },
    ],
  },
  {
    id: "val-10",
    name: "Breathable Knit Cushion Slip-On Daily Walking Casual Loafers",
    shortName: "Casual Walking Loafers",
    brand: "Campus Style",
    pack: "Memory Foam Insole • Ultra Light",
    category: "top-value",
    tag: "FOOTWEAR DEAL",
    price: 799,
    originalPrice: 1899,
    discount: "58% OFF",
    rating: 4.7,
    ratingsCount: "15,600 Ratings",
    reviewsCount: "2,190 Reviews",
    badge: "Daily Comfort",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Slip-on design with stretchable breathable air-mesh upper and responsive memory foam insole. Featherlight EVA sole for effortless all-day commuting and walking.",
    image: "/images/deal-shoes.jpg",
    images: ["/images/deal-shoes.jpg", "/images/deal-shoes.jpg"],
    variantType: "size",
    variants: [
      { name: "UK 7", price: 799, orig: 1899, image: "/images/deal-shoes.jpg" },
      { name: "UK 8", price: 799, orig: 1899, image: "/images/deal-shoes.jpg" },
      { name: "UK 9", price: 799, orig: 1899, image: "/images/deal-shoes.jpg" },
      { name: "UK 10", price: 849, orig: 1999, image: "/images/deal-shoes.jpg" },
    ],
    offers: [
      { title: "Daily Comfort Sale", desc: "Save 58% on best-selling slip-ons" },
      { title: "Easy Exchange", desc: "7-day doorstep size replacement" },
    ],
    highlights: [
      "Ultra-breathable stretch flyknit upper moves naturally with your foot",
      "Deep memory foam footbed cushions every heel step and relieves arch stress",
      "Convenient slip-on entry with pull tab for effortless on-and-off",
      "Featherlight 190g weight feels like walking on air clouds",
      "Grooved shock-absorbing EVA outsole provides grip on all surfaces",
    ],
    specs: [
      { label: "Upper", val: "Seamless Engineered Breathable Knit" },
      { label: "Sole", val: "Lightweight High-Traction EVA" },
      { label: "Footbed", val: "High Density Memory Foam" },
      { label: "Closure", val: "Slip-On" },
      { label: "Weight", val: "190 g (Single Shoe, UK 8)" },
    ],
    inTheBox: ["1 Pair Casual Walking Slip-On Shoes"],
    reviews: [
      {
        author: "Manish Agarwal",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment: "Best daily office commuting shoes. Super light and no foot ache after standing.",
      },
    ],
  },
  {
    id: "val-11",
    name: "Modular 4-Drawer Desktop Cosmetic & Stationery Organiser Case",
    shortName: "Modular Desktop Organiser",
    brand: "Kuber Home",
    pack: "4 Drawers + Top Compartments",
    category: "top-value",
    tag: "ORGANISER",
    price: 499,
    originalPrice: 1299,
    discount: "61% OFF",
    rating: 4.8,
    ratingsCount: "13,900 Ratings",
    reviewsCount: "1,940 Reviews",
    badge: "Smart Space",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Multi-tiered compact desk storage unit with 4 pull-out drawers and 6 open divider trays for makeup brushes, cosmetics, pens, jewellery, and daily accessories.",
    image: "/images/deal-drawer.jpg",
    images: ["/images/deal-drawer.jpg", "/images/deal-drawer.jpg"],
    variantType: "color",
    variants: [
      { name: "Nordic White", price: 499, orig: 1299, image: "/images/deal-drawer.jpg" },
      { name: "Blush Pink", price: 499, orig: 1299, image: "/images/deal-drawer.jpg" },
    ],
    offers: [
      { title: "Desk Glow Up", desc: "Save 61% on desk organisation essentials" },
      { title: "Free Assembly", desc: "Comes 100% pre-assembled and ready to use" },
    ],
    highlights: [
      "4 translucent pull-out sliding drawers keep items private and dust-free",
      "6 top partitioned compartments keep perfumes, lipsticks & pens within quick reach",
      "Manufactured with durable shatter-resistant ABS polymer",
      "Compact desktop footprint fits vanity tables, work desks, and bathroom counters",
      "Smooth rounded edges and ergonomic drawer pull handles",
    ],
    specs: [
      { label: "Dimensions", val: "28 cm (W) x 18 cm (D) x 24 cm (H)" },
      { label: "Material", val: "Heavy Duty Food-Grade ABS Polymer" },
      { label: "Total Drawers", val: "4 Drawers + 6 Top Slots" },
      { label: "Weight", val: "680 g" },
    ],
    inTheBox: ["1x Modular 4-Drawer Desktop Organiser Unit"],
    reviews: [
      {
        author: "Divya N.",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment: "Cleaned up my vanity completely! Fits all my skincare bottles and lipsticks.",
      },
    ],
  },
  {
    id: "val-12",
    name: "Reusable Magic Water Reveal Colouring Doodle Book & Water Pen Set",
    shortName: "Magic Water Doodle Book",
    brand: "ToyZone",
    pack: "4 Reusable Pages + Magic Refill Pen",
    category: "top-value",
    tag: "KIDS CRAFT",
    price: 149,
    originalPrice: 399,
    discount: "63% OFF",
    rating: 4.9,
    ratingsCount: "21,800 Ratings",
    reviewsCount: "3,420 Reviews",
    badge: "Top Fun Pick",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Mess-free colouring activity book! Fill the magic pen with water and watch vibrant colors magically appear. Dries within 10 minutes and resets for endless reuse.",
    image: "/images/magicpen.jpg",
    images: ["/images/magicpen.jpg", "/images/magicpen.jpg"],
    variantType: "theme",
    variants: [
      { name: "Animal Kingdom", price: 149, orig: 399, image: "/images/magicpen.jpg" },
      { name: "Underwater Sea World", price: 149, orig: 399, image: "/images/magicpen.jpg" },
      { name: "Space Adventure", price: 149, orig: 399, image: "/images/magicpen.jpg" },
    ],
    offers: [
      { title: "Pocket Friendly", desc: "Top rated educational gift under ₹150" },
      { title: "Mess-Free", desc: "No ink, no paint stains on walls or clothes" },
    ],
    highlights: [
      "100% mess-free: only clean tap water needed, zero ink or stain marks",
      "Colors magically appear on wet contact and disappear upon air-drying",
      "Endlessly reusable: each page can be painted hundreds of times",
      "Thick cardboard spiral-bound book withstands enthusiastic toddler hands",
      "Develops fine motor skills, color recognition, and hand-eye coordination",
    ],
    specs: [
      { label: "Book Size", val: "19 cm x 15 cm" },
      { label: "Pages", val: "4 Thick Reusable Activity Boards" },
      { label: "Age Group", val: "2 - 7 Years" },
      { label: "Safety", val: "Non-Toxic, Eco-Friendly Material" },
    ],
    inTheBox: ["1x Spiral Magic Water Book", "1x Refillable Chunky Water Pen"],
    reviews: [
      {
        author: "Swati M.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "Life saver on car rides and flights! Keeps my toddler engaged for hours.",
      },
    ],
  },
  {
    id: "val-13",
    name: "Tough Braided 65W Fast Charging USB Type-C to Type-C Cable",
    shortName: "65W Braided Type-C Cable",
    brand: "Portronics Style",
    pack: "1.5m Length • E-Marker Chip",
    category: "top-value",
    tag: "GADGET VALUE",
    price: 199,
    originalPrice: 699,
    discount: "71% OFF",
    rating: 4.8,
    ratingsCount: "36,200 Ratings",
    reviewsCount: "5,420 Reviews",
    badge: "Power Value",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Military-grade nylon braided 65W PD fast charging cable. Tested for 25,000+ bends with reinforced zinc alloy connector shells and 480 Mbps high speed data transfer.",
    image: "/images/cable.jpg",
    images: ["/images/cable.jpg", "/images/cable.jpg"],
    variantType: "length",
    variants: [
      { name: "1.5 Meter", price: 199, orig: 699, image: "/images/cable.jpg" },
      { name: "2 Meter Long", price: 249, orig: 799, image: "/images/cable.jpg" },
    ],
    offers: [
      { title: "Steal Deal", desc: "65W Power Delivery cable at just ₹199" },
      { title: "Universal", desc: "Charges laptops, tablets, and smartphones" },
    ],
    highlights: [
      "Supports 65W USB Power Delivery (PD 3.0) and Quick Charge 4.0",
      "Smart E-Marker chip protects battery against over-voltage and overheating",
      "Ultra-durable ballistic nylon double-braided jacket tested for 25,000+ bends",
      "Laser-welded alloy connectors resist loosening and port wobbling",
      "480 Mbps high-speed data sync transfers 1GB file in under 30 seconds",
    ],
    specs: [
      { label: "Max Output", val: "65W (20V / 3.25A)" },
      { label: "Length", val: "1.5 Meters" },
      { label: "Connector Type", val: "Type-C to Type-C (Reversible)" },
      { label: "Data Speed", val: "480 Mbps" },
      { label: "Warranty", val: "6 Months Replacement Warranty" },
    ],
    inTheBox: ["1x 65W Braided Type-C Cable", "Velcro Cable Organiser Strap"],
    reviews: [
      {
        author: "Prateek Yadav",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Charges my MacBook and OnePlus phone at full speed. Super rugged cord.",
      },
    ],
  },
  {
    id: "val-14",
    name: "Ergonomic 7-Level Adjustable Aluminium Laptop & Tablet Riser Stand",
    shortName: "Aluminium Laptop Stand",
    brand: "Amkette Style",
    pack: "Foldable Portable • Non-Slip Pads",
    category: "top-value",
    tag: "DESK VALUE",
    price: 399,
    originalPrice: 1299,
    discount: "69% OFF",
    rating: 4.8,
    ratingsCount: "29,400 Ratings",
    reviewsCount: "4,680 Reviews",
    badge: "Ergo Choice",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Solid aircraft-grade aluminium alloy foldable riser stand. 7 adjustable height angles elevate laptop from 2.5 to 6 inches, promoting ideal posture and open heat dissipation.",
    image: "/images/stand.jpg",
    images: ["/images/stand.jpg", "/images/stand.jpg"],
    variantType: "finish",
    variants: [
      { name: "Space Silver", price: 399, orig: 1299, image: "/images/stand.jpg" },
      { name: "Midnight Grey", price: 429, orig: 1399, image: "/images/stand.jpg" },
    ],
    offers: [
      { title: "Ergo Workstation Deal", desc: "Save 69% on premium aluminium stands" },
      { title: "Portable Pouch", desc: "Includes free protective felt travel case" },
    ],
    highlights: [
      "Solid 4mm sandblasted anodized aircraft-grade aluminium alloy frame",
      "7 multi-angle height notches adjust screen height from 15° to 45°",
      "Open hollow frame provides 100% natural airflow to prevent laptop throttling",
      "Silicone anti-slip pads on top and bottom hold device securely in place",
      "Folds completely flat into pocket size (26 x 4 cm) for easy travel",
    ],
    specs: [
      { label: "Compatibility", val: "All laptops from 10 to 15.6 inches (MacBook, Dell, HP)" },
      { label: "Material", val: "Sandblasted Anodized Aluminium Alloy" },
      { label: "Weight Support", val: "Holds up to 20 kg without wobbling" },
      { label: "Stand Weight", val: "245 g" },
    ],
    inTheBox: ["1x Foldable Aluminium Laptop Stand", "Felt Storage Travel Sleeve"],
    reviews: [
      {
        author: "Karthik R.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "My neck strain disappeared after 2 days of using this! Very solid metal build.",
      },
    ],
  },
  {
    id: "val-15",
    name: "Rose Gold Bluetooth Calling Smartwatch with 1.85\" HD Display",
    shortName: "Rose Gold Smartwatch",
    brand: "Fire-Boltt Style",
    pack: "BT Calling • 120+ Sports Modes",
    category: "top-value",
    tag: "TECH STEAL",
    price: 1499,
    originalPrice: 4999,
    discount: "70% OFF",
    rating: 4.8,
    ratingsCount: "44,100 Ratings",
    reviewsCount: "7,150 Reviews",
    badge: "Value Flagship",
    deliveryTime: "Tomorrow by 11 AM",
    inStock: true,
    assured: true,
    description:
      "Premium metallic rose gold curved frame with clear Bluetooth calling mic/speaker, 24/7 heart rate & SpO2 blood oxygen tracking, 100+ cloud watch faces, and 7-day battery.",
    image: "/images/smartwatch-gold.jpg",
    images: ["/images/smartwatch-gold.jpg", "/images/smartwatch-gold.jpg"],
    variantType: "strap",
    variants: [
      { name: "Rose Gold Metallic", price: 1499, orig: 4999, image: "/images/smartwatch-gold.jpg" },
      { name: "Champagne Gold Silicone", price: 1499, orig: 4999, image: "/images/smartwatch-gold.jpg" },
    ],
    offers: [
      { title: "Mega Flagship Deal", desc: "Flat 70% off during festival blowout" },
      { title: "1-Year Warranty", desc: "Brand door-to-door replacement warranty" },
    ],
    highlights: [
      "Vivid 1.85-inch curved edge HD display with 500 nits high outdoor brightness",
      "High-fidelity built-in speaker and noise-cancelling microphone for crystal calls",
      "Comprehensive 24/7 wellness suite: SpO2, continuous heart rate, sleep tracking",
      "120+ dedicated indoor and outdoor fitness sports workout modes",
      "IP68 dust and water resistant with long-lasting 7-day battery endurance",
    ],
    specs: [
      { label: "Screen Size", val: "1.85 Inch HD (240 x 284 Pixels, 500 Nits)" },
      { label: "Bluetooth", val: "v5.1 with Bluetooth Calling" },
      { label: "Battery Life", val: "7 Days Typical, 25 Days Standby" },
      { label: "Water Resistance", val: "IP68 Water & Sweat Resistant" },
      { label: "App Compatibility", val: "Android 5.0+ and iOS 9.0+" },
    ],
    inTheBox: [
      "1x Rose Gold Smartwatch",
      "Magnetic USB Charging Cable",
      "User Manual & Warranty Card",
    ],
    reviews: [
      {
        author: "Anjali Saxena",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Looks stunning! The rose gold color is so chic and call quality is crisp.",
      },
    ],
  },

  {
  "id": "gadget-app-1",
  "name": "OnePlus Nord Buds 2r True Wireless Earbuds with 12.4mm Drivers",
  "shortName": "OnePlus Nord Buds 2r",
  "brand": "OnePlus",
  "pack": "Deep Grey • 38H Battery",
  "category": "gadgets-appliances",
  "tag": "TRUE WIRELESS",
  "price": 1999,
  "originalPrice": 2999,
  "discount": "33% OFF",
  "rating": 4.6,
  "ratingsCount": "28,450 Ratings",
  "reviewsCount": "4,120 Reviews",
  "badge": "Min. 50% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "12.4mm extra bass titanium drivers, Dual Mic AI Noise Cancellation, Sound Master Equalizer, IP55 water resistance and up to 38 hours playback.",
  "image": "/images/oneplus-1.jpg",
  "images": [
    "/images/oneplus-1.jpg",
    "/images/oneplus-2.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Deep Grey",
      "price": 1999,
      "orig": 2999,
      "image": "/images/oneplus-1.jpg",
      "hex": "#4a4d52"
    },
    {
      "name": "Triple Blue",
      "price": 2099,
      "orig": 2999,
      "image": "/images/oneplus-2.jpg",
      "hex": "#2563eb"
    }
  ],
  "offers": [
    {
      "title": "Audio Deal",
      "desc": "Flat ₹1,000 off during tech lounge week"
    },
    {
      "title": "Bank Offer",
      "desc": "Extra 10% off with HDFC Card"
    }
  ],
  "highlights": [
    "12.4mm extra bass titanium coated dynamic acoustic drivers",
    "Dual Mic AI Noise Cancellation algorithm for crystal-clear calling",
    "Massive 38 hours total combined playback with charging case",
    "Flash Charge: 10 minutes gives 5 hours playback",
    "IP55 sweat and water resistance rating"
  ],
  "specs": [
    {
      "label": "Driver Size",
      "val": "12.4 mm Titanium Coated"
    },
    {
      "label": "Battery Life",
      "val": "Up to 38 Hours Total"
    },
    {
      "label": "Bluetooth",
      "val": "v5.3 Low Latency 94ms"
    },
    {
      "label": "Water Resistance",
      "val": "IP55 Dust & Water Resistant"
    },
    {
      "label": "Warranty",
      "val": "1 Year Official Brand Warranty"
    }
  ],
  "inTheBox": [
    "1x OnePlus Buds Pair",
    "1x Portable Charging Case",
    "1x USB Type-C Fast Cable",
    "3x Pairs of Silicone Ear Tips (S/M/L)",
    "1x User Manual & Warranty Card"
  ],
  "reviews": [
    {
      "author": "Aditya Verma",
      "stars": "★★★★★",
      "date": "Verified 2 days ago",
      "comment": "Outstanding bass and incredible battery life for daily office calls!"
    },
    {
      "author": "Kavita Rao",
      "stars": "★★★★★",
      "date": "Verified 1 week ago",
      "comment": "Very comfortable fit. The sound clarity and low latency gaming mode are top notch."
    }
  ]
},

  {
  "id": "gadget-app-2",
  "name": "Philips All-in-One Series 3000 Cordless Waterproof Beard Trimmer",
  "shortName": "Philips Series 3000 Trimmer",
  "brand": "Philips",
  "pack": "Self-Sharpening Blades • 60m Run",
  "category": "gadgets-appliances",
  "tag": "GROOMING PRO",
  "price": 1499,
  "originalPrice": 2495,
  "discount": "40% OFF",
  "rating": 4.7,
  "ratingsCount": "54,200 Ratings",
  "reviewsCount": "8,900 Reviews",
  "badge": "Min. 50% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "Stainless steel self-sharpening blades with DuraPower technology, 20 lock-in length settings (0.5 - 10mm), USB charging and washable attachments.",
  "image": "/images/deal-trimmer.jpg",
  "images": [
    "/images/deal-trimmer.jpg",
    "/images/deal-mencare.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Midnight Black",
      "price": 1499,
      "orig": 2495,
      "image": "/images/deal-trimmer.jpg",
      "hex": "#1c1c1e"
    },
    {
      "name": "Steel Silver",
      "price": 1599,
      "orig": 2495,
      "image": "/images/deal-mencare.jpg",
      "hex": "#9ca3af"
    }
  ],
  "offers": [
    {
      "title": "Grooming Fest",
      "desc": "Flat 40% Off + Free Travel Pouch"
    },
    {
      "title": "UPI Offer",
      "desc": "Instant ₹50 Cashback on PhonePe/GPay"
    }
  ],
  "highlights": [
    "Skin-friendly self-sharpening stainless steel blades with rounded tips",
    "DuraPower technology optimizes power consumption for 4x longer battery life",
    "20 lock-in length precision settings from 0.5mm to 10mm with 0.5mm steps",
    "Up to 60 minutes cordless use with convenient USB charging",
    "Detachable head for simple, quick cleaning under running water"
  ],
  "specs": [
    {
      "label": "Blade Material",
      "val": "Self-Sharpening Stainless Steel"
    },
    {
      "label": "Length Settings",
      "val": "20 Precision Settings (0.5 - 10 mm)"
    },
    {
      "label": "Run Time",
      "val": "60 Minutes Cordless Runtime"
    },
    {
      "label": "Charging Time",
      "val": "2 Hours Quick USB Charging"
    },
    {
      "label": "Warranty",
      "val": "2 Years Official Philips Warranty"
    }
  ],
  "inTheBox": [
    "1x Philips Beard Trimmer Unit",
    "1x Adjustable Zoom Wheel Comb (0.5-10mm)",
    "1x USB Charging Cable",
    "1x Cleaning Brush",
    "1x Warranty Card & User Guide"
  ],
  "reviews": [
    {
      "author": "Naveen Sharma",
      "stars": "★★★★★",
      "date": "Verified 4 days ago",
      "comment": "Perfect trim every time. The zoom wheel makes it so easy to get 1mm or 3mm stubble."
    }
  ]
},

  {
  "id": "gadget-app-3",
  "name": "boAt Rockerz 255 Pro+ Fast Charging Wireless Bluetooth Neckband",
  "shortName": "boAt Rockerz 255 Pro+",
  "brand": "boAt",
  "pack": "40H Playback • ASAP Charge",
  "category": "gadgets-appliances",
  "tag": "HEAVY BASS",
  "price": 1299,
  "originalPrice": 2990,
  "discount": "57% OFF",
  "rating": 4.8,
  "ratingsCount": "128,400 Ratings",
  "reviewsCount": "18,250 Reviews",
  "badge": "Min. 50% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "boAt Signature Sound with 10mm dynamic drivers, ASAP Charge (10 mins = 10 hours), IPX7 water & sweat resistance, and Qualcomm cVc noise cancellation.",
  "image": "/images/deal-neckband.jpg",
  "images": [
    "/images/deal-neckband.jpg",
    "/images/headphones-black.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Active Black",
      "price": 1299,
      "orig": 2990,
      "image": "/images/deal-neckband.jpg",
      "hex": "#0f172a"
    },
    {
      "name": "Navy Blue",
      "price": 1299,
      "orig": 2990,
      "image": "/images/headphones-black.jpg",
      "hex": "#1e3a8a"
    }
  ],
  "offers": [
    {
      "title": "Mega Bass",
      "desc": "Instant ₹200 Coupon Auto-Applied"
    },
    {
      "title": "Card Discount",
      "desc": "5% Unlimited Cashback on Axis Bank Credit Card"
    }
  ],
  "highlights": [
    "Massive 40 hours continuous battery playback time",
    "ASAP Charge: 10 minutes charging delivers 10 hours of non-stop playback",
    "10mm dynamic drivers tuned for super extra punchy bass",
    "IPX7 rated water and sweat resistance perfect for workouts",
    "Qualcomm cVc call noise cancellation for crystal clear voice calls"
  ],
  "specs": [
    {
      "label": "Driver Size",
      "val": "10 mm Dynamic Drivers"
    },
    {
      "label": "Battery Life",
      "val": "Up to 40 Hours Playback"
    },
    {
      "label": "Fast Charging",
      "val": "ASAP Charge (10 min = 10 hrs)"
    },
    {
      "label": "Water Resistance",
      "val": "IPX7 Sweat & Splash Proof"
    },
    {
      "label": "Warranty",
      "val": "1 Year Replacement Warranty"
    }
  ],
  "inTheBox": [
    "1x boAt Rockerz 255 Pro+ Neckband",
    "1x Type-C Charging Cable",
    "2x Additional Pairs of Earbuds",
    "1x Warranty Card & User Manual"
  ],
  "reviews": [
    {
      "author": "Rohit Rajput",
      "stars": "★★★★★",
      "date": "Verified 1 day ago",
      "comment": "Insane bass! Battery lasts literally the entire week of daily gym and commutes."
    }
  ]
},

  {
  "id": "gadget-app-4",
  "name": "Prestige Iris Plus 750W Heavy Duty Mixer Juicer Grinder with 4 Jars",
  "shortName": "Prestige Iris Plus 750W",
  "brand": "Prestige",
  "pack": "750W Motor • 3 SS Jars + Juicer",
  "category": "gadgets-appliances",
  "tag": "KITCHEN POWER",
  "price": 2999,
  "originalPrice": 6295,
  "discount": "53% OFF",
  "rating": 4.7,
  "ratingsCount": "42,100 Ratings",
  "reviewsCount": "6,520 Reviews",
  "badge": "Min. 50% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "Powerful 750W motor with 100% copper winding, 3 heavy gauge stainless steel jars plus transparent juicer jar with sieve, overload protector and ergonomic handles.",
  "image": "/images/deal-mixer.jpg",
  "images": [
    "/images/deal-mixer.jpg",
    "/images/deal-flask.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Classic White & Blue",
      "price": 2999,
      "orig": 6295,
      "image": "/images/deal-mixer.jpg",
      "hex": "#0284c7"
    },
    {
      "name": "Bold Black & Red",
      "price": 3199,
      "orig": 6295,
      "image": "/images/deal-flask.jpg",
      "hex": "#dc2626"
    }
  ],
  "offers": [
    {
      "title": "Kitchen Festival",
      "desc": "Flat ₹3,296 Off + Free Recipe Book"
    },
    {
      "title": "No Cost EMI",
      "desc": "Starting ₹500/month on credit cards"
    }
  ],
  "highlights": [
    "Robust 750W pure copper motor for effortless grinding of tough ingredients",
    "4 Versatile Jars: Wet Grinding (1.5L), Dry Grinding (1L), Chutney (300ml), Juicer (1.5L)",
    "High grade stainless steel multipurpose blades for fine and coarse blending",
    "Attractive dual-tone ergonomic design with sturdy grip handles",
    "Overload safety switch to protect motor from voltage fluctuations and overheating"
  ],
  "specs": [
    {
      "label": "Motor Power",
      "val": "750 Watts Pure Copper Motor"
    },
    {
      "label": "Number of Jars",
      "val": "4 Jars (3 Stainless Steel + 1 Juicer)"
    },
    {
      "label": "Speed Settings",
      "val": "3 Speeds + Pulse Function"
    },
    {
      "label": "Body Material",
      "val": "Shockproof High Grade ABS Plastic"
    },
    {
      "label": "Warranty",
      "val": "2 Years Motor & Product Warranty"
    }
  ],
  "inTheBox": [
    "1x Prestige Iris Plus Mixer Grinder Main Unit",
    "1x 1.5L Wet Grinding SS Jar with Lid",
    "1x 1.0L Dry Grinding SS Jar with Lid",
    "1x 300ml Chutney SS Jar with Lid",
    "1x 1.5L Transparent Juicer Jar with Sieve",
    "1x Spatula & User Manual"
  ],
  "reviews": [
    {
      "author": "Sunita Agarwal",
      "stars": "★★★★★",
      "date": "Verified 3 days ago",
      "comment": "Prestige quality is unbeatable. Grinds idli batter smooth in 2 minutes!"
    }
  ]
},

  {
  "id": "gadget-app-5",
  "name": "Fire-Boltt Phoenix Bluetooth Calling Smartwatch with 1.3\" HD Display",
  "shortName": "Fire-Boltt Phoenix",
  "brand": "Fire-Boltt",
  "pack": "120+ Sports Modes • SpO2",
  "category": "gadgets-appliances",
  "tag": "SMART CALL",
  "price": 1299,
  "originalPrice": 6999,
  "discount": "81% OFF",
  "rating": 4.6,
  "ratingsCount": "87,300 Ratings",
  "reviewsCount": "14,200 Reviews",
  "badge": "Min. 60% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "High resolution 1.3-inch round display, Bluetooth calling with high definition speaker and mic, 120+ sports modes, 24/7 heart rate & SpO2 tracking, and IP67 water resistant.",
  "image": "/images/deal-watch.jpg",
  "images": [
    "/images/deal-watch.jpg",
    "/images/smartwatch-black.jpg",
    "/images/smartwatch-gold.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Obsidian Black",
      "price": 1299,
      "orig": 6999,
      "image": "/images/deal-watch.jpg",
      "hex": "#111827"
    },
    {
      "name": "Rose Gold",
      "price": 1399,
      "orig": 6999,
      "image": "/images/smartwatch-gold.jpg",
      "hex": "#fb7185"
    },
    {
      "name": "Champagne Silver",
      "price": 1299,
      "orig": 6999,
      "image": "/images/smartwatch-black.jpg",
      "hex": "#94a3b8"
    }
  ],
  "offers": [
    {
      "title": "Flash Sale",
      "desc": "Flat 81% Off Launch Discount"
    },
    {
      "title": "Watch Strap Promo",
      "desc": "Extra silicone strap free in package"
    }
  ],
  "highlights": [
    "1.3-inch High Definition true color touch display with 240x240 pixels",
    "Direct Bluetooth calling with quick dial pad, call history and sync contacts",
    "Complete health suite: real-time Heart Rate, SpO2 Blood Oxygen & Sleep monitor",
    "120+ sports tracking modes with calorie counter and distance tracker",
    "Up to 7 days battery life on normal use and 48 hours with Bluetooth calling"
  ],
  "specs": [
    {
      "label": "Display Size",
      "val": "1.30 Inch High Resolution HD"
    },
    {
      "label": "Calling Feature",
      "val": "Bluetooth Calling with Mic & Speaker"
    },
    {
      "label": "Battery Life",
      "val": "Up to 7 Days (Standby 30 Days)"
    },
    {
      "label": "Water Resistance",
      "val": "IP67 Certified Water Resistant"
    },
    {
      "label": "Warranty",
      "val": "1 Year Official Brand Warranty"
    }
  ],
  "inTheBox": [
    "1x Fire-Boltt Phoenix Smartwatch",
    "1x Magnetic Charging Cable",
    "1x Extra Silicone Band",
    "1x User Manual & Warranty Information"
  ],
  "reviews": [
    {
      "author": "Ankit Mehra",
      "stars": "★★★★★",
      "date": "Verified 2 days ago",
      "comment": "Dialing and speaking directly from the watch is super convenient when driving."
    }
  ]
},

  {
  "id": "gadget-app-6",
  "name": "Mi 20000mAh 18W Two-Way Fast Charging Power Bank with Triple Output",
  "shortName": "Mi 20000mAh Power Bank",
  "brand": "Xiaomi",
  "pack": "18W Fast Charge • Dual Input",
  "category": "gadgets-appliances",
  "tag": "TRAVEL READY",
  "price": 1899,
  "originalPrice": 2499,
  "discount": "24% OFF",
  "rating": 4.6,
  "ratingsCount": "65,100 Ratings",
  "reviewsCount": "9,800 Reviews",
  "badge": "Min. 30% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "High density 20000mAh lithium polymer battery, 18W fast charging support, triple output ports (2x USB-A, 1x Type-C), and 12-layer advanced circuit chip protection.",
  "image": "/images/ssd-black.jpg",
  "images": [
    "/images/ssd-black.jpg",
    "/images/ssd-orange.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Matte Black",
      "price": 1899,
      "orig": 2499,
      "image": "/images/ssd-black.jpg",
      "hex": "#1f2937"
    },
    {
      "name": "Classic White",
      "price": 1899,
      "orig": 2499,
      "image": "/images/ssd-orange.jpg",
      "hex": "#f3f4f6"
    }
  ],
  "offers": [
    {
      "title": "Travel Deal",
      "desc": "Save ₹600 on fast charging packs"
    },
    {
      "title": "Bank Discount",
      "desc": "10% off with ICICI Bank Cards"
    }
  ],
  "highlights": [
    "Massive 20000mAh capacity charges flagship smartphones 4-5 times over",
    "18W Two-Way fast charging rapidly juices up phones and power bank itself",
    "Triple port output lets you charge 3 gadgets simultaneously with ease",
    "12-layer circuit protection against overheating, overcharge & short circuits",
    "Low current charging mode safe for Bluetooth earbuds and smart fitness bands"
  ],
  "specs": [
    {
      "label": "Battery Capacity",
      "val": "20,000 mAh Li-Polymer"
    },
    {
      "label": "Power Output",
      "val": "18W Max Fast Output"
    },
    {
      "label": "Ports",
      "val": "2x USB-A Out, 1x Type-C In/Out, 1x Micro-USB In"
    },
    {
      "label": "Weight",
      "val": "434 grams Portable Design"
    },
    {
      "label": "Warranty",
      "val": "6 Months Domestic Warranty"
    }
  ],
  "inTheBox": [
    "1x Mi 20000mAh Power Bank",
    "1x USB-A to Type-C Cable",
    "1x Quick Start Guide"
  ],
  "reviews": [
    {
      "author": "Rahul Nair",
      "stars": "★★★★★",
      "date": "Verified 5 days ago",
      "comment": "Reliable power bank! Charged two iPhones and an iPad during a whole flight."
    }
  ]
},

  {
  "id": "gadget-app-7",
  "name": "Havells 1200W Compact Foldable Travel Hair Dryer (Powerful Airflow)",
  "shortName": "Havells 1200W Hair Dryer",
  "brand": "Havells",
  "pack": "Foldable Handle • 2 Speed Modes",
  "category": "gadgets-appliances",
  "tag": "HAIR STYLING",
  "price": 999,
  "originalPrice": 1695,
  "discount": "42% OFF",
  "rating": 4.7,
  "ratingsCount": "31,800 Ratings",
  "reviewsCount": "4,600 Reviews",
  "badge": "Min. 40% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "1200W gentle yet powerful airflow for salon-like styling, foldable handle for compact storage during travel, 2 heat and speed settings with concentrator nozzle.",
  "image": "/images/deal-mencare.jpg",
  "images": [
    "/images/deal-mencare.jpg",
    "/images/deal-hairclips.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Ocean Blue",
      "price": 999,
      "orig": 1695,
      "image": "/images/deal-mencare.jpg",
      "hex": "#0ea5e9"
    },
    {
      "name": "Coral Pink",
      "price": 1049,
      "orig": 1695,
      "image": "/images/deal-hairclips.jpg",
      "hex": "#f43f5e"
    }
  ],
  "offers": [
    {
      "title": "Styling Bonus",
      "desc": "Flat 42% Off on Havells Grooming"
    },
    {
      "title": "Combo Offer",
      "desc": "Buy with Hair Clips and save extra 10%"
    }
  ],
  "highlights": [
    "1200 Watts power ensures optimal airflow temperature for healthy hair drying",
    "Foldable handle design makes it effortless to pack into travel bags & purses",
    "2 flexible heat and speed settings for gentle drying and full precision styling",
    "Detachable directional concentrator nozzle focuses airflow for sleek finish",
    "Built-in honeycomb air inlet prevents hair entanglement and overheating"
  ],
  "specs": [
    {
      "label": "Wattage",
      "val": "1200 Watts High Efficiency Motor"
    },
    {
      "label": "Heat Settings",
      "val": "2 Heat / Speed Modes"
    },
    {
      "label": "Cord Length",
      "val": "1.6m Tangle-Free Cord"
    },
    {
      "label": "Handle Type",
      "val": "Foldable Space-Saving Handle"
    },
    {
      "label": "Warranty",
      "val": "2 Years Havells India Warranty"
    }
  ],
  "inTheBox": [
    "1x Havells 1200W Hair Dryer Unit",
    "1x Concentrator Nozzle Attachment",
    "1x User Instruction Manual",
    "1x Warranty Card"
  ],
  "reviews": [
    {
      "author": "Meera Joshi",
      "stars": "★★★★★",
      "date": "Verified 3 days ago",
      "comment": "Very lightweight and dries thick hair in under 5 minutes without frizz."
    }
  ]
},

  {
  "id": "gadget-app-8",
  "name": "Pigeon 1.5L Stainless Steel Electric Kettle with Auto Cut-Off Protection",
  "shortName": "Pigeon 1.5L Kettle",
  "brand": "Pigeon",
  "pack": "1500W Rapid Boil • 1.5 Litres",
  "category": "gadgets-appliances",
  "tag": "QUICK BOIL",
  "price": 649,
  "originalPrice": 1295,
  "discount": "50% OFF",
  "rating": 4.5,
  "ratingsCount": "92,400 Ratings",
  "reviewsCount": "16,100 Reviews",
  "badge": "Min. 50% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "1500W heating element for boiling water in under 3 minutes, 100% food-grade stainless steel body, 360-degree cordless swivel base, and automatic boil-dry cut-off.",
  "image": "/images/deal-flask.jpg",
  "images": [
    "/images/deal-flask.jpg",
    "/images/deal-drawer.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Silver Stainless Steel",
      "price": 649,
      "orig": 1295,
      "image": "/images/deal-flask.jpg",
      "hex": "#cbd5e1"
    },
    {
      "name": "Matte Black",
      "price": 699,
      "orig": 1295,
      "image": "/images/deal-drawer.jpg",
      "hex": "#0f172a"
    }
  ],
  "offers": [
    {
      "title": "Kitchen Essential",
      "desc": "50% Instant Discount on Pigeon Kettles"
    },
    {
      "title": "Bundle Deal",
      "desc": "Save ₹50 extra when ordered with Green Tea"
    }
  ],
  "highlights": [
    "1500 Watt concealed heating plate brings 1.5L of water to boil in minutes",
    "Food-grade stainless steel interior ensures zero plastic contact with water",
    "Auto shut-off sensor turns kettle off automatically when boiling point is reached",
    "360-degree rotating cordless swivel base for hassle-free serving and pouring",
    "Cool-touch ergonomic handle and single-touch lid opening mechanism"
  ],
  "specs": [
    {
      "label": "Capacity",
      "val": "1.5 Litres"
    },
    {
      "label": "Power",
      "val": "1500 Watts Fast Heating"
    },
    {
      "label": "Material",
      "val": "Food Grade Stainless Steel"
    },
    {
      "label": "Safety",
      "val": "Boil-Dry Auto Cut-Off Protection"
    },
    {
      "label": "Warranty",
      "val": "1 Year Pigeon Manufacturer Warranty"
    }
  ],
  "inTheBox": [
    "1x Pigeon 1.5L Stainless Steel Electric Kettle",
    "1x 360-Degree Detachable Base with Power Cord",
    "1x Warranty Card & User Manual"
  ],
  "reviews": [
    {
      "author": "Deepak Patel",
      "stars": "★★★★★",
      "date": "Verified 2 days ago",
      "comment": "Boils water super fast for morning tea and instant noodles. Best value!"
    }
  ]
},

  {
  "id": "gadget-app-9",
  "name": "Kent 300W Stainless Steel Hand Blender with Detachable Shaft",
  "shortName": "Kent 300W Hand Blender",
  "brand": "Kent",
  "pack": "Stainless Steel Blade • Low Noise",
  "category": "gadgets-appliances",
  "tag": "KITCHEN BLEND",
  "price": 1199,
  "originalPrice": 1899,
  "discount": "37% OFF",
  "rating": 4.6,
  "ratingsCount": "19,200 Ratings",
  "reviewsCount": "2,840 Reviews",
  "badge": "Min. 35% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "High-torque 300W copper motor with variable speed controls, durable food-grade stainless steel stem and blades, ideal for soups, smoothies, chutneys and baby food puree.",
  "image": "/images/deal-mixer.jpg",
  "images": [
    "/images/deal-mixer.jpg",
    "/images/deal-flask.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Alpine White",
      "price": 1199,
      "orig": 1899,
      "image": "/images/deal-mixer.jpg",
      "hex": "#f8fafc"
    },
    {
      "name": "Metallic Silver",
      "price": 1299,
      "orig": 1899,
      "image": "/images/deal-flask.jpg",
      "hex": "#64748b"
    }
  ],
  "offers": [
    {
      "title": "Chef Deal",
      "desc": "Flat ₹700 Off on Kent Appliances"
    },
    {
      "title": "Free Darkstore Delivery",
      "desc": "Guaranteed 15-minute dispatch"
    }
  ],
  "highlights": [
    "300W pure copper motor operates smoothly with minimal vibration and noise",
    "Detachable stainless steel blending stem suitable for both hot and cold liquids",
    "Anti-splash blade guard prevents mess and food splatters on kitchen counters",
    "Ergonomic slim-grip body fits comfortably in hand for one-touch operation",
    "Dishwasher safe detachable blending shaft for effortless cleanup"
  ],
  "specs": [
    {
      "label": "Motor",
      "val": "300W High-Efficiency Motor"
    },
    {
      "label": "Shaft Material",
      "val": "Food Grade 304 Stainless Steel"
    },
    {
      "label": "Speed Control",
      "val": "Push Button Single Touch Speed"
    },
    {
      "label": "Blade Type",
      "val": "Multi-Utility SS Sharp Blades"
    },
    {
      "label": "Warranty",
      "val": "1 Year Official Kent Warranty"
    }
  ],
  "inTheBox": [
    "1x Kent 300W Hand Blender Motor Unit",
    "1x Detachable SS Blending Stem",
    "1x User Instruction Manual",
    "1x Warranty Card"
  ],
  "reviews": [
    {
      "author": "Shalini Gupta",
      "stars": "★★★★★",
      "date": "Verified 4 days ago",
      "comment": "Purees hot dal and vegetable soups in seconds right in the pot. Love it!"
    }
  ]
},

  {
  "id": "gadget-app-10",
  "name": "Philips EasySpeed Plus 2000W Steam Iron with Non-Stick Ceramic Soleplate",
  "shortName": "Philips EasySpeed Steam Iron",
  "brand": "Philips",
  "pack": "2000W • 100g Steam Boost",
  "category": "gadgets-appliances",
  "tag": "CRISP PRESS",
  "price": 1499,
  "originalPrice": 2695,
  "discount": "44% OFF",
  "rating": 4.7,
  "ratingsCount": "38,900 Ratings",
  "reviewsCount": "5,400 Reviews",
  "badge": "Min. 45% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "2000 Watts for fast heat-up in 30 seconds, up to 25g/min continuous steam and 100g steam boost to eliminate stubborn creases, ceramic soleplate for smooth glide on all fabrics.",
  "image": "/images/charger-black.jpg",
  "images": [
    "/images/charger-black.jpg",
    "/images/charger-white.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Turquoise Blue",
      "price": 1499,
      "orig": 2695,
      "image": "/images/charger-black.jpg",
      "hex": "#06b6d4"
    },
    {
      "name": "Deep Purple",
      "price": 1549,
      "orig": 2695,
      "image": "/images/charger-white.jpg",
      "hex": "#7c3aed"
    }
  ],
  "offers": [
    {
      "title": "Home Care Deal",
      "desc": "Flat ₹1,196 Off + Free Measuring Cup"
    },
    {
      "title": "Warranty Bonus",
      "desc": "Free 1 Year Extended Warranty Registration"
    }
  ],
  "highlights": [
    "2000 Watts delivers rapid heat-up time and constant high steam output",
    "Up to 100g powerful steam boost penetrates deep to remove stubborn creases",
    "Scratch-resistant ceramic soleplate glides smoothly over all ironable garments",
    "Drip-stop system keeps clothes spotless while ironing delicate fabrics",
    "Calc-clean slider container easily flushes out limescale and tap water minerals"
  ],
  "specs": [
    {
      "label": "Power Consumption",
      "val": "2000 Watts"
    },
    {
      "label": "Steam Output",
      "val": "Continuous 25g/min, Boost 100g"
    },
    {
      "label": "Soleplate",
      "val": "Durable Scratch-Proof Ceramic"
    },
    {
      "label": "Water Tank",
      "val": "220ml Transparent Water Tank"
    },
    {
      "label": "Warranty",
      "val": "2 Years Worldwide Philips Guarantee"
    }
  ],
  "inTheBox": [
    "1x Philips EasySpeed Steam Iron",
    "1x Water Filling Beaker",
    "1x User Manual & Warranty Card"
  ],
  "reviews": [
    {
      "author": "Vikas Trivedi",
      "stars": "★★★★★",
      "date": "Verified 3 days ago",
      "comment": "Crisp pressed shirts in minutes. The steam burst easily flattens denim jeans."
    }
  ]
},

  {
  "id": "gadget-app-11",
  "name": "boAt Stone 352 10W Portable Bluetooth Speaker with IPX7 Water Resistance",
  "shortName": "boAt Stone 352 Speaker",
  "brand": "boAt",
  "pack": "10W RMS Stereo • 12H Playtime",
  "category": "gadgets-appliances",
  "tag": "PUNCHY BASS",
  "price": 1399,
  "originalPrice": 3490,
  "discount": "60% OFF",
  "rating": 4.8,
  "ratingsCount": "74,600 Ratings",
  "reviewsCount": "11,800 Reviews",
  "badge": "Min. 60% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "10W dynamic stereo audio with punchy bass radiators, up to 12 hours playback on single charge, rugged shock-resistant exterior with IPX7 splash proofing, and TWS true stereo pairing.",
  "image": "/images/soundbar.jpg",
  "images": [
    "/images/soundbar.jpg",
    "/images/boat-blue-1.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Raging Black",
      "price": 1399,
      "orig": 3490,
      "image": "/images/soundbar.jpg",
      "hex": "#18181b"
    },
    {
      "name": "Electric Blue",
      "price": 1399,
      "orig": 3490,
      "image": "/images/boat-blue-1.jpg",
      "hex": "#3b82f6"
    }
  ],
  "offers": [
    {
      "title": "boAt Audio Fest",
      "desc": "60% Off + Free Lanyard Strap"
    },
    {
      "title": "Exchange Offer",
      "desc": "Extra ₹100 Off on audio trade-in"
    }
  ],
  "highlights": [
    "10W RMS boAt Signature Sound with passive radiators for room-filling bass",
    "Up to 12 hours of uninterrupted party music playback at 60% volume",
    "IPX7 water & splash resistance allows usage by pool, beach, or rain",
    "True Wireless Stereo (TWS) mode lets you connect two Stone 352 speakers",
    "Multiple connectivity modes: Bluetooth v5.0, AUX audio-in, and TF Card"
  ],
  "specs": [
    {
      "label": "Speaker Output",
      "val": "10W RMS High Fidelity Stereo"
    },
    {
      "label": "Playtime",
      "val": "Up to 12 Hours Battery Life"
    },
    {
      "label": "Water Resistance",
      "val": "IPX7 Waterproof & Rugged"
    },
    {
      "label": "Bluetooth",
      "val": "v5.0 with 10m Stable Range"
    },
    {
      "label": "Warranty",
      "val": "1 Year Official boAt Warranty"
    }
  ],
  "inTheBox": [
    "1x boAt Stone 352 Bluetooth Speaker",
    "1x Type-C Charging Cable",
    "1x AUX Audio Cable",
    "1x Carry Lanyard Strap",
    "1x User Manual & Warranty Card"
  ],
  "reviews": [
    {
      "author": "Arun Kumar",
      "stars": "★★★★★",
      "date": "Verified 2 days ago",
      "comment": "Amazingly loud and crystal clear audio for such a compact cylinder speaker!"
    }
  ]
},

  {
  "id": "gadget-app-12",
  "name": "Prestige 800W Non-Stick Grill Sandwich Toaster & Panini Press",
  "shortName": "Prestige Sandwich Maker",
  "brand": "Prestige",
  "pack": "Die-Cast Plates • Heat Resistant",
  "category": "gadgets-appliances",
  "tag": "QUICK TOAST",
  "price": 1249,
  "originalPrice": 2095,
  "discount": "40% OFF",
  "rating": 4.6,
  "ratingsCount": "25,700 Ratings",
  "reviewsCount": "3,800 Reviews",
  "badge": "Min. 40% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "800W efficient heating element with non-stick German technology die-cast grill plates, heat-resistant bakelite body with secure locking clip, power and ready indicators.",
  "image": "/images/deal-drawer.jpg",
  "images": [
    "/images/deal-drawer.jpg",
    "/images/deal-mixer.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Matte Black",
      "price": 1249,
      "orig": 2095,
      "image": "/images/deal-drawer.jpg",
      "hex": "#09090b"
    },
    {
      "name": "Brushed Chrome",
      "price": 1349,
      "orig": 2095,
      "image": "/images/deal-mixer.jpg",
      "hex": "#cbd5e1"
    }
  ],
  "offers": [
    {
      "title": "Breakfast Special",
      "desc": "Flat 40% Off + Free Silicone Brush"
    },
    {
      "title": "Bank Deal",
      "desc": "Extra ₹100 Off on Net Banking"
    }
  ],
  "highlights": [
    "800W powerful heating plates toast club sandwiches and paninis in 2 minutes",
    "Durable non-stick coated grill plates require minimal oil and butter",
    "Thermostatic temperature control ensures uniform browning without burning",
    "Dual LED indicators: Red for power on, Green for sandwich ready to eat",
    "Cool touch handle with secure locking clip for vertical storage"
  ],
  "specs": [
    {
      "label": "Wattage",
      "val": "800 Watts Fast Heat"
    },
    {
      "label": "Plates Type",
      "val": "Fixed Non-Stick Coated Grill Plates"
    },
    {
      "label": "Body Material",
      "val": "Heat Resistant Bakelite Shell"
    },
    {
      "label": "Indicator",
      "val": "Power & Heating Ready Lights"
    },
    {
      "label": "Warranty",
      "val": "1 Year Prestige India Warranty"
    }
  ],
  "inTheBox": [
    "1x Prestige 800W Grill Sandwich Toaster",
    "1x User Instruction Manual",
    "1x Warranty Card"
  ],
  "reviews": [
    {
      "author": "Pooja Malhotra",
      "stars": "★★★★★",
      "date": "Verified 5 days ago",
      "comment": "Grills cafe-style crispy sandwiches with nice grill marks effortlessly!"
    }
  ]
},

  {
  "id": "gadget-app-13",
  "name": "Nova Ceramic Coating Fast Heat Hair Straightener with Temperature Control",
  "shortName": "Nova Hair Straightener",
  "brand": "Nova",
  "pack": "Ceramic Plates • 30s Fast Heat",
  "category": "gadgets-appliances",
  "tag": "SALON GLOSS",
  "price": 599,
  "originalPrice": 1499,
  "discount": "60% OFF",
  "rating": 4.5,
  "ratingsCount": "41,200 Ratings",
  "reviewsCount": "6,200 Reviews",
  "badge": "Min. 55% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "Professional ceramic tourmaline floating plates with quick 30-second PTC heating, ionic technology prevents frizz, 360-degree swivel cord and compact lock mechanism.",
  "image": "/images/deal-mencare.jpg",
  "images": [
    "/images/deal-mencare.jpg",
    "/images/deal-facewash.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Rose Gold",
      "price": 599,
      "orig": 1499,
      "image": "/images/deal-mencare.jpg",
      "hex": "#fb7185"
    },
    {
      "name": "Jet Black",
      "price": 599,
      "orig": 1499,
      "image": "/images/deal-facewash.jpg",
      "hex": "#18181b"
    }
  ],
  "offers": [
    {
      "title": "Super Deal",
      "desc": "Flat 60% Off on Nova Professional"
    },
    {
      "title": "Combo Offer",
      "desc": "Add Serum for extra 15% off"
    }
  ],
  "highlights": [
    "Ultra-smooth ceramic tourmaline floating plates glide seamlessly without snagging",
    "Rapid 30-second PTC heating reaches salon temperature up to 210°C",
    "Negative ion technology locks in moisture for glossy, frizz-free straight hair",
    "360-degree salon swivel power cord prevents tangles while styling",
    "Plate lock switch for safe storage and effortless portability"
  ],
  "specs": [
    {
      "label": "Plate Material",
      "val": "Ceramic Tourmaline Floating Plates"
    },
    {
      "label": "Max Temperature",
      "val": "Up to 210°C Professional Heat"
    },
    {
      "label": "Heat-Up Time",
      "val": "30 Seconds Fast PTC Heat"
    },
    {
      "label": "Cord Type",
      "val": "1.8m 360-Degree Swivel Cord"
    },
    {
      "label": "Warranty",
      "val": "1 Year Manufacturer Warranty"
    }
  ],
  "inTheBox": [
    "1x Nova Hair Straightener Unit",
    "1x User Instruction Manual",
    "1x Warranty Card"
  ],
  "reviews": [
    {
      "author": "Sneha Roy",
      "stars": "★★★★★",
      "date": "Verified 4 days ago",
      "comment": "Heats up in 30 seconds and straightens frizzy wavy hair in one pass!"
    }
  ]
},

  {
  "id": "gadget-app-14",
  "name": "Pigeon Cruise 1800W Induction Cooktop with 7 Indian Preset Menus",
  "shortName": "Pigeon Cruise Induction Cooktop",
  "brand": "Pigeon",
  "pack": "1800W Power • Microcrystal Plate",
  "category": "gadgets-appliances",
  "tag": "FAST COOKING",
  "price": 1699,
  "originalPrice": 3595,
  "discount": "53% OFF",
  "rating": 4.7,
  "ratingsCount": "63,500 Ratings",
  "reviewsCount": "9,400 Reviews",
  "badge": "Min. 50% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "1800W energy efficient induction plate with 7 pre-programmed Indian cooking menus (Roti, Dosa, Curry, Boil, etc.), dual heat sensor and high grade microcrystal glass plate.",
  "image": "/images/deal-inflator.jpg",
  "images": [
    "/images/deal-inflator.jpg",
    "/images/deal-flask.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Crystal Black",
      "price": 1699,
      "orig": 3595,
      "image": "/images/deal-inflator.jpg",
      "hex": "#09090b"
    }
  ],
  "offers": [
    {
      "title": "Energy Saver",
      "desc": "Flat 53% Off + 93% Cooking Efficiency"
    },
    {
      "title": "Bank Discount",
      "desc": "Flat ₹150 off on HDFC & SBI Cards"
    }
  ],
  "highlights": [
    "High power 1800 Watts heats utensils directly with 93% energy efficiency",
    "7 Customized Indian cooking menus: Pressure Cook, Curry, Deep Fry, Roti, Milk",
    "Full digital LED display with tactile touch push buttons and timer setting",
    "Premium microcrystal glass top plate is easy to wipe clean after cooking",
    "Dual heat sensors prevent overheating and shut off when utensil is removed"
  ],
  "specs": [
    {
      "label": "Power Consumption",
      "val": "1800 Watts"
    },
    {
      "label": "Cooktop Surface",
      "val": "High Grade Microcrystal Glass Plate"
    },
    {
      "label": "Preset Menus",
      "val": "7 Indian Cooking Preset Menus"
    },
    {
      "label": "Timer",
      "val": "Up to 3 Hours Digital Timer"
    },
    {
      "label": "Warranty",
      "val": "1 Year Pigeon Manufacturer Warranty"
    }
  ],
  "inTheBox": [
    "1x Pigeon Cruise 1800W Induction Cooktop",
    "1x User Instruction Manual",
    "1x Warranty Card"
  ],
  "reviews": [
    {
      "author": "Manoj Tiwari",
      "stars": "★★★★★",
      "date": "Verified 1 day ago",
      "comment": "Saves so much LPG gas! Milk boils in 2 minutes and temperature control is instant."
    }
  ]
},

  {
  "id": "gadget-app-15",
  "name": "Eureka Forbes Cordless Stick Vacuum Cleaner with Cyclonic HEPA Filter",
  "shortName": "Eureka Forbes Cordless Vacuum",
  "brand": "Eureka Forbes",
  "pack": "150W Suction • 45m Run Time",
  "category": "gadgets-appliances",
  "tag": "HOME HYGIENE",
  "price": 5999,
  "originalPrice": 11999,
  "discount": "50% OFF",
  "rating": 4.6,
  "ratingsCount": "14,800 Ratings",
  "reviewsCount": "2,350 Reviews",
  "badge": "Min. 45% Off",
  "deliveryTime": "Tomorrow by 11 AM",
  "inStock": true,
  "assured": true,
  "description": "Ultra-lightweight cordless 2-in-1 stick and handheld vacuum, 150W powerful brushless cyclonic suction, washable multi-stage HEPA filter, and motorized floor brush.",
  "image": "/images/stand.jpg",
  "images": [
    "/images/stand.jpg",
    "/images/charger-black.jpg"
  ],
  "variantType": "color",
  "variants": [
    {
      "name": "Titanium Grey",
      "price": 5999,
      "orig": 11999,
      "image": "/images/stand.jpg",
      "hex": "#475569"
    },
    {
      "name": "Midnight Blue",
      "price": 6199,
      "orig": 11999,
      "image": "/images/charger-black.jpg",
      "hex": "#1e293b"
    }
  ],
  "offers": [
    {
      "title": "Clean Home Deal",
      "desc": "Save ₹6,000 on Eureka Forbes Stick Vac"
    },
    {
      "title": "No Cost EMI",
      "desc": "Starting ₹999/month on credit cards"
    }
  ],
  "highlights": [
    "Powerful 150W cyclonic brushless motor pulls dust, pet hair, and debris from floors",
    "2-in-1 versatility: quickly transforms from stick vacuum to handheld car cleaner",
    "Up to 45 minutes cordless runtime with high capacity rechargeable lithium battery",
    "Washable H13 grade HEPA filter captures 99.97% of fine dust and allergens",
    "Swivel steering and motorized LED floor head easily cleans under furniture"
  ],
  "specs": [
    {
      "label": "Motor Power",
      "val": "150W Cyclonic Brushless Suction"
    },
    {
      "label": "Battery Runtime",
      "val": "Up to 45 Minutes Cordless"
    },
    {
      "label": "Filter Type",
      "val": "Washable H13 Multi-Layer HEPA Filter"
    },
    {
      "label": "Dustbin Capacity",
      "val": "0.6 Litres One-Touch Emptying"
    },
    {
      "label": "Warranty",
      "val": "1 Year Eureka Forbes Brand Warranty"
    }
  ],
  "inTheBox": [
    "1x Eureka Forbes Cordless Vacuum Main Body",
    "1x Motorized LED Floor Cleaning Head",
    "1x Aluminum Extension Wand",
    "1x 2-in-1 Crevice & Dusting Tool",
    "1x Wall Mount Charging Station & Adapter",
    "1x User Manual & Warranty Card"
  ],
  "reviews": [
    {
      "author": "Priya Sen",
      "stars": "★★★★★",
      "date": "Verified 3 days ago",
      "comment": "So lightweight and handy! Cleans carpets, curtains, and car seats without any cords."
    }
  ]
},

  {
    "id": "skin-1",
    "name": "Himalaya Purifying Neem Face Wash for Pimple-Free Skin (150ml)",
    "shortName": "Himalaya Neem Face Wash",
    "brand": "Himalaya",
    "pack": "150ml Tube • Anti-Pimple",
    "category": "skincare-haircare",
    "tag": "FACE CARE",
    "price": 149,
    "originalPrice": 299,
    "discount": "50% OFF",
    "rating": 4.8,
    "ratingsCount": "82,400 Ratings",
    "reviewsCount": "12,900 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Soap-free herbal formulation with natural Neem and Turmeric extracts. Deeply cleanses excess oil, prevents recurring pimples and leaves skin fresh.",
    "image": "/images/deal-facewash.jpg",
    "images": [
      "/images/deal-facewash.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "150ml Tube",
        "price": 149,
        "orig": 299,
        "image": "/images/deal-facewash.jpg"
      },
      {
        "name": "300ml Pump Pack",
        "price": 269,
        "orig": 499,
        "image": "/images/deal-facewash.jpg"
      }
    ],
    "offers": [
      {
        "title": "Glow Saver",
        "desc": "Flat 50% off"
      }
    ],
    "highlights": [
      "Natural Neem antibacterial shield prevents acne and unclogs pores",
      "Turmeric acts as a natural antiseptic and soothing herbal toner",
      "100% soap-free formula won't dry or stretch your skin",
      "Suitable for all skin types, dermatologically tested"
    ],
    "specs": [
      {
        "label": "Volume",
        "val": "150 ml"
      },
      {
        "label": "Key Ingredients",
        "val": "Neem & Turmeric"
      },
      {
        "label": "Skin Type",
        "val": "Acne-Prone & All Skin"
      }
    ],
    "inTheBox": [
      "1x 150ml Face Wash Tube"
    ],
    "reviews": [
      {
        "author": "Pooja Hegde",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "The holy grail for clear pimple-free skin. Smells refreshing and clean."
      }
    ]
  },

  {
    "id": "skin-2",
    "name": "Set of 12 Korean Pastel Hair Claw Clips for Women & Girls",
    "shortName": "Korean Pastel Claw Clips (12-Pack)",
    "brand": "GlowVogue",
    "pack": "12 Clips Set • Non-Slip Grip",
    "category": "skincare-haircare",
    "tag": "HAIR ACCESSORIES",
    "price": 199,
    "originalPrice": 699,
    "discount": "71% OFF",
    "rating": 4.7,
    "ratingsCount": "29,100 Ratings",
    "reviewsCount": "4,300 Reviews",
    "badge": "Special offer",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Premium matte pastel finish hair claw clips with durable metal alloy springs. Non-slip teeth hold thick or fine hair securely all day long.",
    "image": "/images/deal-hairclips.jpg",
    "images": [
      "/images/deal-hairclips.jpg"
    ],
    "variantType": "pack",
    "variants": [
      {
        "name": "12-Piece Pastel Mix",
        "price": 199,
        "orig": 699,
        "image": "/images/deal-hairclips.jpg"
      }
    ],
    "offers": [
      {
        "title": "Hair Accessory Combo",
        "desc": "Save 71%"
      }
    ],
    "highlights": [
      "12 trending Korean pastel color shades (Blush, Sage, Lavender, Mocha)",
      "High strength interlocking non-slip teeth grip hair without pulling",
      "Rust-proof heavy duty metal torsion spring",
      "Smooth rounded edge acrylic won't damage or break hair strands"
    ],
    "specs": [
      {
        "label": "Quantity",
        "val": "12 Pieces"
      },
      {
        "label": "Material",
        "val": "Matte Acrylic & Metal Spring"
      },
      {
        "label": "Size",
        "val": "Medium & Large Assorted"
      }
    ],
    "inTheBox": [
      "12x Hair Claw Clips in Pastel Box"
    ],
    "reviews": [
      {
        "author": "Rhea Sen",
        "stars": "★★★★★",
        "date": "Verified 4 days ago",
        "comment": "Holds my thick wavy hair tightly all day with zero headache or slips."
      }
    ]
  },

  {
    "id": "skin-3",
    "name": "Bombay Shaving Company Charcoal Shaving & Grooming Kit for Men",
    "shortName": "Charcoal Shaving Grooming Kit",
    "brand": "Bombay Shaving Co.",
    "pack": "Foam + Balm + Scrub + Razor",
    "category": "skincare-haircare",
    "tag": "MEN GROOMING",
    "price": 499,
    "originalPrice": 1299,
    "discount": "61% OFF",
    "rating": 4.8,
    "ratingsCount": "35,400 Ratings",
    "reviewsCount": "5,700 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Activated bamboo charcoal shaving foam, post-shave cooling soothing balm, face scrub and precision razor for an ultra-smooth barbershop finish.",
    "image": "/images/deal-mencare.jpg",
    "images": [
      "/images/deal-mencare.jpg"
    ],
    "variantType": "pack",
    "variants": [
      {
        "name": "4-in-1 Complete Box",
        "price": 499,
        "orig": 1299,
        "image": "/images/deal-mencare.jpg"
      }
    ],
    "offers": [
      {
        "title": "Men Grooming Fest",
        "desc": "Flat 61% off"
      }
    ],
    "highlights": [
      "Activated bamboo charcoal draws out deep grime and skin toxins",
      "Moisturizing rich foam creates an effortless razor glide shield",
      "Alcohol-free post-shave balm soothes razor burn and redness",
      "Includes precision 3-blade razor cartridge"
    ],
    "specs": [
      {
        "label": "Items",
        "val": "4 Full Size Grooming Products"
      },
      {
        "label": "Skin Type",
        "val": "All Men Skin Types"
      }
    ],
    "inTheBox": [
      "1x Shaving Foam 200ml",
      "1x After Shave Balm 100g",
      "1x Face Scrub 100g",
      "1x Razor"
    ],
    "reviews": [
      {
        "author": "Harsh Vardhan",
        "stars": "★★★★★",
        "date": "Verified 3 days ago",
        "comment": "Amazing fragrance and zero cuts or razor bumps. Best gift set."
      }
    ]
  },

  {
    "id": "skin-4",
    "name": "Parachute Advansed Aloe Vera Enriched Coconut Hair Oil (300ml)",
    "shortName": "Parachute Aloe Coconut Hair Oil",
    "brand": "Parachute",
    "pack": "300ml Bottle • Silk & Shine",
    "category": "skincare-haircare",
    "tag": "HAIR CARE",
    "price": 165,
    "originalPrice": 330,
    "discount": "50% OFF",
    "rating": 4.8,
    "ratingsCount": "64,800 Ratings",
    "reviewsCount": "9,100 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Enriched with miracle Aloe Vera and 100% pure coconut oil. Non-sticky feather-light formula deeply nourishes hair to make it super soft and shiny.",
    "image": "/images/deal-hairoil.jpg",
    "images": [
      "/images/deal-hairoil.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "300ml Bottle",
        "price": 165,
        "orig": 330,
        "image": "/images/deal-hairoil.jpg"
      }
    ],
    "offers": [
      {
        "title": "Hair Care Deal",
        "desc": "Flat 50% off"
      }
    ],
    "highlights": [
      "Unique blend of pure coconut oil and soothing natural aloe vera",
      "Non-sticky featherlight formula can be worn daily without greasy residue",
      "Deeply penetrates 10 layers into hair roots to strengthen strands",
      "Leaves hair conditioned with a silky frizz-free mirror shine"
    ],
    "specs": [
      {
        "label": "Volume",
        "val": "300 ml"
      },
      {
        "label": "Ingredients",
        "val": "Coconut Oil & Aloe Vera"
      }
    ],
    "inTheBox": [
      "1x 300ml Hair Oil Bottle"
    ],
    "reviews": [
      {
        "author": "Divya Nambiar",
        "stars": "★★★★★",
        "date": "Verified 1 day ago",
        "comment": "Leaves hair so manageable and shiny. Smells wonderfully mild."
      }
    ]
  },

  {
    "id": "skin-5",
    "name": "Biotique Morning Nectar Flawless Skin Moisturizer (190ml)",
    "shortName": "Biotique Morning Nectar",
    "brand": "Biotique",
    "pack": "190ml Bottle • Ayurvedic",
    "category": "skincare-haircare",
    "tag": "SKINCARE",
    "price": 175,
    "originalPrice": 350,
    "discount": "50% OFF",
    "rating": 4.7,
    "ratingsCount": "38,200 Ratings",
    "reviewsCount": "5,400 Reviews",
    "badge": "Ayurvedic Glow",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Ayurvedic nectar recipe blending pure honey, wheatgerm and seaweed. Replenishes lost moisture and promotes radiant, luminous youthful skin.",
    "image": "/images/deal-facewash.jpg",
    "images": [
      "/images/deal-facewash.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "190ml Bottle",
        "price": 175,
        "orig": 350,
        "image": "/images/deal-facewash.jpg"
      }
    ],
    "offers": [
      {
        "title": "Ayurvedic Glow",
        "desc": "Flat 50% off"
      }
    ],
    "highlights": [
      "100% botanical extracts with zero parabens and chemicals",
      "Pure honey and wheatgerm oil nourish deeply for 24-hour hydration",
      "Absorbs instantly without greasy sheen",
      "Evens skin tone and restores natural radiance"
    ],
    "specs": [
      {
        "label": "Size",
        "val": "190 ml"
      },
      {
        "label": "Origin",
        "val": "Ayurvedic Botanical"
      }
    ],
    "inTheBox": [
      "1x 190ml Lotion Bottle"
    ],
    "reviews": [
      {
        "author": "Kavita M.",
        "stars": "★★★★★",
        "date": "Verified 5 days ago",
        "comment": "My skin drinks this up. Keeps flakiness away in air conditioning."
      }
    ]
  },

  {
    "id": "skin-6",
    "name": "Mamaearth Onion Hair Oil with Redensyl for Hair Fall Control (150ml)",
    "shortName": "Mamaearth Onion Hair Oil",
    "brand": "Mamaearth",
    "pack": "150ml with Applicator Comb",
    "category": "skincare-haircare",
    "tag": "HAIR GROWTH",
    "price": 249,
    "originalPrice": 499,
    "discount": "50% OFF",
    "rating": 4.6,
    "ratingsCount": "47,500 Ratings",
    "reviewsCount": "6,900 Reviews",
    "badge": "Hair Fall Hero",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Sulphur-rich Onion Oil and breakthrough Redensyl boost scalp circulation, reduce hair breakage and stimulate dormant hair follicles.",
    "image": "/images/deal-hairoil.jpg",
    "images": [
      "/images/deal-hairoil.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "150ml Comb Bottle",
        "price": 249,
        "orig": 499,
        "image": "/images/deal-hairoil.jpg"
      }
    ],
    "offers": [
      {
        "title": "Hair Growth Offer",
        "desc": "Flat 50% off"
      }
    ],
    "highlights": [
      "Rich in natural sulphur from fresh red onions to reduce thinning",
      "Redensyl increases hair density and accelerates regrowth",
      "Includes deep root comb applicator for direct scalp delivery",
      "Toxin-free, paraben-free and mineral oil free"
    ],
    "specs": [
      {
        "label": "Size",
        "val": "150 ml"
      },
      {
        "label": "Target",
        "val": "Hair Fall Reduction"
      }
    ],
    "inTheBox": [
      "1x 150ml Bottle with Comb Cap"
    ],
    "reviews": [
      {
        "author": "Gaurav S.",
        "stars": "★★★★★",
        "date": "Verified 1 week ago",
        "comment": "Noticed noticeably less hair fall in the shower after 3 weeks."
      }
    ]
  },

  {
    "id": "skin-7",
    "name": "Cetaphil Gentle Skin Cleanser for Sensitive & Dry Skin (250ml)",
    "shortName": "Cetaphil Gentle Cleanser",
    "brand": "Cetaphil",
    "pack": "250ml Dispenser Bottle",
    "category": "skincare-haircare",
    "tag": "DERMA ESSENTIAL",
    "price": 389,
    "originalPrice": 650,
    "discount": "40% OFF",
    "rating": 4.9,
    "ratingsCount": "74,000 Ratings",
    "reviewsCount": "11,800 Reviews",
    "badge": "Derm Recommended",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Dermatologist-recommended creamy formula with Niacinamide, Panthenol and Glycerin. Defends against 5 signs of skin sensitivity.",
    "image": "/images/deal-facewash.jpg",
    "images": [
      "/images/deal-facewash.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "250ml Pump",
        "price": 389,
        "orig": 650,
        "image": "/images/deal-facewash.jpg"
      }
    ],
    "offers": [
      {
        "title": "Derma Care Fest",
        "desc": "40% off"
      }
    ],
    "highlights": [
      "Clinically proven to provide continuous hydration for 48 hours",
      "Fragrance-free, soap-free and hypoallergenic formula",
      "Contains Provitamin B5 Panthenol and hydrating Glycerin",
      "#1 Dermatologist recommended cleanser globally"
    ],
    "specs": [
      {
        "label": "Volume",
        "val": "250 ml"
      },
      {
        "label": "pH",
        "val": "Balanced"
      }
    ],
    "inTheBox": [
      "1x 250ml Pump Bottle"
    ],
    "reviews": [
      {
        "author": "Dr. Shalini K.",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "The gold standard for anyone with irritation or sensitive skin."
      }
    ]
  },

  {
    "id": "skin-8",
    "name": "Nivea Soft Light Moisturizing Cream with Vitamin E & Jojoba (200ml)",
    "shortName": "Nivea Soft Light Cream",
    "brand": "Nivea",
    "pack": "200ml Tub • Quick Absorb",
    "category": "skincare-haircare",
    "tag": "ALL SEASON",
    "price": 199,
    "originalPrice": 399,
    "discount": "50% OFF",
    "rating": 4.8,
    "ratingsCount": "95,000 Ratings",
    "reviewsCount": "15,200 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Lightweight, non-greasy moisturizing cream enriched with Vitamin E and Jojoba Oil. Gives refreshed, supple skin in seconds.",
    "image": "/images/deal-mencare.jpg",
    "images": [
      "/images/deal-mencare.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "200ml Tub",
        "price": 199,
        "orig": 399,
        "image": "/images/deal-mencare.jpg"
      }
    ],
    "offers": [
      {
        "title": "Soft Skin Deal",
        "desc": "Save 50%"
      }
    ],
    "highlights": [
      "Infused with antioxidant Vitamin E and precious Jojoba Oil",
      "Instant melt-in texture leaves skin soft and baby smooth",
      "Suitable for face, body and hands in all seasons",
      "Dermatologically approved compatibility"
    ],
    "specs": [
      {
        "label": "Weight",
        "val": "200 ml"
      },
      {
        "label": "Form",
        "val": "Non-greasy Cream"
      }
    ],
    "inTheBox": [
      "1x 200ml Nivea Tub"
    ],
    "reviews": [
      {
        "author": "Sneha Roy",
        "stars": "★★★★★",
        "date": "Verified 4 days ago",
        "comment": "Can't live without this cream. Light, velvety and hydrating."
      }
    ]
  },

  {
    "id": "skin-9",
    "name": "Plum Green Tea Pore Cleansing Face Wash with Glycolic Acid (120ml)",
    "shortName": "Plum Green Tea Face Wash",
    "brand": "Plum",
    "pack": "120ml • Gentle Scrub Beads",
    "category": "skincare-haircare",
    "tag": "PORE DETOX",
    "price": 245,
    "originalPrice": 490,
    "discount": "50% OFF",
    "rating": 4.7,
    "ratingsCount": "31,200 Ratings",
    "reviewsCount": "4,900 Reviews",
    "badge": "100% Vegan",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Soap-free foaming gel with green tea antioxidants, glycolic acid and gentle cellulose beads to unclog pores and brighten dull acne-prone skin.",
    "image": "/images/deal-facewash.jpg",
    "images": [
      "/images/deal-facewash.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "120ml Tube",
        "price": 245,
        "orig": 490,
        "image": "/images/deal-facewash.jpg"
      }
    ],
    "offers": [
      {
        "title": "Vegan Beauty Fest",
        "desc": "Flat 50% Off"
      }
    ],
    "highlights": [
      "Green tea extracts fight acne-causing bacteria and free radicals",
      "Glycolic acid exfoliates dead cells to reveal brighter skin",
      "Biodegradable natural cellulose beads gently polish pores",
      "100% vegan, cruelty-free, no SLS or parabens"
    ],
    "specs": [
      {
        "label": "Size",
        "val": "120 ml"
      },
      {
        "label": "Key Actives",
        "val": "Green Tea & Glycolic Acid"
      }
    ],
    "inTheBox": [
      "1x 120ml Face Wash"
    ],
    "reviews": [
      {
        "author": "Aakanksha D.",
        "stars": "★★★★★",
        "date": "Verified 3 days ago",
        "comment": "Cleared my blackheads in 2 weeks. Refreshing fragrance."
      }
    ]
  },

  {
    "id": "skin-10",
    "name": "L'Oreal Paris Total Repair 5 Ceramide Shampoo & Conditioner Combo",
    "shortName": "L'Oreal Total Repair 5 Combo",
    "brand": "L'Oreal Paris",
    "pack": "Shampoo 340ml + Cond 175ml",
    "category": "skincare-haircare",
    "tag": "HAIR REPAIR",
    "price": 349,
    "originalPrice": 699,
    "discount": "50% OFF",
    "rating": 4.8,
    "ratingsCount": "58,100 Ratings",
    "reviewsCount": "8,300 Reviews",
    "badge": "50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Infused with Ceramide-Cement technology. Fights 5 signs of damaged hair: hair fall, dryness, roughness, dullness and split ends.",
    "image": "/images/deal-hairoil.jpg",
    "images": [
      "/images/deal-hairoil.jpg"
    ],
    "variantType": "pack",
    "variants": [
      {
        "name": "Shampoo + Conditioner Duo",
        "price": 349,
        "orig": 699,
        "image": "/images/deal-hairoil.jpg"
      }
    ],
    "offers": [
      {
        "title": "Salon Hair Combo",
        "desc": "Flat 50% Off"
      }
    ],
    "highlights": [
      "Fights 5 major visible hair damage problems simultaneously",
      "Ceramide complex binds to damaged fibers and rebuilds cuticle layer",
      "Restores natural shine, silky bounce and elasticity",
      "Salon-grade fragrance that lingers for up to 48 hours"
    ],
    "specs": [
      {
        "label": "Quantity",
        "val": "340ml + 175ml"
      },
      {
        "label": "Hair Type",
        "val": "Damaged & Dry"
      }
    ],
    "inTheBox": [
      "1x 340ml Shampoo",
      "1x 175ml Conditioner"
    ],
    "reviews": [
      {
        "author": "Pallavi B.",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "Makes frizzy hair behave like you just stepped out of a salon!"
      }
    ]
  },

  {
    "id": "skin-11",
    "name": "Dot & Key Watermelon Cooling Sunscreen SPF 50+ PA++++ (80g)",
    "shortName": "Dot & Key Watermelon Sunscreen",
    "brand": "Dot & Key",
    "pack": "80g Tube • Zero White Cast",
    "category": "skincare-haircare",
    "tag": "SUN PROTECTION",
    "price": 325,
    "originalPrice": 595,
    "discount": "45% OFF",
    "rating": 4.8,
    "ratingsCount": "41,000 Ratings",
    "reviewsCount": "6,200 Reviews",
    "badge": "Zero White Cast",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Lightweight fluid sunscreen with Watermelon extracts & Hyaluronic Acid. Delivers broad spectrum UVA & UVB protection with instant cooling finish.",
    "image": "/images/deal-lipsticks.jpg",
    "images": [
      "/images/deal-lipsticks.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "80g Large Tube",
        "price": 325,
        "orig": 595,
        "image": "/images/deal-lipsticks.jpg"
      }
    ],
    "offers": [
      {
        "title": "Sun Care Fest",
        "desc": "Save 45%"
      }
    ],
    "highlights": [
      "Broad Spectrum SPF 50+ with maximum PA++++ rating",
      "100% lightweight fluid texture with zero white cast or stickiness",
      "Hyaluronic acid and watermelon juice provide instant cooling surge",
      "Non-comedogenic, sweat-proof and great under makeup"
    ],
    "specs": [
      {
        "label": "SPF",
        "val": "50+ PA++++"
      },
      {
        "label": "Weight",
        "val": "80 g"
      }
    ],
    "inTheBox": [
      "1x 80g Sunscreen Tube"
    ],
    "reviews": [
      {
        "author": "Ishita Ray",
        "stars": "★★★★★",
        "date": "Verified yesterday",
        "comment": "Literally vanishes into skin without a single trace of white cast!"
      }
    ]
  },

  {
    "id": "skin-12",
    "name": "Minimalist 10% Niacinamide Face Serum with Zinc for Blemishes (30ml)",
    "shortName": "Minimalist 10% Niacinamide",
    "brand": "Minimalist",
    "pack": "30ml Dropper • Pure Actives",
    "category": "skincare-haircare",
    "tag": "DERMA SERUM",
    "price": 499,
    "originalPrice": 699,
    "discount": "29% OFF",
    "rating": 4.9,
    "ratingsCount": "62,300 Ratings",
    "reviewsCount": "10,400 Reviews",
    "badge": "Best Seller",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Pure 10% Niacinamide (Vitamin B3) paired with 1% Zinc PCA. Fades dark spots, controls sebum production and strengthens the skin barrier.",
    "image": "/images/deal-facewash.jpg",
    "images": [
      "/images/deal-facewash.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "30ml Glass Dropper",
        "price": 499,
        "orig": 699,
        "image": "/images/deal-facewash.jpg"
      }
    ],
    "offers": [
      {
        "title": "Clean Science",
        "desc": "Special Deal"
      }
    ],
    "highlights": [
      "10% high-grade pure Vitamin B3 Niacinamide clinically proven to reduce acne marks",
      "Zinc PCA regulates oil gland activity and reduces redness",
      "Aloe vera juice base enhances hydration and soothing",
      "Fragrance-free, silicone-free, non-comedogenic"
    ],
    "specs": [
      {
        "label": "Active",
        "val": "10% Niacinamide + 1% Zinc"
      },
      {
        "label": "Volume",
        "val": "30 ml"
      }
    ],
    "inTheBox": [
      "1x 30ml Amber Glass Dropper Bottle"
    ],
    "reviews": [
      {
        "author": "Nikhil B.",
        "stars": "★★★★★",
        "date": "Verified 3 days ago",
        "comment": "Faded my stubborn post-acne dark marks in just 4 weeks."
      }
    ]
  },

  {
    "id": "skin-13",
    "name": "mCaffeine Naked & Raw Arabica Coffee Face Scrub for Tan Removal (100g)",
    "shortName": "mCaffeine Coffee Face Scrub",
    "brand": "mCaffeine",
    "pack": "100g Tub • Walnut & Coffee",
    "category": "skincare-haircare",
    "tag": "EXFOLIATOR",
    "price": 249,
    "originalPrice": 499,
    "discount": "50% OFF",
    "rating": 4.7,
    "ratingsCount": "39,000 Ratings",
    "reviewsCount": "5,800 Reviews",
    "badge": "Tan Removal",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Pure Arabica Coffee granules and natural walnut shell powder scrub away dead skin and sun tan, while Vitamin E leaves skin baby soft.",
    "image": "/images/deal-facewash.jpg",
    "images": [
      "/images/deal-facewash.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "100g Jar",
        "price": 249,
        "orig": 499,
        "image": "/images/deal-facewash.jpg"
      }
    ],
    "offers": [
      {
        "title": "Coffee Glow Deal",
        "desc": "Flat 50% off"
      }
    ],
    "highlights": [
      "Pure Arabica coffee particles gently buff away blackheads and dead cells",
      "Caffeine boosts microcirculation to bring an instant fresh glow",
      "Provitamin B5 and Argan Oil nourish skin and prevent dryness",
      "Smells like a freshly brewed heavenly cappuccino"
    ],
    "specs": [
      {
        "label": "Weight",
        "val": "100 g"
      },
      {
        "label": "Skin Type",
        "val": "Oily, Normal & Combination"
      }
    ],
    "inTheBox": [
      "1x 100g Coffee Scrub Jar"
    ],
    "reviews": [
      {
        "author": "Pooja V.",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "Removes sun tan immediately and smells completely addictive!"
      }
    ]
  },

  {
    "id": "skin-14",
    "name": "Garnier SkinActive All-in-1 Micellar Cleansing Water (400ml)",
    "shortName": "Garnier Micellar Water 400ml",
    "brand": "Garnier",
    "pack": "400ml • 200 Uses",
    "category": "skincare-haircare",
    "tag": "MAKEUP REMOVER",
    "price": 249,
    "originalPrice": 499,
    "discount": "50% OFF",
    "rating": 4.8,
    "ratingsCount": "53,200 Ratings",
    "reviewsCount": "7,900 Reviews",
    "badge": "Gentle Clean",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Micelle cleansing molecules lift off waterproof makeup, oil and city pollution in a single wipe without harsh rubbing or rinsing.",
    "image": "/images/deal-facewash.jpg",
    "images": [
      "/images/deal-facewash.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "400ml Big Bottle",
        "price": 249,
        "orig": 499,
        "image": "/images/deal-facewash.jpg"
      }
    ],
    "offers": [
      {
        "title": "Cleansing Offer",
        "desc": "Flat 50% off"
      }
    ],
    "highlights": [
      "Micelles capture dirt and makeup like a magnet without harsh scrubbing",
      "Gentle formula requires zero rinsing with water",
      "Alcohol-free and fragrance-free for eyes and lips",
      "Gives up to 200 soothing makeup cleanses per bottle"
    ],
    "specs": [
      {
        "label": "Volume",
        "val": "400 ml"
      },
      {
        "label": "Formula",
        "val": "Alcohol-Free"
      }
    ],
    "inTheBox": [
      "1x 400ml Micellar Bottle"
    ],
    "reviews": [
      {
        "author": "Kritika S.",
        "stars": "★★★★★",
        "date": "Verified 4 days ago",
        "comment": "Removes stubborn waterproof mascara without any eye burning."
      }
    ]
  },

  {
    "id": "skin-15",
    "name": "The Derma Co 1% Salicylic Acid Gel Face Wash for Active Acne (100ml)",
    "shortName": "Derma Co Salicylic Wash",
    "brand": "The Derma Co",
    "pack": "100ml • Salicylic + Witch Hazel",
    "category": "skincare-haircare",
    "tag": "ACNE CONTROL",
    "price": 199,
    "originalPrice": 399,
    "discount": "50% OFF",
    "rating": 4.7,
    "ratingsCount": "28,600 Ratings",
    "reviewsCount": "3,900 Reviews",
    "badge": "50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Formulated with 1% Salicylic Acid and natural Witch Hazel to dissolve oil and unclog deep pores, controlling active breakout clusters.",
    "image": "/images/deal-facewash.jpg",
    "images": [
      "/images/deal-facewash.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "100ml Tube",
        "price": 199,
        "orig": 399,
        "image": "/images/deal-facewash.jpg"
      }
    ],
    "offers": [
      {
        "title": "Acne Defense",
        "desc": "Flat 50% discount"
      }
    ],
    "highlights": [
      "1% BHA Salicylic Acid penetrates deep inside oily pores to clear blackheads",
      "Witch Hazel calms inflammation and tightens enlarged pores",
      "Non-drying gel texture maintains the skin's moisture barrier",
      "Dermatologically tested for active acne treatment"
    ],
    "specs": [
      {
        "label": "Volume",
        "val": "100 ml"
      },
      {
        "label": "Active",
        "val": "1% Salicylic Acid"
      }
    ],
    "inTheBox": [
      "1x 100ml Face Wash Tube"
    ],
    "reviews": [
      {
        "author": "Sameer K.",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "Calmed down my breakout within 3 days. Very effective cleanser."
      }
    ]
  },

  {
    "id": "fashion-1",
    "name": "Red Tape Classic Lightweight White Low-Top Fashion Sneakers",
    "shortName": "Red Tape White Sneakers",
    "brand": "Red Tape",
    "pack": "Memory Foam Insole • Anti-Slip",
    "category": "fashion-deals",
    "tag": "SNEAKERS",
    "price": 1299,
    "originalPrice": 5599,
    "discount": "77% OFF",
    "rating": 4.7,
    "ratingsCount": "43,800 Ratings",
    "reviewsCount": "6,200 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Premium PU upper with perforated breathable toe-box, memory foam cushioned footbed, and flexible TPR anti-skid street sole.",
    "image": "/images/deal-sneakers.jpg",
    "images": [
      "/images/deal-sneakers.jpg",
      "/images/deal-shoes.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "UK 7",
        "price": 1299,
        "orig": 5599,
        "image": "/images/deal-sneakers.jpg"
      },
      {
        "name": "UK 8",
        "price": 1299,
        "orig": 5599,
        "image": "/images/deal-sneakers.jpg"
      },
      {
        "name": "UK 9",
        "price": 1299,
        "orig": 5599,
        "image": "/images/deal-sneakers.jpg"
      },
      {
        "name": "UK 10",
        "price": 1299,
        "orig": 5599,
        "image": "/images/deal-sneakers.jpg"
      }
    ],
    "offers": [
      {
        "title": "Footwear Frenzy",
        "desc": "Flat 77% Off"
      }
    ],
    "highlights": [
      "Crisp clean minimalist white silhouette pairs with denim, chinos and shorts",
      "Thick memory foam insole provides cloud-like all-day cushioning",
      "Reinforced double stitching along stress points for lasting durability",
      "High-grip vulcanized TPR outsole prevents slipping on smooth tiles"
    ],
    "specs": [
      {
        "label": "Outer Material",
        "val": "Premium Synthetic PU"
      },
      {
        "label": "Sole",
        "val": "TPR Grip"
      }
    ],
    "inTheBox": [
      "1x Pair of White Sneakers",
      "Extra Laces"
    ],
    "reviews": [
      {
        "author": "Aman Gupta",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "Unbeatable look for ₹1,299! Looks just like ₹10k designer kicks."
      }
    ]
  },

  {
    "id": "fashion-2",
    "name": "Libas Floral Print Cotton Anarkali Kurta with Palazzos & Dupatta",
    "shortName": "Libas Cotton Anarkali Set",
    "brand": "Libas",
    "pack": "3-Piece Festive Set • Pure Cotton",
    "category": "fashion-deals",
    "tag": "ETHNIC WEAR",
    "price": 1399,
    "originalPrice": 4499,
    "discount": "69% OFF",
    "rating": 4.8,
    "ratingsCount": "38,900 Ratings",
    "reviewsCount": "5,400 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Pure 100% breathable cotton floral Anarkali kurta with gota-patti border, flared palazzo pants and sheer matching organza dupatta.",
    "image": "/images/deal-anarkali.jpg",
    "images": [
      "/images/deal-anarkali.jpg",
      "/images/deal-saree.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "Size M (38)",
        "price": 1399,
        "orig": 4499,
        "image": "/images/deal-anarkali.jpg"
      },
      {
        "name": "Size L (40)",
        "price": 1399,
        "orig": 4499,
        "image": "/images/deal-anarkali.jpg"
      },
      {
        "name": "Size XL (42)",
        "price": 1399,
        "orig": 4499,
        "image": "/images/deal-anarkali.jpg"
      }
    ],
    "offers": [
      {
        "title": "Festive Ethnic Offer",
        "desc": "Save 69%"
      }
    ],
    "highlights": [
      "100% pure premium cotton with vibrant botanical floral prints",
      "Flared Anarkali silhouette with ornate gota lace on yoke and hem",
      "Comfortable elasticated waistband palazzo trousers with side pocket",
      "Lightweight soft mulmul dupatta with tassel accents"
    ],
    "specs": [
      {
        "label": "Fabric",
        "val": "100% Pure Cotton"
      },
      {
        "label": "Pattern",
        "val": "Floral Anarkali Flare"
      }
    ],
    "inTheBox": [
      "1x Kurta",
      "1x Palazzo",
      "1x Dupatta"
    ],
    "reviews": [
      {
        "author": "Meenakshi K.",
        "stars": "★★★★★",
        "date": "Verified 3 days ago",
        "comment": "Stunning flare! The cotton is so soft and comfortable for poojas and functions."
      }
    ]
  },

  {
    "id": "fashion-3",
    "name": "Asian Bullet-02 High Grip Breathable Sports Running Shoes",
    "shortName": "Asian Bullet-02 Running Shoes",
    "brand": "Asian",
    "pack": "Air Mesh Upper • EVA Midsole",
    "category": "fashion-deals",
    "tag": "SPORTS SHOES",
    "price": 799,
    "originalPrice": 1999,
    "discount": "60% OFF",
    "rating": 4.6,
    "ratingsCount": "52,400 Ratings",
    "reviewsCount": "7,100 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Ultra-breathable 3D jacquard mesh, shock-absorbing EVA phylon midsole, padded heel collar and non-marking rubber outsole for gym & running.",
    "image": "/images/deal-running.jpg",
    "images": [
      "/images/deal-running.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "UK 7",
        "price": 799,
        "orig": 1999,
        "image": "/images/deal-running.jpg"
      },
      {
        "name": "UK 8",
        "price": 799,
        "orig": 1999,
        "image": "/images/deal-running.jpg"
      },
      {
        "name": "UK 9",
        "price": 799,
        "orig": 1999,
        "image": "/images/deal-running.jpg"
      }
    ],
    "offers": [
      {
        "title": "Run Fest",
        "desc": "Flat 60% discount"
      }
    ],
    "highlights": [
      "Engineered breathable air mesh keeps feet sweat-free during long runs",
      "Cushioned EVA phylon midsole absorbs heel strike impact",
      "Padded collar and tongue provide snug ankle lockdown",
      "Super lightweight at just 220g per shoe"
    ],
    "specs": [
      {
        "label": "Weight",
        "val": "220g (Lightweight)"
      },
      {
        "label": "Closure",
        "val": "Lace-Up"
      }
    ],
    "inTheBox": [
      "1x Pair of Sports Shoes"
    ],
    "reviews": [
      {
        "author": "Pradeep S.",
        "stars": "★★★★★",
        "date": "Verified 4 days ago",
        "comment": "Great running shoes for the price. Excellent shock absorption."
      }
    ]
  },

  {
    "id": "fashion-4",
    "name": "Berrylush Flared Emerald Evening Maxi Party Gown Dress",
    "shortName": "Berrylush Emerald Party Gown",
    "brand": "Berrylush",
    "pack": "Crepe Silk Blend • Fit & Flare",
    "category": "fashion-deals",
    "tag": "PARTY WEAR",
    "price": 999,
    "originalPrice": 2499,
    "discount": "60% OFF",
    "rating": 4.7,
    "ratingsCount": "22,800 Ratings",
    "reviewsCount": "3,600 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "V-neckline flared maxi gown with gathered empire waist, flared ruffle hem and concealed back zip. Perfect for cocktail parties and evening events.",
    "image": "/images/deal-gown.jpg",
    "images": [
      "/images/deal-gown.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "Size S",
        "price": 999,
        "orig": 2499,
        "image": "/images/deal-gown.jpg"
      },
      {
        "name": "Size M",
        "price": 999,
        "orig": 2499,
        "image": "/images/deal-gown.jpg"
      },
      {
        "name": "Size L",
        "price": 999,
        "orig": 2499,
        "image": "/images/deal-gown.jpg"
      }
    ],
    "offers": [
      {
        "title": "Evening Glamour",
        "desc": "Flat 60% Off"
      }
    ],
    "highlights": [
      "Rich jewel tone emerald green crepe fabric with graceful drape",
      "Flattering V-neckline with structured empire waistband",
      "Concealed back zip closure for a sleek tailored fit",
      "Flowing floor-length flare with ruffle hem accents"
    ],
    "specs": [
      {
        "label": "Length",
        "val": "Maxi Floor Length"
      },
      {
        "label": "Fabric",
        "val": "Poly Crepe"
      }
    ],
    "inTheBox": [
      "1x Maxi Gown Dress"
    ],
    "reviews": [
      {
        "author": "Natasha Roy",
        "stars": "★★★★★",
        "date": "Verified 3 days ago",
        "comment": "Got so many compliments at my friend's reception! The fabric drapes gorgeously."
      }
    ]
  },

  {
    "id": "fashion-5",
    "name": "Siril Georgette Poly Silk Embroidered Festive Saree with Blouse Piece",
    "shortName": "Siril Embroidered Festive Saree",
    "brand": "Siril",
    "pack": "5.5M Saree + 0.8M Blouse",
    "category": "fashion-deals",
    "tag": "SAREES",
    "price": 849,
    "originalPrice": 2899,
    "discount": "71% OFF",
    "rating": 4.7,
    "ratingsCount": "31,400 Ratings",
    "reviewsCount": "4,200 Reviews",
    "badge": "Festive Pick",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Lightweight poly georgette saree with floral zari embroidery border, matching pallu work and unstitched brocade blouse piece.",
    "image": "/images/deal-saree.jpg",
    "images": [
      "/images/deal-saree.jpg"
    ],
    "variantType": "color",
    "variants": [
      {
        "name": "Crimson Red",
        "price": 849,
        "orig": 2899,
        "image": "/images/deal-saree.jpg"
      }
    ],
    "offers": [
      {
        "title": "Festive Saree Sale",
        "desc": "Flat 71% off"
      }
    ],
    "highlights": [
      "Graceful lightweight georgette pleats easily and stays in place",
      "Intricate zari and thread embroidered border with scalloped edging",
      "Comes with 0.8 meter matching unstitched blouse fabric",
      "Ideal for weddings, festivals and family gatherings"
    ],
    "specs": [
      {
        "label": "Length",
        "val": "5.5 Meters"
      },
      {
        "label": "Blouse",
        "val": "0.8 Meter Unstitched"
      }
    ],
    "inTheBox": [
      "1x Saree",
      "1x Blouse Piece"
    ],
    "reviews": [
      {
        "author": "Lakshmi Iyer",
        "stars": "★★★★★",
        "date": "Verified 5 days ago",
        "comment": "The border embroidery is very neat and looks like a ₹4,000 boutique piece."
      }
    ]
  },

  {
    "id": "fashion-6",
    "name": "Woodland Rugged Genuine Suede Leather Slip-On Outdoor Loafers",
    "shortName": "Woodland Suede Leather Loafers",
    "brand": "Woodland",
    "pack": "Hand-Stitched • High Grip",
    "category": "fashion-deals",
    "tag": "LEATHER SHOES",
    "price": 1999,
    "originalPrice": 4295,
    "discount": "53% OFF",
    "rating": 4.8,
    "ratingsCount": "26,800 Ratings",
    "reviewsCount": "3,700 Reviews",
    "badge": "Genuine Leather",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Handcrafted from genuine oiled nubuck suede leather with heavy lugged rubber sole. Rugged comfort for city walks and outdoor trails.",
    "image": "/images/deal-shoes.jpg",
    "images": [
      "/images/deal-shoes.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "UK 7",
        "price": 1999,
        "orig": 4295,
        "image": "/images/deal-shoes.jpg"
      },
      {
        "name": "UK 8",
        "price": 1999,
        "orig": 4295,
        "image": "/images/deal-shoes.jpg"
      },
      {
        "name": "UK 9",
        "price": 1999,
        "orig": 4295,
        "image": "/images/deal-shoes.jpg"
      }
    ],
    "offers": [
      {
        "title": "Leather Fest",
        "desc": "Save 53%"
      }
    ],
    "highlights": [
      "100% genuine oiled suede leather upper with hand-stitched moc-toe",
      "Signature deep-tread Woodland rubber outsole for maximum traction",
      "Padded leather insole molds to your foot arch over time",
      "Classic rustic outdoor casual design"
    ],
    "specs": [
      {
        "label": "Material",
        "val": "100% Genuine Nubuck Leather"
      },
      {
        "label": "Sole",
        "val": "Lugged Rubber"
      }
    ],
    "inTheBox": [
      "1x Pair of Leather Shoes"
    ],
    "reviews": [
      {
        "author": "Rajesh Menon",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "Built like a tank. Genuine leather and super durable sole."
      }
    ]
  },

  {
    "id": "fashion-7",
    "name": "Titan Neo Quartz Minimalist Black Dial Leather Strap Watch",
    "shortName": "Titan Neo Minimalist Watch",
    "brand": "Titan",
    "pack": "Genuine Leather • 50M Water Resist",
    "category": "fashion-deals",
    "tag": "WATCHES",
    "price": 1899,
    "originalPrice": 3795,
    "discount": "50% OFF",
    "rating": 4.9,
    "ratingsCount": "48,200 Ratings",
    "reviewsCount": "6,800 Reviews",
    "badge": "50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Classic slim stainless steel case, minimalist jet black dial with sleek indices, mineral glass crystal and genuine textured black leather strap.",
    "image": "/images/deal-watch.jpg",
    "images": [
      "/images/deal-watch.jpg"
    ],
    "variantType": "color",
    "variants": [
      {
        "name": "Black on Black",
        "price": 1899,
        "orig": 3795,
        "image": "/images/deal-watch.jpg"
      }
    ],
    "offers": [
      {
        "title": "Titan Watch Deal",
        "desc": "Flat 50% off"
      }
    ],
    "highlights": [
      "Precision Japanese quartz movement with 2-year warranty",
      "Scratch-resistant mineral crystal glass face",
      "50 meters water resistance (5 ATM)",
      "Premium genuine leather strap with stainless steel buckle"
    ],
    "specs": [
      {
        "label": "Movement",
        "val": "Quartz"
      },
      {
        "label": "Water Resistance",
        "val": "50 Meters (5 ATM)"
      }
    ],
    "inTheBox": [
      "1x Titan Watch in Gift Box",
      "Warranty Card"
    ],
    "reviews": [
      {
        "author": "Arjun Pillai",
        "stars": "★★★★★",
        "date": "Verified yesterday",
        "comment": "Classic elegance. Perfect for corporate wear and casual outings."
      }
    ]
  },

  {
    "id": "fashion-8",
    "name": "Symbol Men Regular Fit 100% Combed Cotton Pique Polo T-Shirt",
    "shortName": "Symbol Cotton Polo T-Shirt",
    "brand": "Symbol",
    "pack": "100% Cotton • Breathable Pique",
    "category": "fashion-deals",
    "tag": "MENSWEAR",
    "price": 449,
    "originalPrice": 1199,
    "discount": "63% OFF",
    "rating": 4.7,
    "ratingsCount": "61,000 Ratings",
    "reviewsCount": "8,200 Reviews",
    "badge": "Best Seller",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "100% combed cotton pique fabric, classic ribbed collar with 2-button placket, short sleeves with ribbed cuffs and side vents.",
    "image": "/images/deal-apparel.jpg",
    "images": [
      "/images/deal-apparel.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "Size M",
        "price": 449,
        "orig": 1199,
        "image": "/images/deal-apparel.jpg"
      },
      {
        "name": "Size L",
        "price": 449,
        "orig": 1199,
        "image": "/images/deal-apparel.jpg"
      },
      {
        "name": "Size XL",
        "price": 449,
        "orig": 1199,
        "image": "/images/deal-apparel.jpg"
      }
    ],
    "offers": [
      {
        "title": "Casual Wear Offer",
        "desc": "Save 63%"
      }
    ],
    "highlights": [
      "Heavyweight 220 GSM breathable combed cotton pique knit",
      "Pre-shrunk and bio-washed for ultra-soft hand feel and color retention",
      "Ribbed collar and cuffs maintain shape after repeated machine washes",
      "Side slits for easy movement"
    ],
    "specs": [
      {
        "label": "Material",
        "val": "100% Combed Cotton Pique"
      },
      {
        "label": "Fit",
        "val": "Regular"
      }
    ],
    "inTheBox": [
      "1x Cotton Polo T-Shirt"
    ],
    "reviews": [
      {
        "author": "Siddharth C.",
        "stars": "★★★★★",
        "date": "Verified 3 days ago",
        "comment": "Great fitting polo shirt. The collar stays crisp and fabric doesn't shrink."
      }
    ]
  },

  {
    "id": "fashion-9",
    "name": "Levi's 511 Slim Fit Mid-Rise Stretch Indigo Denim Jeans",
    "shortName": "Levi's 511 Slim Fit Jeans",
    "brand": "Levi's",
    "pack": "Stretch Cotton • 5 Pockets",
    "category": "fashion-deals",
    "tag": "DENIM",
    "price": 1799,
    "originalPrice": 3999,
    "discount": "55% OFF",
    "rating": 4.8,
    "ratingsCount": "54,000 Ratings",
    "reviewsCount": "7,800 Reviews",
    "badge": "Original Denim",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Iconic Levi's 511 slim fit cut through hip and thigh with a slim leg opening. Premium stretch denim with iconic arcuate back pocket stitching.",
    "image": "/images/cat-fashion.jpg",
    "images": [
      "/images/cat-fashion.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "30 Waist",
        "price": 1799,
        "orig": 3999,
        "image": "/images/cat-fashion.jpg"
      },
      {
        "name": "32 Waist",
        "price": 1799,
        "orig": 3999,
        "image": "/images/cat-fashion.jpg"
      },
      {
        "name": "34 Waist",
        "price": 1799,
        "orig": 3999,
        "image": "/images/cat-fashion.jpg"
      }
    ],
    "offers": [
      {
        "title": "Denim Days",
        "desc": "Flat 55% Off"
      }
    ],
    "highlights": [
      "Authentic Levi's 511 modern slim fit silhouette with built-in stretch",
      "Durable 12.5 oz ring-spun cotton denim with dark enzyme wash",
      "Copper rivets on stress points and signature red tab",
      "Zip fly with branded metal shank button closure"
    ],
    "specs": [
      {
        "label": "Fit",
        "val": "Slim Fit (511)"
      },
      {
        "label": "Fabric",
        "val": "99% Cotton, 1% Elastane"
      }
    ],
    "inTheBox": [
      "1x Pair of Levi's Jeans"
    ],
    "reviews": [
      {
        "author": "Rohit Bajaj",
        "stars": "★★★★★",
        "date": "Verified 4 days ago",
        "comment": "Perfect stretch and classic dark wash. 100% genuine Levi's."
      }
    ]
  },

  {
    "id": "fashion-10",
    "name": "Lavie Women Faux Leather Structured Top Handle Handbag with Sling",
    "shortName": "Lavie Structured Handbag",
    "brand": "Lavie",
    "pack": "Dual Handles + Detachable Sling",
    "category": "fashion-deals",
    "tag": "HANDBAGS",
    "price": 1199,
    "originalPrice": 3990,
    "discount": "70% OFF",
    "rating": 4.7,
    "ratingsCount": "29,400 Ratings",
    "reviewsCount": "3,800 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Structured silhouette in scratch-resistant textured vegan leather, multi-compartment interior with zippered pockets and adjustable shoulder strap.",
    "image": "/images/deal-garmentbox.jpg",
    "images": [
      "/images/deal-garmentbox.jpg"
    ],
    "variantType": "color",
    "variants": [
      {
        "name": "Mocha Brown",
        "price": 1199,
        "orig": 3990,
        "image": "/images/deal-garmentbox.jpg"
      }
    ],
    "offers": [
      {
        "title": "Bags & Accessories",
        "desc": "Flat 70% off"
      }
    ],
    "highlights": [
      "Structured boxy silhouette keeps its crisp shape empty or full",
      "Triple interior compartments with zip partitions for laptop & makeup",
      "Reinforced dual carry handles plus long adjustable crossbody strap",
      "Gold-tone high quality metallic hardware and logo plaque"
    ],
    "specs": [
      {
        "label": "Material",
        "val": "Premium PU Leather"
      },
      {
        "label": "Compartments",
        "val": "3 Zip Sections"
      }
    ],
    "inTheBox": [
      "1x Handbag",
      "1x Detachable Sling Strap"
    ],
    "reviews": [
      {
        "author": "Monika Sharma",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "So spacious and looks very luxurious with formal office outfits."
      }
    ]
  },

  {
    "id": "fashion-11",
    "name": "Puma Unisex Smashic Low-Boot Leather Everyday Sneakers",
    "shortName": "Puma Smashic Low-Boot",
    "brand": "Puma",
    "pack": "SoftFoam+ Sockliner",
    "category": "fashion-deals",
    "tag": "SNEAKERS",
    "price": 1799,
    "originalPrice": 4499,
    "discount": "60% OFF",
    "rating": 4.8,
    "ratingsCount": "37,600 Ratings",
    "reviewsCount": "4,900 Reviews",
    "badge": "Sportstyle",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Tennis-inspired leather low boot with Puma Formstrip, cushioned SoftFoam+ comfort insert and vulcanized cupsole for timeless everyday casual style.",
    "image": "/images/deal-sneakers.jpg",
    "images": [
      "/images/deal-sneakers.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "UK 7",
        "price": 1799,
        "orig": 4499,
        "image": "/images/deal-sneakers.jpg"
      },
      {
        "name": "UK 8",
        "price": 1799,
        "orig": 4499,
        "image": "/images/deal-sneakers.jpg"
      },
      {
        "name": "UK 9",
        "price": 1799,
        "orig": 4499,
        "image": "/images/deal-sneakers.jpg"
      }
    ],
    "offers": [
      {
        "title": "Puma Brand Day",
        "desc": "Flat 60% Off"
      }
    ],
    "highlights": [
      "SoftFoam+ comfort insert provides step-in cushioning with extra thick heel",
      "Clean leather upper with iconic side Formstrip branding",
      "Durable rubber cupsole ensures steady grip and pavement traction",
      "Unisex low-profile silhouette pairs with any outfit"
    ],
    "specs": [
      {
        "label": "Sole",
        "val": "Rubber Cupsole"
      },
      {
        "label": "Sockliner",
        "val": "SoftFoam+"
      }
    ],
    "inTheBox": [
      "1x Pair of Puma Sneakers"
    ],
    "reviews": [
      {
        "author": "Farhan A.",
        "stars": "★★★★★",
        "date": "Verified 1 week ago",
        "comment": "SoftFoam is genuinely like walking on cushions. Very happy with purchase."
      }
    ]
  },

  {
    "id": "fashion-12",
    "name": "Biba Embroidered Straight Cotton Silk Kurti with Flared Palazzos",
    "shortName": "Biba Cotton Silk Kurti Set",
    "brand": "Biba",
    "pack": "2-Piece Set • Silk Chanderi",
    "category": "fashion-deals",
    "tag": "ETHNIC FASHION",
    "price": 1499,
    "originalPrice": 3999,
    "discount": "62% OFF",
    "rating": 4.8,
    "ratingsCount": "27,200 Ratings",
    "reviewsCount": "3,500 Reviews",
    "badge": "Designer Ethnic",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Chanderi cotton silk straight-cut kurti with thread embroidery on yoke, paired with matching flared palazzo pants for festive elegance.",
    "image": "/images/deal-anarkali.jpg",
    "images": [
      "/images/deal-anarkali.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "Size M (38)",
        "price": 1499,
        "orig": 3999,
        "image": "/images/deal-anarkali.jpg"
      },
      {
        "name": "Size L (40)",
        "price": 1499,
        "orig": 3999,
        "image": "/images/deal-anarkali.jpg"
      }
    ],
    "offers": [
      {
        "title": "Biba Festive Sale",
        "desc": "Save 62%"
      }
    ],
    "highlights": [
      "Rich Chanderi cotton silk with subtle golden sheen",
      "Handcrafted thread embroidery along neckline and cuffs",
      "Flared breathable palazzo with elasticated drawstrings",
      "Lined with soft butter crepe for all-day comfort"
    ],
    "specs": [
      {
        "label": "Fabric",
        "val": "Chanderi Cotton Silk"
      },
      {
        "label": "Fit",
        "val": "Straight Kurti"
      }
    ],
    "inTheBox": [
      "1x Kurti",
      "1x Palazzo"
    ],
    "reviews": [
      {
        "author": "Ritu Singhal",
        "stars": "★★★★★",
        "date": "Verified 3 days ago",
        "comment": "Biba quality never disappoints. The thread embroidery is exquisite."
      }
    ]
  },

  {
    "id": "fashion-13",
    "name": "Wildcraft 35L Water Resistant Multi-Compartment Laptop Backpack",
    "shortName": "Wildcraft 35L Backpack",
    "brand": "Wildcraft",
    "pack": "Fits 15.6\" Laptop • Rain Guard",
    "category": "fashion-deals",
    "tag": "TRAVEL GEAR",
    "price": 1199,
    "originalPrice": 2899,
    "discount": "58% OFF",
    "rating": 4.8,
    "ratingsCount": "46,000 Ratings",
    "reviewsCount": "6,500 Reviews",
    "badge": "Tough Built",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Triple-compartment 35L capacity backpack with padded 15.6-inch laptop sleeve, ergonomically contoured shoulder straps and integrated rain cover.",
    "image": "/images/cat-chargers.jpg",
    "images": [
      "/images/cat-chargers.jpg"
    ],
    "variantType": "color",
    "variants": [
      {
        "name": "Charcoal Grey",
        "price": 1199,
        "orig": 2899,
        "image": "/images/cat-chargers.jpg"
      }
    ],
    "offers": [
      {
        "title": "Gear Fest",
        "desc": "Flat 58% Off"
      }
    ],
    "highlights": [
      "Durable 600D water repellent polyester shell",
      "Dedicated padded compartment fits laptops up to 15.6 inches",
      "Ventilated air-mesh back panel prevents back sweat on commutes",
      "Quick access side bottle pockets and organizer slots"
    ],
    "specs": [
      {
        "label": "Capacity",
        "val": "35 Litres"
      },
      {
        "label": "Laptop Sleeve",
        "val": "15.6 Inches"
      }
    ],
    "inTheBox": [
      "1x 35L Backpack"
    ],
    "reviews": [
      {
        "author": "Karan Johar",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "Spacious enough for a 3-day weekend trip and daily office laptop."
      }
    ]
  },

  {
    "id": "fashion-14",
    "name": "Ray-Ban Style Classic Polarized UV400 Protection Wayfarer Sunglasses",
    "shortName": "Polarized Wayfarer Sunglasses",
    "brand": "SunCraft",
    "pack": "100% UV400 • Polarized Lens",
    "category": "fashion-deals",
    "tag": "EYEWEAR",
    "price": 699,
    "originalPrice": 2499,
    "discount": "72% OFF",
    "rating": 4.7,
    "ratingsCount": "21,500 Ratings",
    "reviewsCount": "3,100 Reviews",
    "badge": "UV400 Polarized",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Timeless wayfarer frame with polarized triacetate lenses. Blocks 100% harmful UVA/UVB rays and cuts glare from water and windshields.",
    "image": "/images/deal-earrings.jpg",
    "images": [
      "/images/deal-earrings.jpg"
    ],
    "variantType": "color",
    "variants": [
      {
        "name": "Glossy Black / G-15 Green",
        "price": 699,
        "orig": 2499,
        "image": "/images/deal-earrings.jpg"
      }
    ],
    "offers": [
      {
        "title": "Eyewear Mega Sale",
        "desc": "Save 72%"
      }
    ],
    "highlights": [
      "Polarized HD lenses eliminate glare for driving and outdoor sports",
      "100% UV400 radiation protection coating",
      "Lightweight impact-resistant acetate frame with reinforced metal hinges",
      "Includes hard protective leatherette case and microfiber lens cloth"
    ],
    "specs": [
      {
        "label": "Lens",
        "val": "Polarized UV400"
      },
      {
        "label": "Frame",
        "val": "Classic Wayfarer"
      }
    ],
    "inTheBox": [
      "1x Sunglasses",
      "1x Hard Case",
      "1x Cleaning Cloth"
    ],
    "reviews": [
      {
        "author": "Abhishek N.",
        "stars": "★★★★★",
        "date": "Verified 4 days ago",
        "comment": "Cuts road glare while driving so well. Looks super stylish!"
      }
    ]
  },

  {
    "id": "fashion-15",
    "name": "Aurelia Rayon Printed Festive A-Line Kurta Set with Trousers",
    "shortName": "Aurelia A-Line Kurta Set",
    "brand": "Aurelia",
    "pack": "Soft Rayon • Zari Yoke Work",
    "category": "fashion-deals",
    "tag": "ETHNIC WEAR",
    "price": 1199,
    "originalPrice": 2999,
    "discount": "60% OFF",
    "rating": 4.8,
    "ratingsCount": "33,000 Ratings",
    "reviewsCount": "4,600 Reviews",
    "badge": "Min. 50% Off",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "A-line silhouette in soft flowing rayon fabric with foil print accents and zari embroidery on the round notch neckline. Includes cropped trousers.",
    "image": "/images/deal-anarkali.jpg",
    "images": [
      "/images/deal-anarkali.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "Size M (38)",
        "price": 1199,
        "orig": 2999,
        "image": "/images/deal-anarkali.jpg"
      },
      {
        "name": "Size L (40)",
        "price": 1199,
        "orig": 2999,
        "image": "/images/deal-anarkali.jpg"
      }
    ],
    "offers": [
      {
        "title": "Aurelia Deal",
        "desc": "Flat 60% Off"
      }
    ],
    "highlights": [
      "Fluid drape soft viscose rayon fabric feels breezy in summer",
      "Subtle metallic foil motifs with hand-done zari thread embroidery",
      "Tapered cropped ankle trousers with full elasticated comfort waist",
      "Dry clean or gentle hand wash friendly"
    ],
    "specs": [
      {
        "label": "Fabric",
        "val": "Viscose Rayon"
      },
      {
        "label": "Neckline",
        "val": "Notch Round Neck"
      }
    ],
    "inTheBox": [
      "1x Kurta",
      "1x Trousers"
    ],
    "reviews": [
      {
        "author": "Geeta P.",
        "stars": "★★★★★",
        "date": "Verified 3 days ago",
        "comment": "Comfortable and flattering cut. Fabric doesn't wrinkle easily."
      }
    ]
  },

  {
    "id": "poco-x6",
    "name": "POCO X6 Pro 5G (Dimensity 8300-Ultra, 12GB RAM, 512GB Storage)",
    "shortName": "POCO X6 Pro 5G",
    "brand": "POCO",
    "pack": "12GB RAM • 512GB ROM • 1.5K AMOLED",
    "category": "electronics",
    "tag": "SPEED MONSTER",
    "price": 21999,
    "originalPrice": 28999,
    "discount": "24% OFF",
    "rating": 4.8,
    "ratingsCount": "48,900 Ratings",
    "reviewsCount": "6,400 Reviews",
    "badge": "Speed Flagship",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "Flagship MediaTek Dimensity 8300-Ultra processor, 1.5K 120Hz Flow AMOLED display, 64MP OIS triple camera, 5000mAh battery with 67W Turbo Charge in the box.",
    "image": "/images/hero-poco.jpg",
    "images": [
      "/images/hero-poco.jpg",
      "/images/hero-poco.jpg"
    ],
    "variantType": "color",
    "variants": [
      {
        "name": "Racing Yellow",
        "hex": "#f59e0b",
        "image": "/images/hero-poco.jpg",
        "price": 21999,
        "orig": 28999
      },
      {
        "name": "Spectre Black",
        "hex": "#171717",
        "image": "/images/hero-poco.jpg",
        "price": 21999,
        "orig": 28999
      }
    ],
    "offers": [
      {
        "title": "Bank Offer",
        "desc": "Flat ₹2,000 instant discount on HDFC and ICICI credit cards"
      },
      {
        "title": "Exchange Bonus",
        "desc": "Up to ₹3,000 additional off on smartphone exchange"
      }
    ],
    "highlights": [
      "Flagship 4nm MediaTek Dimensity 8300-Ultra SoC with LiquidCool 2.0 chamber",
      "6.67-inch CrystalRes 1.5K 120Hz Flow AMOLED screen with 1800 nits peak brightness",
      "64MP Triple Camera setup with Optical Image Stabilization (OIS) & 4K 60fps video",
      "5000mAh long-lasting battery with 67W Turbo Charger included in the box"
    ],
    "specs": [
      {
        "label": "Processor",
        "val": "MediaTek Dimensity 8300-Ultra (4nm, up to 3.35GHz)"
      },
      {
        "label": "Display",
        "val": "6.67\" 1.5K 120Hz Flow AMOLED (2712 x 1220, Dolby Vision)"
      },
      {
        "label": "Rear Camera",
        "val": "64MP OIS Main + 8MP Ultra-Wide + 2MP Macro"
      },
      {
        "label": "Front Camera",
        "val": "16MP HDR Selfie Camera"
      },
      {
        "label": "Battery & Charging",
        "val": "5000mAh Battery • 67W Turbo Charge (100% in 45 Mins)"
      },
      {
        "label": "Operating System",
        "val": "Xiaomi HyperOS based on Android 14"
      }
    ],
    "inTheBox": [
      "1x POCO X6 Pro 5G Handset",
      "1x 67W Fast Charging Power Adapter",
      "1x USB Type-C Cable",
      "1x Premium Protective Phone Case",
      "1x SIM Ejector Tool & User Guide"
    ],
    "reviews": [
      {
        "author": "Rohan V.",
        "stars": "★★★★★",
        "date": "Verified 2 days ago",
        "comment": "The Dimensity 8300-Ultra runs BGMI and Genshin Impact at max fps without breaking a sweat. Display is stunning!"
      }
    ]
  },
  {
    "id": "lava-5g",
    "name": "Lava Yuva 5G (MediaTek Dimensity 6020, 6GB RAM, 128GB Storage)",
    "shortName": "Lava Yuva 5G",
    "brand": "Lava",
    "pack": "6GB RAM • 128GB ROM • Glass Back",
    "category": "electronics",
    "tag": "5G VALUE",
    "price": 9499,
    "originalPrice": 12999,
    "discount": "26% OFF",
    "rating": 4.6,
    "ratingsCount": "22,400 Ratings",
    "reviewsCount": "3,100 Reviews",
    "badge": "Made in India",
    "deliveryTime": "Tomorrow by 11 AM",
    "inStock": true,
    "assured": true,
    "description": "True 5G capability with MediaTek Dimensity 6020, premium glass back design, 50MP AI primary camera, 90Hz punch-hole display, and clean bloatware-free Android.",
    "image": "/images/hero-lava.jpg",
    "images": [
      "/images/hero-lava.jpg",
      "/images/hero-lava.jpg"
    ],
    "variantType": "color",
    "variants": [
      {
        "name": "Mystic Blue",
        "hex": "#2563eb",
        "image": "/images/hero-lava.jpg",
        "price": 9499,
        "orig": 12999
      },
      {
        "name": "Mystic Green",
        "hex": "#16a34a",
        "image": "/images/hero-lava.jpg",
        "price": 9499,
        "orig": 12999
      }
    ],
    "offers": [
      {
        "title": "Special Launch Price",
        "desc": "Special ₹1,000 off coupon applied at checkout"
      }
    ],
    "highlights": [
      "High-performance MediaTek Dimensity 6020 5G processor with 8 5G bands",
      "Premium glossy AGC glass back finish that feels luxurious in the hand",
      "50MP AI Dual Camera with Night mode, Portrait, and Pro mode",
      "5000mAh all-day battery with Type-C 18W fast charging support"
    ],
    "specs": [
      {
        "label": "Processor",
        "val": "MediaTek Dimensity 6020 Octa-Core 5G"
      },
      {
        "label": "Display",
        "val": "6.52\" HD+ 90Hz Punch-Hole Display"
      },
      {
        "label": "Camera",
        "val": "50MP Primary AI Camera + 8MP Selfie Camera"
      },
      {
        "label": "RAM / ROM",
        "val": "6GB (4GB + 2GB Virtual) / 128GB UFS 2.2"
      },
      {
        "label": "Battery",
        "val": "5000mAh with 18W Fast Charging"
      }
    ],
    "inTheBox": [
      "1x Lava Yuva 5G Phone",
      "1x 18W Fast Charger",
      "1x Type-C Cable",
      "1x TPU Transparent Case",
      "1x SIM Pin & Warranty Card"
    ],
    "reviews": [
      {
        "author": "Vikram K.",
        "stars": "★★★★★",
        "date": "Verified 3 days ago",
        "comment": "Clean Android with zero ads or spam apps! Fast 5G speed and looks like a 25k phone with the glass back."
      }
    ]
  },
  {
    "id": "mattress",
    "name": "Wakefit Orthopedic Memory Foam Mattress (78x60x6 inches, Queen Size)",
    "shortName": "Wakefit Orthopedic Mattress",
    "brand": "Wakefit",
    "pack": "Queen Size • 6-Inch • 10-Yr Warranty",
    "category": "furniture",
    "tag": "ORTHO CARE",
    "price": 8499,
    "originalPrice": 14999,
    "discount": "43% OFF",
    "rating": 4.8,
    "ratingsCount": "64,100 Ratings",
    "reviewsCount": "9,200 Reviews",
    "badge": "Doctor Recommended",
    "deliveryTime": "Tomorrow by 2 PM",
    "inStock": true,
    "assured": true,
    "description": "Next-gen memory foam orthopedic mattress designed to contour to your spine's natural shape, relieving back pain and pressure points for restorative sleep.",
    "image": "/images/hero-mattress.jpg",
    "images": [
      "/images/hero-mattress.jpg",
      "/images/hero-mattress.jpg"
    ],
    "variantType": "size",
    "variants": [
      {
        "name": "Queen (78x60x6 in)",
        "price": 8499,
        "orig": 14999,
        "image": "/images/hero-mattress.jpg"
      },
      {
        "name": "King (78x72x6 in)",
        "price": 9999,
        "orig": 17999,
        "image": "/images/hero-mattress.jpg"
      }
    ],
    "offers": [
      {
        "title": "Mattress Fest",
        "desc": "Complimentary waterproof mattress protector included"
      }
    ],
    "highlights": [
      "Contoured orthopedic support provides targeted spine alignment and back pain relief",
      "Breathable premium GSM quilted fabric cover keeps temperature cool through the night",
      "High-density base foam prevents sagging and provides enduring body support",
      "Backed by 10-Year manufacturer warranty and 100 nights risk-free sleep trial"
    ],
    "specs": [
      {
        "label": "Dimensions",
        "val": "78\" Length x 60\" Width x 6\" Thickness (Queen Size)"
      },
      {
        "label": "Primary Material",
        "val": "High-Resilience Orthopedic Memory Foam"
      },
      {
        "label": "Comfort Level",
        "val": "Medium Firm (7/10 Ergonomic Support)"
      },
      {
        "label": "Warranty",
        "val": "10 Years Direct Brand Warranty"
      }
    ],
    "inTheBox": [
      "1x Wakefit Orthopedic Memory Foam Mattress (Vacuum Rolled & Boxed)",
      "1x Removable Zippered Breathable Fabric Cover",
      "1x Warranty Card & Setup Manual"
    ],
    "reviews": [
      {
        "author": "Dr. Shalini M.",
        "stars": "★★★★★",
        "date": "Verified 5 days ago",
        "comment": "My chronic morning lower back stiffness disappeared after just 3 nights. Firm yet plush support!"
      }
    ]
  }
,

  // ==========================================
  // 11. POPULAR NEARBY (15 FRESH PRODUCTS)
  // ==========================================
  {
  "id": "nearby-1",
  "name": "Farm Fresh Juicy Organic Lemons (Nimbu)",
  "shortName": "Organic Lemons (250g)",
  "brand": "SwiftFarm",
  "pack": "250g (~6-8 pcs)",
  "category": "popular-nearby",
  "tag": "FARM FRESH",
  "price": 39,
  "originalPrice": 65,
  "discount": "40% OFF",
  "rating": 4.8,
  "ratingsCount": "22,400 Ratings",
  "reviewsCount": "3,150 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "10-12 Mins",
  "inStock": true,
  "assured": true,
  "description": "Hand-picked, sun-ripened organic yellow lemons loaded with natural Vitamin C, tangy juice and thin zest skin. Sourced directly from certified local orchards every morning.",
  "image": "/images/lemons.jpg",
  "images": [
    "/images/lemons.jpg",
    "/images/oil-1.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "250g Pack",
      "price": 39,
      "orig": 65,
      "image": "/images/lemons.jpg"
    },
    {
      "name": "500g Value Pack",
      "price": 69,
      "orig": 120,
      "image": "/images/lemons.jpg"
    }
  ],
  "offers": [
    {
      "title": "Fresh Harvest",
      "desc": "Flat 40% off on morning orchard picks"
    },
    {
      "title": "Express Guarantee",
      "desc": "Delivered ice-fresh in 10-12 minutes"
    }
  ],
  "highlights": [
    "100% Organically harvested with zero synthetic wax coatings",
    "Thin-skinned juicy variety giving maximum juice per lemon",
    "Rich in natural antioxidants, bioflavonoids and immune-boosting Vitamin C",
    "Chilled darkstore pod handling preserves natural aromatic citrus oils",
    "Ideal for fresh nimbu pani, salads, detox drinks and culinary garnishing"
  ],
  "specs": [
    {
      "label": "Origin",
      "val": "Local Maharashtra & Karnataka Orchards"
    },
    {
      "label": "Shelf Life",
      "val": "7 Days under refrigeration"
    },
    {
      "label": "Storage",
      "val": "Cool, dry place or crisper drawer"
    },
    {
      "label": "Quality Grade",
      "val": "Grade A Hand-Sorted Export Quality"
    }
  ],
  "inTheBox": [
    "1x 250g Sealed Ventilated Biodegradable Lemon Pouch"
  ],
  "reviews": [
    {
      "author": "Ananya K.",
      "stars": "★★★★★",
      "date": "Verified 2 hours ago",
      "comment": "Super fresh and extremely juicy! Got it in literally 11 minutes at my doorstep."
    }
  ]
},

  {
  "id": "nearby-2",
  "name": "Amul Pasteurised Fresh Butter (Rich & Creamy)",
  "shortName": "Amul Butter 500g",
  "brand": "Amul",
  "pack": "500g Block",
  "category": "popular-nearby",
  "tag": "DAILY DAIRY",
  "price": 265,
  "originalPrice": 285,
  "discount": "7% OFF",
  "rating": 4.9,
  "ratingsCount": "89,500 Ratings",
  "reviewsCount": "14,200 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "10-12 Mins",
  "inStock": true,
  "assured": true,
  "description": "Utterly butterly delicious pure salted table butter made from 100% wholesome cow and buffalo milk cream. Kept in sub-zero insulated bags to arrive perfectly firm.",
  "image": "/images/butter-1.jpg",
  "images": [
    "/images/butter-1.jpg",
    "/images/icecream-1.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "500g Carton",
      "price": 265,
      "orig": 285,
      "image": "/images/butter-1.jpg"
    },
    {
      "name": "100g Pocket Pack",
      "price": 58,
      "orig": 60,
      "image": "/images/butter-1.jpg"
    }
  ],
  "offers": [
    {
      "title": "Breakfast Saver",
      "desc": "Special Darkstore rate on 500g carton"
    },
    {
      "title": "Cold Chain Assured",
      "desc": "Delivered chilled in thermal insulated bags"
    }
  ],
  "highlights": [
    "Crafted from 100% wholesome pasteurized fresh cream",
    "Signature balanced saltiness loved across millions of Indian households",
    "No artificial flavors, preservatives or synthetic chemicals",
    "Essential source of healthy Vitamin A, D and natural dairy fats",
    "Dispatched from dedicated local darkstore cold storage lockers"
  ],
  "specs": [
    {
      "label": "Brand",
      "val": "Amul - The Taste of India"
    },
    {
      "label": "Net Quantity",
      "val": "500 Grams"
    },
    {
      "label": "Fat Content",
      "val": "80% Milk Fat Minimum"
    },
    {
      "label": "Storage",
      "val": "Keep refrigerated at 4°C or below"
    }
  ],
  "inTheBox": [
    "1x Amul Salted Butter 500g Sealed Foil Wrapped Carton"
  ],
  "reviews": [
    {
      "author": "Rajesh Nair",
      "stars": "★★★★★",
      "date": "Verified 4 hours ago",
      "comment": "Arrived properly chilled and firm, not melted at all. Amazing 12-minute delivery!"
    }
  ]
},

  {
  "id": "nearby-3",
  "name": "Aashirvaad Shudh Chakki Fresh Whole Wheat Atta",
  "shortName": "Aashirvaad Atta 5kg",
  "brand": "Aashirvaad",
  "pack": "5kg Bag",
  "category": "popular-nearby",
  "tag": "KITCHEN STAPLE",
  "price": 229,
  "originalPrice": 289,
  "discount": "21% OFF",
  "rating": 4.8,
  "ratingsCount": "68,300 Ratings",
  "reviewsCount": "9,450 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "12-14 Mins",
  "inStock": true,
  "assured": true,
  "description": "Made from heavy, golden grain whole wheat sourced from Sehore fields, traditional stone chakki milled to retain 100% dietary fiber and natural wheat aroma for super fluffy, soft rotis.",
  "image": "/images/atta-1.jpg",
  "images": [
    "/images/atta-1.jpg",
    "/images/atta-2.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "5kg Bag",
      "price": 229,
      "orig": 289,
      "image": "/images/atta-1.jpg"
    },
    {
      "name": "10kg Family Bag",
      "price": 439,
      "orig": 560,
      "image": "/images/atta-2.jpg"
    }
  ],
  "offers": [
    {
      "title": "Staples Deal",
      "desc": "Flat ₹60 Off on 5kg Chakki Atta"
    },
    {
      "title": "Heavy Goods Pod",
      "desc": "Free doorstep carriage to your floor"
    }
  ],
  "highlights": [
    "100% Pure whole wheat grain with 0% Maida adulteration",
    "Traditional slow stone chakki grinding locks in natural moisture & nutrients",
    "Rotis remain soft, fluffy and pliable for hours after cooking",
    "High natural dietary fiber content aids smooth daily digestion",
    "Mechanized 3-step cleaning and contactless sealed hygienic packaging"
  ],
  "specs": [
    {
      "label": "Grain Type",
      "val": "100% MP Sharbati & Durum Golden Wheat"
    },
    {
      "label": "Fiber Content",
      "val": "High Natural Dietary Fiber (11.2g/100g)"
    },
    {
      "label": "Packaging",
      "val": "Multi-Layer Moisture-Lock Poly Bag"
    },
    {
      "label": "Shelf Life",
      "val": "90 Days from Milling"
    }
  ],
  "inTheBox": [
    "1x Aashirvaad Shudh Chakki Fresh Atta 5kg Bag"
  ],
  "reviews": [
    {
      "author": "Pooja Varma",
      "stars": "★★★★★",
      "date": "Verified yesterday",
      "comment": "Rotis puffed up like balloons! Saved me a trip to the supermarket in peak traffic."
    }
  ]
},

  {
  "id": "nearby-4",
  "name": "India Gate Feast Rozzana Premium Basmati Rice",
  "shortName": "India Gate Basmati 5kg",
  "brand": "India Gate",
  "pack": "5kg Bag",
  "category": "popular-nearby",
  "tag": "AROMATIC RICE",
  "price": 399,
  "originalPrice": 575,
  "discount": "31% OFF",
  "rating": 4.7,
  "ratingsCount": "46,100 Ratings",
  "reviewsCount": "6,200 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "11-14 Mins",
  "inStock": true,
  "assured": true,
  "description": "Naturally aged long slender grains from Himalayan foothills that elongate to more than double their size upon cooking. Non-sticky, fluffy texture with mesmerizing natural aroma.",
  "image": "/images/basmati.jpg",
  "images": [
    "/images/basmati.jpg",
    "/images/atta-1.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "5kg Bag",
      "price": 399,
      "orig": 575,
      "image": "/images/basmati.jpg"
    },
    {
      "name": "1kg Pack",
      "price": 95,
      "orig": 130,
      "image": "/images/basmati.jpg"
    }
  ],
  "offers": [
    {
      "title": "BIRYANI SPECIAL",
      "desc": "Flat ₹176 Off on 5kg Feast Rozzana"
    },
    {
      "title": "Darkstore Quick Pack",
      "desc": "Packed directly from fresh batch pallets"
    }
  ],
  "highlights": [
    "Aged for a minimum of 1-2 years for non-sticky, distinct rice grains",
    "Grains elongate up to 2.5 times with distinct pearly white finish",
    "Rich sweet aroma fills kitchen while steaming or cooking biryani",
    "Ideal for daily pulav, jeera rice, fried rice and wholesome khichdi",
    "Stringently sortex-cleaned for 100% stone and grit-free quality"
  ],
  "specs": [
    {
      "label": "Grain Length",
      "val": "Long Slender Aged Basmati"
    },
    {
      "label": "Grain Elongation",
      "val": "Up to 2.5x Post Cooking"
    },
    {
      "label": "Harvest Region",
      "val": "Terai Himalayan Foothills"
    },
    {
      "label": "Packaging",
      "val": "Hygienic Tough Poly Pouch 5kg"
    }
  ],
  "inTheBox": [
    "1x India Gate Feast Rozzana Basmati Rice 5kg Bag"
  ],
  "reviews": [
    {
      "author": "Karthik R.",
      "stars": "★★★★★",
      "date": "Verified 2 days ago",
      "comment": "Made dum biryani on Sunday. Every grain was separate, fragrant and long."
    }
  ]
},

  {
  "id": "nearby-5",
  "name": "Tata Sampann Unpolished High Protein Toor Dal",
  "shortName": "Tata Sampann Toor Dal 1kg",
  "brand": "Tata Sampann",
  "pack": "1kg Pouch",
  "category": "popular-nearby",
  "tag": "PROTEIN PULSES",
  "price": 169,
  "originalPrice": 215,
  "discount": "21% OFF",
  "rating": 4.8,
  "ratingsCount": "51,800 Ratings",
  "reviewsCount": "7,300 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "10-12 Mins",
  "inStock": true,
  "assured": true,
  "description": "100% Unpolished Arhar Toor Dal that does not undergo artificial water, oil or leather polishing, ensuring natural dietary protein, dietary fiber and earthy wholesome taste remain intact.",
  "image": "/images/toordal.jpg",
  "images": [
    "/images/toordal.jpg",
    "/images/oil-1.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "1kg Pouch",
      "price": 169,
      "orig": 215,
      "image": "/images/toordal.jpg"
    },
    {
      "name": "2kg Value Pack",
      "price": 329,
      "orig": 420,
      "image": "/images/toordal.jpg"
    }
  ],
  "offers": [
    {
      "title": "Protein Power",
      "desc": "Flat 21% Off on Tata Sampann Dal"
    },
    {
      "title": "Free Darkstore Dispatch",
      "desc": "Dispatched in under 5 minutes"
    }
  ],
  "highlights": [
    "Unpolished dal retains natural nutrition without chemical water polishing",
    "Chef Sanjeev Kapoor certified for authentic taste and consistent aroma",
    "High natural protein content of ~22g per 100g serving",
    "Cooks evenly to a luscious, comforting sambar or dal tadka texture",
    "5-step laser sorting process ensures zero dirt or stones"
  ],
  "specs": [
    {
      "label": "Processing",
      "val": "100% Unpolished Without Artificial Oils"
    },
    {
      "label": "Protein Content",
      "val": "22g Plant Protein per 100g"
    },
    {
      "label": "Origin",
      "val": "Madhya Pradesh & Maharashtra"
    },
    {
      "label": "Certification",
      "val": "FSSAI & AGMARK Certified"
    }
  ],
  "inTheBox": [
    "1x Tata Sampann Unpolished Toor Dal 1kg Sealed Pouch"
  ],
  "reviews": [
    {
      "author": "Dr. Rashmi S.",
      "stars": "★★★★★",
      "date": "Verified 3 days ago",
      "comment": "You can tell the difference immediately — cooks rich and thick without foam."
    }
  ]
},

  {
  "id": "nearby-6",
  "name": "Fortune Sunlite Refined Sunflower Cooking Oil",
  "shortName": "Fortune Sunflower Oil 1L",
  "brand": "Fortune",
  "pack": "1 Litre Pouch",
  "category": "popular-nearby",
  "tag": "COOKING OIL",
  "price": 135,
  "originalPrice": 175,
  "discount": "23% OFF",
  "rating": 4.7,
  "ratingsCount": "62,100 Ratings",
  "reviewsCount": "8,100 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "12-14 Mins",
  "inStock": true,
  "assured": true,
  "description": "Light, healthy, odourless refined sunflower oil fortified with essential Vitamins A and D. High smoke point makes it excellent for light sautéing, deep frying, and everyday cooking.",
  "image": "/images/oil-1.jpg",
  "images": [
    "/images/oil-1.jpg",
    "/images/oil-2.jpg"
  ],
  "variantType": "pack",
  "variants": [
    {
      "name": "1L Pouch",
      "price": 135,
      "orig": 175,
      "image": "/images/oil-1.jpg"
    },
    {
      "name": "5L Can",
      "price": 659,
      "orig": 875,
      "image": "/images/oil-2.jpg"
    }
  ],
  "offers": [
    {
      "title": "Heart Healthy",
      "desc": "Flat ₹40 Off per Litre pouch"
    },
    {
      "title": "Quick Cook",
      "desc": "Arrives at your kitchen in 12 mins"
    }
  ],
  "highlights": [
    "Enriched with natural Vitamin E and fortified with Vitamins A & D",
    "Low absorb technology ensures foods retain crunch with less oil absorption",
    "Neutral taste and light consistency does not overpower food aromas",
    "High smoke point (~230°C) prevents toxic thermal degradation while frying",
    "100% Food grade hygienic tamper-proof pouch packaging"
  ],
  "specs": [
    {
      "label": "Type",
      "val": "Refined Sunflower Seed Oil"
    },
    {
      "label": "Fortification",
      "val": "Vitamins A & D as per FSSAI Standards"
    },
    {
      "label": "Volume",
      "val": "1 Litre (910g Approx)"
    },
    {
      "label": "Shelf Life",
      "val": "9 Months"
    }
  ],
  "inTheBox": [
    "1x Fortune Sunlite Refined Sunflower Oil 1L Pouch"
  ],
  "reviews": [
    {
      "author": "Nitin Gadkari",
      "stars": "★★★★★",
      "date": "Verified 2 days ago",
      "comment": "Puri fry keli, oil absorb nahi hot jast. Perfect for daily family cooking."
    }
  ]
},

  {
  "id": "nearby-7",
  "name": "Tata Salt Vacuum Evaporated Pure Iodized Salt",
  "shortName": "Tata Salt 1kg",
  "brand": "Tata",
  "pack": "1kg Pack",
  "category": "popular-nearby",
  "tag": "DAILY ESSENTIAL",
  "price": 26,
  "originalPrice": 30,
  "discount": "13% OFF",
  "rating": 4.9,
  "ratingsCount": "120,400 Ratings",
  "reviewsCount": "18,900 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "10-12 Mins",
  "inStock": true,
  "assured": true,
  "description": "Desh Ka Namak: Vacuum evaporated pure white crystalline salt with strictly monitored iodine dosage essential for cognitive development and family wellbeing.",
  "image": "/images/tatasalt.jpg",
  "images": [
    "/images/tatasalt.jpg",
    "/images/toordal.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "1kg Pack",
      "price": 26,
      "orig": 30,
      "image": "/images/tatasalt.jpg"
    },
    {
      "name": "2kg Pack",
      "price": 50,
      "orig": 60,
      "image": "/images/tatasalt.jpg"
    }
  ],
  "offers": [
    {
      "title": "Kitchen Essential",
      "desc": "Guaranteed lowest price pod item"
    },
    {
      "title": "Express Dispatch",
      "desc": "Direct dispatch from nearby darkstore"
    }
  ],
  "highlights": [
    "Pioneering vacuum evaporated technology for absolute purity",
    "Guaranteed iodine content to prevent iodine deficiency disorders",
    "Free-flowing uniform crystals dissolve evenly in curries and soups",
    "Untouched by human hands during entire automated packaging chain",
    "The undisputed gold standard of Indian kitchen staples"
  ],
  "specs": [
    {
      "label": "Technology",
      "val": "Vacuum Evaporated Pure Crystallization"
    },
    {
      "label": "Iodine Level",
      "val": "15-30 ppm at Consumer Level"
    },
    {
      "label": "Weight",
      "val": "1.0 kg"
    },
    {
      "label": "Shelf Life",
      "val": "24 Months"
    }
  ],
  "inTheBox": [
    "1x Tata Salt Vacuum Evaporated Iodized Salt 1kg Pack"
  ],
  "reviews": [
    {
      "author": "Sunil Bansal",
      "stars": "★★★★★",
      "date": "Verified yesterday",
      "comment": "Delivered in 10 minutes when we ran out while cooking dinner. Lifesaver!"
    }
  ]
},

  {
  "id": "nearby-8",
  "name": "Tata Tea Premium Desh Ki Chai (Rich & Strong)",
  "shortName": "Tata Tea Premium 500g",
  "brand": "Tata Tea",
  "pack": "500g Carton",
  "category": "popular-nearby",
  "tag": "HOT BEVERAGE",
  "price": 235,
  "originalPrice": 310,
  "discount": "24% OFF",
  "rating": 4.8,
  "ratingsCount": "78,200 Ratings",
  "reviewsCount": "11,500 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "10-12 Mins",
  "inStock": true,
  "assured": true,
  "description": "Expertly curated blend combining big tea leaves for irresistible rich aroma with fine tea grains for deep amber color and signature kadak strength.",
  "image": "/images/tea-1.jpg",
  "images": [
    "/images/tea-1.jpg",
    "/images/butter-1.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "500g Carton",
      "price": 235,
      "orig": 310,
      "image": "/images/tea-1.jpg"
    },
    {
      "name": "1kg Family Pack",
      "price": 449,
      "orig": 610,
      "image": "/images/tea-1.jpg"
    }
  ],
  "offers": [
    {
      "title": "Chai Lovers",
      "desc": "Flat ₹75 Off on 500g carton"
    },
    {
      "title": "Snack Combo",
      "desc": "Pair with Britannia cookies and save extra ₹20"
    }
  ],
  "highlights": [
    "Signature blend of large aromatic leaves and strong CTC tea grains",
    "Delivers the perfect golden amber color with rich milk boiling",
    "Revitalizing taste that sparks your morning productivity",
    "Sourced from the finest tea gardens across Assam & Dooars",
    "Aroma-lock foil seal keeps freshness preserved to the last cup"
  ],
  "specs": [
    {
      "label": "Blend",
      "val": "Badi Patti (Aroma) + Choti Patti (Strength)"
    },
    {
      "label": "Tea Type",
      "val": "Black CTC Granular Leaf Blend"
    },
    {
      "label": "Weight",
      "val": "500 Grams Carton"
    },
    {
      "label": "Shelf Life",
      "val": "12 Months"
    }
  ],
  "inTheBox": [
    "1x Tata Tea Premium 500g Sealed Foil Carton"
  ],
  "reviews": [
    {
      "author": "Gaurav Joshi",
      "stars": "★★★★★",
      "date": "Verified 1 day ago",
      "comment": "Strong aroma and genuine kadak flavor. Best morning chai!"
    }
  ]
},

  {
  "id": "nearby-9",
  "name": "Nestle Maggi 2-Minute Instant Masala Noodles",
  "shortName": "Maggi Masala Noodles 280g",
  "brand": "Maggi",
  "pack": "4-Pack (280g)",
  "category": "popular-nearby",
  "tag": "INSTANT SNACK",
  "price": 54,
  "originalPrice": 60,
  "discount": "10% OFF",
  "rating": 4.9,
  "ratingsCount": "142,000 Ratings",
  "reviewsCount": "25,300 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "10-12 Mins",
  "inStock": true,
  "assured": true,
  "description": "India's all-time favorite midnight craving and 2-minute snack, featuring springy wheat noodles paired with signature Masala tastemaker made with 10 aromatic roasted spices.",
  "image": "/images/maggi-1.jpg",
  "images": [
    "/images/maggi-1.jpg",
    "/images/goodday.jpg"
  ],
  "variantType": "pack",
  "variants": [
    {
      "name": "Pack of 4 (280g)",
      "price": 54,
      "orig": 60,
      "image": "/images/maggi-1.jpg"
    },
    {
      "name": "Pack of 12 (840g)",
      "price": 155,
      "orig": 180,
      "image": "/images/maggi-1.jpg"
    }
  ],
  "offers": [
    {
      "title": "Snack Attack",
      "desc": "10-Minute Darkstore dispatch for instant hunger"
    },
    {
      "title": "Tastemaker Deal",
      "desc": "Includes authentic Maggi Masala sachets"
    }
  ],
  "highlights": [
    "2-Minute quick cooking time for instant hunger emergencies",
    "Fortified with iron and calcium for essential micronutrient support",
    "Signature blend of roasted coriander, cumin, turmeric, fenugreek & ginger",
    "Non-sticky springy noodles with luscious noodle-broth consistency",
    "100% Vegetarian certified quality standards"
  ],
  "specs": [
    {
      "label": "Pack Content",
      "val": "4 Individual Noodle Cakes with Tastemakers"
    },
    {
      "label": "Total Net Weight",
      "val": "280 Grams (4 x 70g)"
    },
    {
      "label": "Cooking Time",
      "val": "2 Minutes in 1.5 Cups Boiling Water"
    },
    {
      "label": "Dietary",
      "val": "100% Vegetarian with Zero Trans Fats"
    }
  ],
  "inTheBox": [
    "1x Maggi 2-Minute Masala Noodles 4-in-1 Multipack with 4 Tastemakers"
  ],
  "reviews": [
    {
      "author": "Tanmay Bhatia",
      "stars": "★★★★★",
      "date": "Verified 5 hours ago",
      "comment": "Late night hunger solved in 10 mins delivery! Still the reigning champ."
    }
  ]
},

  {
  "id": "nearby-10",
  "name": "Britannia Good Day Cashew Rich Butter Cookies",
  "shortName": "Good Day Cashew 600g",
  "brand": "Britannia",
  "pack": "600g Mega Pack",
  "category": "popular-nearby",
  "tag": "BAKERY & COOKIES",
  "price": 119,
  "originalPrice": 160,
  "discount": "26% OFF",
  "rating": 4.7,
  "ratingsCount": "58,400 Ratings",
  "reviewsCount": "8,120 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "10-12 Mins",
  "inStock": true,
  "assured": true,
  "description": "Crunchy melt-in-mouth golden butter cookies loaded with freshly roasted cashew nuts and delicious real butter. Smiling cookie design brings happiness to your tea-time breaks.",
  "image": "/images/goodday.jpg",
  "images": [
    "/images/goodday.jpg",
    "/images/tea-1.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "600g Mega Pack",
      "price": 119,
      "orig": 160,
      "image": "/images/goodday.jpg"
    },
    {
      "name": "200g Standard Pack",
      "price": 45,
      "orig": 55,
      "image": "/images/goodday.jpg"
    }
  ],
  "offers": [
    {
      "title": "Tea Companion",
      "desc": "Flat 26% Off on 600g Mega Value Pack"
    },
    {
      "title": "Crisp Guarantee",
      "desc": "Factory sealed fresh batch delivered"
    }
  ],
  "highlights": [
    "Loaded with abundance of real roasted cashew nut pieces",
    "Delectable rich butter aroma with golden crumbly texture",
    "Signature smile fluted cookie shape loved by kids and adults alike",
    "Zero trans fats and made with food-grade refined wheat flour",
    "Perfect accompaniment for evening tea, coffee, and party platters"
  ],
  "specs": [
    {
      "label": "Key Ingredients",
      "val": "Refined Wheat Flour, Butter, Roasted Cashews"
    },
    {
      "label": "Weight",
      "val": "600 Grams Value Box"
    },
    {
      "label": "Flavor",
      "val": "Rich Cashew Nut & Sweet Butter"
    },
    {
      "label": "Shelf Life",
      "val": "6 Months"
    }
  ],
  "inTheBox": [
    "1x Britannia Good Day Cashew Cookies 600g Sealed Tray Multipack"
  ],
  "reviews": [
    {
      "author": "Shweta Kulkarni",
      "stars": "★★★★★",
      "date": "Verified 2 days ago",
      "comment": "Crispy and full of crunchy cashews. Cookies arrived intact without any broken crumbs!"
    }
  ]
},

  {
  "id": "nearby-11",
  "name": "Amul Real Ice Cream Creamy Vanilla Magic Tub",
  "shortName": "Amul Vanilla Tub 1L",
  "brand": "Amul",
  "pack": "1 Litre Tub",
  "category": "popular-nearby",
  "tag": "CHILLED DESSERT",
  "price": 160,
  "originalPrice": 190,
  "discount": "16% OFF",
  "rating": 4.8,
  "ratingsCount": "49,100 Ratings",
  "reviewsCount": "7,800 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "10-12 Mins",
  "inStock": true,
  "assured": true,
  "description": "100% Real Milk ice cream with pure vanilla flavor and luscious velvety mouthfeel. Dispatched in special sub-zero dry-ice thermal sleeves so it reaches rock solid.",
  "image": "/images/icecream-1.jpg",
  "images": [
    "/images/icecream-1.jpg",
    "/images/butter-1.jpg"
  ],
  "variantType": "flavor",
  "variants": [
    {
      "name": "1L Vanilla Tub",
      "price": 160,
      "orig": 190,
      "image": "/images/icecream-1.jpg"
    },
    {
      "name": "1L Belgian Chocolate",
      "price": 220,
      "orig": 260,
      "image": "/images/icecream-1.jpg"
    }
  ],
  "offers": [
    {
      "title": "Cold Chain Express",
      "desc": "Insulated freezer pack prevents melting"
    },
    {
      "title": "Dessert Deal",
      "desc": "Save ₹30 on 1 Litre Family Tub"
    }
  ],
  "highlights": [
    "100% Real Milk & Milk Fat, absolutely zero cheap vegetable oils (Frozen Dessert free)",
    "Creamy, velvety texture infused with Madagascar style aromatic vanilla",
    "Delivered in freezer-grade dry-ice insulated pouches in under 12 minutes",
    "No artificial colors or harmful chemical gelatin stabilizers",
    "Generous 1 Litre tub perfect for sundaes, shakes, and family post-dinner treats"
  ],
  "specs": [
    {
      "label": "Volume",
      "val": "1000 ml / 1 Litre Family Tub"
    },
    {
      "label": "Composition",
      "val": "100% Pure Dairy Milk & Cream (Real Ice Cream)"
    },
    {
      "label": "Storage Temp",
      "val": "Maintain below -18°C"
    },
    {
      "label": "Shelf Life",
      "val": "12 Months"
    }
  ],
  "inTheBox": [
    "1x Amul Real Ice Cream Vanilla 1L Tub with Sealed Lid"
  ],
  "reviews": [
    {
      "author": "Pradeep Chawla",
      "stars": "★★★★★",
      "date": "Verified 6 hours ago",
      "comment": "Delivered ice cold and completely solid! Real milk ice cream is so much better."
    }
  ]
},

  {
  "id": "nearby-12",
  "name": "Colgate Strong Teeth Dental Cream Toothpaste",
  "shortName": "Colgate Strong Teeth 500g",
  "brand": "Colgate",
  "pack": "500g Saver Pack",
  "category": "popular-nearby",
  "tag": "ORAL CARE",
  "price": 215,
  "originalPrice": 285,
  "discount": "25% OFF",
  "rating": 4.8,
  "ratingsCount": "84,300 Ratings",
  "reviewsCount": "12,900 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "11-13 Mins",
  "inStock": true,
  "assured": true,
  "description": "Unique Amino Shakti formula adds natural calcium to strengthen tooth enamel from within, protecting against cavities, bad breath and gum weakness for all-day freshness.",
  "image": "/images/colgate.jpg",
  "images": [
    "/images/colgate.jpg",
    "/images/dettol.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "500g Saver Pack",
      "price": 215,
      "orig": 285,
      "image": "/images/colgate.jpg"
    },
    {
      "name": "200g Standard Pack",
      "price": 99,
      "orig": 125,
      "image": "/images/colgate.jpg"
    }
  ],
  "offers": [
    {
      "title": "Smile Saver",
      "desc": "Flat 25% Off on 500g Jumbo Tube"
    },
    {
      "title": "IDA Accepted",
      "desc": "Indian Dental Association certified"
    }
  ],
  "highlights": [
    "Amino Shakti technology delivers 2x more natural calcium strengthening",
    "Clinically proven defense against cavities, decay, and plaque buildup",
    "Refreshing mint flavor provides long-lasting fresh breath for 12 hours",
    "Gently polishes away yellow stains without damaging enamel coating",
    "India's No. 1 trusted oral hygiene care brand recommended by dentists"
  ],
  "specs": [
    {
      "label": "Key Technology",
      "val": "Arginine Amino Shakti + Calcium Fluoride"
    },
    {
      "label": "Net Weight",
      "val": "500 Grams (2x 250g Saver Tube)"
    },
    {
      "label": "Flavor",
      "val": "Cool Crisp Peppermint Fresh"
    },
    {
      "label": "Certification",
      "val": "IDA (Indian Dental Association) Verified"
    }
  ],
  "inTheBox": [
    "1x Colgate Strong Teeth Dental Cream 500g Saver Pack"
  ],
  "reviews": [
    {
      "author": "Naveen Saxena",
      "stars": "★★★★★",
      "date": "Verified 1 day ago",
      "comment": "Reliable toothpaste delivered in 11 minutes right when we ran out in the morning."
    }
  ]
},

  {
  "id": "nearby-13",
  "name": "Dettol Original Germ Protection Bathing Soap",
  "shortName": "Dettol Soap (125g x 4)",
  "brand": "Dettol",
  "pack": "Pack of 4 (125g each)",
  "category": "popular-nearby",
  "tag": "PERSONAL CARE",
  "price": 175,
  "originalPrice": 232,
  "discount": "25% OFF",
  "rating": 4.9,
  "ratingsCount": "96,100 Ratings",
  "reviewsCount": "14,800 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "11-13 Mins",
  "inStock": true,
  "assured": true,
  "description": "Trusted 99.9% germ defense formula with classic pine fragrance and added plant-derived moisturizers to keep skin hygienically clean, soft, and protected from environmental dirt.",
  "image": "/images/dettol.jpg",
  "images": [
    "/images/dettol.jpg",
    "/images/colgate.jpg"
  ],
  "variantType": "pack",
  "variants": [
    {
      "name": "Pack of 4 x 125g",
      "price": 175,
      "orig": 232,
      "image": "/images/dettol.jpg"
    },
    {
      "name": "Pack of 5 x 75g",
      "price": 135,
      "orig": 175,
      "image": "/images/dettol.jpg"
    }
  ],
  "offers": [
    {
      "title": "Hygiene Pack",
      "desc": "Flat 25% Off + 1 Free Mini Soap Bar"
    },
    {
      "title": "Express Care",
      "desc": "Direct darkstore inventory dispatch"
    }
  ],
  "highlights": [
    "Guaranteed 99.9% protection against illness-causing germs and bacteria",
    "Infused with 85% naturally derived ingredients and gentle plant glycerin",
    "Signature invigorating pine aroma leaves skin refreshed all day long",
    "Dermatologically tested formula safe for the whole family's daily bath",
    "Recommended by the Indian Medical Association (IMA)"
  ],
  "specs": [
    {
      "label": "Total Weight",
      "val": "500 Grams (4 Bars of 125g each)"
    },
    {
      "label": "Grade",
      "val": "Grade 1 Toilet Soap (TFM > 76%)"
    },
    {
      "label": "Fragrance",
      "val": "Classic Dettol Pine & Herbal Antiseptic"
    },
    {
      "label": "Skin Type",
      "val": "Suitable for all skin types"
    }
  ],
  "inTheBox": [
    "1x Dettol Original Germ Protection Bathing Bar Multipack (4x 125g)"
  ],
  "reviews": [
    {
      "author": "Sanjay Joshi",
      "stars": "★★★★★",
      "date": "Verified 3 days ago",
      "comment": "Classic Dettol freshness. The best hygienic soap for family everyday bath."
    }
  ]
},

  {
  "id": "nearby-14",
  "name": "Surf Excel Easy Wash Detergent Powder",
  "shortName": "Surf Excel Powder 1kg",
  "brand": "Surf Excel",
  "pack": "1kg Pouch",
  "category": "popular-nearby",
  "tag": "LAUNDRY CARE",
  "price": 129,
  "originalPrice": 155,
  "discount": "17% OFF",
  "rating": 4.8,
  "ratingsCount": "72,800 Ratings",
  "reviewsCount": "10,600 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "12-14 Mins",
  "inStock": true,
  "assured": true,
  "description": "Super-powered cleaning crystals dissolve instantly in water to remove tough stains like oil, mud, curry, and ketchup without rigorous scrubbing, preserving clothes brightness.",
  "image": "/images/surfexcel-1.jpg",
  "images": [
    "/images/surfexcel-1.jpg",
    "/images/surfexcel-2.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "1kg Pouch",
      "price": 129,
      "orig": 155,
      "image": "/images/surfexcel-1.jpg"
    },
    {
      "name": "3kg Value Box",
      "price": 369,
      "orig": 440,
      "image": "/images/surfexcel-2.jpg"
    }
  ],
  "offers": [
    {
      "title": "Stain Free",
      "desc": "Save ₹26 on 1kg Easy Wash Pack"
    },
    {
      "title": "Laundry Rush",
      "desc": "Fast 12-minute pod delivery"
    }
  ],
  "highlights": [
    "Advanced stain-release enzymes penetrate deep to lift dried grease and food spills",
    "Produces rich lather that washes cleanly without leaving white chalky residue",
    "Superior color-care formula prevents fading across vibrant cottons and synthetics",
    "Effective in both bucket hand wash and semi-automatic washing machines",
    "Invigorating floral fragrance keeps laundry smelling fresh for days"
  ],
  "specs": [
    {
      "label": "Format",
      "val": "Fine Micro-Dissolving Granular Powder"
    },
    {
      "label": "Weight",
      "val": "1.0 kg Moisture Proof Bag"
    },
    {
      "label": "Machine Compatibility",
      "val": "Hand Wash & Semi-Automatic Machines"
    },
    {
      "label": "Formulation",
      "val": "Biodegradable Surfactants & Optical Brighteners"
    }
  ],
  "inTheBox": [
    "1x Surf Excel Easy Wash Detergent Powder 1kg Pack"
  ],
  "reviews": [
    {
      "author": "Geeta Raman",
      "stars": "★★★★★",
      "date": "Verified 2 days ago",
      "comment": "Takes out school uniform collar stains in one soak. Very quick delivery."
    }
  ]
},

  {
  "id": "nearby-15",
  "name": "Happilo 100% Natural California Raw Almonds (Badam)",
  "shortName": "Happilo Almonds 500g",
  "brand": "Happilo",
  "pack": "500g Pouch",
  "category": "popular-nearby",
  "tag": "HEALTHY NUTS",
  "price": 419,
  "originalPrice": 625,
  "discount": "33% OFF",
  "rating": 4.9,
  "ratingsCount": "44,600 Ratings",
  "reviewsCount": "6,700 Reviews",
  "badge": "15-Min Delivery",
  "deliveryTime": "11-13 Mins",
  "inStock": true,
  "assured": true,
  "description": "Premium jumbo size hand-picked California raw almonds packed with plant protein, heart-healthy Omega-3 fats, and Vitamin E. Vacuum nitrogen flushed for enduring crunchiness.",
  "image": "/images/dryfruits-1.jpg",
  "images": [
    "/images/dryfruits-1.jpg",
    "/images/goodday.jpg"
  ],
  "variantType": "weight",
  "variants": [
    {
      "name": "500g Pouch",
      "price": 419,
      "orig": 625,
      "image": "/images/dryfruits-1.jpg"
    },
    {
      "name": "200g Pack",
      "price": 189,
      "orig": 260,
      "image": "/images/dryfruits-1.jpg"
    }
  ],
  "offers": [
    {
      "title": "Super Nut Deal",
      "desc": "Flat ₹206 Off on 500g California Almonds"
    },
    {
      "title": "Healthy Habit",
      "desc": "Zero cholesterol, high dietary fiber"
    }
  ],
  "highlights": [
    "100% Genuine imported California nonpareil jumbo raw almonds",
    "Rich source of Vitamin E, magnesium, zinc and natural plant protein",
    "Aids heart health, muscle recovery, memory retention and skin radiance",
    "Resealable zip-lock nitrogen-flushed pouch maintains crispy bite",
    "Free from preservatives, trans fats, added salt or chemical polishing"
  ],
  "specs": [
    {
      "label": "Origin",
      "val": "California, United States of America"
    },
    {
      "label": "Grade",
      "val": "Supreme Nonpareil Jumbo Raw Kernels"
    },
    {
      "label": "Weight",
      "val": "500 Grams Resealable Zip Lock Pouch"
    },
    {
      "label": "Dietary",
      "val": "100% Vegan, Gluten Free & Non-GMO"
    }
  ],
  "inTheBox": [
    "1x Happilo Premium California Almonds 500g Resealable Pouch"
  ],
  "reviews": [
    {
      "author": "Dr. Vivek Deshmukh",
      "stars": "★★★★★",
      "date": "Verified 4 days ago",
      "comment": "Crispy, sweet, big almonds without any broken bitter pieces. Excellent quality."
    }
  ]
},
  // ==========================================
  // 12. BASKET ESSENTIALS (4 IMPULSE PRODUCTS)
  // ==========================================
  {
    id: "impulse-lemons",
    name: "Fresh Country Lemons (Nimbu)",
    shortName: "Fresh Lemons",
    brand: "Farm Fresh",
    pack: "4 pcs (100g)",
    category: "grocery",
    tag: "FARM FRESH",
    price: 15,
    originalPrice: 24,
    discount: "37% OFF",
    rating: 4.8,
    ratingsCount: "12,450 Ratings",
    reviewsCount: "1,830 Reviews",
    badge: "Top Pick",
    deliveryTime: "10-12 Mins",
    inStock: true,
    assured: true,
    description:
      "Farm fresh handpicked juicy country lemons (desi nimbu). High in Vitamin C, perfect for refreshing lemonade, cooking, and daily immunity.",
    image: "/images/lemons.jpg",
    images: ["/images/lemons.jpg"],
    variantType: "pack",
    variants: [
      { name: "4 pcs (100g)", price: 15, orig: 24, image: "/images/lemons.jpg" },
      { name: "10 pcs (250g Value Pack)", price: 35, orig: 55, image: "/images/lemons.jpg" },
      { name: "500g Bulk Pack", price: 65, orig: 99, image: "/images/lemons.jpg" }
    ],
    offers: [
      { title: "Flash Saver", desc: "Flat 37% off on daily kitchen essentials" },
      { title: "Darkstore Fresh", desc: "Packed and delivered chilled in 10-12 minutes" }
    ],
    highlights: [
      "Handpicked daily from verified Indian farms",
      "Rich in natural Vitamin C and bioflavonoids for strong immunity",
      "Thin peel with maximum juice yield per lemon",
      "100% natural, pesticide tested, ozone washed"
    ],
    specs: [
      { label: "Type", val: "Desi Country Lemons (Citrus Limon)" },
      { label: "Origin", val: "Indian Verified Farms" },
      { label: "Storage", val: "Store in refrigerator vegetable crisper" },
      { label: "Shelf Life", val: "7 Days from Delivery" }
    ],
    inTheBox: [
      "Fresh Country Lemons in ventilated breathable moisture-safe pouch"
    ],
    reviews: [
      {
        author: "Sunita M.",
        stars: "★★★★★",
        date: "Verified 1 day ago",
        comment: "Very juicy and fresh! Delivered in just 10 minutes."
      },
      {
        author: "Rohan D.",
        stars: "★★★★★",
        date: "Verified 3 days ago",
        comment: "Good quality, thin skin and lots of juice. Value for money."
      }
    ]
  },
  {
    id: "impulse-butter",
    name: "Amul Pasteurised Butter (Rich & Creamy Mini)",
    shortName: "Amul Table Butter",
    brand: "Amul",
    pack: "100g Bar",
    category: "grocery",
    tag: "DAILY DAIRY",
    price: 56,
    originalPrice: 60,
    discount: "7% OFF",
    rating: 4.9,
    ratingsCount: "34,200 Ratings",
    reviewsCount: "4,120 Reviews",
    badge: "Utterly Delicious",
    deliveryTime: "10-12 Mins",
    inStock: true,
    assured: true,
    description:
      "The iconic Utterly Butterly Delicious Amul Butter made from pure cow and buffalo milk. Pasteurised with a pinch of salt, ideal for toast, parathas, and baking.",
    image: "/images/butter-1.jpg",
    images: ["/images/butter-1.jpg"],
    variantType: "pack",
    variants: [
      { name: "100g Bar", price: 56, orig: 60, image: "/images/butter-1.jpg" },
      { name: "500g Tub", price: 265, orig: 285, image: "/images/butter-1.jpg" }
    ],
    offers: [
      { title: "Dairy Saver", desc: "Guaranteed cold chain delivery under 12 minutes" },
      { title: "Breakfast Combo", desc: "Pair with bread and get extra discount" }
    ],
    highlights: [
      "100% pure pasteurised butter prepared from fresh cream",
      "Signature golden-yellow color with iconic creamy taste",
      "Cold-chain insulated delivery to maintain temperature and texture",
      "No artificial colors, preservatives, or adulteration"
    ],
    specs: [
      { label: "Milk Fat", val: "Min 80%" },
      { label: "Moisture", val: "Max 16%" },
      { label: "Salt Content", val: "Approx 3%" },
      { label: "Storage", val: "Keep refrigerated at 4°C or below" }
    ],
    inTheBox: [
      "1x Amul Pasteurised Salted Butter (100g Foil Wrapped Bar in Carton)"
    ],
    reviews: [
      {
        author: "Pooja V.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "Came ice cold and fresh! Breakfast was ready in no time."
      },
      {
        author: "Nikhil K.",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment: "Original Amul quality. Perfect size for small households."
      }
    ]
  },
  {
    id: "impulse-tissues",
    name: "Soft Touch Facial Tissue Napkins (2-Ply Ultra Soft)",
    shortName: "Soft Touch Tissues",
    brand: "Soft Touch",
    pack: "100 Pulls Box",
    category: "dmart-packs",
    tag: "HYGIENE CARE",
    price: 48,
    originalPrice: 75,
    discount: "36% OFF",
    rating: 4.7,
    ratingsCount: "8,950 Ratings",
    reviewsCount: "1,210 Reviews",
    badge: "Value Pack",
    deliveryTime: "10-12 Mins",
    inStock: true,
    assured: true,
    description:
      "Ultra-soft and absorbent 2-ply virgin pulp facial tissues. Gentle on sensitive skin, lint-free, and ideal for desk, car, makeup removal, and dining.",
    image: "/images/cat-chargers.jpg",
    images: ["/images/cat-chargers.jpg"],
    variantType: "pack",
    variants: [
      { name: "100 Pulls Box", price: 48, orig: 75, image: "/images/cat-chargers.jpg" },
      { name: "Pack of 3 (300 Pulls)", price: 129, orig: 225, image: "/images/cat-chargers.jpg" }
    ],
    offers: [
      { title: "Household Saver", desc: "Buy Pack of 3 and save additional ₹25" },
      { title: "100% Virgin Pulp", desc: "Dermatologically safe and bleach-free" }
    ],
    highlights: [
      "Made from 100% natural virgin paper pulp",
      "2-ply interlocking structure for superior strength and quick absorption",
      "Gentle on delicate facial skin, non-irritating, optical brightener free",
      "Convenient top pop-up dispenser box"
    ],
    specs: [
      { label: "Ply", val: "2 Ply Extra Soft" },
      { label: "Sheet Count", val: "100 Pulls per Box" },
      { label: "Material", val: "100% Virgin Wood Pulp" },
      { label: "Use Case", val: "Facial Care, Car, Dining & Office Desk" }
    ],
    inTheBox: [
      "1x Soft Touch 2-Ply Facial Tissue Box (100 Pulls)"
    ],
    reviews: [
      {
        author: "Deepak S.",
        stars: "★★★★★",
        date: "Verified 4 days ago",
        comment: "Very soft and strong. Doesn't tear easily when wet."
      },
      {
        author: "Meera T.",
        stars: "★★★★★",
        date: "Verified 1 week ago",
        comment: "Great for work desk and car. Highly recommended."
      }
    ]
  },
  {
    id: "impulse-bread",
    name: "Britannia 100% Whole Wheat Bread (NutriChoice)",
    shortName: "Britannia Wheat Bread",
    brand: "Britannia",
    pack: "400g Fresh Loaf",
    category: "grocery",
    tag: "DAILY FRESH",
    price: 45,
    originalPrice: 50,
    discount: "10% OFF",
    rating: 4.8,
    ratingsCount: "16,800 Ratings",
    reviewsCount: "2,350 Reviews",
    badge: "Zero Maida",
    deliveryTime: "10-12 Mins",
    inStock: true,
    assured: true,
    description:
      "Crafted with 100% whole wheat flour without added maida. Soft, nourishing slices enriched with dietary fiber and essential minerals for healthy breakfasts.",
    image: "/images/goodday.jpg",
    images: ["/images/goodday.jpg"],
    variantType: "pack",
    variants: [
      { name: "400g Fresh Loaf", price: 45, orig: 50, image: "/images/goodday.jpg" },
      { name: "700g Family Pack", price: 78, orig: 90, image: "/images/goodday.jpg" }
    ],
    offers: [
      { title: "Fresh Bake Guarantee", desc: "Baked same day and dispatched directly from darkstore" },
      { title: "Toast Combo", desc: "Save ₹15 when bought with Amul Butter" }
    ],
    highlights: [
      "100% whole wheat grain flour with zero refined maida",
      "High source of dietary fiber supporting digestive wellness",
      "Soft and airy texture, perfect for sandwich making and toasting",
      "Baked fresh daily under hygienic FSSAI standards"
    ],
    specs: [
      { label: "Grain Type", val: "100% Whole Wheat (Atta)" },
      { label: "Maida Content", val: "0% Added Maida" },
      { label: "Shelf Life", val: "5 Days from Dispatch" },
      { label: "Storage", val: "Store in cool, dry place inside bread box" }
    ],
    inTheBox: [
      "1x Britannia 100% Whole Wheat Bread Loaf (400g Sliced Pack)"
    ],
    reviews: [
      {
        author: "Harish N.",
        stars: "★★★★★",
        date: "Verified 2 days ago",
        comment: "Super fresh loaf, soft slices and toasts nicely."
      },
      {
        author: "Shalini P.",
        stars: "★★★★★",
        date: "Verified 5 days ago",
        comment: "Healthy and genuine wheat bread. Great for daily breakfast."
      }
    ]
  },
  {
    id: "impulse-lemons",
    name: "Fresh Country Lemons (Nimbu)",
    shortName: "Fresh Country Lemons",
    brand: "SwiftFresh Organics",
    pack: "4 pcs (100g)",
    category: "grocery",
    tag: "FARM FRESH",
    price: 15,
    originalPrice: 24,
    discount: "37% OFF",
    rating: 4.8,
    ratingsCount: "14,210 Ratings",
    reviewsCount: "1,940 Reviews",
    badge: "15-Min Express",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description: "Farm-fresh juicy yellow lemons picked daily from local orchards. High in Vitamin C, perfect for fresh lemonade, cooking, and daily salads.",
    image: "/images/lemons.jpg",
    images: ["/images/lemons.jpg"],
    variantType: "pack",
    variants: [
      { name: "4 pcs (100g)", price: 15, orig: 24, image: "/images/lemons.jpg" },
      { name: "500g Value Pack", price: 65, orig: 95, image: "/images/lemons.jpg" }
    ],
    offers: [
      { title: "Wholesale Rate", desc: "SuperSaver farm direct pricing" },
      { title: "Fresh Guarantee", desc: "100% replacement if not juicy" }
    ],
    highlights: [
      "Handpicked daily from verified sustainable orchards",
      "100% natural, wax-free skin suitable for zest & culinary use",
      "Rich source of natural Vitamin C and immunity boosters",
      "Packed in hygienic breathable darkstore pods"
    ],
    specs: [
      { label: "Weight / Pack", val: "4 pcs (~100g)" },
      { label: "Origin", val: "India (Local Orchards)" },
      { label: "Storage Temp", val: "Store in cool, dry place or refrigerator" },
      { label: "Shelf Life", val: "7 Days" }
    ],
    inTheBox: ["4 x Fresh Country Lemons"],
    reviews: [
      { author: "Ramesh K.", stars: "★★★★★", date: "Verified 1 day ago", comment: "Very juicy lemons! Super fast delivery in 12 mins." },
      { author: "Pooja S.", stars: "★★★★★", date: "Verified 3 days ago", comment: "Fresh quality, no blemishes. Great value at ₹15." }
    ]
  },
  {
    id: "impulse-butter",
    name: "Amul Pasteurised Butter (Mini)",
    shortName: "Amul Butter Mini",
    brand: "Amul",
    pack: "100g Bar",
    category: "grocery",
    tag: "DAIRY FAVORITE",
    price: 56,
    originalPrice: 60,
    discount: "7% OFF",
    rating: 4.9,
    ratingsCount: "45,890 Ratings",
    reviewsCount: "6,120 Reviews",
    badge: "Bestseller",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description: "Utterly Butterly Delicious Amul Pasteurised Butter. Made from pure milk fat, ideal for hot parathas, toast, baking, and rich gravies.",
    image: "/images/butter-1.jpg",
    images: ["/images/butter-1.jpg"],
    variantType: "pack",
    variants: [
      { name: "100g Bar", price: 56, orig: 60, image: "/images/butter-1.jpg" },
      { name: "500g Value Pack", price: 275, orig: 290, image: "/images/butter-1.jpg" }
    ],
    offers: [
      { title: "DMart Rate Match", desc: "Wholesale dairy price guaranteed" }
    ],
    highlights: [
      "Made from 100% pure milk fat with iconic taste",
      "Pasteurised for microbial safety and long freshness",
      "Chilled darkstore cold-chain delivery in 15 mins",
      "Zero added artificial colors or preservatives"
    ],
    specs: [
      { label: "Weight", val: "100g" },
      { label: "Fat Content", val: "80% Milk Fat" },
      { label: "Dietary Info", val: "Vegetarian • Contains Milk" },
      { label: "Shelf Life", val: "12 Months refrigerated" }
    ],
    inTheBox: ["1 x 100g Amul Butter Bar"],
    reviews: [
      { author: "Sunil M.", stars: "★★★★★", date: "Verified 1 day ago", comment: "Delivered ice-cold in insulating pod! Perfect butter." },
      { author: "Anjali G.", stars: "★★★★★", date: "Verified 4 days ago", comment: "Classic Amul butter quality. Fast 10 min dispatch." }
    ]
  },
  {
    id: "impulse-tissues",
    name: "Soft Touch Facial Tissue Napkins",
    shortName: "Facial Tissue Box",
    brand: "DMart Saver",
    pack: "100 Pulls Box",
    category: "dmart-packs",
    tag: "HYGIENE",
    price: 48,
    originalPrice: 75,
    discount: "36% OFF",
    rating: 4.7,
    ratingsCount: "8,920 Ratings",
    reviewsCount: "1,150 Reviews",
    badge: "SuperSaver",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description: "Ultra-soft 2-ply virgin pulp facial tissues. Gentle on sensitive skin, highly absorbent, and lint-free for daily home, office, and car use.",
    image: "/images/cat-chargers.jpg",
    images: ["/images/cat-chargers.jpg"],
    variantType: "pack",
    variants: [
      { name: "100 Pulls Box", price: 48, orig: 75, image: "/images/cat-chargers.jpg" },
      { name: "Pack of 3 Boxes", price: 135, orig: 225, image: "/images/cat-chargers.jpg" }
    ],
    offers: [
      { title: "DMart Value Pack", desc: "Flat 36% OFF retail price" }
    ],
    highlights: [
      "Made from 100% natural virgin wood pulp fibers",
      "2-Ply extra absorbent structure, soft and non-irritating",
      "Lint-free paper quality suitable for makeup cleanup and facial care",
      "Compact easy-pull pop-up box design"
    ],
    specs: [
      { label: "Count", val: "100 Pulls (200 Sheets)" },
      { label: "Ply", val: "2-Ply Extra Soft" },
      { label: "Material", val: "100% Virgin Pulp Paper" },
      { label: "Country of Origin", val: "India" }
    ],
    inTheBox: ["1 x 100-Pull Facial Tissue Box"],
    reviews: [
      { author: "Vikram P.", stars: "★★★★★", date: "Verified 2 days ago", comment: "Very soft paper, great value at ₹48." },
      { author: "Meera K.", stars: "★★★★★", date: "Verified 6 days ago", comment: "Good quality tissue box for car and study desk." }
    ]
  },
  {
    id: "impulse-bread",
    name: "Britannia 100% Whole Wheat Bread",
    shortName: "Britannia Wheat Bread",
    brand: "Britannia",
    pack: "400g Fresh Loaf",
    category: "grocery",
    tag: "DAILY BAKERY",
    price: 45,
    originalPrice: 50,
    discount: "10% OFF",
    rating: 4.8,
    ratingsCount: "32,100 Ratings",
    reviewsCount: "4,200 Reviews",
    badge: "Daily Fresh",
    deliveryTime: "12-15 Mins",
    inStock: true,
    assured: true,
    description: "Daily baked 100% Whole Wheat Bread from Britannia. Baked with high fiber wheat flour, zero trans-fat, and zero added palm oil.",
    image: "/images/goodday.jpg",
    images: ["/images/goodday.jpg"],
    variantType: "pack",
    variants: [
      { name: "400g Loaf", price: 45, orig: 50, image: "/images/goodday.jpg" }
    ],
    offers: [
      { title: "Fresh Morning Bake", desc: "Dispatched from today's bakery batch" }
    ],
    highlights: [
      "Baked using 100% high-fiber whole wheat flour",
      "Zero trans-fat and zero artificial bleaching agents",
      "Soft texture ideal for sandwiches, toasts, and snacks",
      "Daily fresh darkstore inventory guarantee"
    ],
    specs: [
      { label: "Weight", val: "400g" },
      { label: "Flour Type", val: "100% Whole Wheat Atta" },
      { label: "Dietary Info", val: "High Fiber • Veg" },
      { label: "Shelf Life", val: "5 Days from Baking Date" }
    ],
    inTheBox: ["1 x 400g Britannia Wheat Bread Loaf"],
    reviews: [
      { author: "Harish N.", stars: "★★★★★", date: "Verified 2 days ago", comment: "Super fresh loaf, soft slices and toasts nicely." },
      { author: "Shalini P.", stars: "★★★★★", date: "Verified 5 days ago", comment: "Healthy and genuine wheat bread. Great for daily breakfast." }
    ]
  }
];

export const IMPULSE_ITEMS = [
  {
    id: "impulse-lemons",
    name: "Fresh Country Lemons (Nimbu)",
    pack: "4 pcs (100g)",
    price: 15,
    originalPrice: 24,
    discount: "37% OFF",
    image: "/images/lemons.jpg",
  },
  {
    id: "impulse-butter",
    name: "Amul Pasteurised Butter (Mini)",
    pack: "100g Bar",
    price: 56,
    originalPrice: 60,
    discount: "7% OFF",
    image: "/images/butter-1.jpg",
  },
  {
    id: "impulse-tissues",
    name: "Soft Touch Facial Tissue Napkins",
    pack: "100 Pulls Box",
    price: 48,
    originalPrice: 75,
    discount: "36% OFF",
    image: "/images/cat-chargers.jpg",
  },
  {
    id: "impulse-bread",
    name: "Britannia 100% Whole Wheat Bread",
    pack: "400g Fresh Loaf",
    price: 45,
    originalPrice: 50,
    discount: "10% OFF",
    image: "/images/goodday.jpg",
  },
];

export const PINCODES = [
  {
    code: "560103",
    area: "Bellandur & Outer Ring Road",
    city: "Bengaluru",
    speed: "12-15 Mins",
    active: true,
  },
  {
    code: "560034",
    area: "Koramangala 4th Block",
    city: "Bengaluru",
    speed: "10-12 Mins",
    active: false,
  },
  {
    code: "560038",
    area: "Indiranagar 100ft Road",
    city: "Bengaluru",
    speed: "12-15 Mins",
    active: false,
  },
  {
    code: "560102",
    area: "HSR Layout Sector 2",
    city: "Bengaluru",
    speed: "14-16 Mins",
    active: false,
  },
  {
    code: "400050",
    area: "Bandra West, Hill Road",
    city: "Mumbai",
    speed: "15-18 Mins",
    active: false,
  },
  {
    code: "110001",
    area: "Connaught Place",
    city: "New Delhi",
    speed: "15-20 Mins",
    active: false,
  },
];
