import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageComposer from './MessageComposer.jsx';
import MessageListItem from './MessageListItem.jsx';

export default class MessageSection extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      thread: {
        name: '#310480',
        id: 123
      }
    }
  }

  componentDidMount() {
    this._scrollToBottom();
  }

  render() {
    let messageListItems = []
    for (let i=0; i<this.props.messages.length-1; ++i) {
      let message = this.props.messages[i]
      let nextName = this.props.messages[i+1].authorName
      messageListItems.push(
        <MessageListItem
          key={message._id}
          message={message}
          showName={message.authorName == nextName ? false : true}
        />
      )      
    }
    // last message
    let message = this.props.messages[this.props.messages.length-1]
    messageListItems.push(
      <MessageListItem
        key={message._id}
        message={message}
        showName={true}
      />
    )   
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
<<<<<<< Updated upstream
          <MessageComposer threadID={500} displayName={this.props.displayName}/>
=======
          <MessageComposer threadID={this.state.thread.id}/>
>>>>>>> Stashed changes
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
