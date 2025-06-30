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
      {/* Foundation Intro */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h1 className="text-4xl font-bold text-[#c27700] mb-4">About Us</h1>
        <p className="text-lg leading-relaxed">
          The Koketso Rakhudu Foundation was established on 1 May 2016 to address educational and skills gaps in underserved communities.
          As an accredited training center, the Foundation provides SETA-recognized programmes that prepare individuals for employment,
          entrepreneurship, and personal development.
        </p>
      </motion.section>

      {/* Chancellor Section */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Chancellor’s Profile: Dr. Koketso Rakhudu</h2>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img src="/images/chancellor.jpg" alt="Dr. Koketso Rakhudu" className="w-full md:w-1/3 rounded shadow" />

          <p className="text-lg leading-relaxed">
            Dr. Koketso Rakhudu is the Chancellor of the Koketso Rakhudu Foundation Community Education and Training Centre,
            where he is dedicated to advancing education, fostering cultural exchange, and driving community development.
            A prominent leader within the Royal Bafokeng Nation, he holds the title of Kgosana of the Tsitsing community.
            <br /><br />
            Dr. Rakhudu also serves as a Guest Lecturer and Strategic Implementation Partner at several prestigious universities,
            including the University of South Africa and North West University, focusing on leadership and governance.
            <br /><br />
            Additionally, he is the Deputy Chairperson of the Provincial Council on AIDS and the Founder of The Village Economy Indaba Programme,
            which aims to enhance economic empowerment in local communities.
            <br /><br />
            He collaborates with institutions like The Aurum Institute and Johns Hopkins University in national research programs,
            and was named one of the Top 30 Fast-Rising Public Leaders by the Pan African Leadership Institute.
          </p>
        </div>
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
        </ul>
      </motion.section>

      {/* Partnerships */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Key Partnerships</h2>
        <p className="text-lg leading-relaxed">
          We collaborate with SAQA, Department of Education, NWDC, EWSETA, AgriSETA, MDiHub, Maikwane Holdings,
          Thuba Pelo Mosadi, TUT, Aurum Institute, Agape Youth, Thato Molamu, Mohale Motaung and more.
        </p>
        <p className="mt-4 text-lg">
          <strong>Khuli Chana Foundation:</strong> Donated school shoes to Tsitsing Primary and St. Gerald Majela learners.
        </p>
        <p className="mt-2 text-lg">
          <strong>Cam Life Productions:</strong> Co-creating content and storytelling that highlights our communities.
        </p>
      </motion.section>

      {/* Partner Logos */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-6 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          <img src="/images/ABSA.jpeg" alt="ABSA" className="h-16 object-contain mx-auto" />
          <img src="/images/AGRISETA.jpeg" alt="AGRISETA" className="h-16 object-contain mx-auto" />
          <img src="/images/Aurum.jpeg" alt="Aurum" className="h-16 object-contain mx-auto" />
          <img src="/images/CATHSETA.jpeg" alt="CATHSETA" className="h-16 object-contain mx-auto" />
          <img src="/images/EWSETA.jpeg" alt="EWSETA" className="h-16 object-contain mx-auto" />
          <img src="/images/HEF.jpeg" alt="HEF" className="h-16 object-contain mx-auto" />
          <img src="/images/Classic.jpeg" alt="Classic" className="h-16 object-contain mx-auto" />
          <img src="/images/NWDC.jpeg" alt="NWDC" className="h-16 object-contain mx-auto" />
          <img src="/images/TUT.jpeg" alt="TUT" className="h-16 object-contain mx-auto" />
          <img src="/images/QCTO.jpeg" alt="QCTO" className="h-16 object-contain mx-auto" />
        </div>
      </motion.section>

      {/* Milestones */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Key Milestones</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li>Appointment of Dr. Rakhudu as CEO of Hakem Energies Foundation</li>
            <li>10th Anniversary of Dr. Rakhudu as Kgosana of the Royal Bafokeng Nation</li>
            <li>Launched “Breaking the Silence” podcast</li>
            <li>Boundless Soweto Campus: AI and 4IR Tech Hub</li>
            <li>Inauguration of Dr. Rakhudu as First Chancellor of KRF</li>
            <li>Graduation Ceremony for the Class of 2023</li>
            <li>Launch of the Kgosana Koketso Rakhudu Excellence Awards</li>
          </ul>
          <img src="/images/milestone.jpeg" alt="Milestones" className="rounded shadow w-full h-auto" />
        </div>
      </motion.section>
    </div>
  );
};

export default About;
