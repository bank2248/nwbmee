import React, { useEffect } from 'react';
import { useAudio, PlaylistItem } from '../contexts/AudioContext';
import CloseIcon from './icons/CloseIcon';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import TrashIcon from './icons/TrashIcon';
import VolumeUpIcon from './icons/VolumeUpIcon';
import ListBulletIcon from './icons/ListBulletIcon';
import { PLAYER_BAR_HEIGHT_PX } from './AudioPlayerBar'; // Import player bar height

interface PlaylistQueueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QueueItem: React.FC<{
  item: PlaylistItem;
  index: number;
  isCurrent: boolean;
  isPlaying: boolean;
  isLoading: boolean;
  onPlay: (index: number) => void;
  onRemove: (index: number) => void;
  onTogglePlayPause: () => void;
}> = ({ item, index, isCurrent, isPlaying, isLoading, onPlay, onRemove, onTogglePlayPause }) => {
  const { track, album } = item;

  const handlePlayClick = () => {
    if (isCurrent) {
      onTogglePlayPause();
    } else {
      onPlay(index);
    }
  };

  return (
    <li 
      className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-150 group ${isCurrent ? 'bg-[var(--bg-element)]' : 'hover:bg-[var(--bg-subtle)]'}`}
      aria-current={isCurrent ? "true" : "false"}
    >
      <div className="flex items-center space-x-3 min-w-0 flex-grow">
        <span className={`text-sm w-5 text-center ${isCurrent && isPlaying ? 'text-[var(--color-primary)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]'}`}>
          {isCurrent && isPlaying ? <VolumeUpIcon className="w-4 h-4 inline-block" /> : `${index + 1}.`}
        </span>
        <img src={album.coverArtUrl} alt={album.title} className="w-10 h-10 rounded object-cover flex-shrink-0" />
        <div className="min-w-0">
          <p className={`text-sm font-medium truncate ${isCurrent ? 'text-[var(--text-default)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-default)]'}`} title={track.title}>
            {track.title}
          </p>
          <p className="text-xs text-[var(--text-muted)] truncate group-hover:text-[var(--text-secondary)]" title={album.artist}>
            {album.artist}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
        <button
          onClick={handlePlayClick}
          className={`p-1.5 rounded-full transition-colors ${isCurrent ? 'text-[var(--color-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--color-primary)]'} hover:bg-[var(--bg-element)] disabled:opacity-50`}
          title={isCurrent && isPlaying ? "Pause" : "Play"}
          aria-label={isCurrent && isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
          disabled={isLoading && isCurrent}
        >
          {isLoading && isCurrent ? (
            <div className="w-5 h-5 animate-spin rounded-full border-2 border-[var(--text-muted)] border-t-transparent"></div>
          ) : isCurrent && isPlaying ? (
            <PauseIcon className="w-5 h-5" />
          ) : (
            <PlayIcon className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={() => onRemove(index)}
          className="p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-element)] transition-colors"
          title="Remove from queue"
          aria-label={`Remove ${track.title} from queue`}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

const PlaylistQueueModal: React.FC<PlaylistQueueModalProps> = ({ isOpen, onClose }) => {
  const { 
    playlist, 
    currentPlaylistIndex, 
    playTrackAtIndex, 
    removeFromQueue, 
    isPlaying,
    isLoadingTrack,
    togglePlayPause
  } = useAudio();

  const [isModalContentVisible, setIsModalContentVisible] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const fadeInTimer = setTimeout(() => setIsModalContentVisible(true), 50); // Short delay for transition
      return () => {
        clearTimeout(fadeInTimer);
        // setIsModalContentVisible(false); // Reset on close if isOpen changes, handled by main effect
        document.body.style.overflow = '';
      };
    } else {
       setIsModalContentVisible(false); // Ensure visibility state is false when modal is not open
       document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);


  if (!isOpen) return null;
  
  const popupBaseClasses = "fixed z-[60] bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl shadow-[0_10px_35px_var(--shadow-color-strong)] glass-border rounded-2xl w-96 max-h-[50vh] flex flex-col transform-origin-bottom-right";
  
  const transitionClasses = "transition-all duration-300 ease-out";
  const animationStateClasses = isModalContentVisible
    ? "opacity-100 scale-100 translate-x-0 translate-y-0"
    : "opacity-0 scale-95 translate-x-4 translate-y-4"; // Slide in from bottom-right

  const dynamicPositionStyle = {
    bottom: `calc(${PLAYER_BAR_HEIGHT_PX}px + 1rem)`,
    right: '1rem',
  };

  return (
    <div
      className={`${popupBaseClasses} ${transitionClasses} ${animationStateClasses}`}
      style={dynamicPositionStyle}
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing (if a higher-level close was ever added)
      role="dialog"
      aria-modal="true"
      aria-labelledby="playlist-queue-modal-title"
    >
        <header className="p-4 md:p-5 border-b border-[var(--border-subtle)] flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 id="playlist-queue-modal-title" className="text-xl font-semibold text-[var(--text-default)]">
              Playing Queue
            </h2>
            <button
              onClick={onClose}
              className="text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5 bg-[var(--bg-surface-glass)] hover:bg-[var(--bg-element)] rounded-full"
              aria-label="Close queue"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="p-2 md:p-4 flex-grow overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
          {playlist.length > 0 ? (
            <ul className="space-y-1.5">
              {playlist.map((item, index) => (
                <QueueItem
                  key={`${item.track.id}-${index}`} 
                  item={item}
                  index={index}
                  isCurrent={index === currentPlaylistIndex}
                  isPlaying={isPlaying}
                  isLoading={isLoadingTrack}
                  onPlay={playTrackAtIndex}
                  onRemove={removeFromQueue}
                  onTogglePlayPause={togglePlayPause}
                />
              ))}
            </ul>
          ) : (
            <div className="text-center py-10 text-[var(--text-muted)]">
              <ListBulletIcon className="w-12 h-12 mx-auto mb-3 text-[var(--text-subtle)]" />
              <p className="text-lg font-medium text-[var(--text-secondary)]">The queue is empty.</p>
              <p className="text-sm">Add some music to start listening!</p>
            </div>
          )}
        </div>
        {/* Footer with close button removed */}
    </div>
  );
};

export default PlaylistQueueModal;