import React from "react";
import {
  GraduationCap,
  HeartPulse,
  Megaphone,
  Settings,
  Home,
  Users,
} from "lucide-react";

const industries = [
  {
    title: "Education",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    description:
      "Our digital solutions have a significant impact on the education system, reshaping the way education is delivered, accessed, and experienced. These tools transform how students learn and institutions operate.",
  },
  {
    title: "Healthcare",
    icon: <HeartPulse className="w-8 h-8 text-red-500" />,
    description:
      "Achieve higher levels of automation and efficiency, innovate new products, modernize infrastructure, and enhance access to healthcare services with increased community outreach.",
  },
  {
    title: "Emergency Response",
    icon: <Megaphone className="w-8 h-8 text-orange-500" />,
    description:
      "Digital solutions like Emergency Alerts Systems, GIS, and Mass Notification Systems play a crucial role in helping first responders manage crises more effectively.",
  },
  {
    title: "Smart Agriculture",
    icon: <Settings className="w-8 h-8 text-green-600" />,
    description:
      "Transforming food systems by improving efficiency and sustainability through e-commerce, food safety tech, and sustainable production awareness.",
  },
  {
    title: "Livelihoods",
    icon: <Home className="w-8 h-8 text-purple-600" />,
    description:
      "Enhancing economic empowerment through remote work, fintech, digital payments, and skills development to increase access to global markets.",
  },
  {
    title: "Localization",
    icon: <Users className="w-8 h-8 text-teal-600" />,
    description:
      "Making humanitarian aid more efficient through data collection, geospatial analysis, and local capacity building to better respond to affected populations.",
  },
];

export default function ImpactIndustries() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto" id="category">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          Impact Industries
        </span>
        <h3 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          Digital Solutions for Development
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((item, index) => (
          <div
            key={index}
            className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-4 p-3 inline-block bg-gray-50 rounded-lg">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
