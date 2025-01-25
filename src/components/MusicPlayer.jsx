import { CoverArt } from "./CoverArt"
import { SongTitle } from "./SongTitle"
import { PlayControls } from "./PlayControls"
import { VolumeControls } from "./VolumeControls"

export default function MusicPlayer() {
  return (
    <div>
      <CoverArt/>
      <SongTitle/>
      <PlayControls/>
      <VolumeControls/>
    </div>
  )
}
