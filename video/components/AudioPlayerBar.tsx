import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import NextTrackIcon from './icons/NextTrackIcon';
import PreviousTrackIcon from './icons/PreviousTrackIcon';
import VolumeUpIcon from './icons/VolumeUpIcon';
import VolumeOffIcon from './icons/VolumeOffIcon';
import ListBulletIcon from './icons/ListBulletIcon'; // New Icon

const formatTime = (timeInSeconds: number): string => {
  if (isNaN(timeInSeconds) || timeInSeconds === Infinity) {
    return '0:00';
  }
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const PLAYER_BAR_HEIGHT_PX = 80; 
const PLAYER_BAR_HEIGHT_CLASS = `h-[${PLAYER_BAR_HEIGHT_PX}px]`; // Tailwind JIT friendly


interface AudioPlayerBarProps {
  onOpenPlaylistQueue: () => void;
}

const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({ onOpenPlaylistQueue }) => {
  const {
    currentTrack,
    currentAlbum,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isLoadingTrack,
    playlist,
    currentPlaylistIndex,
    togglePlayPause,
    seek,
    setVolume,
    playNextTrack,
    playPreviousTrack,
  } = useAudio();
  
  const [isVolumeSliderVisible, setIsVolumeSliderVisible] = useState(false);
  const volumeControlRef = useRef<HTMLDivElement>(null);

  const handleProgressChange = (event: ChangeEvent<HTMLInputElement>) => {
    seek(parseFloat(event.target.value));
  };

  const handleVolumeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
  };

   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (volumeControlRef.current && !volumeControlRef.current.contains(event.target as Node)) {
        setIsVolumeSliderVisible(false);
      }
    };
    if (isVolumeSliderVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVolumeSliderVisible]);

  const canPlayPrevious = currentPlaylistIndex > 0;
  const canPlayNext = currentPlaylistIndex !== -1 && currentPlaylistIndex < playlist.length - 1;

  if (!currentTrack || !currentAlbum) { // Show placeholder if no track is loaded (e.g. initial state or empty queue)
    return (
        <div className={`${PLAYER_BAR_HEIGHT_CLASS} fixed bottom-0 left-0 right-0 bg-[var(--bg-surface-glass-濃)] backdrop-blur-lg shadow-[0_-4px_15px_var(--shadow-color)] z-50 flex items-center justify-between px-4 text-[var(--text-muted)] glass-border`}>
            <span>No track selected.</span>
            <button 
                onClick={onOpenPlaylistQueue} 
                title="View Queue" 
                className="text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5"
            >
                <ListBulletIcon className="w-5 h-5" />
            </button>
        </div>
    );
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const progressBarBackground = `linear-gradient(to right, var(--range-thumb-bg) ${progressPercent}%, var(--range-track-bg) ${progressPercent}%)`;


  return (
    <div 
        className={`${PLAYER_BAR_HEIGHT_CLASS} fixed bottom-0 left-0 right-0 bg-[var(--bg-surface-glass-濃)] backdrop-blur-lg shadow-[0_-4px_15px_var(--shadow-color)] z-50 px-4 flex items-center justify-between glass-border`}
        aria-label="Audio Player Controls"
    >
      <div className="flex items-center space-x-3 w-1/3 min-w-0">
        <img 
          src={currentAlbum.coverArtUrl} 
          alt={`${currentAlbum.title} cover`} 
          className="w-12 h-12 rounded-md object-cover shadow-md" 
        />
        <div className="min-w-0">
          <p className="text-sm font-medium truncate text-[var(--text-default)]" title={currentTrack.title}>{currentTrack.title}</p>
          <p className="text-xs text-[var(--text-muted)] truncate" title={currentAlbum.artist}>{currentAlbum.artist}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-1/3 mx-4">
        <div className="flex items-center space-x-4 mb-1.5">
          <button 
            onClick={playPreviousTrack} 
            title="Previous Track" 
            className="text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-1" 
            disabled={isLoadingTrack || !canPlayPrevious}
          >
            <PreviousTrackIcon className="w-5 h-5" />
          </button>
          <button 
            onClick={togglePlayPause} 
            title={isPlaying ? 'Pause' : 'Play'} 
            className="p-2.5 bg-[var(--bg-accent)] hover:bg-[var(--color-primary-hover)] rounded-full text-[var(--text-on-accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            disabled={isLoadingTrack && !isPlaying} // Allow pause even if loading for some reason
          >
            {isLoadingTrack && !isPlaying ? ( // Show loader only when trying to play and loading
                 <div className="w-6 h-6 animate-spin rounded-full border-2 border-[var(--text-on-accent)] border-t-transparent"></div>
            ) : isPlaying ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6" />
            )}
          </button>
          <button 
            onClick={playNextTrack} 
            title="Next Track" 
            className="text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-1" 
            disabled={isLoadingTrack || !canPlayNext}
          >
            <NextTrackIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center w-full max-w-xs space-x-2">
          <span className="text-xs text-[var(--text-muted)] w-10 text-right tabular-nums">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime || 0}
            onChange={handleProgressChange}
            className="w-full h-2 appearance-none cursor-pointer focus:outline-none"
            title="Seek"
            disabled={isLoadingTrack || duration === 0}
            style={{ background: progressBarBackground }} 
          />
          <span className="text-xs text-[var(--text-muted)] w-10 text-left tabular-nums">{formatTime(duration)}</span>
        </div>
      </div>

      <div ref={volumeControlRef} className="flex items-center justify-end space-x-2 w-1/3 relative">
         <div 
            className={`absolute bottom-full right-0 mb-3 p-3 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-lg shadow-[0_4px_15px_var(--shadow-color)] transition-all duration-200 ease-out origin-bottom-right glass-border ${isVolumeSliderVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
          >
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeInputChange}
                className="w-24 h-2 appearance-none cursor-pointer focus:outline-none"
                title="Volume"
                style={{ background: `linear-gradient(to right, var(--range-thumb-bg) ${isMuted? 0 : volume*100}%, var(--range-track-bg) ${isMuted? 0 : volume*100}%)` }}
            />
        </div>
         <button 
            onClick={() => setIsVolumeSliderVisible(!isVolumeSliderVisible)} 
            onMouseEnter={() => setIsVolumeSliderVisible(true)} 
            className="text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5"
            aria-label="Toggle Volume Slider"
            title="Volume"
        >
            {isMuted || volume === 0 ? <VolumeOffIcon className="w-5 h-5" /> : <VolumeUpIcon className="w-5 h-5" />}
        </button>
         <button 
            onClick={onOpenPlaylistQueue} 
            title="View Queue" 
            className="text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5"
            aria-label="View Playing Queue"
        >
            <ListBulletIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayerBar;