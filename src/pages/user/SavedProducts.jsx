import React from "react";
import { ShoppingBag, Heart } from "lucide-react";

const SavedProducts = ({ savedProducts, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Saved Products</h2>
        <p className="text-gray-500 mt-1">
          Your favorite products for quick reordering
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {savedProducts.map((product, index) => (
          <div key={index} className="p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-gray-800">{product.name}</h3>
                <div className="mt-1 text-sm text-gray-500">
                  <span>Category: {product.category}</span>
                  <span className="mx-2">•</span>
                  <span>Origin: {product.origin}</span>
                </div>
                <div className="mt-2">
                  <span className="font-medium text-gray-900">{product.price}</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <button 
                  onClick={() => addToCart({
                    name: product.name,
                    price: product.price,
                    category: product.category
                  })}
                  className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  <ShoppingBag size={16} />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors">
                  <Heart size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-50 rounded-b-lg">
        <button className="w-full py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors">
          Browse Catalog
        </button>
      </div>
    </div>
  );
};

export default SavedProducts;