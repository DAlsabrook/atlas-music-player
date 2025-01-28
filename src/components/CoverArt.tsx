import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Song } from './MusicPlayer';

type coverArtProps = {
    loading: Boolean;
    playlist: Song[]
    currentSong: number
}
export function CoverArt({loading, playlist, currentSong}: coverArtProps) {
    return (
        <div className="w-full h-full">
            {loading ? (
                <Skeleton className="w-full h-90 rounded-lg" />
            ) : (
                <img src={playlist[currentSong].cover} alt="Cover art" className="w-full h-full rounded-lg" />
            )}
        </div>
    );
}
