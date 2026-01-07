'use client';

import React from 'react';

const CTA = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#0083C0] py-40 px-12 text-center relative overflow-hidden">
      {/* Background text */}
      <div className="absolute font-['Archivo_Black'] text-[25rem] text-white/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-none">
        JAXA
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-['Archivo_Black'] text-5xl lg:text-8xl text-white uppercase tracking-tight mb-12 leading-tight">
          Créons l'extraordinaire ensemble
        </h2>
        <p className="text-3xl text-white font-semibold mb-16">
          Prêt à révéler le plein potentiel de votre projet ?
        </p>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, '#contact')}
          className="px-16 py-12 border-none text-2xl font-bold cursor-pointer no-underline inline-block transition-all duration-300 uppercase font-['Archivo_Black'] shadow-[10px_10px_0_rgba(0,0,0,0.3)] bg-[#FF9671] text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[5px_5px_0_rgba(0,0,0,0.3)]"
        >
          DEMANDER UN DEVIS
        </a>
      </div>
    </section>
  );
};

export default CTA;