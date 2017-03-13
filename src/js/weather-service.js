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

	getForecast(callback) {
		this.makeXHR('forecast', callback);
	}

}
