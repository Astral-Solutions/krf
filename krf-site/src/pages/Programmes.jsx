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

const impactStats = [
  { year: 2016, title: "Social, Women and Disability", count: 300 },
  { year: 2017, title: "Grade 12 Rewrite Program", count: 200 },
  { year: 2017, title: "Small Business Skills Dev", count: 100 },
  { year: 2018, title: "Exchange Student Program", count: 20 },
  { year: 2018, title: "Office Practice NQF 4", count: 100 },
  { year: 2018, title: "Project Management NQF 4", count: 100 },
  { year: 2018, title: "Business Practice NQF 4", count: 100 },
  { year: 2018, title: "Youth Leadership Training", count: 50 },
  { year: 2019, title: "Office & Project Mgt Courses", count: 250 },
  { year: 2020, title: "Women’s Empowerment", count: 20 },
  { year: 2021, title: "ABSA & SMME Training", count: 300 },
  { year: 2021, title: "Anglo ECD Programme", count: 450 },
  { year: 2021, title: "Entrepreneurial Skills Program", count: 40 },
  { year: 2022, title: "Social Employment Fund", count: 62 },
  { year: 2022, title: "Coffee w/ Dr Rakhudu ECD", count: 30 },
  { year: 2022, title: "Metropolitan Literacy", count: 85 },
  { year: 2022, title: "BMW YES Programme", count: 15 },
  { year: 2023, title: "Microsoft Dev Program", count: 25 },
  { year: 2023, title: "Lora Biz Training", count: 45 },
  { year: 2023, title: "Office/Project/Business NQF", count: 150 },
  { year: 2024, title: "LPG CSI Hakem Energies", count: 1000 },
  { year: 2024, title: "Solar Training", count: 15 },
  { year: 2024, title: "W&R Seta Program", count: 300 },
  { year: 2024, title: "Short Learning Program", count: 150 },
];

const Programmes = () => {
  return (
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

      {/* Activities Section */}
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

      {/* Measurable Impact Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={6}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold text-[#c27700] mb-6">
          Measurable Impact
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {impactStats.map((impact, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-[#c27700]">
                {impact.title} ({impact.year})
              </h4>
              <p className="text-gray-700">Beneficiaries: {impact.count}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Programmes;
