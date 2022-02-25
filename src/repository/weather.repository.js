const weatherRepository = {
    async getCurrentWeather(lat,lon){
        try{
            const httpCall = await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_CURRENT_WEATHER + `?lat=${lat}&lon=${lon}` + process.env.REACT_APP_PARAMS_URL);
            const currentWeather = await httpCall.json();
            return currentWeather;
        } catch (err){
            console.log(err);
        }
    },
    async getForecastWeather(lat,lon){
        try{
            const httpCall = await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_FORECAST_WEATHER + `?lat=${lat}&lon=${lon}` + process.env.REACT_APP_PARAMS_URL + process.env.REACT_APP_PARAMS_ONECALL);
            const forecastWeather = await httpCall.json();
            return forecastWeather;
        } catch (err){
            console.log(err);
        }
    },
    async getWeatherByCity(city){
        try{
            const httpCall = await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_CURRENT_WEATHER + `?q=${city}` + process.env.REACT_APP_PARAMS_URL);
            const currentWeather = await httpCall.json();
            if(currentWeather.cod === "404"){
                return {
                    error: true
                }
            }
            return currentWeather;
        } catch (err){
            console.log(err);
        }
    }
}

export default weatherRepository;