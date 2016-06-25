import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const ENTER_KEY_CODE = 13;

export default class MessageComposer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    }
  }

  _onChange(event, value) {
    this.setState({text: event.target.value})
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text) {
          Meteor.call('messages.insert', text, this.props.postalCode, this.props.subGroupName, this.props.displayName);
      }
      this.setState({text: ''});
    }
  }

  render() {
    return (
      <textarea
        className="message-composer"
        name="message"
        placeholder="Post a message"
        value={this.state.text}
        onChange={this._onChange.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
      />
    );
  }
}
