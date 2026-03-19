import React from "react";
import { motion } from "framer-motion";
import { Container, Home, Factory, Wrench } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Plastic Containers",
      description:
        "Durable, food-grade safe containers suitable for storage, packaging, and commercial utility.",
      icon: <Container size={32} />,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      image:
        "https://images.unsplash.com/photo-1596431959828-89c0aebaffab?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      title: "Household Products",
      description:
        "Everyday utility items including buckets, mugs, organizers, and cleaning accessories.",
      icon: <Home size={32} />,
      color: "bg-sky-50 text-sky-500 border-sky-200",
      image:
        "https://images.unsplash.com/photo-1620021644782-b7d60515152a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Industrial Items",
      description:
        "Heavy-duty crates, pallets, and robust storage solutions for factories and warehouses.",
      icon: <Factory size={32} />,
      color: "bg-slate-50 text-slate-600 border-slate-200",
      image:
        "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      title: "Custom Molding",
      description:
        "Tailor-made plastic products designed and manufactured to your exact specifications.",
      icon: <Wrench size={32} />,
      color: "bg-indigo-50 text-indigo-500 border-indigo-200",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-1 w-10 bg-sky-500 rounded"></div>
            <h3 className="text-sky-500 font-bold uppercase tracking-wider text-sm">
              Our Catalog
            </h3>
            <div className="h-1 w-10 bg-sky-500 rounded"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Premium Quality <span className="text-blue-900">Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Explore our extensive range of plastic products, manufactured using
            pure virgin plastics and modern molding technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div
                  className={`absolute bottom-4 right-4 w-12 h-12 rounded-full ${product.color} flex items-center justify-center shadow-lg border-2 z-10`}
                >
                  {product.icon}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-500 transition-colors">
                  {product.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                <button className="mt-6 text-blue-900 font-semibold text-sm flex items-center gap-1 hover:text-sky-500 transition-colors">
                  Learn more{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
