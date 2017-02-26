export class WeatherService {

	makeXHR(type, callback) {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = handleChange;

		xhr.responseType = 'json';

		if(type === 'forecast') {
			xhr.open('GET', 'https://api.apixu.com/v1/'+ type +'.json?key=ca49f0462203419c8c0195914172602&q=vancouver&days=3', true );
		} else {
			xhr.open('GET', 'https://api.apixu.com/v1/'+ type +'.json?key=ca49f0462203419c8c0195914172602&q=vancouver', true );
		}

		//This is the handler that tells what to do with the data and executes after the send() method
		function handleChange(){
			// Error handles
			if(xhr.readyState === this.DONE && xhr.status !== 200){
				console.log('check yoself');
			}
			// success handles
			if(xhr.readyState === this.DONE && xhr.status === 200){
				callback(xhr.response);
			}

		}
		xhr.send('');
	}

	getCurrent(callback) {
		this.makeXHR('current', callback);
	}

	getForcast(callback) {
		this.makeXHR('forecast', callback);
	}

}

// 	const xhr = new XMLHttpRequest();
// 	const key = ' ca49f0462203419c8c0195914172602';


// 	//this configures xhr and data
// 	// showCurrent function runs when the xhr onreadystatechange is emitted
// 	xhr.onreadystatechange = showCurrent;

// 	xhr.responseType = 'json';
// 	xhr.open('GET', 'http://api.apixu.com/v1/current.json?key=' + key + '&q=vancouver', true );


// 	//This is the handler that tells what to do with the data and executes after the send() method
// 	function showCurrent(){
// 		// Error handles
// 		if(xhr.readyState === this.DONE && xhr.status !== 200){
// 			console.log('check yoself');
// 		}
// 		// success handles
// 		if(xhr.readyState === this.DONE && xhr.status === 200){
// 			console.log(xhr.response);
// 			showCurrentTemp(xhr.response);
// 			showCurrentWeatherText(xhr.response);
// 			getCurrentWeatherIcon(xhr.response);
// 			getCurrentLocation(xhr.response);

// 		}

// 	}

// xhr.send('');