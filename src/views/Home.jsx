import {Component} from "react";
import CurrentWeather from "../components/CurrentWeather";
import ForecastWeather from "../components/ForecastWeather";
import {weatherService} from "../services/weather.service";
import CurrentTime from "../components/CurrentTime";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: null,
            weather: null,
            temperature: null,
            icon: null,
            loading: false
        };
    }
    async componentDidMount() {
        const data = await weatherService.getCurrentWeather();
        this.setState({
            city: data.city,
            weather: data.weather,
            temperature: data.temperature,
            icon: data.icon,
            wind: data.wind,
            humidity: data.humidity,
            loading: true
        });
    }

    render() {
        return (
            <main className="container mx-auto px-7 pb-[60px] pt-4">
                {this.state.loading ?
                    <>
                    <CurrentTime />
                    <CurrentWeather
                        city={this.state.city}
                        weather={this.state.weather}
                        temperature={this.state.temperature}
                        icon={this.state.icon}
                        wind={this.state.wind}
                        humidity={this.state.humidity}
                    /></> : <p className="text-center py-6">Chargement en cours...</p>}
                <ForecastWeather />
            </main>
        );
    }
}
