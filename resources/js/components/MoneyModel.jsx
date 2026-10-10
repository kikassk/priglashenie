import React from 'react';
import useTilt from './useTilt';
import EnvelopeArt from './EnvelopeArt';

/* Конверт с деньгами — элегантная SVG-иллюстрация */
export default function MoneyModel() {
  const tilt = useTilt(10);

  return (
    <div
      className="scene3d scene3d--money"
      aria-hidden="true"
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onTouchMove={tilt.onTouchMove}
      onTouchEnd={tilt.onTouchEnd}
    >
      <div className="art-wrap art-wrap--turn">
        <EnvelopeArt />
      </div>

      <span className="model-sparkle model-sparkle--a" />
      <span className="model-sparkle model-sparkle--b" />
      <span className="model-sparkle model-sparkle--c" />
      <span className="model-sparkle model-sparkle--d" />
      <span className="model-sparkle model-sparkle--e" />
    </div>
  );
}
