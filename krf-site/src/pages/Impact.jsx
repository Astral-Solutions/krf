import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const impacts = [
  { year: 2016, title: "Social, Women & Disability – Life Development Programme" },
  { year: 2017, title: "Small Business Skills Development Programme" },
  { year: 2017, title: "Grade 12 Re-write Programme" },
  { year: 2018, title: "Exchange Student Programme" },
  { year: 2018, title: "Office Practice NQF Level 4" },
  { year: 2018, title: "Project Management NQF Level 4" },
  { year: 2018, title: "Business Practice NQF Level 4" },
  { year: 2019, title: "Office Management & Project Management Short Courses" },
  { year: 2021, title: "ABSA & Classic Oriental SMME Training" },
  { year: 2021, title: "Anglo American Dikuno Trust ECD Programme" },
  { year: 2022, title: "Social Employment Fund Programme" },
  { year: 2022, title: "Coffee with Dr Koketso Rakhudu – ECD Programme" },
  { year: 2022, title: "Metropolitan Financial Literacy Workshop" },
  { year: 2022, title: "BMW YES Programme" },
  { year: 2023, title: "Lora Small Business Training" },
  { year: 2023, title: "Microsoft Software Development Programme" },
  { year: 2023, title: "Office Practice, Project Management & Business Practice" },
];

const Impact = () => (
  <div className="bg-white text-black px-6 py-16 max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-[#c27700] mb-10 text-center">
      Our Impact
    </h1>
    <div className="grid md:grid-cols-2 gap-6">
      {impacts.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-100 border border-gray-200 p-5 rounded-lg shadow-md"
        >
          <img
            src={`/images/impact-placeholder-${(index % 6) + 1}.jpg`}
            alt={item.title}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-bold text-[#c27700] mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700">Year: {item.year}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Impact;
