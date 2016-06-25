import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class EventCard extends Component {

	goToEvent() {
		browserHistory.push('/event_detail')
	}

	render() {
		return (
			
			<div className="eventPopup">
			<h2>Ann Tan is hosting an event!</h2>
			<div className="card">
				<div className="img">
					<img src="./event5.jpg" />
				</div>
				<div className="info">
					<h3>Mdm Tan's Breakfast</h3>
					<p>Block 154 Void Deck</p>
					<p>27 JUN 2016 | 07:30AM</p>
				</div>
			</div>
			<button onClick={this.goToEvent.bind(this)}>Join!</button>
			</div>

			)
}
}