import './App.css';
import data from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <a
        href={`https://wa.me/${data.whatsapp}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 2.5c-7.46 0-13.5 6.04-13.5 13.5 0 2.38.62 4.7 1.8 6.74L2.5 29.5l6.9-1.8c1.98 1.08 4.21 1.66 6.6 1.66 7.46 0 13.5-6.04 13.5-13.5S23.46 2.5 16 2.5zm0 24.38c-2.06 0-4.08-.56-5.84-1.62l-.42-.25-4.2 1.1 1.12-4.1-.27-.43a11.26 11.26 0 0 1-1.73-5.98c0-6.21 5.06-11.27 11.34-11.27 3.03 0 5.87 1.18 8.01 3.32a11.26 11.26 0 0 1 3.32 8.02c0 6.21-5.06 11.21-11.33 11.21zm6.23-8.46c-.34-.17-2.01-.99-2.32-1.1-.31-.11-.54-.17-.76.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.25-.73.08-.34-.17-1.43-.53-2.72-1.68-1.01-.9-1.69-2.01-1.88-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.22-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.76-1.83-1.04-2.51-.27-.66-.55-.57-.76-.58h-.65c-.23 0-.6.09-.91.42-.31.34-1.2 1.17-1.2 2.85s1.23 3.31 1.4 3.54c.17.23 2.42 3.69 5.86 5.17.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.09 2.01-.82 2.29-1.61.28-.79.28-1.47.2-1.61-.08-.14-.31-.23-.65-.4z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}

export default App;
