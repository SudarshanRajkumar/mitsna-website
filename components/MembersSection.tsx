
import React from 'react';
import { members } from '../constants';
import { Member } from '../types';

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="text-center">
    <img 
      src={member.imageUrl} 
      alt={member.name} 
      className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-white"
    />
    <h3 className="mt-4 text-lg font-bold text-mitsna-dark">{member.name}</h3>
    <p className="text-mitsna-light-blue font-medium">{member.role}</p>
  </div>
);

const MembersSection: React.FC = () => {
  return (
    <section id="members" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-mitsna-dark">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated network of professionals and students from Manipur working together from across the globe.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
        <div className="mt-12 text-center bg-mitsna-gray p-8 rounded-lg">
            <h3 className="text-xl font-bold text-mitsna-dark">Official Contact Points</h3>
            <p className="mt-2 text-gray-700">For inquiries, partnerships, or general information, please reach out to us.</p>
            <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-800">
                <p><strong>Office Email:</strong> <a href="mailto:office@mitsna.org" className="text-mitsna-blue hover:underline">office@mitsna.org</a></p>
                <p><strong>Phone:</strong> <a href="tel:0385-3544588" className="text-mitsna-blue hover:underline">0385-3544588</a></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
