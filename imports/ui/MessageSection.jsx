import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageComposer from './MessageComposer.jsx';
import MessageListItem from './MessageListItem.jsx';

function getMessageListItem(message) {
  return (
    <MessageListItem
      key={message._id}
      message={message}
    />
  );
}

export default class MessageSection extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      thread: {
        name: 'hackk',
        id: 123
      }
    }
  }

  componentDidMount() {
    this._scrollToBottom();
  }

  render() {
    let messageListItems = this.props.messages.map(getMessageListItem);
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
          <MessageComposer threadID={this.state.thread.id}/>
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

  /**
   * Event handler for 'change' events coming from the MessageStore
   */
  _onChange() {
    // this.setState(getStateFromStores());
  }

}
