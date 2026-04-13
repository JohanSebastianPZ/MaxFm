import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImg1 from '../assets/hero/hero-1.jpg';
import heroImg2 from '../assets/hero/hero-2.jpg';

const Hero = () => {
  const slides = [
    /*
    {
      id: 1,
      type: 'content',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1964&auto=format&fit=crop',
      tag: 'NUEVA TEMPORADA 24/7',
      title: 'LA REVOLUCION',
      highlight: 'MUSICAL',
      desc: 'Sintoniza el futuro. La mejor música urbana y hits exclusivos en la frecuencia más agresiva del dial.',
    },*/
    {
      id: 1,
      type: 'image-only',
      image: heroImg1,
    },
    {
      id: 3,
      type: 'image-only',
      image: heroImg2,
    }/*,
    {
      id: 4,
      type: 'content',
      image: 'https://images.unsplash.com/photo-1470229722913-7c090be5f524?q=80&w=2070&auto=format&fit=crop',
      tag: 'FIN DE SEMANA',
      title: 'FESTIVAL',
      highlight: 'NON-STOP',
      desc: 'Prepárate para la locura total del fin de semana. Sesiones ininterrumpidas de los mejores DJs del mundo.',
    }*/
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="inicio" className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 border-b-[8px] border-mx-yellow">

      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          className="relative w-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slides[currentSlide].image}
              alt="Slide Background"
              className={`w-full h-auto block`}
            />
            {/* Dark gradient overlay to ensure text readability */}
            {slides[currentSlide].type === 'content' && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 z-10 w-full max-w-7xl mx-auto pointer-events-none">
        <AnimatePresence mode="wait">
          {slides[currentSlide].type === 'content' && (
            <motion.div
              key={`content-${currentSlide}`}
              className="w-full md:w-3/4 max-w-3xl pointer-events-auto"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-4 mb-4 bg-mx-green text-white font-racing text-sm md:text-lg tracking-widest clip-diagonal transform -skew-x-12 shadow-[var(--shadow-mx-green)]">
                {slides[currentSlide].tag}
              </span>

              <h1 className="font-impact text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tight italic text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                {slides[currentSlide].title} <br />
                <span className="text-mx-yellow" style={{ textShadow: 'var(--shadow-mx-yellow)' }}>
                  {slides[currentSlide].highlight}
                </span>
              </h1>

              <p className="mt-6 text-gray-200 max-w-lg text-lg md:text-xl font-light drop-shadow-md">
                {slides[currentSlide].desc}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="relative px-8 py-4 bg-mx-green text-white font-racing text-xl flex items-center justify-center gap-3 group clip-diagonal hover:bg-mx-green-hover transition-colors shadow-[var(--shadow-mx-green)]">
                  <Play fill="currentColor" size={24} className="group-hover:scale-125 transition-transform drop-shadow-sm" />
                  ESCUCHAR AHORA
                </button>
                <button className="px-8 py-4 border-2 border-mx-yellow text-mx-yellow font-racing text-xl flex items-center justify-center hover:bg-mx-yellow/10 transition-colors clip-diagonal bg-black/30 backdrop-blur-sm">
                  VER PROGRAMACIÓN
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute right-6 lg:right-12 bottom-12 flex gap-3 z-30">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur hover:bg-mx-yellow text-white hover:text-gray-900 border border-white/20 hover:border-mx-yellow flex justify-center items-center clip-diagonal transition-all"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur hover:bg-mx-yellow text-white hover:text-gray-900 border border-white/20 hover:border-mx-yellow flex justify-center items-center clip-diagonal transition-all"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 transition-all duration-300 clip-diagonal ${currentSlide === idx ? 'w-10 bg-mx-yellow' : 'w-4 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Decorative vertical band */}
      <div className="absolute top-0 right-1/4 w-32 h-full bg-mx-green/5 blur-3xl mix-blend-screen pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;
