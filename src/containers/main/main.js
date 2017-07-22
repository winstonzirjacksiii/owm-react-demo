import React, { Component } from 'react';
import OpenApi from '../../modules/api';

class Main extends Component {
	constructor () {
		super();
		this.state = {
			activeQuery: '',
			weatherData: []
		}
	}
}

export default Main;