import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    if (isMuted && parseFloat(e.target.value) > 0) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-16 md:h-14 bg-mx-green z-[100] shadow-[0_-5px_20px_rgba(0,0,0,0.2)] flex items-center justify-between px-4 md:px-8">
      
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="https://server2.ejeserver.com:7009/stream" preload="none" />

      {/* LEFT: Play Button & Info */}
      <div className="flex items-center gap-4">
        <button 
          onClick={togglePlay}
          className="w-10 h-10 md:w-10 md:h-10 rounded-full bg-white text-mx-green flex justify-center items-center hover:scale-105 hover:shadow-lg transition-transform"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>
        
        <div className="hidden sm:flex flex-col">
          <span className="font-bold text-gray-900 text-sm md:text-base leading-tight">EL VACILE</span>
          <span className="text-white font-racing text-xs tracking-wider">ON AIR - JHONY MIX</span>
        </div>
        
        <div className="sm:hidden font-bold text-gray-900 text-sm">EL VACILE</div>
      </div>

      {/* CENTER: Equalizer (Dynamic Effect) */}
      <div className="flex-1 flex justify-center items-end gap-1.5 md:gap-2 h-10 px-2 sm:px-8">
        {[...Array(16)].map((_, i) => {
          const bar = i + 1;
          
          // Ciclo de colores vibrantes tipo neón/LED
          const colors = [
            'bg-mx-yellow shadow-[0_0_8px_rgba(255,210,0,0.8)]', 
            'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]', 
            'bg-green-300 shadow-[0_0_8px_rgba(134,239,172,0.8)]',
            'bg-yellow-200 shadow-[0_0_8px_rgba(254,240,138,0.8)]'
          ];
          const colorClass = colors[bar % colors.length];

          // Alturas dinámicas pseudo-aleatorias prefijadas para evitar tirones en renderizados
          const heights = [
             `${4 + (bar % 4) * 2}px`,
             `${20 + (bar % 5) * 4}px`,
             `${10 + (bar % 3) * 3}px`,
             `${25 + (bar % 4) * 3}px`,
             `${8 + (bar % 5) * 2}px`
          ];

          return (
            <motion.div
              key={bar}
              className={`w-1.5 md:w-3 rounded-t-sm origin-bottom ${colorClass}`}
              initial={{ height: '4px' }}
              animate={
                isPlaying 
                  ? { height: heights } 
                  : { height: '4px' }
              }
              transition={
                isPlaying 
                  ? {
                      repeat: Infinity,
                      duration: 0.5 + (bar % 3) * 0.2, // Fast, punchy animations
                      ease: "easeInOut",
                      repeatType: "mirror"
                    } 
                  : { duration: 0.3 }
              }
            />
          );
        })}
      </div>

      {/* RIGHT: Volume Control */}
      <div className="flex items-center gap-2">
        <button onClick={toggleMute} className="text-gray-900 hover:text-white transition-colors p-1">
          {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={isMuted ? 0 : volume} 
          onChange={handleVolumeChange}
          className="w-16 md:w-24 h-1 bg-white/40 rounded-lg appearance-none cursor-pointer accent-white hidden md:block"
        />
        <div className="bg-white px-2 py-0.5 rounded text-xs font-bold text-mx-green hidden lg:block ml-2 w-10 text-center">
          {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
        </div>
      </div>

    </div>
  );
};

export default Player;
