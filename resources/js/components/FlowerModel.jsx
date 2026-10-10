import React from 'react';
import useTilt from './useTilt';
import RoseArt from './RoseArt';

const SPARKS = [
  { x: 20, y: 44, d: '0s' },
  { x: 130, y: 52, d: '0.9s' },
  { x: 30, y: 110, d: '1.7s' },
  { x: 128, y: 100, d: '2.3s' },
  { x: 75, y: 24, d: '3s' },
];

/* Роза — элегантная SVG-иллюстрация */
export default function FlowerModel() {
  const tilt = useTilt(8);

  return (
    <div
      className="scene3d scene3d--flower"
      aria-hidden="true"
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onTouchMove={tilt.onTouchMove}
      onTouchEnd={tilt.onTouchEnd}
    >
      <div className="art-wrap art-wrap--flower art-wrap--turn">
        <RoseArt />
      </div>

      {SPARKS.map((s, i) => (
        <span key={i} className="model-sparkle" style={{ left: s.x, top: s.y, animationDelay: s.d }} />
      ))}
    </div>
  );
}
