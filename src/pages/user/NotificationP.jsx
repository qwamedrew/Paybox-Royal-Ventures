import React from "react";
import { Truck, CreditCard, Package } from "lucide-react";

const NotificationP = ({ notifications }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
        <p className="text-gray-500 mt-1">
          Stay updated with your orders and favorite products
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {notifications.map((notification, index) => (
          <div key={index} className="p-6 flex">
            <div
              className={`p-2 rounded-full mr-4 ${
                notification.type === "order"
                  ? "bg-blue-100"
                  : notification.type === "price"
                  ? "bg-green-100"
                  : "bg-yellow-100"
              }`}
            >
              {notification.type === "order" && (
                <Truck
                  size={20}
                  className={`${
                    notification.type === "order"
                      ? "text-blue-600"
                      : notification.type === "price"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                />
              )}
              {notification.type === "price" && (
                <CreditCard
                  size={20}
                  className={`${
                    notification.type === "order"
                      ? "text-blue-600"
                      : notification.type === "price"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                />
              )}
              {notification.type === "stock" && (
                <Package
                  size={20}
                  className={`${
                    notification.type === "order"
                      ? "text-blue-600"
                      : notification.type === "price"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                />
              )}
            </div>
            <div className="flex-1">
              <p className="text-gray-800">{notification.message}</p>
              <p className="text-sm text-gray-500 mt-1">{notification.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-50 rounded-b-lg">
        <button className="w-full py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationP;