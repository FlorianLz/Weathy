import {Component} from "react";
import {connect} from "react-redux";
import {favoritesService} from "../services/favorites.service";
import FavoriteWeather from "./FavoriteWeather";

class FavoritesList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listOfFavs: [],
            listOfFavsData: [],
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listOfFavs !== this.props.listOfFavs) {
            this.setState({
                listOfFavs: this.props.listOfFavs
            });
            favoritesService.getDataFavorites(this.props.listOfFavs).then(favs => {
                console.log(favs)
                this.setState({
                    listOfFavsData: favs
                });
            });
        }
    }

    componentDidMount() {
        this.setState({
            listOfFavs: this.props.listOfFavs
        });

        favoritesService.getDataFavorites(this.props.listOfFavs).then(favs => {
            this.setState({
                listOfFavsData: favs
            });
        });
    }

    render(){
        return(
            <div className="form">
                {this.state.listOfFavsData.map(weather => (
                    <FavoriteWeather
                        city={weather.city}
                        weather={weather.weather}
                        temperature={weather.temperature}
                        icon={weather.icon}
                        wind={weather.wind}
                        humidity={weather.humidity}
                    />))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listOfFavs: state.favs.listOfFavs
    }
};

export default connect(mapStateToProps)(FavoritesList);