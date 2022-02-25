import {Component} from "react";
import CurrentWeather from "../components/CurrentWeather";
import ForecastWeather from "../components/ForecastWeather";
import {weatherService} from "../services/weather.service";
import CurrentTime from "../components/CurrentTime";
import FavoriteWeather from "../components/FavoriteWeather";
import ForecastWeatherNextDays from "../components/ForecastWeatherNextDays";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: null,
            weather: null,
            temperature: null,
            icon: null,
            loading: false,
            forecastData: null,
            forecastDataNextDays: null,
            loadingForecastDataNextDays: false,
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
            humidity: data.humidity
        });

        const forecastData = await weatherService.getForecastWeather();
        this.setState({
            forecastData: forecastData,
            loading: true
        });

        const forecastDataNextDays = await weatherService.getForecastWeatherNextDays();
        this.setState({
            forecastDataNextDays: forecastDataNextDays,
            loadingForecastDataNextDays: true
        });
    }

    render() {
        return (
            <main className="container mx-auto px-4 pb-[60px] pt-4 max-w-[640px]">
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
                    />
                    <ForecastWeather forecastData={this.state.forecastData} />
                    {this.state.loadingForecastDataNextDays ?
                        <ForecastWeatherNextDays forecastData={this.state.forecastDataNextDays} />
                        :
                        null
                    }
                    </> : <p className="text-center py-6">Chargement en cours...</p>}

            </main>
        );
    }
}
