import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Colors matching previous components
const colors = {
  green: "#4a7c59",
  brown: "#8b5e34",
  yellow: "#e6b325",
  wine: "#722f37",
  light: "#fafafa"
};

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Maria Rodriguez",
    position: "Purchasing Director",
    company: "European Gourmet Foods",
    location: "Spain",
    quote: "Global Harvest has transformed our specialty foods sourcing process. Their reliable logistics and quality control ensure our customers always receive the authentic flavors they expect. We've doubled our import volume in just two years of partnership.",
    rating: 5,
    image: "/api/placeholder/100/100"
  },
  {
    id: 2,
    name: "James Chen",
    position: "CEO",
    company: "Asian Market Distributors",
    location: "Singapore",
    quote: "Working with Global Harvest has allowed us to introduce unique products from around the world to the Asian market. Their regulatory expertise saved us countless hours navigating import requirements across different countries.",
    rating: 5,
    image: "/api/placeholder/100/100"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Supply Chain Manager",
    company: "Premium Organics Co.",
    location: "United States",
    quote: "The market intelligence provided by Global Harvest gave us the confidence to expand into new territories. Their end-to-end service, from producer selection to final delivery, has been exceptional for our organic food line.",
    rating: 4,
    image: "/api/placeholder/100/100"
  },
  {
    id: 4,
    name: "Ahmed Al-Farsi",
    position: "Operations Director",
    company: "Gulf Gourmet Importers",
    location: "UAE",
    quote: "Temperature-controlled shipping is critical for our business, and Global Harvest has never let us down. Their attention to detail and proactive communication make them our preferred partner for all specialty food imports.",
    rating: 5,
    image: "/api/placeholder/100/100"
  }
];

// Partner logos data
const partners = [
  { id: 1, name: "FreshFoods International", logo: "/api/placeholder/180/60" },
  { id: 2, name: "Global Shipping Partners", logo: "/api/placeholder/180/60" },
  { id: 3, name: "Premium Food Distributors", logo: "/api/placeholder/180/60" },
  { id: 4, name: "Organic Producers Alliance", logo: "/api/placeholder/180/60" },
  { id: 5, name: "European Food Safety Association", logo: "/api/placeholder/180/60" },
  { id: 6, name: "Asian Import Consortium", logo: "/api/placeholder/180/60" },
  { id: 7, name: "American Specialty Grocers", logo: "/api/placeholder/180/60" },
  { id: 8, name: "International Food Quality Institute", logo: "/api/placeholder/180/60" }
];

const TestimonialsAndPartners = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  // Render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        fill={index < rating ? colors.yellow : 'transparent'} 
        stroke={colors.yellow}
      />
    ));
  };
  
  return (
    <div className="py-20">
      {/* Testimonials Section */}
      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full" style={{ backgroundColor: colors.yellow }}>
            <span className="text-sm font-medium text-gray-800">Client Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.brown }}>
            What Our Partners Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We take pride in building long-lasting relationships with our clients around the world, helping them succeed in the global food marketplace.
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Image and info */}
              <div className="w-full md:w-1/3 p-8" style={{ backgroundColor: `${colors.green}15` }}>
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-1" style={{ color: colors.brown }}>
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">
                    {testimonials[activeTestimonial].position}
                  </p>
                  <p className="text-sm font-medium mb-3" style={{ color: colors.green }}>
                    {testimonials[activeTestimonial].company}
                  </p>
                  <div className="flex mb-2">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  <p className="text-xs text-gray-500">
                    {testimonials[activeTestimonial].location}
                  </p>
                </div>
              </div>
              
              {/* Right side - Quote */}
              <div className="w-full md:w-2/3 p-8 relative">
                <div className="absolute top-6 left-6 opacity-10" style={{ color: colors.green }}>
                  <Quote size={48} />
                </div>
                <div className="pt-8">
                  <p className="text-lg text-gray-700 italic mb-6 relative z-10">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  {/* Navigation controls */}
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={handlePrevTestimonial}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={handleNextTestimonial}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeTestimonial ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Partners Section */}
      <div style={{ backgroundColor: colors.light }}>
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: colors.brown }}>
              Trusted By Industry Leaders Worldwide
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're proud to partner with leading companies and organizations across the global food supply chain.
            </p>
          </div>
          
          {/* Partner logos grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Become a partner CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Interested in becoming a partner? Let's discuss how we can grow together.
            </p>
            <button 
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white transition-colors duration-300"
              style={{ backgroundColor: colors.wine }}
            >
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndPartners;
