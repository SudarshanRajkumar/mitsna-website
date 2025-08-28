
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-mitsna-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-mitsna-dark">About MitSna Foundation</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">A Section 8 non-profit organization committed to transforming the educational landscape in Manipur.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The MitSna Foundation is a registered Section 8 non-profit company with a singular focus: to promote quality education that meets global standards for the students of Manipur. We believe that education is the most powerful tool for empowerment and societal progress.
            </p>
            <p>
              Our flagship initiative, <span className="font-bold text-mitsna-blue">"Teach FOR MANIPUR"</span>, provides free and accessible education, connecting a global network of Manipuri professionals and students with learners back home. We strive to create a holistic learning environment that nurtures curiosity, critical thinking, and leadership.
            </p>
            <p>
              The <span className="font-bold text-mitsna-blue">Rebuild Manipur Report 2023–24</span> encapsulates our extensive educational, relief, and advocacy efforts during a challenging period, showcasing our commitment to the community's resilience and recovery.
            </p>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Students in a classroom" 
              className="rounded-lg shadow-2xl object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
