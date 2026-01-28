"use client";

import Image from "next/image";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaAws, FaPython, FaChartLine, FaFacebook, FaScrewdriver } from "react-icons/fa";

const skills = [
  { name: "AWS", icon: FaAws },
  { name: "Python", icon: FaPython },
  { name: "Meta Ads", icon: FaFacebook },
  { name: "Next.js", icon: FaChartLine },
  { name: "Scalability", icon: FaScrewdriver },
  { name: "WebSockets", icon: FaChartLine },
  { name: "Tailwind CSS", icon: FaChartLine },
  { name: "Framer Motion", icon: FaChartLine },
  { name: "Lead Gen", icon: FaChartLine },
  { name: "Crypto Trading", icon: FaChartLine },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-50 antialiased selection:bg-blue-600 selection:text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Image
            src="/avatar.png"
            alt="Amir B. Avatar"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-xl glow-effect"
          />
          <h1 className="text-6xl font-extrabold text-blue-400 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Amir B.
          </h1>
          <p className="text-2xl font-light text-gray-300 mb-6">Tech & Marketing Manager</p>
          <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            A visionary leader at the forefront of digital innovation, Amir B. masterfully navigates the intricate landscapes of technology and marketing. With a distinguished career marked by strategic foresight and a relentless pursuit of excellence, he crafts and scales robust digital ecosystems, propels brands to new heights through data-driven campaigns, and architects cutting-edge solutions from high-frequency trading bots to sophisticated SaaS platforms. His ethos is built on seamless execution, technological prowess, and an unwavering commitment to driving impactful results in dynamic environments.
          </p>
        </motion.header>

        {/* Skills Section (Marquee) */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">Core Competencies</h2>
          <div className="relative overflow-hidden h-20 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 rounded-xl border border-gray-700 shadow-lg">
            <motion.div
              className="absolute flex items-center whitespace-nowrap"
              animate={{
                x: ['100%', '-100%'],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                },
              }}
            >
              {skills.concat(skills).map((skill, index) => (
                <span key={index} className="flex items-center text-2xl text-gray-400 mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <skill.icon className="mr-3 text-blue-500" /> {skill.name}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section (Bento Grid) */}
        <section>
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {projects.map((project, index) => {
              const isElevenClub = project.name.includes("Eleven Club");
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 200, 255, 0.3)" }} // Hover effect with glow
                  className={`relative p-8 rounded-2xl border border-gray-700 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-filter backdrop-blur-lg shadow-2xl transition-all duration-300 ease-in-out
                    ${isElevenClub ? 'lg:col-span-2 row-span-2' : ''}
                    overflow-hidden
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                  <h3 className="relative z-10 text-3xl font-bold text-blue-300 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-400">
                    {project.name}
                  </h3>
                  <p className="relative z-10 text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="relative z-10 flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-900/50 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-700/50 backdrop-filter backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="relative z-10 flex justify-end space-x-6">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 hover:underline font-semibold transition-colors duration-300 flex items-center"
                      >
                        View Project
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-7-3l2 2m0 0l-2 2m2-2h-8"></path></svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 hover:underline font-semibold transition-colors duration-300 flex items-center"
                      >
                        GitHub Repo
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.4 5.4 0 0020 4.77 5.07 5.07 0 0019.22 3c-.5-.5-1.12-.59-1.51-.57C17.7 2.6 16.52 2.19 14.9 2.19c-1.62 0-2.8.41-3.41.59-.39-.02-1.01-.01-1.51.57A5.07 5.07 0 004 3c-.8.52-.3 1.99 0 3.23.47 1.25 1.83 2.17 3.93 2.91C7.9 10.45 7 11.66 7 13.8V19"></path></svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 pt-16 border-t border-gray-800 mt-20">
          <p>&copy; {new Date().getFullYear()} Amir B. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
