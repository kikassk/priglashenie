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
    calendarDetail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    venue: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    dressCode1: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    dressCode2: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    dressCode3: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
    dressCode4: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    dressCode5: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop',
    footer: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop',
  };

  const timelineEvents = [
    { title: "PowerPoint party", desc: "Веселые и трогательные презентации от друзей" },
    { title: "Прогулка", desc: "Уютная фотосессия и общение" },
    { title: "Кино", desc: "Просмотр памтнах моментов и атмосферных видео" },
    { title: "Love is...", desc: "Сюрпризы, интерактивы и милые воспоминания" },
    { title: "Покушаем", desc: "Праздничный ужин, торт и коктейли" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C1E16] selection:bg-[#B89B86] selection:text-white font-sans relative pb-20">

      {/* Floating Audio Player */}
      <AudioPlayer />

      {/* Main Container */}
      <main className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">

        {/* --- HERO SECTION --- */}
        <section className="relative mb-16 text-center">
          <div className="relative mb-6">
            <PhotoSlot
              defaultSrc={defaultPhotos.hero}
              alt="Катя 20 лет"
              aspectRatio="aspect-[4/5]"
              className="shadow-2xl rounded-3xl"
              label="Заменить главное фото"
            />
            {/* Overlay Editorial Badge */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/60 shadow-md">
              <span className="font-serif italic text-lg sm:text-xl text-[#4A3326] font-semibold">birthday party</span>
            </div>

            <div className="absolute bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 backdrop-blur-md border border-[#D5C3B5] flex items-center justify-center shadow-lg">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#2C1E16]">20</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <ArrowDown className="text-[#8A6650] animate-bounce my-2" size={24} />

            <CountdownTimer targetDate="2026-10-18T18:00:00" />

            <button
              onClick={() => setIsRsvpOpen(true)}
              className="mt-4 px-8 py-3.5 bg-[#4A3326] hover:bg-[#2C1E16] text-white rounded-full font-serif text-lg tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 flex items-center gap-2"
            >
              <Sparkles size={18} className="text-[#D4AF37]" />
              <span>Подтвердить присутствие</span>
            </button>
          </div>
        </section>


        {/* --- GREETING & CALENDAR SECTION --- */}
        <section className="mb-20 text-center">
          <h1 className="font-serif italic text-5xl sm:text-7xl text-[#4A3326] font-normal mb-6 tracking-wide">
            Дорогая,
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-[#D5C3B5]/50 shadow-sm text-left flex flex-col justify-between h-full">
              <div>
                <p className="text-sm sm:text-base leading-relaxed text-[#6B4D3B] font-light">
                  Скоро наступит значимый для меня день — мне исполняется 20. Мне будет очень приятно разделить этот день с тобой! Приглашаю тебя на свой день рождения.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#4A3326]">
                  <Heart size={18} className="fill-[#4A3326] text-[#4A3326]" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Жду тебя!</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D5C3B5]/40 text-xs text-[#8A6650]">
                Время уточняется позже.<br />
                <strong className="text-[#4A3326]">Приблизительно: 18 октября в 18:00</strong>
              </div>
            </div>

            <CalendarOctober2026 />
          </div>
        </section>


        {/* --- VENUE SECTION --- */}
        <section className="mb-20 text-center">
          <span className="font-handwriting text-3xl sm:text-4xl text-[#B89B86]">Локация</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3326] font-medium mb-2">
            Место проведения
          </h2>
          <p className="text-sm text-[#6B4D3B] mb-6 font-medium">
            Апартаменты м.Проспект Вернадского<br />
            <span className="text-xs text-[#8A6650]">Москва, пр-т Вернадского, 41с1</span>
          </p>

          <div className="relative mb-6">
            <PhotoSlot
              defaultSrc={defaultPhotos.venue}
              alt="Локация апартаменты"
              aspectRatio="aspect-[16/10]"
              className="shadow-xl rounded-2xl"
              label="Заменить фото локации"
            />

            <a
              href="https://yandex.ru/maps/?text=Москва, пр-т Вернадского, 41с1"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-white/90 hover:bg-white text-[#2C1E16] backdrop-blur-md rounded-full text-xs uppercase tracking-widest font-semibold border border-[#D5C3B5] shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <MapPin size={14} className="text-[#4A3326]" />
              <span>Открыть карту</span>
            </a>
          </div>
        </section>


        {/* --- TIMELINE SECTION --- */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="font-handwriting text-3xl sm:text-4xl text-[#B89B86]">Программа</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3326] font-medium">
              Как проведем время
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-10 border-l-2 border-[#D5C3B5]/60 space-y-8 my-8 ml-4 sm:ml-8">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#B89B86] border-4 border-[#FAF8F5] group-hover:scale-125 transition-transform shadow-md" />

                <div className="bg-white/50 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-[#D5C3B5]/40 hover:border-[#B89B86] transition-all shadow-sm">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3326] font-semibold">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#6B4D3B] mt-1 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* --- DRESS CODE SECTION --- */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <span className="font-handwriting text-3xl sm:text-4xl text-[#B89B86]">Стиль и гармония</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3326] font-medium">
              Дресс-код
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
            {/* Left Column Photos */}
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

            {/* Rules Text Center */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-[#D5C3B5]/60 shadow-md text-left space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#4A3326] border-b border-[#D5C3B5]/40 pb-2">
                Рекомендации по образу:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#6B4D3B] font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#B89B86]">✦</span> Образ должен быть элегантным
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B89B86]">✦</span> Тотал блэк (Total Black)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B89B86]">✦</span> Кружева приветствуются
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B89B86]">✦</span> Юбки, шорты, штаны в классическом стиле
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B89B86]">✦</span> Для фото можно взять черные каблуки или другую подходящую обувь при желании
                </li>
              </ul>
            </div>

            {/* Right Column Photos */}
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
        <section className="mb-20 text-center">
          <span className="font-handwriting text-3xl sm:text-4xl text-[#B89B86]">Пожелания</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3326] font-medium mb-8">
            Виш-лист
          </h2>

          <div className="flex items-center justify-center gap-6 sm:gap-12">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#D5C3B5]/60 shadow-lg text-center transform hover:-translate-y-1 transition duration-300 w-36 sm:w-48">
              <div className="text-4xl sm:text-5xl mb-2">💵</div>
              <span className="font-serif text-lg sm:text-xl text-[#4A3326] font-semibold">Конверт</span>
              <p className="text-[11px] text-[#8A6650] mt-1">Лучший подарок на мечту</p>
            </div>

            <span className="font-serif italic text-2xl sm:text-3xl text-[#B89B86]">or</span>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#D5C3B5]/60 shadow-lg text-center transform hover:-translate-y-1 transition duration-300 w-36 sm:w-48">
              <div className="text-4xl sm:text-5xl mb-2">🌹</div>
              <span className="font-serif text-lg sm:text-xl text-[#4A3326] font-semibold">Цветы</span>
              <p className="text-[11px] text-[#8A6650] mt-1">Прекрасный букет</p>
            </div>
          </div>
        </section>


        {/* --- FOOTER / HAPPY BIRTHDAY BANNER --- */}
        <section className="text-center">
          <div className="bg-[#B89B86]/30 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-[#D5C3B5] shadow-xl relative overflow-hidden">
            <h2 className="font-serif italic text-4xl sm:text-6xl text-[#4A3326] font-normal leading-tight mb-6">
              Happy<br />birthday
            </h2>

            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-2 border-white shadow-xl mb-6">
              <PhotoSlot
                defaultSrc={defaultPhotos.footer}
                alt="Катя ангел"
                aspectRatio="aspect-square"
                label="Фото"
              />
            </div>

            <button
              onClick={() => setIsRsvpOpen(true)}
              className="px-8 py-3 bg-[#4A3326] hover:bg-[#2C1E16] text-white rounded-full font-serif text-base tracking-wider transition-all duration-300 shadow-lg"
            >
              Я приду на праздник! ✨
            </button>
          </div>
        </section>

      </main>

      {/* RSVP Modal */}
      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />

    </div>
  );
}
