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

      {/* Profile Section */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
  <h2 className="text-3xl font-bold text-[#c27700] mb-4">Chancellor’s Profile: Dr. Koketso Rakhudu</h2>
  <p className="text-lg leading-relaxed space-y-4">
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
    In addition to his leadership roles, Dr. Rakhudu actively participates in research initiatives through the
    South African Population Research Infrastructure Network, collaborating with esteemed institutions such as The Aurum Institute and
    Johns Hopkins University.
    <br /><br />
    Recognized as one of the Top 30 Fast-Rising Professionals in Public Administration and Community Leadership by
    the Pan African Leadership Institute, he exemplifies a commitment to social welfare and community upliftment.
    <br /><br />
    As Chancellor, Dr. Rakhudu envisions creating a transformative educational experience that empowers individuals and drives sustainable
    development within communities.
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
          <strong>Khuli Chana Foundation:</strong> Donated new school shoes to learners at Tsitsing Primary School and St. Gerald Majela,
          promoting dignity and access to education.
        </p>
        <p className="mt-2 text-lg">
          <strong>Cam Life Productions:</strong> Partnering to expand digital content creation and community storytelling.
        </p>
      </motion.section>

      {/* Milestones */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Key Milestones</h2>
        <ul className="list-disc ml-6 text-lg space-y-2">
          <li>Appointment of Dr. Rakhudu as CEO of Hakem Energies Foundation</li>
          <li>10th Anniversary of Dr. Rakhudu as Kgosana of the Royal Bafokeng Nation</li>
          <li>Launched “Breaking the Silence” podcast to promote social awareness</li>
          <li>Boundless Soweto Campus: A tech hub for AI, IT, and 4IR skills development</li>
          <li>Inauguration of Dr. Rakhudu as First Chancellor of KRF</li>
          <li>Graduation Ceremony for the Class of 2023</li>
          <li>Launch of the Kgosana Koketso Rakhudu Excellence Awards</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default About;
