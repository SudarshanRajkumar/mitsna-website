
import React, { useState } from 'react';
import { events, socialPosts } from '../constants';
import { Event, SocialPost } from '../types';
import { InstagramIcon, YouTubeIcon, PlayIcon } from './icons';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover"/>
    <div className="p-6">
      <p className="text-sm font-semibold text-mitsna-light-blue">{event.date}</p>
      <h3 className="text-xl font-bold mt-2 text-mitsna-dark">{event.title}</h3>
      {event.speaker && <p className="text-sm text-gray-500 mt-1">with {event.speaker}</p>}
      <p className="text-gray-600 mt-3 text-sm">{event.description}</p>
    </div>
  </div>
);

const SocialCard: React.FC<{ post: SocialPost }> = ({ post }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 flex items-center space-x-3 border-b border-gray-200">
            {post.platform === 'Instagram' ? <InstagramIcon className="h-8 w-8 text-pink-500" /> : <YouTubeIcon className="h-8 w-8 text-red-600" />}
            <div>
                <p className="font-bold text-sm">{post.username}</p>
                <p className="text-xs text-gray-500">{post.handle}</p>
            </div>
        </div>
        <div className="relative">
            <img src={post.imageUrl} alt="Social media post" className="w-full object-cover"/>
            {post.platform === 'YouTube' && (
                <a href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <PlayIcon className="h-16 w-16 text-white/80"/>
                </a>
            )}
        </div>
        <div className="p-4 text-sm text-gray-700">
            <p>{post.caption}</p>
        </div>
    </div>
);


const EventsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = events.filter(e => e.type === 'Upcoming');
  const pastEvents = events.filter(e => e.type === 'Past');

  return (
    <section id="events" className="py-20 bg-mitsna-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-mitsna-dark">Events & Updates</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Stay connected with our latest activities, discussions, and community engagements.</p>
        </div>
        
        <div className="mb-8 flex justify-center border-b border-gray-300">
          <button onClick={() => setActiveTab('upcoming')} className={`px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'upcoming' ? 'text-mitsna-blue border-b-2 border-mitsna-blue' : 'text-gray-500'}`}>
            Upcoming
          </button>
          <button onClick={() => setActiveTab('past')} className={`px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'past' ? 'text-mitsna-blue border-b-2 border-mitsna-blue' : 'text-gray-500'}`}>
            Past
          </button>
        </div>

        <div>
          {activeTab === 'upcoming' && (
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => <EventCard key={index} event={event} />)}
            </div>
          )}
          {activeTab === 'past' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => <EventCard key={index} event={event} />)}
            </div>
          )}
        </div>

        <div className="mt-20">
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-mitsna-dark">Follow Our Journey</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {socialPosts.map((post, index) => <SocialCard key={index} post={post} />)}
            </div>
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
