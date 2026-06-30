import React from 'react';

const About = () => {
  const skills = [
    'Java', 'Python', 'C++', 'JavaScript',
    'React.js', 'Node.js', 'HTML5', 'CSS3',
    'MySQL', 'SQL', 'Data Structures & Algorithms',
    'Object-Oriented Programming', 'Git', 'GitHub'
  ];

  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div className="glass-card">
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Professional Summary</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            I am a Computer Science Engineering student graduating in 2026 with strong foundations in Java, 
            Data Structures & Algorithms, Object-Oriented Programming, SQL, and Software Development. 
            I have practical experience in full-stack web development and machine learning projects, and 
            I am passionate about building scalable software solutions and efficient applications.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Technical Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {skills.map((skill, index) => (
              <span 
                key={index}
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: 'var(--text-main)',
                  transition: 'border-color 0.3s'
                }}
                className="hover-target"
                onMouseEnter={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onMouseLeave={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
