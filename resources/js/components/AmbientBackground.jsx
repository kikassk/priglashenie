import React from 'react';

/* Фон: золотое «космическое» небо (постоянные мерцающие звёзды,
   они никогда не гаснут совсем) + редкие падающие лепестки роз.
   Слой z-index:-1 — ничего не перекрывает контент. */
const STARS = [
  { l: '4%', t: '6%', s: 4, d: '5s', dl: '0s' },
  { l: '12%', t: '18%', s: 2, d: '7s', dl: '1.2s' },
  { l: '22%', t: '8%', s: 3, d: '6s', dl: '2.4s' },
  { l: '31%', t: '22%', s: 2, d: '8s', dl: '0.6s' },
  { l: '41%', t: '11%', s: 3, d: '5.5s', dl: '3s' },
  { l: '52%', t: '19%', s: 2, d: '7.5s', dl: '1.8s' },
  { l: '63%', t: '7%', s: 4, d: '6.5s', dl: '0.3s' },
  { l: '74%', t: '16%', s: 2, d: '8.5s', dl: '2.1s' },
  { l: '85%', t: '5%', s: 3, d: '5.8s', dl: '1.5s' },
  { l: '94%', t: '14%', s: 2, d: '7.2s', dl: '2.8s' },
  { l: '8%', t: '34%', s: 3, d: '6.8s', dl: '0.9s' },
  { l: '18%', t: '48%', s: 2, d: '8.2s', dl: '3.4s' },
  { l: '28%', t: '38%', s: 4, d: '6.2s', dl: '2.2s' },
  { l: '47%', t: '44%', s: 2, d: '7.8s', dl: '0.4s' },
  { l: '67%', t: '36%', s: 3, d: '5.4s', dl: '1.9s' },
  { l: '78%', t: '46%', s: 2, d: '8.8s', dl: '2.6s' },
  { l: '89%', t: '32%', s: 4, d: '6.4s', dl: '1.1s' },
  { l: '96%', t: '42%', s: 2, d: '7.4s', dl: '0.8s' },
  { l: '6%', t: '62%', s: 3, d: '6.6s', dl: '3.2s' },
  { l: '24%', t: '72%', s: 2, d: '8.4s', dl: '1.6s' },
  { l: '38%', t: '66%', s: 4, d: '5.6s', dl: '2.9s' },
  { l: '56%', t: '76%', s: 2, d: '7.6s', dl: '0.2s' },
  { l: '71%', t: '64%', s: 3, d: '6.1s', dl: '2.3s' },
  { l: '84%', t: '74%', s: 2, d: '8.6s', dl: '1.4s' },
  { l: '93%', t: '68%', s: 4, d: '5.9s', dl: '3.6s' },
  { l: '10%', t: '88%', s: 2, d: '7.9s', dl: '0.7s' },
  { l: '33%', t: '92%', s: 3, d: '6.9s', dl: '2.7s' },
  { l: '49%', t: '86%', s: 2, d: '8.1s', dl: '1.3s' },
  { l: '65%', t: '94%', s: 3, d: '5.7s', dl: '3.1s' },
  { l: '88%', t: '90%', s: 2, d: '7.3s', dl: '0.5s' },
  { l: '15%', t: '55%', s: 3, d: '6.3s', dl: '2.5s' },
  { l: '36%', t: '52%', s: 2, d: '8.3s', dl: '1.7s' },
  { l: '58%', t: '56%', s: 3, d: '5.3s', dl: '0.1s' },
  { l: '80%', t: '58%', s: 2, d: '7.7s', dl: '3.3s' },
  { l: '97%', t: '80%', s: 3, d: '6.7s', dl: '1s' },
  { l: '2%', t: '76%', s: 2, d: '8.7s', dl: '2s' },
];

/* Крупные мягкие «светлячки» — размытые золотые огоньки */
const FIREFLIES = [
  { l: '16%', t: '26%', s: 10, d: '9s', dl: '0s' },
  { l: '76%', t: '22%', s: 8, d: '11s', dl: '3s' },
  { l: '86%', t: '58%', s: 11, d: '10s', dl: '6s' },
  { l: '12%', t: '80%', s: 9, d: '12s', dl: '2s' },
  { l: '48%', t: '70%', s: 7, d: '9.5s', dl: '5s' },
  { l: '60%', t: '30%', s: 8, d: '10.5s', dl: '8s' },
];

/* Тонкие золотые колечки, медленно дрейфующие */
const RINGS = [
  { l: '20%', t: '30%', s: 18, d: '18s', dl: '0s' },
  { l: '70%', t: '50%', s: 14, d: '22s', dl: '4s' },
  { l: '40%', t: '80%', s: 20, d: '20s', dl: '8s' },
  { l: '85%', t: '12%', s: 12, d: '24s', dl: '2s' },
];

/* Маленькие сердечки */
const HEARTS = [
  { l: '30%', t: '14%', s: 9, d: '16s', dl: '1s' },
  { l: '68%', t: '84%', s: 8, d: '19s', dl: '6s' },
  { l: '8%', t: '50%', s: 7, d: '17s', dl: '10s' },
];

const ROSE_PETALS = [
  { l: '8%', d: '22s', dl: '0s', w: 13, o: 0.5 },
  { l: '26%', d: '27s', dl: '9s', w: 10, o: 0.42 },
  { l: '45%', d: '24s', dl: '17s', w: 12, o: 0.48 },
  { l: '62%', d: '29s', dl: '4s', w: 9, o: 0.38 },
  { l: '78%', d: '25s', dl: '13s', w: 12, o: 0.46 },
  { l: '91%', d: '31s', dl: '21s', w: 10, o: 0.4 },
];

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
            height: p.w * 1.45,
            opacity: p.o,
            animationDuration: p.d,
            animationDelay: p.dl,
          }}
        />
      ))}
    </div>
  );
}
