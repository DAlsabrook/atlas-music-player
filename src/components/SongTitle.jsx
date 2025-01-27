import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function SongTitle(props) {
    return (
        <div className="flex flex-col my-2">
            {props.loading ? (
                <>
                    <Skeleton className="w-3/4 h-10 mb-2" />
                    <Skeleton className="w-1/2 h-6" />
                </>
            ) : (
                <>
                    <p className='font-bold text-4xl'>Midnight Journey</p>
                    <p className='opacity-50 text-xl my-2'>Echoes of Eternity</p>
                </>
            )}
        </div>
    );
}
