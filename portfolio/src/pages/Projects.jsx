// Projects.jsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Stories Exchange Platform",
    description: "A platform for sharing and discovering captivating stories.  Read, write, and connect with a community of storytellers and readers.",
    techStack: ["React", "Node.js", "Tailwind","PHP"],
    image: "https://media-hosting.imagekit.io//5e9950f633914a40/Screenshot%202025-02-03%20at%204.38.40%20PM.png?Expires=1833189118&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qeqi~BGWkvWKIqMKO4D38AYc1lWcc0caSHjFs9cmDHg~HIEVn0gGVPMWPOAYGlsxOqgQxGjZfjwGlus5W66XBwi4FLljvld9zbGg58dIKsD0FnhyYf1vthGnXccjPUw3gVJRhRoVlDsFt4QM5bGz0eAkCGeXr~cNi0JwCb6kSoiEqxjKlRe54Q9gTFs-aSu0FxCO6IGcH5cugZJmLW2XrZdm4XTpZpj1ptfybGV8vIxDDRGI6m2ksg8ULW80ARP1Rw5-wDF6hugonca-eM2uC4ayoaMzIjIuFevT4VhjG7EcYeFz3TN~ahi-O78XtjdOR9YsAt-x0pfzewcLF-rJCA__",
    link: "storyhub-nine.vercel.app",
    github: "https://github.com/VishalArya123/StoryHub"
  },
  {
    name: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    image: "https://media-hosting.imagekit.io//4b3cb3c445214649/Screenshot%202025-02-03%20at%204.43.03%20PM.png?Expires=1833189204&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=k9YYYVwjRqT5RmZbE-l-8IZY5q7mLak-lNumWGcKzQILO1-eTXaHD7e4qch2zsZtTXozNIHetp8Zt8zblEhkAFwvtex3V7sZ48LiVqg9PL5R5xtpNvMQ9aQqekoH5eifm~CCHaWG9TKiUxtoorUIZNtoDxIyb7rtLiu8YVeM6TG2S18ZQiDx0kZ4Tb4-KRMq9jwCP6ELPTqBlnosfQYDWYxXNFAEjesSEJziERVGd5WEXRGNSgsr2RZPex9W9ENxpgrMDaOukydPvu-fuAABodSZ63qCSxTV4d6DNJ7xae6ctF0iot99s5y7JfGONhi-a8XWcg20Vp2ZzyyMfExoiQ__",
    link: "https://vishal-arya.netlify.app/",
    github: "https://github.com/VishalArya123/ReactPortfolio"
  },
  {
    name: "Task Management App",
    description: "A web-based task management app with real-time collaboration features.",
    techStack: ["PHP", "MySQL", "Bootstrap"],
    image: "/api/placeholder/600/400",
    link: "https://todosapp.freewebhostmost.com/",
    github: "https://github.com/yourusername/task-manager"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a collection of my recent work, showcasing my skills in full-stack development
            and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-white rounded-xl shadow-xl overflow-hidden"
  >
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h2>
        <p className="text-gray-600 mb-6">{project.description}</p>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaExternalLinkAlt /> View Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaGithub /> Source Code
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Projects;