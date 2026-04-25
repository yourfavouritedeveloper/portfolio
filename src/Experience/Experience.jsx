import { forwardRef, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    company: 'Alievs Space MMC',
    role: 'Backend Developer',
    period: '03/2026 – Present',
    type: 'current',
    bullets: [
      'Built scalable REST APIs with Java and Spring Boot across multiple business domains.',
      'Engineered JWT authentication with refresh token rotation and RBAC-based access control.',
    ],
    tech: ['Java', 'Spring Boot', 'JWT', 'RBAC', 'REST API'],
  },
  {
    company: 'Kapital Bank ASC',
    role: 'Backend Developer',
    period: '06/2025 – 07/2025',
    type: 'internship',
    bullets: [
      'Built a banking system with Spring Boot, CQRS, Kafka, and Redis for accounts, transfers, and reconciliation.',
      'Designed event-driven microservices for high throughput and data consistency.',
      'Collaborated with the front-end team using React to build a responsive banking dashboard.',
    ],
    tech: ['Spring Boot', 'CQRS', 'Kafka', 'Redis', 'React'],
  },
  {
    company: 'C4IR (4th Industrial Revolution)',
    role: 'Backend Developer',
    period: '02/2025 – 05/2025',
    type: 'internship',
    bullets: [
      'Integrated NLP and voice recognition pipelines to improve conversational system responsiveness.',
      'Monitored enterprise IT infrastructure and performed proactive troubleshooting to minimize downtime.',
    ],
    tech: ['NLP', 'Voice Recognition', 'IT Infrastructure'],
  },
  {
    company: 'BHOS Society of Young Programmers',
    role: 'Java Programming Mentor',
    period: '02/2025 – 09/2025',
    type: 'mentor',
    bullets: [
      'Taught Java clean code principles and best practices through project-based learning.',
      'Designed curricula to accelerate practical skill development and real-world problem-solving.',
    ],
    tech: ['Java', 'Clean Code', 'OOP', 'Mentoring'],
  },
  {
    company: 'Institute of Control Systems',
    role: 'Software Engineer',
    period: '06/2024 – 07/2024',
    type: 'internship',
    bullets: [
      'Built decision-making systems using image processing and DSP for industrial applications.',
      'Prototyped hardware-software solutions with Raspberry Pi.',
    ],
    tech: ['Python', 'DSP', 'Image Processing', 'Raspberry Pi'],
  },
];

const typeColors = {
  current: '#c8ff00',
  internship: '#00ffd1',
  mentor: '#ff4d6d',
};

const Experience = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const inView = useInView(localRef, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section
      ref={node => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      style={{
        minHeight: '100vh', padding: '120px 48px',
        background: '#0e0e0e', position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 80, right: 60,
        fontFamily: "'Bebas Neue', sans-serif", fontSize: 200,
        color: 'rgba(200,255,0,0.03)', lineHeight: 1, pointerEvents: 'none',
      }}>02</div>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 80 }}
        >
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 6, color: '#c8ff00', marginBottom: 12 }}>
            // work experience
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(64px, 8vw, 100px)',
            letterSpacing: 4, lineHeight: 0.9,
            background: 'linear-gradient(135deg, #f0f0f0, #555)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>EXPERIENCE</h2>
          <div style={{ width: 60, height: 2, background: '#c8ff00', marginTop: 16 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 48 }}>
          {/* Company list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {experiences.map((exp, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  padding: '16px 20px',
                  borderLeft: `2px solid ${i === active ? typeColors[exp.type] : 'rgba(255,255,255,0.06)'}`,
                  background: i === active ? 'rgba(200,255,0,0.04)' : 'transparent',
                  cursor: 'none', marginBottom: 4,
                  transition: 'all 0.3s',
                }}
              >
                <div style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 11,
                  color: i === active ? '#f0f0f0' : '#555',
                  letterSpacing: 1, marginBottom: 2, transition: 'color 0.3s',
                }}>{exp.company}</div>
                <div style={{ fontSize: 9, letterSpacing: 3, color: typeColors[exp.type], textTransform: 'uppercase' }}>
                  {exp.period}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Detail panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.02)',
              position: 'relative',
            }}
          >
            <div style={{
              position: 'absolute', top: 20, right: 20,
              padding: '4px 12px', fontSize: 9, letterSpacing: 3,
              border: `1px solid ${typeColors[experiences[active].type]}`,
              color: typeColors[experiences[active].type],
              textTransform: 'uppercase',
            }}>
              {experiences[active].type}
            </div>

            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 36, letterSpacing: 3, color: '#f0f0f0', marginBottom: 4,
            }}>
              {experiences[active].role}
            </h3>
            <div style={{ color: '#c8ff00', fontSize: 13, marginBottom: 32 }}>
              @ {experiences[active].company}
            </div>

            <ul style={{ listStyle: 'none', marginBottom: 32 }}>
              {experiences[active].bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
                  <span style={{ color: '#c8ff00', fontSize: 16, lineHeight: 1.5, flexShrink: 0 }}>▸</span>
                  <span style={{ color: '#999', fontSize: 13, lineHeight: 1.8 }}>{b}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {experiences[active].tech.map(t => (
                <span key={t} style={{
                  padding: '4px 12px', background: 'rgba(200,255,0,0.06)',
                  border: '1px solid rgba(200,255,0,0.15)',
                  color: '#c8ff00', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase',
                }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Volunteering */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: 80 }}
        >
          <div style={{ fontSize: 11, letterSpacing: 6, color: '#555', marginBottom: 24, textTransform: 'uppercase' }}>
            Volunteering
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { org: 'Formula 1 Azerbaijan GP', role: 'Anthem Ceremony Team Member', period: '09/2025' },
              { org: 'ICPC', role: 'Venue Management Team', period: '08–09/2025' },
            ].map((v, i) => (
              <div key={i} style={{
                flex: 1, minWidth: 200, padding: '24px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, color: '#f0f0f0', marginBottom: 4 }}>{v.org}</div>
                <div style={{ fontSize: 11, color: '#666', marginBottom: 8 }}>{v.role}</div>
                <div style={{ fontSize: 10, letterSpacing: 3, color: '#c8ff00' }}>{v.period}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
});

export default Experience;
