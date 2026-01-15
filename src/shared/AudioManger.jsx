import { useEffect, useRef, useState } from 'react';
import { useUniverse } from '../store/useUniverse';

export default function AudioManager() {
  const { mode } = useUniverse();
  const audioRef = useRef(new Audio());
  const [hasInteracted, setHasInteracted] = useState(false);

  // Audio Sources - Inhe sahi path se check kar lena
  const web2Music = "/audio/web2-ambient.mp3"; 
  const web3Music = "/audio/web3-future.mp3";

  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, []);

  useEffect(() => {
    if (!hasInteracted) return;

    // Smoothly switch audio source
    const playAudio = async () => {
      try {
        audioRef.current.pause();
        audioRef.current.src = mode === 'web2' ? web2Music : web3Music;
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;
        await audioRef.current.play();
      } catch (err) {
        console.warn("Audio playback failed:", err);
      }
    };

    playAudio();
  }, [mode, hasInteracted]);

  return null; // Ye sirf logic ke liye hai
}