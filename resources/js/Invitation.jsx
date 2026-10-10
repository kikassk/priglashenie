import React, { useEffect, useState } from 'react';
import PhotoSlot from './components/PhotoSlot';
import CountdownTimer from './components/CountdownTimer';
import CalendarOctober2026 from './components/CalendarOctober2026';
import AudioPlayer from './components/AudioPlayer';
import Reveal from './components/Reveal';
import MoneyModel from './components/MoneyModel';
import FlowerModel from './components/FlowerModel';
import ConfettiFinal from './components/ConfettiFinal';
import AmbientBackground from './components/AmbientBackground';
import OrnamentDivider from './components/OrnamentDivider';
import IntroEnvelope from './components/IntroEnvelope';
import { MapPin, ArrowDown, Heart, Presentation, Footprints, Sparkles, UtensilsCrossed } from 'lucide-react';

export default function Invitation() {
  const defaultPhotos = {
    hero: '/images/hero.jpg',
    venue: '/images/venue.png',
    dressCode1: '/images/dress1.jpg',
    dressCode2: '/images/dress2.jpg',
    dressCode3: '/images/dress3.jpg',
    dressCode4: '/images/dress4.jpg',
    footer: '/images/footer.jpg',
  };

  const timelineEvents = [
    { title: 'PowerPoint party', desc: 'Веселые, трогательные и забавные презентации от друзей', Icon: Presentation },
    { title: 'Прогулка', desc: 'Атмосферные кадры и живое общение', Icon: Footprints },
    { title: 'Love is...', desc: 'Интерактивы и душевные моменты', Icon: Sparkles },
    { title: 'Покушаем', desc: 'Вкусная еда, алкоголь и торт', Icon: UtensilsCrossed },
  ];

  const dressRules = [
    { strong: 'Образ должен быть элегантным' },
    { strong: 'Тотал блек', rest: ' (черный цвет)' },
    { rest: 'Кружева приветствуются' },
    { rest: 'Юбки, шорты, брюки в классическом стиле' },
    { rest: 'Для фото можно взять черные каблуки или другую подходящую обувь при желании' },
  ];

  const [progress, setProgress] = useState(0);
  const [introDone, setIntroDone] = useState(false);

  // блокируем скролл, пока открыто инро
  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [introDone]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`isolate min-h-screen bg-[#FAF7F2] text-[#2A1B12] selection:bg-[#C4A482] selection:text-white overflow-x-hidden pb-24${introDone ? ' site-ready' : ''}`}>

      {!introDone && <IntroEnvelope onDone={() => setIntroDone(true)} />}

      <AmbientBackground />
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <AudioPlayer />

      <main className="mx-auto w-full max-w-[27rem] sm:max-w-lg md:max-w-xl px-5 sm:px-8 pt-5 sm:pt-8">

        {/* ——— ОБЛОЖКА ——— */}
        <section className="relative mb-16 -mx-5 sm:mx-0">
          <div className="relative overflow-hidden animate-fade-scale photo-auto-sheen">
            <div className="animate-kenburns">
              <PhotoSlot
                defaultSrc={defaultPhotos.hero}
                alt="Катя 20 лет"
                aspectRatio="aspect-[4/5]"
                className="sm:aspect-[5/4]"
                storageKey="hero"
              />
            </div>

            <div className="absolute inset-3 sm:inset-4 border border-white/50 pointer-events-none" />
            <span className="corner-orn corner-orn--tl" aria-hidden="true" />
            <span className="corner-orn corner-orn--br" aria-hidden="true" />

            <div className="absolute top-7 right-7 sm:right-10 text-right z-10 pointer-events-none animate-rise" style={{ animationDelay: '0.5s' }}>
              <span className="font-kudry text-[2rem] sm:text-[2.5rem] leading-[0.95] text-white block drop-shadow-[0_1px_8px_rgba(42,27,18,0.35)]">
                birthday
              </span>
              <span className="font-kudry text-[2rem] sm:text-[2.5rem] leading-[0.95] text-white block drop-shadow-[0_1px_8px_rgba(42,27,18,0.35)]">
                party
              </span>
            </div>

            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF7F2]/92 backdrop-blur-sm text-[#2A1B12] flex items-center justify-center border border-white/70 z-20 animate-sway badge-ring" style={{ animationDelay: '0.8s' }}>
              <span className="font-kudry text-2xl sm:text-[1.7rem] leading-none">20</span>
            </div>
          </div>

          <div className="flex justify-center mt-7 animate-float">
            <ArrowDown size={16} strokeWidth={1.2} className="text-[#A9885F]" />
          </div>
        </section>

        {/* ——— ПРИГЛАШЕНИЕ ——— */}
        <Reveal className="mb-20 text-center relative" variant="blur">
          <Heart size={13} strokeWidth={1.3} className="heart-float heart-float--1" />
          <Heart size={11} strokeWidth={1.3} className="heart-float heart-float--2" />
          <Heart size={10} strokeWidth={1.3} className="heart-float heart-float--3" />

          <h1 className="font-kudry text-[2.9rem] sm:text-[3.6rem] leading-[1.05] text-[#2A1B12] mb-6">
            Дорогая,
          </h1>

          <OrnamentDivider />

          <p className="font-normal text-[13.5px] sm:text-sm leading-[1.85] text-[#5C4936] max-w-[22rem] sm:max-w-[24rem] mx-auto">
            Скоро наступит особенный для меня день — мне исполняется 20. Мне будет безумно приятно
            разделить этот день с тобой! Приглашаю тебя на твой день рождения.
          </p>

          <div className="flex justify-center my-7">
            <span className="orbit-wrap">
              <span className="orbit-ring" aria-hidden="true" />
              <span className="orbit-ring orbit-ring--2" aria-hidden="true" />
              <Heart size={15} strokeWidth={1.3} className="text-[#C4A482] animate-heart relative" />
            </span>
          </div>

          <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#9A8570] mb-10">
            17 октября 2026
          </p>

          <div className="relative">
            <span className="timer-glow" aria-hidden="true" />
            <CountdownTimer targetDate="2026-10-17T15:00:00" />
          </div>
        </Reveal>

        {/* ——— КАЛЕНДАРЬ ——— */}
        <Reveal className="mb-24" variant="zoom">
          <CalendarOctober2026 />
        </Reveal>

        {/* ——— МЕСТО ——— */}
        <Reveal className="mb-24 text-center">
          <p className="eyebrow mb-4">Локация</p>
          <div className="section-glow inline-block">
            <h2 className="gold-sheen font-kudry text-[2.1rem] sm:text-[2.6rem] leading-[1.1] mb-3">
              Место проведения
            </h2>
          </div>
          <OrnamentDivider />
          <p className="text-[13px] sm:text-sm text-[#5C4936] mb-1">
            Апартаменты м. Проспект Вернадского
          </p>
          <p className="text-xs sm:text-[13px] text-[#9A8570] mb-9">
            Москва, пр-т Вернадского, 41с1
          </p>

          <div className="relative -mx-5 sm:mx-0 photo-zoom photo-auto-sheen photo-breathe">
            <PhotoSlot
              defaultSrc={defaultPhotos.venue}
              alt="Локация апартаменты"
              aspectRatio="aspect-[4/3]"
              storageKey="venue"
            />
          </div>

          <a
            href="https://yandex.ru/maps/?text=Москва, пр-т Вернадского, 41с1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 pb-1 border-b border-[#C4A482] text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#2A1B12] hover:text-[#A9885F] hover:border-[#A9885F] hover:tracking-[0.3em] transition-all duration-300"
          >
            <MapPin size={13} strokeWidth={1.4} />
            <span>Открыть карту</span>
          </a>
        </Reveal>

        {/* ——— ПРОГРАММА ——— */}
        <section className="mb-24">
          <Reveal className="text-center mb-12" variant="blur">
            <p className="eyebrow mb-4">Программа</p>
            <div className="section-glow inline-block">
              <h2 className="gold-sheen font-kudry text-[2.1rem] sm:text-[2.6rem] leading-[1.1]">
                Как проведем время
              </h2>
            </div>
            <OrnamentDivider />
          </Reveal>

          <div className="relative max-w-[22rem] mx-auto">
            <Reveal className="timeline-line absolute left-[5px] top-2 bottom-2 w-px bg-[#E7DBCA]" />

            <div className="space-y-9">
              {timelineEvents.map((item, idx) => (
                <Reveal key={idx} className="relative pl-8" delay={idx * 110} variant={idx % 2 === 0 ? 'left' : 'right'}>
                  <span
                    className="timeline-dot"
                    style={{ animation: `fade-scale-in 0.7s ease-out ${0.15 + idx * 0.11}s both` }}
                  />
                  <div className="flex items-center gap-2 mb-1">
                    <item.Icon size={14} strokeWidth={1.4} className="timeline-icon" style={{ animationDelay: `${idx * 0.7}s` }} />
                    <h3 className="text-[13px] sm:text-sm font-medium tracking-[0.06em] text-[#2A1B12]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[12px] sm:text-[13px] leading-relaxed text-[#8A7460]">
                    {item.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— ДРЕСС-КОД ——— */}
        <section className="mb-24">
          <Reveal className="text-center mb-10" variant="blur">
            <p className="eyebrow mb-4">Образы</p>
            <div className="section-glow inline-block">
              <h2 className="gold-sheen font-kudry text-[2.1rem] sm:text-[2.6rem] leading-[1.1]">
                Дресс-код
              </h2>
            </div>
            <OrnamentDivider />
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-10">
            <div className="space-y-3 sm:space-y-4">
              <Reveal delay={0} variant="left">
                <div className="photo-zoom photo-auto-sheen photo-breathe">
                  <PhotoSlot
                    defaultSrc={defaultPhotos.dressCode1}
                    alt="Дресс-код 1"
                    aspectRatio="aspect-[3/4]"
                    storageKey="dress-1"
                  />
                </div>
              </Reveal>
              <Reveal delay={120} variant="left">
                <div className="photo-zoom photo-auto-sheen photo-breathe">
                  <PhotoSlot
                    defaultSrc={defaultPhotos.dressCode3}
                    alt="Дресс-код 3"
                    aspectRatio="aspect-[4/5]"
                    storageKey="dress-3"
                  />
                </div>
              </Reveal>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-10">
              <Reveal delay={80} variant="right">
                <div className="photo-zoom photo-auto-sheen photo-breathe">
                  <PhotoSlot
                    defaultSrc={defaultPhotos.dressCode2}
                    alt="Дресс-код 2"
                    aspectRatio="aspect-[4/5]"
                    storageKey="dress-2"
                  />
                </div>
              </Reveal>
              <Reveal delay={200} variant="right">
                <div className="photo-zoom photo-auto-sheen photo-breathe">
                  <PhotoSlot
                    defaultSrc={defaultPhotos.dressCode4}
                    alt="Дресс-код 4"
                    aspectRatio="aspect-[3/4]"
                    storageKey="dress-4"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <ul className="max-w-[22rem] mx-auto">
            {dressRules.map((rule, idx) => (
              <Reveal
                as="li"
                key={idx}
                delay={idx * 70}
                className="flex items-baseline gap-3 py-3 text-[12.5px] sm:text-[13px] leading-relaxed text-[#5C4936] text-left border-b border-[#EFE6D8] last:border-b-0"
              >
                <span className="ornament-dot shrink-0 translate-y-[-2px]" />
                <span>
                  {rule.strong && <span className="text-[#2A1B12]">{rule.strong}</span>}
                  {rule.rest}
                </span>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* ——— ВИШ-ЛИСТ ——— */}
        <section className="mb-24">
          <Reveal className="text-center mb-10" variant="blur">
            <p className="eyebrow mb-4">Подарки</p>
            <div className="section-glow inline-block">
              <h2 className="gold-sheen font-kudry text-[2.1rem] sm:text-[2.6rem] leading-[1.1]">
                Виш-лист
              </h2>
            </div>
            <OrnamentDivider />
          </Reveal>

          <Reveal variant="zoom">
            <div className="wish-card relative border border-[#E7DBCA] overflow-hidden">
              <div className="absolute inset-[6px] border border-[#EFE6D8] pointer-events-none" />

              <span className="corner-orn corner-orn--tl" aria-hidden="true" />
              <span className="corner-orn corner-orn--tr" aria-hidden="true" />
              <span className="corner-orn corner-orn--bl" aria-hidden="true" />
              <span className="corner-orn corner-orn--br" aria-hidden="true" />
              <span className="wish-sheen" aria-hidden="true" />
              <span className="model-sparkle model-sparkle--a" aria-hidden="true" />
              <span className="model-sparkle model-sparkle--c" aria-hidden="true" />
              <span className="model-sparkle model-sparkle--d" aria-hidden="true" />
              <span className="model-sparkle model-sparkle--e" aria-hidden="true" />

              <div className="relative grid grid-cols-2">
                {/* Деньги */}
                <div className="wish-col px-4 sm:px-8 pt-10 sm:pt-12 pb-8 text-center border-r border-[#E7DBCA]">
                  <span className="badge-num font-kudry text-[11px] tracking-[0.3em] text-[#C4A482] block mb-4">
                    01
                  </span>
                  <MoneyModel />
                  <h3 className="font-kudry text-[1.5rem] sm:text-[1.7rem] leading-none text-[#2A1B12] mt-5 mb-3">
                    Деньги
                  </h3>
                  <p className="text-[11px] leading-relaxed text-[#9A8570]">
                    В конверте —<br />на свою мечту
                  </p>
                </div>

                {/* Цветы */}
                <div className="wish-col px-4 sm:px-8 pt-10 sm:pt-12 pb-8 text-center">
                  <span className="badge-num font-kudry text-[11px] tracking-[0.3em] text-[#C4A482] block mb-4">
                    02
                  </span>
                  <FlowerModel />
                  <h3 className="font-kudry text-[1.5rem] sm:text-[1.7rem] leading-none text-[#2A1B12] mt-5 mb-3">
                    Цветы
                  </h3>
                  <p className="text-[11px] leading-relaxed text-[#9A8570]">
                    Любимые букеты<br />и нежные композиции
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-center text-[12px] leading-relaxed text-[#9A8570] mt-6 max-w-[20rem] mx-auto">
              Выбирай то, что тебе ближе — мне важна сама твоя компания
            </p>
          </Reveal>
        </section>

        {/* ——— ФИНАЛ ——— */}
        <Reveal variant="zoom">
          <div className="bg-[#F3EADC] px-6 sm:px-10 py-14 sm:py-16 text-center relative overflow-hidden">
            <div className="absolute inset-4 border border-[#E7DBCA] pointer-events-none" />

            <span className="final-glow" aria-hidden="true" />
            <span className="orbit-deco orbit-deco--1" aria-hidden="true" />
            <span className="orbit-deco orbit-deco--2" aria-hidden="true" />

            {/* Летающие лепестки-декор */}
            <span className="petal-deco petal-deco--1" aria-hidden="true" />
            <span className="petal-deco petal-deco--2" aria-hidden="true" />
            <span className="petal-deco petal-deco--3" aria-hidden="true" />
            <span className="petal-deco petal-deco--4" aria-hidden="true" />
            <span className="petal-deco petal-deco--5" aria-hidden="true" />
            <span className="model-sparkle model-sparkle--a" aria-hidden="true" />
            <span className="model-sparkle model-sparkle--b" aria-hidden="true" />
            <span className="model-sparkle model-sparkle--e" aria-hidden="true" />

            {/* Золотые конфетти при появлении блока */}
            <ConfettiFinal />

            <h2 className="gold-sheen font-kudry text-[2.6rem] sm:text-[3.4rem] leading-[1] mb-8 relative">
              Happy<br />birthday
            </h2>

            <OrnamentDivider className="relative" />

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden border border-[#E7DBCA] mb-8 relative animate-sway badge-ring">
              <PhotoSlot
                defaultSrc={defaultPhotos.footer}
                alt="Катя"
                aspectRatio="aspect-square"
                storageKey="footer"
              />
            </div>

            <p className="relative text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#9A8570]">
              17 октября 2026 · Москва
            </p>
          </div>
        </Reveal>

      </main>
    </div>
  );
}
