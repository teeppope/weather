// This is code to grab the Current Weather data

export function getCurrentLocation(data) {
	const city = data.location.name;
  document.getElementById('location').insertAdjacentHTML('afterbegin',`${city}`);
};

export function showCurrentTemp(data){
	const temperature = data.current.temp_c;
  document.getElementById('temp').insertAdjacentHTML('afterbegin',`
      <p>${temperature}</p>
  `);
};

export function showCurrentWeatherText(data) {
	const description = data.current.condition.text;
  document.getElementById('weather').insertAdjacentHTML('afterbegin',`
      <p>${description}</p>
  `);
};

export function getCurrentWeatherIcon(data) {
	const icon = data.current.condition.icon;
  document.getElementById('icon').insertAdjacentHTML('afterbegin',`
      <img src=\"${icon}\" alt=\"current weather icon\" >
  `);
};
