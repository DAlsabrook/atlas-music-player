import { FaPlay, FaPause, FaBackward, FaForward, FaRandom } from 'react-icons/fa';


export function PlayControls () {
    return (
        <div className='flex justify-between w-full'>
            <button className='cursor-pointer'>1x</button>
            <button className='cursor-pointer'>
                <FaBackward/>
            </button>
            <button className='cursor-pointer'>
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
