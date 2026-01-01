import "./App.css";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import Certificates from "./sections/certificates";
import Projects from "./sections/projects";


function App() {
  return (
    <div className="bg-background-primary overflow-hidden max-w-[1600px] mx-auto">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
