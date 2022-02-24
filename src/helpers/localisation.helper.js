const localisation = {
    getLocalisation(){
        return new Promise(function(resolve, reject){
            navigator.geolocation.getCurrentPosition(function(position) {
                resolve({latitude:position.coords.latitude, longitude: position.coords.longitude});
            },null,{timeout:3000, maximumAge:0, enableHighAccuracy:true });
        });
    }
}
export default localisation;