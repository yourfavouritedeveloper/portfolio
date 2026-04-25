import { forwardRef, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { label: 'Java / Spring Boot', level: 95 },
  { label: 'REST APIs / Microservices', level: 90 },
  { label: 'PostgreSQL / Redis', level: 85 },
  { label: 'Docker / Kafka', level: 80 },
  { label: 'React.js', level: 65 },
  { label: 'AWS / Cloud', level: 60 },
];

const tags = [
  'Java 8', 'Spring Boot', 'Spring Security', 'JWT', 'RBAC',
  'CQRS', 'Kafka', 'Redis', 'PostgreSQL', 'Docker',
  'Liquibase', 'REST API', 'React.js', 'Tailwind CSS',
  'Git', 'GitHub', 'Gradle', 'OOP', 'Design Patterns', 'DSA',
];

const About = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const inView = useInView(localRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={node => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      style={{
        minHeight: '100vh', padding: '120px 48px',
        background: 'linear-gradient(180deg, #080808 0%, #0e0e0e 100%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Decorative number */}
      <div style={{
        position: 'absolute', top: 80, right: 60,
        fontFamily: "'Bebas Neue', sans-serif", fontSize: 200,
        color: 'rgba(200,255,0,0.03)', lineHeight: 1, pointerEvents: 'none',
        userSelect: 'none',
      }}>01</div>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 80 }}
        >
          <div style={{
            fontFamily: "'Space Mono', monospace", fontSize: 11,
            letterSpacing: 6, color: '#c8ff00', marginBottom: 12,
          }}>// about me</div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(64px, 8vw, 100px)',
            letterSpacing: 4, lineHeight: 0.9,
            background: 'linear-gradient(135deg, #f0f0f0, #555)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>ABOUT</h2>
          <div style={{ width: 60, height: 2, background: '#c8ff00', marginTop: 16 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{ color: '#ccc', lineHeight: 2, marginBottom: 24, fontSize: 14 }}>
              I'm <span style={{ color: '#c8ff00', fontWeight: 700 }}>Nihad Mammadov</span>, a Backend Developer currently studying
              Computer Engineering at <span style={{ color: '#c8ff00' }}>Baku Higher Oil School</span>{' '}
              (GPA: 92.44 | SPA: 95.9). Born in Saint Petersburg, living in Baku.
            </p>
            <p style={{ color: '#888', lineHeight: 2, marginBottom: 24, fontSize: 14 }}>
              I specialize in building scalable, production-grade backend systems using Java and Spring Boot.
              From JWT authentication with refresh token rotation to event-driven microservices with Kafka —
              I care deeply about architecture, clean code, and performance.
            </p>
            <p style={{ color: '#888', lineHeight: 2, marginBottom: 40, fontSize: 14 }}>
              Currently working at <span style={{ color: '#f0f0f0' }}>Alievs Space MMC</span> as a Backend Developer,
              building scalable REST APIs across multiple business domains. I also mentor junior
              developers and believe that teaching is the best way to solidify your own knowledge.
            </p>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                ['Location', 'Baku, Azerbaijan'],
                ['Education', 'BHOS — Computer Eng.'],
                ['Email', 'nihad.mammadov.16@gmail.com'],
                ['Phone', '+994 50 851 45 36'],
              ].map(([k, v]) => (
                <div key={k} style={{ borderLeft: '2px solid rgba(200,255,0,0.3)', paddingLeft: 12 }}>
                  <div style={{ fontSize: 10, letterSpacing: 3, color: '#555', textTransform: 'uppercase', marginBottom: 2 }}>{k}</div>
                  <div style={{ fontSize: 12, color: '#ccc' }}>{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div style={{ marginBottom: 40 }}>
              {skills.map((skill, i) => (
                <SkillBar key={skill.label} skill={skill} inView={inView} delay={i * 0.1 + 0.5} />
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {tags.map(tag => (
                <span key={tag} style={{
                  padding: '4px 12px',
                  border: '1px solid rgba(200,255,0,0.2)',
                  color: '#666', fontSize: 10, letterSpacing: 2,
                  textTransform: 'uppercase',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,255,0,0.7)'; e.currentTarget.style.color = '#c8ff00'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,255,0,0.2)'; e.currentTarget.style.color = '#666'; }}
                >{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
});

function SkillBar({ skill, inView, delay }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 11, letterSpacing: 2, color: '#ccc', textTransform: 'uppercase' }}>{skill.label}</span>
        <span style={{ fontSize: 11, color: '#c8ff00' }}>{skill.level}%</span>
      </div>
      <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #c8ff00, #00ffd1)', position: 'absolute' }}
        />
      </div>
    </div>
  );
}

export default About;
