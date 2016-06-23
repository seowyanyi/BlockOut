import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../api/messages.js'; 
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';
import MessageSection from './MessageSection.jsx'

class App extends Component {
 
  render() {
    return (
      <div className="container">
        <AccountsUIWrapper />
        {this.props.currentUser ? 
          <MessageSection messages={this.props.messages}/> : ''
        }        
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('messages');
  return {
    messages: Messages.find({}, {sort:{createdAt:-1}}).fetch(),
    currentUser: Meteor.user()
  };
}, App);