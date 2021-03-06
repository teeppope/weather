
import "normalize.css";
import "../styles/style.scss";
import { WeatherService } from "./weather-service";
import { showCurrentTemp, showCurrentWeatherText, getCurrentWeatherIcon, getCurrentLocation } from "./current";
import { getWeatherForecast, showForcastDayInfo } from "./forcast";


const api = new WeatherService();

api.getCurrent(function(data) {
	showCurrentTemp(data);
	showCurrentWeatherText(data);
	getCurrentWeatherIcon(data);
});
api.getForecast(function(data){
	showForcastDayInfo(data);
	getWeatherForecast(data);
});
