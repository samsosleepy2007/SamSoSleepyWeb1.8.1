import React, { useRef, useState } from 'react';

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
  const audioRef = useRef<HTMLAudioElement>(null);

  // เมื่อเพลงจบ ให้สุ่มเพลงใหม่
  const handleEnded = () => {
    const nextSong = pickSongByRate(songs);
    setCurrentSong(nextSong);
    setTimeout(() => {
      audioRef.current?.play();
    }, 0);
  };

  return (
    <audio
      ref={audioRef}
      src={currentSong}
      autoPlay
      onEnded={handleEnded}
      hidden
    />
  );
}