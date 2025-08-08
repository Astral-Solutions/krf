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
    title: "3-Month Skills Development Courses",
    target: "Unemployed youth, adults, and women",
    outcome: "Enhanced job readiness and confidence",
    description: "Comprehensive skills training program designed to equip participants with practical abilities for the modern workplace.",
    curriculum: ["Basic Computer Skills", "Communication Skills", "Problem Solving", "Team Work", "Time Management"],
    duration: "3 months",
    certification: "SETA Accredited Certificate",
    images: [
      "https://via.placeholder.com/400x300?text=Skills+Training+1",
      "https://via.placeholder.com/400x300?text=Skills+Training+2",
      "https://via.placeholder.com/400x300?text=Skills+Training+3"
    ],
    testimonials: [
      { name: "Sarah M.", text: "This program changed my life completely. I'm now employed and confident in my abilities." },
      { name: "John D.", text: "The practical skills I learned here directly contributed to landing my first job." }
    ]
  },
  {
    title: "4-Month Skills Development Programme",
    target: "Long-term unemployed individuals seeking comprehensive training",
    outcome: "Industry-ready skills and job placement assistance",
    description: "Extended program offering in-depth training and mentorship for sustainable career development.",
    curriculum: ["Advanced Technical Skills", "Leadership Development", "Industry-Specific Training", "Job Placement Support", "Mentorship Program"],
    duration: "4 months",
    certification: "SETA Accredited Certificate with Industry Recognition",
    images: [
      "https://via.placeholder.com/400x300?text=4Month+Program+1",
      "https://via.placeholder.com/400x300?text=4Month+Program+2",
      "https://via.placeholder.com/400x300?text=4Month+Program+3"
    ],
    testimonials: [
      { name: "Maria K.", text: "The 4-month program gave me the confidence and skills to start my own business." },
      { name: "David L.", text: "Excellent mentorship and comprehensive training. Highly recommended!" }
    ],
    hasApplyButton: true
  },
  {
    title: "First Aid Training (SETA-accredited)",
    target: "Caregivers, professionals, and community members",
    outcome: "Certified lifesaving skills for home and workplace",
    description: "Professional first aid training with hands-on practice and official certification.",
    curriculum: ["CPR Techniques", "Basic Life Support", "Emergency Response", "Wound Care", "Safety Protocols"],
    duration: "2 weeks",
    certification: "SETA First Aid Certificate",
    images: [
      "https://via.placeholder.com/400x300?text=First+Aid+1",
      "https://via.placeholder.com/400x300?text=First+Aid+2",
      "https://via.placeholder.com/400x300?text=First+Aid+3"
    ],
    testimonials: [
      { name: "Nurse Jane", text: "Essential training for anyone in healthcare. Very thorough and practical." },
      { name: "Teacher Paul", text: "Feel much more prepared to handle emergencies at school now." }
    ]
  },
  {
    title: "Economic Empowerment Skills",
    target: "Youth, women, and aspiring entrepreneurs",
    outcome: "Financial literacy and sustainable income generation",
    description: "Entrepreneurship and financial management training to build sustainable businesses.",
    curriculum: ["Business Planning", "Financial Management", "Marketing Basics", "Legal Requirements", "Funding Sources"],
    duration: "6 weeks",
    certification: "Business Development Certificate",
    images: [
      "https://via.placeholder.com/400x300?text=Economic+Skills+1",
      "https://via.placeholder.com/400x300?text=Economic+Skills+2",
      "https://via.placeholder.com/400x300?text=Economic+Skills+3"
    ],
    testimonials: [
      { name: "Grace N.", text: "Started my catering business after completing this program. Revenue growing monthly!" },
      { name: "Peter S.", text: "The financial literacy component was exactly what I needed for my farming business." }
    ]
  },
  {
    title: "Tech & IT Graduate Programme",
    target: "Recent IT graduates",
    outcome: "Hands-on experience, mentorship, and tech projects",
    description: "Bridge the gap between academic learning and industry requirements with real-world projects.",
    curriculum: ["Web Development", "Database Management", "Project Management", "Industry Best Practices", "Portfolio Development"],
    duration: "6 months",
    certification: "Industry Experience Certificate + Portfolio",
    images: [
      "https://via.placeholder.com/400x300?text=Tech+Program+1",
      "https://via.placeholder.com/400x300?text=Tech+Program+2",
      "https://via.placeholder.com/400x300?text=Tech+Program+3"
    ],
    testimonials: [
      { name: "Thabo M.", text: "Great stepping stone into the tech industry. Now working as a junior developer!" },
      { name: "Lisa R.", text: "The mentorship was invaluable. Learned more in 6 months than I thought possible." }
    ]
  },
];

const Modal = ({ programme, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  if (!isOpen || !programme) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % programme.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + programme.images.length) % programme.images.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % programme.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + programme.testimonials.length) % programme.testimonials.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] rounded-lg overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#c27700]">{programme.title}</h2>
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
              className="w-full h-64 object-cover rounded-lg"
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
                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Program Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-[#c27700] mb-2">Program Overview</h3>
              <p className="text-gray-700 mb-4">{programme.description}</p>
              
              <div className="space-y-2">
                <p><strong>Target Group:</strong> {programme.target}</p>
                <p><strong>Duration:</strong> {programme.duration}</p>
                <p><strong>Certification:</strong> {programme.certification}</p>
                <p><strong>Outcome:</strong> {programme.outcome}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#c27700] mb-2">Curriculum</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {programme.curriculum.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#c27700] mb-4">What Our Students Say</h3>
            <div className="bg-gray-50 p-4 rounded-lg relative">
              <p className="italic text-gray-700 mb-2">
                "{programme.testimonials[currentTestimonialIndex].text}"
              </p>
              <p className="font-semibold text-[#c27700]">
                - {programme.testimonials[currentTestimonialIndex].name}
              </p>
              
              {programme.testimonials.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="text-[#c27700] hover:text-[#a25e00] transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="flex space-x-1">
                    {programme.testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentTestimonialIndex ? 'bg-[#c27700]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="text-[#c27700] hover:text-[#a25e00] transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Apply Button */}
          {programme.hasApplyButton && (
            <div className="text-center">
              <button className="bg-[#c27700] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a25e00] transition-colors">
                Apply Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Programmes = () => {
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

      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-[#c27700] mb-8 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Programmes at KRF
        </motion.h1>

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
                <h2 className="text-xl font-semibold text-[#c27700] mb-3">
                  {programme.title}
                </h2>
                <p className="text-gray-700 mb-2 text-sm">
                  <strong>Target Group:</strong> {programme.target}
                </p>
                <p className="text-gray-700 mb-2 text-sm">
                  <strong>Duration:</strong> {programme.duration}
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Outcome:</strong> {programme.outcome}
                </p>
                
                {programme.hasApplyButton && (
                  <div className="mt-4">
                    <button 
                      className="w-full bg-[#c27700] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#a25e00] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle apply now functionality
                        alert('Application form will be available soon!');
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-[#c27700] text-sm font-medium hover:underline">
                    Click to learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        programme={selectedProgramme}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Programmes;