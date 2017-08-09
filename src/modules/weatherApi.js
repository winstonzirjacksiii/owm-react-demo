const APIWRAPPER = (() => {
	const rootUrl = '//api.openweathermap.org/data/2.5/';
	const individualLookup = 'weather?q=';
	const manyLookup = 'group?id=';
	const apiKey = '86a810287d2c24dbf11c1cd623b0048c';
	const units = '&units=imperial';

	return {
	    getSingleWeather: (place) => {
			const baseUrl = rootUrl +
						  	individualLookup +
						  	place;

		    return fetch(baseUrl + units + '&appid=' + apiKey, {
		        headers: {}
		    }).then((response) => {
		        return response.json();
		    });
		},
	    getManyWeather: (places) => {
			let baseUrl = "";

			if (Array.isArray(places)) {
				baseUrl = rootUrl +
						  manyLookup +
						  places.join(",");
			} else {
				baseUrl = rootUrl +
						  individualLookup +
						  places;
			}

		    return fetch(baseUrl + units + '&appid=' + apiKey, {
		        headers: {}
		    }).then((response) => {
		        return response.json();
		    });
		},
		getWeatherById: (id) => {
			const baseUrl = rootUrl + manyLookup + id;
			return fetch(baseUrl + units + '&appid=' + apiKey, {
		        headers: {}
		    }).then((response) => {
		        return response.json();
		    });
		}
	}
})();

export default APIWRAPPER;