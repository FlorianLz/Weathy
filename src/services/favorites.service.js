import {weatherService} from "./weather.service";

export const favoritesService = {
    async getDataFavorites(listOfFavs){
         const weatherFavs = await Promise.all(listOfFavs.map(async (city) => {
            const data = await weatherService.getWeatherByCity(city);
            return data;
         }));
        return weatherFavs;
    }


}