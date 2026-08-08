import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Foot from "./components/Foot/Foot";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Certifications/>
      <Projects/>
      <Contact/>
      <Foot/>
    </>
  );
}

export default App;