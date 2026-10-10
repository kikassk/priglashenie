import React from 'react';

/* Фон: плотное «золотое» небо — много мерцающих звёзд, светлячков,
   колечек, сердечек и падающих лепестков роз по всей странице.
   Слой z-index:-1 — ничего не перекрывает контент. */

/* Детерминированный псевдослучайный генератор (чтобы SSR/CSR совпадали) */
function makeRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}
const rng = makeRng(20261017);

function range(min, max) {
  return min + rng() * (max - min);
}
function pick(arr) {
  return arr[Math.floor(rng() * arr.length)];
}

/* ——— Звёзды: 70 мерцающих точек по всей странице ——— */
const STARS = Array.from({ length: 70 }, () => ({
  l: `${range(2, 97).toFixed(1)}%`,
  t: `${range(2, 97).toFixed(1)}%`,
  s: Math.round(range(2, 4)),
  d: `${range(5, 9).toFixed(1)}s`,
  dl: `${range(0, 4).toFixed(1)}s`,
}));

/* ——— Светлячки: 16 крупных мягких огоньков ——— */
const FIREFLIES = Array.from({ length: 16 }, () => ({
  l: `${range(5, 92).toFixed(1)}%`,
  t: `${range(5, 92).toFixed(1)}%`,
  s: Math.round(range(7, 12)),
  d: `${range(9, 13).toFixed(1)}s`,
  dl: `${range(0, 9).toFixed(1)}s`,
}));

/* ——— Колечки: 10 тонких золотых дрейфующих колечек ——— */
const RINGS = Array.from({ length: 10 }, () => ({
  l: `${range(4, 93).toFixed(1)}%`,
  t: `${range(4, 93).toFixed(1)}%`,
  s: Math.round(range(10, 22)),
  d: `${range(16, 26).toFixed(1)}s`,
  dl: `${range(0, 10).toFixed(1)}s`,
}));

/* ——— Сердечки: 12 маленьких ——— */
const HEARTS = Array.from({ length: 12 }, () => ({
  l: `${range(3, 94).toFixed(1)}%`,
  t: `${range(3, 94).toFixed(1)}%`,
  s: Math.round(range(6, 11)),
  d: `${range(14, 22).toFixed(1)}s`,
  dl: `${range(0, 12).toFixed(1)}s`,
}));

/* ——— Лепестки роз: 36 падающих по всей странице ——— */
const ROSE_PETALS = Array.from({ length: 36 }, () => ({
  l: `${range(2, 96).toFixed(1)}%`,
  d: `${range(14, 26).toFixed(1)}s`,
  dl: `${range(0, 20).toFixed(1)}s`,
  w: Math.round(range(8, 15)),
  o: Number(range(0.3, 0.58).toFixed(2)),
}));

export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="glow-blob glow-blob--1" />
      <span className="glow-blob glow-blob--2" />
      <span className="glow-blob glow-blob--3" />

      {STARS.map((s, i) => (
        <span
          key={`star-${i}`}
          className="star"
          style={{
            left: s.l,
            top: s.t,
            width: s.s,
            height: s.s,
            '--dur': s.d,
            '--dl': s.dl,
          }}
        />
      ))}

      {FIREFLIES.map((f, i) => (
        <span
          key={`firefly-${i}`}
          className="firefly"
          style={{
            left: f.l,
            top: f.t,
            width: f.s,
            height: f.s,
            '--dur': f.d,
            '--dl': f.dl,
          }}
        />
      ))}

      {RINGS.map((r, i) => (
        <span
          key={`ring-${i}`}
          className="bg-ring"
          style={{
            left: r.l,
            top: r.t,
            width: r.s,
            height: r.s,
            '--dur': r.d,
            '--dl': r.dl,
          }}
        />
      ))}

      {HEARTS.map((h, i) => (
        <span
          key={`heart-${i}`}
          className="bg-heart"
          style={{
            left: h.l,
            top: h.t,
            width: h.s,
            height: h.s,
            '--dur': h.d,
            '--dl': h.dl,
          }}
        />
      ))}

      {ROSE_PETALS.map((p, i) => (
        <span
          key={`rose-${i}`}
          className="rose-petal"
          style={{
            left: p.l,
            width: p.w,
            height: Math.round(p.w * 1.45),
            opacity: p.o,
            animationDuration: p.d,
            animationDelay: p.dl,
          }}
        />
      ))}
    </div>
  );
}
