import React, { Component } from 'react';

class WeatherWidget extends Component {
	_handleDelete() {
		this.props.deleteFunc(this.props.id);
	}
	_tempClass(temp) {
		let bgColor = 'is-temp_';
        
        // Set the background colour based on the temperature
        if (temp >= 100) {
            bgColor += 'hot';
        } else if (temp < 100 && temp > 85) {
            bgColor += 'very-warm';
        } else if (temp <= 85  && temp > 70) {
            bgColor += 'warm';
        } else if (temp <= 70 && temp > 65) {
            bgColor += 'cool';
        } else if (temp <= 65 && temp > 50) {
            bgColor += 'cold';
        } else if (temp <= 50) {
        	bgColor += 'very-cold';
        }
        return bgColor;
	}
	render() {
		const weatherDesc = this.props.description.map((desc, i) => {
			return (
				<span key={i}>
					{desc.main}
					<img className="m-weather-widget_weather-desc-img" alt={desc.main} src={"//openweathermap.org/img/w/"+desc.icon+".png"}/>
				</span>
			);
		});
		const colorClass = this._tempClass(this.props.meta.temp);
		return (
			<div className="m-weather-widget_container">
				<div id={`widget-${this.props.id}`} className={`m-weather-widget ${colorClass}`}>
					<button className="m-btn_delete" onClick={this._handleDelete.bind(this)}>X</button>
					<h2>{this.props.name}</h2>
					<div className="m-weather-widget_weather-desc">
						{weatherDesc}
					</div>
					<div className="m-weather-widget_meta-container">
						<div className="m-weather-widget_meta">
							<p className='m-weather-widget_meta-current-temp'>Temp: {this.props.meta.temp}</p>
							<p>High: {this.props.meta.temp_max}</p>
							<p>Low: {this.props.meta.temp_min}</p>
						</div>
						<div className="m-weather-widget_meta">
							<p>Humidity: {this.props.meta.humidity}</p>
							<p>Pressure: {this.props.meta.pressure}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default WeatherWidget;