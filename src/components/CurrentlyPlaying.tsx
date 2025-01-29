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
  isPlaying: Boolean
  setVolume: Function
  setSpeed: Function
  speed: number
}

export default function CurrentlyPlaying({ loading, playlist, currentSong, setCurrentSong, setIsPlaying, isPlaying, setVolume, setSpeed, speed }: CurrentlyPlayingProps) {

  return (
    <div className="flex flex-col w-full m-auto p-5 md:border-r-3 border-(--secondary) dark:border-(--bg-color)">
      <CoverArt loading={loading} playlist={playlist} currentSong={currentSong}/>
      <SongTitle loading={loading} playlist={playlist} currentSong={currentSong}/>
      <PlayControls
        songsLength={playlist.length}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setSpeed={setSpeed}
        speed={speed}
      />
      <VolumeControls setVolume={setVolume}/>
    </div>
  );
}
