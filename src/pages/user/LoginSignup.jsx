import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const LoginSignup = () => {
  const navigate = useNavigate()
  // Active form state (login or register)
  const [activeForm, setActiveForm] = useState('login');
  
  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  // Registration form state
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  // Form errors state
  const [errors, setErrors] = useState({});
  
  // Success message state
  const [successMessage, setSuccessMessage] = useState('');
  
  // Handle login form input changes
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Handle registration form input changes
  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Validate login form
  const validateLoginForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!loginForm.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!loginForm.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Validate registration form
  const validateRegisterForm = () => {
    const newErrors = {};
    
    // First name validation
    if (!registerForm.firstName) {
      newErrors.firstName = 'First name is required';
    }
    
    // Last name validation
    if (!registerForm.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Email validation
    if (!registerForm.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!registerForm.password) {
      newErrors.password = 'Password is required';
    } else if (registerForm.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(registerForm.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    
    // Confirm password validation
    if (!registerForm.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (registerForm.confirmPassword !== registerForm.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Terms agreement validation
    if (!registerForm.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    if (validateLoginForm()) {
      // Here you would typically make an API call to authenticate the user
      console.log('Login form submitted:', loginForm);
      
      // Show success message
      setSuccessMessage('Login successful! Redirecting...');
      
      // Changed from /accountprofile to /accountprofilemain
      navigate('/accountprofilemain')
      
      // Reset form after submission (in a real app, you'd redirect instead)
      setTimeout(() => {
        setSuccessMessage('');
        setLoginForm({
          email: '',
          password: '',
          rememberMe: false
        });
      }, 3000);
    }
  };
  
  // Handle registration form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    if (validateRegisterForm()) {
      // Here you would typically make an API call to register the user
      console.log('Registration form submitted:', registerForm);
      
      // Show success message
      setSuccessMessage('Registration successful! Please check your email to verify your account.');
      
      // Reset form after submission
      setTimeout(() => {
        setSuccessMessage('');
        setRegisterForm({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          agreeToTerms: false
        });
        // Switch to login form after successful registration
        setActiveForm('login');
      }, 3000);
    }
  };
  
  // Handle form switch
  const switchForm = (form) => {
    setActiveForm(form);
    setErrors({});
    setSuccessMessage('');
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {activeForm === 'login' ? 'Sign in to your account' : 'Create a new account'}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {activeForm === 'login' ? 'Or ' : 'Already have an account? '}
        <button
          onClick={() => switchForm(activeForm === 'login' ? 'register' : 'login')}
          className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
        >
          {activeForm === 'login' ? 'create a new account' : 'sign in'}
        </button>
      </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        
        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 bg-green-50 border-l-4 border-green-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">{successMessage}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Login Form */}
        {activeForm === 'login' && (
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={loginForm.rememberMe}
                  onChange={handleLoginChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={handleLoginSubmit}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
  <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
    <span>  Sign in with Google</span>
  </a>
</div>
<div>
  <a
    href="#"
    className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-black text-sm font-medium text-white hover:bg-gray-800"
  >
    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.397 2.033-1.19 2.69-.79.65-1.665 1.035-2.63.955-.053-.865.264-1.616.955-2.252.69-.635 1.49-.988 2.405-1.058.145.452.23.91.46 1.362zM20.565 17.95c-.445 1.04-.98 2.025-1.595 2.955-.59.89-1.14 1.5-1.645 1.83-.495.312-1.035.47-1.62.47-.42 0-.93-.12-1.52-.35-.59-.235-1.12-.355-1.58-.355-.485 0-1.03.12-1.64.355-.615.23-1.11.35-1.48.35-.585 0-1.13-.158-1.64-.47-.49-.31-1.015-.93-1.57-1.86-.605-.93-1.12-1.98-1.53-3.14-.44-1.24-.66-2.43-.66-3.57 0-1.325.295-2.48.885-3.475.59-1.01 1.385-1.79 2.38-2.34.995-.555 2.01-.838 3.04-.855.64 0 1.48.188 2.52.565 1.02.37 1.655.565 1.89.565.16 0 .735-.18 1.73-.54 1.015-.385 1.87-.545 2.57-.48.086 1.07-.147 2.01-.7 2.83-.555.83-1.31 1.46-2.27 1.9.795.23 1.52.62 2.17 1.165.655.535 1.165 1.19 1.53 1.97-.45.275-1.025.58-1.73.915z"/>
    </svg>
    Sign in with Apple
  </a>
</div>

              </div>
            </div>
          </div>
        )}
        
        {/* Registration Form */}
        {activeForm === 'register' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={registerForm.firstName}
                    onChange={handleRegisterChange}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      errors.firstName ? 'border-red-300' : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  />
                  {errors.firstName && <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={registerForm.lastName}
                    onChange={handleRegisterChange}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      errors.lastName ? 'border-red-300' : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  />
                  {errors.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="register-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="register-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 8 characters and include uppercase, lowercase, and numbers
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={registerForm.confirmPassword}
                  onChange={handleRegisterChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={registerForm.agreeToTerms}
                onChange={handleRegisterChange}
                className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                  errors.agreeToTerms ? 'border-red-300' : ''
                }`}
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
                I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
              </label>
            </div>
            {errors.agreeToTerms && <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms}</p>}

            <div>
              <button
                onClick={handleRegisterSubmit}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);
}

export default LoginSignup