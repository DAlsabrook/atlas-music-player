import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { Song } from "./MusicPlayer";

type CurrentlyPlayingProps = {
  loading: Boolean;
  playlist: Song[];
}

export default function CurrentlyPlaying({ loading, playlist }: CurrentlyPlayingProps) {
  return (
    <div className="flex flex-col w-full m-auto p-5 md:border-r-3 border-(--secondary) dark:border-(--bg-color)">
      <CoverArt loading={loading} />
      <SongTitle loading={loading} />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
