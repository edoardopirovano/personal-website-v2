import { motion } from "framer-motion";
import type { Project } from "../types";
import { cardStyles } from "../styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const projects: Project[] = [
  {
    title: "Personal Website",
    description: "You're looking at it!",
    link: "https://github.com/edoardopirovano/personal-website-v2",
    linkType: "github",
  },
  {
    title: "News Zap",
    description:
      "A site that sends you a daily email summarising the latest news.",
    link: "https://www.news-zap.com/",
    linkType: "website",
  },
  {
    title: "FreezeFlag",
    description:
      "Website to warn you when the temperature is about to drop below freezing.",
    link: "https://www.freezeflag.com/",
    linkType: "website",
  },
  {
    title: "Rosanna's Recipes",
    description:
      "A recreation of a recipe site my grandad made for my grandmother.",
    link: "https://www.rosanna-recipes.co.uk/",
    linkType: "website",
  },
  {
    title: "G-GAJB",
    description: "Landing page for an aircraft that I jointly own.",
    link: "https://www.gajb.co.uk/",
    linkType: "website",
  },
  {
    title: "Pirovano Engineering",
    description:
      "A site for my dad's engineering (the real life kind!) company.",
    link: "https://www.pirovanoengineering.it/",
    linkType: "website",
  },
  {
    title: "Probabilistic Swarm Verifier",
    description:
      "Code for my PhD thesis on verifying the behaviour of swarm robots.",
    link: "https://github.com/edoardopirovano/psv",
    linkType: "github",
  },
  {
    title: "RL Segmentation",
    description:
      "Code for my master's thesis on using reinforcement learning for medical image segmentation.",
    link: "https://github.com/edoardopirovano/rl-segmentation",
    linkType: "github",
  },
  {
    title: "Investor Sentiment Tracker",
    description:
      "Code for my second year group project on whether investor sentiment is predictive of stock prices.",
    link: "https://github.com/edoardopirovano/investor-sentiment",
    linkType: "github",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-4 md:px-8 lg:px-16 bg-secondary">
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
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-primary p-6 ${cardStyles} group relative hover:bg-primary/80`}
            >
              <h3 className="text-xl font-semibold text-accent mb-2 group-hover:text-text">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-justify">
                {project.description}
              </p>

              <FontAwesomeIcon
                icon={project.linkType === "github" ? faGithub : faGlobe}
                className="absolute bottom-4 right-4 w-5 h-5 text-gray-400 group-hover:text-accent"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
