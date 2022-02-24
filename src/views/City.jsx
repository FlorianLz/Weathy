import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {cityServices} from "../services/city.service";
import CurrentTime from "../components/CurrentTime";
import CurrentWeather from "../components/CurrentWeather";
import {weatherService} from "../services/weather.service";
import ForecastWeather from "../components/ForecastWeather";

export default function City(){
    const {city} = useParams();
    const [cityData, setCityData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        cityServices.getCoordByCityName(city).then(coord=>{
            cityServices.getWeatherByCoord(coord).then(weather=>{
                setCityData(weather);
                cityServices.getForecastWeather(coord).then(forecast=>{
                    setWeatherData(forecast);
                    setLoading(true);
                });
            });
        });


    },[])

    return (
        <main className="container mx-auto px-7 pb-[60px] pt-4">
            <CurrentTime />
            {loading ? <><CurrentWeather
                city={cityData.city}
                weather={cityData.weather}
                temperature={cityData.temperature}
                icon={cityData.icon}
                wind={cityData.wind}
                humidity={cityData.humidity}
                type="search"
            /> <ForecastWeather forecastData={weatherData} /></> : <div className="text-center font-semibold">Chargement...</div>}
        </main>
    )
}