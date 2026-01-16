import { useScrollActive } from './hooks/useScrollActive';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/index.css';

function App() {
  const activeSection = useScrollActive();

  return (
    <div className="bg-dark-bg text-white overflow-hidden">
      {/* Grid Background */}
      <div className="grid-background"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
