import React, { useState } from "react";
import { User, Package, Heart, Bell, LogOut } from "lucide-react";

// Import your separate components
// Assuming these components have been created separately
import Profile from "./Profile";
import Orders from "./Orders";
import SavedProducts from "./SavedProducts";
import NotificationP from "./NotificationP";
import CartPreview from "./CartPreview";


const AccountProfileMain = () => {
  // Shared state for all components
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "" });

  // Customer data
  const customer = {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+233 57 259-4567",
    address: "6 Lagos Ave, Accra",
    company: "DND Turkish Restaurant",
    position: "Purchasing Manager",
    avatar: "/api/placeholder/150/150",
    memberSince: "March 2020",
    preferredPayment: "Credit Card ending in 4321",
    favoriteCategories: ["Organic Produce", "Specialty Spices", "Gourmet Oils"],
    recentOrders: [
      {
        id: "ORD-9385",
        date: "April 25, 2025",
        total: "$3,450.00",
        status: "Delivered",
        items: [
          "Premium Olive Oil (24 bottles)",
          "Organic Saffron (2kg)",
          "Aged Balsamic Vinegar (12 bottles)",
        ],
      },
      {
        id: "ORD-9254",
        date: "April 12, 2025",
        total: "$1,875.00",
        status: "In Transit",
        items: [
          "Himalayan Pink Salt (50kg)",
          "Spanish Smoked Paprika (10kg)",
          "Specialty Coffee Beans (30kg)",
        ],
      },
      {
        id: "ORD-9112",
        date: "March 30, 2025",
        total: "$2,940.00",
        status: "Delivered",
        items: [
          "Imported Truffles (2kg)",
          "Organic Quinoa (100kg)",
          "Dried Wild Mushrooms (15kg)",
        ],
      },
    ],
    savedProducts: [
      {
        name: "Premium Extra Virgin Olive Oil",
        category: "Oils & Vinegars",
        origin: "Italy",
        price: "$24.99/bottle",
      },
      {
        name: "Organic Ceylon Cinnamon",
        category: "Spices",
        origin: "Sri Lanka",
        price: "$18.50/kg",
      },
      {
        name: "Volcanic Black Sea Salt",
        category: "Specialty Salts",
        origin: "Iceland",
        price: "$12.75/kg",
      },
    ],
    notifications: [
      {
        type: "order",
        message: "Your order #ORD-9254 has shipped and is on the way!",
        date: "2 days ago",
      },
      {
        type: "price",
        message: "Price drop alert: Premium Saffron is now 15% off!",
        date: "5 days ago",
      },
      {
        type: "stock",
        message: "Portuguese Olive Oil is back in stock",
        date: "1 week ago",
      },
    ],
  };

  const [formData, setFormData] = useState(customer);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle save profile
  const handleSave = () => {
    setIsEditing(false);
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
    setPasswordError("");
    setPasswordSuccess("");
  };

  // Handle password reset
  const handlePasswordReset = () => {
    setPasswordError("");
    setPasswordSuccess("");

    if (!passwordData.currentPassword) {
      setPasswordError("Please enter your current password");
      return;
    }

    if (!passwordData.newPassword) {
      setPasswordError("Please enter a new password");
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("New passwords do not match");
      return;
    }

    setTimeout(() => {
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setPasswordSuccess("Password updated successfully");
      setTimeout(() => {
        setShowPasswordReset(false);
        setPasswordSuccess("");
      }, 3000);
    }, 1000);
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    alert("A password reset link has been sent to your email address.");
  };

  // Add to cart with notification
  const addToCart = (product) => {
    const productWithQuantity = { ...product, quantity: 1 };
    setCartItems([...cartItems, productWithQuantity]);
    
    setNotification({
      show: true,
      message: `${product.name} added to your cart!`
    });
    
    setTimeout(() => {
      setNotification({ show: false, message: "" });
    }, 3000);
  };

  // Update quantity in cart
  const updateQuantity = (index, delta) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = (newCartItems[index].quantity || 1) + delta;
    if (newCartItems[index].quantity <= 0) {
      newCartItems.splice(index, 1);
    }
    setCartItems(newCartItems);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  // Handle sign out
  const handleSignOut = () => {
    setNotification({
      show: true,
      message: "You have been signed out successfully!"
    });
    setShowSignOutConfirm(false);
    
    setTimeout(() => {
      window.location.href = "/loginsignup";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-15">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600">Manage your account details and preferences</p>
        </header>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center mb-6">
                <img
                  src={customer.avatar}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h2 className="font-medium">{customer.name}</h2>
                  <p className="text-sm text-gray-500">{customer.email}</p>
                </div>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md ${
                    activeTab === "profile"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <User
                    size={18}
                    className={`mr-3 ${
                      activeTab === "profile" ? "text-blue-500" : "text-gray-400"
                    }`}
                  />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md ${
                    activeTab === "orders"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Package
                    size={18}
                    className={`mr-3 ${
                      activeTab === "orders" ? "text-blue-500" : "text-gray-400"
                    }`}
                  />
                  Orders
                </button>
                <button
                  onClick={() => setActiveTab("saved")}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md ${
                    activeTab === "saved"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Heart
                    size={18}
                    className={`mr-3 ${
                      activeTab === "saved" ? "text-blue-500" : "text-gray-400"
                    }`}
                  />
                  Saved Products
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md ${
                    activeTab === "notifications"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Bell
                    size={18}
                    className={`mr-3 ${
                      activeTab === "notifications" ? "text-blue-500" : "text-gray-400"
                    }`}
                  />
                  Notifications
                </button>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowSignOutConfirm(true)}
                  className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                >
                  <LogOut size={18} className="mr-3 text-red-500" />
                  Sign Out
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === "profile" && (
              <Profile
                customer={customer}
                formData={formData}
                handleInputChange={handleInputChange}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                handleSave={handleSave}
                showPasswordReset={showPasswordReset}
                setShowPasswordReset={setShowPasswordReset}
                passwordData={passwordData}
                handlePasswordChange={handlePasswordChange}
                handlePasswordReset={handlePasswordReset}
                passwordError={passwordError}
                passwordSuccess={passwordSuccess}
                showCurrentPassword={showCurrentPassword}
                setShowCurrentPassword={setShowCurrentPassword}
                showNewPassword={showNewPassword}
                setShowNewPassword={setShowNewPassword}
                handleForgotPassword={handleForgotPassword}
              />
            )}
            
            {activeTab === "orders" && (
              <Orders 
                orders={customer.recentOrders}
              />
            )}
            
            {activeTab === "saved" && (
              <SavedProducts
                savedProducts={customer.savedProducts}
                addToCart={addToCart}
              />
            )}
            
            {activeTab === "notifications" && (
              <NotificationP
                notifications={customer.notifications}
              />
            )}
          </main>
        </div>
      </div>

      {/* Notification Toast */}
      <div className={`fixed bottom-24 right-4 z-50 transition-all duration-300 ${
        notification.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}>
        <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
          <span className="mr-2">✓</span>
          <span>{notification.message}</span>
        </div>
      </div>

      {/* Cart Preview Component */}
      <CartPreview 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />

      {/* Sign Out Confirmation Dialog */}
      {showSignOutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Sign Out Confirmation</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to sign out of your account?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowSignOutConfirm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountProfileMain;