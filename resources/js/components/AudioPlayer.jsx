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
        className={`flex items-center gap-2 px-4 py-3 rounded-full backdrop-blur-md shadow-xl border transition-all duration-300 ${
          isPlaying
            ? 'bg-[#4A3326] text-white border-[#4A3326] animate-pulse'
            : 'bg-white/80 text-[#4A3326] border-[#D5C3B5] hover:bg-white'
        }`}
        title={isPlaying ? "Выключить музыку" : "Включить атмосферную музыку"}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span className="text-xs uppercase tracking-widest font-medium hidden sm:inline">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </button>
    </div>
  );
}
