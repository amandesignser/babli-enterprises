import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-blue-900 via-slate-800 to-sky-900"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0ibTIwIDBsMjAgMjAtMjAgMjBMMCAyMHoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgoJCTwvc3ZnPg==')] [background-size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sky-300 font-medium mb-8 border border-white/20"
          >
            <Box size={18} />
            <span>Premium Plastic Manufacturing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Innovating{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
              Plastic Solutions
            </span>{" "}
            for Tomorrow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Babli Enterprises delivers high-quality plastic products, bulk
            supplies, and custom molding tailored to your business needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#products"
              className="px-8 py-4 w-full sm:w-auto rounded-md bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Explore Products <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 w-full sm:w-auto rounded-md bg-transparent border-2 border-slate-300 hover:border-white text-white font-bold text-lg transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-sm mb-2 font-medium tracking-widest uppercase">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
