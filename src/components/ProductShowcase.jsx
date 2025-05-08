import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import FeaturedProducts from "./FeaturedProduct";
import ProductDetails from "./ProductDetails";

import sheanut from "../assets/images/sheanut.png";
import pepper from "../assets/images/pepper.png";
import beans from "../assets/images/beans.png";
import potatoe from "../assets/images/potatoe.png";
import maize from "../assets/images/maize.jpg";
import yam from "../assets/images/yam.png";
import sheabutter from "../assets/images/sheabutter.png";
import sheabutter1 from "../assets/images/sheabutter1.png";
import sheabutter2 from "../assets/images/sheabutter2.png";
import sheanut1 from "../assets/images/sheanut1.png";
import sheanut3 from "../assets/images/sheanut3.png";
import sheanut2 from "../assets/images/sheanut2.png";
import cloves from "../assets/images/cloves.png";


// ✅ Same sampleProducts as before...
const sampleProducts = [
  {
    id: 1,
    name: "Shea Butter",
    image: sheabutter, // placeholder path
    category: "Oils",
    origin: "Ghana",
    price: 850,
    unit: "ton",
    inStock: true,
    minOrder: 10,
    description:
      "Premium-grade shea butter extracted from the nuts of the Vitellaria paradoxa tree, known for its rich texture and natural moisturizing properties. Ideal for use in cosmetics, skincare, and personal care formulations.",
    certifications: ["Organic", "Fair Trade", "Non-GMO"],
    specifications: {
      Appearance: "Creamy off-white to pale yellow",
      Texture: "Smooth and buttery at room temperature",
      "Moisture Content": "< 0.05%",
      "Free Fatty Acid": "<1.5%",
      "Peroxide Value": "10 meq O2/kg",
    },
    seasonality: "Harvested between May and August",
    shelfLife: "24 months when stored in a cool, dry place",
    packaging:
      "Available in 1kg, 5kg, 25kg containers or custom bulk packaging",
    images: [
      sheabutter1,
      sheabutter2,
      "/images/basmati-rice-3.jpg",
    ],
  },
  {
    id: 2,
    name: "Shea nuts ",
    image: sheanut,
    category: "Oils",
    origin: "Ghana",
    price: 100,
    unit: "ton",
    inStock: true,
    minOrder: 5,
    description:
      "Raw shea nuts sourced from the Vitellaria paradoxa tree, traditionally harvested and sun-dried to preserve their natural quality. Used as the primary raw material for shea butter production in cosmetic, pharmaceutical, and food industries.",
    certifications: ["Organic", "Fair Trade"],

    specifications: {
      Appearance: "Brown to dark brown with a hard shell",
      Texture: "Firm, dry exterior with an oily kernel inside",
      "Moisture Content": "< 10%",
      "Free Fatty Acid": "< 2%",
    },

    seasonality: "Harvested between May and August",
    shelfLife: "12 months when stored in a cool, dry place",
    packaging: "Available in 50kg jute bags or customized bulk packaging",
    images: [
      sheanut1,
      sheanut3,
      sheanut2,
    ],
  },
  {
    id: 3,
    name: "Yam",
    image: yam,
    category: "Tubers",
    origin: "Ghana",
    price: 150,
    unit: "ton",
    inStock: false,
    minOrder: 2,
    description:
      "Fresh, high-quality yams cultivated in nutrient-rich soils and harvested at peak maturity. Our yams are known for their starchy texture, earthy flavor, and long shelf life—ideal for both local consumption and export markets.",
    certifications: ["Organic", "GAP"],

    specifications: {
      Variety: "White yam (Dioscorea rotundata)",
      Apperance: "Brown, rough-skinned tuber with white to off-white flesh",
      Texture: "Brown, rough-skinned tuber with white to off-white flesh",
      "Moisture Content": "< 75%",
      Maturity: "Fully matured, export-grade",
    },
    seasonality: "Harvested between October and March",
    shelfLife: "4 to 6 months under proper storage conditions",
    packaging:
      "Available in 25kg and 50kg mesh or jute bags; customizable bulk packaging on request",
    images: ["/images/yam-1.jpg", "/images/yam-2.jpg", "/images/yam-3.jpg"],
  },

  {
    id: 4,
    name: "Sweet Potatoe",
    image: potatoe,
    category: "Tubers",
    origin: "Ghana",
    price: null, // Price upon request
    unit: "kg",
    inStock: true,
    minOrder: 500,
    description:
      "Fresh, premium-grade potatoes cultivated using sustainable farming practices. Known for their versatility, smooth skin, and firm texture, our potatoes are ideal for both household consumption and industrial processing.",
    certifications: ["GlobalG.A.P.", "Organic", "Non-GMO"],
    specifications: {
      Variety: "White and Red potato varieties available",
      Appearance:
        "Smooth or slightly rough skin; cream to yellow or red outer skin with white to yellow flesh",
      Texture: "Firm and moist; holds shape well during cooking",
      Size: "50–120 mm in diameter (sorted by grade)",
      "Dry Matter": "18–22%",
      "Moisture Content": "< 80%",
      Maturity: "Fully matured; export-grade quality",
    },
    seasonality: "Available year-round (peak harvest from April to August)",
    shelfLife: "2 to 4 months in cool, dry storage",
    packaging:
      "Available in 10kg, 25kg, and 50kg mesh or jute bags; custom packaging upon request",
    images: [
      "/images/potato-1.jpg",
      "/images/potato-2.jpg",
      "/images/potato-3.jpg",
    ],
  },

  {
    id: 5,
    name: "Maize",
    image: maize,
    category: "Cerals",
    origin: "Ghana",
    price: null, // Price upon request
    unit: "kg",
    inStock: true,
    minOrder: 500,
    description:
      "High-quality dried maize (corn) sourced from carefully managed farms and processed to meet international food and feed standards. Our maize is known for its uniform kernel size, high starch content, and low moisture levels.",
    certifications: ["Organic", "Non-GMO", "GAP "],
    specifications: {
      Type: "Yellow Maize (Zea mays)",
      Appearance: "Golden yellow, clean, and well-dried whole kernels",
      Texture: "Hard and dry with uniform grain size",
      "Moisture Content": "< 13%",
      "Foreign Matter": "< 1%",
      "Broken Kernels": "< 5%",
      "Aflatoxin Level": "< 20 ppb (within safe limits)",
    },
    seasonality: "Harvested between September and December",
    shelfLife: "12 to 18 months under proper storage conditions",
    packaging:
      "Available in 25kg, 50kg polypropylene bags or customized bulk packaging",
    images: [
      "/images/maize-1.jpg",
      "/images/maize-2.jpg",
      "/images/maize-3.jpg",
    ],
  },

  {
    id: 6,
    name: "Beans",
    image: beans,
    category: "Cerals",
    origin: "Ghana",
    price: null, // Price upon request
    unit: "kg",
    inStock: true,
    minOrder: 500,
    escription:
      "High-quality dried beans sourced from trusted farms and processed under hygienic conditions to maintain purity, nutritional value, and shelf stability. Ideal for cooking, canning, or use in a variety of food applications.",
    certifications: ["Organic", "Non-GMO", "GAP (Good Agricultural Practices)"],
    specifications: {
      Variety: "White beans (Navy beans) / Brown beans (Olotu / Honey beans)",
      Appearance: "Uniform color, smooth skin, whole unbroken seeds",
      Texture: "Firm and dry; softens evenly when cooked",
      "Moisture Content": "< 13%",
      "Foreign Matter": "< 1%",
      "Broken Beans": "< 5%",
      Purity: "≥ 98%",
    },
    seasonality: "Harvested between November and February",
    shelfLife: "12 to 18 months when stored in a cool, dry environment",
    packaging:
      "Available in 25kg and 50kg woven or jute bags; custom packaging available on request",
    images: [
      "/images/beans-1.jpg",
      "/images/beans-2.jpg",
      "/images/beans-3.jpg",
    ],
  },

  {
    id: 7,
    name: "Pepper",
    image: pepper,
    category: "Species",
    origin: "Ghana",
    price: null, // Price upon request
    unit: "kg",
    inStock: true,
    minOrder: 500,
    description:
      "Premium-grade dried chili peppers cultivated in optimal climates and sun-dried to preserve flavor, color, and pungency. Widely used in culinary applications, spice blends, and food processing industries for their heat and vibrant red hue.",
    certifications: ["Organic", "Non-GMO", "GAP "],
    specifications: {
      Variety:
        "Bird’s Eye Chili / Cayenne / Scotch Bonnet (available upon request)",
      Appearance: "Whole dried pods, bright red to deep burgundy in color",
      Texture: "Crisp and dry with minimal wrinkling",
      "Moisture Content": "< 12%",
      "Pungency (Scoville Units)":
        "30,000 – 100,000 SHU (depending on variety)",
      "Foreign Matter": "< 1%",
      "Broken/Cracked Pods": "< 5%",
    },
    seasonality: "Harvested between October and January",
    shelfLife: "12 to 24 months when stored in a cool, dry place",
    packaging:
      "Available in 5kg, 10kg, and 25kg food-grade polyethylene or jute bags; custom packaging available",
    images: [
      "/images/pepper-1.jpg",
      "/images/pepper-2.jpg",
      "/images/pepper-3.jpg",
    ],
  },

  {
    id: 8,
    name: "Cloves",
    image: cloves,
    category: "Species",
    origin: "Ghana",
    price: null, // Price upon request
    unit: "kg",
    inStock: true,
    minOrder: 500,
    description:
      "Aromatic, hand-picked dried cloves sourced from premium farms. Known for their strong flavor, essential oil content, and preservative properties, our cloves are ideal for use in culinary, pharmaceutical, and cosmetic applications.",
    certifications: ["Organic", "Non-GMO", "Fair Trade"],
    specifications: {
      Variety: "Whole Dried Cloves",
      Appearance: "Dark brown, uniform size, with intact heads and stems",
      Texture: "Dry and slightly brittle with high oil content",
      "Moisture Content": "< 12%",
      "Headless Cloves": "< 5%",
      "Foreign Matter": "< 0.5%",
      "Volatile Oil Content": "≥ 15%",
    },
    seasonality: "Harvested between September and November",
    shelfLife: "24 months when stored in cool, dry conditions",
    packaging:
      "Available in 5kg, 10kg, and 25kg bags (jute or vacuum-sealed options); custom packaging available",
    images: [
      "/images/cloves-1.jpg",
      "/images/cloves-2.jpg",
      "/images/cloves-3.jpg",
    ],
  },
];

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleInquire = (productId) => {
    alert(`Inquiry for product ID: ${productId}`);
  };

  const handleProductSelect = (productId) => {
    setSelectedProduct(productId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedProduct) {
    const product = sampleProducts.find((p) => p.id === selectedProduct);
    return (
      <ProductDetails
        product={product}
        onInquire={handleInquire}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="space-y-12">
      <FeaturedProducts
        products={sampleProducts}
        onInquire={handleInquire}
        onProductSelect={handleProductSelect}
      />
      <div className="bg-white py-8">
        <h2 className="text-xl font-bold mb-4 text-center">
          Product Catalog
        </h2>
        <ProductGrid
          products={sampleProducts}
          onInquire={handleInquire}
          onProductSelect={handleProductSelect}
        />
      </div>
    </div>
  );
};

export default ProductShowcase;
