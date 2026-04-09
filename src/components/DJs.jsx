import React from 'react';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

const DJs = () => {
  const djs = [
    { name: 'JHONY MIX', program: 'EL VACILE', image: 'https://images.unsplash.com/photo-1571266028243-cb40fcece57a?q=80&w=1964&auto=format&fit=crop' },
    { name: 'DJ KEVIN', program: 'URBAN BEATS', image: 'https://images.unsplash.com/photo-1616016142171-ec5bb3a23a31?q=80&w=1974&auto=format&fit=crop' },
    { name: 'CHRIS SWAG', program: 'SALSÓDROMO', image: 'https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?q=80&w=1974&auto=format&fit=crop' },
    { name: 'ALEX SOUND', program: 'NIGHT DRIVE', image: 'https://images.unsplash.com/photo-1542458428-21d3f57abf3c?q=80&w=1935&auto=format&fit=crop' },
    { name: 'MARC BASS', program: 'MORNING BASS', image: 'https://images.unsplash.com/photo-1508614917696-22485f340882?q=80&w=2070&auto=format&fit=crop' },
    { name: 'LEO FLOW', program: 'TOP HITS', image: 'https://images.unsplash.com/photo-1533663116543-1bc2ba67ac0a?q=80&w=1975&auto=format&fit=crop' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="locutores" className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="font-impact text-4xl md:text-5xl text-gray-900 tracking-wide uppercase mb-2 flex items-center gap-4">
            <Headphones size={40} className="text-mx-green" />
            EL <span className="text-mx-green">SQUAD</span>
          </h2>
          <div className="h-1 w-24 bg-mx-green shadow-sm"></div>
        </div>
        <p className="text-gray-500 mt-4 md:mt-0 font-racing text-xl border-l-4 border-mx-yellow pl-4">
          NUESTROS COMANDANTES DEL AIRE
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {djs.map((dj, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="relative group overflow-hidden bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
          >
            <div className="aspect-[4/5] relative bg-gray-200">
              {/* Image with High Contrast / Grayscale base, color on hover */}
              <img 
                src={dj.image} 
                alt={dj.name} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              
              {/* Aggressive Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-block bg-mx-green text-white font-racing px-3 py-1 mb-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {dj.program}
                </div>
                <h3 className="font-impact text-4xl text-white tracking-widest group-hover:text-mx-yellow transition-colors">
                  {dj.name}
                </h3>
              </div>
            </div>
            
            {/* Cyberpunk corner details adapted for light theme */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-mx-green opacity-0 group-hover:opacity-100 transition-opacity z-10 m-2"></div>
            <div className="absolute top-6 right-4 text-white font-racing text-xs opacity-70 block rotate-90 origin-right drop-shadow-md">
              ID: DJ-{index + 101}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default DJs;
