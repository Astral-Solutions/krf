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
      {/* Foundation Overview */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h1 className="text-4xl font-bold text-[#c27700] mb-4">About Us</h1>
        <p className="text-lg leading-relaxed">
          The Koketso Rakhudu Foundation was established on 1 May 2016 to address educational and skills gaps in underserved communities.
          As an accredited training center, the Foundation provides SETA-recognized programmes that prepare individuals for employment,
          entrepreneurship, and personal development.
          <br /><br />
          KRF was inspired by the Royal Bafokeng Nation Vision Plan 2035. It was planted from a seed passed to Kgosana Dr. Koketso Rakhudu by
          Kgosi Leruo Molotlegi, and today it thrives as a response to the needs of rural South Africa through sustainable community-based solutions.
        </p>
      </motion.section>

      {/* Chancellor Profile */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="mb-6">
    <img
      src="/images/Kgosanachancellor.jpg"
      alt="Dr. Koketso Rakhudu"
      className="w-48 mx-auto rounded shadow-md"
    />
  </div>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Chancellor’s Profile: Dr. Koketso Rakhudu</h2>
        <p className="text-lg leading-relaxed">
          Dr. Koketso Rakhudu is the Chancellor of the Koketso Rakhudu Foundation Community Education and Training Centre,
          where he is dedicated to advancing education, fostering cultural exchange, and driving community development.
          A prominent leader within the Royal Bafokeng Nation, he holds the title of Kgosana of the Tsitsing community.
          <br /><br />
          Dr. Rakhudu also serves as a Guest Lecturer and Strategic Implementation Partner at several prestigious universities,
          including the University of South Africa and North West University, focusing on leadership and governance.
          <br /><br />
          He is the Deputy Chairperson of the Provincial Council on AIDS and Founder of The Village Economy Indaba Programme—
          a 12-month initiative that addresses systemic economic challenges by providing rural entrepreneurs with training,
          funding access, infrastructure development, and sustainable market linkages.
          <br /><br />
          Dr. Rakhudu is an active researcher with the South African Population Research Infrastructure Network,
          collaborating with The Aurum Institute and Johns Hopkins University. He was named one of the Top 30 Fast-Rising Professionals
          in Public Administration and Community Leadership by the Pan African Leadership Institute.
        </p>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Vision & Mission</h2>
        <p className="text-lg mb-4"><strong>Vision:</strong> To empower lives with excellence by providing high-quality, relevant, and accessible education.</p>
        <p className="text-lg"><strong>Mission:</strong></p>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-lg">
          <li>Delivering accredited skills programmes and full qualifications</li>
          <li>Supporting lifelong learning and recognition of prior learning</li>
          <li>Hosting practical, outcome-based workshops</li>
          <li>Partnering with reputable suppliers and SETAs</li>
          <li>Fostering a high-performance, participatory work culture</li>
          <li>Continuously improving our training systems and solutions</li>
          <li>Aligning development with the Royal Bafokeng Nation Vision 2035</li>
        </ul>
      </motion.section>

      {/* Core Values */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Core Values</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Lifelong Learning 📚</strong>: We cultivate a culture of ongoing growth and development.</li>
          <li><strong>Community Empowerment 🤝</strong>: We empower communities with knowledge and self-determination.</li>
          <li><strong>Excellence in Education 🎓</strong>: We uphold innovation and impact in all educational pursuits.</li>
          <li><strong>Inclusivity & Diversity 🌍</strong>: We honor and integrate diverse perspectives and backgrounds.</li>
          <li><strong>Ethical Leadership 🧭</strong>: We lead with purpose, transparency, and accountability.</li>
          <li><strong>Community-Centric Approach</strong>: Our solutions are crafted with local ownership and impact in mind.</li>
          <li><strong>Sustainability</strong>: Every project aims for lasting transformation and resilience.</li>
          <li><strong>Collaboration</strong>: We join forces with diverse stakeholders to multiply success.</li>
        </ul>
      </motion.section>

      {/* Partnerships */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Key Partnerships</h2>
       <div className="flex flex-wrap justify-center gap-8">
    <img
      src="/images/partner1.jpg"
      alt="Partner 1"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner2.jpg"
      alt="Partner 2"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner3.jpg"
      alt="Partner 3"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner4.jpg"
      alt="Partner 4"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner5.jpg"
      alt="Partner 5"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner6.jpg"
      alt="Partner 6"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner7.jpg"
      alt="Partner 7"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner8.jpg"
      alt="Partner 8"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner9.jpg"
      alt="Partner 9"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner10.jpg"
      alt="Partner 10"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner11.jpg"
      alt="Partner 11"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner12.jpg"
      alt="Partner 12"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner13.jpg"
      alt="Partner 13"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner14.jpg"
      alt="Partner 14"
      className="h-20 object-contain"
    />
    <img
      src="/images/partner15.jpg"
      alt="Partner 15"
      className="h-20 object-contain"
    />
  </div>
      </motion.section>

      {/* Milestones */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Key Milestones</h2>
        <ul className="list-disc ml-6 text-lg space-y-2">
          <li>Foundation established on 1 May 2016</li>
          <li>Over 5,000 individuals impacted from 2016–2023</li>
          <li>International exchange programmes introduced</li>
          <li>Appointment of Dr. Rakhudu as CEO of Hakem Energies Foundation</li>
          <li>10th Anniversary of Dr. Rakhudu as Kgosana (2025)</li>
          <li>Launched “Breaking the Silence” podcast</li>
          <li>Boundless Soweto Campus (AI & 4IR hub)</li>
          <li>Graduation Ceremony 2023</li>
          <li>Kgosana Koketso Rakhudu Excellence Awards launched</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default About;
