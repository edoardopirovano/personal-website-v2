import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Jobs from "./components/Jobs";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { initGA } from "./utils/analytics";

function App() {
  useEffect(() => {
    initGA("UA-21832547-5");
  }, []);

  return (
    <div className="min-h-screen bg-primary text-text m-0 flex flex-col">
      <Navbar />
      <main className="pt-16 flex-grow">
        <Bio />
        <Jobs />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
