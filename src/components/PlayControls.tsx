import { FaPlay, FaPause, FaBackward, FaForward, FaRandom } from 'react-icons/fa';

type playControlsProps = {
    currentSong: number
    songsLength: number
    setCurrentSong: Function
}
export function PlayControls ({currentSong, songsLength, setCurrentSong}: playControlsProps) {

    const handleNext = () => {
        const nextIndex = currentSong + 1
        if (nextIndex < songsLength) {
            setCurrentSong(nextIndex)
        }
    }

    const handlePrev = () => {
        const nextIndex = currentSong - 1
        if (nextIndex >= 0) {
            setCurrentSong(nextIndex)
        }
    }

    const handleRand = () => {
        const randomIndex = Math.floor(Math.random() * songsLength);
        setCurrentSong(randomIndex);
    };
    return (
        <div className='flex justify-between w-full p-2'>
            <button className='cursor-pointer font-medium'>1x</button>
            <button className='cursor-pointer opacity-50' onClick={handlePrev}>
                <FaBackward/>
            </button>
            <button className='cursor-pointer border-2 rounded-lg p-4 text-(--secondary) dark:text-(--bg-color)'>
                <FaPlay/>
            </button>
            <button className='cursor-pointer' onClick={handleNext}>
                <FaForward/>
            </button>
            <button className='cursor-pointer' onClick={handleRand}>
                <FaRandom/>
            </button>
        </div>
    )
}
