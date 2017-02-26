// This is code to grab the Current Weather data

export function getCurrentLocation(data) {
	const location = data.location.name;

	document.querySelector('#location').innerHTML = location;
};

export function showCurrentTemp(data){
	const temperature = data.current.temp_c;

	document.querySelector('#temp').innerHTML = temperature;

};

export function showCurrentWeatherText(data) {
	const description = data.current.condition.text;

	document.querySelector('#weather').innerHTML = description;
	
};

export function getCurrentWeatherIcon(data) {
	const icon = data.current.condition.icon;

	document.querySelector('#icon').innerHTML = "<img src=\""+icon+"\" alt=\"current weather icon\" >";
};
