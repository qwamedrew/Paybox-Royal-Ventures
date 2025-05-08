import React, { useState } from 'react'
import { AlertCircle,CheckCircle,Info,X } from 'lucide-react';

const FeedbackErrorFD = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        productType: '',
        quantity: '',
        origin: '',
        destination: '',
        certifications: []
      });
      
      const [errors, setErrors] = useState({});
      const [submitting, setSubmitting] = useState(false);
      const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
      
      // Validation rules
      const validateForm = () => {
        const newErrors = {};
        
        // Company name validation
        if (!formData.companyName.trim()) {
          newErrors.companyName = 'Company name is required';
        }
        
        // Contact name validation
        if (!formData.contactName.trim()) {
          newErrors.contactName = 'Contact name is required';
        }
        
        // Email validation
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        
        // Phone validation
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[0-9\s\-()]{10,20}$/.test(formData.phone)) {
          newErrors.phone = 'Please enter a valid phone number';
        }
        
        // Product type validation
        if (!formData.productType) {
          newErrors.productType = 'Product type is required';
        }
        
        // Quantity validation
        if (!formData.quantity) {
          newErrors.quantity = 'Quantity is required';
        } else if (isNaN(formData.quantity) || Number(formData.quantity) <= 0) {
          newErrors.quantity = 'Please enter a valid quantity';
        }
        
        // Origin validation
        if (!formData.origin) {
          newErrors.origin = 'Country of origin is required';
        }
        
        // Destination validation
        if (!formData.destination) {
          newErrors.destination = 'Destination country is required';
        }
        
        return newErrors;
      };
      
      // Handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
        
        // Clear the specific error when user starts typing
        if (errors[name]) {
          setErrors({
            ...errors,
            [name]: null
          });
        }
      };
      
      // Handle checkbox changes for certifications
      const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        
        if (checked) {
          setFormData({
            ...formData,
            certifications: [...formData.certifications, value]
          });
        } else {
          setFormData({
            ...formData,
            certifications: formData.certifications.filter(cert => cert !== value)
          });
        }
      };
      
      // Handle form submission
      const handleSubmit = (e) => {
        if (e) e.preventDefault();
        
        // Validate form
        const newErrors = validateForm();
        setErrors(newErrors);
        
        // If no errors, submit form
        if (Object.keys(newErrors).length === 0) {
          setSubmitting(true);
          
          // Simulate API call
          setTimeout(() => {
            setSubmitting(false);
            
            // Simulate success (in real app, this would depend on API response)
            const success = Math.random() > 0.3; // 70% success rate for demo
            
            if (success) {
              setFormStatus('success');
              // Reset form after 3 seconds on success
              setTimeout(() => {
                setFormData({
                  companyName: '',
                  contactName: '',
                  email: '',
                  phone: '',
                  productType: '',
                  quantity: '',
                  origin: '',
                  destination: '',
                  certifications: []
                });
                setFormStatus(null);
              }, 3000);
            } else {
              setFormStatus('error');
            }
          }, 1500);
        }
      };
      
      // Clear notification
      const clearNotification = () => {
        setFormStatus(null);
      };
  return (
    <div className="max-w-3xl mx-auto p-6 mt-15 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Food Export/Import Application</h1>
    
    {/* Form Status Notifications */}
    {formStatus && (
      <FormNotification 
        type={formStatus} 
        message={formStatus === 'success' 
          ? 'Your application has been submitted successfully. Our team will contact you shortly.' 
          : 'There was an error submitting your application. Please try again later.'}
        onClose={clearNotification}
      />
    )}
    
    <div className="space-y-6">
      {/* Company Information Section */}
      <fieldset className="border rounded-md p-4">
        <legend className="text-lg font-medium text-gray-700 px-2">Company Information</legend>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Company Name */}
          <FormField
            label="Company Name"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            error={errors.companyName}
            required
          />
          
          {/* Contact Person */}
          <FormField
            label="Contact Person"
            name="contactName"
            type="text"
            value={formData.contactName}
            onChange={handleChange}
            error={errors.contactName}
            required
          />
          
          {/* Email */}
          <FormField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          
          {/* Phone */}
          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
            hint="Include country code (e.g., +1 555-123-4567)"
          />
        </div>
      </fieldset>
      
      {/* Product Information Section */}
      <fieldset className="border rounded-md p-4">
        <legend className="text-lg font-medium text-gray-700 px-2">Product Information</legend>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product Type */}
          <FormSelect
            label="Product Type"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            error={errors.productType}
            required
            options={[
              { value: "", label: "Select product type" },
              { value: "fresh_produce", label: "Fresh Produce" },
              { value: "frozen_foods", label: "Frozen Foods" },
              { value: "canned_goods", label: "Canned Goods" },
              { value: "dried_foods", label: "Dried Foods" },
              { value: "beverages", label: "Beverages" },
              { value: "spices", label: "Spices & Seasonings" },
              { value: "other", label: "Other" }
            ]}
          />
          
          {/* Quantity */}
          <FormField
            label="Quantity (kg)"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            error={errors.quantity}
            required
            min="1"
          />
          
          {/* Origin */}
          <FormField
            label="Country of Origin"
            name="origin"
            type="text"
            value={formData.origin}
            onChange={handleChange}
            error={errors.origin}
            required
          />
          
          {/* Destination */}
          <FormField
            label="Destination Country"
            name="destination"
            type="text"
            value={formData.destination}
            onChange={handleChange}
            error={errors.destination}
            required
          />
        </div>
        
        {/* Certifications */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Certifications (select all that apply)
          </label>
          <div className="space-y-2">
            <CheckboxField
              label="FDA Approved"
              name="certifications"
              value="fda"
              checked={formData.certifications.includes('fda')}
              onChange={handleCheckboxChange}
            />
            <CheckboxField
              label="Organic Certified"
              name="certifications"
              value="organic"
              checked={formData.certifications.includes('organic')}
              onChange={handleCheckboxChange}
            />
            <CheckboxField
              label="Fair Trade"
              name="certifications"
              value="fair_trade"
              checked={formData.certifications.includes('fair_trade')}
              onChange={handleCheckboxChange}
            />
            <CheckboxField
              label="HACCP Compliant"
              name="certifications"
              value="haccp"
              checked={formData.certifications.includes('haccp')}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </fieldset>
      
      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className={`px-6 py-2 rounded-md text-white font-medium 
            ${submitting 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'}`}
        >
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </div>
    
    {/* Form Completion Indicator */}
    <FormCompletionIndicator formData={formData} />
  </div>
);
}

