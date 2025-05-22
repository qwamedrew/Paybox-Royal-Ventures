import React from "react";
import {Sprout,Wheat,Landmark,Plane,FileCheck2,Droplet,Drumstick,} from "lucide-react";
import { Link } from "react-router";

const Export = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-400 dark:from-yellow-300 dark:via-yellow-400 dark:to-yellow-500 tracking-wide mb-6 relative inline-block">
            Export Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            We proudly export high-quality Ghanaian agricultural products to
            global markets, helping local farmers thrive and supporting
            international supply chains with traceable, certified produce.
          </p>
        </div>

        {/* What We Export */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Oils",
              icon: Droplet,
              description:
                "Shea Butter exported for culinary and industrial use across Africa, Europe, and Asia.",
            },
            {
              title: "Cereals",
              icon: Wheat,
              description:
                "High-quality yellow and white maize and rice exported for food and livestock feed industries.",
            },
            {
              title: "Tubers",
              icon: Drumstick,
              description:
                "Freshly harvested and properly cured yams and potatoe exported to North America, UK, and the Caribbean.",
            },
            {
              title: "Spices",
              icon: Sprout,
              description:
                "We export dried chili, turmeric, and other spices sourced directly from local farmers.",
            },
          ].map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-yellow-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-3 text-yellow-700 dark:text-yellow-300">
                <Icon className="w-6 h-6 mr-3" />
                <h4 className="text-lg font-semibold">{title}</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>

        {/* Compliance & Certifications */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl mb-16 border border-yellow-100 dark:border-gray-700">
          <div className="mb-6 text-yellow-700 dark:text-yellow-300 flex items-center">
            <FileCheck2 className="w-6 h-6 mr-2" />
            <h3 className="text-2xl font-bold">
              Export Compliance & Standards
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our export process adheres to international trade and food safety
            regulations, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Phytosanitary certifications from Ghanaian authorities</li>
            <li>Quality inspection and third-party lab analysis</li>
            <li>Product traceability and organic labeling options</li>
            <li>Packaging and labeling per destination country requirements</li>
          </ul>
        </div>

        {/* Export Destinations and Clients */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-yellow-100 dark:bg-yellow-900/20 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-3">
              Export Destinations
            </h3>
            <p className="text-gray-800 dark:text-gray-200">
              Our agricultural exports reach key markets across:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-200 space-y-1">
              <li>Europe (Germany, Netherlands, UK)</li>
              <li>Asia (India, Vietnam, China)</li>
              <li>Middle East (UAE, Saudi Arabia)</li>
              <li>North America (USA, Canada)</li>
            </ul>
          </div>

          <div className="bg-yellow-100 dark:bg-yellow-900/20 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-3">
              Who We Serve
            </h3>
            <p className="text-gray-800 dark:text-gray-200">
              We export to a wide range of global buyers:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-200 space-y-1">
              <li>Commodity importers and distributors</li>
              <li>Food processing companies</li>
              <li>Retail chains and wholesalers</li>
              <li>Pharmaceutical and cosmetic industries</li>
            </ul>
          </div>
        </div>
        {/* Logistics & Trade Partnerships */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Trade Policies */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-yellow-100 dark:border-gray-700">
            <div className="flex items-center mb-3 text-yellow-700 dark:text-yellow-300">
              <Landmark className="w-6 h-6 mr-3" />
              <h4 className="text-lg font-semibold">Trade Policy Compliance</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              We comply with international trade agreements, ensuring our
              exports meet destination country policies and tariffs. Our
              collaboration with regulatory agencies like FDA and GRA
              streamlines the export process.
            </p>
          </div>

          {/* Freight & Logistics */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-yellow-100 dark:border-gray-700">
            <div className="flex items-center mb-3 text-yellow-700 dark:text-yellow-300">
              <Plane className="w-6 h-6 mr-3" />
              <h4 className="text-lg font-semibold">
                Freight & Logistics Network
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              We partner with international shipping and air freight companies
              to ensure fast, reliable delivery of agricultural products
              worldwide. From cargo handling to customs clearance, we manage
              end-to-end logistics.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h4 className="text-2xl font-bold text-yellow-700 dark:text-yellow-300 mb-2">
            Looking to export your agro products with ease?
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Join our network of trusted suppliers or partner with us to access
            global markets.
          </p>
          <Link to="/contactfd">
          <button className="bg-yellow-700 text-white px-6 py-3 rounded-full hover:bg-yellow-800 transition">
            Become an Export Partner
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Export;
