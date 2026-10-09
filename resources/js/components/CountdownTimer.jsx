import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate = "2026-10-18T18:00:00" }) {
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
    <div className="flex items-center justify-center gap-4 sm:gap-8 my-6">
      {[
        { label: 'Дней', value: timeLeft.days },
        { label: 'Часов', value: timeLeft.hours },
        { label: 'Минут', value: timeLeft.minutes },
        { label: 'Секунд', value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-18 sm:h-18 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-[#D5C3B5]/50 shadow-sm text-lg sm:text-2xl font-serif text-[#4A3326]">
            {String(item.value).padStart(2, '0')}
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8A6650] mt-2 font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
