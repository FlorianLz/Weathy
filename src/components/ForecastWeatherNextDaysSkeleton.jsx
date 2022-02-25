import {useEffect, useState} from "react";
import ForecastSkeleton from "./ForecastSkeleton";
import {globalHelper} from "../helpers/global.helper";

export default function ForecastWeatherNextDaysSkeleton(){

    const [random, setRandom] = useState([]);

    useEffect(() => {
        setRandom([...Array(Math.floor(globalHelper.getRandomArbitraryNumber(2,5)))])
    }, []);
    return(
        <div className="pt-6 font-semibold">
            <p>Prévisions des prochains jours</p>
            <div className="mt-1 flex overflow-scroll no-scrollbar snap-x">
                {random.map((e, i) => <ForecastSkeleton key={i}/>)}
            </div>
        </div>
    )
}