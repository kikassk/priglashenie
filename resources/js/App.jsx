import React, { useState } from 'react';
import PhotoSlot from './components/PhotoSlot';
import CountdownTimer from './components/CountdownTimer';
import CalendarOctober2026 from './components/CalendarOctober2026';
import RsvpModal from './components/RsvpModal';
import AudioPlayer from './components/AudioPlayer';
import { MapPin, ArrowDown, Sparkles, Heart, Gift, Calendar, Check, Music } from 'lucide-react';

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  // Default high quality editorial stock photos matching draft style
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
    { num: "01", title: "PowerPoint party", desc: "Веселые, трогательные и забавные презентации от друзей" },
    { num: "02", title: "Прогулка & Фотосессия", desc: "Атмосферные кадры и живое общение" },
    { num: "03", title: "Кинопросмотр", desc: "Любимые видеовоспоминания и уютная атмосфера" },
    { num: "04", title: "Love is...", desc: "Интерактивы, сюрпризы и душевные моменты" },
    { num: "05", title: "Праздничный ужин", desc: "Вкусная еда, авторские коктейли и торт" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A1B12] selection:bg-[#B89B86] selection:text-white relative pb-28 overflow-hidden">

      {/* Background Soft Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E8D5C4]/30 via-[#F3E5D8]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] -left-40 w-[450px] h-[450px] bg-[#E3CEBE]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] -right-40 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Audio Player */}
      <AudioPlayer />

      {/* Main Container */}
      <main className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 relative z-10">

        {/* --- HEADER TITLE / KUDRY FONT --- */}
        <header className="text-center mb-10 space-y-2">
          <span className="font-kudry text-sm sm:text-base uppercase tracking-[0.3em] text-[#A68872] font-semibold block">
            INVITATION • 18.10.2026
          </span>
          <h1 className="font-kudry text-4xl sm:text-6xl uppercase tracking-wider text-[#2A1B12] font-normal leading-none">
            KATYA 20 YEARS
          </h1>
          <p className="font-inter text-xs sm:text-sm text-[#7A6150] font-light max-w-xs mx-auto pt-1">
            официальное приглашение на главный праздник года
          </p>
        </header>

        {/* --- HERO SECTION --- */}
        <section className="relative mb-20 text-center">
          <div className="relative mb-8 group">
            <PhotoSlot
              defaultSrc={defaultPhotos.hero}
              alt="Катя 20 лет"
              aspectRatio="aspect-[4/5]"
              className="shadow-2xl rounded-3xl border border-white/80"
              label="Заменить главное фото"
            />

            {/* Kudry Badge Top Right */}
            <div className="absolute top-5 right-5 glass-card px-5 py-2 rounded-full border border-white/80 shadow-lg">
              <span className="font-kudry text-lg sm:text-xl uppercase tracking-widest text-[#2A1B12]">
                BIRTHDAY PARTY
              </span>
            </div>

            {/* Giant 20 Badge Bottom Right */}
            <div className="absolute -bottom-4 right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#2A1B12] text-white flex items-center justify-center shadow-2xl border border-[#D4AF37]/40">
              <span className="font-kudry text-3xl sm:text-4xl font-bold leading-none text-[#F4E2D8]">
                20
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="w-full">
              <CountdownTimer targetDate="2026-10-18T18:00:00" />
            </div>

            <button
              onClick={() => setIsRsvpOpen(true)}
              className="px-9 py-4 bg-[#2A1B12] hover:bg-[#432C1E] text-white rounded-full font-inter text-sm sm:text-base tracking-widest uppercase transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3 border border-[#D4AF37]/30"
            >
              <Sparkles size={18} className="text-[#D4AF37]" />
              <span>ПОДТВЕРДИТЬ ПРИСУТСТВИЕ</span>
            </button>
          </div>
        </section>


        {/* --- GREETING & CALENDAR SECTION --- */}
        <section className="mb-24 text-center">
          <div className="mb-8">
            <span className="font-handwriting text-3xl sm:text-4xl text-[#B89B86] block -mb-2">
              приглашаю тебя
            </span>
            <h2 className="font-kudry text-4xl sm:text-5xl uppercase tracking-wider text-[#2A1B12]">
              ДОРОГОЙ ГОСТЬ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
            {/* Personal Text Card - Inter font for body text */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl text-left flex flex-col justify-between">
              <div>
                <p className="font-inter text-sm sm:text-base leading-relaxed text-[#594233] font-normal">
                  Скоро наступит особенный для меня день — мне исполняется 20 лет. Мне будет невероятно приятно разделить этот вечер с тобой! Приглашаю тебя отпраздновать это событие вместе.
                </p>

                <div className="mt-6 flex items-center gap-2 text-[#2A1B12]">
                  <Heart size={18} className="fill-[#2A1B12] text-[#2A1B12]" />
                  <span className="font-inter text-xs uppercase tracking-widest font-semibold">ЖДУ ТЕБЯ C НЕТЕРПЕНИЕМ!</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5D9CD] text-xs font-inter text-[#7A6150]">
                Дата и время:<br />
                <strong className="font-inter text-sm text-[#2A1B12]">18 октября 2026 в 18:00</strong>
              </div>
            </div>

            {/* October 2026 Calendar */}
            <CalendarOctober2026 />
          </div>
        </section>


        {/* --- VENUE SECTION --- */}
        <section className="mb-24 text-center">
          <div className="mb-6">
            <span className="font-kudry text-xs uppercase tracking-[0.3em] text-[#A68872] block mb-1">
              LOCATION
            </span>
            <h2 className="font-kudry text-4xl sm:text-5xl uppercase tracking-wider text-[#2A1B12]">
              МЕСТО ПРОВЕДЕНИЯ
            </h2>
          </div>

          <div className="glass-card p-4 sm:p-6 rounded-3xl mb-6 text-center">
            <p className="font-inter text-base sm:text-lg font-medium text-[#2A1B12]">
              Апартаменты м. Проспект Вернадского
            </p>
            <p className="font-inter text-xs sm:text-sm text-[#7A6150] mt-1">
              Москва, пр-т Вернадского, 41с1
            </p>
          </div>

          <div className="relative">
            <PhotoSlot
              defaultSrc={defaultPhotos.venue}
              alt="Локация апартаменты"
              aspectRatio="aspect-[16/10]"
              className="shadow-2xl rounded-3xl"
              label="Заменить фото локации"
            />

            <a
              href="https://yandex.ru/maps/?text=Москва, пр-т Вернадского, 41с1"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-1/2 -translate-x-1/2 px-7 py-3 bg-[#2A1B12] hover:bg-[#432C1E] text-white rounded-full font-inter text-xs uppercase tracking-widest font-semibold border border-[#D4AF37]/40 shadow-2xl transition-all hover:scale-105 flex items-center gap-2.5"
            >
              <MapPin size={15} className="text-[#D4AF37]" />
              <span>ОТКРЫТЬ В ЯНДЕКС.КАРТАХ</span>
            </a>
          </div>
        </section>


        {/* --- TIMELINE SECTION --- */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="font-kudry text-xs uppercase tracking-[0.3em] text-[#A68872] block mb-1">
              PROGRAMME
            </span>
            <h2 className="font-kudry text-4xl sm:text-5xl uppercase tracking-wider text-[#2A1B12]">
              ПРОГРАММА ВЕЧЕРА
            </h2>
          </div>

          <div className="space-y-4">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="glass-card p-5 sm:p-6 rounded-2xl flex items-start gap-4 sm:gap-6 hover:border-[#B89B86] transition-all group">
                <span className="font-kudry text-3xl sm:text-4xl font-bold text-[#B89B86] group-hover:text-[#2A1B12] transition-colors leading-none pt-1">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-kudry text-xl sm:text-2xl uppercase tracking-wide text-[#2A1B12]">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-[#6E5545] mt-1 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* --- DRESS CODE SECTION --- */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <span className="font-kudry text-xs uppercase tracking-[0.3em] text-[#A68872] block mb-1">
              STYLE GUIDE
            </span>
            <h2 className="font-kudry text-4xl sm:text-5xl uppercase tracking-wider text-[#2A1B12]">
              ДРЕСС-КОД
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
            {/* Left Photos */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <PhotoSlot
                defaultSrc={defaultPhotos.dressCode1}
                alt="Дресскод 1"
                aspectRatio="aspect-[3/4]"
                label="Заменить фото"
              />
              <PhotoSlot
                defaultSrc={defaultPhotos.dressCode2}
                alt="Дресскод 2"
                aspectRatio="aspect-[3/4]"
                label="Заменить фото"
              />
            </div>

            {/* Rules Text Center (Inter Font for small text) */}
            <div className="glass-card p-6 rounded-3xl space-y-4">
              <h3 className="font-kudry text-xl uppercase tracking-wider text-[#2A1B12] border-b border-[#E5D9CD] pb-3 text-center">
                РЕКОМЕНДАЦИИ ПО ОБРАЗУ
              </h3>

              <ul className="space-y-3 font-inter text-xs sm:text-sm text-[#594233] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] text-base leading-none">✦</span>
                  <span><strong>Стиль:</strong> Элегантный вечерний образ</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] text-base leading-none">✦</span>
                  <span><strong>Палитра:</strong> Total Black (черный цвет)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] text-base leading-none">✦</span>
                  <span>Детали: Кружева и классические силуэты</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] text-base leading-none">✦</span>
                  <span>Юбки, шорты, брюки в классическом стиле</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] text-base leading-none">✦</span>
                  <span>Для фотосессии при желании можно взять черные каблуки</span>
                </li>
              </ul>
            </div>

            {/* Right Photos */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <PhotoSlot
                defaultSrc={defaultPhotos.dressCode3}
                alt="Дресскод 3"
                aspectRatio="aspect-[3/4]"
                label="Заменить фото"
              />
              <PhotoSlot
                defaultSrc={defaultPhotos.dressCode4}
                alt="Дресскод 4"
                aspectRatio="aspect-[3/4]"
                label="Заменить фото"
              />
            </div>
          </div>
        </section>


        {/* --- WISHLIST SECTION --- */}
        <section className="mb-24 text-center">
          <div className="mb-10">
            <span className="font-kudry text-xs uppercase tracking-[0.3em] text-[#A68872] block mb-1">
              GIFTS & WISHES
            </span>
            <h2 className="font-kudry text-4xl sm:text-5xl uppercase tracking-wider text-[#2A1B12]">
              ВИШ-ЛИСТ
            </h2>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-10">
            <div className="glass-card p-6 sm:p-8 rounded-3xl text-center transform hover:-translate-y-2 transition duration-300 w-40 sm:w-52 group border hover:border-[#D4AF37]">
              <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">✉️</div>
              <h3 className="font-kudry text-xl uppercase tracking-wide text-[#2A1B12]">КОНВЕРТ</h3>
              <p className="font-inter text-xs text-[#7A6150] mt-1">Лучший подарок на мечту</p>
            </div>

            <span className="font-kudry italic text-2xl sm:text-3xl text-[#B89B86]">OR</span>

            <div className="glass-card p-6 sm:p-8 rounded-3xl text-center transform hover:-translate-y-2 transition duration-300 w-40 sm:w-52 group border hover:border-[#D4AF37]">
              <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">🌹</div>
              <h3 className="font-kudry text-xl uppercase tracking-wide text-[#2A1B12]">ЦВЕТЫ</h3>
              <p className="font-inter text-xs text-[#7A6150] mt-1">Красивый букет</p>
            </div>
          </div>
        </section>


        {/* --- FOOTER / LUXURY BANNER --- */}
        <section className="text-center">
          <div className="glass-card-dark p-8 sm:p-14 rounded-3xl text-white relative overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
            {/* Ambient Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

            <span className="font-kudry text-xs uppercase tracking-[0.4em] text-[#D4AF37] block mb-2">
              CELEBRATE WITH ME
            </span>

            <h2 className="font-kudry text-4xl sm:text-6xl uppercase tracking-wider font-normal leading-tight mb-8 text-[#FAF7F2]">
              HAPPY 20TH BIRTHDAY
            </h2>

            <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden border-2 border-[#D4AF37]/60 shadow-2xl mb-8">
              <PhotoSlot
                defaultSrc={defaultPhotos.footer}
                alt="Катя"
                aspectRatio="aspect-square"
                label="Фото"
              />
            </div>

            <button
              onClick={() => setIsRsvpOpen(true)}
              className="px-9 py-4 bg-[#FAF7F2] hover:bg-white text-[#2A1B12] rounded-full font-inter text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-xl hover:scale-105"
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
