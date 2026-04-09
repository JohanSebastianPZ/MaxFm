import React from 'react';
import { motion } from 'framer-motion';
import { Flame, MessageSquare, Send } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa6';

const LiveInteraction = () => {
  const top10 = [
    { id: 1, title: 'CYBERPUNK BEATS', artist: 'NEO-DJ', progress: '85%' },
    { id: 2, title: 'MIDNIGHT CITY', artist: 'SYNTH BOYS', progress: '70%' },
    { id: 3, title: 'NEON LIGHTS', artist: 'KAROL G', progress: '65%' },
    { id: 4, title: 'TOKYO DRIFT REMIX', artist: 'TERIYAKI BOYZ', progress: '60%' },
    { id: 5, title: 'LA REVOLUCIÓN', artist: 'DADDY YANKEE', progress: '50%' },
  ];

  const chatMessages = [
    { user: 'CyberNinja', color: 'text-purple-600', msg: '¡Este set está brutal! 🔥' },
    { user: 'NeonGirl99', color: 'text-mx-green', msg: 'Saludos desde Madrid 🇪🇸' },
    { user: 'BassLover', color: 'text-blue-600', msg: 'Suban el volumen a esooooo' },
    { user: 'DJ_Rex', color: 'text-red-600', msg: 'Track ID del q está sonando?' },
    { user: 'MaxFmFan', color: 'text-mx-yellow-hover', msg: 'MaxFM siempre rompiéndola 📻💛' },
    { user: 'TechBro', color: 'text-emerald-500', msg: 'ufff ese bass drop 🤯' },
  ];

  return (
    <section id="interaccion" className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* SECTION TITLE */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-impact text-4xl md:text-5xl text-gray-900 tracking-widest uppercase mb-2">
          LA <span className="text-mx-green">COMUNIDAD</span>
        </h2>
        <div className="h-1 w-24 bg-mx-yellow shadow-sm"></div>
      </div>

      <div className="flex flex-col gap-10">
        
        {/* ROW 1: Ranking + Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT: Top 10 Ranking */}
          <div className="bg-white border border-gray-200 shadow-md p-6 relative">
            <h3 className="font-impact text-3xl text-gray-900 flex items-center gap-3 mb-6">
              <Flame className="text-mx-yellow" size={32} /> TOP 10 RANKING
            </h3>
            
            <div className="flex flex-col gap-4">
              {top10.map((song, i) => (
                <div key={song.id} className="flex items-center gap-4 group">
                  <span className="font-racing text-4xl text-gray-300 w-12 text-center group-hover:text-mx-green transition-colors">
                    {song.id}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 group-hover:text-mx-green transition-colors">{song.title}</h4>
                    <p className="text-sm text-gray-500">{song.artist}</p>
                    {/* Mini Bar */}
                    <div className="w-full h-1.5 bg-gray-100 mt-1 relative overflow-hidden rounded-full">
                      <motion.div 
                        className="absolute h-full bg-gradient-to-r from-mx-yellow to-mx-green"
                        initial={{ width: 0 }}
                        whileInView={{ width: song.progress }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Flash News Ticker */}
            <div className="mt-8 bg-gray-900 text-mx-yellow font-racing overflow-hidden py-3 px-4 border-b-4 border-mx-green rounded shadow-inner">
              <motion.div 
                className="whitespace-nowrap flex gap-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              >
                <span className="flex items-center gap-4">⚡ NUEVO FESTIVAL ANUNCIADO PARA ESTE VERANO</span>
                <span className="flex items-center gap-4">⚡ EXCLUSIVA: ENTREVISTA CON BAD BUNNY ESTA NOCHE A LAS 20:00</span>
                <span className="flex items-center gap-4">⚡ JHONY MIX LANZA NUEVO REMIX GLOBAL</span>
                <span className="flex items-center gap-4">⚡ NUEVO FESTIVAL ANUNCIADO PARA ESTE VERANO</span>
                <span className="flex items-center gap-4">⚡ EXCLUSIVA: ENTREVISTA CON BAD BUNNY ESTA NOCHE A LAS 20:00</span>
                <span className="flex items-center gap-4">⚡ JHONY MIX LANZA NUEVO REMIX GLOBAL</span>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Live Chat */}
          <div className="h-[500px] lg:h-auto border border-gray-200 bg-white shadow-md flex flex-col relative group">
            
            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <MessageSquare className="text-mx-green" size={24} />
                <span className="font-racing text-gray-900 tracking-widest text-xl">CABINA DE CHAT</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-racing text-red-600 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                ONLINE: 1,402
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-base text-sm scrollbar-hide flex flex-col justify-end bg-gray-50/50">
              {chatMessages.map((msg, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-white p-3 rounded shadow-sm border border-gray-100 hover:border-mx-green transition-colors ml-4 relative"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-white drop-shadow-sm"></div>
                  <span className={`${msg.color} font-bold mr-2`}>{msg.user}:</span>
                  <span className="text-gray-700">{msg.msg}</span>
                </motion.div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-gray-100 border-t border-gray-200">
              <div className="flex bg-white border border-gray-300 focus-within:border-mx-green focus-within:ring-1 focus-within:ring-mx-green transition-all rounded overflow-hidden">
                <span className="pl-3 py-3 text-gray-400 font-mono">{">"}</span>
                <input 
                  type="text" 
                  placeholder="Únete a la conversación..." 
                  className="w-full bg-transparent border-none outline-none text-gray-800 font-base px-2 py-3 text-sm placeholder-gray-500 focus:ring-0"
                />
                <button className="px-6 text-white bg-mx-green hover:bg-mx-green-hover transition-colors font-racing flex items-center justify-center">
                  <Send size={18} />
                </button>
              </div>
            </div>
            
          </div>
        </div>

        {/* ROW 2: YouTube Video Recommendation */}
        <div className="w-full bg-gray-900 border-b-4 border-mx-yellow shadow-xl overflow-hidden group">
          <div className="p-4 bg-black/80 flex items-center justify-center gap-3">
            <FaYoutube size={28} className="text-red-600" />
            <h3 className="font-impact text-2xl md:text-3xl text-white tracking-widest uppercase">
              RECOMENDACIÓN <span className="text-mx-yellow">DE LA SEMANA</span>
            </h3>
          </div>
          
          <div className="relative w-full aspect-video border-t border-gray-800">
            {/* Embedded YouTube video (Replace src with actual MaxFM recommendation) */}
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=0&mute=0&controls=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LiveInteraction;
