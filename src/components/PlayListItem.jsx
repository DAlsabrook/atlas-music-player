export function PlayListItem (props) {
    return (
        <div className={`w-full flex justify-between items-center mb-2 rounded-md ${props.isPlaying ? 'bg-blue-50' : 'bg-transparent'}`}>
            <div className="flex flex-col">
                <p className='font-bold'>{props.songName}</p>
                <p className='font-bold opacity-50'>{props.artist}</p>
            </div>
            <p className="font-bold opacity-30">{props.songTime   }</p>
        </div>
    )
}
