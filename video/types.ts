export interface Track {
  id: string;
  title: string;
  duration: string; // e.g., "3:45"
  audioSrc: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  releaseYear: number;
  coverArtUrl: string;
  description: string;
  video: {
    source: 'youtube' | 'vimeo';
    videoId: string;
  };
  tracks?: Track[];
}
