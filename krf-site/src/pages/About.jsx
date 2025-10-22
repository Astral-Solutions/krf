// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <div className="bg-white text-black font-sans px-4 py-16 max-w-6xl mx-auto space-y-20">
      {/* ================= FOUNDATION OVERVIEW ================= */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-[#c27700] mb-4">About Us</h1>
        <p className="text-lg leading-relaxed">
          The Koketso Rakhudu Foundation was established on 1 May 2016 to
          address educational and skills gaps in underserved communities.
          As an accredited training center, the Foundation provides
          SETA-recognized programmes that prepare individuals for employment,
          entrepreneurship, and personal development.
          <br />
          <br />
          KRF was inspired by the Royal Bafokeng Nation Vision Plan 2035.
          It was planted from a seed passed to Kgosana Dr. Koketso Rakhudu by
          Kgosi Leruo Molotlegi, and today it thrives as a response to the needs
          of rural South Africa through sustainable community-based solutions.
        </p>
      </motion.section>

      {/* ================= CHANCELLOR PROFILE ================= */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#c27700] mb-6 text-center">
          Chancellor's Profile: Dr. Koketso Rakhudu
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src="/images/KgosanaChancellor.jpg"
            alt="Dr Kgosana Koketso Rakhudu"
            loading="lazy"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#c27700] shadow-lg"
          />
        </div>

        <p className="text-lg leading-relaxed">
          Dr. Koketso Rakhudu is the Chancellor of the Koketso Rakhudu
          Foundation Community Education and Training Centre, where he is
          dedicated to advancing education, fostering cultural exchange, and
          driving community development. A prominent leader within the Royal
          Bafokeng Nation, he holds the title of Kgosana of the Tsitsing
          community.
          <br />
          <br />
          Dr. Rakhudu also serves as a Guest Lecturer and Strategic
          Implementation Partner at several prestigious universities, including
          the University of South Africa and North West University, focusing on
          leadership and governance.
          <br />
          <br />
          He is the Deputy Chairperson of the Provincial Council on AIDS and
          Founder of The Village Economy Indaba Programme — a 12-month
          initiative that addresses systemic economic challenges by providing
          rural entrepreneurs with training, funding access, infrastructure
          development, and sustainable market linkages.
          <br />
          <br />
          Dr. Rakhudu is an active researcher with the South African Population
          Research Infrastructure Network, collaborating with The Aurum
          Institute and Johns Hopkins University. He was named one of the Top 30
          Fast-Rising Professionals in Public Administration and Community
          Leadership by the Pan African Leadership Institute.
        </p>
      </motion.section>

      {/* ================= VISION & MISSION ================= */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#c27700] mb-6 text-center">
          Vision & Mission
        </h2>

        <div className="text-center mb-6">
          <p className="text-xl font-semibold mb-2">Vision</p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Creating a community where every individual has access to quality
            education and training opportunities that unlock their full
            potential and contribute to sustainable community development.
          </p>
          <p className="text-lg italic text-[#c27700] mt-4">
            “Empowering Lives with Excellence”
          </p>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Mission</p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            A forward-thinking education approach focused on challenging,
            innovative, personalized learning within our community-based space.
            We nurture and inspire students to achieve personal excellence while
            embracing diversity, developing character and self-worth, guided by
            our values of empathy, excellence, integrity, and respect.
          </p>
          <div className="flex justify-center">
            <img
              src="/images/Grad.jpg"
              alt="KRF Graduations"
              loading="lazy"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg border-4 border-[#c27700]"
            />
          </div>
        </div>
      </motion.section>

      {/* ================= CORE VALUES ================= */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#c27700] mb-6 text-center">
          Our Core Values
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
          At our Community Education & Training Centre, we are grounded in a
          shared commitment to excellence, guided by these fundamental
          principles that shape everything we do.
        </p>
        <ul className="space-y-4 text-lg max-w-4xl mx-auto list-disc list-inside">
          <li>
            <strong>Lifelong Learning</strong>: Education is a continuous
            journey that empowers individuals at every stage of life.
          </li>
          <li>
            <strong>Integrity & Accountability</strong>: We uphold ethical
            decision-making, transparency, and responsibility in all our
            actions.
          </li>
          <li>
            <strong>Excellence</strong>: We strive for the highest standards in
            teaching, leadership, and operational delivery.
          </li>
          <li>
            <strong>Inclusivity and Equity</strong>: We provide learning
            opportunities that embrace and respect diversity.
          </li>
          <li>
            <strong>Innovation & Curiosity</strong>: We nurture critical
            thinking, creativity, and forward-thinking solutions.
          </li>
          <li>
            <strong>Community Empowerment</strong>: We serve as a bridge between
            individuals and opportunity.
          </li>
          <li>
            <strong>Collaboration & Partnership</strong>: Stakeholder synergy is
            key to creating meaningful and scalable impact.
          </li>
        </ul>
      </motion.section>

      {/* ================= PARTNERSHIPS ================= */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#c27700] mb-8 text-center">
          Key Partnerships
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {Array.from({ length: 15 }, (_, i) => (
            <img
              key={i}
              src={`/images/partner${i + 1}.jpg`}
              alt={`Partner ${i + 1}`}
              className="h-20 md:h-24 object-contain mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
