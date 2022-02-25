import Forecast from "./Forecast";
import {useEffect, useState} from "react";
import {weatherService} from "../services/weather.service";

export default function ForecastWeather({forecastData}){
    const [forecastWeather, setForecastWeather] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setForecastWeather(forecastData);
        setLoading(true);
    },[]);

    return(
        <div className="pt-6 font-semibold">
            <p>Prévisions du jour</p>
            <div className="mt-1 flex overflow-scroll no-scrollbar snap-x">
                {forecastWeather.map((weather, index)=>{
                    return(
                        <Forecast key={index} temperature={weather.temperature} hour={weather.hour} icon={weather.icon}/>
                    )
                })}
            </div>
        </div>
    )
}