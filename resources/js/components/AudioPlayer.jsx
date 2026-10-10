import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleAudio}
        className={`flex items-center gap-2.5 px-4 py-3 rounded-full backdrop-blur-md shadow-xl border transition-all duration-300 ${
          isPlaying
            ? 'bg-[#2A1B12] text-white border-[#C4A482]'
            : 'bg-white/85 text-[#2A1B12] border-[#E5D9CD] hover:bg-white'
        }`}
        title={isPlaying ? "Выключить фоновую музыку" : "Включить атмосферную музыку"}
      >
        {isPlaying ? (
          <div className="flex items-end gap-1 h-3.5">
            <span className="w-1 bg-[#C4A482] animate-bar-1 rounded-full" />
            <span className="w-1 bg-[#C4A482] animate-bar-2 rounded-full" />
            <span className="w-1 bg-[#C4A482] animate-bar-3 rounded-full" />
          </div>
        ) : (
          <Music size={16} className="text-[#C4A482]" />
        )}
        <span className="text-[11px] font-inter uppercase tracking-widest font-semibold hidden sm:inline">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </button>
    </div>
  );
}
