import weatherFactory from "../factory/weather.factory";
import localisation from "../helpers/localisation.helper";
import weatherRepository from "../repository/weather.repository";

export const weatherService = {
    async getCurrentWeather() {
        const mylocalisation = await localisation.getLocalisation();
        const weatherRawData = await weatherRepository.getCurrentWeather(mylocalisation.latitude, mylocalisation.longitude);
        const weatherData = weatherFactory.getCurrentWeather(weatherRawData);
        return weatherData;
    },
    async getCurrentWeatherByCoord(lat,lon) {
        const weatherRawData = await weatherRepository.getCurrentWeather(lat, lon);
        const weatherData = weatherFactory.getCurrentWeather(weatherRawData);
        return weatherData;
    },
    async getForecastWeather() {
        const mylocalisation = await localisation.getLocalisation();
        const weatherRawData = await weatherRepository.getForecastWeather(mylocalisation.latitude, mylocalisation.longitude);
        const weatherData = weatherFactory.getForecastWeather(weatherRawData);
        return weatherData;
    },
    async getForecastWeatherNextDays() {
        const mylocalisation = await localisation.getLocalisation();
        const weatherRawData = await weatherRepository.getForecastWeather(mylocalisation.latitude, mylocalisation.longitude);
        const weatherData = weatherFactory.getForecastWeatherNextDays(weatherRawData);
        return weatherData;
    },
    async getWeatherByCity(city) {
        const weatherRawData = await weatherRepository.getWeatherByCity(city);
        const weatherData = weatherFactory.getWeatherByCity(weatherRawData);
        return weatherData;
    }
}