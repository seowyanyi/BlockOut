import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class Settings extends Component {
	goToChat() {
	    browserHistory.push('/chat')
	  }

	  goToSettings() {
	    browserHistory.push('/settings')
	  }  

	  goToCalendar() {
	    browserHistory.push('/calendar')
	  }
	  goBack() {
	    browserHistory.push('/home/chatmap')
	  }

  render() {

    return (
        <div className="apphome settings">
        <div>
          <div className="topbar">
          <div onClick={this.goBack.bind(this)} className="backButton">
            <i className="fa fa-angle-left clickable"></i>
        </div>	
            <h2>Settings</h2>
            <i className="fa fa-search clickable"></i>
          </div>
        </div>
        
        <div className="settingsItems">
        	<ul>
        		<li><img src="./settingsProfile.png" /><span>Profile</span></li>
        		<li><img src="./settingsHistory.png" /><span>History</span></li>
        		<li><img src="./settingsRecent.png" /><span>Recently Viewed</span></li>
        		<li><img src="./settingsInvite.png" /><span>Invite Friend</span></li>
        		<li><img src="./settingsHelp.png" /><span>FAQ</span></li>
        	</ul>
        </div>

        <div className="bottombar">
          <button onClick={this.goBack.bind(this)}><i className="fa fa-home"></i></button>
          <button onClick={this.goToChat.bind(this)}><i className="fa fa-comment-o"></i></button>
          <button><i onClick={this.goToCalendar.bind(this)} className="fa fa-calendar"></i></button>
          <button className="currentPage"><i onClick={this.goToSettings.bind(this)} className="fa fa-bars"></i></button>
        </div>
      </div>
      )
  }
}