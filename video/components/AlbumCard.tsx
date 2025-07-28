import React from 'react';
import { Album } from '../types';

interface AlbumCardProps {
  album: Album;
  onSelectAlbum: (album: Album) => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ 
  album, 
  onSelectAlbum
}) => {
  return (
    <div 
      className="bg-[var(--bg-surface-glass-濃)] backdrop-blur-md rounded-2xl shadow-[0_8px_30px_var(--shadow-color)] overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_var(--shadow-color-strong)] group glass-border"
      onClick={() => onSelectAlbum(album)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelectAlbum(album)}
      aria-label={`View details for ${album.title}`}
    >
      <div className="relative aspect-square">
        <img 
          src={album.coverArtUrl} 
          alt={`${album.title} cover art`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[var(--text-default)] truncate" title={album.title}>{album.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] mt-1 truncate" title={album.artist}>{album.artist}</p>
        <p className="text-xs text-[var(--text-muted)] mt-1">{album.releaseYear}</p>
      </div>
    </div>
  );
};

export default AlbumCard;