"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Networking", icon: <FaNetworkWired className="text-indigo-400" /> },
    { name: "Cybersecurity", icon: <FaShieldAlt className="text-red-400" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200"
    >
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center space-y-3 bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/40 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-gray-300 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
