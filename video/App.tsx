import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Album } from './types';
import { mockAlbums } from './data/mockData';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AlbumGrid from './components/AlbumGrid';
import AlbumDetailModal from './components/AlbumDetailModal';
import AlbumDetailView from './components/AlbumDetailView';

const App: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setAlbums(mockAlbums);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSelectAlbum = useCallback((album: Album) => {
    if (isLargeScreen && selectedAlbum?.id === album.id) {
      setSelectedAlbum(null); 
    } else {
      setSelectedAlbum(album);
    }
  }, [isLargeScreen, selectedAlbum]);

  const handleCloseModal = useCallback(() => {
    setSelectedAlbum(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    if (selectedAlbum) { 
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedAlbum, handleCloseModal]);

   useEffect(() => {
    if (selectedAlbum && !isLargeScreen) {
        document.body.style.overflow = 'hidden';
    } else {
       document.body.style.overflow = '';
    }
  }, [selectedAlbum, isLargeScreen]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div 
        className="flex-grow container mx-auto px-6 pb-8"
      >
        <div className="lg:flex lg:space-x-8">
          <main className={`flex-grow ${isLargeScreen && selectedAlbum ? 'lg:w-2/3' : 'w-full'}`}>
            {isLoading ? (
              <div className="flex flex-col justify-center items-center h-64 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl p-8 glass-border shadow-[0_8px_30px_var(--shadow-color)]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[var(--color-primary)]"></div>
                <p className="ml-4 text-xl text-[var(--text-default)] mt-4">Loading Albums...</p>
              </div>
            ) : albums.length > 0 ? (
              <AlbumGrid 
                albums={albums} 
                onSelectAlbum={handleSelectAlbum}
              />
            ) : (
              <div className="text-center py-10 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl p-8 glass-border shadow-[0_8px_30px_var(--shadow-color)] text-[var(--text-muted)]">
                <h2 className="text-2xl font-semibold mb-2 text-[var(--text-default)]">No Albums Available</h2>
                <p>There are currently no albums to display.</p>
              </div>
            )}
          </main>
          
          {isLargeScreen && selectedAlbum && (
            <aside className="lg:w-1/3 mt-6 lg:mt-0 sticky top-8 max-h-[calc(100vh_-_8rem)] overflow-y-auto rounded-2xl p-px glass-border bg-transparent shadow-[0_8px_30px_var(--shadow-color-strong)]">
               <div className="bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl rounded-[15px] h-full"> 
                <AlbumDetailView album={selectedAlbum} onClose={handleCloseModal} isInline={true} />
              </div>
            </aside>
          )}
           {isLargeScreen && !selectedAlbum && ( 
             <aside className="hidden lg:block lg:w-1/3 mt-6 lg:mt-0 p-8 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl shadow-[0_8px_30px_var(--shadow-color)] glass-border">
                <div className="flex flex-col items-center justify-center h-full border-2 border-dashed border-[var(--border-muted)] rounded-lg p-6 text-[var(--text-muted)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[var(--text-subtle)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59,13.41L14.17,12L15.59,10.59L17,12M13,17.25V21H11V17.25H7.5L12,12.75L16.5,17.25H13M12,3L1.75,8.25V15.75H4V10.5L12,5.25L20,10.5V15.75H22.25V8.25L12,3Z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-[var(--text-default)]">Video Details</h3>
                    <p className="mt-1 text-sm">Select an item from the list to see the video here.</p>
                </div>
            </aside>
          )}
        </div>
      </div>
      <Footer />
      {!isLargeScreen && selectedAlbum && (
        <AlbumDetailModal album={selectedAlbum} onClose={handleCloseModal} />
      )}
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <App />
  );
};

export default AppWrapper;
