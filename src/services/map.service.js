import {cityServices} from "./city.service";

export const mapService = {
    async getMapDataCity(listOfFavs){
        const mapDataCity = await Promise.all(listOfFavs.map(async (city) => {
            const data = await cityServices.getCoordByCityName(city);
            const weather = await cityServices.getWeatherByCoord(data);
            return weather;
        }));
        return mapDataCity;
    }
}