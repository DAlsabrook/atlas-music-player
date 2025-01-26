import CurrentlyPlaying from "./CurrentlyPlaying"
import { PlayList } from "./Playlist"

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row">
      <CurrentlyPlaying/>
      <PlayList/>
    </div>
  )
}
