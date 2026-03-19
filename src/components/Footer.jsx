import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6 flex gap-2">
              <span>Babli</span>{" "}
              <span className="text-sky-400">Enterprises</span>
            </h2>
            <p className="text-slate-400 mb-6 max-w-md">
              Your trusted partner in high-quality plastic products
              manufacturing and trading. Dedicated to excellence, innovation,
              and customer satisfaction since our inception.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="hover:text-sky-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-sky-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-sky-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-sky-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-sky-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-sky-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-sky-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-sm">
                  Nagla Rambal, Mohan Nagar 100ft Firozabad Road, Agra, Uttar
                  Pradesh – 282006, India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-sky-400 flex-shrink-0" size={20} />
                <a
                  href="tel:+918791833005"
                  className="hover:text-white transition-colors"
                >
                  +91 87918 33005
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sky-400 flex-shrink-0" size={20} />
                <a
                  href="mailto:info@bablienterprises.com"
                  className="hover:text-white transition-colors"
                >
                  info@bablienterprises.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {currentYear} Babli Enterprises (बबली एंटरप्राइजेज). All
            rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
