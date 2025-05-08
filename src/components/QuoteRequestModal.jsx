import React, { useState } from 'react';

export const QuoteRequestModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    quantity: product?.minOrder || 100,
    destination: '',
    deliveryDate: '',
    specialRequirements: '',
    name: '',
    email: '',
    company: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quote request submitted!');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Request Quote: {product?.name}</h2>
          <button onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label>Quantity (in {product?.unit})</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min={product?.minOrder || 1}
                required
              />
            </div>
            <div className="form-group">
              <label>Destination Country</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="EU">European Union</option>
                <option value="AU">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Requested Delivery Date</label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Special Requirements</label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                rows="2"
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Submit Quote Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteRequestModal
