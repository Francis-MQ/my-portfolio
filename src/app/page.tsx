"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-20 relative"
      >
        {/* Profile Image with Animated Glow */}
        <motion.div
          className="flex-1 flex justify-center mb-8 md:mb-0 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full 
                      bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-600 
                      blur-2xl opacity-30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          ></motion.div>

          <Image
            src="/profile.jpg"
            alt="Francis Austria"
            width={650}
            height={650}
            className="relative rounded-full object-cover border-4 border-indigo-500 shadow-lg"
            priority
          />
        </motion.div>

        {/* Intro */}
        <motion.div
          className="flex-1 text-center md:text-left md:pl-12 relative z-10"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Francis Daniel V. Austria
          </h1>
          <p className="mt-4 text-lg text-indigo-300 font-medium">
            IT Student | Aspiring Networker & Cybersecurity Enthusiast
          </p>
          <p className="mt-4 text-gray-300 max-w-xl">
            I specialize in building web platforms, system integrations, and
            mobile apps. My focus is networking, cybersecurity, and solving
            real-world IT challenges with clean, scalable solutions.
          </p>

          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-indigo-500"
          >
            View Projects
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
