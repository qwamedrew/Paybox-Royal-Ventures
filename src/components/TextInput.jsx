import React, { forwardRef } from 'react'

const TextInput = forwardRef(({ 
    label,
    id,
    name,
    type = 'text',
    placeholder = '',
    value,
    onChange,
    onBlur,
    error,
    helperText,
    required = false,
    disabled = false,
    className = '',
    fullWidth = false,
    ...rest
  }, ref) => {
  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : ''}`}>
    {label && (
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    
    <input
      ref={ref}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={placeholder}
      className={`
        px-3 py-2 bg-white border rounded-md shadow-sm 
        ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-green-500 focus:border-green-500'} 
        ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-500' : ''}
        focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors
        w-full ${className}
      `}
      {...rest}
    />
    
    {helperText && !error && (
      <p className="mt-1 text-sm text-gray-500">{helperText}</p>
    )}
    
    {error && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);
});

export default TextInput
