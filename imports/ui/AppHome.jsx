import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import {getCurrentTab} from '../../client/helper'
import ChatMapSection from './ChatMapSection.jsx'
import EventSection from './EventSection.jsx'
import Header from './Header.jsx'

export default class AppHome extends Component {
  goToChat() {
    browserHistory.push('/chat')
  }

  goToChatMap() {
    browserHistory.push('/home/chatmap')
  }

  goToEvents() {
    browserHistory.push('/home/events')
  }

  goToSettings() {
    browserHistory.push('/settings')
  }  

  goToCalendar() {
    browserHistory.push('/calendar')
  }

  goToNewAddress(query) {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query + '&region=SG&key=AIzaSyAx4LGLUUO9e0mmamfG1wpAxuJfTzHYfn0'
    $.get(url, function( data ) {
      console.log(data)
    });  
  }

  render() {
    let currentTab = getCurrentTab()
    let chatMapBtnClass = ''
    let eventsBtnClass = ''
    let mainContent = null
    if (currentTab === 'chatmap') {
      chatMapBtnClass = 'currentPage'
      mainContent = <ChatMapSection />
    } else {
      eventsBtnClass = 'currentPage'
      mainContent = <EventSection />
    }

    return (
      <div className="apphome">
        <div>
          <Header goToNewAddress={this.goToNewAddress.bind(this)}/>
          <div className="chatEventsToggle">
            <button onClick={this.goToChatMap.bind(this)} className={chatMapBtnClass}>CHAT</button>
            <button onClick={this.goToEvents.bind(this)} className={eventsBtnClass}>EVENTS</button>
          </div>
        </div>
        {mainContent}
        <div className="bottombar">
          <button className="currentPage"><i className="fa fa-home"></i></button>
          <button onClick={this.goToChat.bind(this)}><i className="fa fa-comment-o"></i></button>
          <button><i onClick={this.goToCalendar.bind(this)} className="fa fa-calendar"></i></button>
          <button><i onClick={this.goToSettings.bind(this)} className="fa fa-bars"></i></button>
        </div>
      </div>
      )
  }
}
