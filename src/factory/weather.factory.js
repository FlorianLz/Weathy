import localisation from "../helpers/localisation.helper";
import weatherRepository from "../repository/weather.repository";
import {imageHelper} from "../helpers/image.helper";
import dateHelper from "../helpers/date.helper";
import {weatherHelper} from "../helpers/weather.helper";

const weatherFactory = {
    async getCurrentWeather(weatherRawData) {
        const weatherImg = imageHelper.getWeatherImage(weatherRawData.weather[0].icon);
        return {
            weather: weatherHelper.capitalizeFirstLetter(weatherRawData.weather[0].description),
            temperature: parseInt(weatherRawData.main.temp),
            icon: weatherImg,
            city: weatherRawData.name,
            wind: weatherHelper.convertMPerHourIntoKMPerHour(weatherRawData.wind.speed),
            humidity: parseInt(weatherRawData.main.humidity),
            feel_like: parseInt(weatherRawData.main.feels_like),
            sunrise: weatherRawData.sys.sunrise,
            sunset: weatherRawData.sys.sunset,
            latitude: weatherRawData.coord.lat,
            longitude: weatherRawData.coord.lon
        };
    },
    async getForecastWeather(weatherRawData) {
        const hourForecast = [];
        let currentDay = new Date().getDay();
        for (let i = 0; i < weatherRawData.hourly.length; i++) {
            const weatherImg = imageHelper.getWeatherImage(weatherRawData.hourly[i].weather[0].icon);
            let actualDay = new Date(weatherRawData.hourly[i].dt * 1000).getDay();
            if(actualDay == currentDay) {
                hourForecast.push({
                    hour: new Date(weatherRawData.hourly[i].dt * 1000).getHours(),
                    weather: weatherRawData.hourly[i].weather[0].description,
                    temperature: parseInt(weatherRawData.hourly[i].temp),
                    icon: weatherImg
                });
            }
        }
        return hourForecast;
    },
    async getForecastWeatherNextDays(weatherRawData) {
        const nextDays = [];
        for (let i = 0; i < weatherRawData.daily.length; i++) {
            const weatherImg = imageHelper.getWeatherImage(weatherRawData.daily[i].weather[0].icon);
            nextDays.push({
                date: dateHelper.getFormatDate(new Date(weatherRawData.daily[i].dt * 1000)),
                weather: weatherRawData.daily[i].weather[0].description,
                temperature: parseInt(weatherRawData.daily[i].temp.day),
                icon: weatherImg
            });
        }
        return nextDays;
    },
    async getWeatherByCity(weatherRawData) {
        if(weatherRawData.error) {
            return {
                error: true,
                message: "Aucun résultat pour votre recherche"
            }
        }
        const weatherImg = imageHelper.getWeatherImage(weatherRawData.weather[0].icon);
        return {
            weather: weatherRawData.weather[0].description,
            temperature: parseInt(weatherRawData.main.temp),
            icon: weatherImg,
            city: weatherRawData.name,
            wind: weatherRawData.wind.speed,
            humidity: parseInt(weatherRawData.main.humidity),
            feel_like: parseInt(weatherRawData.main.feels_like),
            sunrise: weatherRawData.sys.sunrise,
            sunset: weatherRawData.sys.sunset
        };
    }
}

export default weatherFactory;