import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, PenTool, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Plastic Product Manufacturing",
      description:
        "State-of-the-art injection and blow molding processes to create high-quality, durable plastic products in large volumes.",
      icon: <Package size={40} className="text-sky-500" />,
      features: [
        "Precision Engineering",
        "High Volume Capacity",
        "Quality Controlled",
      ],
    },
    {
      title: "Bulk Supply & Trading",
      description:
        "Reliable B2B supply chain solutions with on-time delivery for wholesalers, retailers, and industrial clients across India.",
      icon: <Truck size={40} className="text-blue-600" />,
      features: [
        "Pan-India Delivery",
        "Competitive Pricing",
        "Consistent Supply",
      ],
    },
    {
      title: "Custom Plastic Solutions",
      description:
        "End-to-end custom molding services from initial prototype design to final mass production for specialized requirements.",
      icon: <PenTool size={40} className="text-indigo-500" />,
      features: ["CAD Design Support", "Mold Fabrication", "Prototype Testing"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-sky-50 rounded-full opacity-50 blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-1 w-10 bg-blue-900 rounded"></div>
            <h3 className="text-blue-900 font-bold uppercase tracking-wider text-sm">
              What We Do
            </h3>
            <div className="h-1 w-10 bg-blue-900 rounded"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Our Core <span className="text-sky-500">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Delivering excellence through comprehensive manufacturing and
            trading services tailored to meet diverse industrial demands.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                {service.icon}
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle size={18} className="text-sky-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
