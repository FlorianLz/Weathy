import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {cityServices} from "../services/city.service";
import CurrentTime from "../components/CurrentTime";
import CurrentWeather from "../components/CurrentWeather";
import ForecastWeather from "../components/ForecastWeather";
import ForecastWeatherNextDays from "../components/ForecastWeatherNextDays";
import CurrentWeatherSkeleton from "../components/CurrentWeatherSkeleton";
import ForecastWeatherNextDaysSkeleton from "../components/ForecastWeatherNextDaysSkeleton";
import ForecastWeatherSkeleton from "../components/ForecastWeatherSkeleton";

export default function City(){
    const {city} = useParams();
    const [cityData, setCityData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [weatherDataNextDays, setWeatherDataNextDays] = useState(null);
    const [loadingForecastDataNextDays, setLoadingDataNextDays] = useState(false);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(()=>{
        cityServices.getCoordByCityName(city).then(coord=>{
            cityServices.getWeatherByCoord(coord).then(weather=>{
                setCityData(weather);
                setLoading(true);
                cityServices.getForecastWeather(coord).then(forecast=>{
                    setWeatherData(forecast);
                    setLoadingData(true);
                });
                cityServices.getForecastWeatherNextDays(coord).then(forecast=>{
                    setWeatherDataNextDays(forecast);
                    setLoadingDataNextDays(true);
                });
            });
        });


    },[])

    return (
        <main className="container mx-auto px-4 pb-[60px] pt-4 max-w-[640px]">
            <CurrentTime />
            {loading ? <CurrentWeather
                city={cityData.city}
                weather={cityData.weather}
                temperature={cityData.temperature}
                icon={cityData.icon}
                wind={cityData.wind}
                humidity={cityData.humidity}
                type="search"
            />: <CurrentWeatherSkeleton />}

            {loadingData ? <ForecastWeather forecastData={weatherData} />: <ForecastWeatherSkeleton />}

            {loadingForecastDataNextDays ? <ForecastWeatherNextDays forecastData={weatherDataNextDays} /> : <ForecastWeatherNextDaysSkeleton />}
        </main>
    )
}