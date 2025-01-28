import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Song } from './MusicPlayer';

type songTitleProps = {
    loading: Boolean;
    playlist: Song[]
    currentSong: number
}

export function SongTitle({loading, playlist, currentSong}: songTitleProps) {
    return (
        <div className="flex flex-col my-2">
            {loading ? (
                <>
                    <Skeleton className="w-3/4 h-10 mb-2" />
                    <Skeleton className="w-1/2 h-6" />
                </>
            ) : (
                <>
                    <p className='font-bold text-4xl'>{playlist[currentSong].title}</p>
                    <p className='opacity-50 text-xl my-2'>{playlist[currentSong].artist}</p>
                </>
            )}
        </div>
    );
}
