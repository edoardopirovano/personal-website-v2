import { motion } from "framer-motion";
import type { Project } from "../types";

const projects: Project[] = [
  {
    title: "Personal Website",
    description: "You're looking at it!",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/edoardopirovano/personal-website-v2",
  },
  {
    title: "News Zap",
    description:
      "A site that sends you a daily email summarising the latest news.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://www.news-zap.com/",
  },
  {
    title: "Pirovano Engineering",
    description:
      "A site for my dad's engineering (the real life kind!) company.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://www.pirovanoengineering.it/",
    github: "https://github.com/edoardopirovano/pirovano-engineering",
  },
  {
    title: "Probabilistic Swarm Verifier",
    description:
      "Code for my PhD thesis on verifying the behaviour of swarm robots.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/edoardopirovano/psv",
  },
  {
    title: "RL-Segmentation",
    description:
      "Code for my master's thesis on using reinforcement learning for medical image segmentation.",
    technologies: ["Python", "PyTorch", "NumPy", "OpenCV"],
    github: "https://github.com/edoardopirovano/rl-segmentation",
  },
  {
    title: "Investor Sentiment Analysis",
    description:
      "Code for my bachelor's group project on predicting stock prices from sentiment analysis of news articles and social media.",
    technologies: ["Python", "PyTorch", "NumPy", "OpenCV"],
    github: "https://github.com/edoardopirovano/investor-sentiment",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Personal Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-accent mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-secondary text-sm rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-text transition-colors"
                  >
                    Live Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-text transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
