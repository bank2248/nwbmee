import React from 'react';
import { Album } from '../types';
import { useAudio } from '../contexts/AudioContext';
import PlayIcon from './icons/PlayIcon';
import PlusIcon from './icons/PlusIcon';

interface AlbumControlsProps {
  album: Album;
}

const AlbumControls: React.FC<AlbumControlsProps> = ({ album }) => {
  const { playAlbumNow, addToQueue } = useAudio();

  const handlePlayAlbum = () => {
    if (album.tracks && album.tracks.length > 0) {
      playAlbumNow(album, 0);
    }
  };

  const handleAddToQueue = () => {
    if (album.tracks && album.tracks.length > 0) {
      const playlistItems = album.tracks.map(track => ({ track, album }));
      addToQueue(playlistItems);
    }
  };

  if (!album.tracks || album.tracks.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 my-6">
      <button
        onClick={handlePlayAlbum}
        className="flex-1 flex items-center justify-center space-x-2 bg-[var(--color-primary)] text-[var(--text-on-accent)] font-semibold px-4 py-3 rounded-lg shadow-md hover:bg-[var(--color-primary-hover)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-surface-glass-濃)] focus:ring-[var(--color-primary)]"
        aria-label={`Play all tracks from ${album.title}`}
      >
        <PlayIcon className="w-5 h-5" />
        <span>Play Album</span>
      </button>
      <button
        onClick={handleAddToQueue}
        className="flex-1 flex items-center justify-center space-x-2 bg-[var(--bg-element)] text-[var(--text-secondary)] font-semibold px-4 py-3 rounded-lg shadow-sm hover:bg-[var(--bg-subtle)] hover:text-[var(--text-default)] border border-[var(--border-subtle)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-surface-glass-濃)] focus:ring-[var(--ring-color-focus)]"
        aria-label={`Add all tracks from ${album.title} to the queue`}
      >
        <PlusIcon className="w-5 h-5" />
        <span>Add to Queue</span>
      </button>
    </div>
  );
};

export default AlbumControls;