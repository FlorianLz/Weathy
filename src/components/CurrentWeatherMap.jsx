import dateHelper from "../helpers/date.helper";
import locationIcon from "../assets/icons/location.svg";
import AddToFav from "./AddToFav";

export default function CurrentWeatherMap({city,temperature, icon, weather, wind, type, humidity}) {

    return(
        <div className="bg-blue-400 p-4 rounded-2xl text-white relative">
            {city && <AddToFav city={city}/>}
            <div className="flex justify-around items-center">
                <div className="flex-col items-center pt-3 justify-center h-fit">
                    <h1 className="text-2xl font-bold text-center">{city}</h1>
                    <p className="text-center text-gray-200 text-md">{dateHelper.getCurrentDate()}</p>
                </div>

                <div className="flex-col h-fit">
                    <img className="mx-auto my-3 h-10" src={icon}/>
                    <p className="text-center mb-3 text-md">{weather}</p>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/3 text-center">
                    <p className="text-sm text-gray-200">Temp</p>
                    <p className="text-md font-bold text-center pt-2">{temperature}°C</p>
                </div>
                <div className="w-1/3 text-center">
                    <p className="text-sm text-gray-200">Vent</p>
                    <p className="text-md font-bold text-center pt-2">{wind}km/h</p>
                </div>
                <div className="w-1/3 text-center">
                    <p className="text-sm text-gray-200">Humidité</p>
                    <p className="text-md font-bold text-center pt-2">{humidity}%</p>
                </div>
            </div>
        </div>
    )
}