import "./App.css";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import Certificates from "./sections/certificates";


function App() {
  return (
    <div className="bg-background-primary overflow-hidden">
      <Header />
      <Hero />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
