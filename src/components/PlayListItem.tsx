type PlayListItemProps = {
  songName: string;
  songTime: string;
  artist: string;
  isPlaying: boolean;
}



export function PlayListItem({ songName, songTime, artist, isPlaying }: PlayListItemProps) {

    return (
        <div className={`w-full flex justify-between items-center mb-2 rounded-md ${isPlaying ? 'bg-(--secondary) dark:bg-(--bg-color) text-white dark:text-(--secondary)' : 'bg-transparent'}`}>
            <div className="flex flex-col">
                <p className='font-bold'>{songName}</p>
                <p className='font-bold opacity-70'>{artist}</p>
            </div>
            <p className="font-bold opacity-50">{songTime}</p>
        </div>
    )
}
