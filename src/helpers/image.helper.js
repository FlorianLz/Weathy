export const imageHelper = {
    getWeatherImage(icon){
        return process.env.REACT_APP_PUBLIC_URL + '/images/' + icon + '.svg';
    }
}