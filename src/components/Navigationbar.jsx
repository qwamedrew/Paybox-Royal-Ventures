import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import MobileMenu from "../components/Mobilemenu";
import logo from "../assets/images/logo.png";

const Navigationbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-[#1E2939] py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 mr-2" />
          <span className={`text-xl font-bold ${isScrolled ? 'text-green-800' : 'text-white'}`}>Paybox Royal Ventures</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

const NavLinks = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const formsDropdownRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (formsDropdownRef.current && !formsDropdownRef.current.contains(event.target)) {
        setIsFormsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServiceSelect = () => setIsServicesOpen(false);
  const handleFormSelect = () => setIsFormsOpen(false);

  return (
    <>
      <Link to="/" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-green-400 font-medium transition-colors`}>
        Home
      </Link>
      <Link to="/showcase" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-green-400 font-medium transition-colors`}>
        Products
      </Link>
      <div className="relative" ref={servicesDropdownRef}>
        <button onClick={() => setIsServicesOpen(!isServicesOpen)} className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-green-400 font-medium transition-colors flex items-center`}>
          Services
          <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isServicesOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
            <Link to="import" onClick={handleServiceSelect} className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600">Import Services</Link>
            <Link to="export" onClick={handleServiceSelect} className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600">Export Services</Link>
          </div>
        )}
      </div>
      <Link to="/about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-green-400 font-medium transition-colors`}>
        About Us
      </Link>
      <Link to="/testimonialandpartners" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-green-400 font-medium transition-colors`}>
        StakeholderMessages
      </Link>
      <div className="relative" ref={formsDropdownRef}>
        <button onClick={() => setIsFormsOpen(!isFormsOpen)} className="text-gray-900 hover:text-white font-medium transition-colors flex items-center bg-[#E6B325] rounded-full px-4 py-2 border-2 border-gray-800 shadow-md">
          CustomerSupport
          <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isFormsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isFormsOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
            <Link to="/contactfd" onClick={handleFormSelect} className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600">Contact</Link>
            <Link to="/productinquiryfd" onClick={handleFormSelect} className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600">Product Inquiry</Link>
            <Link to="/quoterequestfd" onClick={handleFormSelect} className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600">Quote Request</Link>
            <Link to="/feedbackfd" onClick={handleFormSelect} className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600">Feedback</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigationbar;
