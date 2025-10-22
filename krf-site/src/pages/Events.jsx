import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Village Economy Indaba 2025",
    date: "March 2025",
    location: "Rustenburg Civic Centre",
    description:
      "Annual gathering of entrepreneurs, local leaders, and innovators discussing economic growth in rural communities.",
    image: "/images/VillageIndaba2025.jpg",
  },
  {
    title: "Youth Leadership Summit",
    date: "August 2025",
    location: "KRF Campus – Tsitsing",
    description:
      "A week-long leadership immersion empowering youth with skills in entrepreneurship, digital literacy, and civic engagement.",
    image: "/images/YouthSummit.jpg",
  },
  {
    title: "Koketso Rakhudu Excellence Awards",
    date: "December 2025",
    location: "Sun City Convention Hall",
    description:
      "Honoring individuals who exemplify excellence, resilience, and innovation within their communities.",
    image: "/images/ExcellenceAwards.jpg",
  },
];

const Events = () => (
  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 px-6 py-16">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-bold text-[#c27700] text-center mb-12"
    >
      Upcoming Events
    </motion.h1>
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
      {events.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#c27700] mb-2">{event.title}</h3>
            <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>
            <p className="text-gray-700 mt-2">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Events;
