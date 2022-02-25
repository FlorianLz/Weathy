import dateHelper from "../helpers/date.helper";
import locationIcon from "../assets/icons/location.svg";
import temperatureIcon from "../assets/icons/temperature.svg";
import windIcon from "../assets/icons/wind.svg";
import humidityIcon from "../assets/icons/humidity.svg";
import AddToFav from "./AddToFav";

export default function CurrentWeather({city,temperature, icon, weather, wind, type, humidity}) {

    return(
        <div className="bg-blue-400 p-4 rounded-2xl text-white relative">
            {type == "search" && <div className="absolute right-4 h-8 w-8"><AddToFav city={city}/></div>}
            <div className="flex items-center pt-3 justify-center">
                <img className="h-6 mr-2" src={locationIcon} />
                <h1 className="text-2xl font-bold text-center">{city}</h1>
            </div>
            <p className="text-center text-gray-200 text-md">{dateHelper.getCurrentDate()}</p>
            <img className="mx-auto my-3" src={icon}/>
            <p className="text-center mb-6 text-md">{weather}</p>
            <div className="flex">
                <div className="w-1/3 text-center flex items-center justify-center">
                    <img className="h-6 mr-2" src={temperatureIcon} />
                    <p className="text-md font-bold text-center">{temperature}°C</p>
                </div>
                <div className="w-1/3 text-center flex items-center justify-center">
                    <img className="h-6 mr-2" src={windIcon} />
                    <p className="text-md font-bold text-center">{wind}km/h</p>
                </div>
                <div className="w-1/3 text-center flex items-center justify-center">
                    <img className="h-6 mr-2" src={humidityIcon} />
                    <p className="text-md font-bold text-center">{humidity}%</p>
                </div>
            </div>
        </div>
    )
}