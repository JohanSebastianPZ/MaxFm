import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

import cantinazo from '../assets/programacion/el_cantinazo.png'; 
import vacile from '../assets/programacion/el_vacile.png'; 
import alarma from '../assets/programacion/la_alarma.png'; 
import pruebaVida from '../assets/programacion/pruebas_de_vida.png'; 
import salsodromo from '../assets/programacion/salsodromo.png'; 


const Schedule = () => {
  const scrollContainerRef = useRef(null);

  const programs = [
    { id: 1, time: '06:00 - 10:00', title: 'MORNING BASS', dj: 'MARC BASS', status: 'past', image: cantinazo},
    { id: 2, time: '10:00 - 12:00', title: 'URBAN BEATS', dj: 'DJ KEVIN', status: 'past', image: vacile},
    { id: 3, time: '12:00 - 16:00', title: 'EL VACILE', dj: 'JHONY MIX', status: 'live', image: alarma},
    { id: 4, time: '16:00 - 20:00', title: 'SALSÓDROMO', dj: 'CHRIS SWAG', status: 'next', image: pruebaVida},
    { id: 5, time: '20:00 - 00:00', title: 'NIGHT DRIVE', dj: 'ALEX SOUND', status: 'next', image: salsodromo}
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="programacion" className="w-full py-20 px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <motion.h2 
            className="font-impact text-4xl md:text-5xl lg:text-7xl text-gray-900 tracking-widest uppercase mb-2 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            PROGRAMACIÓN <br className="md:hidden" />
            <motion.span 
              className="inline-block"
              animate={{ 
                color: ['#00d440', '#FFD200', '#00d440'],
                textShadow: ['0 0 10px rgba(0,212,64,0.5)', '0 0 20px rgba(255,210,0,0.8)', '0 0 10px rgba(0,212,64,0.5)']
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              LA MAX LATINA
            </motion.span>
          </motion.h2>
          <div className="h-1 w-32 bg-mx-yellow shadow-[var(--shadow-mx-yellow)]"></div>
        </div>
        
        <div className="flex gap-4 mt-6 md:mt-0">
          <button onClick={scrollLeft} className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-600 hover:border-mx-green hover:text-mx-green bg-white transition-all clip-diagonal shadow-sm">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollRight} className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-600 hover:border-mx-green hover:text-mx-green bg-white transition-all clip-diagonal shadow-sm">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
      >
        {programs.map((program) => (
          <div 
            key={program.id} 
            className={`min-w-[300px] md:min-w-[380px] snap-center shrink-0 flex flex-col group cursor-pointer shadow-lg bg-white ${program.status === 'live' ? 'ring-4 ring-mx-green transform scale-[1.02]' : 'hover:-translate-y-2'} transition-transform duration-300`}
          >
            <div className={`relative h-64 md:h-72 w-full overflow-hidden`}>
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
              />
              {/* Dynamic Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent ${program.status === 'live' ? 'opacity-80' : 'opacity-90'} group-hover:opacity-70 transition-opacity`}></div>
              {/* Neon color flash on hover */}
              <div className="absolute inset-0 bg-mx-green/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                {program.status === 'live' ? (
                  <div className="bg-red-600 font-racing px-4 py-1.5 flex items-center gap-2 text-white shadow-[0_0_15px_rgba(220,38,38,0.9)] border border-red-400 text-sm transform rotate-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
                    EN VIVO
                  </div>
                ) : (
                  <div className="bg-gray-900/90 backdrop-blur font-racing px-3 py-1 text-white text-xs border border-gray-700 shadow-lg">
                    {program.status === 'past' ? 'EMITIDO' : 'PRÓXIMO'}
                  </div>
                )}
              </div>

              {/* Time Badge (Moved to Top Left for better visual structure) */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-mx-yellow text-gray-900 px-3 py-1 text-sm font-racing shadow-md transform -skew-x-12">
                <Clock size={14} className="text-gray-900" />
                <span className="transform skew-x-12">{program.time}</span>
              </div>
            </div>

            {/* Info Container */}
            <div className="p-6 border-x border-b border-gray-200">
              <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-1">{program.dj}</p>
              <h3 className={`font-impact text-3xl uppercase tracking-wider ${program.status === 'live' ? 'text-gray-900' : 'text-gray-700 group-hover:text-mx-green'} transition-colors`}>
                {program.title}
              </h3>

              {/* Progress bar if live */}
              {program.status === 'live' && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 font-racing mb-1">
                    <span>Inició 12:00</span>
                    <span className="text-mx-green font-bold flex items-center gap-1">
                      <Clock size={12} /> -00:35:12
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-mx-green"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${program.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* Base line accent */}
            <div className={`h-1 w-full ${program.status === 'live' ? 'bg-mx-green' : 'bg-gray-200 group-hover:bg-mx-yellow'} transition-colors`}></div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Schedule;
