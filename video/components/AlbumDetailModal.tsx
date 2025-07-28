import React, { useEffect, useState } from 'react';
import { Album } from '../types';
import AlbumDetailView from './AlbumDetailView'; 

interface AlbumDetailModalProps {
  album: Album | null;
  onClose: () => void;
}

const AlbumDetailModal: React.FC<AlbumDetailModalProps> = ({ album, onClose }) => {
  const [isModalContentVisible, setIsModalContentVisible] = useState(false);

  useEffect(() => {
    if (album) {
      const fadeInTimer = setTimeout(() => {
        setIsModalContentVisible(true);
      }, 50); 
      return () => {
        clearTimeout(fadeInTimer);
        setIsModalContentVisible(false); 
      };
    } else {
      setIsModalContentVisible(false);
    }
  }, [album]);

  if (!album) return null;

  const modalContainerBaseClasses = "fixed inset-0 bg-[var(--bg-overlay)] backdrop-blur-sm flex items-center justify-center p-4 z-[100] overflow-y-auto lg:hidden";
  
  const transitionClasses = "transition-all duration-300 ease-out";
  const animationStateClasses = isModalContentVisible
    ? "opacity-100 scale-100 translate-y-0"
    : "opacity-0 scale-95 translate-y-5";

  return (
    <div 
      className={`${modalContainerBaseClasses}`}
      onClick={onClose} 
      role="dialog"
      aria-modal="true"
      aria-labelledby={`album-detail-title-modal-${album.id}`}
    >
      <div 
        className={`${transitionClasses} ${animationStateClasses} w-full max-w-2xl`} 
        onClick={(e) => e.stopPropagation()} 
        role="document"
      >
        <AlbumDetailView album={album} onClose={onClose} /> 
      </div>
    </div>
  );
};

export default AlbumDetailModal;