import React from 'react';

export default function CalendarOctober2026() {
  const daysInOct = 31;
  // Oct 1, 2026 is Thursday (0: Mon, 1: Tue, 2: Wed, 3: Thu, 4: Fri, 5: Sat, 6: Sun)
  const startDayOffset = 3;
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return (
    <div className="bg-[#BFA28E] text-[#2A1B12] rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden border border-[#A88B77]/40 flex flex-col justify-between">
      {/* Decorative inner border */}
      <div className="absolute inset-2 border border-white/20 rounded-2xl pointer-events-none" />

      <div className="flex items-center gap-4 relative z-10">
        {/* Left Vertical Month Label matching reference draft */}
        <div className="writing-mode-vertical rotate-180 flex flex-col items-center justify-center border-r border-[#2A1B12]/20 pr-3 my-1">
          <span className="font-kudry text-2xl sm:text-3xl font-normal tracking-widest text-[#2A1B12]">
            2026
          </span>
          <span className="font-kudry text-sm sm:text-base uppercase tracking-widest text-[#4A382C]">
            ОКТЯБРЬ
          </span>
        </div>

        {/* Right Days Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {daysOfWeek.map((day, i) => (
              <span key={i} className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#3D291D]/80">
                {day}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs sm:text-sm font-inter">
            {/* Empty offset cells */}
            {Array.from({ length: startDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} className="p-1 sm:p-1.5" />
            ))}

            {/* Month days */}
            {Array.from({ length: daysInOct }).map((_, i) => {
              const dayNum = i + 1;
              const isTarget = dayNum === 18;

              return (
                <div key={dayNum} className="relative flex items-center justify-center p-0.5 sm:p-1">
                  {isTarget ? (
                    <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#2A1B12] bg-[#FAF7F2] text-[#2A1B12] font-bold flex items-center justify-center shadow-md">
                      {dayNum}
                    </div>
                  ) : (
                    <span className="text-[#3D291D] font-medium hover:text-[#2A1B12]">
                      {dayNum}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer info note */}
      <div className="mt-4 pt-3 border-t border-[#2A1B12]/15 text-center relative z-10">
        <p className="text-xs font-inter text-[#3D291D]">
          Время уточняется позже. Приблизит. <strong className="font-semibold text-[#2A1B12]">14:00/15:00/18:00</strong>
        </p>
      </div>
    </div>
  );
}
