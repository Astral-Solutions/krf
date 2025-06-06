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
  {
    title: "Small Business & SMME Support",
    target: "Unemployed youth and adults (18–35)",
    outcome: "Startups, self-employment, and growth partnerships",
  },
];

const Programmes = () => (
  <div className="bg-white text-black px-6 py-16 max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-[#c27700] mb-10 text-center">
      KRF Programme Offerings
    </h1>

    <div className="space-y-10">
      {programmes.map((prog, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-[#c27700] mb-2">{prog.title}</h2>
          <p className="text-gray-700"><strong>Target:</strong> {prog.target}</p>
          <p className="text-gray-700"><strong>Outcome:</strong> {prog.outcome}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={6}
      className="mt-20"
    >
      <h2 className="text-3xl font-bold text-[#c27700] mb-4">Activities Overview</h2>
      <ul className="list-disc ml-6 text-lg space-y-2 text-gray-700">
        <li>SETA-accredited training & qualifications</li>
        <li>Outcome-based job readiness workshops</li>
        <li>Internship, mentorship, and placement support</li>
        <li>Entrepreneurship & cooperative incubation</li>
        <li>Use of immersive learning (AR/VR) in delivery</li>
      </ul>
    </motion.div>
  </div>
);

export default Programmes;
