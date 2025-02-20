import { useEffect, useRef } from 'react';

interface AudioPlayerProps {
  song: String;
  isPlaying: Boolean;
  volume: number;
  speed: number;
}

export function AudioPlayer({ song, isPlaying, volume, speed }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = song.toString();
      audio.playbackRate = speed;

      const handlePause = () => {
        console.log('Audio paused');
      };

      audio.addEventListener('pause', handlePause);

      if (isPlaying) {
        audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      } else {
        audio.pause();
      }

      return () => {
        audio.removeEventListener('pause', handlePause);
        audio.pause();
        audio.src = '';
      };
    }
  }, [song, isPlaying, speed]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = speed;
    }
  }, [speed]);

  return (
    <div>
      <audio ref={audioRef} />
    </div>
  );
}
