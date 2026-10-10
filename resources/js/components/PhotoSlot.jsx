import React, { useState, useRef } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

export default function PhotoSlot({
  defaultSrc,
  alt = "Фотография",
  className = "",
  aspectRatio = "aspect-[3/4]",
  label = "Заменить фото"
}) {
  const [imageSrc, setImageSrc] = useState(defaultSrc);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
    }
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setImageSrc(defaultSrc);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div
      className={`relative group overflow-hidden bg-[#FAF7F2] transition-all duration-500 hover:shadow-2xl ${aspectRatio} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay controls on hover */}
      <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-white ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-4 py-2 bg-white/25 hover:bg-white/40 backdrop-blur-md rounded-full border border-white/50 text-[11px] font-inter tracking-wider uppercase transition-transform active:scale-95 shadow-lg"
        >
          <Camera size={14} />
          <span>{label}</span>
        </button>

        {imageSrc !== defaultSrc && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-[10px] font-inter text-white/90 hover:text-white underline underline-offset-4"
          >
            <RefreshCw size={12} />
            <span>Сбросить</span>
          </button>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
