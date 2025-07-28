

import React from 'react';
import { Album } from '../types';
import AlbumCard from './AlbumCard';

interface AlbumGridProps {
  albums: Album[];
  onSelectAlbum: (album: Album) => void;
}

const AlbumGrid: React.FC<AlbumGridProps> = ({ 
  albums, 
  onSelectAlbum, 
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"> {/* Adjusted lg and xl columns for when sidebar might be present, and responsive gap */}
      {albums.map((album) => (
        <AlbumCard 
          key={album.id} 
          album={album} 
          onSelectAlbum={onSelectAlbum}
        />
      ))}
    </div>
  );
};

export default AlbumGrid;
