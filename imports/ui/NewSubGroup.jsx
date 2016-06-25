import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Actions from '../../client/actions/actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ENTER_KEY_CODE = 13;

export default class NewSubGroup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      subGroupName: ''
    }
  }

  _onChange(event) {
    this.setState({subGroupName: event.target.value})
  }

  _onKeyDown(event) {
    const actions = bindActionCreators(Actions, this.props.dispatch);

    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var subGroupName = this.state.subGroupName.trim();
      if (subGroupName) {
        Meteor.call('messages.insert', `Welcome to ${subGroupName}`, this.props.app.postalCode, subGroupName, 'BlockOut');
        actions.updateAppStatus({
          subGroupName: subGroupName,
        })
        $(".offcanvasSidebar").addClass("off");
      }
      this.setState({subGroupName: ''});
    }
  }

  render() {
    return (
      <textarea
        id="newSubGroup"
        name="newSubGroup"
        placeholder="Add New Group"
        value={this.state.subGroupName}
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
export default connect(mapStateToProps)(NewSubGroup)