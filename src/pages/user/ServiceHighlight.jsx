import React from 'react';
import { TruckIcon, ShieldCheck, Briefcase, FileText, PackageOpen, BarChart3 } from 'lucide-react';

// Colors matching previous components
const colors = {
  green: "#4a7c59",
  brown: "#8b5e34",
  yellow: "#e6b325",
  wine: "#722f37",
  light: "#fafafa"
};

// Service data
const services = [
  {
    id: 1,
    title: "Global Logistics Solutions",
    description: "End-to-end supply chain management with temperature-controlled shipping and real-time tracking for perishable goods.",
    icon: <TruckIcon size={32} />,
    color: colors.green,
    features: ["Multi-modal transportation", "Cold chain logistics", "Real-time tracking"]
  },
  {
    id: 2,
    title: "Regulatory Compliance",
    description: "Expert guidance through international food import regulations, customs clearance, and certification requirements.",
    icon: <ShieldCheck size={32} />,
    color: colors.wine,
    features: ["Documentation preparation", "Customs clearance", "Regulatory updates"]
  },
  {
    id: 3,
    title: "Market Entry Strategy",
    description: "Tailored consulting services to help producers enter new international markets successfully.",
    icon: <Briefcase size={32} />,
    color: colors.brown,
    features: ["Market research", "Distribution planning", "Local partnerships"]
  },
  {
    id: 4,
    title: "Export Documentation",
    description: "Complete management of all required export documentation, certificates, and compliance paperwork.",
    icon: <FileText size={32} />,
    color: colors.yellow,
    features: ["Certificate of origin", "Health certificates", "Export licenses"]
  },
  {
    id: 5,
    title: "Warehousing & Distribution",
    description: "Strategic storage solutions with specialized facilities for various food types and global distribution networks.",
    icon: <PackageOpen size={32} />,
    color: colors.green,
    features: ["Temperature-controlled storage", "Order fulfillment", "Cross-docking services"]
  },
  {
    id: 6,
    title: "Market Intelligence",
    description: "Data-driven insights on global food market trends, consumer preferences, and emerging opportunities.",
    icon: <BarChart3 size={32} />,
    color: colors.wine,
    features: ["Trend analysis", "Price monitoring", "Competitor research"]
  }
];

const ServiceHighlight = () => {
  return (
    <div className="py-20 px-4 md:px-8" style={{ backgroundColor: colors.light }}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full" style={{ backgroundColor: colors.yellow }}>
            <span className="text-sm font-medium text-gray-800">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.brown }}>
            Comprehensive Import & Export Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            From logistics and compliance to market entry and distribution, we offer end-to-end services that simplify the complexities of global food trade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-2" style={{ backgroundColor: service.color }}></div>
              <div className="p-6">
                <div 
                  className="w-16 h-16 flex items-center justify-center rounded-lg mb-4" 
                  style={{ backgroundColor: `${service.color}15` }} // Using opacity for lighter bg
                >
                  <span style={{ color: service.color }}>{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.brown }}>{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="mr-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button 
                  className="text-sm font-medium transition-colors duration-300"
                  style={{ color: service.color }}
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/api/placeholder/1200/300" 
              alt="Global services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-1" style={{ backgroundColor: `${colors.green}E6` }}></div>
          <div className="relative z-2 p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Expand Your Global Food Business?</h3>
            <p className="max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you navigate the complexities of international food trade and find the perfect solutions for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-lg font-medium" style={{ backgroundColor: colors.yellow, color: '#333' }}>
                Schedule a Consultation
              </button>
              <button className="px-6 py-3 rounded-lg font-medium bg-white text-gray-800">
                Download Service Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlight;