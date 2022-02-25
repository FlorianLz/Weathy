import Forecast from "./Forecast";
import {useEffect, useState} from "react";

export default function ForecastWeather({forecastData}){
    const [forecastWeather, setForecastWeather] = useState([]);

    useEffect(()=>{
        setForecastWeather(forecastData);
    },[]);

    return(
        <div className="pt-6 font-semibold">
            <p>Prévisions du jour</p>
            <div className="mt-1 flex overflow-scroll no-scrollbar sm:scrollbar snap-x">
                {forecastWeather.map((weather, index)=>{
                    return(
                        <Forecast key={index} temperature={weather.temperature} hour={weather.hour} icon={weather.icon}/>
                    )
                })}
            </div>
        </div>
    )
}