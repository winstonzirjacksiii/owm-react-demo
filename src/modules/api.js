const rootUrl = '//api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '86a810287d2c24dbf11c1cd623b0048c';
const units = '&units=imperial';

module.exports = {
	get: (place) => {
        return fetch(rootUrl + place + units + '&appid=' + apiKey, {
            headers: {}
        }).then(function(response) {
            return response.json();
        });
    }
}