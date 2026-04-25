import { forwardRef, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'CloudNest',
    subtitle: 'Cloud-Native File Storage Backend',
    period: '02/2026 – 04/2026',
    description: 'A Spring Boot REST API with JWT authentication, RBAC authorization, and AWS S3 file uploads via pre-signed URLs. Containerized with Docker and schema versioned using Liquibase.',
    tech: ['Spring Boot', 'JWT', 'RBAC', 'AWS S3', 'Docker', 'Liquibase', 'PostgreSQL'],
    link: 'https://github.com/yourfavouritedeveloper/CloudNest',
    accent: '#c8ff00',
  },
  {
    id: '02',
    title: 'TechStore',
    subtitle: 'Full-Stack E-Commerce Platform',
    period: '07/2025 – 11/2025',
    description: 'A production-ready full-stack e-commerce application with React frontend, Spring Boot backend, PostgreSQL, Redis caching, JWT authentication, and Stripe payment integration. Containerized with Docker.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Redis', 'JWT', 'Stripe', 'Docker', 'Liquibase'],
    link: 'https://github.com/yourfavouritedeveloper/TechStore',
    accent: '#00ffd1',
  },
  {
    id: '03',
    title: 'Transactional Bank System',
    subtitle: 'Banking Microservices Architecture',
    period: '2025',
    description: 'A simplified backend for a transactional banking system supporting account management, card services, fund transfers, and transaction history using CQRS, Kafka, and Redis for performance and consistency.',
    tech: ['Spring Boot', 'CQRS', 'Kafka', 'Redis', 'MySQL', 'Microservices'],
    link: 'https://gitlab.com/nihadmammadov/transactional-bank-system',
    accent: '#ff4d6d',
  },
];

const Projects = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const inView = useInView(localRef, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section
      ref={node => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      style={{
        minHeight: '100vh', padding: '120px 48px',
        background: 'linear-gradient(180deg, #0e0e0e 0%, #080808 100%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 80, right: 60,
        fontFamily: "'Bebas Neue', sans-serif", fontSize: 200,
        color: 'rgba(200,255,0,0.03)', lineHeight: 1, pointerEvents: 'none',
      }}>03</div>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 80 }}
        >
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 6, color: '#c8ff00', marginBottom: 12 }}>
            // selected work
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(64px, 8vw, 100px)',
            letterSpacing: 4, lineHeight: 0.9,
            background: 'linear-gradient(135deg, #f0f0f0, #555)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>PROJECTS</h2>
          <div style={{ width: 60, height: 2, background: '#c8ff00', marginTop: 16 }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              inView={inView}
              delay={i * 0.15}
              hovered={hovered === i}
              onEnter={() => setHovered(i)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginTop: 100 }}
        >
          <div style={{ fontSize: 11, letterSpacing: 6, color: '#555', marginBottom: 32, textTransform: 'uppercase' }}>
            Certifications
          </div>
          <div style={{
            padding: '32px',
            border: '1px solid rgba(200,255,0,0.15)',
            background: 'rgba(200,255,0,0.02)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 16,
          }}>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 3, color: '#f0f0f0', marginBottom: 4 }}>
                Java Backend Development
              </div>
              <div style={{ fontSize: 12, color: '#666' }}>
                Turing Academy — 9-month intensive program covering Java SE/8, SQL/JDBC, Docker, Java EE, Spring Boot
              </div>
            </div>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#c8ff00', textTransform: 'uppercase' }}>07/2025</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

function ProjectRow({ project, inView, delay, hovered, onEnter, onLeave }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        padding: '48px 0',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'grid', gridTemplateColumns: '80px 1fr auto',
        gap: 40, alignItems: 'start',
        cursor: 'none',
        transition: 'all 0.3s',
      }}
      onClick={() => window.open(project.link, '_blank')}
    >
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 56, letterSpacing: 4, lineHeight: 1,
        color: hovered ? project.accent : 'rgba(255,255,255,0.08)',
        transition: 'color 0.4s',
      }}>{project.id}</div>

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8, flexWrap: 'wrap' }}>
          <h3 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: 3,
            color: hovered ? '#f0f0f0' : '#ccc',
            transition: 'color 0.3s',
          }}>{project.title}</h3>
          <span style={{ fontSize: 11, color: '#555', letterSpacing: 2 }}>— {project.subtitle}</span>
        </div>
        <p style={{ color: '#666', fontSize: 13, lineHeight: 1.8, marginBottom: 20, maxWidth: 600 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '2px 10px',
              background: hovered ? `rgba(${project.accent === '#c8ff00' ? '200,255,0' : project.accent === '#00ffd1' ? '0,255,209' : '255,77,109'},0.08)` : 'transparent',
              border: `1px solid ${hovered ? project.accent + '40' : 'rgba(255,255,255,0.08)'}`,
              color: hovered ? project.accent : '#555',
              fontSize: 9, letterSpacing: 2, textTransform: 'uppercase',
              transition: 'all 0.3s',
            }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{
        fontSize: 24, color: hovered ? project.accent : '#333',
        transition: 'all 0.3s',
        transform: hovered ? 'translate(4px, -4px)' : 'none',
        marginTop: 8,
      }}>↗</div>
    </motion.div>
  );
}

export default Projects;
