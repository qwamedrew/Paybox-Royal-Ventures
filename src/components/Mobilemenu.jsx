import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";

const Mobilemenu = ({ isOpen, closeMenu }) => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const supportRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (supportRef.current && !supportRef.current.contains(event.target)) {
        setIsSupportOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSupportSelect = () => {
    setIsSupportOpen(false);
    closeMenu();
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-green-400 font-medium py-2 transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/showcase"
            className="text-gray-800 hover:text-green-400 font-medium py-2 transition-colors"
            onClick={closeMenu}
          >
            Products
          </Link>

          {/* Services Submenu */}
          <div className="relative">
            <details className="group">
              <summary className="text-gray-800 hover:text-green-600 font-medium py-2 transition-colors list-none flex justify-between items-center">
                Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="pl-4 pt-2 space-y-2">
                <Link
                  to="import"
                  className="block text-gray-700 hover:text-green-600 py-1 transition-colors"
                  onClick={closeMenu}
                >
                  Import Services
                </Link>
                <Link
                  to="export"
                  className="block text-gray-700 hover:text-green-600 py-1 transition-colors"
                  onClick={closeMenu}
                >
                  Export Services
                </Link>
              </div>
            </details>
          </div>

          <Link
            to="/about"
            className="text-gray-800 hover:text-green-400 font-medium py-2 transition-colors"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/testimonialandpartners"
            className="text-gray-800 hover:text-green-400 font-medium py-2 transition-colors"
            onClick={closeMenu}
          >
            StakeholderMessages
          </Link>

          {/* Customer Support Section */}
          <div className="relative" ref={supportRef}>
            <button
              onClick={() => setIsSupportOpen(!isSupportOpen)}
              className="text-gray-900 hover:text-white font-medium transition-colors flex items-center bg-[#E6B325] rounded-full px-4 py-2 border-2 border-gray-800 shadow-md"
            >
              Customer Support
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${isSupportOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isSupportOpen && (
              <div className="pl-4 pt-2 space-y-2">
                <Link
                  to="/contactfd"
                  onClick={handleSupportSelect}
                  className="block text-gray-700 hover:text-green-400 font-medium py-1 transition-colors"
                >
                  Contact
                </Link>
                <Link
                  to="/productinquiryfd"
                  onClick={handleSupportSelect}
                  className="block text-gray-700 hover:text-green-400 font-medium py-1 transition-colors"
                >
                  Product Inquiry
                </Link>
                <Link
                  to="/quoterequestfd"
                  onClick={handleSupportSelect}
                  className="block text-gray-700 hover:text-green-400 font-medium py-1 transition-colors"
                >
                  Quote Request
                </Link>
                <Link
                  to="/feedbackfd"
                  onClick={handleSupportSelect}
                  className="block text-gray-700 hover:text-green-400 font-medium py-1 transition-colors"
                >
                  Feedback
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Mobilemenu;
