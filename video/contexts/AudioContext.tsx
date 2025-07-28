
import React, { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from 'react';
import { Track, Album } from '../types';

export interface PlaylistItem {
  track: Track;
  album: Album;
}

interface AudioContextType {
  currentTrack: Track | null;
  currentAlbum: Album | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isLoadingTrack: boolean;

  playlist: PlaylistItem[];
  currentPlaylistIndex: number;

  playSingleTrackNow: (track: Track, album: Album) => void;
  playAlbumNow: (album: Album, startingTrackIndex?: number) => void;
  addToQueue: (items: PlaylistItem[]) => void;
  removeFromQueue: (playlistIndex: number) => void;
  playTrackAtIndex: (playlistIndex: number) => void;
  
  togglePlayPause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  playNextTrack: () => void; // User-initiated next
  playPreviousTrack: () => void; // User-initiated prev
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [currentTrack, setCurrentTrackState] = useState<Track | null>(null);
  const [currentAlbum, setCurrentAlbumState] = useState<Album | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(0.75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLoadingTrack, setIsLoadingTrack] = useState<boolean>(false);
  
  const [playlist, setPlaylistState] = useState<PlaylistItem[]>([]);
  const [currentPlaylistIndex, setCurrentPlaylistIndexState] = useState<number>(-1);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastVolumeRef = useRef<number>(0.75); // Store last unmuted volume

  const _playTrackFromPlaylistAtIndex = useCallback((index: number, newPlaylist?: PlaylistItem[]) => {
    const targetPlaylist = newPlaylist || playlist;
    const audio = audioRef.current;

    if (audio && targetPlaylist.length > 0 && index >= 0 && index < targetPlaylist.length) {
      const { track, album } = targetPlaylist[index];
      
      setIsLoadingTrack(true);
      setCurrentTrackState(track);
      setCurrentAlbumState(album);
      setCurrentPlaylistIndexState(index);
      
      if (audio.src !== track.audioSrc) {
        audio.src = track.audioSrc;
        audio.load(); 
      }
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          if (error.name === 'AbortError') {
            console.log("Playback aborted (e.g., by new track load or rapid navigation). This is usually normal.");
          } else {
            console.error("Error attempting to play track:", error);
            setIsLoadingTrack(false); 
            setIsPlaying(false); 
          }
        });
      }
    } else { 
      if (audio) {
        if (!audio.paused) {
          audio.pause();
        }
         // Clear src only if it was set and we are stopping playback entirely
        if (audio.src && (!targetPlaylist || targetPlaylist.length === 0)) {
            audio.removeAttribute('src'); 
            audio.load(); // Reset
        }
      }
      setCurrentTrackState(null);
      setCurrentAlbumState(null);
      setCurrentPlaylistIndexState(-1);
      setIsPlaying(false);
      setIsLoadingTrack(false);
      if (!targetPlaylist || targetPlaylist.length === 0) {
        setPlaylistState([]); 
      }
    }
  }, [playlist]);
  
  const playNextTrackInSequence = useCallback(() => {
    if (currentPlaylistIndex !== -1 && currentPlaylistIndex < playlist.length - 1) {
      _playTrackFromPlaylistAtIndex(currentPlaylistIndex + 1);
    } else {
      setIsPlaying(false);
    }
  }, [currentPlaylistIndex, playlist, _playTrackFromPlaylistAtIndex]);

  const playNextTrackInSequenceRef = useRef(playNextTrackInSequence);
  useEffect(() => {
    playNextTrackInSequenceRef.current = playNextTrackInSequence;
  }, [playNextTrackInSequence]);


  useEffect(() => {
    if (typeof window !== 'undefined') {
        const audio = new Audio();
        audioRef.current = audio;
        
        audio.volume = isMuted ? 0 : volume; // Reflect initial state
        audio.muted = isMuted; // Reflect initial state

        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
            setIsLoadingTrack(false);
        };
        const handleEnded = () => playNextTrackInSequenceRef.current();
        const handlePlayEvent = () => setIsPlaying(true);
        const handlePauseEvent = () => setIsPlaying(false);
        
        const handleVolumeChange = () => {
            setVolumeState(audio.volume);
            setIsMuted(audio.muted);
            if (!audio.muted && audio.volume > 0) {
                lastVolumeRef.current = audio.volume;
            }
        };
        const handleWaiting = () => setIsLoadingTrack(true);
        const handleCanPlay = () => setIsLoadingTrack(false);
        const handleError = (e: Event) => {
            console.error("Audio element error:", e);
            const mediaError = (e.target as HTMLAudioElement).error;
            if (mediaError) {
                console.error(`MediaError code: ${mediaError.code}, message: ${mediaError.message || 'No message'}`);
            }
            setIsLoadingTrack(false);
            setIsPlaying(false);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('play', handlePlayEvent);
        audio.addEventListener('pause', handlePauseEvent);
        audio.addEventListener('volumechange', handleVolumeChange);
        audio.addEventListener('waiting', handleWaiting);
        audio.addEventListener('canplay', handleCanPlay);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('play', handlePlayEvent);
            audio.removeEventListener('pause', handlePauseEvent);
            audio.removeEventListener('volumechange', handleVolumeChange);
            audio.removeEventListener('waiting', handleWaiting);
            audio.removeEventListener('canplay', handleCanPlay);
            audio.removeEventListener('error', handleError);
            
            if (!audio.paused) {
              audio.pause();
            }
            audio.removeAttribute('src'); 
            audio.load();
            audioRef.current = null;
        };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array: create audio element once on mount, clean up on unmount

  // Effect to sync React state (volume, isMuted) to the audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
        if (audio.muted !== isMuted) {
            audio.muted = isMuted;
        }
    }
  }, [volume, isMuted]);


  const playSingleTrackNow = useCallback((track: Track, album: Album) => {
    const newPlaylistItem = { track, album };
    setPlaylistState([newPlaylistItem]); // Set new playlist
    _playTrackFromPlaylistAtIndex(0, [newPlaylistItem]); // Play immediately
  }, [_playTrackFromPlaylistAtIndex]);

  const playAlbumNow = useCallback((album: Album, startingTrackIndex: number = 0) => {
    if (!album.tracks || album.tracks.length === 0) return;
    const newPlaylist = album.tracks.map(track => ({ track, album }));
    setPlaylistState(newPlaylist);
    _playTrackFromPlaylistAtIndex(startingTrackIndex, newPlaylist);
  }, [_playTrackFromPlaylistAtIndex]);

  const addToQueue = useCallback((items: PlaylistItem[]) => {
    if (!items || items.length === 0) return;
    
    setPlaylistState(prevPlaylist => {
        const newPlaylist = [...prevPlaylist, ...items];
        // If nothing was playing and playlist was empty (before adding), start playing the first added item.
        // Check currentPlaylistIndex from state directly, not prevPlaylist.length as it's from closure.
        if (!isPlaying && currentPlaylistIndex === -1 && audioRef.current && prevPlaylist.length === 0) {
             // currentPlaylistIndex refers to the state *before* this update.
             // newPlaylist.length - items.length is the start of newly added items.
            _playTrackFromPlaylistAtIndex(newPlaylist.length - items.length, newPlaylist);
        }
        return newPlaylist;
    });
  }, [isPlaying, currentPlaylistIndex, _playTrackFromPlaylistAtIndex]);


  const removeFromQueue = useCallback((playlistIndexToRemove: number) => {
    setPlaylistState(prevPlaylist => {
        if (playlistIndexToRemove < 0 || playlistIndexToRemove >= prevPlaylist.length) return prevPlaylist;

        const newPlaylist = prevPlaylist.filter((_, index) => index !== playlistIndexToRemove);

        if (newPlaylist.length === 0) {
            if (audioRef.current) {
                if(!audioRef.current.paused) audioRef.current.pause();
                audioRef.current.removeAttribute('src');
                audioRef.current.load();
            }
            setCurrentTrackState(null);
            setCurrentAlbumState(null);
            setCurrentPlaylistIndexState(-1);
            // isPlaying will be set by pause event
            return newPlaylist;
        }

        if (playlistIndexToRemove === currentPlaylistIndex) {
            if (playlistIndexToRemove < newPlaylist.length) {
                _playTrackFromPlaylistAtIndex(playlistIndexToRemove, newPlaylist);
            } else {
                _playTrackFromPlaylistAtIndex(newPlaylist.length - 1, newPlaylist);
            }
        } else if (playlistIndexToRemove < currentPlaylistIndex) {
            setCurrentPlaylistIndexState(currentPlaylistIndex - 1);
        }
        return newPlaylist;
    });
  }, [currentPlaylistIndex, _playTrackFromPlaylistAtIndex]);
  
  const playTrackAtIndex = useCallback((indexToPlay: number) => {
    if (indexToPlay >= 0 && indexToPlay < playlist.length) {
      _playTrackFromPlaylistAtIndex(indexToPlay);
    }
  }, [playlist, _playTrackFromPlaylistAtIndex]);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!currentTrack) { 
      if (playlist.length > 0) {
        const indexToPlay = currentPlaylistIndex !== -1 ? currentPlaylistIndex : 0;
        if (indexToPlay >=0 && indexToPlay < playlist.length) {
            _playTrackFromPlaylistAtIndex(indexToPlay);
        } else if (playlist.length > 0) { // Fallback to first track if index is bad
            _playTrackFromPlaylistAtIndex(0);
        }
      }
      return;
    }

    if (audio.paused) { // if (isPlaying) might be stale due to async nature
      const playPromise = audio.play();
      if (playPromise !== undefined) {
          playPromise.catch(error => {
              if (error.name === 'AbortError') {
                  console.log("Play toggle aborted.");
              } else {
                  console.error("Error resuming playback via toggle:", error);
                  setIsPlaying(false); // Ensure state consistency
              }
          });
      }
    } else {
      audio.pause();
    }
  }, [currentTrack, playlist, currentPlaylistIndex, _playTrackFromPlaylistAtIndex]);

  const seek = useCallback((time: number) => {
    if (audioRef.current && isFinite(time)) {
      audioRef.current.currentTime = Math.max(0, Math.min(time, duration || 0));
    }
  }, [duration]);

  const setVolume = useCallback((newVolume: number) => {
    const vol = Math.max(0, Math.min(newVolume, 1));
    setVolumeState(vol); // Update React state, useEffect will sync to audio element
    if (vol > 0 && isMuted) {
      setIsMuted(false); 
    } else if (vol === 0 && !isMuted) {
       setIsMuted(true); 
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
        const currentAudioIsMuted = audio.muted; // Read directly from audio element
        if (currentAudioIsMuted) {
            setIsMuted(false);
            // If volume was 0 due to mute, restore it.
            // useEffect for [volume, isMuted] will handle audio.volume = lastVolumeRef.current
            if (volume === 0 && lastVolumeRef.current > 0) {
                setVolumeState(lastVolumeRef.current);
            }
        } else {
            // Check current volume before muting
            if (audio.volume > 0) { // If it was audible
                lastVolumeRef.current = audio.volume; // Store it
            }
            setIsMuted(true);
        }
    }
  }, [volume]); // isMuted not needed, already handled by reading audio.muted
  
  const playNextTrack = useCallback(() => {
    if (currentPlaylistIndex !== -1 && currentPlaylistIndex < playlist.length - 1) {
      _playTrackFromPlaylistAtIndex(currentPlaylistIndex + 1);
    }
  }, [currentPlaylistIndex, playlist, _playTrackFromPlaylistAtIndex]);

  const playPreviousTrack = useCallback(() => {
    if (currentPlaylistIndex > 0) {
      _playTrackFromPlaylistAtIndex(currentPlaylistIndex - 1);
    }
  }, [currentPlaylistIndex, _playTrackFromPlaylistAtIndex]);


  const value = {
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
    playSingleTrackNow,
    playAlbumNow,
    addToQueue,
    removeFromQueue,
    playTrackAtIndex,
    togglePlayPause,
    seek,
    setVolume,
    toggleMute,
    playNextTrack,
    playPreviousTrack,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