// Form Field Component
const FormField = ({ label, name, type, value, onChange, error, required, hint, min }) => (
<div className="mb-1">
  <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
    {label} {required && <span className="text-red-500">*</span>}
  </label>
  <input
    type={type}
    id={name}
    name={name}
    value={value}
    onChange={onChange}
    min={min}
    className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 
      ${error ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' 
        : 'border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500'}`}
  />
  {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
  {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
</div>
);

// Select Field Component
const FormSelect = ({ label, name, value, onChange, error, required, options }) => (
<div className="mb-1">
  <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
    {label} {required && <span className="text-red-500">*</span>}
  </label>
  <select
    id={name}
    name={name}
    value={value}
    onChange={onChange}
    className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 
      ${error ? 'border-red-300 text-red-900 focus:outline-none focus:ring-red-500 focus:border-red-500' 
        : 'border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500'}`}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
  {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
</div>
);

// Checkbox Field Component
const CheckboxField = ({ label, name, value, checked, onChange }) => (
<div className="flex items-center">
  <input
    type="checkbox"
    id={`${name}-${value}`}
    name={name}
    value={value}
    checked={checked}
    onChange={onChange}
    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
  />
  <label htmlFor={`${name}-${value}`} className="ml-2 block text-sm text-gray-700">
    {label}
  </label>
</div>
);

// Form Notification Component
const FormNotification = ({ type, message, onClose }) => {
const bgColor = type === 'success' ? 'bg-green-50' : type === 'error' ? 'bg-red-50' : 'bg-blue-50';
const borderColor = type === 'success' ? 'border-green-400' : type === 'error' ? 'border-red-400' : 'border-blue-400';
const textColor = type === 'success' ? 'text-green-700' : type === 'error' ? 'text-red-700' : 'text-blue-700';

return (
  <div className={`rounded-md ${bgColor} p-4  mb-6 border ${borderColor}`}>
    <div className="flex">
      <div className="flex-shrink-0">
        {type === 'success' && <CheckCircle className={`h-5 w-5 ${textColor}`} />}
        {type === 'error' && <AlertCircle className={`h-5 w-5 ${textColor}`} />}
        {type === 'info' && <Info className={`h-5 w-5 ${textColor}`} />}
      </div>
      <div className="ml-3">
        <p className={`text-sm font-medium ${textColor}`}>{message}</p>
      </div>
      <div className="ml-auto pl-3">
        <div className="-mx-1.5 -my-1.5">
          <button
            onClick={onClose}
            className={`inline-flex rounded-md p-1.5 ${textColor} hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

// Inline Field Feedback Component
const InlineFieldFeedback = ({ type, message }) => {
if (!message) return null;

return (
  <div className={`mt-1 flex items-center text-sm ${type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
    {type === 'error' ? (
      <AlertCircle className="h-4 w-4 mr-1" />
    ) : (
      <CheckCircle className="h-4 w-4 mr-1" />
    )}
    <span>{message}</span>
  </div>
);
};

// Form Completion Indicator
const FormCompletionIndicator = ({ formData }) => {
// Calculate percentage of form completed
const totalFields = 8; // Required fields count
let completedFields = 0;

if (formData.companyName) completedFields++;
if (formData.contactName) completedFields++;
if (formData.email) completedFields++;
if (formData.phone) completedFields++;
if (formData.productType) completedFields++;
if (formData.quantity) completedFields++;
if (formData.origin) completedFields++;
if (formData.destination) completedFields++;

const completionPercentage = Math.round((completedFields / totalFields) * 100);

return (
  <div className="mt-8">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700">Form Completion</span>
      <span className="text-sm font-medium text-gray-700">{completionPercentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: `${completionPercentage}%` }}
      ></div>
    </div>
  </div>
);
};

export default FeedbackErrorFD
