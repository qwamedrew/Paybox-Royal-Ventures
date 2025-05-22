import React from "react";
import {Truck,ShieldCheck,Globe,FileCheck2,Warehouse,Drumstick,Wheat,Droplet,Sprout,} from "lucide-react";
import { Link } from "react-router";

const Import = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-500 to-lime-400 dark:from-green-300 dark:via-emerald-400 dark:to-lime-300 tracking-wide mb-6 relative inline-block">
            Import Services
            <span className="block h-1 w-16 bg-green-500 dark:bg-green-300 mt-2 rounded-full mx-auto animate-pulse"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            We specialize in importing agricultural food commodities from global
            markets to meet the rising demand for essential staples. Our imports
            support food security, trade balance, and economic sustainability.
          </p>
        </div>

        {/* What We Import - Tubers, Spices, Cereals, Oils */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Tubers",
              icon: Drumstick,
              description:
                "We import bulk quantities of cassava, yam, and potatoes to meet industrial and consumer demand.",
            },
            {
              title: "Spices",
              icon: Sprout,
              description:
                "We bring in high-grade ginger, turmeric, cloves, and other spices for food and medicinal use.",
            },
            {
              title: "Cereals",
              icon: Wheat,
              description:
                "We source maize, rice, millet, and sorghum for food processors and grain suppliers.",
            },
            {
              title: "Oils",
              icon: Droplet,
              description:
                "We import palm oil, soybean oil, and groundnut oil used in cooking, manufacturing, and exports.",
            },
          ].map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-green-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-3 text-green-700 dark:text-green-300">
                <Icon className="w-6 h-6 mr-3" />
                <h4 className="text-lg font-semibold">{title}</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>

        {/* Compliance and Process */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl mb-16 border border-green-100 dark:border-gray-700">
          <div className="mb-6 text-green-700 dark:text-green-300 flex items-center">
            <FileCheck2 className="w-6 h-6 mr-2" />
            <h3 className="text-2xl font-bold">Compliance & Import Process</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            All imports are executed under strict government and international
            trade regulations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Import permits, health certificates, and customs documentation
            </li>
            <li>FDA validation for food safety</li>
            <li>Efficient freight, warehousing, and port clearance</li>
            <li>Traceability and transparency in every transaction</li>
          </ul>
        </div>

        {/* Logistics & Clients */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
              Logistics & Global Reach
            </h3>
            <p className="text-gray-800 dark:text-gray-200">
              We work with shipping companies and international traders across:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-200 space-y-1">
              <li>Asia (India, Vietnam, Malaysia, China )</li>
              <li>South America (Brazil, Argentina)</li>
              <li>Europe (Ukraine, Netherlands,Turkey)</li>
              <li>Middle East (Syria, Yemen, Qatar)</li>
            </ul>
          </div>

          <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
              Who We Serve
            </h3>
            <p className="text-gray-800 dark:text-gray-200">
              Our agricultural imports benefit:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-200 space-y-1">
              <li>Food processors & manufacturers</li>
              <li>Retailers & bulk buyers</li>
              <li>Government food programs</li>
              <li>NGOs and relief organizations</li>
            </ul>
          </div>
        </div>
        {/* Operational Excellence */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Global Sourcing */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-green-100 dark:border-gray-700">
            <div className="flex items-center mb-3 text-green-700 dark:text-green-300">
              <Globe className="w-6 h-6 mr-2" />
              <h4 className="text-lg font-semibold">Global Sourcing Network</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              We maintain strong sourcing relationships with international
              producers, ensuring quality and consistency from multiple
              continents.
            </p>
          </div>

          {/* Secure Handling */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-green-100 dark:border-gray-700">
            <div className="flex items-center mb-3 text-green-700 dark:text-green-300">
              <ShieldCheck className="w-6 h-6 mr-2" />
              <h4 className="text-lg font-semibold">
                Product Safety & Security
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Our handling processes ensure product safety through regulatory
              compliance, cold chain logistics, and risk mitigation protocols.
            </p>
          </div>

          {/* Warehousing & Tracking */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-green-100 dark:border-gray-700">
            <div className="flex items-center mb-3 text-green-700 dark:text-green-300">
              <Warehouse className="w-6 h-6 mr-2" />
              <h4 className="text-lg font-semibold">
                Modern Storage Facilities
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Our warehousing systems support temperature-controlled storage and
              digital inventory tracking for maximum shelf life and
              transparency.
            </p>
          </div>
        </div>
        {/* Last-Mile Delivery */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-green-100 dark:border-gray-700">
          <div className="flex items-center mb-3 text-green-700 dark:text-green-300">
            <Truck className="w-6 h-6 mr-2" />
            <h4 className="text-lg font-semibold">Reliable Distribution</h4>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Our distribution fleet ensures prompt delivery of imported goods
            across Ghana, including last-mile logistics to retail and
            industrial clients.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h4 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
            Ready to import quality agricultural products?
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Partner with us to ensure efficiency, safety, and profitability.
          </p>
          <Link
            to="/contactfd"
            className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition inline-block"
          >
            Talk to Our Import Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Import;
