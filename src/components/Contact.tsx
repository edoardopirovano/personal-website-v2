import { motion } from "framer-motion";
import { useState } from "react";
import ContactBadge from "./ContactBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const CONTACT_OPTIONS = [
  {
    href: "https://calendly.com/edoardo_pirovano/short-sync",
    title: "Schedule a Meeting",
    description: "Book a time slot on Calendly",
    icon: <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 text-accent" />,
  },
  {
    href: "https://keybase.io/edoardo",
    title: "Secure Contact",
    description: "Message me on Keybase",
    icon: <FontAwesomeIcon icon={faLock} className="w-5 h-5 text-accent" />,
  },
  {
    href: "https://spamty.eu/show/v6/508/b7356af146b870064f3c4f9a/",
    title: "Email Me",
    description: "Send a traditional email",
    icon: <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-accent" />,
  },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-primary">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
            {isSubmitted ? (
              <div className="bg-green-800/20 border border-green-500 rounded-lg p-4">
                <p className="text-green-400">
                  Thanks for your message! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xknpqkkw"
                method="POST"
                onSubmit={() => setIsSubmitted(true)}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/80 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Schedule Meeting */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
            <div className="flex flex-col space-y-4">
              {CONTACT_OPTIONS.map((option) => (
                <ContactBadge key={option.href} {...option} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
