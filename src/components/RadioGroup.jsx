import React from 'react'

const RadioGroup =({ 
    label,
    name,
    options = [],
    selectedValue,
    onChange,
    error,
    disabled = false,
    inline = false,
    className = '',
  }) => {
  return (
    <div className={`mb-4 ${className}`}>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
    )}
    
    <div className={`${inline ? 'flex flex-wrap gap-4' : 'space-y-2'}`}>
      {options.map((option) => (
        <div key={option.value} className="flex items-center">
          <input
            id={`${name}-${option.value}`}
            name={name}
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            disabled={disabled || option.disabled}
            className={`
              h-4 w-4 
              ${error ? 'border-red-500 text-red-600 focus:ring-red-500' : 'border-gray-300 text-green-600 focus:ring-green-500'} 
              ${disabled || option.disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
            `}
          />
          <label 
            htmlFor={`${name}-${option.value}`} 
            className={`ml-2 text-sm ${disabled || option.disabled ? 'text-gray-500' : 'text-gray-700'}`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
    
    {error && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);
};

export default RadioGroup
