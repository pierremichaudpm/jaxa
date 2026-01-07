import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
      {/* Left side - Purple */}
      <div className="bg-[#845EC2] p-24 flex flex-col justify-center text-white">
        <h2 className="font-['Archivo_Black'] text-5xl mb-12 uppercase">
          Parlons-en
        </h2>
        
        <div className="mb-12">
          <h3 className="text-xl mb-4 uppercase tracking-widest">Courriel</h3>
          <a 
            href="mailto:virginiejaffredo@jaxa.ca" 
            className="text-2xl text-white font-bold no-underline transition-transform duration-300 inline-block hover:translate-x-4"
          >
            virginiejaffredo@jaxa.ca
          </a>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl mb-4 uppercase tracking-widest">Téléphone</h3>
          <a 
            href="tel:+15148138788" 
            className="text-2xl text-white font-bold no-underline transition-transform duration-300 inline-block hover:translate-x-4"
          >
            +1 (514) 813-8788
          </a>
        </div>
      </div>
      
      {/* Right side - Coral */}
      <div className="bg-[#FF9671] p-24 flex flex-col justify-center text-white">
        <div className="mb-12">
          <h3 className="text-xl mb-4 uppercase tracking-widest">Localisation</h3>
          <p className="text-2xl font-bold">
            Montréal, Québec<br />
            Canada
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl mb-4 uppercase tracking-widest">Suivez notre actualité</h3>
          <p className="text-2xl font-bold">Restez connectés</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;