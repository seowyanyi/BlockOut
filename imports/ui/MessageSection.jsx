import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router'
import MessageComposer from './MessageComposer.jsx';
import MessageListItem from './MessageListItem.jsx';
import { Messages } from '../api/messages.js'; 

class MessageSection extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this._scrollToBottom();
  }

  goBack() {
    browserHistory.push('/home/chatmap')
  }

  render() {
    let messageListItems = []


    if (this.props.messages && this.props.messages.length > 0) {
      // first message
      let message = this.props.messages[0]
      let nextName = this.props.messages.length > 1 ? this.props.messages[1].authorName : null
      messageListItems.push(
        <MessageListItem
          key={message._id}
          message={message}
          showIcon={message.authorName == nextName ? false : true}          
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
      prevName = this.props.messages.length > 1 ? this.props.messages[this.props.messages.length-2].authorName : null
      messageListItems.push(
        <MessageListItem
          key={message._id}
          message={message}
          showIcon={true}
          showName={message.authorName != prevName ? true : false}
        />
      )         
    }

    return (
      <div className="message-section">
        <div className="message-thread-heading">          
          <div onClick={this.goBack.bind(this)} className="backButton">
            <i className="fa fa-angle-left"></i>
          </div>
          <span>{localStorage.postalCode}</span>
          <i className="fa fa-bars"></i>
        </div>
        <ul className="message-list" ref="messageList">
          {messageListItems}
        </ul>
        <div className="composer">
          <MessageComposer threadID={500} displayName={localStorage.displayName}/>
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
