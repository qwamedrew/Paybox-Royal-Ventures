import React from 'react'

const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'medium',
    fullWidth = false,
    isLoading = false,
    disabled = false,
    type = 'button',
    onClick,
    className = '',
  }) => {
    // Base classes
    const baseClasses = 'font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    // Size classes
    const sizeClasses = {
      small: 'py-1 px-3 text-sm',
      medium: 'py-2 px-4 text-base',
      large: 'py-3 px-6 text-lg',
    };
    
    // Variant classes
    const variantClasses = {
      primary: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
      secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
      outline: 'bg-transparent border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
      danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-400',
    };
    
    // Width class
    const widthClass = fullWidth ? 'w-full' : '';
    
    // Disabled/loading state
    const stateClasses = (disabled || isLoading) ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer';
    
    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${stateClasses} ${className}`;
    
  return (
    <button
    type={type}
    className={classes}
    onClick={onClick}
    disabled={disabled || isLoading}
  >
    {isLoading ? (
      <div className="flex items-center justify-center">
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading...
      </div>
    ) : children}
  </button>
  );
};

export default Button
