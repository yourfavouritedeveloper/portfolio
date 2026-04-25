import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav({ scrollToAbout, scrollToExperience, scrollToProject, scrollToContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', action: scrollToAbout },
    { label: 'Experience', action: scrollToExperience },
    { label: 'Projects', action: scrollToProject },
    { label: 'Contact', action: scrollToContact },
  ];

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    padding: scrolled ? '12px 48px' : '24px 48px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(200,255,0,0.1)' : 'none',
    transition: 'all 0.4s ease',
  };

  return (
    <nav style={navStyle}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 4, color: '#c8ff00' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        NM
      </motion.div>

      {/* Desktop links */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ display: 'flex', gap: 40 }}
        className="nav-desktop"
      >
        {links.map((l, i) => (
          <NavLink key={l.label} label={l.label} action={l.action} delay={i * 0.05} />
        ))}
      </motion.div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{ background: 'none', border: 'none', cursor: 'none', display: 'none' }}
      >
        <div style={{ width: 24, height: 2, background: '#c8ff00', margin: '5px 0', transition: 'all 0.3s',
          transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ width: 24, height: 2, background: '#c8ff00', margin: '5px 0', opacity: menuOpen ? 0 : 1 }} />
        <div style={{ width: 24, height: 2, background: '#c8ff00', margin: '5px 0', transition: 'all 0.3s',
          transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(8,8,8,0.97)', padding: 32,
              display: 'flex', flexDirection: 'column', gap: 24,
              borderBottom: '1px solid rgba(200,255,0,0.2)'
            }}
          >
            {links.map(l => (
              <a key={l.label} onClick={() => { l.action(); setMenuOpen(false); }}
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: 3, cursor: 'none' }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ label, action }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onClick={action}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 3,
        textTransform: 'uppercase', cursor: 'none',
        color: hovered ? '#c8ff00' : '#999',
        transition: 'color 0.3s',
        position: 'relative',
      }}
    >
      {label}
      <span style={{
        position: 'absolute', bottom: -4, left: 0,
        width: hovered ? '100%' : 0, height: 1,
        background: '#c8ff00', transition: 'width 0.3s ease',
      }} />
    </span>
  );
}
