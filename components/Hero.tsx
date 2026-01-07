'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';

const Hero = () => {
  const rotation = useParallax(0.1);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen relative grid grid-cols-1 lg:grid-cols-2 overflow-hidden mt-20">
      {/* Left side - Purple */}
      <div className="bg-[#845EC2] p-24 flex flex-col justify-center relative overflow-hidden">
        {/* Animated circle */}
        <div className="absolute w-[600px] h-[600px] bg-[#FF9671] rounded-full top-[-300px] right-[-300px] opacity-30 animate-pulse-custom"></div>
        
        <div className="relative z-10 text-white">
          <div className="text-xl font-bold bg-[#FF9671] inline-block px-8 py-4 mb-8 rotate-[-2deg] shadow-[10px_10px_0_rgba(0,0,0,0.2)]">
            JAXA PRODUCTION
          </div>
          
          <h1 className="font-['Archivo_Black'] text-5xl lg:text-7xl xl:text-8xl leading-tight mb-12 uppercase tracking-tight">
            <span className="bg-[#0083C0] px-4 py-2 inline-block skew-x-[-5deg] shadow-[15px_15px_0_rgba(0,0,0,0.3)]">NOUS</span><br />
            CRÉONS<br />
            L'EXTRA-<br />
            ORDINAIRE
          </h1>
          
          <p className="text-2xl font-bold mb-12 leading-relaxed">
            Nos expériences touchent, inspirent et rassemblent.
          </p>
          
          <div className="flex gap-8">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="px-12 py-8 border-none text-xl font-bold cursor-pointer no-underline inline-block transition-all duration-300 uppercase font-['Archivo_Black'] shadow-[10px_10px_0_rgba(0,0,0,0.3)] bg-[#FF9671] text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[5px_5px_0_rgba(0,0,0,0.3)]"
            >
              DÉMARRER
            </a>
            <a
              href="#projets"
              onClick={(e) => handleSmoothScroll(e, '#projets')}
              className="px-12 py-8 border-none text-xl font-bold cursor-pointer no-underline inline-block transition-all duration-300 uppercase font-['Archivo_Black'] shadow-[10px_10px_0_rgba(0,0,0,0.3)] bg-white text-[#845EC2] hover:translate-x-1 hover:translate-y-1 hover:shadow-[5px_5px_0_rgba(0,0,0,0.3)]"
            >
              PROJETS
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Mint */}
      <div className="bg-[#00C9A7] relative overflow-hidden">
        {/* Video/Image placeholder */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00C9A7] to-[#845EC2] opacity-70"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute w-full h-full bg-repeating-linear-gradient-45 animate-slide opacity-10 z-10"></div>
        
        {/* Rotating J letter */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/20 font-['Archivo_Black'] animate-rotate"
          style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
        >
          J
        </div>
      </div>
    </section>
  );
};

export default Hero;