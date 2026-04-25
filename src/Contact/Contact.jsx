import { forwardRef, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const contacts = [
  { label: 'Email', value: 'nihad.mammadov.16@gmail.com', href: 'mailto:nihad.mammadov.16@gmail.com', icon: '✉' },
  { label: 'LinkedIn', value: '/in/nihad-mammadov', href: 'https://www.linkedin.com/in/nihad-mammadov-025548325/', icon: 'in' },
  { label: 'GitHub', value: 'yourfavouritedeveloper', href: 'https://github.com/yourfavouritedeveloper', icon: '⌥' },
  { label: 'WhatsApp', value: '+994 50 851 45 36', href: 'https://wa.me/994508514536', icon: '✆' },
  { label: 'Facebook', value: 'nihad.memmedov.3950', href: 'https://www.facebook.com/nihad.memmedov.3950/', icon: 'f' },
];

const Contact = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const inView = useInView(localRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={node => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      style={{
        minHeight: '100vh', padding: '120px 48px',
        background: '#080808', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}
    >
      {/* Animated bg lines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${15 + i * 18}%`, left: '-100%',
            width: '300%', height: 1,
            background: `linear-gradient(90deg, transparent, rgba(200,255,0,${0.02 + i * 0.01}), transparent)`,
            animation: `scanline ${3 + i}s linear infinite`,
            animationDelay: `${i * 0.7}s`,
          }} />
        ))}
      </div>

      <div style={{
        position: 'absolute', top: 80, right: 60,
        fontFamily: "'Bebas Neue', sans-serif", fontSize: 200,
        color: 'rgba(200,255,0,0.03)', lineHeight: 1, pointerEvents: 'none',
      }}>04</div>

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 80 }}
        >
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 6, color: '#c8ff00', marginBottom: 12 }}>
            // let's connect
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(64px, 8vw, 100px)',
            letterSpacing: 4, lineHeight: 0.9,
            background: 'linear-gradient(135deg, #f0f0f0, #555)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>CONTACT</h2>
          <div style={{ width: 60, height: 2, background: '#c8ff00', marginTop: 16 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.3,
              color: '#f0f0f0', marginBottom: 32,
            }}>
              Have a project in mind or want to{' '}
              <span style={{ color: '#c8ff00', fontStyle: 'italic' }}>collaborate?</span>
            </p>
            <p style={{ color: '#666', fontSize: 13, lineHeight: 2, marginBottom: 48 }}>
              I'm always open to discussing new opportunities, interesting projects, or just connecting with fellow developers.
              Whether it's backend architecture, system design, or internship opportunities — reach out!
            </p>

            <a
              href="mailto:nihad.mammadov.16@gmail.com"
              style={{
                display: 'inline-block', padding: '16px 40px',
                background: '#c8ff00', color: '#080808',
                fontFamily: "'Space Mono', monospace", fontSize: 11,
                letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700,
                cursor: 'none', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a8d900'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#c8ff00'; e.currentTarget.style.transform = 'none'; }}
            >
              Send Message
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
          >
            {contacts.map((c, i) => (
              <ContactRow key={c.label} contact={c} delay={i * 0.08} inView={inView} />
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            marginTop: 120, paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 16,
          }}
        >
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 4, color: '#333' }}>
            NIHAD MAMMADOV
          </div>
          <div style={{ fontSize: 11, color: '#333', letterSpacing: 2 }}>
            © 2026 · BAKU, AZERBAIJAN
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scanline { from { transform: translateX(-50%) } to { transform: translateX(50%) } }
        @media (max-width: 768px) {
          section > div > div:last-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
});

function ContactRow({ contact, delay, inView }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 20,
        padding: '20px 24px', cursor: 'none',
        background: hov ? 'rgba(200,255,0,0.04)' : 'transparent',
        borderLeft: `2px solid ${hov ? '#c8ff00' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.3s',
      }}
    >
      <span style={{
        width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${hov ? '#c8ff00' : 'rgba(255,255,255,0.1)'}`,
        color: hov ? '#c8ff00' : '#555',
        fontSize: 14, fontWeight: 700, flexShrink: 0,
        transition: 'all 0.3s',
      }}>{contact.icon}</span>
      <div>
        <div style={{ fontSize: 9, letterSpacing: 4, color: '#444', textTransform: 'uppercase', marginBottom: 2 }}>{contact.label}</div>
        <div style={{ fontSize: 12, color: hov ? '#f0f0f0' : '#666', transition: 'color 0.3s' }}>{contact.value}</div>
      </div>
      <span style={{ marginLeft: 'auto', color: hov ? '#c8ff00' : '#333', transition: 'all 0.3s', transform: hov ? 'translate(2px,-2px)' : 'none' }}>↗</span>
    </motion.a>
  );
}

export default Contact;
