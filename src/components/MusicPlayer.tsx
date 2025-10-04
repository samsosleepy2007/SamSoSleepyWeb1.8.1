import React, { useRef, useState, useEffect } from 'react';

// กำหนดเรทการสุ่ม (รวมกันต้องได้ 1)
const songs = [
  { src: '/assets/Don\'t_Forget1.mp3', rate: 0.3 }, // 30%
  { src: '/assets/Don\'t_Forget_Piano.mp3', rate: 0.5 }, // 50%
  { src: '/assets/The place where it rained.mp3', rate: 0.1 }, // 10%
];

// ฟังก์ชันสุ่มตามเรท
function pickSongByRate(songs: { src: string; rate: number }[]) {
  const r = Math.random();
  let acc = 0;
  for (const song of songs) {
    acc += song.rate;
    if (r < acc) return song.src;
  }
  return songs[0].src;
}

export function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(() => pickSongByRate(songs));
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // เริ่มเล่นเมื่อมี interaction
  useEffect(() => {
    const startMusic = () => {
      setHasInteracted(true);
      setIsPlaying(true);
      window.removeEventListener('click', startMusic);
      window.removeEventListener('keydown', startMusic);
      window.removeEventListener('touchstart', startMusic);
    };
    window.addEventListener('click', startMusic);
    window.addEventListener('keydown', startMusic);
    window.addEventListener('touchstart', startMusic);
    return () => {
      window.removeEventListener('click', startMusic);
      window.removeEventListener('keydown', startMusic);
      window.removeEventListener('touchstart', startMusic);
    };
  }, []);

  // เมื่อเพลงจบ ให้สุ่มเพลงใหม่
  const handleEnded = () => {
    const nextSong = pickSongByRate(songs);
    setCurrentSong(nextSong);
    setTimeout(() => {
      if (isPlaying && audioRef.current) audioRef.current.play();
    }, 0);
  };

  // ควบคุม play/pause
  const handlePlayPause = () => {
    if (!hasInteracted) return;
    setIsPlaying((prev) => {
      const next = !prev;
      if (audioRef.current) {
        if (next) audioRef.current.play();
        else audioRef.current.pause();
      }
      return next;
    });
  };

  // sync play/pause state
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying && hasInteracted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasInteracted, currentSong]);

  return (
    <>
      <audio
        ref={audioRef}
        src={currentSong}
        onEnded={handleEnded}
        hidden
      />
      <div style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 1000,
        background: 'rgba(30,30,40,0.85)',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: 15
      }}>
        <span style={{fontWeight: 600}}>{isPlaying ? 'Playing' : 'Paused'}</span>
        <button
          onClick={handlePlayPause}
          style={{
            background: isPlaying ? '#2563eb' : '#374151',
            color: '#fff',
            border: 'none',
            borderRadius: 20,
            width: 36,
            height: 36,
            cursor: 'pointer',
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s'
          }}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶️'}
        </button>
      </div>
    </>
  );
}