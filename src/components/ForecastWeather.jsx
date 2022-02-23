import Forecast from "./Forecast";
import {useEffect, useState} from "react";
import {weatherService} from "../services/weather.service";

export default function ForecastWeather(){
    const [forecastWeather, setForecastWeather] = useState([]);

    useEffect(()=>{
        weatherService.getForecastWeather().then(data=>{
            setForecastWeather(data);
        });
    },[]);

    return(
        <div className="pt-6 font-semibold">
            <p>Prévisions du jour</p>
            <div className="mt-1 flex overflow-scroll">
                {forecastWeather.map((weather, index)=>{
                    return(
                        <Forecast key={index} temperature={weather.temperature} hour={weather.hour} icon={weather.icon}/>
                    )
                })}
            </div>
        </div>
    )
}