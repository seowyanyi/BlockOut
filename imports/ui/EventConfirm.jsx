import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class EventConfirm extends Component {
	goToCalendar() {
	    browserHistory.push('/calendar')
	  }
	  goHome() {
	    browserHistory.push('/home/chatmap')
	  }

  render() {
    return (
        <div className="apphome eventConfirm">
	        <div>
	          <div className="topbar">
	          <div className="backButton">
	            <i className="fa fa-angle-left clickable"></i>
	          </div>	
	            <h2>Event Confirmation</h2>
	            <i className="fa fa-search clickable"></i>
	          </div>
	        </div>
	        <div className="tick">
	        	<i className="fa fa-check-circle-o clickable"></i>
	        </div>
	        <div className="desc">
		        <p>
		        	You have joined the event! It has been added to your calendar. 
		        </p>
	        </div>
	        <div className="button">
	        	<button onClick={this.goToCalendar.bind(this)} className="cal">See Calendar</button>
	        	<button onClick={this.goHome.bind(this)} className="home">Back to Home</button>
	        </div>
	      </div>
      )
  }
}