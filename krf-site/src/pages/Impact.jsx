import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

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

const placeholderImage = "https://via.placeholder.com/300x160?text=KRF+Impact";

const Impact = () => {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="bg-white text-black px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-[#c27700] mb-10 text-center">
        Measurable Impact
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {impactStats.map((impact, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setModalData(impact)}
          >
            <img
              src={placeholderImage}
              alt="Impact Visual"
              className="w-full h-40 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-[#c27700]">
                {impact.title}
              </h4>
              <p className="text-sm text-gray-600">Year: {impact.year}</p>
              <p className="text-sm text-gray-600">Beneficiaries: {impact.count}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {modalData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalData(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded-lg p-6 relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-red-500"
              onClick={() => setModalData(null)}
            >
              &times;
            </button>
            <img
              src={placeholderImage}
              alt="Expanded Impact"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold text-[#c27700] mb-2">
              {modalData.title}
            </h2>
            <p className="text-gray-700 mb-1">
              <strong>Year:</strong> {modalData.year}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Beneficiaries:</strong> {modalData.count}
            </p>
            <p className="text-sm text-gray-600">
              This programme empowered local individuals with skills, mentorship,
              and practical training to advance employment and entrepreneurship opportunities.
              For more detailed reporting, kindly contact the KRF team.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Impact;
