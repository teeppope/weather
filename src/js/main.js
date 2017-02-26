
import "normalize.css";
import "../styles/style.scss";
import { showCurrentTemp, showCurrentWeatherText, getCurrentWeatherIcon, getCurrentLocation } from "./weather";


// ********* GET THE DATA **************
const xhr = new XMLHttpRequest();
const key = ' ca49f0462203419c8c0195914172602';


//this configures xhr and data
// showlocation function runs when the xhr onreadystatechange is emitted
xhr.onreadystatechange = showLocation;

xhr.responseType = 'json';
xhr.open('GET', 'http://api.apixu.com/v1/current.json?key=' + key + '&q=vancouver', true );


//This is the handler that tells what to do with the data and executes after the send() method
function showLocation(){
	// Error handles
	if(xhr.readyState === this.DONE && xhr.status !== 200){
		console.log('check yoself');
	}
	// success handles
	if(xhr.readyState === this.DONE && xhr.status === 200){
		console.log(xhr.response);
		showCurrentTemp(xhr.response);
		showCurrentWeatherText(xhr.response);
		getCurrentWeatherIcon(xhr.response);
		getCurrentLocation(xhr.response);

	}

}

xhr.send('');