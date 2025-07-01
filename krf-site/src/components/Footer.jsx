// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#c27700] text-white py-8 px-4 text-center">
    <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} Koketso Rakhudu Foundation</p>

      <p className="text-sm">
        Designed with ♥ by{" "}
        <a
          href="https://www.astralsolution.tech/"
          className="text-gray-300 hover:text-gray-100 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Astral Solutions
        </a>
      </p>

      <p className="text-sm text-white">
        Accredited by ETDP SETA | NPO: 177/109
      </p>

      <nav>
        <ul className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programmes">Programmes</Link></li>
          <li><Link to="/impact">Impact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/donate" className="hover:underline">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
