import React from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
      alt: "Manufacturing Process",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1596431959828-89c0aebaffab?auto=format&fit=crop&q=80&w=400",
      alt: "Product Line",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1620021644782-b7d60515152a?auto=format&fit=crop&q=80&w=400",
      alt: "Household Plastics",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=800",
      alt: "Industrial Supply",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1563812169558-8120e7df6f50?auto=format&fit=crop&q=80&w=400",
      alt: "Quality Checking",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
      alt: "Factory Interface",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-1 w-10 bg-sky-500 rounded"></div>
              <h3 className="text-sky-400 font-bold uppercase tracking-wider text-sm">
                Visual Journey
              </h3>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              Inside Our <span className="text-sky-500">Facilities</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg"
            >
              Take a look at our state-of-the-art manufacturing processes,
              extensive product range, and dedicated workspace.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="px-6 py-3 border-2 border-slate-700 hover:border-sky-500 rounded-md font-semibold transition-colors duration-300">
              View Instagram
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${image.colSpan} ${image.rowSpan} rounded-xl overflow-hidden relative group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white mb-3">
                    <Expand size={20} />
                  </div>
                  <span className="text-white font-bold tracking-wide">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
