import React, { Component } from 'react';
import SearchBar from '../../modules/main/search';
import WeatherWidget from '../../modules/main/weather-widget';
import AppStore from '../../modules/appStorage';
import OpenApi from '../../modules/api';

class Main extends Component {
	constructor () {
		super();
		this.state = {
			activeQuery: '',
			weatherData: [],
			cityIds: []
		};
		this.appStore = AppStore("owm-react-demo");
	}

	componentDidMount() {
		const localData = this.appStore.get();
		if (localData && localData.length) {
			OpenApi.getManyWeather(localData).then((data) => {
				if (parseInt(data.cod, 10) >= 400) { 
					throw "city(s) not found"; 
				}

				this.setState({
					weatherData: data.list,
					cityIds: localData
				});
			}).catch((error) => {
				alert(error, " during componentDidMount");
			});

			// this.setState({
			// 	weatherData: localData
			// });
		}
	}

	searchForData(query) {
		OpenApi.getSingleWeather(query).then((data)=>{
			let updatedCities = this.state.weatherData,
				updatedIds = this.state.cityIds;

			if (updatedIds.indexOf(data.id) !== -1) {
				updatedCities = updatedCities.map((x) => {
					return data.id === x.id ? data : x;
				});

				console.log("Refreshed City: ", data.name);	
			} else {
				updatedIds.push(data.id);
				updatedCities.push(data);

				console.log("Added City: ", updatedCities);
			}

			this.appStore.storeData(updatedIds);

			// const existingCount = updatedCities.reduce((val, x) => {if (data.name === x.name) { return val+1 } }, 0);

			// if (existingCount === 0) {
			// 	updatedCities.push(data);
			// 	console.log("Added City: ", updatedCities);
			// } else {
			// 	updatedCities = this.state.weatherData.filter((x) => {return x.id !== data.id});	
			// 	updatedCities.push(data);
			// 	console.log("Refreshed City: ", data.name);	
			// }
			// this.appStore.storeData(updatedCities);

			this.setState({
				weatherData: updatedCities,
				cityIds: updatedIds,
				activeQuery: query
			});
		});
	}

	deleteCity(id) {
		const updatedCities = this.state.weatherData.filter((x) => { return x.id !== id });
		const updatedIds = this.state.cityIds.filter((listId) => { return listId !== id });

		this._saveCitiesList(updatedIds, updatedCities);
	}

	updateCity(id, data) {
		const updatedCities = this.state.weatherData.map((x) => {
			return x.id === id ? data : x; 
		});

		this._saveCitiesList(this.state.cityIds, updatedCities);
	}

	_saveCitiesList(updatedIds, updatedCities) {
		this.appStore.storeData(updatedIds);
		this.setState({ 
			cityIds: updatedIds,
			weatherData: updatedCities 
		});
	}

	_renderWeatherWidgets() {
		const weatherDatas = Array.isArray(this.state.weatherData) ? this.state.weatherData : [];

		return weatherDatas.map((x) => {
			return (
				<WeatherWidget 	key={x.id} 
								id={x.id} 
								name={x.name} 
								description={x.weather} 
								meta={x.main} 
								deleteFunc={this.deleteCity.bind(this)} />
			);
		});
	}

	render() {
		const weatherWidgets = this.state.cityIds.length ? this._renderWeatherWidgets() : ""; 

		return (
			<div>
				<section className='m-main_header'>
					<SearchBar queryPlace={this.searchForData.bind(this)} />
				</section>
				<section className='m-main_content'>
					<div className='m-main_widgets'>
						{weatherWidgets}
					</div>
				</section>
			</div>
		)
	}
}

export default Main;