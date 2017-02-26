// ********* SHOW THE DATA **************

// Current Weather Infomation

//Create a function to become a method to use in the showLocation function to display.
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


// use filter method to sort the dates, and use *1000 for figuring out the time.
// make one big container in html, then create the content for it as a js string that includes the data.