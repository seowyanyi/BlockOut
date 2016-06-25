import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import MessageComposer from './MessageComposer.jsx';
import MessageListItem from './MessageListItem.jsx';
import { Messages } from '../api/messages.js';
import NewSubGroup from './NewSubGroup.jsx';
import Avatar from './Avatar.jsx';
import SubGroupListItem from './SubGroupListItem';
import * as Actions from '../../client/actions/actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {composeWithTracker} from 'react-komposer';
import { randAvatarColor } from '../../client/helper.js'
import { Meteor } from 'meteor/meteor';
import EventCard from './EventCard.jsx';

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
    let currentColors = this.props.app.userColors
    this.props.messages.forEach(msg => {
      currentColors[msg.authorName] = randAvatarColor()      
    })

    const actions = bindActionCreators(Actions, this.props.dispatch);
    actions.updateAppStatus({
      userColors: currentColors
    })        
  }

  goToSubgroup(subGroupName) {
    const actions = bindActionCreators(Actions, this.props.dispatch);
    actions.updateAppStatus({
      subGroupName: subGroupName
    })    
    $(".offcanvasSidebar").addClass("off");    
  }

  sendMessage() {
    var text = this.props.app.composerText.trim();
    if (text) {
      Meteor.call('messages.insert', text, this.props.app.postalCode, this.props.app.subGroupName, localStorage.displayName);
    }    
    const actions = bindActionCreators(Actions, this.props.dispatch);
    actions.updateAppStatus({
      composerText: ''
    })           
  }

  render() {
    let messageListItems = []
    const actions = bindActionCreators(Actions, this.props.dispatch);
    const userColors = this.props.app.userColors

    if (this.props.messages && this.props.messages.length > 0) {
      let filteredMessages = this.props.messages.filter(msg => msg.postalCode === this.props.app.postalCode && msg.subGroupName === this.props.app.subGroupName)

      if (filteredMessages.length > 0) {
        // first message
        let message = filteredMessages[0]
        let nextName = filteredMessages.length > 1 ? filteredMessages[1].authorName : null

        if (message.authorName === 'LIST_OF_EVENTS') {
          messageListItems.push(
            <EventCard key={_.uniqueId()}/>
          )
        } else {
          messageListItems.push(
            <MessageListItem
              key={message._id}
              message={message}
              showIcon={message.authorName == nextName ? false : true}
              showName={true}
              color={userColors[message.authorName]}
            />
          )          
        }

        // middle messages
        for (let i=1; i<filteredMessages.length-1; ++i) {
          let message = filteredMessages[i]
          let nextName = filteredMessages[i+1].authorName
          let prevName = filteredMessages[i-1].authorName

          if (message.authorName === 'LIST_OF_EVENTS') {
            messageListItems.push(
              <EventCard key={_.uniqueId()}/>
            )
          } else {
            messageListItems.push(
              <MessageListItem
                key={message._id}
                message={message}
                showIcon={message.authorName == nextName ? false : true}
                showName={message.authorName != prevName ? true : false}
                color={userColors[message.authorName]}
              />
            )          
          }          
        }

        // last message
        if (filteredMessages.length > 1) {
          message = filteredMessages[filteredMessages.length-1]
          prevName = filteredMessages.length > 1 ? filteredMessages[filteredMessages.length-2].authorName : null          

          if (message.authorName === 'LIST_OF_EVENTS') {
            messageListItems.push(
              <EventCard key={_.uniqueId()}/>
            )
          } else {
            messageListItems.push(
              <MessageListItem
                key={message._id}
                message={message}
                showIcon={true}
                showName={message.authorName != prevName ? true : false}
                color={userColors[message.authorName]}
              />
            )            
          }
   
        }
      }
    }

    let filteredSubGroups = this.props.messages.filter(msg => msg.postalCode === this.props.app.postalCode);
    if (filteredSubGroups.length === 0) {
      // Meteor.call('messages.insert', `Welcome to Annoucements`, this.props.app.postalCode, 'Annoucements', 'BlockOut');      
      // Meteor.call('messages.insert', `Welcome to Events`, this.props.app.postalCode, 'Events', 'BlockOut');      
      // Meteor.call('messages.insert', `Welcome to Food`, this.props.app.postalCode, 'Food', 'BlockOut');          
    }

    let subGroups = _.uniq(_.pluck(filteredSubGroups, 'subGroupName'));

    let subGroupListItems = [];
    for (let i=0; i<subGroups.length; i++) {
      subGroupListItems.push(
        <SubGroupListItem 
        onClick={this.goToSubgroup.bind(this, subGroups[i])} 
        key={subGroups[i]} 
        subGroupName={subGroups[i]} 
        currentSubGroupName={this.props.app.subGroupName}/>
      );
    }

    return (
      <div className="message-section">
        <div className="message-thread-heading">
          <div onClick={this.goBack.bind(this)} className="backButton">
            <i className="fa fa-angle-left clickable"></i>
          </div>
          <span>{`#${this.props.app.postalCode}_ ${this.props.app.subGroupName}`}</span>
          <i className="fa fa-bars clickable"></i>
        </div>
        <ul className="message-list" ref="messageList">
          {messageListItems}
        </ul>
        <div className="composer">
          <MessageComposer 
            postalCode={this.props.app.postalCode} 
            displayName={localStorage.displayName}
            subGroupName={this.props.app.subGroupName}
            composerText={this.props.app.composerText}
            />
          <i onClick={this.sendMessage.bind(this)} className="fa fa-paper-plane clickable"></i>
        </div>

        <div className="hider">
        </div>

        <div className="offcanvasSidebar off">
          <i className="fa fa-times closeSidebar clickable"></i>
          <div className="user">
            <Avatar displayName={localStorage.displayName} />
            <div>
              <h2>{localStorage.displayName}</h2>
              <p>{`#${this.props.app.postalCode}`}</p>
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
function composer(props, onData) {
  if (Meteor.subscribe('messages').ready()) {
    const messages = Messages.find({}, {sort:{createdAt:-1}}).fetch()
    onData(null, {messages});
  };
};

const MeteorMessagesComp = composeWithTracker(composer)(MessageSection);

function mapStateToProps(state) {
  return {
    app: state.app
  };
}
export default connect(mapStateToProps)(MeteorMessagesComp)