import {Component} from "react";
import ReactMapboxGl, {Marker} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import markerUrl from '../assets/icons/locationFav.svg';
import markerUrlActual from '../assets/icons/locationFavActual.svg';
import markerUrlClick from '../assets/icons/locationFavClick.svg';
import {connect} from "react-redux";
import {mapService} from "../services/map.service";
import localisation from "../helpers/localisation.helper";
import {weatherService} from "../services/weather.service";
import CurrentWeatherMap from "../components/CurrentWeatherMap";
import {favsHelper} from "../helpers/favs.helper";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const MyMap = ReactMapboxGl({
    accessToken:
    process.env.REACT_APP_MAPBOX_API_KEY
});
class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            longitude: null,
            latitude: null,
            listOfFavs: [],
            popup: false,
            dataPopup: null,
            centerLat: null,
            centerLon: null,
            zoomMap: 11.5,
            city: null
        }
    }

    componentDidMount() {
        localisation.getLocalisation().then(
            (response) => {
                this.setState({
                    longitude: response.longitude,
                    latitude: response.latitude,
                    centerLat: response.latitude,
                    centerLon: response.longitude
                });
                weatherService.getCurrentWeatherByCoord(response.latitude, response.longitude).then(
                    (response) => {
                        this.setState({
                            dataActual: response,
                            city: response.city
                        });
                        setTimeout(() => {
                            this.setState({
                                loadingMap: true
                            });
                        }, 500);
                    }
                );
            }
        );

        if(this.props.listOfFavs.length > 0) {
            this.setState({
                listOfFavs: this.props.listOfFavs
            });
            mapService.getMapDataCity(this.props.listOfFavs).then(favs => {
                this.setState({
                    listOfFavsData: favs
                });
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listOfFavs !== this.props.listOfFavs) {
            this.setState({listOfFavs: this.props.listOfFavs})
            mapService.getMapDataCity(this.props.listOfFavs).then(favs => {
                this.setState({
                    listOfFavsData: favs,
                    markerClicked: !this.state.markerClicked
                });
            })
            this.setState({star: favsHelper.isCityInFavs(this.props.city, this.props.listOfFavs)})
        }
    }

    openPopup(fav) {
        this.setState({
            dataPopup: fav,
            popup: true,
            centerLat: fav.latitude,
            centerLon: fav.longitude,
            zoomMap: 11.5
        });
    }

   clickMap(map,e){
       weatherService.getCurrentWeatherByCoord(e.lngLat.lat,e.lngLat.lng).then(
           (response) => {
               this.setState({
                   dataPopup: response,
                   centerLat: e.lngLat.lat,
                   centerLon: e.lngLat.lng,
                   popup: true,
                   markerClicked: true,
                   city: response.city,
                   closePopup: false
               });
           }
       );
    }

    render(){
        return(
            <main className="container mx-auto pb-[50px] pt-4 h-screen max-w-[640px] relative">
                <h1 className="text-2xl pb-4 font-bold text-center">Carte des favoris</h1>
                <div className="h-[calc(100vh-98px-1rem)]">
                    {(this.state.loadingMap) ?
                        <MyMap style="mapbox://styles/mapbox/streets-v9"
                           initialViewState={{
                               longitude: this.state.longitude,
                               latitude: this.state.latitude,
                               zoom: this.state.zoomMap
                           }}
                           containerStyle={{
                               height: '100%',
                               width: '100%'
                           }}
                           center={[this.state.centerLon, this.state.centerLat]}
                            zoom={[this.state.zoomMap]}
                           onClick={(map,e) => this.clickMap(map,e)}
                        >
                        <Marker className="w-8 h-8" coordinates={[this.state.longitude, this.state.latitude]} anchor="bottom">
                            <img src={markerUrlActual} alt="" onClick={()=>this.openPopup(this.state.dataActual)}/>
                        </Marker>
                        {this.state.listOfFavsData && this.state.listOfFavsData.map(fav => {
                            return(
                                <Marker key={fav.city} className="w-8 h-8" coordinates={[fav.longitude, fav.latitude]} anchor="bottom">
                                    <img src={markerUrl} alt="" onClick={()=>this.openPopup(fav)}/>
                                </Marker>
                            )
                        })}
                            {this.state.markerClicked && <Marker key={this.state.centerLat} className="w-8 h-8" coordinates={[this.state.centerLon, this.state.centerLat]} anchor="bottom">
                                <img src={markerUrlClick} alt=""/>
                            </Marker>}
                    </MyMap> : <Skeleton className="h-full"/> }

                </div>
                {this.state.popup === true &&
                    <div className={`absolute bottom-[60px] left-3 z-10 w-[calc(100vw-1.5rem)] max-w-[640px] ${this.state.closePopup ? 'animate-fadeOut' : 'animate-fade'}`}>
                        <CurrentWeatherMap
                            city={this.state.dataPopup.city}
                            weather={this.state.dataPopup.weather}
                            icon={this.state.dataPopup.icon}
                            temperature={this.state.dataPopup.temperature}
                            wind={this.state.dataPopup.wind}
                            humidity={this.state.dataPopup.humidity}
                            type="search"
                            handleClose={() => this.closePopup()}
                        />
                    </div>
                }
            </main>
        )
    }

    closePopup() {
        this.setState({
            closePopup: true
        });
        setTimeout(()=>{
            this.setState({
                popup: false
            });
        },600);
    }
}

const mapStateToProps = (state) => {
    return {
        listOfFavs: state.favs.listOfFavs
    }
};

export default connect(mapStateToProps)(Map);