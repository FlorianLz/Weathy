import Forecast from "./Forecast";
import {useEffect, useState} from "react";
import {weatherService} from "../services/weather.service";
import ForecastNextDays from "./ForecastNextDays";

export default function ForecastWeatherNextDays({forecastData}){
    const [forecastWeatherNextDays, setForecastWeatherNextDays] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setForecastWeatherNextDays(forecastData);
        setLoading(true);
    },[]);

    return(
        <div className="pt-6 font-semibold">
            <p>Prévisions des prochains jours</p>
            <div className="mt-1 flex overflow-scroll no-scrollbar snap-x">
                {forecastWeatherNextDays.map((weather, index)=>{
                    return(
                        <ForecastNextDays key={index} temperature={weather.temperature} hour={weather.hour} icon={weather.icon} date={weather.date}/>
                    )
                })}
            </div>
        </div>
    )
}