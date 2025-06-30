// src/pages/Programmes.jsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
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
    <h1 className="text-4xl font-bold text-[#c27700] mb-10 text-center">
      Our Programmes
    </h1>
    <div className="space-y-10">
      {programmes.map((p, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-[#c27700] mb-2">{p.title}</h2>
          <p className="text-gray-700 mb-1"><strong>Target:</strong> {p.target}</p>
          <p className="text-gray-700"><strong>Outcome:</strong> {p.outcome}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Programmes;
