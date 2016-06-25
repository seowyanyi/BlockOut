import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import MessageComposer from './MessageComposer.jsx';
import MessageListItem from './MessageListItem.jsx';
import { Messages } from '../api/messages.js'; 

class MessageSection extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      thread: {
        name: '#310530',
        id: 123
      }
    }
  }

  componentDidMount() {
    this._scrollToBottom();
  }

  render() {
    let messageListItems = []
    if (this.props.messages && this.props.messages.length > 0) {
      // first message
      let message = this.props.messages[0]
      messageListItems.push(
        <MessageListItem
          key={message._id}
          message={message}
          showName={true}
        />
      )     
      for (let i=1; i<this.props.messages.length-1; ++i) {
        let message = this.props.messages[i]
        let nextName = this.props.messages[i+1].authorName
        let prevName = this.props.messages[i-1].authorName
        messageListItems.push(
          <MessageListItem
            key={message._id}
            message={message}
            showIcon={message.authorName == nextName ? false : true}
            showName={message.authorName != prevName ? true : false}
          />
        )      
      }
      // last message
      message = this.props.messages[this.props.messages.length-1]
      messageListItems.push(
        <MessageListItem
          key={message._id}
          message={message}
          showIcon={true}
        />
      )         
    }

    return (
      <div className="message-section">
        <div className="message-thread-heading">
          <i className="fa fa-angle-left"></i>
          <span>{this.state.thread.name}</span>
          <i className="fa fa-bars"></i>
        </div>
        <ul className="message-list" ref="messageList">
          {messageListItems}
        </ul>
        <div className="composer">
          <MessageComposer threadID={500} displayName={this.props.displayName}/>
          <i className="fa fa-paper-plane"></i>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    this._scrollToBottom();
  }

  _scrollToBottom() {
    let ul = ReactDOM.findDOMNode(this.refs.messageList);
    ul.scrollTop = ul.scrollHeight;
  }
}

export default createContainer(() => {
  Meteor.subscribe('messages');
  return {
    messages: Messages.find({}, {sort:{createdAt:-1}}).fetch()
  };
}, MessageSection);
