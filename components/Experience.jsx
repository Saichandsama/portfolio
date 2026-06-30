import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2 className="section-title">Experience & Education</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {/* Experience Item */}
        <div className="glass-card" style={{ position: 'relative', borderLeft: '4px solid var(--accent-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>Virtual Intern</h3>
              <h4 style={{ color: 'var(--accent-secondary)', fontWeight: 500, marginBottom: '1rem' }}>Skill Craft Technology</h4>
            </div>
            <span style={{ background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
              May 2026
            </span>
          </div>
          
          <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Gained practical exposure to software development workflows and industry practices.</li>
            <li>Worked on project-based tasks to strengthen programming, debugging, and problem solving skills.</li>
            <li>Collaborated in a virtual professional environment while meeting project requirements and deadlines.</li>
          </ul>
        </div>

        {/* Education Item */}
        <div className="glass-card" style={{ position: 'relative', borderLeft: '4px solid var(--accent-secondary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>B. Tech (Computer Science & Engineering)</h3>
              <h4 style={{ color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1rem' }}>Guru Nanak Institute of Technology</h4>
            </div>
            <span style={{ background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
              2022 - 2026
            </span>
          </div>
          <p style={{ color: 'var(--accent-color)', fontWeight: 600 }}>CGPA: 7.6</p>
          
          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h5 style={{ color: 'var(--text-main)' }}>Intermediate (MPC)</h5>
              <p style={{ color: 'var(--text-muted)' }}>Narayana Junior College | 81%</p>
            </div>
            <div>
              <h5 style={{ color: 'var(--text-main)' }}>SSC</h5>
              <p style={{ color: 'var(--text-muted)' }}>Sri Gowthami High School | GPA: 10.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
