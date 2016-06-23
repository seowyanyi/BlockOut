import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MessageListItem extends Component {
  render() {
    let message = this.props.message;
    return (
      <li className="message-list-item">
        <h5 className="message-author-name">{message.authorName}</h5>
        <div className="message-time">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
        <div className="message-text">{message.text}</div>
      </li>
    );
  }
}