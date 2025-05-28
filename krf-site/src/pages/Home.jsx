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
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#c27700] text-white py-24 px-6 text-center">
        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-white rounded-full opacity-10"></div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Welcome to the Koketso Rakhudu Foundation
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg max-w-2xl mx-auto mb-6"
        >
          Rooted in community development and lifelong learning, we champion accessible education and skills training for all.
        </motion.p>
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/programmes"
            className="bg-white text-[#c27700] font-semibold px-6 py-3 rounded hover:bg-yellow-100 transition"
          >
            Explore Our Programmes
          </Link>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#c27700]">
            Our Commitment to Excellence
          </h2>
        </motion.div>
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
              className="bg-white p-6 shadow-lg rounded transition hover:shadow-xl"
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

      {/* Core Values Section */}
      <section className="bg-gray-100 py-20 px-6">
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Lifelong Learning 📚', 'Education doesn’t end in the classroom.'],
              ['Community Empowerment 🤝', 'We believe change starts locally.'],
              ['Excellence in Education 🎓', 'We aim for innovation & impact.'],
              ['Inclusivity & Diversity 🌍', 'Everyone belongs.'],
              ['Ethical Leadership 🧭', 'We lead with integrity.'],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-bold text-[#c27700] mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#c27700]">
            Join Us In Building a Brighter Future
          </h2>
          <p className="text-gray-800 mb-6">
            Partner with us, support a learner, or help amplify our work through collaboration.
          </p>
          <Link
            to="/donate"
            className="inline-block bg-[#c27700] text-white font-semibold px-6 py-3 rounded hover:bg-yellow-700 transition"
          >
            Donate Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
