import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 text-black font-sans px-4 py-16 relative">
      {/* Background Design Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#c27700] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-2 bg-[#c27700] opacity-15 rounded-full"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-[#c27700] rounded-full opacity-5"></div>

      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-[#c27700] mb-10 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c27700]">
              <h2 className="text-2xl font-bold text-[#c27700] mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-[#c27700]" size={20} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-700"></p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-[#c27700]" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-700"></p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="text-[#c27700]" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700">admin@koketsorakhudufoundation.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c27700]">
              <h2 className="text-2xl font-bold text-[#c27700] mb-6">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.facebook.com/krfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/krfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/krfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://wa.me/27123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c27700]"
          >
            <h2 className="text-2xl font-bold text-[#c27700] mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c27700] focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c27700] focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c27700] focus:border-transparent transition-colors"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c27700] focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#c27700] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#a25e00] transition-colors transform hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Office Hours */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mt-12 bg-gradient-to-r from-[#c27700] to-[#e69500] text-white p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
          <div className="grid md:grid-cols-2 gap-4 text-lg">
            <div>
              <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
            </div>
            <div>
              <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
            </div>
          </div>
          <p className="mt-4 text-sm">Closed on Sundays and Public Holidays</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;