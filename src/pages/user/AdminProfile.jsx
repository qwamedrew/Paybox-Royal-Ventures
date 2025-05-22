import React from 'react'
import { useState } from 'react';
import { Settings, ShoppingBag, Heart, Bell, Package, LogOut, Users, PlusCircle, Trash2, Menu, X, TrendingUp, Activity, LayoutDashboard, Save, ImagePlus, Plus } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';


const AdminProfile = () => {
    // Change initial state to 'dashboard' to show statistics by default
    const [activeTab, setActiveTab] = useState('dashboard');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [products, setProducts] = useState([
      { id: 1, name: 'Wireless Headphones', price: 89.99, inventory: 45, image: '/api/placeholder/80/80' },
      { id: 2, name: 'Smart Watch', price: 199.99, inventory: 23, image: '/api/placeholder/80/80' },
      { id: 3, name: 'Bluetooth Speaker', price: 59.99, inventory: 12, image: '/api/placeholder/80/80' },
    ]);

     // Sample data for analytics
  const monthlySalesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
    { name: 'Aug', sales: 4000 },
    { name: 'Sep', sales: 3200 },
    { name: 'Oct', sales: 2800 },
    { name: 'Nov', sales: 3300 },
    { name: 'Dec', sales: 5500 },
  ];

  const customerGrowthData = [
    { name: 'Jan', customers: 125 },
    { name: 'Feb', customers: 157 },
    { name: 'Mar', customers: 189 },
    { name: 'Apr', customers: 234 },
    { name: 'May', customers: 276 },
    { name: 'Jun', customers: 310 },
    { name: 'Jul', customers: 348 },
    { name: 'Aug', customers: 389 },
    { name: 'Sep', customers: 426 },
    { name: 'Oct', customers: 470 },
    { name: 'Nov', customers: 505 },
    { name: 'Dec', customers: 546 },
  ];

  const productCategoryData = [
    { name: 'Electronics', value: 45 },
    { name: 'Clothing', value: 25 },
    { name: 'Home', value: 15 },
    { name: 'Sports', value: 10 },
    { name: 'Books', value: 5 },
  ];

  const activityData = [
    { name: 'Mon', orders: 12, returns: 2 },
    { name: 'Tue', orders: 19, returns: 3 },
    { name: 'Wed', orders: 15, returns: 1 },
    { name: 'Thu', orders: 22, returns: 4 },
    { name: 'Fri', orders: 28, returns: 2 },
    { name: 'Sat', orders: 30, returns: 5 },
    { name: 'Sun', orders: 16, returns: 1 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
    const handleRemoveProduct = (id) => {
      setProducts(products.filter(product => product.id !== id));
    };
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };
  
    // Content components for each tab
    const renderTabContent = () => {
      switch (activeTab) {
        case 'dashboard':
          return <DashboardContent 
            monthlySalesData={monthlySalesData} 
            customerGrowthData={customerGrowthData}
            productCategoryData={productCategoryData}
            activityData={activityData}
            colors={COLORS}
          />;
        case 'profile':
          return <ProfileContent />;
        case 'orders':
          return <OrdersContent />;
        case 'saved':
          return <InventoryContent />;
        case 'notifications':
          return <NotificationsContent />;
        case 'products':
          return (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Product Management</h2>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <ProductManagementForm />
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Manage Products</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">Image</th>
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Price</th>
                        <th className="p-2 text-left">Inventory</th>
                        <th className="p-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(product => (
                        <tr key={product.id} className="border-t">
                          <td className="p-2">
                            <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                          </td>
                          <td className="p-2">{product.name}</td>
                          <td className="p-2">${product.price.toFixed(2)}</td>
                          <td className="p-2">{product.inventory}</td>
                          <td className="p-2">
                            <button 
                              className="text-red-600 hover:bg-red-100 p-1 rounded"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        default:
          return <ProfileContent />;
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex">
  {/* Sidebar - Hidden on mobile */}
  <div className="hidden md:flex md:w-64 bg-gray-900 text-white flex-col">
    <div className="p-4 text-xl font-bold">Admin Panel</div>
    <div className="flex-1">
      <nav className="py-4">
        {/* Added Dashboard link */}
        <SidebarLink 
          icon={<LayoutDashboard size={20} />} 
          text="Dashboard" 
          active={activeTab === 'dashboard'} 
          onClick={() => setActiveTab('dashboard')} 
        />
        <SidebarLink 
          icon={<Settings size={20} />} 
          text="Profile" 
          active={activeTab === 'profile'} 
          onClick={() => setActiveTab('profile')} 
        />
        <SidebarLink 
          icon={<ShoppingBag size={20} />} 
          text="Orders" 
          active={activeTab === 'orders'} 
          onClick={() => setActiveTab('orders')} 
        />
        <SidebarLink 
          icon={<Heart size={20} />} 
          text="Inventory" 
          active={activeTab === 'saved'} 
          onClick={() => setActiveTab('saved')} 
        />
        <SidebarLink 
          icon={<Bell size={20} />} 
          text="Notifications" 
          active={activeTab === 'notifications'} 
          onClick={() => setActiveTab('notifications')} 
        />
        <div className="px-3 py-2 text-gray-400 text-sm font-medium">Admin</div>
        <SidebarLink 
          icon={<Package size={20} />} 
          text="Product Management" 
          active={activeTab === 'products'} 
          onClick={() => setActiveTab('products')} 
        />
      </nav>
    </div>
    <div className="p-4">
      <button className="flex items-center gap-2 text-gray-400 hover:text-white">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  </div>
  
        {/* Mobile menu button */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center z-20">
          <div className="text-xl font-bold">Admin Panel</div>
          <button onClick={toggleMobileMenu} className="p-1">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-900 text-white z-10 pt-16">
            <nav className="py-4">
              {/* Added Dashboard link to mobile menu */}
              <MobileSidebarLink 
                icon={<LayoutDashboard size={20} />} 
                text="Dashboard" 
                onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }}
              />
              <MobileSidebarLink 
                icon={<Settings size={20} />} 
                text="Profile" 
                onClick={() => { setActiveTab('profile'); setMobileMenuOpen(false); }}
              />
              <MobileSidebarLink 
                icon={<ShoppingBag size={20} />} 
                text="Orders" 
                onClick={() => { setActiveTab('orders'); setMobileMenuOpen(false); }}
              />
              <MobileSidebarLink 
                icon={<Heart size={20} />} 
                text="Inventory" 
                onClick={() => { setActiveTab('saved'); setMobileMenuOpen(false); }}
              />
              <MobileSidebarLink 
                icon={<Bell size={20} />} 
                text="Notifications" 
                onClick={() => { setActiveTab('notifications'); setMobileMenuOpen(false); }}
              />
              
              <div className="px-6 py-2 text-gray-400 text-sm font-medium">Admin</div>
              
              <MobileSidebarLink 
                icon={<Package size={20} />} 
                text="Product Management" 
                onClick={() => { setActiveTab('products'); setMobileMenuOpen(false); }}
              />
              
              <div className="px-6 py-4 mt-4 border-t border-gray-700">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </nav>
          </div>
        )}
  
        {/* Main content */}
        <div className="flex-1 md:ml-64">
          <div className="p-6 md:p-8 pt-20 md:pt-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    );
  }

function ProductManagementForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    minOrder: "5",
    unit: "ton",
    inStock: true,
    origin: "",
    category: "Oils",
    tags: ["Organic", "Fair Trade"],
    description: "",
    specifications: [
      { name: "Appearance", value: "" },
      { name: "Texture", value: "" },
      { name: "Moisture Content", value: "" },
      { name: "Free Fatty Acid", value: "" },
      { name: "Seasonality", value: "" },
      { name: "Shelf Life", value: "" },
      { name: "Packaging", value: "" }
    ],
    images: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSpecChange = (index, field, value) => {
    const updatedSpecs = [...formData.specifications];
    updatedSpecs[index][field] = value;
    setFormData({ ...formData, specifications: updatedSpecs });
  };

  const addSpecification = () => {
    setFormData({
      ...formData,
      specifications: [...formData.specifications, { name: "", value: "" }]
    });
  };

  const removeSpecification = (index) => {
    const updatedSpecs = [...formData.specifications];
    updatedSpecs.splice(index, 1);
    setFormData({ ...formData, specifications: updatedSpecs });
  };

  const addTag = (tag) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tag]
      });
    }
  };

  const removeTag = (index) => {
    const updatedTags = [...formData.tags];
    updatedTags.splice(index, 1);
    setFormData({ ...formData, tags: updatedTags });
  };

  const handleImageUpload = (e) => {
    // In a real app, you would handle file uploads here
    // For this demo, we'll just use placeholder images
    if (formData.images.length < 3) {
      setFormData({
        ...formData,
        images: [...formData.images, "/api/placeholder/400/300"]
      });
    }
  };
  
  const removeImage = (index) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product data submitted:", formData);
    // Here you would typically send the data to your API
    alert("Product saved successfully!");
  };

  return (
    <div className="bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Basic Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="e.g. Shea nuts"
                required
              />
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">$</span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="flex-1 block w-full border border-gray-300 rounded-none rounded-r-md p-2"
                    placeholder="100"
                    required
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Unit</label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="ton">ton</option>
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
                  <option value="piece">piece</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Minimum Order</label>
              <input
                type="number"
                name="minOrder"
                value={formData.minOrder}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="5"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                name="inStock"
                checked={formData.inStock}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">In Stock</label>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Origin</label>
              <input
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="e.g. Ghana"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="Oils">Oils</option>
                <option value="Nuts">Nuts</option>
                <option value="Seeds">Seeds</option>
                <option value="Butters">Butters</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Tags</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.map((tag, index) => (
                  <div key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm flex items-center">
                    {tag}
                    <button 
                      type="button" 
                      onClick={() => removeTag(index)}
                      className="ml-1 text-green-600 hover:text-green-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex">
                <input
                  type="text"
                  id="new-tag"
                  className="flex-1 border border-gray-300 rounded-l-md shadow-sm p-2"
                  placeholder="Add a tag"
                />
                <button
                  type="button"
                  onClick={() => {
                    const input = document.getElementById("new-tag");
                    addTag(input.value);
                    input.value = "";
                  }}
                  className="bg-green-500 text-white px-3 rounded-r-md"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Images */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Product Images</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
              <button
                type="button"
                onClick={handleImageUpload}
                className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full"
              >
                <ImagePlus className="w-8 h-8 text-gray-500" />
              </button>
              <p className="mt-2 text-sm text-gray-500">Upload product images</p>
              <p className="text-xs text-gray-400">Max 3 images. JPG, PNG or WebP</p>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {formData.images.map((img, index) => (
                <div key={index} className="relative">
                  <img 
                    src={img} 
                    alt={`Product thumbnail ${index + 1}`} 
                    className="w-full h-20 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Describe your product here..."
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* Specifications */}
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">Specifications</h2>
            <button 
              type="button" 
              onClick={addSpecification}
              className="flex items-center text-green-600 hover:text-green-800"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Specification
            </button>
          </div>
          
          <div className="mt-4 space-y-3">
            {formData.specifications.map((spec, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  value={spec.name}
                  onChange={(e) => handleSpecChange(index, "name", e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Specification name"
                />
                <input
                  type="text"
                  value={spec.value}
                  onChange={(e) => handleSpecChange(index, "value", e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Specification value"
                />
                <button
                  type="button"
                  onClick={() => removeSpecification(index)}
                  className="bg-gray-200 hover:bg-gray-300 p-2 rounded-md"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md flex items-center justify-center"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
  
  // Dashboard content with analytics
function DashboardContent({ monthlySalesData, customerGrowthData, productCategoryData, activityData, colors }) {
  // Calculate total sales for the year
  const totalSales = monthlySalesData.reduce((sum, month) => sum + month.sales, 0);
  
  // Calculate total customers
  const totalCustomers = customerGrowthData[customerGrowthData.length - 1].customers;
  
  // Calculate activity metrics
  const totalOrders = activityData.reduce((sum, day) => sum + day.orders, 0);
  const totalReturns = activityData.reduce((sum, day) => sum + day.returns, 0);
  const returnRate = ((totalReturns / totalOrders) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Analytics</h2>
      
      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Sales</p>
              <h3 className="text-2xl font-bold">${totalSales.toLocaleString()}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <TrendingUp size={24} className="text-blue-600" />
            </div>
          </div>
          <p className="text-green-600 text-sm mt-2">↑ 12.5% from last year</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Customers</p>
              <h3 className="text-2xl font-bold">{totalCustomers.toLocaleString()}</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Users size={24} className="text-green-600" />
            </div>
          </div>
          <p className="text-green-600 text-sm mt-2">↑ 8.3% from last month</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Weekly Orders</p>
              <h3 className="text-2xl font-bold">{totalOrders}</h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <ShoppingBag size={24} className="text-purple-600" />
            </div>
          </div>
          <p className="text-green-600 text-sm mt-2">↑ 5.7% from last week</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Return Rate</p>
              <h3 className="text-2xl font-bold">{returnRate}%</h3>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Activity size={24} className="text-yellow-600" />
            </div>
          </div>
          <p className="text-red-600 text-sm mt-2">↑ 0.8% from last month</p>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Sales Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Monthly Sales Turnover</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Sales']} />
                <Legend />
                <Bar dataKey="sales" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Customer Growth Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Customer Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={customerGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="customers" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Categories Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Sales by Category</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={productCategoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {productCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Weekly Activity Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Weekly Account Activity</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" stackId="a" fill="#2563EB" />
                <Bar dataKey="returns" stackId="a" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

  // Sidebar links
  function SidebarLink({ icon, text, active, onClick }) {
    return (
      <a
        onClick={onClick}
        className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
          active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
        }`}
      >
        {icon}
        <span>{text}</span>
      </a>
    );
  }
  
  // Mobile sidebar links
  function MobileSidebarLink({ icon, text, onClick }) {
    return (
      <a
        onClick={onClick}
        className="flex items-center gap-3 px-6 py-4 cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white"
      >
        {icon}
        <span className="text-lg">{text}</span>
      </a>
    );
  }
  
  // Placeholder content components for each tab
  function ProfileContent() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Profile</h2>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <img src="/api/placeholder/128/128" alt="User avatar" className="rounded-full" />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Admin User</h3>
                <p className="text-gray-600">admin@example.com</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" defaultValue="Admin User" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" defaultValue="admin@example.com" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <input type="text" defaultValue="Administrator" className="w-full p-2 border rounded bg-gray-100" readOnly />
                </div>
              </div>
              
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function OrdersContent() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Orders</h2>
        
        <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">#ORD-001</td>
                <td className="p-3">John Smith</td>
                <td className="p-3">May 10, 2025</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Delivered</span>
                </td>
                <td className="p-3">$129.99</td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">#ORD-002</td>
                <td className="p-3">Jane Doe</td>
                <td className="p-3">May 12, 2025</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs">Processing</span>
                </td>
                <td className="p-3">$89.99</td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">#ORD-003</td>
                <td className="p-3">Robert Johnson</td>
                <td className="p-3">May 14, 2025</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">Shipped</span>
                </td>
                <td className="p-3">$259.99</td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  function InventoryContent() {
    // Sample inventory data
    const inventoryItems = [
      { id: 1, name: 'Wireless Headphones', total: 45, available: 38, reserved: 7, image: '/api/placeholder/400/200' },
      { id: 2, name: 'Smart Watch', total: 23, available: 17, reserved: 6, image: '/api/placeholder/400/200' },
      { id: 3, name: 'Bluetooth Speaker', total: 12, available: 8, reserved: 4, image: '/api/placeholder/400/200' },
      { id: 4, name: 'Wireless Charger', total: 50, available: 47, reserved: 3, image: '/api/placeholder/400/200' },
    ];
  
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Inventory Management</h2>
          <button className="bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-2">
            <PlusCircle size={18} />
            Add New Item
          </button>
        </div>
        
        {/* Inventory Status Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 font-medium">Total Items</h3>
            <p className="text-2xl font-bold">130</p>
            <div className="mt-2 text-green-600 text-sm">↑ 12 from last month</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 font-medium">Low Stock Items</h3>
            <p className="text-2xl font-bold">3</p>
            <div className="mt-2 text-red-600 text-sm">Needs attention</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 font-medium">Reserved Items</h3>
            <p className="text-2xl font-bold">20</p>
            <div className="mt-2 text-blue-600 text-sm">For pending orders</div>
          </div>
        </div>
        
        {/* Inventory items grid */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Product Inventory</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reserved</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={item.image} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.available}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.reserved}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${item.available < 10 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {item.available < 10 ? 'Low Stock' : 'In Stock'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  
        {/* Card view for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden">
          {inventoryItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <div className={`text-sm ${item.available < 10 ? 'text-red-600' : 'text-green-600'}`}>
                    {item.available < 10 ? 'Low Stock' : 'In Stock'}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Total:</span>
                  <span className="font-medium">{item.total}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Available:</span>
                  <span className="font-medium">{item.available}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Reserved:</span>
                  <span className="font-medium">{item.reserved}</span>
                </div>
              </div>
              <div className="px-4 py-3 flex justify-between">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  
  function NotificationsContent() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Notifications</h2>
        
        <div className="bg-white rounded-lg shadow divide-y">
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-500 p-2 rounded">
                <Package size={20} />
              </div>
              <div className="ml-3 flex-1">
                <p className="font-medium">Order #ORD-003 has been shipped</p>
                <p className="text-gray-600 text-sm">2 hours ago</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-start">
              <div className="bg-green-100 text-green-500 p-2 rounded">
                <Users size={20} />
              </div>
              <div className="ml-3 flex-1">
                <p className="font-medium">New user registration: Emma Wilson</p>
                <p className="text-gray-600 text-sm">Yesterday</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-start">
              <div className="bg-red-100 text-red-500 p-2 rounded">
                <Bell size={20} />
              </div>
              <div className="ml-3 flex-1">
                <p className="font-medium">Inventory alert: Bluetooth Speaker is low in stock</p>
                <p className="text-gray-600 text-sm">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default AdminProfile
