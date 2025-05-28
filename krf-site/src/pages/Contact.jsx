// src/pages/Contact.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white text-black px-6 py-16 max-w-4xl mx-auto font-sans">
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-10 text-center">Contact Us</h1>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
          <FaMapMarkerAlt className="text-[#D4AF37] text-2xl mx-auto mb-3" />
          <h3 className="font-semibold mb-1">Our Address</h3>
          <p>
            Maile Kopman, Motseng Section <br />
            Stand No. 517, 0365
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
          <FaPhoneAlt className="text-[#D4AF37] text-2xl mx-auto mb-3" />
          <h3 className="font-semibold mb-1">Phone</h3>
          <p>+27 63 644 5723</p>
          <p>+27 82 948 1438</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
          <FaEnvelope className="text-[#D4AF37] text-2xl mx-auto mb-3" />
          <h3 className="font-semibold mb-1">Email</h3>
          <a
            href="mailto:admin@koketsorakhudufoundation.com"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            admin@koketsorakhudufoundation.com
          </a>
        </div>

        {/* Calvin Molokwane - Unified Gold Theme */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-t-4 border-[#D4AF37]">
          <FaEnvelope className="text-[#D4AF37] text-2xl mx-auto mb-3" />
          <h3 className="font-semibold text-[#D4AF37] mb-1">Calvin Molokwane</h3>
          <p className="mb-2">Executive Senior Portfolio: Vice Chancellor & Principal</p>
          <a
            href="mailto:calvin@drkoketsorakhudu.com"
            className="text-[#D4AF37] underline hover:text-yellow-700 transition-colors"
          >
            calvin@drkoketsorakhudu.com
          </a>
          <p className="mt-2">
            Cell:{" "}
            <a href="tel:+27606165450" className="text-[#D4AF37] hover:text-yellow-700">
              +27 60 616 5450
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
