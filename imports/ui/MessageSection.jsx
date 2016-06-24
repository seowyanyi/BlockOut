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
        <h3 className="message-thread-heading">#{this.props.postalCode}</h3>
        <ul className="message-list" ref="messageList">
          {messageListItems}
        </ul>
        <MessageComposer threadID={this.state.thread.id} displayName={this.props.displayName}/>
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
