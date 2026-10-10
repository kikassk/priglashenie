import React from 'react';

export default function CalendarOctober2026() {
  const daysInOct = 31;
  const startDayOffset = 3; // Oct 1, 2026 is Thursday (0: Mon, 1: Tue, 2: Wed, 3: Thu, 4: Fri, 5: Sat, 6: Sun)

  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return (
    <div className="bg-[#EFECE6]/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#D5C3B5]/60 shadow-lg text-[#2C1E16] max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4 border-b border-[#D5C3B5]/40 pb-3">
        <span className="font-kudry uppercase tracking-wider text-2xl sm:text-3xl text-[#2A1B12]">ОКТЯБРЬ</span>
        <span className="font-kudry text-xl text-[#B89B86]">2026</span>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {daysOfWeek.map((day, i) => (
          <span key={i} className="text-[11px] uppercase tracking-wider font-semibold text-[#8A6650]/80 py-1">
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm font-sans">
        {/* Empty cells before month starts */}
        {Array.from({ length: startDayOffset }).map((_, i) => (
          <div key={`empty-${i}`} className="p-2" />
        ))}

        {/* Month days */}
        {Array.from({ length: daysInOct }).map((_, i) => {
          const dayNum = i + 1;
          const isTarget = dayNum === 18;

          return (
            <div key={dayNum} className="relative flex items-center justify-center p-1 sm:p-2">
              {isTarget ? (
                <div className="relative z-10 w-8 h-8 rounded-full border-2 border-[#4A3326] bg-[#B89B86]/20 flex items-center justify-center font-bold text-[#2C1E16] animate-pulse">
                  {dayNum}
                  <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#4A3326]" />
                </div>
              ) : (
                <span className={`text-[#6B4D3B] hover:text-[#2C1E16] ${dayNum === 17 || dayNum === 18 ? 'font-medium' : ''}`}>
                  {dayNum}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-[#D5C3B5]/40 text-center">
        <p className="text-xs text-[#8A6650] italic font-serif">
          Воскресенье, 18 Октября в 18:00
        </p>
      </div>
    </div>
  );
}
