// ********* SHOW THE DATA **************

//Create a function to become a method to use in the showLocation function to display.
export function getLocation(data) {
	const location = data.city.name;
	console.log(location);
	document.querySelector('#location').innerHTML = location;
};

export function showTemp(data){
	console.log(data);
	const weatherList = data.list;

	for(let i = 0; i < weatherList.length; i++){

		const kelvin = 273.15;
		const tempKelvin = weatherList[i].main.temp;
		// break out the temp conversion function to it's own file to use for different methods to make a switch button
		const tempCelcius = Math.round(tempKelvin - kelvin).toFixed(0);
		
		document.querySelector('#temp').innerHTML = tempCelcius;
	
	}

};

export function showWeather(data) {
	const weatherList = data.list;

	for(let i = 0; i < weatherList.length; i++){

		const currWeather = weatherList[i].weather[0].description;
		
		document.querySelector('#weather').innerHTML = currWeather;
	
	}

};

export function getWeatherIcon(data) {
	const weatherList = data.list;

	for(let i = 0; i < weatherList.length; i++){

		const currWeatherIcon = weatherList[i].weather[0].icon;
		
		document.querySelector('#icon').innerHTML = "<img src=\"http://openweathermap.org/img/w/"+currWeatherIcon+".png\" alt=\"current weather icon\" >";
	}
};


// use filter method to sort the dates, and use *1000 for figuring out the time.
// make one big container in html, then create the content for it as a js string that includes the data.