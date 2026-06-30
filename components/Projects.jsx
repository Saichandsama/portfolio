import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Full-Stack Job Portal',
      tech: ['React.js', 'Spring Boot', 'Node.js', 'MySQL', 'JWT'],
      description: 'A full-stack recruitment platform enabling job seekers to search and apply for jobs while recruiters manage job postings. Implemented secure JWT-based authentication and role-based access control. Designed RESTful APIs and optimized database operations.',
      github: 'https://github.com/Saichandsama'
    },
    {
      title: 'COVID-19 Diagnosis Deep Learning Framework',
      tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
      description: 'Developed an ensemble CNN model for chest X-ray classification. Applied image pre-processing, augmentation, and optimization techniques to improve model performance for automated disease diagnosis.',
      github: 'https://github.com/Saichandsama'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Selected Projects</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
              {project.title}
            </h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ 
                  fontSize: '0.8rem', 
                  color: 'var(--accent-color)', 
                  background: 'rgba(0, 210, 255, 0.1)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px'
                }}>
                  {t}
                </span>
              ))}
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
              {project.description}
            </p>

            <div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary hover-target" 
                style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
