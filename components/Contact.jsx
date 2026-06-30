import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" style={{ 
      background: 'var(--bg-secondary)', 
      padding: '4rem 0',
      marginTop: 'auto',
      borderTop: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Get In Touch</h2>
        
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '3rem' }}>
          I am currently looking for new opportunities and internships. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saichandsama1@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-target">
            Say Hello
          </a>
          <a href="https://wa.me/916305493750" target="_blank" rel="noopener noreferrer" className="btn btn-secondary hover-target">
            +91 6305493750
          </a>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)' }}>
          <a href="https://linkedin.com/in/contact-saichandsama" target="_blank" rel="noreferrer" className="hover-target" style={{ transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-color)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            LinkedIn
          </a>
          <a href="https://github.com/Saichandsama" target="_blank" rel="noreferrer" className="hover-target" style={{ transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-color)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            GitHub
          </a>
        </div>

        <p style={{ marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Designed & Built by Sai Chand Sama © 2026
        </p>
      </div>
    </footer>
  );
};

export default Contact;
