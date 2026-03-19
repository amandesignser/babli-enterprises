import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About Us", href: "#about" },
    { title: "Products", href: "#products" },
    { title: "Services", href: "#services" },
    { title: "Gallery", href: "#gallery" },
    { title: "Contact Us", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 shadow-sm ${scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              className="text-2xl font-bold text-primary flex items-center gap-2"
            >
              <span className="text-blue-900">Babli</span>
              <span className="text-sky-500">Enterprises</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-slate-700 hover:text-sky-500 font-medium transition-colors"
              >
                {link.title}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-sky-600 transition-colors font-medium shadow-md shadow-blue-500/20"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-2">
          <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={handleNavClick}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-sky-500 hover:bg-slate-50 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
