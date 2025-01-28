import { FaPlay, FaPause, FaBackward, FaForward, FaRandom } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type playControlsProps = {
    currentSong: number
    songsLength: number
    setCurrentSong: Function
    setIsPlaying: Function
    isPlaying: Boolean
}

export function PlayControls ({ currentSong, songsLength, setCurrentSong, setIsPlaying, isPlaying }: playControlsProps) {
    const [nextEnd, setNextEnd] = useState<Boolean>(false)
    const [prevEnd, setPrevEnd] = useState<Boolean>(false)

    useEffect(() => {
        if (currentSong == songsLength - 1) {
            setNextEnd(true)
        } else setNextEnd(false)

        if ( currentSong == 0 ) {
            setPrevEnd(true)
        } else setPrevEnd(false)
    }, [currentSong])

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
            <button className={`cursor-pointer ${prevEnd ? 'opacity-50' : 'opacity-100'}`} onClick={handlePrev}>
                <FaBackward/>
            </button>
            <button className='cursor-pointer border-2 rounded-lg p-4 text-(--secondary) dark:text-(--bg-color)'
                onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? (<FaPause/>):(<FaPlay/>)}
            </button>
            <button className={`cursor-pointer ${nextEnd ? 'opacity-50' : 'opacity-100'}`} onClick={handleNext}>
                <FaForward/>
            </button>
            <button className='cursor-pointer' onClick={handleRand}>
                <FaRandom/>
            </button>
        </div>
    )
}
