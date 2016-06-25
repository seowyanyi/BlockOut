import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ENTER_KEY_CODE = 13;

export default class NewSubGroup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      subGroupName: ''
    }
  }

  _onChange(event, value) {
    this.setState({subGroupName: event.target.value})
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var subGroupName = this.state.subGroupName.trim();
      if (subGroupName) {
        Meteor.call('messages.insert', `Welcome to ${subGroupName}`, localStorage.postalCode, subGroupName, 'BlockOut');
        localStorage.subGroupName = subGroupName
      }
      this.setState({newSubGroup: ''});
    }
  }

  render() {
    return (
      <textarea
        id="newSubGroup"
        name="newSubGroup"
        placeholder="Add New Group"
        value={this.state.newSubGroup}
        onChange={this._onChange.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
      />
    );
  }
}
