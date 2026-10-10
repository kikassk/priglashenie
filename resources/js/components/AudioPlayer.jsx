import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Выключить фоновую музыку' : 'Включить атмосферную музыку'}
        className={`flex items-center justify-center w-11 h-11 rounded-full border transition-colors duration-300 ${
          isPlaying
            ? 'bg-[#2A1B12] border-[#2A1B12]'
            : 'bg-[#FAF7F2]/90 border-[#E7DBCA] hover:border-[#C4A482]'
        }`}
        title={isPlaying ? 'Выключить фоновую музыку' : 'Включить атмосферную музыку'}
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-3.5" aria-hidden="true">
            <span className="w-[2px] bg-[#C4A482] animate-bar-1 rounded-full" />
            <span className="w-[2px] bg-[#C4A482] animate-bar-2 rounded-full" />
            <span className="w-[2px] bg-[#C4A482] animate-bar-3 rounded-full" />
          </div>
        ) : (
          <Volume2 size={15} strokeWidth={1.3} className="text-[#C4A482]" />
        )}
      </button>
    </div>
  );
}
