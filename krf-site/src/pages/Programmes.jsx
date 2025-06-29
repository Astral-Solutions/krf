// src/pages/Programmes.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const courses = [
  {
    title: "3-Month Skills Development Courses",
    target: "Unemployed youth and adults",
    outcome: "Improved job readiness and confidence",
  },
  {
    title: "Accredited First Aid Training Program",
    target: "Community members, caregivers, and professionals",
    outcome: "Certified first aiders enhancing workplace/home safety",
  },
  {
    title: "Economic Empowerment Skills Program",
    target: "Aspiring entrepreneurs, youth, and women",
    outcome: "Economic participation and small business creation",
  },
  {
    title: "Skills Programme for IT Graduates",
    target: "Recent IT graduates",
    outcome: "Workplace readiness and hands-on experience",
  },
  {
    title: "Small Business and Entrepreneurial Support",
    target: "Youth (18–35) from disadvantaged communities",
    outcome: "Increased employability & entrepreneurship",
  },
];

const Programmes = () => (
  <div className="bg-white text-black px-6 py-16 max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-[#c27700] mb-8 text-center">
      Programmes at KRF
    </h1>
    <div className="space-y-10">
      {courses.map((course, index) => (
        <motion.div
          key={index}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold text-[#c27700] mb-2">
            {course.title}
          </h2>
          <p className="text-gray-700 mb-1">
            <strong>Target Group:</strong> {course.target}
          </p>
          <p className="text-gray-700">
            <strong>Outcome:</strong> {course.outcome}
          </p>
        </motion.div>
      ))}
    </div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={5}
      className="mt-20"
    >
      <h2 className="text-3xl font-bold text-[#c27700] mb-4">
        Programme Activities
      </h2>
      <ul className="list-disc ml-6 space-y-1 text-gray-700 text-lg">
        <li>Accredited SETA Training</li>
        <li>Job Readiness Workshops</li>
        <li>Mentorship and Placement Support</li>
      </ul>
    </motion.div>
  </div>
);

export default Programmes;
