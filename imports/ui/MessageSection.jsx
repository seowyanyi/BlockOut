import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router'
import MessageComposer from './MessageComposer.jsx';
import MessageListItem from './MessageListItem.jsx';
import { Messages } from '../api/messages.js';
import NewSubGroup from './NewSubGroup.jsx';
import Avatar from './Avatar.jsx';
import SubGroupListItem from './SubGroupListItem';

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

    let filteredSubGroups = this.props.messages.filter(msg => msg.authorName === localStorage.displayName);
    let subGroups = _.uniq(_.pluck(filteredSubGroups, 'subGroupName'));
    console.table(subGroups);
    let subGroupListItems = [];
    for (let i=0; i<subGroups.length; i++) {
      subGroupListItems.push(
        <SubGroupListItem subGroupName={subGroups[i]}/>
      );
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

        <div className="offcanvasSidebar off">
          <i className="fa fa-times closeSidebar clickable"></i>
          <div className="user">
            <Avatar displayName={localStorage.displayName} />
            <div>
              <h2>{localStorage.displayName}</h2>
              <p>{`#${localStorage.postalCode}`}</p>
            </div>
          </div>
          <div className="hr"></div>
          <div className="search">

          </div>
          <div className="channels">
            <ul>
              {subGroupListItems}
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
