import { useEffect, useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying.tsx"
import { PlayList } from "./Playlist.tsx"
import { AudioPlayer } from "./AudioPlayer.tsx"

export type Song = {
  artist: String
  cover: string
  duration: Number
  genre: String
  id: String
  lyrics: String
  song: String
  title: String
}

export default function MusicPlayer() {
  const [loading, setLoading] = useState<Boolean>(true);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<Boolean>(false)
  const [song, setSong] = useState<String>('')
  const [volume, setVolume] = useState<number>(50)
  const [speed, setSpeed] = useState<number>(1.0)

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('http://localhost:5173/api/v1/playlist');
        if (response.ok) {
          const data = await response.json();
          const detailedSongs = await Promise.all(data.map(async (song: Song) => {
            const songDetailsResponse = await fetch(`http://localhost:5173/api/v1/songs/${song.id}`);
            if (songDetailsResponse.ok) {
              const songDetails = await songDetailsResponse.json();
              return { ...song, ...songDetails };
            }
            return song;
          }));
          const fullDetailedSongs = await Promise.all(detailedSongs.map(async (song: Song) => {
            const songDetailsResponse = await fetch(`http://localhost:5173/api/v1/lyrics/${song.id}`);
            if (songDetailsResponse.ok) {
              const songDetails = await songDetailsResponse.json();
              return { ...song, ...songDetails };
            }
              return song;
          }));
          setPlaylist(fullDetailedSongs);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchPlaylist();
  }, []);

   useEffect(() => {
    if (playlist.length > 0) {
      setSong(playlist[currentSong].song);
    }
   }, [currentSong, playlist])
  return (
    <div className="flex flex-col md:flex-row bg-(--bg-color) dark:bg-(--secondary) text-(--primary) dark:text-(--bg-color) border-4 border-(--secondary) dark:border-(--bg-color) rounded-2xl">
      <CurrentlyPlaying
        loading={loading}
        playlist={playlist}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setVolume={setVolume}
        setSpeed={setSpeed}
        speed={speed}
      />
      {song && (
        <AudioPlayer song={song} isPlaying={isPlaying} volume={volume} speed={speed} />
      )}
      <PlayList loading={loading} playlist={playlist} currentSong={currentSong}/>
    </div>
  )
}
