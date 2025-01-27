export function PlayListItem (props) {
    return (
        <div className={`w-full flex justify-between items-center mb-2 rounded-md ${props.isPlaying ? 'bg-(--secondary) dark:bg-(--bg-color) text-white dark:text-(--secondary)' : 'bg-transparent'}`}>
            <div className="flex flex-col">
                <p className='font-bold'>{props.songName}</p>
                <p className='font-bold opacity-70'>{props.artist}</p>
            </div>
            <p className="font-bold opacity-50">{props.songTime}</p>
        </div>
    )
}
