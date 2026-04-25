import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    let raf;
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  useEffect(() => {
    const over = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHovering(true);
    };
    const out = () => setHovering(false);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => {
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999,
        width: hovering ? 40 : 8, height: hovering ? 40 : 8,
        borderRadius: '50%',
        background: hovering ? 'transparent' : '#c8ff00',
        border: hovering ? '1.5px solid #c8ff00' : 'none',
        transform: `translate(${pos.x - (hovering ? 20 : 4)}px, ${pos.y - (hovering ? 20 : 4)}px)`,
        transition: 'width 0.2s, height 0.2s, background 0.2s, border 0.2s',
        mixBlendMode: 'difference',
      }} />
      <div style={{
        position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998,
        width: 24, height: 24, borderRadius: '50%',
        border: '1px solid rgba(200,255,0,0.4)',
        transform: `translate(${trail.x - 12}px, ${trail.y - 12}px)`,
        mixBlendMode: 'difference',
      }} />
    </>
  );
}
