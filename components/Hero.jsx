import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="container" style={{ textAlign: 'center', position: 'relative' }}>
      <div style={{ zIndex: 1, position: 'relative' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Sai Chand Sama</span>
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Computer Science Engineering Student & Full-Stack Developer
        </h2>
        
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}>
          Passionate about building scalable software solutions, solving complex technical problems, 
          and developing efficient web applications.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary hover-target">View My Work</a>
          <a href="#contact" className="btn btn-secondary hover-target">Contact Me</a>
        </div>
      </div>
      
      {/* Background glowing blob */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,210,255,0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
    </section>
  );
};

export default Hero;
