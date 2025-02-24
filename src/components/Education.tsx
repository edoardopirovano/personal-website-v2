import { motion } from "framer-motion";
import type { Education as EducationType } from "../types";
import { cardStyles } from "../styles/common";

const educationList: EducationType[] = [
  {
    degree: "PhD in Computing",
    institution: "Imperial College London",
    year: "2017-2021",
    description: "Published 8 conference papers and 1 journal paper.",
  },
  {
    degree: "Master's in Mathematics & Computer Science",
    institution: "University of Oxford",
    year: "2013-2017",
    description:
      "First Class Honours in both the bachelor and master's degrees.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-10 px-4 md:px-8 lg:px-16 bg-primary">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-secondary p-6 ${cardStyles}`}
            >
              <h3 className="text-xl font-semibold text-accent">
                {edu.degree}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300">{edu.institution}</span>
                <span className="text-gray-400 text-sm">{edu.year}</span>
              </div>
              {edu.description && (
                <p className="mt-4 text-gray-400 text-justify">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
