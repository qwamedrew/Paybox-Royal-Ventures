import React from "react";
import { Globe, Award, TrendingUp, Users } from "lucide-react";
import port from "../../assets/images/port.jpg";

// Colors matching previous components
const colors = {
  green: "#4a7c59",
  brown: "#8b5e34",
  yellow: "#e6b325",
  wine: "#722f37",
  light: "#fafafa",
};

const About = () => {
  return (
    <div
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: colors.light }}
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full"
            style={{ backgroundColor: colors.yellow }}
          >
            <span className="text-sm font-medium text-gray-800">
              About Paybox Ventures
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.brown }}
          >
            Bridging Global Food Markets Since 2005
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We specialize in connecting premium food producers with
            international markets, ensuring the highest quality products reach
            tables worldwide.
          </p>
        </div>

        {/* Company Story */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: colors.green }}
            >
              <h2 className="text-3xl font-bold mb-2">OUR JOURNEY </h2>
            </h3>
            <p className="text-gray-700 mb-6">
              Paybox Ventures was founded on a clear vision: to deliver
              exceptional, high-quality products to markets around the world.
              What began as a niche exporter of grains has evolved into a
              globally integrated food import/export company, operating across
              six continents.
            </p>
            <p className="text-gray-700 mb-6">
              <h2 className="text-xl font-bold mb-2">MISSION</h2>
              To provide high-quality and excellent products that satisfy the
              needs of our customers both locally and internationally, with a
              strong assurance of customer satisfaction.
            </p>

            <p className="text-gray-700 mb-6">
              <h2 className="text-xl font-bold mb-2">VISION</h2>
              To be a dominant net exporter of Agro-food products in West Africa
              known for our quality products and excellent customer service.
            </p>

            <p className="text-gray-700 mb-6">
              Today, we work with over 250 producers and suppliers across 25+
              countries, carefully selecting partners who share our commitment
              to quality, sustainability, and fair trade practices. Our
              extensive logistics network ensures that every product arrives in
              perfect condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center" style={{ color: colors.wine }}>
                <Users size={20} className="mr-2" />
                <span className="font-medium">20+ Team Members</span>
              </div>
              <div className="flex items-center" style={{ color: colors.wine }}>
                <Globe size={20} className="mr-2" />
                <span className="font-medium">25+ Countries Served</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <img
                src={port}
                alt="Paybox Ventures operations"
                className="w-full sm:w-full md:w-5/6 lg:w-3/4 h-[440px] object-cover mx-auto rounded-lg shadow-lg mr-0 sm:mr-3"

              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <div
                  className="font-bold text-3xl"
                  style={{ color: colors.green }}
                >
                  10+
                </div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white p-8 rounded-xl shadow-md mb-16">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: colors.brown }}
          >
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: colors.green }}
              >
                <Award size={32} className="text-white" />
              </div>
              <h4
                className="text-xl font-bold mb-2"
                style={{ color: colors.brown }}
              >
                Quality Assurance
              </h4>
              <p className="text-gray-600">
                We rigorously test and verify every product to meet
                international standards and exceed customer expectations.
              </p>
            </div>
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: colors.yellow }}
              >
                <Globe size={32} className="text-white" />
              </div>
              <h4
                className="text-xl font-bold mb-2"
                style={{ color: colors.brown }}
              >
                Global Perspective
              </h4>
              <p className="text-gray-600">
                With offices in strategic locations worldwide, we understand
                local tastes, regulations, and market opportunities.
              </p>
            </div>
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: colors.wine }}
              >
                <TrendingUp size={32} className="text-white" />
              </div>
              <h4
                className="text-xl font-bold mb-2"
                style={{ color: colors.brown }}
              >
                Sustainable Growth
              </h4>
              <p className="text-gray-600">
                We balance commercial success with environmental responsibility
                and community development.
              </p>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            style={{ borderTop: `4px solid ${colors.green}` }}
          >
            <div
              className="text-4xl font-bold mb-2"
              style={{ color: colors.green }}
            >
              500+
            </div>
            <div className="text-gray-600">Producer Partnerships</div>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            style={{ borderTop: `4px solid ${colors.yellow}` }}
          >
            <div
              className="text-4xl font-bold mb-2"
              style={{ color: colors.yellow }}
            >
              10,000+
            </div>
            <div className="text-gray-600">Products Distributed</div>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            style={{ borderTop: `4px solid ${colors.brown}` }}
          >
            <div
              className="text-4xl font-bold mb-2"
              style={{ color: colors.brown }}
            >
              95%
            </div>
            <div className="text-gray-600">On-time Delivery Rate</div>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md text-center"
            style={{ borderTop: `4px solid ${colors.wine}` }}
          >
            <div
              className="text-4xl font-bold mb-2"
              style={{ color: colors.wine }}
            >
              24/7
            </div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
