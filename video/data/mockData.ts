import { Album } from '../types';

export const mockAlbums: Album[] = [
  {
    id: 'album1',
    title: 'Echoes of Tomorrow',
    artist: 'Synth Weaver',
    releaseYear: 2023,
    coverArtUrl: 'https://picsum.photos/seed/album1/600/600',
    description: 'A journey through futuristic soundscapes and digital dreams, exploring themes of hope and technological marvel. This is the main title video.',
    video: {
      source: 'youtube',
      videoId: 'd_4-t5rY4uA'
    },
    tracks: [
      { id: 't1-1', title: 'Digital Dawn', duration: '4:15', audioSrc: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3' },
      { id: 't1-2', title: 'Chrome Horizon', duration: '3:50', audioSrc: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3' },
      { id: 't1-3', title: 'Neon Pulse', duration: '5:02', audioSrc: 'https://storage.googleapis.com/media-session/big-buck-bunny/intro.mp3' },
    ]
  },
  {
    id: 'album2',
    title: 'Midnight Grooves',
    artist: 'Velvet Soul',
    releaseYear: 2022,
    coverArtUrl: 'https://picsum.photos/seed/album2/600/600',
    description: 'Smooth rhythms and soulful melodies perfect for late-night listening and contemplative moments. Now presented as a feature video.',
    video: {
      source: 'vimeo',
      videoId: '59777392' // Big Buck Bunny
    },
    tracks: [
        { id: 't2-1', title: 'Velvet Moon', duration: '3:30', audioSrc: 'https://storage.googleapis.com/media-session/elephants-dream/proog.mp3' },
        { id: 't2-2', title: 'City Lights', duration: '4:05', audioSrc: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3' },
    ]
  },
  {
    id: 'album3',
    title: 'Acoustic Horizons',
    artist: 'Wanderer\'s Tune',
    releaseYear: 2024,
    coverArtUrl: 'https://picsum.photos/seed/album3/600/600',
    description: 'An intimate collection of acoustic pieces, now visualized in this stunning video that paints landscapes of tranquility and introspection.',
    video: {
      source: 'youtube',
      videoId: 'LXb3EKWsInQ' // Sintel
    },
    tracks: [
        { id: 't3-1', title: 'Morning Sun', duration: '2:55', audioSrc: 'https://storage.googleapis.com/media-session/big-buck-bunny/intro.mp3' },
        { id: 't3-2', title: 'Open Fields', duration: '3:45', audioSrc: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3' },
        { id: 't3-3', title: 'Fireside Song', duration: '4:10', audioSrc: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3' },
    ]
  },
  {
    id: 'album4',
    title: 'Rhythmic Pulse',
    artist: 'Beat Alchemist',
    releaseYear: 2023,
    coverArtUrl: 'https://picsum.photos/seed/album4/600/600',
    description: 'High-energy electronic beats and intricate rhythms designed to move your body and mind, captured in this dynamic video.',
    video: {
      source: 'vimeo',
      videoId: '148751763' // Tears of Steel
    },
    tracks: [
        { id: 't4-1', title: 'Kinetic Energy', duration: '3:20', audioSrc: 'https://storage.googleapis.com/media-session/elephants-dream/proog.mp3' },
        { id: 't4-2', title: 'Frequency Shift', duration: '4:00', audioSrc: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3' },
    ]
  },
   {
    id: 'album5',
    title: 'Celestial Harmonies',
    artist: 'Nova Sound',
    releaseYear: 2021,
    coverArtUrl: 'https://picsum.photos/seed/album5/600/600',
    description: 'Ambient textures and ethereal melodies that transport the listener to distant galaxies and cosmic wonders, visualized.',
    video: {
      source: 'youtube',
      videoId: 'zCLOJ9j1k20' 
    },
    tracks: [
        { id: 't5-1', title: 'Stardust', duration: '5:10', audioSrc: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3' },
        { id: 't5-2', title: 'Nebula', duration: '6:25', audioSrc: 'https://storage.googleapis.com/media-session/big-buck-bunny/intro.mp3' },
    ]
  },
  {
    id: 'album6',
    title: 'Urban Canvas',
    artist: 'Graffiti Maestro',
    releaseYear: 2024,
    coverArtUrl: 'https://picsum.photos/seed/album6/600/600',
    description: 'A vibrant mix of hip-hop beats, jazz samples, and street sounds, capturing the essence of city life in this visual story.',
    video: {
      source: 'vimeo',
      videoId: '851968961' // Example
    },
    tracks: [
        { id: 't6-1', title: 'Concrete Jungle', duration: '3:15', audioSrc: 'https://storage.googleapis.com/media-session/elephants-dream/proog.mp3' },
        { id: 't6-2', title: 'Night Ride', duration: '2:50', audioSrc: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3' },
        { id: 't6-3', title: 'Sidewalk Symphony', duration: '4:00', audioSrc: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3' },
    ]
  },
];
