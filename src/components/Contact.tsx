"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/contact-bg.jpeg" // <-- save your background image in /public as contact-bg.jpg
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h2 className="text-4xl font-bold text-indigo-400 mb-4">Contact Me</h2>
        <p className="mb-6 text-gray-300">
          I’m always open to networking, collaboration, or opportunities. Feel free
          to reach out if you’d like to work together or just have a chat.
        </p>
        <p className="mb-6 text-lg font-medium">
          📧 austriafrancisdaniel@gmail.com
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:austriafrancisdaniel@gmail.com"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg transition"
          >
            Send Email
          </a>
          <a
            href="/cv.pdf" // <-- add your CV file in /public/cv.pdf
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg transition"
          >
            View My CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://github.com/Francis-MQ" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-indigo-400 transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-indigo-400 transition" />
          </a>
          <a href="mailto:austriafrancisdaniel@gmail.com">
            <FaEnvelope className="hover:text-indigo-400 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
