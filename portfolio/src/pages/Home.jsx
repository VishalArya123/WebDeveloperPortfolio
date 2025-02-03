import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaDatabase } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl text-gray-600">
                Hi, I am Vishal Arya, a Full-Stack Developer creating beautiful, functional websites that make an impact.
              </p>
              <div className="pt-4">
                <a
                  href="#projects"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Projects
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://media-hosting.imagekit.io//aead241b80de4010/IMG_20241209_154710.jpg?Expires=1833171778&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U2tEyecUw4Xoo292Nu2EyQEDEFWrBBnizUXsEZSF1MJTiX~kPzv~LAqWUqTvruv1e4kA0JNnV0~nyrBERpktaIpBa1qOfbC~f2asUW6Ep0L8WEeQJXZ4urXR6FNWr92z~5TxawhjlC0gpsOuNq-2MUm-9-mXyTsvee~Eh7EsUo7d960Oh~nLbxYmUjawIymcEJsuOSsFstB9cQl9xtTCTr2CCI3AiCelabr1Fe0GglMuKtqD01ZgE3dZ4IoMVTbDY3w9VYmoE5PLctjhBEbsdL0AtvJj8YZRktYYcVOsnApQa1a60SbCQaPd8Ib-2zFXCxA59dCac0z1j1P5jhSbow__"
                alt="Coding illustration"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <FaHtml5 />, name: "HTML5" },
              { icon: <FaCss3Alt />, name: "CSS3" },
              { icon: <FaJsSquare />, name: "JavaScript" },
              { icon: <FaReact />, name: "React" },
              { icon: <FaPhp />, name: "PHP" },
              { icon: <FaDatabase />, name: "Databases" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl text-blue-600 mb-3">{skill.icon}</div>
                <h3 className="text-gray-900 font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A fully functional e-commerce platform with user authentication and payment integration.",
                technologies: ["React", "Node.js", "MongoDB"],
                link: "https://www.yourprojectlink.com"
              },
              {
                title: "Personal Portfolio",
                description: "A sleek and modern portfolio website showcasing my skills and projects.",
                technologies: ["React", "Tailwind CSS"],
                link: "https://vishal-arya.netlify.app/"
              },
              {
                title: "Task Manager",
                description: "A task management app with features like task creation, assignment, and due dates.",
                technologies: ["PHP", "MySQL"],
                link: "https://todosapp.freewebhostmost.com/"
              }
            ].map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            <ExperienceCard
              role="Full-Stack Developer"
              company="Marichi ventures"
              duration="Dec 2024 - Present"
              description="Worked on various front-end and back-end tasks for client websites. Implemented responsive designs using HTML, CSS, and JavaScript."
            />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CertificationCard
              title="Certified React Developer"
              institution="Udemy"
              year="2023"
              description="Comprehensive course covering the fundamentals of React and advanced concepts such as hooks, context, and routing."
            />
            <CertificationCard
              title="Full-Stack Web Development"
              institution="Coursera"
              year="2022"
              description="A full-stack web development course with hands-on experience building applications using Node.js, React, and MySQL."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Feel free to reach out for collaboration, inquiries, or just a friendly chat!
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-gray-600">
              Email: <a href="mailto:vishalaryadacha@gmail.com" className="text-blue-600 hover:underline">vishalaryadacha@gmail.com</a>
            </p>
            <p className="text-gray-600">Phone: +91 9247336497</p>
          </div>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
  >
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

const ExperienceCard = ({ role, company, duration, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-slate-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
  >
    <h3 className="text-xl font-bold text-gray-900">{role}</h3>
    <p className="text-gray-600 mt-1">{company}</p>
    <p className="text-gray-500 text-sm mt-1">{duration}</p>
    <p className="text-gray-600 mt-4">{description}</p>
  </motion.div>
);

const CertificationCard = ({ title, institution, year, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
  >
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{institution} - {year}</p>
    <p className="text-gray-600 mt-4">{description}</p>
  </motion.div>
);

export default Home;