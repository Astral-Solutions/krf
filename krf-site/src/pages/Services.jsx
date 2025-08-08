import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Services = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 text-black font-sans px-4 py-16 relative">
      {/* Background Design Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#c27700] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-2 bg-[#c27700] opacity-15 rounded-full"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-[#c27700] rounded-full opacity-5"></div>
      <div className="absolute bottom-1/3 right-20 w-1 h-32 bg-gradient-to-t from-[#c27700] to-transparent opacity-20"></div>

      <div className="max-w-6xl mx-auto space-y-16">
        
        <motion.section variants={fadeIn} initial="hidden" animate="show">
          <h1 className="text-4xl font-bold text-[#c27700] mb-6 text-center">Services We Provide</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c27700]">
            <ul className="list-disc ml-6 text-lg space-y-3 text-gray-700">
              <li>Accredited Skills Programmes & Qualifications</li>
              <li>Recognition of Prior Learning (RPL)</li>
              <li>Community Workshops & Short Courses</li>
              <li>Career Guidance and Mentorship</li>
              <li>Support for Trainers: Assessors, Moderators, and Facilitators</li>
              <li>Project Design & Implementation Support for Development Initiatives</li>
            </ul>
          </div>
        </motion.section>

        <motion.section variants={fadeIn} initial="hidden" animate="show">
          <h2 className="text-3xl font-bold text-[#c27700] mb-6 text-center">Who It Is For</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c27700]">
            <ul className="list-disc ml-6 text-lg space-y-3 text-gray-700">
              <li>Unemployed Youth</li>
              <li>Adults looking to upskill or reskill</li>
              <li>Community organizations and cooperatives</li>
              <li>Education and training professionals</li>
            </ul>
          </div>
        </motion.section>

        <motion.section variants={fadeIn} initial="hidden" animate="show">
          <h2 className="text-3xl font-bold text-[#c27700] mb-6 text-center">Coming Soon</h2>
          <div className="bg-gradient-to-r from-[#c27700] to-[#e69500] text-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-lg">
              A dedicated <strong>Student Portal</strong> is in planning. Stay tuned for updates.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Services;