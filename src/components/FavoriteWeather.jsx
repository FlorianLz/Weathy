import dateHelper from "../helpers/date.helper";
import AddToFav from "./AddToFav";

export default function FavoriteWeather({city, icon, weather}) {

    return(
        <div className="bg-blue-400 p-4 rounded-2xl text-white relative flex items-center my-3 justify-between">

            <div className="flex-col justify-center w-2/6">
                <img className="h-5 mx-auto" src={icon}/>
                <p className="text-center text-xs">{weather}</p>
            </div>
            <p className="text-xl font-bold text-center w-4/6">{city}</p>
            <AddToFav city={city} fav={true} />


        </div>
    )
}