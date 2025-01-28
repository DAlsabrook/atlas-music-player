import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";


export default function CurrentlyPlaying({loading}: {loading: Boolean}) {
  return (
    <div className="flex flex-col w-full m-auto p-5 md:border-r-3 border-(--secondary) dark:border-(--bg-color)">
      <CoverArt loading={loading} />
      <SongTitle loading={loading} />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
