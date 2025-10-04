import React, { useRef, useState, useEffect } from 'react';

// กำหนดเรทการสุ่ม (รวมกันต้องได้ 1)
const songs = [
  { src: "https://github.com/samsosleepy2007/SamSoSleepyWeb1.8.1/raw/main/public/assets/Don't_Forget1.mp3?raw", rate: 0.2 }, // 20%
  { src: "https://github.com/samsosleepy2007/SamSoSleepyWeb1.8.1/raw/main/public/assets/Don't_Forget_Piano.mp3?raw", rate: 0.5 }, // 50%
  { src: "https://github.com/samsosleepy2007/SamSoSleepyWeb1.8.1/raw/main/public/assets/The%20place%20where%20it%20rained.mp3?raw", rate: 0.5 }, // 50%
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
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // ให้คลิกที่ส่วนไหนของเว็บก็ trigger play/pause เหมือนปุ่มขวาล่าง
  useEffect(() => {
    const globalPlayHandler = (e: Event) => {
      // ไม่ trigger ถ้าคลิกที่ปุ่มขวาล่าง (ป้องกันซ้อน)
      if ((e.target as HTMLElement)?.closest('#music-player-fab')) return;
      if (!hasInteracted) setHasInteracted(true);
      setIsPlaying((prev) => {
        if (!prev) {
          if (audioRef.current) audioRef.current.play();
          return true;
        }
        // ถ้าเล่นอยู่แล้ว ไม่ pause
        return prev;
      });
    };
    window.addEventListener('click', globalPlayHandler);
    return () => {
      window.removeEventListener('click', globalPlayHandler);
    };
  }, [hasInteracted]);

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

  // sync play state
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying && hasInteracted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasInteracted, currentSong]);

  // sync mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // sync mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

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
        <span style={{fontWeight: 600}}>{isPlaying ? (isMuted ? 'Muted' : 'Playing') : 'Paused'}</span>
        <button
          id="music-player-fab"
          onClick={() => setIsMuted(m => !m)}
          style={{
            background: isMuted ? '#f59e42' : '#2563eb',
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
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>
    </>
  );
}