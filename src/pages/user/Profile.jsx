import React, { useState } from "react";
import { User, Mail, MapPin, Phone, CreditCard, Edit, Eye, EyeOff, AlertCircle, Check, Lock } from "lucide-react";

const Profile = ({ customer }) => {
    if (!customer) {
        return <div>Loading profile...</div>;
      }
      
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
  const [formData, setFormData] = useState(customer);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // In a real application, you would send this data to your API
    setIsEditing(false);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
    // Clear any previous messages when the user starts typing again
    setPasswordError("");
    setPasswordSuccess("");
  };

  const handlePasswordReset = () => {
    // Reset any previous messages
    setPasswordError("");
    setPasswordSuccess("");

    // Validate passwords
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

    // In a real application, you would send this data to your API
    // Simulate API call with a timeout
    setTimeout(() => {
      // Clear the form
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      // Show success message
      setPasswordSuccess("Password updated successfully");

      // Optionally close the password reset form after a delay
      setTimeout(() => {
        setShowPasswordReset(false);
        setPasswordSuccess("");
      }, 3000);
    }, 1000);
  };

  const handleForgotPassword = () => {
    // In a real application, this would trigger a password recovery email
    alert("A password reset link has been sent to your email address.");
  };

  const renderPasswordResetForm = () => (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Change Password</h3>
        <button
          onClick={() => {
            setShowPasswordReset(false);
            setPasswordError("");
            setPasswordSuccess("");
            setPasswordData({
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            });
          }}
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
      </div>

      {passwordError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded flex items-start">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-600">{passwordError}</p>
        </div>
      )}

      {passwordSuccess && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded flex items-start">
          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-600">{passwordSuccess}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="w-full p-2 pr-10 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your current password"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            >
              {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="mt-1 text-xs text-right">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-blue-600 hover:text-blue-800"
            >
              Forgot password?
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="w-full p-2 pr-10 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your new password"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Password must be at least 8 characters long
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm your new password"
          />
        </div>

        <div className="pt-2">
          <button
            onClick={handlePasswordReset}
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );

  if (isEditing) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Edit Profile
          </h2>
          <div className="space-x-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position/Title
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Payment Method
              </label>
              <select
                name="preferredPayment"
                value={formData.preferredPayment}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Credit Card ending in 4321</option>
                <option>Bank Transfer</option>
                <option>Mobile Money</option>
                <option>PayPal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Image
              </label>
              <div className="flex items-center space-x-4">
                <img
                  src={formData.avatar}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <button className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors">
                  <User size={16} className="mr-2" />
                  Change Photo
                </button>
              </div>
            </div>
          </div>
        </div>

        {!showPasswordReset && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowPasswordReset(true)}
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
            >
              <Lock size={16} className="mr-2" />
              Change Password
            </button>
          </div>
        )}

        {showPasswordReset && renderPasswordResetForm()}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
        >
          <Edit size={16} className="mr-2" />
          Edit Profile
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
          <img
            src={customer.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <h3 className="mt-4 text-lg font-medium text-gray-800">{customer.name}</h3>
          <p className="text-gray-500">{customer.position}</p>
          <p className="text-gray-500">{customer.company}</p>
          <p className="mt-2 text-sm text-gray-500">Member since {customer.memberSince}</p>
        </div>

        <div className="md:w-2/3 md:pl-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-medium">{customer.email}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-medium">{customer.phone}</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Delivery Address</p>
                <p className="font-medium">{customer.address}</p>
              </div>
            </div>

            <div className="flex items-start">
              <CreditCard className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Preferred Payment Method</p>
                <p className="font-medium">{customer.preferredPayment}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Favorite Categories</h3>
            <div className="flex flex-wrap gap-2">
              {customer.favoriteCategories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowPasswordReset(true)}
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
            >
              <Lock size={16} className="mr-2" />
              Change Password
            </button>
          </div>
        </div>
      </div>

      {showPasswordReset && renderPasswordResetForm()}
    </div>
  );
};

export default Profile;