import React from 'react';
import { Album } from '../types';
import CloseIcon from './icons/CloseIcon';

const VideoPlayer: React.FC<{ source: 'youtube' | 'vimeo'; videoId: string }> = ({ source, videoId }) => {
  const embedUrl = source === 'youtube'
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`
    : `https://player.vimeo.com/video/${videoId}?autoplay=1`;

  return (
    <div className="aspect-video w-full bg-[var(--bg-element)]">
      <iframe
        src={embedUrl}
        title="Video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};


const AlbumDetailView: React.FC<{ album: Album; onClose: () => void; isInline?: boolean; }> = ({ album, onClose, isInline = false }) => {
  const uniqueTitleId = isInline ? `album-detail-title-inline-${album.id}` : `album-detail-title-modal-${album.id}`;
  
  const viewBackground = isInline 
    ? 'bg-transparent' 
    : 'bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl shadow-[0_10px_35px_var(--shadow-color-strong)] glass-border';
  
  return (
    <div className={`flex flex-col ${viewBackground} ${isInline ? 'h-full rounded-[14px]' : 'max-h-[90vh] w-full max-w-2xl rounded-2xl'}`}>
      
      <div className={`flex-shrink-0 relative ${isInline ? 'rounded-t-[14px]' : 'rounded-t-2xl'} overflow-hidden`}>
        <VideoPlayer source={album.video.source} videoId={album.video.videoId} />
        
        {isInline && (
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-[var(--gray-light-0)] hover:text-[var(--gray-light-0)] bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.4)] hover:bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.6)] backdrop-blur-sm p-1.5 rounded-full transition-all duration-200 z-10 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-transparent focus:ring-[var(--gray-light-0)]"
              aria-label="Close details"
              title="Close details"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
        )}
      </div>

      {!isInline && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors z-20 p-2 bg-[var(--bg-surface-glass)] backdrop-blur-sm hover:bg-[var(--bg-element)] rounded-full lg:hidden"
          aria-label="Close details"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      )}
      
      <div className="p-4 md:p-6 flex-grow overflow-y-auto text-[var(--text-secondary)]" style={{ scrollbarGutter: 'stable' }}>
          <h2 id={!isInline ? uniqueTitleId : undefined} className={`font-bold text-[var(--text-default)] leading-tight break-words ${isInline ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>{album.title}</h2>
          <p className={`mt-1 text-[var(--text-secondary)] ${isInline ? 'text-md' : 'text-lg '}`}>{album.artist} &bull; {album.releaseYear}</p>
          <p className="mt-6 leading-relaxed text-sm md:text-base">{album.description}</p>
      </div>
    </div>
  );
};

export default AlbumDetailView;
