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
    {/* <img
      src="/images/Kgosanachancellor.jpg"
      alt="Dr. Koketso Rakhudu"
      className="w-48 mx-auto rounded shadow-md"
    /> */}
  </div>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Chancellor's Profile: Dr. Koketso Rakhudu</h2>
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
        <div className="mb-6">
          <p className="text-lg mb-2"><strong>Vision</strong></p>
          <p className="text-lg leading-relaxed mb-2">
            Creating a community where every individual has access to quality education and training opportunities that unlock their full potential and contribute to sustainable community development.
          </p>
          <p className="text-lg italic text-[#c27700] mb-4">"Empowering Lives with Excellence"</p>
        </div>
        <div>
          <p className="text-lg mb-2"><strong>Mission</strong></p>
          <p className="text-lg leading-relaxed">
            A forward-thinking education approach focused on challenging, innovative, personalized learning within our community-based space. We nurture and inspire students to achieve personal excellence while embracing diversity, developing character and self-worth, guided by our values of empathy, excellence, integrity and respect.
          </p>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Our Core Values</h2>
        <p className="text-lg leading-relaxed mb-6">
          At our Community Education & Training Centre, we are grounded in a shared commitment to excellence, 
          guided by these fundamental principles that shape everything we do.
        </p>
        <ul className="space-y-4 text-lg">
          <li><strong>1. Lifelong Learning</strong>: We believe that education is a continuous journey that empowers individuals at every stage of life, fostering growth, adaptability, and personal development.</li>
          <li><strong>2. Integrity & Accountability</strong>: We uphold ethical decision-making, transparency, and responsibility in all our actions.</li>
          <li><strong>3. Excellence</strong>: We strive for the highest standards in teaching, leadership and operational delivery.</li>
          <li><strong>4. Inclusivity and Equity</strong>: We provide learning opportunities that embrace and respect diversity ensuring no one is left behind.</li>
          <li><strong>5. Innovation & Curiosity</strong>: We nurture critical thinking, creativity, and forward-thinking solutions to today's challenges.</li>
          <li><strong>6. Community Empowerment</strong>: We serve as a bridge between individuals and opportunity, fostering sustainable development and resilience in our communities.</li>
          <li><strong>7. Collaboration & Partnership</strong>: We recognize that stakeholder synergy is key to creating meaningful and scalable impact.</li>
        </ul>
      </motion.section>

      {/* Partnerships */}
      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#c27700] mb-4">Key Partnerships</h2>
       <div className="flex flex-wrap justify-center gap-8">
    <img
      src="/images/partner1.jpg"
      alt="Partner 1"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner2.jpg"
      alt="Partner 2"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner3.jpg"
      alt="Partner 3"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner4.jpg"
      alt="Partner 4"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner5.jpg"
      alt="Partner 5"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner6.jpg"
      alt="Partner 6"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner7.jpg"
      alt="Partner 7"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner8.jpg"
      alt="Partner 8"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner9.jpg"
      alt="Partner 9"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner10.jpg"
      alt="Partner 10"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner11.jpg"
      alt="Partner 11"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner12.jpg"
      alt="Partner 12"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner13.jpg"
      alt="Partner 13"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner14.jpg"
      alt="Partner 14"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
    />
    <img
      src="/images/partner15.jpg"
      alt="Partner 15"
      className="h-20 object-contain transition-all duration-300 hover:scale-110 hover:opacity-80 hover:shadow-lg cursor-pointer"
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
          <li>Launched "Breaking the Silence" podcast</li>
          <li>Boundless Soweto Campus (AI & 4IR hub)</li>
          <li>Graduation Ceremony 2023</li>
          <li>Kgosana Koketso Rakhudu Excellence Awards launched</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default About;