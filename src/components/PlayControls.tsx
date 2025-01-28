import { FaPlay, FaPause, FaBackward, FaForward, FaRandom } from 'react-icons/fa';


export function PlayControls () {
    return (
        <div className='flex justify-between w-full p-2'>
            <button className='cursor-pointer font-medium'>1x</button>
            <button className='cursor-pointer opacity-50'>
                <FaBackward/>
            </button>
            <button className='cursor-pointer border-2 rounded-lg p-4 text-(--secondary) dark:text-(--bg-color)'>
                <FaPlay/>
            </button>
            <button className='cursor-pointer'>
                <FaForward/>
            </button>
            <button className='cursor-pointer'>
                <FaRandom/>
            </button>
        </div>
    )
}
