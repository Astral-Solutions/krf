// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Increased Size */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/images/KRFLogo.png"
            alt="Koketso Rakhudu Foundation Logo"
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </Link>

        {/* Desktop Nav - Updated with new links */}
        <ul className="hidden md:flex space-x-6 font-medium text-[#c27700] text-sm">
          <li>
            <Link
              to="/about"
              className="hover:text-[#a25e00] transition-colors duration-200 hover:underline"
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              to="/leadership"
              className="hover:text-[#a25e00] transition-colors duration-200 hover:underline"
            >
              Leadership
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className="hover:text-[#a25e00] transition-colors duration-200 hover:underline"
            >
              Registration
            </Link>
          </li> */}
          <li>
            <Link
              to="/impact"
              className="hover:text-[#a25e00] transition-colors duration-200 hover:underline"
            >
              Impact
            </Link>
            
          </li>
          <li>
            <Link
              to="/milestones"
              className="hover:text-[#a25e00] transition-colors duration-200 hover:underline"
            >
              Milestones
            </Link>
          </li>
           <li>
            <Link
              to="/servicesprograms"
              className="hover:text-[#a25e00] transition-colors duration-200 hover:underline"
            >
              Services & Programs
            </Link>
          </li>
          {/* <li>
            <Link
              to="/gallery"
              className="hover:text-[#a25e00] transition-colors duration-200 hover:underline"
            >
              Gallery
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              className="hover:text-[#a25e00] transition-colors duration-200 hover:underline"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              className="bg-[#c27700] text-white px-6 py-2 rounded-full hover:bg-[#a25e00] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 font-semibold"
            >
              Donate Now!!!
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#c27700] focus:outline-none hover:text-[#a25e00] transition-colors duration-200"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown - Updated with new links */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-3 font-medium text-[#c27700] shadow-sm border-t border-gray-200">
          <li>
            <Link
              to="/donate"
              onClick={() => setMenuOpen(false)}
              className="inline-block w-full bg-[#c27700] text-white px-4 py-3 text-center rounded-full hover:bg-[#a25e00] transition font-semibold"
            >
              Donate Now!!!
            </Link>
          </li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          {/* <li><Link to="/leadership" onClick={() => setMenuOpen(false)}>Leadership</Link></li> */}
          <li><Link to="/impact" onClick={() => setMenuOpen(false)}>Impact</Link></li>
          <li><Link to="/milestones" onClick={() => setMenuOpen(false)}>Milestones</Link></li>
          {/* <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li> */}
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          {/* <li><Link to="/registration" onClick={() => setMenuOpen(false)}>Registration</Link></li> */}
          <li><Link to="/servicesPrograms" onClick={()=> setMenuOpen(false)}>ServicesPrograms</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Header;