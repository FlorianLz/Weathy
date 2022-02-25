import localisation from "../helpers/localisation.helper";
import weatherRepository from "../repository/weather.repository";
import {imageHelper} from "../helpers/image.helper";

const cityFactory = {
    async getCoordByCityName(rawData) {
        return {
            latitude: rawData.coord.lat,
            longitude: rawData.coord.lon
        }
    }

}

export default cityFactory;