import {useEffect, useRef, useState} from "react";
import {weatherService} from "../services/weather.service";
import CurrentWeather from "../components/CurrentWeather";

export default function Search(){

    const city = useRef(null);
    const [weather, setWeather] = useState(null);

    function search(e){
        e.preventDefault();
        if(city.current.value){
            weatherService.getWeatherByCity(city.current.value).then(data => {
                setWeather(data);
            });
        }
    }

    return (
        <main className="container mx-auto px-7 h-screen">
            <h1 className="text-3xl font-bold text-center pt-5">Chercher un lieu</h1>
            <p className="pt-2 text-base text-center">Trouvez la ville dont vous voulez connaître les informations météorologiques détaillées.</p>
            <div className="flex rounded  bg-gray-200 my-4 border border-gray-300">
                <button className="flex items-center justify-center px-4 border-r-2 border-gray-300" onClick={(e)=>search(e)}>
                    <svg className="w-4 h-4 text-gray-600" fill="black" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                        </path>
                    </svg>
                </button>
                <input ref={city} type="text" className="px-4 py-2 bg-transparent w-[calc(100%-40px)] outline-0" placeholder="Rechercher..." onKeyUp={(e)=>e.key === 'Enter' ? search(e) : null}/>
            </div>
            {weather && !weather.error ? <CurrentWeather
                city={weather.city}
                weather={weather.weather}
                temperature={weather.temperature}
                icon={weather.icon}
                wind={weather.wind}
                humidity={weather.humidity}
                type="search"
            /> : weather && <p className="pt-5 text-center">{weather.message} : {city.current.value}</p>}
        </main>
    );
}