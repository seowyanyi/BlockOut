import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../api/messages.js'; 
import { Meteor } from 'meteor/meteor';
import MessageSection from './MessageSection.jsx'
import LoginSection from './LoginSection.jsx'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayName: '',
      postalCode: 0
    }
  }

  login(postalCode, displayName) {
    this.setState({postalCode: postalCode, displayName: displayName})
  }
 
  render() {
    let content = <LoginSection onLogin={this.login.bind(this)}/>
    if (this.state.displayName) {
      content = <MessageSection 
        messages={this.props.messages}
        displayName={this.state.displayName}
        postalCode={this.state.postalCode}
        />
    }
    return (
      <div className="container">
        {content}       
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('messages');
  return {
    messages: Messages.find({}, {sort:{createdAt:-1}}).fetch()
  };
}, App);