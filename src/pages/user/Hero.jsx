import React from "react";
import { Package, ArrowRight } from "lucide-react";
import port from "../../assets/images/port.jpg";
import { Link } from "react-router";

// Using the green color scheme as our primary choice
const colors = {
  green: "#4a7c59",
  yellow: "#e6b325",
  light: "#fafafa",
};

export default function HeroSection() {
  return (
    <div className="relative w-full py-16 md:py-24 bg-white">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={port}
          alt="Food import/export background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content Area */}
          <div className="w-full md:w-3/5">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: colors.green }}
            >
              Bringing World Flavors <br />
              To Your Doorstep
            </h1>

            <p className="text-lg mb-8 text-gray-700 max-w-lg">
              As a premier food import and export company, we connect producers
              with markets across continents, ensuring quality, reliability, and
              authentic flavors.
            </p>

            <div className="flex items-center gap-4">
              <Link
              to="loginsignup" 
                className="flex items-center px-8 py-4 rounded-lg font-medium text-white transition-transform duration-300 hover:translate-y-1"
                style={{ backgroundColor: colors.yellow }}
              >
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Link>

            </div>
          </div>

          {/* Right Content Area - Feature Card */}
          <div className="w-full md:w-2/5 mt-12 md:mt-0">
            <div
              className="p-8 rounded-xl shadow-xl"
              style={{ backgroundColor: colors.green }}
            >
              <div
                className="mb-6 p-4 rounded-full inline-block"
                style={{ backgroundColor: colors.yellow }}
              >
                <Package size={28} color="white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">
                Global Distribution Network
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start text-white">
                  <span className="mr-2 mt-1">•</span>
                  <span>Direct shipping to 50+ countries worldwide</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="mr-2 mt-1">•</span>
                  <span>Temperature-controlled supply chain</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="mr-2 mt-1">•</span>
                  <span>Custom import/export solutions for businesses</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                <div className="text-white text-sm">Our specialty markets:</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-white bg-opacity-20 text-black">
                    Europe
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-white bg-opacity-20 text-black">
                    North America
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-white bg-opacity-20 text-black">
                    Asia
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-white bg-opacity-20 text-black">
                    Middle East
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
