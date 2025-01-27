import { CoverArt } from "./CoverArt"
import { SongTitle } from "./SongTitle"
import { PlayControls } from "./PlayControls"
import { VolumeControls } from "./VolumeControls"

export default function CurrentlyPlaying(props) {

  return (
    <div className="flex flex-col w-full m-auto p-5 md:border-r-3 border-(--secondary) dark:border-(--bg-color)">
      <CoverArt loading={props.loading}/>
      <SongTitle loading={props.loading}/>
      <PlayControls/>
      <VolumeControls/>
    </div>
  )
}
