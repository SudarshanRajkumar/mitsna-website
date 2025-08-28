
export interface Member {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Program {
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
}

export interface Event {
  type: 'Upcoming' | 'Past';
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  speaker?: string;
}

export interface SocialPost {
    platform: 'Instagram' | 'YouTube';
    username: string;
    handle: string;
    caption: string;
    imageUrl: string;
    videoUrl?: string;
}
