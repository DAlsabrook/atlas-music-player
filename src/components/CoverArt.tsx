import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function CoverArt({loading}: {loading: Boolean}) {
    return (
        <div className="w-full h-full">
            {loading ? (
                <Skeleton className="w-full h-90 rounded-lg" />
            ) : (
                <img src="/src/assets/placeholder.svg" alt="Cover art" className="w-full h-full rounded-lg" />
            )}
        </div>
    );
}
