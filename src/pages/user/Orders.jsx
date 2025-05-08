import React, { useState } from "react";
import { Clock, Check, Truck, Package, List, Download } from "lucide-react";

// Sample order data to demonstrate the component
const sampleOrders = [
  {
    id: "12345",
    date: "May 1, 2025",
    status: "Delivered",
    total: "$129.99",
    items: ["Premium Headphones", "USB-C Cable"],
    address: "123 Main St, Anytown, USA",
    paymentMethod: "Credit Card ending in 1234",
    deliveryDate: "April 30, 2025"
  },
  {
    id: "12346",
    date: "May 3, 2025",
    status: "In Transit",
    total: "$85.50",
    items: ["Wireless Charger", "Phone Case"],
    address: "456 Oak Ave, Somewhere, USA",
    paymentMethod: "PayPal",
    deliveryDate: "May 10, 2025"
  },
  {
    id: "12347",
    date: "May 5, 2025",
    status: "Processing",
    total: "$210.75",
    items: ["Bluetooth Speaker", "Smart Watch", "Power Bank"],
    address: "789 Pine St, Elsewhere, USA",
    paymentMethod: "Credit Card ending in 5678",
    deliveryDate: "May 12, 2025"
  }
];

const Orders = ({ orders = sampleOrders }) => {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  // Function to handle viewing order details
  const handleViewDetails = (orderId) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null); // Collapse if already expanded
    } else {
      setExpandedOrderId(orderId); // Expand the clicked order
    }
  };

  // Function to handle downloading invoice
  const handleDownloadInvoice = (order) => {
    // In a real application, this would trigger an API call or generate a PDF
    alert(`Downloading invoice for Order #${order.id}`);
    
    // This is a simplified example - in a real app you might do:
    // 1. Make an API call to get invoice data
    // 2. Generate PDF or open in a new tab
    console.log(`Download invoice for order ${order.id}`);
  };

  // Function to handle view all orders
  const handleViewAllOrders = () => {
    alert("Viewing all orders");
    // In a real app, this might navigate to a detailed orders page
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Order History</h2>
        <p className="text-gray-500 mt-1">View and track all your orders</p>
      </div>

      {orders.map((order, index) => (
        <div
          key={index}
          className={`p-6 ${
            index !== orders.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="font-medium text-gray-800">Order #{order.id}</h3>
              <div className="flex items-center mt-1">
                <Clock className="w-4 h-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-500">{order.date}</span>
              </div>
            </div>
            <div className="mt-2 md:mt-0 flex items-center">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-800"
                    : order.status === "In Transit"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {order.status === "Delivered" && <Check size={12} className="mr-1" />}
                {order.status === "In Transit" && <Truck size={12} className="mr-1" />}
                {order.status === "Processing" && <Package size={12} className="mr-1" />}
                {order.status}
              </span>
              <span className="ml-4 font-medium text-gray-900">{order.total}</span>
            </div>
          </div>

          <div className="mt-2">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Items</h4>
            <ul className="space-y-1">
              {order.items.map((item, idx) => (
                <li key={idx} className="text-sm flex items-center">
                  <Package className="w-4 h-4 text-gray-400 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Show expanded details when the order is selected */}
          {expandedOrderId === order.id && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
              <h4 className="font-medium text-gray-700 mb-2">Order Details</h4>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Shipping Address: {order.address || "123 Main St, Anytown"}</p>
                <p>Payment Method: {order.paymentMethod || "Credit Card ending in 1234"}</p>
                <p>Estimated Delivery: {order.deliveryDate || "According to status"}</p>
              </div>
            </div>
          )}

          <div className="mt-4 flex">
            <button 
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
              onClick={() => handleViewDetails(order.id)}
            >
              <List size={16} className="mr-1" />
              {expandedOrderId === order.id ? "Hide Details" : "View Details"}
            </button>
            <button 
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm ml-4"
              onClick={() => handleDownloadInvoice(order)}
            >
              <Download size={16} className="mr-1" />
              Download Invoice
            </button>
          </div>
        </div>
      ))}

      <div className="p-6 bg-gray-50 rounded-b-lg">
        <button 
          className="w-full py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors"
          onClick={handleViewAllOrders}
        >
          View All Orders
        </button>
      </div>
    </div>
  );
};

export default Orders;