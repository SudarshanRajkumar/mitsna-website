
import React from 'react';
import { programs } from '../constants';
import { Program } from '../types';
import { ArrowRightIcon } from './icons';

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
    <h3 className="text-2xl font-bold text-mitsna-blue mb-4">{program.title}</h3>
    <p className="text-gray-600 flex-grow">{program.description}</p>
    <a 
      href={program.actionLink} 
      className="mt-6 inline-flex items-center font-semibold text-mitsna-light-blue hover:text-mitsna-blue transition-colors duration-200 group"
    >
      {program.actionText}
      <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-mitsna-dark">Programs & Initiatives</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Driving change through focused and impactful educational projects.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
