import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate = '2026-10-17T15:00:00' }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-start justify-center">
      {[
        { label: 'дней', value: timeLeft.days },
        { label: 'часов', value: timeLeft.hours },
        { label: 'минут', value: timeLeft.minutes },
        { label: 'секунд', value: timeLeft.seconds },
      ].map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && (
            <span className="w-px h-9 bg-[#E7DBCA] mt-2.5 mx-4 sm:mx-6" />
          )}
          <div className="flex flex-col items-center min-w-[2.5rem]">
            <span key={item.value} className="animate-digit font-kudry text-[1.9rem] sm:text-[2.2rem] leading-none text-[#2A1B12]">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#9A8570] mt-2.5">
              {item.label}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
