import { PlayListItem } from "./PlayListItem.tsx";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Song } from "./MusicPlayer.tsx";

type CurrentlyPlayingProps = {
  loading: Boolean;
  playlist: Song[];
  currentSong: number
}

export function PlayList({ loading, playlist, currentSong }: CurrentlyPlayingProps) {

  return (
    <div className="flex flex-col w-full mx-auto p-5">
      <h2 className="text-3xl font-bold mb-3">Playlist</h2>
      {loading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="w-full flex justify-between">
            <div className="w-52">
              <Skeleton className="h-4 mb-2" style={{backgroundColor: 'lightgrey'}} />
              <div className="w-20">
                <Skeleton className="h-4 mb-2" style={{backgroundColor: 'lightgrey'}}/>
              </div>
            </div>
            <div className="w-15">
              <Skeleton className="h-4 mb-2" style={{backgroundColor: 'lightgrey'}} />
            </div>
          </div>
        ))
      ) : (
        playlist.map((song, index) => (
          <PlayListItem
            key={song.id.toString()}
            songName={song.title}
            songTime={song.duration}
            artist={song.artist}
            isPlaying={currentSong == index}
          />
        ))
      )}
    </div>
  );
}
