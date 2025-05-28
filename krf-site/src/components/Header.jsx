// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-grey-700 border-b border-white-200 shadow-sm">
    <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
     <Link to="/" className="flex items-center space-x-3">
        <img 
          src="/images/KRFLogo.png" 
          alt="Koketso Rakhudu Foundation Logo" 
          className="w-10 h-10 object-contain"
          loading="lazy"
        />
        <span className="text-[#c27700] font-bold text-xl">
          Koketso Rakhudu Foundation
        </span>
      </Link>
      <ul className="flex space-x-6 font-semibold text-sm text-[#c27700]">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/programmes">Programmes</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/donate" className="text-gray-700 hover:underline">Donate</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
