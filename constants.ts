
import { Member, Program, Event, SocialPost } from './types';

export const members: Member[] = [
  { name: 'Dr. Jane Doe', role: 'Executive Director', imageUrl: 'https://picsum.photos/seed/member1/400/400' },
  { name: 'John Smith', role: 'Program Manager', imageUrl: 'https://picsum.photos/seed/member2/400/400' },
  { name: 'Priya Sharma', role: 'Community Outreach Coordinator', imageUrl: 'https://picsum.photos/seed/member3/400/400' },
  { name: 'Amit Singh', role: 'Advocacy Lead', imageUrl: 'https://picsum.photos/seed/member4/400/400' },
  { name: 'Anjali Verma', role: 'Education Specialist', imageUrl: 'https://picsum.photos/seed/member5/400/400' },
  { name: 'Rajesh Kumar', role: 'Volunteer Coordinator', imageUrl: 'https://picsum.photos/seed/member6/400/400' },
];

export const programs: Program[] = [
  {
    title: 'Teach FOR MANIPUR',
    description: 'An initiative providing free, accessible, and quality education to students in Manipur. We connect passionate educators with eager learners to bridge educational gaps.',
    actionText: 'Become a Mentor',
    actionLink: '#join-us'
  },
  {
    title: 'Rebuild Manipur Report 2023-24',
    description: 'A comprehensive summary of MitSna’s educational, relief, and advocacy efforts during a critical time. The report highlights our impact and future goals.',
    actionText: 'Download Report',
    actionLink: '#'
  }
];

export const events: Event[] = [
  {
    type: 'Upcoming',
    title: 'Annual Education Summit 2024',
    date: 'December 15, 2024',
    description: 'Join us for a day of insightful discussions on the future of education in Manipur, featuring key educators and policymakers.',
    imageUrl: 'https://picsum.photos/seed/event1/600/400'
  },
  {
    type: 'Upcoming',
    title: 'Workshop on Digital Literacy',
    date: 'November 22, 2024',
    description: 'A hands-on workshop for students to develop essential digital skills for the modern world.',
    imageUrl: 'https://picsum.photos/seed/event2/600/400'
  },
  {
    type: 'Past',
    title: 'Mental Health and its Importance',
    date: 'October 5, 2024',
    description: 'A vital conversation about mental wellness for students and educators in our community.',
    speaker: 'Dr. Prabin Kharibam',
    imageUrl: 'https://picsum.photos/seed/event3/600/400'
  },
  {
    type: 'Past',
    title: 'Fundraising Gala for School Supplies',
    date: 'September 1, 2024',
    description: 'A successful event that raised funds to provide essential learning materials to over 500 students.',
    imageUrl: 'https://picsum.photos/seed/event4/600/400'
  }
];

export const socialPosts: SocialPost[] = [
    {
        platform: 'Instagram',
        username: 'MitSna Foundation',
        handle: '@mitsna.foundation',
        caption: 'Our "Teach FOR MANIPUR" volunteers are making a huge impact! Here’s a glimpse into a recent classroom session. #EducationForAll #Manipur #MitSna',
        imageUrl: 'https://picsum.photos/seed/insta1/500/500',
    },
    {
        platform: 'YouTube',
        username: 'MitSna Foundation',
        handle: 'MitSnaOfficial',
        caption: 'Watch our full Rebuild Manipur 2023-24 report summary. See the progress we\'ve made together!',
        imageUrl: 'https://picsum.photos/seed/yt1/800/450',
        videoUrl: '#',
    },
     {
        platform: 'Instagram',
        username: 'MitSna Foundation',
        handle: '@mitsna.foundation',
        caption: 'Thank you to Dr. Prabin Kharibam for an enlightening session on mental health. The well-being of our students is a top priority. #MentalHealth #StudentWellness',
        imageUrl: 'https://picsum.photos/seed/insta2/500/500',
    },
];
