import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class EventList extends Component {

	goToEvents() {
	    browserHistory.push('/home/events')
	  }

  render() {
    return (
        <div className="apphome eventList">
        <div>
          <div className="topbar">
          <div onClick={this.goToEvents.bind(this)} className="backButton">
            <i className="fa fa-angle-left clickable"></i>
        </div>	
            <h2>Events @ #310530</h2>
            <i className="fa fa-bars clickable"></i>
          </div>
        </div>
        
        <div className="eventItemsMonth first">
        	<h3>JUN 2016</h3>
	        <div className="eventItemsDay">
	        <h4>Monday 27th</h4>
		        <ul>
	        		<li><div className="img"><img src="./event5.jpg" /></div><div className="info"><h3>Mdm Tan's Breakfast</h3><p><span><i className="fa fa-clock-o"></i>07:30AM</span><span><i className="fa fa-users clickable"></i>3 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Block 155</span></p></div></li>
	        		<li><div className="img"><img src="./event1.jpg" /></div><div className="info"><h3>Friendly Tennis Match</h3><p><span><i className="fa fa-clock-o"></i>08:30AM</span><span><i className="fa fa-users clickable"></i>2 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Block 155</span></p></div></li>
	        		<li><div className="img"><img src="./event2.jpg" /></div><div className="info official"><h3>Dairy Farm Visit</h3><p><span><i className="fa fa-clock-o"></i>09:30AM</span><span><i className="fa fa-users clickable"></i>14 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Toa Payoh CC</span></p></div></li>
	        	</ul>
	        </div>
	        <div className="eventItemsDay">
	        <h4>Tuesday 28th</h4>
		        <ul>
		        	<li><div className="img"><img src="./event5.jpg" /></div><div className="info"><h3>Mdm Tan's Breakfast</h3><p><span><i className="fa fa-clock-o"></i>07:30AM</span><span><i className="fa fa-users clickable"></i>3 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Block 155</span></p></div></li>
	        		<li><div className="img"><img src="./event3.jpg" /></div><div className="info official"><h3>Green Movement</h3><p><span><i className="fa fa-clock-o"></i>09:30AM</span><span><i className="fa fa-users clickable"></i>3 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Block 155</span></p></div></li>
	        	</ul>
	        </div>
	        <div className="eventItemsDay">
	        <h4>Wednesday 29th</h4>
		        <ul>
		        	<li><div className="img"><img src="./event5.jpg" /></div><div className="info"><h3>Mdm Tan's Breakfast</h3><p><span><i className="fa fa-clock-o"></i>07:30AM</span><span><i className="fa fa-users clickable"></i>3 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Block 155</span></p></div></li>
	        		<li><div className="img"><img src="./event4.jpg" /></div><div className="info"><h3>Swimming Competition</h3><p><span><i className="fa fa-clock-o"></i>07:30PM</span><span><i className="fa fa-users clickable"></i>3 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Toa Payoh Sports Hall</span></p></div></li>
	        	</ul>
	        </div>
	        <div className="eventItemsDay">
	        <h4>Thursday 30th</h4>
		        <ul>
		        	<li><div className="img"><img src="./event5.jpg" /></div><div className="info"><h3>Mdm Tan's Breakfast</h3><p><span><i className="fa fa-clock-o"></i>07:30AM</span><span><i className="fa fa-users clickable"></i>3 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Block 155</span></p></div></li>
	        	</ul>
	        </div>
        </div>
        <div className="eventItemsMonth">
        	<h3>JUL 2016</h3>
        	<div className="eventItemsDay">
	        <h4>Friday 1st</h4>
		        <ul>
		        	<li><div className="img"><img src="./event6.jpg" /></div><div className="info"><h3>Monthly Block Jog</h3><p><span><i className="fa fa-clock-o"></i>07:00AM</span><span><i className="fa fa-users clickable"></i>8 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Block 155</span></p></div></li>
		        	<li><div className="img"><img src="./event5.jpg" /></div><div className="info"><h3>Mdm Tan's Breakfast</h3><p><span><i className="fa fa-clock-o"></i>07:30AM</span><span><i className="fa fa-users clickable"></i>3 Vacancies</span><span><i className="fa fa-map-marker clickable"></i>Block 155</span></p></div></li>
	        	</ul>
	        </div>
        </div>
        
      </div>
      )
  }
}