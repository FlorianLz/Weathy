const cityRepository = {
    async getCoordByCityName(city){
        try{
            // const httpCall = await fetch(process.env.REACT_APP_GEOCODE_URL + `${city}?json=1&` + process.env.REACT_APP_GEOCODE_API_KEY);
            const httpCall = await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_CURRENT_WEATHER + `?q=${city}` + process.env.REACT_APP_PARAMS_URL);
            const coord = await httpCall.json();
            return coord;
        } catch (err){
            console.log(err);
        }
    }
}

export default cityRepository;