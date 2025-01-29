type PlayListItemProps = {
  songName: String;
  songTime: Number;
  artist: String;
  isPlaying: Boolean;
}

export function PlayListItem({ songName, songTime, artist, isPlaying }: PlayListItemProps) {
    const time = songTime ? songTime.toString() : "0";
    const formattedTime = `${time.slice(0, 1)}:${time.slice(1)}`;

    return (
        <div className={`w-full flex justify-between items-center mb-2 rounded-md ${isPlaying ? 'bg-(--secondary) dark:bg-(--bg-color) text-white dark:text-(--secondary)' : 'bg-transparent'}`}>
            <div className="flex flex-col">
                <p className='font-bold'>{songName}</p>
                <p className='font-bold opacity-70'>{artist}</p>
            </div>
            <p className="font-bold opacity-50">{formattedTime}</p>
        </div>
    )
}
