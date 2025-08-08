import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Calendar, Users, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const milestones = [
  {
    year: 2025,
    title: "Expansion and Innovation",
    summary: "Launched digital learning platforms and expanded reach",
    details: [
      "Implemented online learning management system",
      "Increased programme capacity by 40%",
      "Launched mobile app for student engagement",
      "Established partnerships with 5 new corporates"
    ],
    image: "https://via.placeholder.com/600x300?text=2025+Innovation",
    stats: { beneficiaries: 2000, programmes: 8, partnerships: 15 }
  },
  {
    year: 2024,
    title: "Record-Breaking Impact",
    summary: "Achieved highest number of beneficiaries in a single year",
    details: [
      "LPG CSI Hakem Energies programme reached 1,000 beneficiaries",
      "Successfully launched Solar Training initiative",
      "W&R SETA Programme trained 300 participants",
      "Short Learning Programs benefited 150 individuals",
      "Established regional training centers"
    ],
    image: "https://via.placeholder.com/600x300?text=2024+Record+Impact",
    stats: { beneficiaries: 1465, programmes: 4, partnerships: 12 }
  },
  {
    year: 2023,
    title: "Technology Integration",
    summary: "Embraced digital transformation in education delivery",
    details: [
      "Microsoft Development Program launched with 25 participants",
      "Lora Business Training reached 45 entrepreneurs",
      "Office/Project/Business NQF programmes trained 150 learners",
      "Integrated e-learning platforms",
      "Enhanced digital literacy across all programmes"
    ],
    image: "https://via.placeholder.com/600x300?text=2023+Technology",
    stats: { beneficiaries: 220, programmes: 3, partnerships: 8 }
  },
  {
    year: 2022,
    title: "Community Partnerships",
    summary: "Strengthened collaborations with key stakeholders",
    details: [
      "Social Employment Fund supported 62 individuals",
      "Coffee with Dr Rakhudu ECD programme engaged 30 participants",
      "Metropolitan Literacy programme reached 85 learners",
      "BMW YES Programme trained 15 young professionals",
      "Established mentorship networks"
    ],
    image: "https://via.placeholder.com/600x300?text=2022+Partnerships",
    stats: { beneficiaries: 192, programmes: 4, partnerships: 6 }
  },
  {
    year: 2021,
    title: "Pandemic Resilience",
    summary: "Adapted programmes for COVID-19 challenges",
    details: [
      "ABSA & SMME Training supported 300 small businesses",
      "Anglo ECD Programme reached 450 early childhood practitioners",
      "Entrepreneurial Skills Program trained 40 entrepreneurs",
      "Implemented health and safety protocols",
      "Developed hybrid learning models"
    ],
    image: "https://via.placeholder.com/600x300?text=2021+Resilience",
    stats: { beneficiaries: 790, programmes: 3, partnerships: 4 }
  },
  {
    year: 2020,
    title: "Focus on Women's Empowerment",
    summary: "Dedicated initiatives for women's economic participation",
    details: [
      "Women's Empowerment programme launched",
      "Focused on historically disadvantaged women",
      "Skills development in business and entrepreneurship",
      "Created women-focused support networks",
      "Achieved 100% completion rate"
    ],
    image: "https://via.placeholder.com/600x300?text=2020+Women+Empowerment",
    stats: { beneficiaries: 20, programmes: 1, partnerships: 2 }
  },
  {
    year: 2019,
    title: "Programme Consolidation",
    summary: "Streamlined and enhanced core training offerings",
    details: [
      "Office & Project Management Courses served 250 learners",
      "Improved curriculum based on industry feedback",
      "Enhanced practical training components",
      "Established employer partnerships for job placement",
      "Achieved 85% employment rate for graduates"
    ],
    image: "https://via.placeholder.com/600x300?text=2019+Consolidation",
    stats: { beneficiaries: 250, programmes: 2, partnerships: 3 }
  },
  {
    year: 2018,
    title: "Diversification and Growth",
    summary: "Expanded programme portfolio significantly",
    details: [
      "Exchange Student Program welcomed 20 international participants",
      "Office Practice NQF 4 trained 100 learners",
      "Project Management NQF 4 reached 100 participants",
      "Business Practice NQF 4 benefited 100 students",
      "Youth Leadership Training developed 50 young leaders",
      "Established international partnerships"
    ],
    image: "https://via.placeholder.com/600x300?text=2018+Growth",
    stats: { beneficiaries: 370, programmes: 5, partnerships: 5 }
  },
  {
    year: 2017,
    title: "Educational Excellence",
    summary: "Launched academic support and business skills programmes",
    details: [
      "Grade 12 Rewrite Program helped 200 students achieve matriculation",
      "Small Business Skills Development trained 100 entrepreneurs",
      "Achieved 90% pass rate in Grade 12 programme",
      "Established ongoing support networks",
      "Created sustainable business models for graduates"
    ],
    image: "https://via.placeholder.com/600x300?text=2017+Education",
    stats: { beneficiaries: 300, programmes: 2, partnerships: 2 }
  },
  {
    year: 2016,
    title: "Foundation Establishment",
    summary: "KRF officially began its community impact journey",
    details: [
      "Social, Women and Disability programme launched with 300 beneficiaries",
      "Established core values and mission",
      "Built initial team and infrastructure",
      "Created foundational partnerships",
      "Set the groundwork for sustainable community development"
    ],
    image: "https://via.placeholder.com/600x300?text=2016+Foundation",
    stats: { beneficiaries: 300, programmes: 1, partnerships: 1 }
  }
];

