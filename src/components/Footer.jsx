import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaTwitch } from 'react-icons/fa6';
import logoImg from '../assets/general/logo-maxfm.png';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 border-t-[6px] border-mx-green mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="mb-6 bg-white p-4 rounded-xl">
              <img src={logoImg} alt="MaxFM Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-gray-400 font-base max-w-sm">
              La revolución musical ha comenzado. Transmitiendo desde la capital y para todo el mundo con el beat más fuerte. No somos una emisora, somos un estilo de vida.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-impact text-2xl text-white tracking-widest uppercase mb-2 border-b-2 border-mx-yellow pb-2 inline-block w-fit">Secciones</h4>
            <a href="#inicio" className="text-gray-400 hover:text-mx-green transition-colors font-racing tracking-wider w-fit">INICIO</a>
            <a href="#programacion" className="text-gray-400 hover:text-mx-green transition-colors font-racing tracking-wider w-fit">PROGRAMACIÓN</a>
            <a href="#locutores" className="text-gray-400 hover:text-mx-green transition-colors font-racing tracking-wider w-fit">LOCUTORES</a>
            <a href="#interaccion" className="text-gray-400 hover:text-mx-green transition-colors font-racing tracking-wider w-fit">COMUNIDAD</a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="font-impact text-2xl text-white tracking-widest uppercase mb-2 border-b-2 border-mx-yellow pb-2 inline-block w-fit">Conéctate</h4>
            <div className="flex flex-wrap gap-3">
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaXTwitter />} />
              <SocialIcon icon={<FaYoutube />} />
              <SocialIcon icon={<FaFacebook />} />
              <SocialIcon icon={<FaTwitch />} />
            </div>
          </div>
          
        </div>
        
        {/* Legal Info */}
        <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} MAXFM. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-mx-yellow transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-mx-yellow transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-mx-yellow transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="p-3 bg-gray-800 border border-gray-700 text-gray-300 hover:text-gray-900 hover:bg-mx-yellow hover:border-transparent clip-diagonal transition-all duration-300"
    >
      {React.cloneElement(icon, { size: 20 })}
    </a>
  );
};

export default Footer;
