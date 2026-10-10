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
    <div className="flex items-center justify-center gap-3 sm:gap-6 my-6">
      {[
        { label: 'Дней', value: timeLeft.days },
        { label: 'Часов', value: timeLeft.hours },
        { label: 'Минут', value: timeLeft.minutes },
        { label: 'Секунд', value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-13 h-13 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-white/70 backdrop-blur-md border border-[#E5D9CD] shadow-sm text-lg sm:text-2xl font-kudry font-normal text-[#2A1B12]">
            {String(item.value).padStart(2, '0')}
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8C705C] mt-2 font-inter font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
