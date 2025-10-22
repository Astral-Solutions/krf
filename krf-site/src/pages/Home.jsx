import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <div className="bg-white text-black font-sans overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-[#c27700] to-[#e69500] py-24 px-6 text-center text-white">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Empowering Generations. Transforming Communities.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          The Koketso Rakhudu Foundation is a beacon of educational excellence
          and social innovation — empowering South Africans through accredited
          training, leadership development, and community impact.
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="opacity-90 mb-10"
        >
          🎓 Accredited by ETDP SETA • 🤝 Rooted in Community • 🌍 Driven by Impact
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link
            to="/programmes"
            className="bg-white text-[#c27700] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition"
          >
            Explore Our Programs
          </Link>
          <Link
            to="/donate"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#c27700] transition"
          >
            Partner With Us
          </Link>
        </motion.div>
      </section>

      {/* ================= OUR PURPOSE ================= */}
      <section className="py-20 bg-white text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#c27700] mb-6"
        >
          Education is the Foundation of Transformation
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={{ once: true }}
          className="text-lg text-gray-700 max-w-4xl mx-auto mb-10"
        >
          Since its founding, the Koketso Rakhudu Foundation has stood at the
          intersection of education, empowerment, and leadership — bridging the
          gap between potential and opportunity.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center text-lg font-semibold text-gray-800">
          <div>📘 3 000+ Learners Empowered</div>
          <div>💼 100+ Accredited Workshops</div>
          <div>🏫 3 Training Centres</div>
          <div>🌱 9 Years of Impact</div>
        </div>

        {/* Centered Image */}
        <div className="mt-12 flex justify-center">
  <img
    src="/images/GraduationStudents.jpg"
    alt="Graduation"
    className="max-w-md md:max-w-lg w-full h-auto object-cover rounded-xl shadow-lg mx-auto"
    loading="lazy"
  />
</div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 bg-[#fffaf5]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#c27700] text-center mb-12"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {[
            { title: "Lifelong Learning", desc: "Education is a continuous journey empowering individuals to grow and adapt." },
            { title: "Integrity & Accountability", desc: "We uphold ethical leadership and transparent governance in everything we do." },
            { title: "Excellence", desc: "Striving for innovation and quality in teaching, training, and impact." },
            { title: "Inclusivity & Equity", desc: "We create equal opportunities that embrace diversity and accessibility." },
            { title: "Innovation & Curiosity", desc: "Driving creativity and forward-thinking in education and community upliftment." },
            { title: "Community Empowerment", desc: "Building resilience and self-sufficiency through people-centered initiatives." },
            { title: "Collaboration & Partnership", desc: "Harnessing collective strength to scale our impact together." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#c27700] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PROGRAMS ================= */}
      <section className="py-20 bg-white">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#c27700] text-center mb-12"
        >
          Featured Programmes
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Village Economy Indaba Programme",
              img: "/images/TVEILogo.png",
              desc: "12-month programme driving rural entrepreneurship and inclusive economic development.",
            },
            {
              title: "BMW YES Programme",
              img: "/images/BMW.jpg",
              desc: "Empowering unemployed youth through workplace readiness and accredited employability training.",
            },
            {
              title: "Microsoft Development Programme",
              img: "/images/IT.jpeg",
              desc: "Digital transformation initiative preparing learners for ICT and 4IR opportunities.",
            },
            {
              title: "LPG CSI Hakem Energies Training Initiative",
              img: "/images/LPGStakeholders.jpeg",
              desc: "Promoting green energy, sustainability, and technical skills for future-ready employment.",
            },
          ].map((prog, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col items-center text-center"
            >
              <div className="flex justify-center items-center bg-white w-full h-48">
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="max-h-40 w-auto object-contain mx-auto"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#c27700] mb-2">
                  {prog.title}
                </h3>
                <p className="text-sm text-gray-600">{prog.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/servicesprograms"
            className="bg-[#c27700] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a25e00] transition"
          >
            View All Programmes
          </Link>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="py-20 bg-[#fffaf0] text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#c27700] mb-10"
        >
          Every Learner. Every Community. Every Generation — Transformed.
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {[ 
            { number: "9+", label: "Years of Service" },
            { number: "25+", label: "Communities Reached" },
            { number: "R5.7M", label: "Invested in Education" },
            { number: "3", label: "Training Centres" },
            { number: "40.2%", label: "Graduate Progression Rate" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-[#c27700]">{stat.number}</p>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-[#fff9f3] to-[#fff4e6] text-center text-[#c27700]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Together, We’re Building Tomorrow’s Leaders — Today.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Link
            to="/programmes"
            className="bg-[#c27700] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a25e00] transition"
          >
            🎓 Enroll in a Programme
          </Link>
          <Link
            to="/donate"
            className="border border-[#c27700] text-[#c27700] px-6 py-3 rounded-lg font-semibold hover:bg-[#c27700] hover:text-white transition"
          >
            💡 Partner With Us
          </Link>
          <Link
            to="/donate"
            className="bg-[#c27700] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a25e00] transition"
          >
            ❤️ Make a Donation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
