import { PlayListItem } from "./PlayListItem";
import { useState } from "react";

export function PlayList() {
const [songs, setSongs] = useState({
    'Midnight Journey': ['Echoes of Eternity', '3:45'],
    'Sunset Boulevard': ['Neon Dreams', '1:23'],
    'Whispering Winds': ['Silent Echo', '2:26'],
    'Electric Pulse': ['Voltage Vibes', '3:36'],
    'Starlight Serenade': ['Galactic Harmony', '2:21'],
    'Mystic River': ['Enchanted Waters', '1:13'],
    'Crimson Horizon': ['Scarlet Skies', '2:14'],
    'Golden Sands': ['Desert Mirage', '5:24'],
    'Aurora Borealis': ['Northern Lights', '4:23'],
    'Celestial Dance': ['Astral Groove', '1:22']
});

  const songEntries = Object.entries(songs);

  return (
    <div className="flex flex-col w-full mx-auto p-5">
      {songEntries.map(([songName, [artist, time]], index) => (
        <PlayListItem key={index} songName={songName} songTime={time} artist={artist} isPlaying={index == 0} />
      ))}
    </div>
  );
}
