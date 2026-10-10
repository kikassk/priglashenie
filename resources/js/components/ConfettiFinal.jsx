import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const COLORS = ['#C4A482', '#A9885F', '#E7DBCA', '#FAF7F2', '#DCCBB4', '#E2BFA2'];

/* Сдержанные кремово-золотые конфетти при появлении финального блока */
export default function ConfettiFinal() {
  const ref = useRef(null);
  const fired = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fire = () => {
      confetti({
        particleCount: 70,
        spread: 70,
        startVelocity: 32,
        ticks: 190,
        scalar: 0.95,
        colors: COLORS,
        origin: { x: 0.5, y: 0.62 },
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 40,
        spread: 110,
        startVelocity: 26,
        ticks: 170,
        scalar: 0.8,
        colors: COLORS,
        origin: { x: 0.2, y: 0.72 },
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 40,
        spread: 110,
        startVelocity: 26,
        ticks: 170,
        scalar: 0.8,
        colors: COLORS,
        origin: { x: 0.8, y: 0.72 },
        disableForReducedMotion: true,
      });
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          io.disconnect();
          fire();
          timeoutRef.current = setTimeout(fire, 900);
        }
      },
      { threshold: 0.45 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return <span ref={ref} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
}
