import React, { forwardRef } from 'react'

const Checkbox = forwardRef(({ 
    label,
    id,
    name,
    checked,
    onChange,
    error,
    disabled = false,
    className = '',
    ...rest
  }, ref) => {
  return (
    <div className="flex items-start mb-4">
      <div className="flex items-center h-5">
        <input
          ref={ref}
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`
            h-4 w-4 rounded 
            ${error ? 'border-red-500 text-red-600 focus:ring-red-500' : 'border-gray-300 text-green-600 focus:ring-green-500'} 
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
            ${className}
          `}
          {...rest}
        />
      </div>
      
      <div className="ml-3 text-sm">
        {label && (
          <label htmlFor={id} className={`font-medium ${disabled ? 'text-gray-500' : 'text-gray-700'}`}>
            {label}
          </label>
        )}
        
        {error && (
          <p className="text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
});

export default Checkbox
