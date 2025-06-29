// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/KRFLogo.png"
            alt="Koketso Rakhudu Foundation Logo"
            className="w-10 h-10 object-contain"
            loading="lazy"
          />
        
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium text-[#c27700] text-sm">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programmes">Programmes</Link></li>
          <li><Link to="/impact">Impact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link
              to="/donate"
              className="bg-[#c27700] text-white px-4 py-1.5 rounded hover:bg-[#a25e00] transition"
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#c27700] focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-3 font-medium text-[#c27700] shadow-sm border-t border-gray-200">
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/programmes" onClick={() => setMenuOpen(false)}>Programmes</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link
              to="/donate"
              onClick={() => setMenuOpen(false)}
              className="inline-block w-full bg-[#c27700] text-white px-4 py-2 text-center rounded hover:bg-[#a25e00] transition"
            >
              Donate
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
