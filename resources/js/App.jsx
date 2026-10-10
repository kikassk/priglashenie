import React, { useState } from 'react';
import PhotoSlot from './components/PhotoSlot';
import CountdownTimer from './components/CountdownTimer';
import CalendarOctober2026 from './components/CalendarOctober2026';
import RsvpModal from './components/RsvpModal';
import AudioPlayer from './components/AudioPlayer';
import { MapPin, ArrowDown, Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  // Default high quality editorial stock photos matching Katya's draft style
  const defaultPhotos = {
    hero: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    venue: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    dressCode1: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    dressCode2: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    dressCode3: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
    dressCode4: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    footer: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop',
  };

  const timelineEvents = [
    { title: "PowerPoint party", desc: "Веселые, трогательные и забавные презентации от друзей" },
    { title: "Прогулка", desc: "Атмосферные кадры и живое общение" },
    { title: "Кино", desc: "Любимые видеовоспоминания и уютный просмотр" },
    { title: "Love is...", desc: "Интерактивы, сюрпризы и душевные моменты" },
    { title: "Покушаем", desc: "Вкусная еда, авторские коктейли и торт" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A1B12] selection:bg-[#C4A482] selection:text-white relative pb-28 overflow-hidden">

      {/* Background Soft Ambient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E8D5C4]/30 via-[#F3E5D8]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[35%] -left-40 w-[450px] h-[450px] bg-[#E3CEBE]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[65%] -right-40 w-[500px] h-[500px] bg-[#C4A482]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Audio Player */}
      <AudioPlayer />

      {/* Main Container */}
      <main className="max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 relative z-10">

        {/* --- HERO SECTION --- */}
        <section className="relative mb-14 text-center">
          <div className="relative mb-8 shadow-2xl rounded-3xl overflow-hidden border border-white/80 group">
            <PhotoSlot
              defaultSrc={defaultPhotos.hero}
              alt="Катя 20 лет"
              aspectRatio="aspect-[3/4]"
              label="Заменить главное фото"
            />

            {/* Overlaid Editorial Text "birthday party" */}
            <div className="absolute top-6 right-20 sm:right-24 text-right z-10 pointer-events-none pr-2">
              <span className="font-serif-italic text-2xl sm:text-3xl text-white drop-shadow-md block leading-tight">
                birthday
              </span>
              <span className="font-serif-italic text-2xl sm:text-3xl text-white drop-shadow-md block leading-tight">
                party
              </span>
            </div>

            {/* Circle "20" Badge Top Right */}
            <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/85 backdrop-blur-md text-[#2A1B12] flex items-center justify-center shadow-xl border border-white/90 z-20">
              <span className="font-kudry text-xl sm:text-2xl font-normal leading-none">
                20
              </span>
            </div>
          </div>

          {/* Vertical Arrow Indicator */}
          <div className="flex justify-center mb-6 animate-float">
            <div className="w-8 h-8 rounded-full bg-white/80 border border-[#E5D9CD] flex items-center justify-center text-[#2A1B12] shadow-sm">
              <ArrowDown size={16} />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-5">
            <CountdownTimer targetDate="2026-10-18T18:00:00" />

            <button
              onClick={() => setIsRsvpOpen(true)}
              className="px-8 py-3.5 bg-[#2A1B12] hover:bg-[#3D291D] text-white rounded-full font-inter text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2.5 border border-[#C4A482]/30"
            >
              <Sparkles size={16} className="text-[#C4A482]" />
              <span>ПОДТВЕРДИТЬ ПРИСУТСТВИЕ</span>
            </button>
          </div>
        </section>


        {/* --- GREETING & CALENDAR SECTION --- */}
        <section className="mb-20">
          <div className="text-center mb-6">
            <h2 className="font-serif-italic text-5xl sm:text-6xl text-[#2A1B12] font-normal tracking-wide">
              Дорогая,
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Personal Invitation Text Card */}
            <div className="glass-card p-6 rounded-3xl text-left flex flex-col justify-between">
              <div>
                <p className="font-inter text-xs sm:text-sm leading-relaxed text-[#4A382C] font-normal">
                  Скоро наступит особенный для меня день — мне исполняется 20. Мне будет безумно приятно разделить этот день с тобой! Приглашаю тебя на твой день рождения.
                </p>

                <div className="mt-5">
                  <Heart size={20} className="fill-[#2A1B12] text-[#2A1B12]" />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5D9CD] text-[11px] font-inter text-[#7A6150]">
                Ориентировочное время:<br />
                <strong className="font-inter text-xs text-[#2A1B12]">18 октября 2026 в 18:00</strong>
              </div>
            </div>

            {/* October 2026 Calendar Card */}
            <CalendarOctober2026 />
          </div>
        </section>


        {/* --- VENUE SECTION --- */}
        <section className="mb-20 text-center">
          <div className="mb-6">
            <h2 className="font-kudry text-3xl sm:text-4xl uppercase tracking-wider text-[#2A1B12] font-normal">
              Место проведения
            </h2>
            <p className="font-inter text-xs sm:text-sm font-medium text-[#2A1B12] mt-2">
              Апартаменты м. Проспект Вернадского
            </p>
            <div className="flex items-center justify-center gap-1.5 my-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#75C8CD]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E54238]" />
            </div>
            <p className="font-inter text-xs text-[#7A6150]">
              Москва, пр-т Вернадского, 41с1
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-white/80">
            <PhotoSlot
              defaultSrc={defaultPhotos.venue}
              alt="Локация апартаменты"
              aspectRatio="aspect-[16/10]"
              label="Заменить фото локации"
            />

            <a
              href="https://yandex.ru/maps/?text=Москва, пр-т Вернадского, 41с1"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-white/90 hover:bg-white text-[#2A1B12] rounded-full font-inter text-xs font-semibold tracking-wider border border-[#E5D9CD] shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <MapPin size={14} className="text-[#2A1B12]" />
              <span>Открыть карту</span>
            </a>
          </div>
        </section>


        {/* --- TIMELINE SECTION ("Как проведем время") --- */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-kudry text-3xl sm:text-4xl uppercase tracking-wider text-[#2A1B12] font-normal">
              Как проведем время
            </h2>
          </div>

          {/* Central Vertical Timeline */}
          <div className="relative max-w-sm mx-auto py-2">
            {/* Center Vertical Axis */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#B5937E]/40" />

            <div className="space-y-8 relative">
              {timelineEvents.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-center">
                  {/* Central Circle Node */}
                  <div className="w-5 h-5 rounded-full bg-[#B5937E] border-2 border-[#FAF7F2] shadow-md z-10 flex items-center justify-center" />

                  {/* Alternating or Centered Label */}
                  <div className={`absolute w-44 text-xs font-inter font-medium text-[#2A1B12] ${
                    idx % 2 === 0 ? 'left-1/2 ml-6 text-left' : 'right-1/2 mr-6 text-right'
                  }`}>
                    <span className="font-semibold text-sm block">{item.title}</span>
                    <span className="text-[11px] text-[#7A6150] font-normal leading-tight block mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* --- DRESS CODE SECTION --- */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="font-serif-italic text-5xl sm:text-6xl text-[#2A1B12] font-normal">
              Дресс-код
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left 2 Outfit Photos */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              <PhotoSlot
                defaultSrc={defaultPhotos.dressCode1}
                alt="Дресскод 1"
                aspectRatio="aspect-[3/4]"
                className="rounded-2xl"
                label="Фото"
              />
              <PhotoSlot
                defaultSrc={defaultPhotos.dressCode2}
                alt="Дресскод 2"
                aspectRatio="aspect-[3/4]"
                className="rounded-2xl"
                label="Фото"
              />
            </div>

            {/* Center Text Guidelines */}
            <div className="glass-card p-5 sm:p-6 rounded-3xl space-y-3 text-center">
              <ul className="space-y-2 font-inter text-xs text-[#3D291D] leading-relaxed text-left">
                <li className="flex items-start gap-2">
                  <span className="text-[#2A1B12]">•</span>
                  <span><strong>Образ должен быть элегантным</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2A1B12]">•</span>
                  <span><strong>Тотал блек</strong> (черный цвет)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2A1B12]">•</span>
                  <span>Кружева приветствуются</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2A1B12]">•</span>
                  <span>Юбки, шорты, брюки в классическом стиле</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2A1B12]">•</span>
                  <span>Для фото можно взять черные каблуки или другую подходящую обувь при желании</span>
                </li>
              </ul>
            </div>

            {/* Right 2 Outfit Photos */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              <PhotoSlot
                defaultSrc={defaultPhotos.dressCode3}
                alt="Дресскод 3"
                aspectRatio="aspect-[3/4]"
                className="rounded-2xl"
                label="Фото"
              />
              <PhotoSlot
                defaultSrc={defaultPhotos.dressCode4}
                alt="Дресскод 4"
                aspectRatio="aspect-[3/4]"
                className="rounded-2xl"
                label="Фото"
              />
            </div>
          </div>
        </section>


        {/* --- WISHLIST SECTION ("Виш-лист") --- */}
        <section className="mb-20 text-center">
          <div className="mb-8">
            <h2 className="font-kudry text-3xl sm:text-4xl uppercase tracking-wider text-[#2A1B12] font-normal">
              Виш-лист
            </h2>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-10">
            {/* Money / Cash Card */}
            <div className="glass-card p-5 sm:p-6 rounded-3xl text-center hover:scale-105 transition-transform duration-300 w-36 sm:w-44">
              <div className="text-4xl sm:text-5xl mb-2">💸</div>
              <h3 className="font-inter text-xs sm:text-sm font-medium uppercase tracking-wider text-[#2A1B12]">
                Конверт
              </h3>
            </div>

            <span className="font-serif-italic text-2xl sm:text-3xl text-[#8C705C]">
              or
            </span>

            {/* Flowers Bouquet Card */}
            <div className="glass-card p-5 sm:p-6 rounded-3xl text-center hover:scale-105 transition-transform duration-300 w-36 sm:w-44">
              <div className="text-4xl sm:text-5xl mb-2">💐</div>
              <h3 className="font-inter text-xs sm:text-sm font-medium uppercase tracking-wider text-[#2A1B12]">
                Цветы
              </h3>
            </div>
          </div>
        </section>


        {/* --- FOOTER / MOCHA BANNER --- */}
        <section className="text-center">
          <div className="mocha-banner p-8 sm:p-12 rounded-3xl text-white relative overflow-hidden text-center shadow-2xl">
            <h2 className="font-serif-italic text-5xl sm:text-7xl font-normal leading-tight mb-6 text-white drop-shadow">
              Happy<br />birthday
            </h2>

            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-white/80 shadow-2xl mb-6">
              <PhotoSlot
                defaultSrc={defaultPhotos.footer}
                alt="Катя"
                aspectRatio="aspect-square"
                label="Фото"
              />
            </div>

            <button
              onClick={() => setIsRsvpOpen(true)}
              className="px-8 py-3 bg-white hover:bg-[#FAF7F2] text-[#2A1B12] rounded-full font-inter text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-xl hover:scale-105"
            >
              Я ПРИДУ НА ПРАЗДНИК! ✨
            </button>
          </div>
        </section>

      </main>

      {/* RSVP Modal */}
      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />

    </div>
  );
}
