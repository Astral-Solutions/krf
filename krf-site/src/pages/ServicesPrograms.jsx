import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const programmes = [
  {
    title: "IT & Digital Skills Training",
    target: "Youth, adults, and career changers",
    outcome: "Industry-ready digital competencies and certifications",
    description:
      "Comprehensive training in modern IT skills including web development, software applications, and digital tools essential for today's workplace.",
    curriculum: [
      "Web Development Fundamentals",
      "Microsoft Office Suite",
      "Cloud Computing Basics",
      "Cybersecurity Awareness",
      "Data Analytics Introduction",
    ],
    duration: "3-6 months",
    certification: "SETA Accredited IT Certificate",
    images: [
      "/images/KRFDesign.jpg",
    ],
  },
  {
    title: "Business Administration Programs",
    target: "Aspiring administrators and office professionals",
    outcome: "Professional administrative skills and workplace readiness",
    description:
      "Master essential business administration skills including office management, communication, and organizational systems for corporate environments.",
    curriculum: [
      "Office Management",
      "Business Communication",
      "Records Management",
      "Financial Administration",
      "Customer Relations",
    ],
    duration: "4 months",
    certification: "Business Administration Certificate",
    images: [
      "images/students1.jpeg",
    ],
  },
  {
    title: "Corporate Upskilling Workshops",
    target: "Employed professionals and corporate teams",
    outcome: "Enhanced workplace productivity and leadership capabilities",
    description:
      "Tailored workshops for organizations looking to upskill their workforce with cutting-edge industry practices and emerging technologies.",
    curriculum: [
      "Leadership Development",
      "Project Management",
      "Digital Transformation",
      "Team Collaboration",
      "Innovation Strategies",
    ],
    duration: "2-4 weeks",
    certification: "Professional Development Certificate",
    images: [
      "images/facilitation3.jpg",
    ],
  },
  {
    title: "Digital Literacy Classes",
    target: "Beginners, seniors, and community members",
    outcome: "Confidence in using digital devices and online services",
    description:
      "Friendly, accessible training for those new to technology, covering basics of computers, internet usage, and digital communication.",
    curriculum: [
      "Computer Basics",
      "Internet Navigation",
      "Email Communication",
      "Social Media Safety",
      "Online Banking Basics",
    ],
    duration: "6 weeks",
    certification: "Digital Literacy Certificate",
    images: [
      "/images/KRFDesign.jpg",
    ],
  },
  {
    title: "Soft Skills Development",
    target: "Job seekers and young professionals",
    outcome: "Enhanced interpersonal and professional competencies",
    description:
      "Build essential workplace soft skills including communication, teamwork, problem-solving, and emotional intelligence for career success.",
    curriculum: [
      "Professional Communication",
      "Teamwork & Collaboration",
      "Problem Solving",
      "Time Management",
      "Emotional Intelligence",
    ],
    duration: "2 months",
    certification: "Soft Skills Certificate",
    images: [
      "/images/SpeechStudent.jpeg",
    ],
  },
  {
    title: "Employment Readiness Programs",
    target: "Unemployed youth and job seekers",
    outcome: "Job-ready skills and successful placement",
    description:
      "Comprehensive program combining skills training, job search strategies, and placement assistance to get you employment-ready.",
    curriculum: [
      "CV Writing",
      "Interview Skills",
      "Job Search Strategies",
      "Workplace Etiquette",
      "Personal Branding",
    ],
    duration: "3 months",
    certification:
      "Employment Readiness Certificate + Job Placement Support",
    images: [
      "/images/facilitation4.jpg",
     
    ],
  },
];

const Modal = ({ programme, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !programme) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % programme.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + programme.images.length) % programme.images.length
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] rounded-lg overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#c27700]">
            {programme.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Image Carousel */}
          <div className="relative mb-6">
            <img
              src={programme.images[currentImageIndex]}
              alt={`${programme.title} ${currentImageIndex + 1}`}
              className="w-full h-64 object-contain rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {programme.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Program Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-[#c27700] mb-2">
                Program Overview
              </h3>
              <p className="text-gray-700 mb-4">{programme.description}</p>

              <div className="space-y-2">
                <p>
                  <strong>Target Group:</strong> {programme.target}
                </p>
                <p>
                  <strong>Duration:</strong> {programme.duration}
                </p>
                <p>
                  <strong>Certification:</strong> {programme.certification}
                </p>
                <p>
                  <strong>Outcome:</strong> {programme.outcome}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#c27700] mb-2">
                Curriculum
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {programme.curriculum.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPrograms = () => {
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (programme) => {
    setSelectedProgramme(programme);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgramme(null);
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 text-black px-6 py-16 relative">
      {/* Background Design Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#c27700] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-2 bg-[#c27700] opacity-15 rounded-full"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-[#c27700] rounded-full opacity-5"></div>
      <div className="absolute bottom-1/3 right-20 w-1 h-32 bg-gradient-to-t from-[#c27700] to-transparent opacity-20"></div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Services Overview Section */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h1 className="text-4xl font-bold text-[#c27700] mb-6 text-center">
            Services We Provide
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c27700]">
            <ul className="list-disc ml-6 text-lg space-y-3 text-gray-700">
              <li>Accredited Skills Programmes & Qualifications</li>
              <li>Recognition of Prior Learning (RPL)</li>
              <li>Community Workshops & Short Courses</li>
              <li>Career Guidance and Mentorship</li>
              <li>
                Support for Trainers: Assessors, Moderators, and Facilitators
              </li>
              <li>
                Project Design & Implementation Support for Development
                Initiatives
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Who It Is For Section */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-[#c27700] mb-6 text-center">
            Who It Is For
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c27700]">
            <ul className="list-disc ml-6 text-lg space-y-3 text-gray-700">
              <li>Unemployed Youth</li>
              <li>Adults looking to upskill or reskill</li>
              <li>Community organizations and cooperatives</li>
              <li>Education and training professionals</li>
              <li>Corporate teams and working professionals</li>
              <li>Entrepreneurs and small business owners</li>
            </ul>
          </div>
        </motion.section>

        {/* Programs Section */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-[#c27700] mb-8 text-center">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((programme, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                onClick={() => openModal(programme)}
              >
                <img
                  src={programme.images[0]}
                  alt={programme.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#c27700] mb-3">
                    {programme.title}
                  </h3>
                  <p className="text-gray-700 mb-2 text-sm">
                    <strong>Target Group:</strong> {programme.target}
                  </p>
                  <p className="text-gray-700 mb-2 text-sm">
                    <strong>Duration:</strong> {programme.duration}
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Outcome:</strong> {programme.outcome}
                  </p>

                  <div className="mt-4 text-center">
                    <span className="text-[#c27700] text-sm font-medium hover:underline">
                      Click to learn more →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Coming Soon Section */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-[#c27700] mb-6 text-center">
            Coming Soon
          </h2>
          <div className="bg-gradient-to-r from-[#c27700] to-[#e69500] text-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-lg">
              A dedicated <strong>Student Portal</strong> is in planning. Stay
              tuned for updates on online learning, progress tracking, and
              certification management.
            </p>
          </div>
        </motion.section>
      </div>

      <Modal
        programme={selectedProgramme}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ServicesPrograms;
