// About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
  FaLightbulb,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated Full-Stack Developer from Hyderabad with a passion for
            crafting dynamic, user-friendly web solutions. My journey in
            development began with an interest in problem-solving and has evolved
            into a commitment to delivering innovative, high-quality digital
            experiences.
          </p>
        </motion.div>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaHtml5 className="text-[#E44D26]" />, name: "HTML5" },
              { icon: <FaCss3Alt className="text-[#264DE4]" />, name: "CSS3" },
              { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
              { icon: <FaReact className="text-[#61DAFB]" />, name: "React & Vite" },
              { icon: <FaPhp className="text-[#777BB3]" />, name: "PHP" },
              { icon: <SiMysql className="text-[#4479A1]" />, name: "MySQL" },
              { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
              { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
              { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
              { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" },
              { icon: <FaProjectDiagram className="text-[#FF4088]" />, name: "Project Management" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-4xl">{skill.icon}</div>
                  <h3 className="font-medium text-gray-900">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
          <div className="grid gap-8">
            <ExperienceCard
              title="Task Manager"
              company="Personal Project"
              duration="2024"
              description="A task manager website helps individuals and teams organize, track, and collaborate on tasks and projects, improving productivity and efficiency."
            />
            <ExperienceCard
              title="Portfolio Website"
              company="Personal Project"
              duration="2023"
              description="Designed and developed a portfolio showcasing my projects and skills using React, Vite, and Tailwind CSS."
            />
            <ExperienceCard
              title="Marichi ventures"
              company="Internship"
              duration="2024"
              description="Collaborated in a team to make the advancements to the website."
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Education</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <EducationCard
              title="Undergraduate"
              institution="Sreenidhi Institute of Science and Technology"
              year="Current"
              grade="CGPA: 8.9"
            />
            <EducationCard
              title="12th Grade"
              institution="Trividya Junior College"
              year="Graduated: 2019"
              grade="95.4%"
            />
            <EducationCard
              title="10th Grade"
              institution="Pallavi Model School"
              year="Graduated: 2017"
              grade="90%"
            />
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Drives Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<FaLightbulb />}
              title="Innovation"
              description="I thrive on bringing fresh ideas to the table and finding creative solutions to complex challenges."
            />
            <ValueCard
              icon={<AiOutlineTeam />}
              title="Collaboration"
              description="I believe in the power of teamwork and love working with others to achieve shared goals."
            />
            <ValueCard
              icon={<FaReact />}
              title="Continuous Learning"
              description="Staying updated with the latest technologies is key to my growth and success as a developer."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, company, duration, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-blue-600 font-medium mb-1">{company}</p>
    <p className="text-gray-500 mb-4">{duration}</p>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const EducationCard = ({ title, institution, year, grade }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">{institution}</p>
    <p className="text-blue-600 font-medium mb-1">{year}</p>
    <p className="text-gray-900 font-semibold">{grade}</p>
  </motion.div>
);

const ValueCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
  >
    <div className="text-4xl text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default About;