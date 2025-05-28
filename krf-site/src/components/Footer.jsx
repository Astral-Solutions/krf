// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#c27700] text-white py-6 px-4 text-center">
    <div className="max-w-5xl mx-auto space-y-2">
      <p>&copy; {new Date().getFullYear()} Koketso Rakhudu Foundation</p>
      <p className="text-sm">
        Designed with ♥ by{" "}
        <a
          href="https://www.astralsolution.tech/"
          className="text-gray-300 hover:text-gray-100 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Astral Solutions
        </a>.
      </p>
      <p className="text-sm text-white">Accredited by ETDP SETA | NPO: 177/109</p>
      <div className="flex justify-center">
 <ul className="flex space-x-6 font-semibold text-center text-gray-700">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/programmes">Programmes</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/donate" className="text-gray-700 hover:underline">Donate</Link></li>
            </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
