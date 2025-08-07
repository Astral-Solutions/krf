// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 text-black font-sans relative">
      {/* Background Design Elements */}
      <div className="fixed top-10 left-10 w-32 h-32 border-4 border-[#c27700] rounded-full opacity-20 animate-pulse"></div>
      <div className="fixed top-1/3 right-20 w-16 h-16 bg-[#c27700] rounded-full opacity-10"></div>
      <div className="fixed bottom-20 left-1/4 w-24 h-1 bg-gradient-to-r from-[#c27700] to-yellow-400 opacity-30"></div>
      <div className="fixed bottom-1/3 right-10 w-1 h-32 bg-gradient-to-t from-[#c27700] to-yellow-400 opacity-30"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#c27700] to-[#e69500] text-white py-24 px-6 text-center">
        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-300 rounded-full opacity-20 animate-pulse z-10"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-white rounded-full opacity-10 z-10"></div>
        
        {/* Additional Design Elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-20 bg-white opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-2 bg-white opacity-20"></div>

        {/* Hero Content */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10"
        >
          Welcome to the Koketso Rakhudu Foundation
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg max-w-2xl mx-auto mb-6 relative z-10"
        >
          Rooted in community development and lifelong learning, we champion accessible education and skills training for all.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 space-y-4"
        >
          <Link
            to="/donate"
            className="bg-white text-[#c27700] font-bold px-8 py-4 rounded-full hover:bg-yellow-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block mr-4 text-lg"
          >
            Donate Now!!!
          </Link>
          <br />
          <Link
            to="/programmes"
            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#c27700] transition-all duration-300 inline-block"
          >
            Explore Our Programmes
          </Link>
        </motion.div>
      </section>

      {/* Core Values Section - Moved to Top */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 relative">
        {/* Background Design Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#c27700] rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-32 h-2 bg-[#c27700] opacity-10 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10 text-[#c27700]"
          >
            Our Core Values
          </motion.h2>
          {/* Uniform layout - one per line on mobile, 3 per line on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['Lifelong Learning', 'Education doesn\'t end in the classroom.'],
              ['Community Empowerment', 'We believe change starts locally.'],
              ['Excellence in Education', 'We aim for innovation and impact.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#c27700] transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-[#c27700] mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {[
              ['Inclusivity & Diversity', 'Everyone belongs in our community.'],
              ['Ethical Leadership', 'We lead with integrity and purpose.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i + 3}
                variants={fadeUp}
                custom={i + 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#c27700] transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-[#c27700] mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment to Excellence - Updated Content */}
      <section className="py-20 px-6 max-w-5xl mx-auto relative">
        {/* Background Design Elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#c27700] opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-1 bg-[#c27700] opacity-20"></div>

        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#c27700]">
            Our Commitment to Excellence Over a Decade in Community Excellence
          </h2>
        </motion.div>

        {/* Grid Items */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Accredited CET under ETDP SETA',
            'Over 8 years of community impact',
            'Partnerships with top institutions',
          ].map((text, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border-t-4 border-[#c27700]"
            >
              <h3 className="text-xl text-[#c27700] font-semibold mb-2">
                {text}
              </h3>
              <p className="text-sm text-gray-700">
                Empowering historically disadvantaged individuals through education.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-[#c27700] to-[#e69500] text-white relative">
        {/* Background Design Elements */}
        <div className="absolute top-5 left-5 w-10 h-10 border-2 border-white opacity-30 rounded-full"></div>
        <div className="absolute bottom-5 right-5 w-16 h-1 bg-white opacity-30"></div>
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Us In Building a Brighter Future
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Partner with us, support a learner, or help amplify our work through collaboration.
          </p>
          <Link
            to="/donate"
            className="inline-block bg-white text-[#c27700] font-bold px-8 py-4 rounded-full hover:bg-yellow-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Donate Now!!!
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;