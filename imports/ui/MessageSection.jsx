import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router'
import MessageComposer from './MessageComposer.jsx';
import MessageListItem from './MessageListItem.jsx';
import { Messages } from '../api/messages.js';
import NewSubGroup from './NewSubGroup.jsx'

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

  bindEventListeners() {
      $(".message-section .fa-bars").click(function() {
        $(".offcanvasSidebar").removeClass("off");
      })
      $(".offcanvasSidebar .fa-times").click(function() {
        $(".offcanvasSidebar").addClass("off");
      })
    }

  componentDidMount() {
      this.bindEventListeners()  
  }

  render() {
    let messageListItems = []
    if (this.props.messages && this.props.messages.length > 0) {
      let filteredMessages = this.props.messages.filter(msg => msg.postalCode === localStorage.postalCode && msg.subGroupName === localStorage.subGroupName)
      
      if (filteredMessages.length > 0) {
        // first message
        let message = filteredMessages[0]
        let nextName = filteredMessages.length > 1 ? filteredMessages[1].authorName : null
        messageListItems.push(
          <MessageListItem
            key={message._id}
            message={message}
            showIcon={message.authorName == nextName ? false : true}
            showName={true}
          />
        )
        for (let i=1; i<filteredMessages.length-1; ++i) {
          let message = filteredMessages[i]
          let nextName = filteredMessages[i+1].authorName
          let prevName = filteredMessages[i-1].authorName
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
        if (filteredMessages.length > 1) {
          message = filteredMessages[filteredMessages.length-1]
          prevName = filteredMessages.length > 1 ? filteredMessages[filteredMessages.length-2].authorName : null
          messageListItems.push(
            <MessageListItem
              key={message._id}
              message={message}
              showIcon={true}
              showName={message.authorName != prevName ? true : false}
            />
          )
        }
      }
  
    }

    return (
      <div className="message-section">
        <div className="message-thread-heading">
          <div onClick={this.goBack.bind(this)} className="backButton">
            <i className="fa fa-angle-left clickable"></i>
          </div>
          <span>{`#${localStorage.postalCode}_ ${localStorage.subGroupName}`}</span>
          <i className="fa fa-bars clickable"></i>
        </div>
        <ul className="message-list" ref="messageList">
          {messageListItems}
        </ul>
        <div className="composer">
          <MessageComposer postalCode={localStorage.postalCode} displayName={localStorage.displayName}/>
          <i className="fa fa-paper-plane clickable"></i>
        </div>

        <div className="hider">
        </div>

        <div className="offcanvasSidebar off">
          <i className="fa fa-times closeSidebar"></i>
          <div className="user">
            <img src="./user1.jpg" />
            <div>
              <h2>Louis</h2>
              <p>#437972</p>
            </div>
          </div>
          <div className="hr"></div>
          <div className="search">

          </div>
          <div className="channels">
            <ul>
              <li className="currentChannel"><button>#310490</button></li>
              <li><button>#Announcements</button></li>
              <li><button>#Events</button></li>
              <li><button>#Foodies</button></li>
            </ul>
          </div>
          <div className="addChannel">
            <ul>
              <li className="highlight"><button>Add New Channel</button></li>
            </ul>
            <NewSubGroup />
          </div>
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
