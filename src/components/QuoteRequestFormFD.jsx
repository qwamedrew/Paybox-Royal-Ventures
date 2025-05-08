import React, { useState } from 'react'

const QuoteRequestFormFD = () => {
      // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    description: '',
    preferredContact: 'email',
    termsAccepted: false
  });

  // Validation state
  const [errors, setErrors] = useState({});
  
  // Form submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Service types options
  const serviceTypes = [
    'Website Development',
    'Mobile App Development',
    'UI/UX Design',
    'Branding',
    'Digital Marketing',
    'Consulting',
    'Other'
  ];

  // Timeline options
  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    'More than 3 months',
    'Not sure yet'
  ];
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData({
      ...formData,
      [name]: newValue
    });
    
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
      newErrors.fullName = 'Please enter your full name';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but if provided, must be valid)
    if (formData.phone.trim() && !/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Required service type
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }
    
    // Required description
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project requirements';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Please provide more details (at least 20 characters)';
    }
    
    // Terms acceptance
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
      console.log('Quote request submitted:', formData);
      setIsSubmitted(true);
    }
  };
  
  // Reset form
  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      budget: '',
      timeline: '',
      description: '',
      preferredContact: 'email',
      termsAccepted: false
    });
    setErrors({});
    setIsSubmitted(false);
  };
  return (
    <div className="max-w-2xl mx-auto bg-white p-8  mt-15 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Request a Quote</h1>
    
    {isSubmitted ? (
      <div className="text-center">
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded mb-6">
          <p className="font-medium text-lg mb-2">Thank you for your quote request!</p>
          <p>We've received your information and will get back to you within 24-48 hours with a detailed quote.</p>
        </div>
        <button 
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-200"
        >
          Submit Another Request
        </button>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label 
            htmlFor="fullName" 
            className="block text-gray-700 font-medium mb-2"
          >
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
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        
        {/* Email */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-gray-700 font-medium mb-2"
          >
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
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        
        {/* Phone */}
        <div>
          <label 
            htmlFor="phone" 
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
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
            placeholder="(123) 456-7890"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        
        {/* Company */}
        <div>
          <label 
            htmlFor="company" 
            className="block text-gray-700 font-medium mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Your Company"
          />
        </div>
        
        {/* Service Type */}
        <div>
          <label 
            htmlFor="serviceType" 
            className="block text-gray-700 font-medium mb-2"
          >
            Service Type <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.serviceType ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          >
            <option value="">Select a service</option>
            {serviceTypes.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
          )}
        </div>
        
        {/* Budget */}
        <div>
          <label 
            htmlFor="budget" 
            className="block text-gray-700 font-medium mb-2"
          >
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Select a budget range</option>
            <option value="Less than $5,000">Less than $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
            <option value="$50,000+">$50,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        
        {/* Timeline */}
        <div className="md:col-span-2">
          <label 
            htmlFor="timeline" 
            className="block text-gray-700 font-medium mb-2"
          >
            Project Timeline
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {timelineOptions.map(option => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`timeline-${option}`}
                  name="timeline"
                  value={option}
                  checked={formData.timeline === option}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`timeline-${option}`} className="ml-2 text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Project Description */}
        <div className="md:col-span-2">
          <label 
            htmlFor="description" 
            className="block text-gray-700 font-medium mb-2"
          >
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="Please describe your project requirements, goals, and any specific features you need..."
            rows={5}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
        
        {/* Preferred Contact Method */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-2">
            Preferred Contact Method
          </label>
          <div className="flex space-x-6">
            <div className="flex items-center">
              <input
                type="radio"
                id="contact-email"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="contact-email" className="ml-2 text-gray-700">
                Email
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="contact-phone"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === 'phone'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="contact-phone" className="ml-2 text-gray-700">
                Phone
              </label>
            </div>
          </div>
        </div>
        
        {/* Terms and Conditions */}
        <div className="md:col-span-2 mt-2">
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
            <label htmlFor="termsAccepted" className="ml-2 text-gray-700">
              I agree to the <span className="text-blue-500 hover:underline cursor-pointer">Terms and Conditions</span> and <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy</span>
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>
          )}
        </div>
        
        {/* Submit Button */}
        <div className="md:col-span-2 mt-6">
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
          >
            Submit Quote Request
          </button>
        </div>
      </div>
    )}
  </div>
);
}

export default QuoteRequestFormFD
