import { CoverArt } from "./CoverArt"
import { SongTitle } from "./SongTitle"
import { PlayControls } from "./PlayControls"
import { VolumeControls } from "./VolumeControls"

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col w-full m-auto p-5 md:border-r-2 border-gray-200">
      <CoverArt/>
      <SongTitle/>
      <PlayControls/>
      <VolumeControls/>
    </div>
  )
}
