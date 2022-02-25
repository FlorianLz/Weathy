import cityRepository from "../repository/city.repository";
import cityFactory from "../factory/city.factory";
import weatherRepository from "../repository/weather.repository";
import weatherFactory from "../factory/weather.factory";

export const cityServices ={
    async getCoordByCityName(city){
        const coordsDataRaw = await cityRepository.getCoordByCityName(city);
        const coordsData = await cityFactory.getCoordByCityName(coordsDataRaw);
        return coordsData;
    },
    async getWeatherByCoord(coord){
        const weatherRawData = await weatherRepository.getCurrentWeather(coord.latitude, coord.longitude);
        const weatherData = weatherFactory.getCurrentWeather(weatherRawData);
        return weatherData;
    },
    async getForecastWeather(coord){
        const forecastRawData = await weatherRepository.getForecastWeather(coord.latitude, coord.longitude);
        const forecastData = weatherFactory.getForecastWeather(forecastRawData);
        return forecastData;
    },
    async getForecastWeatherNextDays(coord){
        const forecastRawData = await weatherRepository.getForecastWeather(coord.latitude, coord.longitude);
        const forecastData = weatherFactory.getForecastWeatherNextDays(forecastRawData);
        return forecastData;
    }
}