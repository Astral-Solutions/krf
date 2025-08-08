import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const leadership = [
  {
    name: "Dr. Koketso Rakhudu",
    position: "Founder & Executive Director",
    level: "executive",
    image: "https://via.placeholder.com/300x300?text=Dr+Koketso+Rakhudu",
    bio: "Dr. Koketso Rakhudu is the visionary founder of the Koketso Rakhudu Foundation. With over 15 years of experience in community development and education, she has dedicated her career to empowering historically disadvantaged communities through accessible education and skills training.",
    qualifications: "PhD in Community Development, Masters in Education Management",
    email: "koketso@krf.org.za",
    linkedin: "https://linkedin.com/in/koketsorakhudu"
  },
  {
    name: "Sarah Mthembu",
    position: "Programme Director",
    level: "senior",
    image: "https://via.placeholder.com/300x300?text=Sarah+Mthembu",
    bio: "Sarah oversees all educational programmes and ensures quality delivery across our training initiatives. Her expertise in curriculum development has been instrumental in achieving our high success rates.",
    qualifications: "Masters in Educational Psychology, SETA Assessor Certification",
    email: "sarah@krf.org.za",
    phone: "+27 12 345 6790"
  },
  {
    name: "Michael Ndlovu",
    position: "Operations Manager",
    level: "senior",
    image: "https://via.placeholder.com/300x300?text=Michael+Ndlovu",
    bio: "Michael manages day-to-day operations and ensures smooth delivery of all foundation activities. His background in project management has streamlined our operational efficiency.",
    qualifications: "MBA Operations Management, PMP Certification",
    email: "michael@krf.org.za",
    phone: "+27 12 345 6791"
  },
  {
    name: "Dr. Thandiwe Mokoena",
    position: "Research & Development Head",
    level: "senior",
    image: "https://via.placeholder.com/300x300?text=Dr+Thandiwe+Mokoena",
    bio: "Dr. Mokoena leads our research initiatives and programme evaluation efforts. Her work ensures our programmes remain relevant and impactful in addressing community needs.",
    qualifications: "PhD in Social Development, Research Methods Certification",
    email: "thandiwe@krf.org.za",
    linkedin: "https://linkedin.com/in/thandiwe-mokoena"
  },
  {
    name: "James Sibeko",
    position: "Finance Manager",
    level: "management",
    image: "https://via.placeholder.com/300x300?text=James+Sibeko",
    bio: "James ensures financial accountability and sustainability of the foundation. His expertise in non-profit financial management has strengthened our fiscal responsibility.",
    qualifications: "CA(SA), Non-Profit Management Certificate",
    email: "james@krf.org.za",
    phone: "+27 12 345 6792"
  },
  {
    name: "Nomsa Khumalo",
    position: "Community Outreach Coordinator",
    level: "management",
    image: "https://via.placeholder.com/300x300?text=Nomsa+Khumalo",
    bio: "Nomsa builds and maintains relationships with community partners and stakeholders. Her grassroots approach has expanded our reach significantly.",
    qualifications: "BA Social Work, Community Development Diploma",
    email: "nomsa@krf.org.za",
    phone: "+27 12 345 6793"
  },
  {
    name: "Peter van der Merwe",
    position: "Training Coordinator",
    level: "management",
    image: "https://via.placeholder.com/300x300?text=Peter+van+der+Merwe",
    bio: "Peter coordinates all training activities and manages our pool of expert facilitators. His attention to detail ensures consistent quality across all programmes.",
    qualifications: "BTech Education & Training, ETDP SETA Moderator",
    email: "peter@krf.org.za",
    phone: "+27 12 345 6794"
  },
  {
    name: "Lerato Molefe",
    position: "Student Services Officer",
    level: "support",
    image: "https://via.placeholder.com/300x300?text=Lerato+Molefe",
    bio: "Lerato provides comprehensive support to our students throughout their learning journey. Her dedication to student success has improved completion rates significantly.",
    qualifications: "BA Psychology, Student Support Services Certificate",
    email: "lerato@krf.org.za",
    phone: "+27 12 345 6795"
  },
  {
    name: "David Mashaba",
    position: "IT Systems Administrator",
    level: "support",
    image: "https://via.placeholder.com/300x300?text=David+Mashaba",
    bio: "David maintains our technology infrastructure and supports digital learning initiatives. His technical expertise enables our modern training approaches.",
    qualifications: "BSc Computer Science, Microsoft Certified Systems Administrator",
    email: "david@krf.org.za",
    phone: "+27 12 345 6796"
  }
];

