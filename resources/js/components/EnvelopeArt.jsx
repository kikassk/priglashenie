import React from 'react';

/* Элегантный SVG-конверт с купюрами, печатью и монетами — всё в границах */
export default function EnvelopeArt() {
  return (
    <svg className="art-float art-float--money" viewBox="0 0 200 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="env-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FBF3E4" />
          <stop offset="0.55" stopColor="#F2E4C8" />
          <stop offset="1" stopColor="#E8D6B2" />
        </linearGradient>
        <linearGradient id="env-flap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7EDD6" />
          <stop offset="1" stopColor="#EBD9B4" />
        </linearGradient>
        <linearGradient id="note-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6EDD6" />
          <stop offset="1" stopColor="#EAD9B4" />
        </linearGradient>
        <linearGradient id="note-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F2E6CC" />
          <stop offset="1" stopColor="#E2CFA6" />
        </linearGradient>
        <radialGradient id="seal-g" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#FDF8EF" />
          <stop offset="1" stopColor="#EBD9B4" />
        </radialGradient>
        <radialGradient id="coin-g" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#F2DFAE" />
          <stop offset="0.6" stopColor="#DCBB78" />
          <stop offset="1" stopColor="#C9A860" />
        </radialGradient>
        <linearGradient id="env-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* мягкая тень */}
      <ellipse cx="100" cy="158" rx="58" ry="7" fill="#2A1B12" opacity="0.08" />

      <g>
        {/* купюры — выглядывают из верха, в границах */}
        <g transform="rotate(-7 100 60)">
          <rect x="38" y="24" width="118" height="58" rx="3" fill="url(#note-a)" stroke="#C4A482" strokeWidth="1" />
          <line x1="50" y1="53" x2="144" y2="53" stroke="#B89254" strokeWidth="1" opacity="0.5" />
        </g>
        <g transform="rotate(5 100 60)">
          <rect x="44" y="28" width="112" height="56" rx="3" fill="url(#note-b)" stroke="#C4A482" strokeWidth="1" />
          <line x1="56" y1="56" x2="144" y2="56" stroke="#B89254" strokeWidth="1" opacity="0.45" />
        </g>

        {/* тело конверта */}
        <rect x="30" y="52" width="140" height="92" rx="4" fill="url(#env-body)" stroke="#C4A482" strokeWidth="1.2" />
        {/* внутренние сгибы боковых клапанов */}
        <path d="M30 52 L100 100 L170 52" stroke="#C4A482" strokeWidth="1" fill="none" opacity="0.55" />
        <rect x="30" y="52" width="140" height="92" rx="4" fill="url(#env-sheen)" />

        {/* верхний клапан */}
        <path d="M30 52 L100 96 L170 52 Z" fill="url(#env-flap)" stroke="#C4A482" strokeWidth="1.2" strokeLinejoin="round" />

        {/* печать «20» */}
        <g className="art-seal">
          <circle cx="100" cy="90" r="14" fill="url(#seal-g)" stroke="#C4A482" strokeWidth="1.2" />
          <text x="100" y="95" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fill="#A9885F">20</text>
        </g>

        {/* монеты — аккуратная стопка у нижнего правого угла, строго в сцене */}
        <g className="art-coins">
          <ellipse cx="148" cy="144" rx="12" ry="5" fill="url(#coin-g)" stroke="#B08C4C" strokeWidth="1" />
          <ellipse cx="148" cy="138" rx="12" ry="5" fill="url(#coin-g)" stroke="#B08C4C" strokeWidth="1" />
          <ellipse cx="148" cy="132" rx="12" ry="5" fill="url(#coin-g)" stroke="#B08C4C" strokeWidth="1" />
        </g>
      </g>
    </svg>
  );
}
