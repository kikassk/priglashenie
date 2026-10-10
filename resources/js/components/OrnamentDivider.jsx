import React from 'react';
import Reveal from './Reveal';

/* Тонкий орнамент-разделитель: линии «прорисовываются» от центра к краям */
export default function OrnamentDivider({ className = '', delay = 0 }) {
  return (
    <Reveal className={`ornament-divider ${className}`} delay={delay} variant="zoom">
      <svg viewBox="0 0 180 12" className="ornament-divider__svg" aria-hidden="true">
        <line className="ornament-divider__line ornament-divider__line--l" x1="86" y1="6" x2="4" y2="6" />
        <line className="ornament-divider__line ornament-divider__line--r" x1="94" y1="6" x2="176" y2="6" />
        <g className="ornament-divider__diamond">
          <rect x="84.5" y="1.5" width="9" height="9" transform="rotate(45 89 6)" />
        </g>
        <circle className="ornament-divider__dot" cx="70" cy="6" r="1.4" />
        <circle className="ornament-divider__dot ornament-divider__dot--late" cx="108" cy="6" r="1.4" />
      </svg>
    </Reveal>
  );
}
