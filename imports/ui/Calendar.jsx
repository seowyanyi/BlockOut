import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class Calendar extends Component {
	  goToChat() {
	    browserHistory.push('/chat')
	  }
	  goToSettings() {
	    browserHistory.push('/settings')
	  }  
	  goBack() {
	    browserHistory.push('/home/chatmap')
	  }

  render() {
    return (
        <div className="apphome calendar">
        <div>
          <div className="topbar">
            <h2>Calendar</h2>
          </div>
        </div>
        
        <div className="calendar-content">
        	<img src="cal.jpg" />
        </div>

        <div className="bottombar">
          <button onClick={this.goBack.bind(this)}><i className="fa fa-home"></i></button>
          <button onClick={this.goToChat.bind(this)}><i className="fa fa-comment-o"></i></button>
          <button className="currentPage"><i className="fa fa-calendar"></i></button>
          <button><i onClick={this.goToSettings.bind(this)} className="fa fa-bars"></i></button>
        </div>
      </div>
      )
  }
}