const Milestones = () => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  const toggleMilestone = (index) => {
    setExpandedMilestone(expandedMilestone === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 text-black px-6 py-16 relative">
      {/* Background Design Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#c27700] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-2 bg-[#c27700] opacity-15 rounded-full"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-[#c27700] rounded-full opacity-5"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#c27700] mb-4">Our Key Milestones</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the journey of the Koketso Rakhudu Foundation through the years. 
            Each milestone represents our commitment to community development and educational excellence.
          </p>
        </motion.div>

        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-[#c27700]"
            >
              {/* Milestone Header */}
              <div
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleMilestone(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#c27700] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#c27700]">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.summary}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* Quick Stats */}
                    <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{milestone.stats.beneficiaries.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award size={16} />
                        <span>{milestone.stats.programmes}</span>
                      </div>
                    </div>
                    {expandedMilestone === index ? (
                      <ChevronUp className="text-[#c27700]" size={24} />
                    ) : (
                      <ChevronDown className="text-[#c27700]" size={24} />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedMilestone === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200"
                >
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Image */}
                      <div>
                        <img
                          src={milestone.image}
                          alt={`${milestone.year} milestone`}
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                        
                        {/* Statistics */}
                        <div className="mt-6 bg-gradient-to-r from-[#c27700] to-[#e69500] text-white p-4 rounded-lg">
                          <h4 className="font-bold mb-3 text-center">Year Impact</h4>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold">{milestone.stats.beneficiaries.toLocaleString()}</div>
                              <div className="text-sm">Beneficiaries</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold">{milestone.stats.programmes}</div>
                              <div className="text-sm">Programmes</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold">{milestone.stats.partnerships}</div>
                              <div className="text-sm">Partnerships</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <h4 className="text-lg font-bold text-[#c27700] mb-4 flex items-center">
                          <Calendar size={20} className="mr-2" />
                          Key Achievements in {milestone.year}
                        </h4>
                        <ul className="space-y-3">
                          {milestone.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#c27700] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={milestones.length}
          className="mt-12 bg-gradient-to-r from-[#c27700] to-[#e69500] text-white p-8 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Journey in Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">
                {milestones.reduce((total, m) => total + m.stats.beneficiaries, 0).toLocaleString()}
              </div>
              <div className="text-lg">Total Beneficiaries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {milestones.reduce((total, m) => total + m.stats.programmes, 0)}
              </div>
              <div className="text-lg">Total Programmes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {Math.max(...milestones.map(m => m.stats.partnerships))}
              </div>
              <div className="text-lg">Active Partnerships</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Milestones;