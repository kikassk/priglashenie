import React from 'react';

export default function CalendarOctober2026() {
  const daysInOct = 31;
  // Oct 1, 2026 is Thursday (0: Mon ... 3: Thu)
  const startDayOffset = 3;
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return (
    <div className="relative bg-[#F6EFE6] border border-[#E7DBCA] px-5 sm:px-7 py-7">
      {/* Тонкая внутренняя рамка */}
      <div className="absolute inset-[6px] border border-[#EFE6D8] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-5">
          {/* Вертикальная подпись месяца — Kudry */}
          <div className="writing-mode-vertical rotate-180 flex items-center gap-3 border-r border-[#E7DBCA] pr-4 py-2">
            <span className="font-kudry text-xl sm:text-2xl tracking-[0.15em] text-[#2A1B12]">
              2026
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#9A8570]">
              Октябрь
            </span>
          </div>

          {/* Сетка дней */}
          <div className="flex-1">
            <div className="grid grid-cols-7 gap-y-1 text-center mb-2">
              {daysOfWeek.map((day, i) => (
                <span key={i} className="text-[9px] sm:text-[10px] tracking-[0.12em] uppercase text-[#9A8570]">
                  {day}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-1 text-center text-[11px] sm:text-xs text-[#5C4936]">
              {Array.from({ length: startDayOffset }).map((_, i) => (
                <div key={`empty-${i}`} className="h-7" />
              ))}

              {Array.from({ length: daysInOct }).map((_, i) => {
                const dayNum = i + 1;
                const isTarget = dayNum === 17;

                return (
                  <div key={dayNum} className="h-7 flex items-center justify-center">
                    {isTarget ? (
                      <span className="cal-day w-7 h-7 sm:w-[1.9rem] sm:h-[1.9rem] rounded-full border border-[#2A1B12] flex items-center justify-center text-[#2A1B12] font-medium">
                        {dayNum}
                      </span>
                    ) : (
                      <span className="text-[#8A7460]">{dayNum}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
