import './App.css'
import Header from './sections/header'
import Hero from './sections/hero'
import  Skills  from './sections/skills';

function App() {
  
  return (
    <div className="bg-background-primary px-20 overflow-hidden">
      <Header />
      <Hero />
      <Skills />

    </div>
  );
}

export default App
