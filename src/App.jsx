import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import DJs from './components/DJs';
import LiveInteraction from './components/LiveInteraction';
import Footer from './components/Footer';
import Player from './components/Player';

function App() {
  return (
    <div className="bg-light-bg min-h-screen text-dark-text font-base overflow-x-hidden relative pb-16">
      <div className="fixed inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-30 z-0"></div>
      
      <div className="relative z-10 w-full flex flex-col">
        <Header />
        {/* We add pt-24 md:pt-28 so the fixed header doesn't overlap the Hero component */}
        <main className="flex flex-col w-full pt-20 md:pt-28">
          {/* Alternating backgrounds in sections */}
          <Hero />
          
          <div className="bg-light-alt border-y border-gray-200">
            <Schedule />
          </div>
          
          <div className="bg-light-bg">
            <DJs />
          </div>
          
          <div className="bg-light-alt border-t border-gray-200">
            <LiveInteraction />
          </div>
        </main>
        <Footer />
        <Player />
      </div>
    </div>
  );
}

export default App;
