import React from 'react';
import ExpertiseIcon from './ExpertiseIcon';

const expertiseItems = [
  {
    id: 1,
    title: 'Idéation & Création',
    description: 'Révélation du plein potentiel des créateurs et des entreprises grâce à des stratégies novatrices.',
    items: ['Stratégies innovantes', 'Solutions adaptées', 'Vision à long terme'],
    color: 'bg-[#00C9A7]',
    iconType: 'ideation' as const,
    iconPosition: 'left',
  },
  {
    id: 2,
    title: 'Administration Projet',
    description: 'Accompagnement complet des projets créatifs de la conception à la réalisation.',
    items: ['Gestion complète', 'Suivi personnalisé', 'Coordination d\'équipe'],
    color: 'bg-[#845EC2]',
    iconType: 'administration' as const,
    iconPosition: 'right',
  },
  {
    id: 3,
    title: 'Expertise Numérique',
    description: 'Optimisation de la présence numérique pour maximiser l\'impact et la visibilité.',
    items: ['Stratégie digitale', 'Optimisation web', 'Analyse performance'],
    color: 'bg-[#FF9671]',
    iconType: 'digital' as const,
    iconPosition: 'left',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="bg-[#1A1A2E] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center px-12 py-16">
          <h2 className="font-['Archivo_Black'] text-4xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
            Expertise 360°
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-0">
          {expertiseItems.map((item) => (
            <div
              key={item.id}
              className={`${item.color} relative p-24 clip-path-polygon grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
            >
              {item.iconPosition === 'left' && (
                <div className="text-[15rem] leading-none opacity-20 text-white">
                  <ExpertiseIcon 
                    type={item.iconType} 
                    className="w-full h-full max-w-[400px] max-h-[400px]" 
                  />
                </div>
              )}
              
              <div className="text-white">
                <h3 className="font-['Archivo_Black'] text-4xl lg:text-5xl mb-8 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-2xl leading-relaxed mb-8">
                  {item.description}
                </p>
                <ul className="list-none">
                  {item.items.map((listItem, index) => (
                    <li key={index} className="text-xl font-bold py-4 pl-12 relative">
                      <span className="absolute left-0 text-2xl">▶</span>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
              
              {item.iconPosition === 'right' && (
                <div className="text-[15rem] leading-none opacity-20 text-white">
                  <ExpertiseIcon 
                    type={item.iconType} 
                    className="w-full h-full max-w-[400px] max-h-[400px]" 
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;