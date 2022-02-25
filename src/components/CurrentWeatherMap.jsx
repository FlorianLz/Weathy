import dateHelper from "../helpers/date.helper";
import closeIcon from "../assets/icons/close.svg";
import temperatureIcon from "../assets/icons/temperature.svg";
import windIcon from "../assets/icons/wind.svg";
import humidityIcon from "../assets/icons/humidity.svg";
import AddToFav from "./AddToFav";

export default function CurrentWeatherMap({city,temperature, icon, weather, wind, humidity, handleClose}) {

    return(
        <div className="bg-blue-400 p-4 rounded-2xl text-white relative overflow-hidden">
            {city && <div className="text-right flex justify-between h-8 w-full">
                <div className="h-8 w-8"><img className="w-full h-full transform translate-x-[-5px]" src={closeIcon} onClick={()=>handleClose()}/></div>
                <div className="h-8 w-8"><AddToFav city={city} fav={true}/></div>
            </div>}
            <div className="flex justify-around items-center mb-3">

                <div className="flex-col h-fit">
                    <img className="mx-auto my-3 h-9" src={icon}/>
                    <p className="text-center text-sm">{weather}</p>
                </div>
                <div className="flex-col items-center justify-center h-fit">
                    <h1 className="text-2xl font-bold text-center">{city}</h1>
                    <p className="text-center text-gray-200 text-sm">{dateHelper.getCurrentDate()}</p>
                </div>
            </div>
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