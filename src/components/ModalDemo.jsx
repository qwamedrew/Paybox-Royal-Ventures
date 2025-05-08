import React, { useState } from 'react';
import ProductModal from '../components/ProductModal';
import QuoteRequestModal from '../components/QuoteRequestModal'
import ImportRegulationsPopup from '../components/ImportRegulationsPopup'
import ShippingNotification from '../components/ShippingNotification'
 // Adjust import path


export const ModalDemo = () => {
  const sampleProduct = {
    id: 1,
    name: "Organic Premium Olive Oil",
    price: 35.50,
    unit: "liter",
    origin: "Spain",
    stock: 1500,
    minOrder: 100,
    description: "High-quality organic extra virgin olive oil from select Spanish groves.",
    certifications: ["Organic", "Non-GMO", "Fair Trade", "EU Quality Certified"],
    shelfLife: "24 months from production date",
    storage: "Store in cool, dry place away from direct sunlight",
    packaging: "Available in 1L, 5L, and 20L containers",
    ingredients: "100% Organic Extra Virgin Olive Oil",
    requiredDocs: [
      "Certificate of Origin",
      "Organic Certification",
      "Phytosanitary Certificate",
      "Commercial Invoice"
    ],
    importRestrictions: "Some countries may require additional organic certification validation."
  };

  const [productModalOpen, setProductModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [regulationsModalOpen, setRegulationsModalOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(null);

  const showNotification = (type) => {
    const notifications = {
      delay: {
        type: 'delay',
        title: 'Shipping Delay Alert',
        message: 'Your shipment of Organic Olive Oil has been delayed by 2 days due to port congestion.',
        actionLink: '#track-shipment'
      },
      arrival: {
        type: 'arrival',
        title: 'Shipment Arrived',
        message: 'Your order has cleared customs and is scheduled for delivery tomorrow.',
        actionLink: '#track-shipment'
      },
      customs: {
        type: 'customs',
        title: 'Documentation Required',
        message: 'Additional documentation is required for your shipment to clear customs.',
        actionLink: '#documents'
      }
    };

    setCurrentNotification(notifications[type]);
    setNotificationOpen(true);
    setTimeout(() => setNotificationOpen(false), 5000);
  };

  return (
    <div className="app-container">
      <h1>Global Foods Import/Export Portal</h1>
      <div className="demo-controls">
        <button onClick={() => setProductModalOpen(true)}>View Product Details</button>
        <button onClick={() => setQuoteModalOpen(true)}>Request Quote</button>
        <button onClick={() => { setRegulationsModalOpen(true); }}>View Import Regulations</button>
        <button onClick={() => showNotification('delay')}>Show Delay Notification</button>
      </div>

      <ProductModal 
        isOpen={productModalOpen}
        onClose={() => setProductModalOpen(false)}
        product={sampleProduct}
      />
      <QuoteRequestModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        product={sampleProduct}
      />
      <ImportRegulationsPopup
        isOpen={regulationsModalOpen}
        onClose={() => setRegulationsModalOpen(false)}
        country="US" // Example country
      />
      <ShippingNotification
        isOpen={notificationOpen}
        onClose={() => setNotificationOpen(false)}
        notification={currentNotification}
      />
    </div>
  );
};

export default ModalDemo
