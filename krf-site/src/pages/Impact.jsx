// src/pages/Impact.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

const placeholderImage = "/images/KRFDesign.jpg";

// Grouped by year, descending order (2025 first, 2016 last)
const impactStatsByYear = {
  2025: [],
  2024: [
    { title: "LPG CSI Hakem Energies", count: 1000, image: "/images/LPGCommunity.jpeg" },
    { title: "Solar Training", count: 15, image: "/images/Students4.jpeg" },
    { title: "W&R Seta Program", count: 300, image: "/images/Students.jpeg" },
    { title: "Short Learning Program", count: 150, image: "/images/Students1.jpeg" },
  ],
  2023: [
    { title: "Microsoft Dev Program", count: 25, image: "/images/IT.jpeg" },
    { title: "Lora Biz Training", count: 45, image: placeholderImage },
    { title: "Office/Project/Business NQF", count: 150, image: "/images/Students2.jpeg" },
  ],
  2022: [
    { title: "Social Employment Fund", count: 62, image:  "/images/Students3.jpeg" },
    { title: "Coffee w/ Dr Rakhudu ECD", count: 30, image: "/images/CoffeeDesign1.jpg" },
    { title: "Metropolitan Literacy", count: 85, image: placeholderImage },
    { title: "BMW YES Programme", count: 15, image: placeholderImage },
  ],
  2021: [
    { title: "ABSA & SMME Training", count: 300, image: placeholderImage },
    { title: "Anglo ECD Programme", count: 450, image: placeholderImage },
    { title: "Entrepreneurial Skills Program", count: 40, image: placeholderImage },
  ],
  2020: [
    { title: "Women's Empowerment", count: 20, image: placeholderImage },
  ],
  2019: [
    { title: "Office & Project Mgt Courses", count: 250, image: placeholderImage },
  ],
  2018: [
    { title: "Exchange Student Program", count: 20, image: placeholderImage },
    { title: "Office Practice NQF 4", count: 100, image: placeholderImage },
    { title: "Project Management NQF 4", count: 100, image: placeholderImage },
    { title: "Business Practice NQF 4", count: 100, image: placeholderImage },
    { title: "Youth Leadership Training", count: 50, image: placeholderImage },
  ],
  2017: [
    { title: "Grade 12 Rewrite Program", count: 200, image: placeholderImage },
    { title: "Small Business Skills Dev", count: 100, image: placeholderImage },
  ],
  2016: [
    { title: "Social, Women and Disability", count: 300, image: placeholderImage },
  ],
};

// Animated counter
const AnimatedCounter = ({ targetCount, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * targetCount));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [targetCount, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Impact = () => {
  const [modalData, setModalData] = useState(null);
  const totalPeopleImpacted = 3267;

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 text-black px-6 py-16 relative">
      {/* Background Design Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#c27700] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-2 bg-[#c27700] opacity-15 rounded-full"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-[#c27700] mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Measurable Impact
        </motion.h1>

        {/* Definition */}
        <motion.div
          className="mb-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c27700]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-700 leading-relaxed">
            Measurable impact refers to the quantifiable improvements from our programmes
            and interventions. We monitor beneficiary reach, skills gained, employment outcomes,
            and community growth to ensure meaningful, lasting change across South Africa.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          className="mb-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#c27700]">
            <div className="text-4xl font-extrabold text-[#c27700] mb-2">
              <AnimatedCounter targetCount={totalPeopleImpacted} />
            </div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Total Beneficiaries</p>
            <p className="text-xs text-gray-600">Lives transformed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#c27700]">
            <div className="text-4xl font-extrabold text-[#c27700] mb-2">R5.7M</div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Investment Value</p>
            <p className="text-xs text-gray-600">Community Impact</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#c27700]">
            <div className="text-4xl font-extrabold text-[#c27700] mb-2">25+</div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Training Programmes</p>
            <p className="text-xs text-gray-600">Diverse Offering</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#c27700]">
            <div className="text-4xl font-extrabold text-[#c27700] mb-2">3</div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Training Centers</p>
            <p className="text-xs text-gray-600">Regional Coverage</p>
          </div>
        </motion.div>

        {/* Learner Demographics */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#c27700] mb-8 text-center">Learner Demographics</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "👔", label: "Adults (18–55)", desc: "Career change and upskilling" },
              { icon: "🏢", label: "Corporate", desc: "SMEs & public sector teams" },
              { icon: "🎓", label: "School Leavers & Youth", desc: "Future workforce preparation" },
              { icon: "🤝", label: "Underemployed", desc: "Community inclusion and support" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-[#c27700] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#c27700] mb-8 text-center">
            Key Achievements Since 2016
          </h2>
        </motion.div>

        {/* Achievements by Year */}
        {Object.keys(impactStatsByYear)
          .sort((a, b) => b - a)
          .map((year) => {
            const programs = impactStatsByYear[year];
            if (!programs.length) return null;

            return (
              <motion.div
                key={year}
                className="mb-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#c27700] mb-6 text-center">
                  {year} Programmes
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {programs.map((impact, i) => (
                    <motion.div
                      key={`${year}-${i}`}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                      onClick={() => setModalData({ ...impact, year })}
                    >
                      <img
                        src={impact.image || placeholderImage}
                        alt={impact.title}
                        className="w-full h-40 object-contain rounded-t-lg"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-[#c27700] mb-2">
                          {impact.title}
                        </h4>
                        <p className="text-sm text-gray-600">Year: {year}</p>
                        <p className="text-sm text-gray-600 font-medium">
                          Beneficiaries: {impact.count.toLocaleString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}

        {/* Modal */}
        {modalData && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setModalData(null)}
          >
            <div
              className="bg-white max-w-md w-full rounded-lg p-6 relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-red-500 transition-colors"
                onClick={() => setModalData(null)}
              >
                &times;
              </button>
              <img
                src={modalData.image || placeholderImage}
                alt={modalData.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-bold text-[#c27700] mb-2">
                {modalData.title}
              </h2>
              <p className="text-gray-700 mb-1">
                <strong>Year:</strong> {modalData.year}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Beneficiaries:</strong> {modalData.count.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                This programme empowered individuals with practical training,
                mentorship, and skills for long-term economic inclusion and
                community development.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Impact;
