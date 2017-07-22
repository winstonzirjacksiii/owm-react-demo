import React, { Component } from 'react';
import OpenApi from '../../modules/api';
import SearchBar from '../../modules/main/search';
import WeatherWidget from '../../modules/main/weather-widget';

class Main extends Component {
	constructor () {
		super();
		this.state = {
			activeQuery: '',
			weatherData: []
		}
	}

	searchForData(query) {
		OpenApi.get(query).then((data)=>{
			let updatedCities = this.state.weatherData;
			updatedCities.push(data);

			//prevent duplicate cities!

			console.log("updatedCities", updatedCities)

			this.setState({
				weatherData: updatedCities,
				activeQuery: query
			});
		});
	}

	deleteCity(id) {
		const updatedCities = this.state.weatherData.filter((x) => {return x.id == id});

		this.setState({ weatherData: updatedCities });
	}

	_renderWeatherWidgets() {
		return this.state.weatherData.map((x) => {
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
		const weatherWidgets = this._renderWeatherWidgets(); 

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