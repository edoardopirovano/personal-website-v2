import { motion } from "framer-motion";
import type { Job } from "../types";
import { cardStyles } from "../styles/common";

const jobs: Job[] = [
  {
    title: "Founding Engineer",
    company: "Meticulous",
    period: "2024 - Present",
    description:
      "Joined as the third engineer to work on a combination of core product development and sales engineering.",
  },
  {
    title: "Software Engineer (IC4→IC5)",
    company: "Lacework",
    period: "2022 - 2024",
    description:
      "Developed code security product offerings through static analysis. Built analysis platform including result processing, ingestion, and caching services.",
  },
  {
    title: "Software Engineer III",
    company: "GitHub",
    period: "2021 - 2022",
    description:
      "Developed performance improvements and features for CodeQL, GitHub's code scanning engine. Part of the CodeQL Foundations team working on the query language and evaluation engine.",
  },
  {
    title: "Teaching Assistant",
    company: "Imperial College London",
    period: "2017 - 2020",
    description:
      "Helped teach a number of undergraduate computer science courses (Logic, Modal Logic, Models of Computation, and Systems Verification) by marking assignments and running classes.",
  },
  {
    title: "Intern",
    company: "Semmle",
    period: "2016 & 2019",
    description:
      "Worked on the Platform team to implement scalability improvements for QL (later renamed to CodeQL after an acquisition by GitHub), a specialized querying language for code analysis and vulnerability detection.",
  },
  {
    title: "Intern",
    company: "Amazon Video",
    period: "2015",
    description:
      "Built system for recording and displaying service calls to track video ownership, improving debugging capabilities for customer issues.",
  },
];

const Jobs = () => {
  return (
    <section id="jobs" className="py-10 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-primary p-6 ${cardStyles}`}
            >
              <h3 className="text-xl font-semibold text-accent">{job.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300">{job.company}</span>
                <span className="text-gray-400 text-sm">{job.period}</span>
              </div>
              <p className="mt-4 text-gray-400 text-justify">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
