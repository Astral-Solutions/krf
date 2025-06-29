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

const programmes = [
  {
    title: "3-Month Skills Development Courses",
    target: "Unemployed youth and adults",
    outcome: "Enhanced job readiness and confidence",
  },
  {
    title: "First Aid Training (SETA-accredited)",
    target: "Caregivers, professionals, and community members",
    outcome: "Certified lifesaving skills for home and workplace",
  },
  {
    title: "Economic Empowerment Skills",
    target: "Youth, women, and aspiring entrepreneurs",
    outcome: "Financial literacy and sustainable income generation",
  },
  {
    title: "Tech & IT Graduate Programme",
    target: "Recent IT graduates",
    outcome: "Hands-on experience, mentorship, and tech projects",
  },
];

const Programmes = () => (
  <div className="bg-white text-black px-6 py-16 max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-[#c27700] mb-8 text-center">
      Programmes at KRF
    </h1>

    <div className="space-y-10">
      {programmes.map((course, index) => (
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
