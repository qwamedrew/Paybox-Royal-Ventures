import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';

// Colors matching previous component
const colors = {
  green: "#4a7c59",
  brown: "#8b5e34",
  yellow: "#e6b325",
  wine: "#722f37",
  light: "#fafafa"
};

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    origin: "India",
    category: "Grains",
    price: 24.99,
    rating: 4.8,
    image: "/api/placeholder/400/300",
    featured: true
  },
  {
    id: 2,
    name: "Organic Olive Oil",
    origin: "Spain",
    category: "Oils",
    price: 19.95,
    rating: 4.9,
    image: "/api/placeholder/400/300",
    featured: true
  },
  {
    id: 3,
    name: "Specialty Coffee Beans",
    origin: "Colombia",
    category: "Beverages",
    price: 15.50,
    rating: 4.7,
    image: "/api/placeholder/400/300",
    featured: true
  },
  {
    id: 4,
    name: "Japanese Matcha Powder",
    origin: "Japan",
    category: "Tea",
    price: 29.99,
    rating: 4.6,
    image: "/api/placeholder/400/300",
    featured: true
  },
  {
    id: 5,
    name: "Italian Truffle Oil",
    origin: "Italy",
    category: "Specialty",
    price: 34.95,
    rating: 4.9,
    image: "/api/placeholder/400/300",
    featured: true
  },
  {
    id: 6,
    name: "Belgian Chocolate",
    origin: "Belgium",
    category: "Confectionery",
    price: 12.99,
    rating: 4.8,
    image: "/api/placeholder/400/300",
    featured: true
  }
];

const ProductCG = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [view, setView] = useState('carousel'); // 'carousel' or 'grid'
  
  // Number of products to show at once in carousel view
  const productsToShow = 3;
  
  // Handle navigation
  const handlePrev = () => {
    setStartIndex(prev => (prev === 0 ? products.length - productsToShow : prev - 1));
  };
  
  const handleNext = () => {
    setStartIndex(prev => (prev + productsToShow >= products.length ? 0 : prev + 1));
  };
  
  // Get visible products for carousel
  const visibleProducts = () => {
    const result = [];
    for (let i = 0; i < productsToShow; i++) {
      const index = (startIndex + i) % products.length;
      result.push(products[index]);
    }
    return result;
  };
  
  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: colors.yellow, color: '#333' }}>
          {product.origin}
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-bold text-lg mb-2" style={{ color: colors.brown }}>{product.name}</h3>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-1">
            <Star size={16} fill={colors.yellow} stroke={colors.yellow} />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="font-bold" style={{ color: colors.green }}>${product.price}</span>
        </div>
        
        <button 
          className="w-full py-2 rounded flex items-center justify-center font-medium mt-2 text-white transition-colors duration-300"
          style={{ backgroundColor: colors.green }}
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
  
  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        {/* Header with View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: colors.brown }}>Featured Products</h2>
            <p className="text-gray-600 max-w-lg">Discover our premium selection of globally sourced delicacies and ingredients.</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <div className="mr-4 flex border rounded overflow-hidden">
              <button 
                className={`px-4 py-2 text-sm font-medium ${view === 'carousel' ? 'bg-gray-200' : 'bg-white'}`}
                onClick={() => setView('carousel')}
              >
                Carousel
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium ${view === 'grid' ? 'bg-gray-200' : 'bg-white'}`}
                onClick={() => setView('grid')}
              >
                Grid
              </button>
            </div>
            
            {view === 'carousel' && (
              <div className="flex space-x-2">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full border hover:bg-gray-100 transition-colors duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full border hover:bg-gray-100 transition-colors duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Products Display */}
        {view === 'carousel' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleProducts().map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        {/* View All Link */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            style={{ backgroundColor: colors.yellow, color: '#333' }}
          >
            View All Products
            <ChevronRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCG;