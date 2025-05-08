import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products, onInquire, onProductSelect }) => {
  // Only use the first 4 products for featured section
  const featuredProducts = products.slice(0, 4);
  
  return (
    <section className="py-12 mt-15 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <p className="text-gray-600 mt-2">Explore our top-quality food products ready for import/export</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div 
              key={product.id}
              className="cursor-pointer"
              onClick={() => onProductSelect(product.id)}
            >
              <ProductCard
                product={product}
                onInquire={(e) => {
                  e.stopPropagation(); // Prevent the click from bubbling up
                  onInquire(product.id);
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button 
            className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-md transition-colors"
            onClick={() => {/* Add your navigation or action here */}}
            aria-label="View all products"
          >
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;