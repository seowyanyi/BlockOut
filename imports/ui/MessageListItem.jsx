import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MessageListItem extends Component {
  render() {
    let message = this.props.message;
    const lastMessageClass = this.props.showIcon ? 'message-list-item last-message' : 'message-list-item';
    const lastTimeClass = this.props.showIcon ? 'message-time' : '';
    return (
      <li className={lastMessageClass}>
        <div className="message-row">
          <div className="author">
            {this.props.showIcon ? <div className="author-icon"></div> : ''}          
          </div>
          <div className="message-content">
            {this.props.showName ? <span className="message-author-name">{message.authorName}</span> : ''}
            <div className="message-text">{message.text}</div>
            <div className={lastTimeClass}>
            {this.props.showIcon ? new Date(message.timestamp).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}) : ''}
            </div>
          </div>
        </div>
      </li>
    );
  }
}