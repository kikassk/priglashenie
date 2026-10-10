import React from 'react';

/* Элегантная SVG-роза: слоистые лепестки, бутон, стебель с листьями — всё в границах */
export default function RoseArt() {
  const petals = (count, r, size, fill, stroke, offset = 0) =>
    Array.from({ length: count }, (_, i) => {
      const a = (i / count) * 360 + offset;
      return (
        <ellipse
          key={`${fill}-${i}`}
          cx="100"
          cy={100 - r}
          rx={size * 0.62}
          ry={size}
          fill={fill}
          stroke={stroke}
          strokeWidth="1"
          transform={`rotate(${a} 100 100)`}
        />
      );
    });

  return (
    <svg className="art-float art-float--flower" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rose-o" cx="0.4" cy="0.35" r="0.9">
          <stop offset="0" stopColor="#F8DDD0" />
          <stop offset="1" stopColor="#E2AC94" />
        </radialGradient>
        <radialGradient id="rose-m" cx="0.4" cy="0.35" r="0.9">
          <stop offset="0" stopColor="#F2C9B6" />
          <stop offset="1" stopColor="#D89A82" />
        </radialGradient>
        <radialGradient id="rose-i" cx="0.4" cy="0.35" r="0.9">
          <stop offset="0" stopColor="#E8B098" />
          <stop offset="1" stopColor="#C47A5E" />
        </radialGradient>
        <radialGradient id="rose-core" cx="0.4" cy="0.35" r="0.9">
          <stop offset="0" stopColor="#D88F72" />
          <stop offset="1" stopColor="#B25F43" />
        </radialGradient>
        <linearGradient id="stem-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#A8B28A" />
          <stop offset="1" stopColor="#8A966E" />
        </linearGradient>
        <linearGradient id="leaf-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#BCC49C" />
          <stop offset="1" stopColor="#93A075" />
        </linearGradient>
      </defs>

      {/* мягкая тень */}
      <ellipse cx="100" cy="238" rx="40" ry="6" fill="#2A1B12" opacity="0.07" />

      {/* стебель */}
      <path d="M100 148 Q97 190 100 232" stroke="url(#stem-g)" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* листья */}
      <g className="art-leaf">
        <path d="M98 180 Q68 168 60 188 Q82 200 98 188 Z" fill="url(#leaf-g)" stroke="#7E8B62" strokeWidth="0.8" />
        <path d="M96 182 Q80 176 72 186" stroke="#EAF0D8" strokeWidth="0.8" fill="none" opacity="0.7" />
      </g>
      <g className="art-leaf art-leaf--r">
        <path d="M102 196 Q132 184 140 204 Q118 216 102 204 Z" fill="url(#leaf-g)" stroke="#7E8B62" strokeWidth="0.8" />
        <path d="M104 198 Q120 192 128 202" stroke="#EAF0D8" strokeWidth="0.8" fill="none" opacity="0.7" />
      </g>

      {/* головка розы */}
      <g className="art-rose-head">
        {/* внешний ярус */}
        {petals(9, 26, 26, 'url(#rose-o)', '#CE8B72', 0)}
        {/* средний ярус */}
        {petals(7, 16, 20, 'url(#rose-m)', '#C4775B', 25)}
        {/* внутренний ярус */}
        {petals(5, 8, 14, 'url(#rose-i)', '#B25F43', 15)}
        {/* бутон-завиток */}
        <circle cx="100" cy="100" r="7" fill="url(#rose-core)" stroke="#A85A44" strokeWidth="1" />
        <path d="M96 99 Q100 94 105 99 Q100 106 96 99" fill="#C4705A" opacity="0.85" />
      </g>
    </svg>
  );
}
