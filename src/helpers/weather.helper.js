export const weatherHelper = {
    capitalizeFirstLetter: (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    convertMPerHourIntoKMPerHour(value){
        const speed = Math.round(value * 3.6)
        return speed;
    }
}