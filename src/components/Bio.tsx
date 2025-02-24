import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faBook,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const Bio = () => {
  return (
    <section id="bio" className="py-20 px-4 md:px-8 lg:px-16 bg-primary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-full overflow-hidden w-48 h-48 mx-auto"
            >
              <img
                src="/avatar.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Edoardo Pirovano
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 mb-6"
            >
              Software Engineer based in London
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400"
            >
              I&apos;m a software engineer specialising in developer tools, with
              a focus on testing and verification. I currently work at
              Meticulous, where I&apos;m developing software to fully automate
              website testing. Before joining Meticulous, I worked in static
              code analysis at Lacework and GitHub. And before then, I was a PhD
              student at Imperial College London where I carried out research on
              verifying the safety of AI systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <a
                  href="https://github.com/edoardopirovano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://scholar.google.co.uk/citations?user=DWwpJhEAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
                  <span>Scholar</span>
                </a>
                <a
                  href="https://dblp.org/pers/hd/p/Pirovano:Edoardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faBook} className="w-5 h-5" />
                  <span>DBLP</span>
                </a>
                <a
                  href="https://spamty.eu/show/v6/508/b7356af146b870064f3c4f9a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://keybase.io/edoardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faKey} className="w-5 h-5" />
                  <span>Keybase</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
