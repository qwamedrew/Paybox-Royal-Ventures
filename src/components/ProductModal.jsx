import React from 'react';

export const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{product.name}</h2>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="product-details">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="stock-badge">In Stock: {product.stock} units</div>
            </div>
            <div className="product-info">
              <div className="price">${product.price.toFixed(2)} / {product.unit}</div>
              <div className="origin">Origin: {product.origin}</div>
              <div className="min-order">Minimum Order: {product.minOrder} {product.unit}</div>
              <p>{product.description}</p>
              <div className="certifications">
                {product.certifications.map((cert, index) => (
                  <span key={index} className="certification-badge">{cert}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="specifications">
            <h3>Product Specifications</h3>
            <table>
              <tbody>
                <tr><td>Shelf Life</td><td>{product.shelfLife}</td></tr>
                <tr><td>Storage</td><td>{product.storage}</td></tr>
                <tr><td>Packaging</td><td>{product.packaging}</td></tr>
                <tr><td>Ingredients</td><td>{product.ingredients}</td></tr>
              </tbody>
            </table>
          </div>
          <div className="compliance">
            <h3>Import Regulations & Compliance</h3>
            <div className="required-docs">
              <h4>Required Documentation</h4>
              <ul>
                {product.requiredDocs.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>
            <div className="import-restrictions">
              <h4>Import Restrictions</h4>
              <div className="alert-warning">
                {product.importRestrictions || "No known restrictions for this product."}
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={() => alert('Added to cart')}>Add to Cart</button>
          <button onClick={() => alert('Request quote')}>Request Quote</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal
