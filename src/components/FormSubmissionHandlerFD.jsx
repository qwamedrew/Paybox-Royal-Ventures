import React from 'react'
 // State for form tabs
 const [activeTab, setActiveTab] = useState('import');
  
 // Import form state
 const [importForm, setImportForm] = useState({
   companyName: '',
   contactName: '',
   email: '',
   phone: '',
   productType: '',
   quantity: '',
   originCountry: '',
   estimatedArrival: '',
   specialRequirements: '',
   agreeTerm: false
 });
 
 // Export form state
 const [exportForm, setExportForm] = useState({
   companyName: '',
   contactName: '',
   email: '',
   phone: '',
   productType: '',
   quantity: '',
   destinationCountry: '',
   expectedShipDate: '',
   packagingRequirements: '',
   agreeTerm: false
 });
 
 // Form validation state
 const [errors, setErrors] = useState({});
 
 // Success notification state
 const [showSuccess, setShowSuccess] = useState(false);
 const [successMessage, setSuccessMessage] = useState('');
 
 // Handle import form changes
 const handleImportChange = (e) => {
   const { name, value, type, checked } = e.target;
   setImportForm({
     ...importForm,
     [name]: type === 'checkbox' ? checked : value
   });
   
   // Clear error when field is edited
   if (errors[name]) {
     setErrors({
       ...errors,
       [name]: null
     });
   }
 };
 
 // Handle export form changes
 const handleExportChange = (e) => {
   const { name, value, type, checked } = e.target;
   setExportForm({
     ...exportForm,
     [name]: type === 'checkbox' ? checked : value
   });
   
   // Clear error when field is edited
   if (errors[name]) {
     setErrors({
       ...errors,
       [name]: null
     });
   }
 };
 
 // Validate form
 const validateForm = (formData) => {
   const newErrors = {};
   
   // Required fields validation
   Object.keys(formData).forEach(key => {
     if (key === 'agreeTerm' && !formData[key]) {
       newErrors[key] = 'You must agree to the terms and conditions';
     } else if (key !== 'specialRequirements' && key !== 'packagingRequirements' && key !== 'agreeTerm' && !formData[key]) {
       newErrors[key] = 'This field is required';
     }
   });
   
   // Email validation
   if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
     newErrors.email = 'Please enter a valid email address';
   }
   
   // Phone validation
   if (formData.phone && !/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
     newErrors.phone = 'Please enter a valid phone number';
   }
   
   // Quantity validation
   if (formData.quantity && isNaN(Number(formData.quantity))) {
     newErrors.quantity = 'Quantity must be a number';
   }
   
   setErrors(newErrors);
   return Object.keys(newErrors).length === 0;
 };
 
 // Handle import form submission
 const handleImportSubmit = (e) => {
   e.preventDefault();
   
   if (validateForm(importForm)) {
     // Here you would normally send the data to your API
     console.log('Submitting import form data:', importForm);
     
     // Show success message
     setSuccessMessage('Import request submitted successfully!');
     setShowSuccess(true);
     
     // Reset form after submission
     setTimeout(() => {
       setImportForm({
         companyName: '',
         contactName: '',
         email: '',
         phone: '',
         productType: '',
         quantity: '',
         originCountry: '',
         estimatedArrival: '',
         specialRequirements: '',
         agreeTerm: false
       });
       setShowSuccess(false);
     }, 3000);
   }
 };
 
 // Handle export form submission
 const handleExportSubmit = (e) => {
   e.preventDefault();
   
   if (validateForm(exportForm)) {
     // Here you would normally send the data to your API
     console.log('Submitting export form data:', exportForm);
     
     // Show success message
     setSuccessMessage('Export request submitted successfully!');
     setShowSuccess(true);
     
     // Reset form after submission
     setTimeout(() => {
       setExportForm({
         companyName: '',
         contactName: '',
         email: '',
         phone: '',
         productType: '',
         quantity: '',
         destinationCountry: '',
         expectedShipDate: '',
         packagingRequirements: '',
         agreeTerm: false
       });
       setShowSuccess(false);
     }, 3000);
   }
 };
const FormSubmissionHandlerFD = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">Import/Export Services</h1>
      
      {/* Success Notification */}
      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      
      {/* Form Tabs */}
      <div className="flex mb-4 border-b">
        <button
          className={`px-4 py-2 font-medium text-sm focus:outline-none ${activeTab === 'import' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
          onClick={() => setActiveTab('import')}
        >
          Import Request
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm focus:outline-none ${activeTab === 'export' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
          onClick={() => setActiveTab('export')}
        >
          Export Request
        </button>
      </div>
      
      {/* Import Form */}
      {activeTab === 'import' && (
        <div className="space-y-4" onSubmit={handleImportSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="importCompanyName" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                id="importCompanyName"
                name="companyName"
                value={importForm.companyName}
                onChange={handleImportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
            </div>
            
            <div>
              <label htmlFor="importContactName" className="block text-sm font-medium text-gray-700">Contact Name</label>
              <input
                type="text"
                id="importContactName"
                name="contactName"
                value={importForm.contactName}
                onChange={handleImportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.contactName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.contactName && <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>}
            </div>
            
            <div>
              <label htmlFor="importEmail" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="importEmail"
                name="email"
                value={importForm.email}
                onChange={handleImportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="importPhone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="importPhone"
                name="phone"
                value={importForm.phone}
                onChange={handleImportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            
            <div>
              <label htmlFor="importProductType" className="block text-sm font-medium text-gray-700">Product Type</label>
              <select
                id="importProductType"
                name="productType"
                value={importForm.productType}
                onChange={handleImportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.productType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value="">Select product type</option>
                <option value="electronics">Electronics</option>
                <option value="textiles">Textiles</option>
                <option value="food">Food & Beverages</option>
                <option value="machinery">Machinery</option>
                <option value="chemicals">Chemicals</option>
                <option value="other">Other</option>
              </select>
              {errors.productType && <p className="mt-1 text-sm text-red-600">{errors.productType}</p>}
            </div>
            
            <div>
              <label htmlFor="importQuantity" className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="text"
                id="importQuantity"
                name="quantity"
                value={importForm.quantity}
                onChange={handleImportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>}
            </div>
            
            <div>
              <label htmlFor="importOriginCountry" className="block text-sm font-medium text-gray-700">Origin Country</label>
              <input
                type="text"
                id="importOriginCountry"
                name="originCountry"
                value={importForm.originCountry}
                onChange={handleImportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.originCountry ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.originCountry && <p className="mt-1 text-sm text-red-600">{errors.originCountry}</p>}
            </div>
            
            <div>
              <label htmlFor="importEstimatedArrival" className="block text-sm font-medium text-gray-700">Estimated Arrival Date</label>
              <input
                type="date"
                id="importEstimatedArrival"
                name="estimatedArrival"
                value={importForm.estimatedArrival}
                onChange={handleImportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.estimatedArrival ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.estimatedArrival && <p className="mt-1 text-sm text-red-600">{errors.estimatedArrival}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="importSpecialRequirements" className="block text-sm font-medium text-gray-700">Special Requirements</label>
            <textarea
              id="importSpecialRequirements"
              name="specialRequirements"
              rows="3"
              value={importForm.specialRequirements}
              onChange={handleImportChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="importAgreeTerm"
                name="agreeTerm"
                type="checkbox"
                checked={importForm.agreeTerm}
                onChange={handleImportChange}
                className={`focus:ring-blue-500 h-4 w-4 text-blue-600 border ${errors.agreeTerm ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="importAgreeTerm" className="font-medium text-gray-700">I agree to the terms and conditions</label>
              {errors.agreeTerm && <p className="mt-1 text-sm text-red-600">{errors.agreeTerm}</p>}
            </div>
          </div>
          
          <div>
            <button
              onClick={handleImportSubmit}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Import Request
            </button>
          </div>
        </div>
      )}
      
      {/* Export Form */}
      {activeTab === 'export' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="exportCompanyName" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                id="exportCompanyName"
                name="companyName"
                value={exportForm.companyName}
                onChange={handleExportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
            </div>
            
            <div>
              <label htmlFor="exportContactName" className="block text-sm font-medium text-gray-700">Contact Name</label>
              <input
                type="text"
                id="exportContactName"
                name="contactName"
                value={exportForm.contactName}
                onChange={handleExportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.contactName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.contactName && <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>}
            </div>
            
            <div>
              <label htmlFor="exportEmail" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="exportEmail"
                name="email"
                value={exportForm.email}
                onChange={handleExportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="exportPhone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="exportPhone"
                name="phone"
                value={exportForm.phone}
                onChange={handleExportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            
            <div>
              <label htmlFor="exportProductType" className="block text-sm font-medium text-gray-700">Product Type</label>
              <select
                id="exportProductType"
                name="productType"
                value={exportForm.productType}
                onChange={handleExportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.productType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value="">Select product type</option>
                <option value="electronics">Electronics</option>
                <option value="textiles">Textiles</option>
                <option value="food">Food & Beverages</option>
                <option value="machinery">Machinery</option>
                <option value="chemicals">Chemicals</option>
                <option value="other">Other</option>
              </select>
              {errors.productType && <p className="mt-1 text-sm text-red-600">{errors.productType}</p>}
            </div>
            
            <div>
              <label htmlFor="exportQuantity" className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="text"
                id="exportQuantity"
                name="quantity"
                value={exportForm.quantity}
                onChange={handleExportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>}
            </div>
            
            <div>
              <label htmlFor="exportDestinationCountry" className="block text-sm font-medium text-gray-700">Destination Country</label>
              <input
                type="text"
                id="exportDestinationCountry"
                name="destinationCountry"
                value={exportForm.destinationCountry}
                onChange={handleExportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.destinationCountry ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.destinationCountry && <p className="mt-1 text-sm text-red-600">{errors.destinationCountry}</p>}
            </div>
            
            <div>
              <label htmlFor="exportExpectedShipDate" className="block text-sm font-medium text-gray-700">Expected Ship Date</label>
              <input
                type="date"
                id="exportExpectedShipDate"
                name="expectedShipDate"
                value={exportForm.expectedShipDate}
                onChange={handleExportChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.expectedShipDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.expectedShipDate && <p className="mt-1 text-sm text-red-600">{errors.expectedShipDate}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="exportPackagingRequirements" className="block text-sm font-medium text-gray-700">Packaging Requirements</label>
            <textarea
              id="exportPackagingRequirements"
              name="packagingRequirements"
              rows="3"
              value={exportForm.packagingRequirements}
              onChange={handleExportChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="exportAgreeTerm"
                name="agreeTerm"
                type="checkbox"
                checked={exportForm.agreeTerm}
                onChange={handleExportChange}
                className={`focus:ring-blue-500 h-4 w-4 text-blue-600 border ${errors.agreeTerm ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="exportAgreeTerm" className="font-medium text-gray-700">I agree to the terms and conditions</label>
              {errors.agreeTerm && <p className="mt-1 text-sm text-red-600">{errors.agreeTerm}</p>}
            </div>
          </div>
          
          <div>
            <button
              onClick={handleExportSubmit}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Export Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormSubmissionHandlerFD
