import React, { useState } from 'react'

const ProductInquiryFormFD = () => {
     // Form state
  const [formData, setFormData] = useState({
    // Contact Information
    fullName: '',
    companyName: '',
    position: '',
    email: '',
    phone: '',
    country: '',
    
    // Inquiry Details
    inquiryType: 'import', // default to import
    productCategory: '',
    specificProducts: '',
    quantity: '',
    quantityUnit: 'MT', // Metric Tons as default
    
    // Requirements
    certifications: [],
    packagingRequirements: '',
    targetMarket: '',
    priceRange: '',
    deliveryTimeframe: '',
    paymentTerms: '',
    additionalDetails: '',
    
    // Terms
    marketingConsent: false,
    termsAccepted: false
  });

  // Validation state
  const [errors, setErrors] = useState({});
  
  // Form submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Product categories
  const productCategories = [
    'Fruits & Vegetables',
    'Grains & Cereals',
    'Meat & Poultry',
    'Seafood',
    'Dairy Products',
    'Processed Foods',
    'Beverages',
    'Oils & Fats',
    'Nuts & Seeds',
    'Herbs & Spices',
    'Confectionery',
    'Organic Foods',
    'Frozen Foods',
    'Canned Foods',
    'Other'
  ];

  // Certification options
  const certificationOptions = [
    'HACCP',
    'ISO 22000',
    'BRC',
    'IFS',
    'FSSC 22000',
    'Organic',
    'Fair Trade',
    'Halal',
    'Kosher',
    'Non-GMO',
    'FDA Approved',
    'EU Approved'
  ];

  // Quantity units
  const quantityUnits = [
    'KG', // Kilograms
    'MT', // Metric Tons
    'LBS', // Pounds
    'Containers',
    'Pallets',
    'Cartons',
    'Pieces'
  ];

  // Countries list - abbreviated for simplicity
  const countries = [
    'United States', 'China', 'India', 'Brazil', 'Russia', 'United Kingdom', 
    'Germany', 'Japan', 'France', 'Italy', 'Canada', 'Australia', 'Spain',
    'Mexico', 'Indonesia', 'Netherlands', 'Saudi Arabia', 'Turkey', 'Switzerland',
    'United Arab Emirates', 'Other'
  ];
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'certifications') {
      // Handle multiple checkbox selections for certifications
      const updatedCertifications = [...formData.certifications];
      if (checked) {
        updatedCertifications.push(value);
      } else {
        const index = updatedCertifications.indexOf(value);
        if (index > -1) {
          updatedCertifications.splice(index, 1);
        }
      }
      
      setFormData({
        ...formData,
        certifications: updatedCertifications
      });
    } else {
      // Handle all other inputs
      const newValue = type === 'checkbox' ? checked : value;
      setFormData({
        ...formData,
        [name]: newValue
      });
    }
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name';
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your company name';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }
    
    if (!formData.country) {
      newErrors.country = 'Please select your country';
    }
    
    if (!formData.productCategory) {
      newErrors.productCategory = 'Please select a product category';
    }
    
    if (!formData.specificProducts.trim()) {
      newErrors.specificProducts = 'Please specify the products';
    }
    
    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Please specify the quantity';
    } else if (isNaN(formData.quantity)) {
      newErrors.quantity = 'Quantity must be a number';
    }
    
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      // In a real application, you would send the form data to a server here
      console.log('Product inquiry submitted:', formData);
      setIsSubmitted(true);
    }
  };
  
  // Reset form
  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      position: '',
      email: '',
      phone: '',
      country: '',
      inquiryType: 'import',
      productCategory: '',
      specificProducts: '',
      quantity: '',
      quantityUnit: 'MT',
      certifications: [],
      packagingRequirements: '',
      targetMarket: '',
      priceRange: '',
      deliveryTimeframe: '',
      paymentTerms: '',
      additionalDetails: '',
      marketingConsent: false,
      termsAccepted: false
    });
    setErrors({});
    setIsSubmitted(false);
  };
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 py-12  mt-15 rounded-lg shadow-md">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">Product Enquiry Form</h1>
        <p className="text-center text-gray-600 mt-2">Complete this form to enquire about our food import/export products and services</p>
      </div>
      
      {isSubmitted ? (
        <div className="text-center">
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded mb-6">
            <p className="font-medium text-lg mb-2">Thank you for your inquiry!</p>
            <p>Our team will review your request and get back to you within 48 hours with more information about the products you're interested in.</p>
          </div>
          <button 
            onClick={handleReset}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-200"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <div>
          {/* CONTACT INFORMATION SECTION */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b border-gray-200 pb-2">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>
              
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.companyName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                )}
              </div>
              
              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
                  Position/Title
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                  placeholder="Include country code"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              
              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.country ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* PRODUCT INQUIRY SECTION */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b border-gray-200 pb-2">Product Inquiry Details</h2>
            
            {/* Inquiry Type */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Inquiry Type
              </label>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="import"
                    name="inquiryType"
                    value="import"
                    checked={formData.inquiryType === 'import'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="import" className="ml-2 text-gray-700">
                    Import Products
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="export"
                    name="inquiryType"
                    value="export"
                    checked={formData.inquiryType === 'export'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="export" className="ml-2 text-gray-700">
                    Export Products
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="both"
                    name="inquiryType"
                    value="both"
                    checked={formData.inquiryType === 'both'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="both" className="ml-2 text-gray-700">
                    Both
                  </label>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Category */}
              <div>
                <label htmlFor="productCategory" className="block text-gray-700 font-medium mb-2">
                  Product Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="productCategory"
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.productCategory ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                >
                  <option value="">Select Category</option>
                  {productCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                {errors.productCategory && (
                  <p className="text-red-500 text-sm mt-1">{errors.productCategory}</p>
                )}
              </div>
              
              {/* Quantity and Unit */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.quantity ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                  />
                  {errors.quantity && (
                    <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="quantityUnit" className="block text-gray-700 font-medium mb-2">
                    Unit
                  </label>
                  <select
                    id="quantityUnit"
                    name="quantityUnit"
                    value={formData.quantityUnit}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    {quantityUnits.map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Specific Products */}
            <div className="mt-6">
              <label htmlFor="specificProducts" className="block text-gray-700 font-medium mb-2">
                Specific Products <span className="text-red-500">*</span>
              </label>
              <textarea
                id="specificProducts"
                name="specificProducts"
                value={formData.specificProducts}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.specificProducts ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
                placeholder="Please list the specific products you're interested in..."
                rows={3}
              />
              {errors.specificProducts && (
                <p className="text-red-500 text-sm mt-1">{errors.specificProducts}</p>
              )}
            </div>
          </div>
          
          {/* ADDITIONAL REQUIREMENTS SECTION */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b border-gray-200 pb-2">Additional Requirements</h2>
            
            {/* Certifications */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Required Certifications
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {certificationOptions.map(cert => (
                  <div key={cert} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`cert-${cert}`}
                      name="certifications"
                      value={cert}
                      checked={formData.certifications.includes(cert)}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={`cert-${cert}`} className="ml-2 text-gray-700 text-sm">
                      {cert}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Packaging Requirements */}
              <div>
                <label htmlFor="packagingRequirements" className="block text-gray-700 font-medium mb-2">
                  Packaging Requirements
                </label>
                <textarea
                  id="packagingRequirements"
                  name="packagingRequirements"
                  value={formData.packagingRequirements}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Specify any packaging requirements..."
                  rows={3}
                />
              </div>
              
              {/* Target Market */}
              <div>
                <label htmlFor="targetMarket" className="block text-gray-700 font-medium mb-2">
                  Target Market/Destination
                </label>
                <textarea
                  id="targetMarket"
                  name="targetMarket"
                  value={formData.targetMarket}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Where will these products be sold/used?"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Price Range */}
              <div>
                <label htmlFor="priceRange" className="block text-gray-700 font-medium mb-2">
                  Target Price Range
                </label>
                <input
                  type="text"
                  id="priceRange"
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Expected price range per unit"
                />
              </div>
              
              {/* Delivery Timeframe */}
              <div>
                <label htmlFor="deliveryTimeframe" className="block text-gray-700 font-medium mb-2">
                  Delivery Timeframe
                </label>
                <input
                  type="text"
                  id="deliveryTimeframe"
                  name="deliveryTimeframe"
                  value={formData.deliveryTimeframe}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="When do you need these products?"
                />
              </div>
            </div>
            
            {/* Payment Terms */}
            <div className="mt-6">
              <label htmlFor="paymentTerms" className="block text-gray-700 font-medium mb-2">
                Preferred Payment Terms
              </label>
              <input
                type="text"
                id="paymentTerms"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="LC, T/T, etc."
              />
            </div>
            
            {/* Additional Details */}
            <div className="mt-6">
              <label htmlFor="additionalDetails" className="block text-gray-700 font-medium mb-2">
                Additional Details or Questions
              </label>
              <textarea
                id="additionalDetails"
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Any other information that might be relevant..."
                rows={4}
              />
            </div>
          </div>
          
          {/* TERMS SECTION */}
          <div className="mb-6">
            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                id="marketingConsent"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                className="h-5 w-5 mt-1 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="marketingConsent" className="ml-2 text-gray-700 text-sm">
                I agree to receive updates and marketing communications about products and services related to my inquiry
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className={`h-5 w-5 mt-1 ${
                  errors.termsAccepted ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <label htmlFor="termsAccepted" className="ml-2 text-gray-700 text-sm">
                I agree to the <span className="text-blue-500 hover:underline cursor-pointer">Terms and Conditions</span>, <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy</span>, and acknowledge that my information will be processed in accordance with the privacy policy
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-500 text-sm mt-1 ml-7">{errors.termsAccepted}</p>
            )}
          </div>
          
          {/* Submit Button */}
          <div className="mt-8">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
            >
              Submit Inquiry
            </button>
            <p className="text-center text-gray-500 text-sm mt-3">
              Our team will respond to your inquiry within 48 business hours
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductInquiryFormFD
