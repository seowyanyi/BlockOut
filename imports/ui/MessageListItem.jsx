import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MessageListItem extends Component {
  render() {
    let message = this.props.message;
    return (
      <li className="message-list-item">
        <div className="message-row">
          {this.props.showName ? <div className="author-icon"></div> : ''}          
          <div className="message-text">{message.text}</div>
        </div>
        {this.props.showName ? <h5 className="message-author-name">{message.authorName}</h5> : ''}        
      </li>
    );
  }
}