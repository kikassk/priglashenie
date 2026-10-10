import React, { useEffect, useRef, useState } from 'react';

const VARIANTS = {
  up: '',
  zoom: 'reveal--zoom',
  left: 'reveal--left',
  right: 'reveal--right',
  blur: 'reveal--blur',
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass = VARIANTS[variant] || '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${shown ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
