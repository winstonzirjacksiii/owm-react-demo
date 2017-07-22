import React, { Component } from 'react';

class WeatherWidget extends Component {
	_handleDelete() {
		this.props.deleteFunc(this.props.id);
	}
	render() {
		let weatherDesc = this.props.description.map((desc) => {return desc.main}).join(", ");
		return (
			<div id="widget-{this.props.key}" className="m-weather-widget">
				<button onClick={this._handleDelete.bind(this)}>X</button>
				<h2>{this.props.name}</h2>
				<div className="m-weather-widget_weather-desc">
					{weatherDesc}
				</div>
				<div className="m-weather-widget_meta-container">
					<div className="m-weather-widget_meta">
						<p>Current Temp: {this.props.meta.temp}</p>
						<p>High: {this.props.meta.temp_max}</p>
						<p>Low: {this.props.meta.temp_min}</p>
					</div>
					<div className="m-weather-widget_meta">
						<p>Humidity: {this.props.meta.humidity}</p>
						<p>Pressure: {this.props.meta.pressure}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default WeatherWidget;

/*
data.name == PLACENAME
data.weather == [ {description: "clear sky", icon: "01n", id: 800, main: "Clear"},.. ]
data.main == {
	humidity: 76,
	pressure: 1015,
	temp: 287.87,
	temp_max: 289.15,
	temp_min: 286.15
}
*/