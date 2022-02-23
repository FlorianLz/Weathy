import dateHelper from "../helpers/date.helper";
import locationIcon from "../assets/icons/location.svg";

export default function CurrentWeather({city,temperature, icon, weather, wind, humidity}) {
    return(
        <div className="bg-blue-400 p-4 rounded-2xl text-white">
            <div className="flex items-center pt-5 justify-center">
                <img className="h-6 mr-2" src={locationIcon} />
                <h1 className="text-2xl font-bold text-center">{city}</h1>
            </div>
            <p className="text-center text-gray-200 text-md pt-2">{dateHelper.getCurrentDate()}</p>
            <img className="mx-auto my-3" src={icon}/>
            <p className="text-center mb-10 text-md">{weather}</p>
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
                    <p className="text-md font-bold text-center pt-2">{temperature}%</p>
                </div>
            </div>
        </div>
    )
}