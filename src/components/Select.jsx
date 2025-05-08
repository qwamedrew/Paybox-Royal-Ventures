import React, { forwardRef } from 'react'

const Select =  forwardRef(({ 
    label,
    id,
    name,
    value,
    onChange,
    onBlur,
    options = [],
    error,
    helperText,
    required = false,
    disabled = false,
    placeholder = 'Select an option',
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
      
      <select
        ref={ref}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={`
          px-3 py-2 bg-white border rounded-md shadow-sm appearance-none
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-green-500 focus:border-green-500'} 
          ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-500' : ''}
          focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors
          w-full pr-8 ${className}
        `}
        {...rest}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

export default Select