const organizationStructure = [
  {
    level: "Board of Directors",
    positions: ["Chairperson", "Vice-Chairperson", "Secretary", "Treasurer", "Board Members (5)"]
  },
  {
    level: "Executive Leadership",
    positions: ["Executive Director"]
  },
  {
    level: "Senior Management",
    positions: ["Programme Director", "Operations Manager", "Research & Development Head"]
  },
  {
    level: "Department Managers",
    positions: ["Finance Manager", "Community Outreach Coordinator", "Training Coordinator"]
  },
  {
    level: "Support Staff",
    positions: ["Student Services Officer", "IT Systems Administrator", "Administrative Assistant"]
  }
];

const Leadership = () => {
  const getTeamByLevel = (level) => {
    return leadership.filter(member => member.level === level);
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
          <h1 className="text-4xl font-bold text-[#c27700] mb-4">Leadership Team</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated professionals who lead the Koketso Rakhudu Foundation 
            in its mission to transform lives through education and community development.
          </p>
        </motion.div>

        {/* Organizational Structure */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#c27700] mb-8 text-center">Organizational Structure</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c27700]">
            <div className="space-y-6">
              {organizationStructure.map((level, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-bold text-[#c27700] mb-3">{level.level}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {level.positions.map((position, posIndex) => (
                      <span
                        key={posIndex}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                      >
                        {position}
                      </span>
                    ))}
                  </div>
                  {index < organizationStructure.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <div className="w-px h-8 bg-[#c27700] opacity-30"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Executive Leadership */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#c27700] mb-8 text-center">Executive Leadership</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {getTeamByLevel('executive').map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-[#c27700]">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-[#c27700] mb-2">{member.name}</h3>
                    <p className="text-lg text-gray-600 mb-4">{member.position}</p>
                    <p className="text-gray-700 mb-4">{member.bio}</p>
                    <p className="text-sm text-gray-600 mb-4"><strong>Qualifications:</strong> {member.qualifications}</p>
                    <div className="flex space-x-4">
                      <a href={`mailto:${member.email}`} className="flex items-center text-[#c27700] hover:text-[#a25e00] transition-colors">
                        <Mail size={16} className="mr-1" />
                        <span className="text-sm">Email</span>
                      </a>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#c27700] hover:text-[#a25e00] transition-colors">
                          <Linkedin size={16} className="mr-1" />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Senior Management */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#c27700] mb-8 text-center">Senior Management</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getTeamByLevel('senior').map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#c27700] mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm mb-3">{member.bio}</p>
                  <p className="text-xs text-gray-600 mb-4"><strong>Qualifications:</strong> {member.qualifications}</p>
                  <div className="flex space-x-3">
                    <a href={`mailto:${member.email}`} className="flex items-center text-[#c27700] hover:text-[#a25e00] transition-colors">
                      <Mail size={14} className="mr-1" />
                    </a>
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="flex items-center text-[#c27700] hover:text-[#a25e00] transition-colors">
                        <Phone size={14} className="mr-1" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#c27700] hover:text-[#a25e00] transition-colors">
                        <Linkedin size={14} className="mr-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Department Managers */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#c27700] mb-8 text-center">Department Managers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getTeamByLevel('management').map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#c27700] mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{member.position}</p>
                  <p className="text-gray-700 text-xs mb-2">{member.bio}</p>
                  <p className="text-xs text-gray-600 mb-3"><strong>Qualifications:</strong> {member.qualifications}</p>
                  <div className="flex space-x-2">
                    <a href={`mailto:${member.email}`} className="text-[#c27700] hover:text-[#a25e00] transition-colors">
                      <Mail size={12} />
                    </a>
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="text-[#c27700] hover:text-[#a25e00] transition-colors">
                        <Phone size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support Staff */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#c27700] mb-8 text-center">Support Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {getTeamByLevel('support').map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-[#c27700] mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{member.position}</p>
                  <p className="text-gray-700 text-xs mb-2">{member.bio}</p>
                  <div className="flex space-x-2">
                    <a href={`mailto:${member.email}`} className="text-[#c27700] hover:text-[#a25e00] transition-colors">
                      <Mail size={12} />
                    </a>
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="text-[#c27700] hover:text-[#a25e00] transition-colors">
                        <Phone size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
          className="bg-gradient-to-r from-[#c27700] to-[#e69500] text-white p-8 rounded-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-6">
            We're always looking for passionate individuals to join our mission of community empowerment through education.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#c27700] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Leadership;