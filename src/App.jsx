import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
