import React from "react";
import { Link } from "react-router";

const Mobilemenu = ({ isOpen, closeMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-green-600 font-medium py-2 transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/showcase"
            className="text-gray-800 hover:text-green-600 font-medium py-2 transition-colors"
            onClick={closeMenu}
          >
            Products
          </Link>

          {/* Mobile Services Submenu */}
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
                  to="/services/import"
                  className="block text-gray-700 hover:text-green-600 py-1 transition-colors"
                  onClick={closeMenu}
                >
                  Import Services
                </Link>
                <Link
                  to="/services/export"
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
            className="text-gray-800 hover:text-green-600 font-medium py-2 transition-colors"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/testimonialandpartners"
            className="text-gray-800 hover:text-green-600 font-medium py-2 transition-colors"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <button
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors w-full mt-2"
            onClick={closeMenu}
          >
            Request a Quote
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Mobilemenu;
