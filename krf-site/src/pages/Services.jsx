// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Services = () => {
  return (
    <div className="bg-white text-black font-sans px-4 py-16 max-w-6xl mx-auto space-y-20">
      <motion.section variants={fadeIn} initial="hidden" animate="show">
        <h1 className="text-4xl font-bold text-[#c27700] mb-4">Services We Provide</h1>
        <ul className="list-disc ml-6 text-lg space-y-2">
          <li>Accredited Skills Programmes & Qualifications</li>
          <li>Recognition of Prior Learning (RPL)</li>
          <li>Community Workshops & Short Courses</li>
          <li>Career Guidance and Mentorship</li>
          <li>Support for Trainers: Assessors, Moderators, and Facilitators</li>
          <li>Project Design & Implementation Support for Development Initiatives</li>
        </ul>
      </motion.section>

      <motion.section variants={fadeIn} initial="hidden" animate="show">
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Who It’s For</h2>
        <ul className="list-disc ml-6 text-lg space-y-2">
          <li>Unemployed Youth</li>
          <li>Adults looking to upskill or reskill</li>
          <li>Community organizations and cooperatives</li>
          <li>Education and training professionals</li>
        </ul>
      </motion.section>

      <motion.section variants={fadeIn} initial="hidden" animate="show">
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">How to Access Our Services</h2>
        <ul className="list-disc ml-6 text-lg space-y-2">
          <li>Visit our office</li>
          <li>Contact us online</li>
        </ul>
      </motion.section>

      <motion.section variants={fadeIn} initial="hidden" animate="show">
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Coming Soon</h2>
        <p className="text-lg">
          A dedicated <strong>Student Portal</strong> is in planning. Stay tuned for updates.
        </p>
      </motion.section>

      <motion.section variants={fadeIn} initial="hidden" animate="show">
  <h2 className="text-3xl font-bold text-[#c27700] mb-4">Make a Donation</h2>
  <p className="text-lg">
    Your support helps us continue empowering communities through education.
  </p>
  <div className="mt-4 bg-[#f8f8f8] p-4 rounded-xl">
    <p className="text-lg font-semibold">Bank Account Details</p>
    <p className="text-lg">Account Holder: KOKETSO RAKHUDU FOUNDATION</p>
    <p className="text-lg">ID/Reg Number: 177/109/NPO</p>
    <p className="text-lg">Account Type: Current</p>
    <p className="text-lg">Bank Name: Standard Bank</p>
    <p className="text-lg">Branch Name: Waterfall Mall</p>
    <p className="text-lg">Branch Code: 007045</p>
    <p className="text-lg">Account Number: 10 12 997 812 2</p>
  </div>
</motion.section>


      <motion.section variants={fadeIn} initial="hidden" animate="show">
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Contact & Socials</h2>
        <p className="text-lg">Email: info@krf.org.za</p>
        <p className="text-lg">Phone: +27 12 345 6789</p>
        <div className="flex gap-4 mt-2">
          <a href="https://www.linkedin.com/in/krfoundation" target="_blank" rel="noreferrer" className="text-blue-700 underline">LinkedIn</a>
          <a href="https://www.instagram.com/krfoundation" target="_blank" rel="noreferrer" className="text-pink-600 underline">Instagram</a>
          <a href="https://www.facebook.com/krfoundation" target="_blank" rel="noreferrer" className="text-blue-600 underline">Facebook</a>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
