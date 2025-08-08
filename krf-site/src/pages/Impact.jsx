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

// Grouped by year, descending order (2025 first, 2016 last)
const impactStatsByYear = {
  2025: [],
  2024: [
    { title: "LPG CSI Hakem Energies", count: 1000 },
    { title: "Solar Training", count: 15 },
    { title: "W&R Seta Program", count: 300 },
    { title: "Short Learning Program", count: 150 },
  ],
  2023: [
    { title: "Microsoft Dev Program", count: 25 },
    { title: "Lora Biz Training", count: 45 },
    { title: "Office/Project/Business NQF", count: 150 },
  ],
  2022: [
    { title: "Social Employment Fund", count: 62 },
    { title: "Coffee w/ Dr Rakhudu ECD", count: 30 },
    { title: "Metropolitan Literacy", count: 85 },
    { title: "BMW YES Programme", count: 15 },
  ],
  2021: [
    { title: "ABSA & SMME Training", count: 300 },
    { title: "Anglo ECD Programme", count: 450 },
    { title: "Entrepreneurial Skills Program", count: 40 },
  ],
  2020: [
    { title: "Women's Empowerment", count: 20 },
  ],
  2019: [
    { title: "Office & Project Mgt Courses", count: 250 },
  ],
  2018: [
    { title: "Exchange Student Program", count: 20 },
    { title: "Office Practice NQF 4", count: 100 },
    { title: "Project Management NQF 4", count: 100 },
    { title: "Business Practice NQF 4", count: 100 },
    { title: "Youth Leadership Training", count: 50 },
  ],
  2017: [
    { title: "Grade 12 Rewrite Program", count: 200 },
    { title: "Small Business Skills Dev", count: 100 },
  ],
  2016: [
    { title: "Social, Women and Disability", count: 300 },
  ],
};

// Testimonials data
const testimonials = [
  {
    name: "Thabo Mthembu",
    program: "Office Practice NQF 4",
    year: 2018,
    testimonial: "The KRF program transformed my career prospects. I gained valuable skills and confidence that helped me secure employment in the corporate sector."
  },
  {
    name: "Sarah Ndlovu",
    program: "Women's Empowerment",
    year: 2020,
    testimonial: "This program empowered me to start my own business. The financial literacy training was exactly what I needed to succeed."
  },
  {
    name: "Michael Sithole",
    program: "Microsoft Dev Program",
    year: 2023,
    testimonial: "The tech training opened doors I never imagined. I'm now working as a junior developer and continuing to grow my skills."
  }
];

const placeholderImage = "https://via.placeholder.com/300x160?text=KRF+Impact";

// Animated Counter Component
const AnimatedCounter = ({ targetCount, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * targetCount));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [targetCount, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Impact = () => {
  const [modalData, setModalData] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Calculate total people impacted
  const totalPeopleImpacted = Object.values(impactStatsByYear)
    .flat()
    .reduce((total, program) => total + program.count, 0);

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 text-black px-6 py-16 relative">
      {/* Background Design Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#c27700] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-2 bg-[#c27700] opacity-15 rounded-full"></div>

      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-[#c27700] mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Measurable Impact
        </motion.h1>

        {/* Explanation of Measurable Impact */}
        <motion.div 
          className="mb-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c27700]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <p className="text-gray-700 leading-relaxed">
            Measurable impact refers to the quantifiable changes and improvements that result from our programmes and interventions. 
            We track the number of beneficiaries, skills acquired, employment rates, and community development outcomes to ensure 
            our work creates meaningful, lasting change. Each program is evaluated based on specific metrics that demonstrate 
            real progress in education, employment, and community empowerment.
          </p>
        </motion.div>

        {/* People Impacted Counter */}
        <motion.div 
          className="mb-12 text-center bg-gradient-to-r from-[#c27700] to-[#e69500] text-white p-8 rounded-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-3xl font-bold mb-4">People Impacted</h2>
          <div className="text-6xl font-extrabold">
            <AnimatedCounter targetCount={totalPeopleImpacted} />
          </div>
          <p className="text-xl mt-2">Lives Changed Through Our Programs</p>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <h2 className="text-3xl font-bold text-[#c27700] mb-8 text-center">Testimonials</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                    index === activeTestimonial ? 'bg-[#c27700]' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-700 italic mb-4 text-lg">
                "{testimonials[activeTestimonial].testimonial}"
              </p>
              <div>
                <p className="font-semibold text-[#c27700]">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[activeTestimonial].program} • {testimonials[activeTestimonial].year}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact by Year - Grouped and Sorted */}
        {Object.keys(impactStatsByYear)
          .sort((a, b) => b - a) // Descending order
          .map((year) => {
            const programs = impactStatsByYear[year];
            if (programs.length === 0) return null;

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
                  {year} Programs
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {programs.map((impact, idx) => (
                    <motion.div
                      key={`${year}-${idx}`}
                      custom={idx}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                      onClick={() => setModalData({ ...impact, year })}
                    >
                      <img
                        src={placeholderImage}
                        alt="Impact Visual"
                        className="w-full h-40 object-cover rounded-t-lg"
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
                src={placeholderImage}
                alt="Expanded Impact"
                className="w-full h-40 object-cover rounded mb-4"
              />
              
              {/* Testimonials in Modal */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#c27700] mb-2">Testimonials</h3>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="italic text-gray-700 mb-2">
                    "This program provided me with essential skills and opened new opportunities for personal and professional growth."
                  </p>
                  <p className="text-gray-600">- Program Participant</p>
                </div>
              </div>

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
                This programme empowered local individuals with skills, mentorship,
                and practical training to advance employment and entrepreneurship opportunities.
                For more detailed reporting, kindly contact the KRF team.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Impact;