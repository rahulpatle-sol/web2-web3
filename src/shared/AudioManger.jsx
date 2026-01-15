import { useEffect, useRef } from 'react';
import { useUniverse } from '../store/useUniverse';

export default function AudioManager() {
  const { mode } = useUniverse();
  const web2Audio = useRef(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'));
  const web3Audio = useRef(new Audio('https://cdn.pixabay.com/audio/2022/03/24/audio_731477742d.mp3'));
  const switchSound = useRef(new Audio('https://cdn.pixabay.com/audio/2021/08/04/audio_bbd13039ee.mp3'));

  useEffect(() => {
    // Audio settings
    web2Audio.current.loop = true;
    web3Audio.current.loop = true;
    web2Audio.current.volume = 0.2;
    web3Audio.current.volume = 0.2;
    switchSound.current.volume = 0.5;

    // Universe Switch logic
    if (mode === 'web2') {
      web3Audio.current.pause();
      web2Audio.current.play().catch(e => console.log("User interaction needed for audio"));
    } else {
      web2Audio.current.pause();
      web3Audio.current.play().catch(e => console.log("User interaction needed for audio"));
    }
    
    // Play switch sound every time mode changes
    switchSound.current.play();

  }, [mode]);

  return null; // Ye sirf logic ke liye hai
}