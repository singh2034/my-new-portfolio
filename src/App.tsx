import Navbar from "./components/shared/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default App;
