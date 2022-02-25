import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import locationIcon from "../assets/icons/location.svg";
import temperatureIcon from "../assets/icons/temperature.svg";
import windIcon from "../assets/icons/wind.svg";
import humidityIcon from "../assets/icons/humidity.svg";

export default function CurrentWeatherSkeleton() {

    return(
        <div className="bg-white border border-slate-200 p-4 rounded-2xl text-white relative">
            <div className="flex items-center pt-3 justify-center">
                <h1 className="text-2xl font-bold text-center w-1/2"><Skeleton /></h1>
            </div>
            <p className="text-center text-gray-200 text-md w-4/6 mx-auto"><Skeleton /></p>
            <div className="w-fit h-fit mx-auto my-3"><Skeleton height={112} width={112} variant="rectangular" /></div>
            <p className="text-center mb-6 text-md w-1/2 mx-auto"><Skeleton /></p>
            <div className="flex">
                <div className="w-1/3 text-center flex items-center justify-center">
                    <p className="text-md font-bold text-center w-12"><Skeleton /></p>
                </div>
                <div className="w-1/3 text-center flex items-center justify-center">
                    <p className="text-md font-bold text-center w-12"><Skeleton /></p>
                </div>
                <div className="w-1/3 text-center flex items-center justify-center">
                    <p className="text-md font-bold text-center w-12"><Skeleton /></p>
                </div>
            </div>
        </div>
    )
}