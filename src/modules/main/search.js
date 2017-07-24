import React, { Component } from 'react';

class SearchBar extends Component {
	_handleSubmit(event) {
		event.preventDefault();
		this.props.queryPlace(this._queryString.value);
		this._queryString.value = "";
	}
	
	render() {
		return (
			<form onSubmit={this._handleSubmit.bind(this)}>
				<input placeholder="City..." ref={ (c) => {this._queryString = c} } required />
				<button type="submit">Search</button>
			</form>
		)
	}
}

export default SearchBar;