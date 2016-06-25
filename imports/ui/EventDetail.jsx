import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class EventDetail extends Component {
	goToEventList() {
	    browserHistory.push('/eventlist')
	  }
	  joinEvent() {
	    browserHistory.push('/eventconfirm')
	  }

  render() {
    return (
        <div className="apphome eventDetail">
	        <div>
	          <div className="topbar">
	          <div onClick={this.goToEventList.bind(this)} className="backButton">
	            <i className="fa fa-angle-left clickable"></i>
	          </div>	
	            <h2>Event Detail</h2>
	            <i className="fa fa-search clickable"></i>
	          </div>
	        </div>
	        <div className="feature">
	        	<img src="eventBreakfast.jpg" />
	        	<h2>Mdm Tan's Breakfast</h2>
	        </div>
	        <div className="dateTime">
		        <div className="date">
		        	<i className="fa fa-calendar clickable"></i>
		        	<span>28 JUN 2016</span>
		        </div>
		        <div className="time">
		        	<i className="fa fa-clock-o clickable"></i>
		        	<span>08:30AM</span>
		        </div>
	        </div>
	        <div className="hr"></div>
	        <div className="priceTime">
		        <div className="price">
		        	<h3>Price</h3>
		        	<p>$5</p>
		        </div>
	        </div>
	        <div className="hr"></div>
	        <div className="info">
		        <h4>Description</h4>
		        <p>Local breakfast with homemade toast & savoury spreads. Pick up these treats at the void deck before you leave for your busy day at work.</p>
		        <div className="hosted">
			        <span>Hosted By</span>
			        <div className="host"><img src="./eventHost.png" /><span>Ann Tan</span></div>
		        </div>
	        </div>
	        <div className="hr"></div>
	        <div className="guests">
		        <h4>Guest List</h4>
		        <div className="guestList">
			        <img src="./user1.jpg" />
			        <img src="./user3.jpg" />
			        <img src="./user5.jpg" />
			        <i className="fa fa-angle-right clickable"></i>
		        </div>
	        </div>
	        <div className="info">
	        	<button onClick={this.joinEvent.bind(this)} className="join">Join!</button>
	        </div>
	      </div>
      )
  }
}