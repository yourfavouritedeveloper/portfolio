import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));
    let raf;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,255,0,${p.alpha})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200,255,0,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />;
}

function GlitchText({ text }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {text}
      {glitch && (
        <>
          <span style={{
            position: 'absolute', inset: 0, color: '#ff4d6d',
            clipPath: 'polygon(0 30%, 100% 30%, 100% 50%, 0 50%)',
            transform: 'translateX(-3px)', opacity: 0.8
          }}>{text}</span>
          <span style={{
            position: 'absolute', inset: 0, color: '#00ffd1',
            clipPath: 'polygon(0 55%, 100% 55%, 100% 75%, 0 75%)',
            transform: 'translateX(3px)', opacity: 0.8
          }}>{text}</span>
        </>
      )}
    </span>
  );
}

export default function Hero({ scrollToAbout }) {
  const roles = ['Backend Developer', 'Java Engineer', 'Spring Boot Dev', 'System Architect'];
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', background: '#080808',
    }}>
      <Particles />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(200,255,0,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,255,0,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: 900 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 6,
            color: '#c8ff00', marginBottom: 24, textTransform: 'uppercase',
          }}
        >
          {'< Full-Stack Developer />'}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(72px, 12vw, 160px)',
            lineHeight: 0.9, letterSpacing: 4,
            marginBottom: 16,
            background: 'linear-gradient(135deg, #f0f0f0 0%, #666 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}
        >
          <GlitchText text="NIHAD" />
          <br />
          <span style={{ color: '#c8ff00', WebkitTextFillColor: '#c8ff00' }}>NIHAD MAMMADOV</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontFamily: "'Space Mono', monospace", fontSize: 18,
            color: '#999', marginBottom: 48, height: 28,
          }}
        >
          {displayed}<span style={{ borderRight: '2px solid #c8ff00', marginLeft: 2, animation: 'blink 1s infinite' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <HeroButton primary onClick={scrollToAbout}>Explore Work</HeroButton>
          <HeroButton onClick={() => window.open('https://github.com/yourfavouritedeveloper', '_blank')}>GitHub</HeroButton>
          <HeroButton onClick={() => window.open('https://www.linkedin.com/in/nihad-mammadov-025548325/', '_blank')}>LinkedIn</HeroButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: -80, left: '50%', transform: 'translateX(-50%)', cursor: 'none' }}
          onClick={scrollToAbout}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 10, letterSpacing: 4, color: '#555', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #555, transparent)' }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{ opacity:1 } 50%{ opacity:0 } }
      `}</style>
    </section>
  );
}

function HeroButton({ children, onClick, primary }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '12px 32px', border: primary ? 'none' : '1px solid rgba(200,255,0,0.3)',
        background: primary ? (hov ? '#a8d900' : '#c8ff00') : (hov ? 'rgba(200,255,0,0.08)' : 'transparent'),
        color: primary ? '#080808' : (hov ? '#c8ff00' : '#999'),
        fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 3,
        textTransform: 'uppercase', cursor: 'none',
        transition: 'all 0.3s ease', fontWeight: primary ? 700 : 400,
      }}
    >
      {children}
    </button>
  );
}
