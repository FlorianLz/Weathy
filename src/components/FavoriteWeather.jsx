import dateHelper from "../helpers/date.helper";
import AddToFav from "./AddToFav";

export default function FavoriteWeather({city, icon, weather, temperature}) {

    return(
        <div className="bg-blue-400 p-4 rounded-2xl text-white relative flex items-center mb-3 justify-between">
            <p className="font-bold pr-2">{temperature+'°C'}</p>
            <div className="flex-col justify-center w-2/6">
                <img className="h-5 mx-auto" src={icon}/>
                <p className="text-center text-xs">{weather}</p>
            </div>
            <p className="text-md font-bold text-center w-4/6">{city}</p>
            <div className="w-8 h-8"><AddToFav city={city} fav={true} /></div>


        </div>
    )
}