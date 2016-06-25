import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import * as Actions from '../../client/actions/actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ENTER_KEY_CODE = 13;

export default class MessageComposer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  _onChange(event, value) {
    const actions = bindActionCreators(Actions, this.props.dispatch);
    actions.updateAppStatus({
      composerText: event.target.value,
    })
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.props.app.composerText.trim();
      if (text) {
        Meteor.call('messages.insert', text, this.props.postalCode, this.props.subGroupName, this.props.displayName);
      }
      const actions = bindActionCreators(Actions, this.props.dispatch);
      actions.updateAppStatus({
        composerText: ''
      })      
    }
  }

  render() {
    return (
      <textarea
        className="message-composer"
        name="message"
        placeholder="Post a message"
        value={this.props.app.composerText}
        onChange={this._onChange.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    app: state.app
  };
}
export default connect(mapStateToProps)(MessageComposer)
