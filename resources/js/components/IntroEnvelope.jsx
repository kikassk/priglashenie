import React, { useState, useCallback } from 'react';

/* Искры, разлетающиеся из конверта при открытии */
const BURST = Array.from({ length: 14 }, (_, i) => {
  const a = (i / 14) * Math.PI * 2 + 0.2;
  const r = 110 + (i % 4) * 34;
  return {
    tx: Math.round(Math.cos(a) * r),
    ty: Math.round(Math.sin(a) * r * 0.75 - 30),
    size: 5 + (i % 3) * 2,
    delay: `${0.22 + (i % 5) * 0.045}s`,
  };
});

/* Экран приветствия: крупный конверт, клик → эффектное открытие → сайт */
export default function IntroEnvelope({ onDone }) {
  const [opening, setOpening] = useState(false);

  const open = useCallback(() => {
    if (opening) return;
    setOpening(true);
    setTimeout(onDone, 2100);
  }, [opening, onDone]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  };

  return (
    <div
      className={`intro-overlay${opening ? ' intro--opening' : ''}`}
      onClick={open}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Открыть приглашение"
    >
      <span className="model-sparkle model-sparkle--a" aria-hidden="true" />
      <span className="model-sparkle model-sparkle--b" aria-hidden="true" />
      <span className="model-sparkle model-sparkle--c" aria-hidden="true" />
      <span className="model-sparkle model-sparkle--d" aria-hidden="true" />
      <span className="model-sparkle model-sparkle--e" aria-hidden="true" />
      <span className="model-sparkle model-sparkle--f" aria-hidden="true" />

      <div className="intro-scene">
        {/* вспышка искр из конверта */}
        <div className="intro-burst" aria-hidden="true">
          {BURST.map((b, i) => (
            <span
              key={i}
              className="intro-burst__p"
              style={{
                '--tx': `${b.tx}px`,
                '--ty': `${b.ty}px`,
                width: b.size,
                height: b.size,
                animationDelay: b.delay,
              }}
            />
          ))}
        </div>

        <div className="intro-env">
          {/* золотое свечение изнутри */}
          <span className="intro-env__glow" aria-hidden="true" />
          <span className="intro-env__glow intro-env__glow--2" aria-hidden="true" />

          {/* письмо внутри — выезжает при открытии */}
          <div className="intro-env__letter">
            <span className="intro-env__letter-text">17 октября</span>
            <span className="intro-env__letter-line" aria-hidden="true" />
          </div>

          {/* тело конверта */}
          <div className="intro-env__body">
            <svg className="intro-env__folds" viewBox="0 0 300 138" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 0 L150 80 L300 0" stroke="#C4A482" strokeWidth="1.3" fill="none" opacity="0.5" />
            </svg>
          </div>

          {/* клапан с печатью — пружинно открывается */}
          <div className="intro-env__flap">
            <span className="intro-env__seal">20</span>
          </div>
        </div>
      </div>

      <p className="intro-hint">Нажми, чтобы открыть</p>
    </div>
  );
}
