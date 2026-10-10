import { useCallback, useRef } from 'react';

/* 3D-tilt за курсором/пальцем: наклон напрямую в DOM, без ре-рендеров */
export default function useTilt(max = 12) {
  const ref = useRef(null);

  const apply = useCallback(
    (clientX, clientY) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width - 0.5;
      const py = (clientY - rect.top) / rect.height - 0.5;
      const rx = Math.max(-max, Math.min(max, -py * max * 2));
      const ry = Math.max(-max, Math.min(max, px * max * 2));
      el.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    },
    [max]
  );

  const onMouseMove = useCallback((e) => apply(e.clientX, e.clientY), [apply]);

  const reset = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = '';
  }, []);

  const onTouchMove = useCallback(
    (e) => {
      const t = e.touches && e.touches[0];
      if (t) apply(t.clientX, t.clientY);
    },
    [apply]
  );

  return { ref, onMouseMove, onMouseLeave: reset, onTouchMove, onTouchEnd: reset };
}
