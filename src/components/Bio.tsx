import { motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faBook,
  faEnvelope,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import LinkBadge from "./LinkBadge";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/edoardopirovano",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/edoardopirovano",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://scholar.google.co.uk/citations?user=DWwpJhEAAAAJ&hl=en",
    icon: faGraduationCap,
    label: "Scholar",
  },
  {
    href: "https://dblp.org/pers/hd/p/Pirovano:Edoardo",
    icon: faBook,
    label: "DBLP",
  },
  {
    href: "https://spamty.eu/show/v6/508/b7356af146b870064f3c4f9a/",
    icon: faEnvelope,
    label: "Email",
  },
  {
    href: "/cv.pdf",
    icon: faFilePdf,
    label: "CV",
  },
];

const Bio = () => {
  return (
    <section id="bio" className="py-10 px-4 md:px-8 lg:px-16 bg-primary">
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
              className="rounded-full overflow-hidden w-64 h-64 mx-auto"
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
              className="text-gray-400 text-justify"
            >
              I&apos;m a software engineer specialising in developer tools, with
              a focus on testing and verification. I currently work at
              Meticulous, where I&apos;m developing software to fully automate
              website testing. Before joining Meticulous, I worked in static
              code analysis at Lacework and GitHub. And before then, I did a PhD
              at Imperial College London where I carried out research on
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
                {SOCIAL_LINKS.map((link) => (
                  <LinkBadge key={link.href} {...link} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
