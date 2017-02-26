
import "normalize.css";
import "../styles/style.scss";
import { showTemp, showWeather, getWeatherIcon, getLocation } from "./weather";


console.log('Javascript works');

// ********* GET THE DATA **************
const xhr = new XMLHttpRequest();
//this configures xhr and data
// showlocation function runs when the xhr onreadystatechange is emitted
xhr.onreadystatechange = showLocation;

xhr.responseType = 'json';
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=6173331&appid=814ca4b3a3fbcb87b9d578be5f63b729', true );


//This is the handler that tells what to do with the data and executes after the send() method
function showLocation(){
	// Error handles
	if(xhr.readyState === this.DONE && xhr.status !== 200){
		console.log('check yoself');
	}
	// success handles
	if(xhr.readyState === this.DONE && xhr.status === 200){

		showTemp(xhr.response);
		showWeather(xhr.response);
		getWeatherIcon(xhr.response);
		getLocation(xhr.response);

	}

}

xhr.send('');