
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmailSidebar from './components/EmailSidebar';
import About from './components/About';
import Education from './components/Education';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from "./components/Projects";
import FlipCard from './components/FlipCard';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // <-- New loading state

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Hide FlipCard after 5 seconds and show main content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);
useEffect(() => {

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-links a");

    let current = "";

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      // Works better on mobile + desktop
      if (rect.top <= window.innerHeight * 0.3 &&
          rect.bottom >= window.innerHeight * 0.3) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute("href");

      if (!href.startsWith("#")) return;

      link.classList.remove("active");

      if (href === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  // Run once after content loads
  setTimeout(handleScroll, 200);

  return () => window.removeEventListener("scroll", handleScroll);

}, [loading]);

  return (
    <>
      {loading ? (
        <FlipCard /> // Show only FlipCard while loading
      ) : (
        <>
          <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
          <div className="container">
            <div className="div1">
              <Sidebar />
            </div>
            <div className="div2">
              <Hero />
              <About />
              <Education />
              <Internship />
              <Projects />
              <Contact />
            </div>
            <EmailSidebar />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
