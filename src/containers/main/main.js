import React, { Component } from 'react';
import OpenApi from '../../modules/api';
import SearchBar from '../../modules/main/search';

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

	render() {
		return (
			<div>
				<section className='m-main_header'>
					<SearchBar queryPlace={this.searchForData.bind(this)} />
				</section>
				<section className='m-main_content'>
					<div className='m-main_widgets'>
					</div>
				</section>
			</div>
		)
	}
}

export default Main;