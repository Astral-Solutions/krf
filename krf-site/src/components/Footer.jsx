// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#c27700] text-white py-6 px-4 text-center">
    <div className="max-w-6xl mx-auto flex flex-col items-center space-y-3">
      {/* Navigation Links */}
      <nav>
        <ul className="flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-white">
          <li><Link to="/" className="hover:text-yellow-200 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-200 transition-colors">About</Link></li>
          <li><Link to="/impact" className="hover:text-yellow-200 transition-colors">Impact</Link></li>
          <li><Link to="/milestones" className="hover:text-yellow-200 transition-colors">Milestones</Link></li>
          <li><Link to="/servicesprograms" className="hover:text-yellow-200 transition-colors">Services & Programs</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-200 transition-colors">Contact</Link></li>
          <li>
            <Link to="/donate" className="hover:text-yellow-200 transition-colors font-semibold">
              Donate
            </Link>
          </li>
        </ul>
      </nav>

      {/* Accreditation Info */}
      <p className="text-xs text-yellow-100">
        Accredited by ETDP SETA | NPO: 177/109
      </p>

      {/* Copyright */}
      <div className="flex flex-col items-center space-y-1">
        <p className="text-xs">&copy; {new Date().getFullYear()} Koketso Rakhudu Foundation</p>
        <p className="text-xs">
          Designed with ♥ by{" "}
          <a
            href="https://www.astralsolution.tech/"
            className="text-yellow-200 hover:text-yellow-100 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Astral Solutions
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
