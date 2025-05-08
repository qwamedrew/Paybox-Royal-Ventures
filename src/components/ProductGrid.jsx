import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onInquire, onProductSelect }) => {
  const [layout, setLayout] = useState('grid'); // 'grid' or 'list'

  return (
    <div className="container mx-auto p-4">
      {/* Layout Control */}
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
              layout === 'grid'
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setLayout('grid')}
            aria-pressed={layout === 'grid'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
              layout === 'list'
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setLayout('list')}
            aria-pressed={layout === 'list'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Products */}
      {products.length > 0 ? (
        layout === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <div 
                key={product.id}
                className="cursor-pointer"
                onClick={() => onProductSelect(product.id)}
              >
                <ProductCard 
                  product={product} 
                  layout={layout}
                  onInquire={(e) => {
                    e.stopPropagation(); // Prevent the click from bubbling up
                    onInquire(product.id);
                  }}  
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {products.map(product => (
              <div 
                key={product.id}
                className="cursor-pointer"
                onClick={() => onProductSelect(product.id)}
              >
                <ProductCard 
                  product={product} 
                  layout={layout}
                  onInquire={(e) => {
                    e.stopPropagation(); // Prevent the click from bubbling up
                    onInquire(product.id);
                  }}  
                />
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="text-center text-gray-500">
          <p>No products available</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;