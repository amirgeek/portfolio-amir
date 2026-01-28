
import Image from "next/image";
import projects from "../data/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Image
          src="/avatar.png" // Assuming an avatar image exists in public folder
          alt="Amir B. Avatar"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
          Amir B.
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">Tech & Marketing Manager</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          A seasoned professional at the intersection of technology and marketing, Amir B. brings a dynamic blend of strategic vision and hands-on execution. With a proven track record in leading complex digital initiatives, optimizing performance across diverse platforms, and fostering innovation, he is adept at driving growth and efficiency in fast-paced environments. His expertise spans from full-stack development to orchestrating impactful marketing campaigns and managing robust IT infrastructures.
        </p>
      </motion.header>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {project.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end space-x-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    View Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline font-medium"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-700 mt-12">
        <p>&copy; {new Date().getFullYear()} Amir B. All rights reserved.</p>
      </footer>
    </div>
  );
}
