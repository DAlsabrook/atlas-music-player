import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { Song } from "./MusicPlayer";

type CurrentlyPlayingProps = {
  loading: Boolean;
  playlist: Song[];
  currentSong: number;
  setCurrentSong: Function
  setIsPlaying: Function
}

export default function CurrentlyPlaying({ loading, playlist, currentSong, setCurrentSong, setIsPlaying }: CurrentlyPlayingProps) {

  return (
    <div className="flex flex-col w-full m-auto p-5 md:border-r-3 border-(--secondary) dark:border-(--bg-color)">
      <CoverArt loading={loading} playlist={playlist} currentSong={currentSong}/>
      <SongTitle loading={loading} playlist={playlist} currentSong={currentSong}/>
      <PlayControls
        songsLength={playlist.length}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
      />
      <VolumeControls />
    </div>
  );
}
