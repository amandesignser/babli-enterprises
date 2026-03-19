import React from "react";
import { motion } from "framer-motion";
import { Target, Award, ShieldCheck } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/VisualSide */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
              {/* Replace with actual image placeholder later if needed, using a gradient for now */}
              <div className="w-full h-full bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563812169558-8120e7df6f50?auto=format&fit=crop&q=80&w=800"
                  alt="Plastic Manufacturing Process"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sky-100 rounded-full z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full z-0"></div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-10 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100 flex items-center gap-4">
              <div className="text-4xl font-extrabold text-sky-500">15+</div>
              <div className="text-sm font-bold text-slate-700 leading-tight">
                Years of
                <br />
                Experience
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-1 w-10 bg-sky-500 rounded"></div>
              <h3 className="text-sky-500 font-bold uppercase tracking-wider text-sm">
                About Babli Enterprises
              </h3>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
            >
              Leading the Way in{" "}
              <span className="text-blue-900">Plastic Manufacturing</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 mb-8"
            >
              Based in the heart of Agra, Babli Enterprises (बबली एंटरप्राइजेज)
              has established itself as a premier destination for high-quality
              plastic products and custom molding solutions. We bridge the gap
              between quality manufacturing and reliable trading.
            </motion.p>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-900">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Our Mission
                  </h4>
                  <p className="text-slate-600">
                    To provide innovative, durable, and sustainable plastic
                    products that exceed our customers' expectations while
                    maintaining competitive pricing.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Our Vision
                  </h4>
                  <p className="text-slate-600">
                    To be the most recognized and trusted name in India's
                    plastic trading and manufacturing sector through continuous
                    continuous improvement.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-900">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Quality Assurance
                  </h4>
                  <p className="text-slate-600">
                    We utilize state-of-the-art machinery and rigorous quality
                    control protocols to ensure every product perfectly meets
                    industry standards.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
