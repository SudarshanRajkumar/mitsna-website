
import React from 'react';

interface IconProps {
  className?: string;
}

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372.847.038 1.12.049 3.297.049 2.172 0 2.444-.01 3.297-.049.852-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.718-.891.923-1.417.198-.51.333-1.09.372-1.942.038-.847.049-1.12.049-3.297s-.01-2.444-.049-3.297c-.04-.852-.174-1.433-.372-1.942a3.916 3.916 0 00-.923-1.417A3.916 3.916 0 0013.24.42c-.51-.198-1.09-.333-1.942-.372C10.444.01 10.172 0 8 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.486.039.843.047 1.096.047 3.232s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485-.145.373-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276-.373-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.275-1.485C1.45 10.39 1.442 10.137 1.442 8s.007-2.39.047-3.232c.035-.78.166-1.204.275-1.486.145-.373.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.275.843-.039 1.096-.047 3.232-.047zM8 3.882c-2.277 0-4.118 1.84-4.118 4.118S5.723 12.118 8 12.118 12.118 10.277 12.118 8 10.277 3.882 8 3.882zm0 6.792c-1.487 0-2.69-1.203-2.69-2.69s1.203-2.69 2.69-2.69 2.69 1.203 2.69 2.69-1.203 2.69-2.69 2.69zm6.18-6.202c-.529 0-.96.43-.96.96s.43.96.96.96.96-.43.96-.96-.43-.96-.96-.96z" />
  </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.188-.01 1.043-.074 1.957l-.008.104-.022.26-.01.104c-.048.519-.119 1.022-.22 1.402a2.01 2.01 0 01-1.415 1.42c-1.123.302-5.288.332-6.11.335h-.089c-.822-.003-4.987-.033-6.11-.335a2.01 2.01 0 01-1.415-1.42c-.101-.38-.172-.883-.22-1.402l-.01-.104-.022-.26-.008-.104C.01 8.548 0 7.693 0 7.512v-.075c.001-.188.01-1.043.074-1.957l.008-.104.022-.26.01-.104c.048-.519.119-1.022.22-1.402a2.01 2.01 0 011.415-1.42c1.123-.302 5.288-.332 6.11-.335zM6.4 5.209v5.582l4.157-2.79-4.157-2.792z" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.596 0 8.049c0 4.053 2.946 7.425 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.804-.526 6.75-3.898 6.75-7.951z" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
    </svg>
);

export const MitSnaLogo: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="35" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="800" fill="currentColor">
            MitSna
        </text>
        <circle cx="125" cy="15" r="5" fill="#4A90E2" />
    </svg>
);
