import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Song } from './MusicPlayer.tsx';

type coverArtProps = {
    loading: Boolean;
    playlist: Song[]
    currentSong: number
}
export function CoverArt({loading, playlist, currentSong}: coverArtProps) {
  const song = playlist[currentSong];

  return (
    <div className="relative w-full h-full">
      {loading ? (
        <Skeleton className="w-full h-90 rounded-lg" />
      ) : (
        <>
          <img src={song.cover} alt="Cover art" className="w-full h-full rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center bg-(--bg-color) bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg overflow-hidden">
            <div className="text-(--secondary) p-4 overflow-y-auto max-h-full">
              <p className="font-bold mb-2">Lyrics</p>
              <p>{song.lyrics}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
