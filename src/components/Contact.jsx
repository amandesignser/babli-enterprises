import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-900 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-1 w-10 bg-sky-400 rounded"></div>
            <h3 className="text-sky-300 font-bold uppercase tracking-wider text-sm">
              Get in Touch
            </h3>
            <div className="h-1 w-10 bg-sky-400 rounded"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Contact <span className="text-sky-400">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300"
          >
            Ready to start a project or need a quote? Reach out to us and our
            team will get back to you promptly.
          </motion.p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="bg-slate-900 text-white p-10 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0 border border-slate-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-1">
                      Our Location
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      Nagla Rambal, Mohan Nagar
                      <br />
                      100ft Firozabad Road,
                      <br />
                      Agra, Uttar Pradesh – 282006, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0 border border-slate-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-1">
                      Phone Number
                    </h4>
                    <a
                      href="tel:+918791833005"
                      className="text-slate-400 hover:text-sky-400 transition-colors block"
                    >
                      +91 87918 33005
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0 border border-slate-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-1">
                      Email Address
                    </h4>
                    <a
                      href="mailto:info@bablienterprises.com"
                      className="text-slate-400 hover:text-sky-400 transition-colors block"
                    >
                      info@bablienterprises.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social or extra branding could go here */}
            <div className="mt-12 pt-8 border-t border-slate-800 relative z-10">
              <p className="text-slate-400 text-sm">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:w-3/5">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-blue-900 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-white p-2 rounded-2xl shadow-xl h-96 w-full"
        >
          {/* using a stylized map iframe or placeholder */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.810578144415!2d78.0416!3d27.2003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477b!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "0.75rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Babli Enterprises Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
