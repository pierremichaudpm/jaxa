import React from 'react';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'X-Men: Dark Phoenix',
    year: '2019',
    description: 'Production Aquatique',
    color: 'bg-[#00C9A7]',
  },
  {
    id: 2,
    number: '02',
    title: 'At First Light',
    year: '2018',
    description: 'Production Aquatique',
    color: 'bg-[#845EC2]',
  },
  {
    id: 3,
    number: '03',
    title: 'The Glass Castle',
    year: '2017',
    description: 'Production Aquatique',
    color: 'bg-[#FF9671]',
  },
  {
    id: 4,
    number: '04',
    title: 'X-Men: Apocalypse',
    year: '2016',
    description: 'Production Aquatique',
    color: 'bg-[#FF9671]',
  },
  {
    id: 5,
    number: '05',
    title: 'X-Men: Days of Future Past',
    year: '2014',
    description: 'Production Aquatique',
    color: 'bg-[#00C9A7]',
  },
  {
    id: 6,
    number: '06',
    title: 'The Fountain',
    year: '2006',
    description: 'Production Aquatique',
    color: 'bg-[#845EC2]',
  },
];

const Projects = () => {
  return (
    <section id="projets" className="bg-[#0083C0] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center px-12 mb-24">
          <h2 className="font-['Archivo_Black'] text-4xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
            Projets qui marquent
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.color} aspect-square relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10 group`}
            >
              {/* Image placeholder */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute top-0 left-0 w-full h-full p-12 flex flex-col justify-between text-white z-20">
                <div className="font-['Archivo_Black'] text-6xl opacity-30">
                  {project.number}
                </div>
                
                <div className="bg-black/80 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-['Archivo_Black'] text-3xl mb-2">
                    {project.title}
                  </h3>
                  <div className="text-2xl font-bold mb-2">
                    {project.year}
                  </div>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;