import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function ForecastSkeleton(){
    return(
        <div className="snap-start shadow-lg rounded-lg mt-3 w-[58px] mr-2 bg-slate-200 h-[118px] overflow-hidden">
            <Skeleton height={135} className="transform translate-y-[-10px]"/>
        </div>
    )
}