import React, { useState } from 'react';

const STORAGE_PREFIX = 'invitation-photo:';

export default function PhotoSlot({
  defaultSrc,
  alt = 'Фотография',
  className = '',
  aspectRatio = 'aspect-[3/4]',
  storageKey = null,
}) {
  const [imageSrc] = useState(() => {
    if (storageKey) {
      try {
        return localStorage.getItem(STORAGE_PREFIX + storageKey) || defaultSrc;
      } catch {
        return defaultSrc;
      }
    }
    return defaultSrc;
  });

  return (
    <div
      className={`relative overflow-hidden bg-[#F3EADC] ${aspectRatio} ${className}`}
    >
      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
      />
    </div>
  );
}
