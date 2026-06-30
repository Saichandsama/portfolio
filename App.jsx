import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-main)' }}>
          SS.
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" className="hover-target" style={{ transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color='var(--accent-color)'} onMouseLeave={e => e.target.style.color='var(--text-main)'}>About</a>
          <a href="#experience" className="hover-target" style={{ transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color='var(--accent-color)'} onMouseLeave={e => e.target.style.color='var(--text-main)'}>Experience</a>
          <a href="#projects" className="hover-target" style={{ transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color='var(--accent-color)'} onMouseLeave={e => e.target.style.color='var(--text-main)'}>Projects</a>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      
      <Contact />
    </div>
  );
}

export default App;
