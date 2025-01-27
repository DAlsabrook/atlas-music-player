import { useEffect, useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying"
import { PlayList } from "./Playlist"


export default function MusicPlayer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <div className="flex flex-col md:flex-row bg-(--bg-color) dark:bg-(--secondary) text-(--primary) dark:text-(--bg-color) border-4 border-(--secondary) dark:border-(--bg-color) rounded-2xl">
      <CurrentlyPlaying loading={loading}/>
      <PlayList loading={loading}/>
    </div>
  )
}
