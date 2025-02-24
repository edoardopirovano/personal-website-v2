import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-6 px-4 mt-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center text-gray-400 text-sm"
      >
        <p>&copy; {currentYear} Edoardo Pirovano. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
