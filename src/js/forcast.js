// This is code to grab the Forcasted Weather data

export function getWeatherForecast(data) {
	console.log(data);
}

function getMainForecastArray(data) {
	const forecastDate = data.forecast.forecastday;
	return forecastDate;
}

export function	showForcastDayInfo(data) {
	const theDate = getMainForecastArray(data);
	const forecastArea = document.getElementById('forecast');

	for (var i = 0; i < theDate.length; i++) {
		const date = theDate[i].date;
		const maxTemp = theDate[i].day.maxtemp_c;
		const minTemp = theDate[i].day.mintemp_c;
		const conditionIcon = theDate[i].day.condition.icon;
		const conditionDescription = theDate[i].day.condition.text;

		forecastArea.insertAdjacentHTML(
			'afterbegin', `<div>
							         ${maxTemp}
						        </div>
						        <div>
						          ${minTemp}
						        </div>
						        <div>
							         ${date}
						        </div>
						        <div>
                      <img src="${conditionIcon}" alt="${conditionDescription} icon">
						        </div>
						        <div>
                      ${conditionDescription}
						        </div>`
		);
	}
}

