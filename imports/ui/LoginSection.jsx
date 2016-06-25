import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo.jsx';
import { browserHistory } from 'react-router'
import { randAvatarColor } from '../../client/helper.js'
import * as Actions from '../../client/actions/actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default class LoginSection extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      postalCode: '',
      displayName: ''
    }
  }

  _onChangePostalCode(event, value) {
    this.setState({postalCode: event.target.value})
  }

  _onChangeDisplayName(event, value) {
    this.setState({displayName: event.target.value})
  }

  submitLoginDetails(e) {
    e.preventDefault()
    const actions = bindActionCreators(Actions, this.props.dispatch);
    let obj = {}
    obj[localStorage.displayName] = randAvatarColor()
    actions.updateAppStatus({
      subGroupName: 'Main',
      postalCode: this.state.postalCode,
      userColors: obj
    })    
    localStorage.displayName = this.state.displayName
    browserHistory.push('/chat')
  }

  render() {
    return (
      <div className="login-section">
      <Logo />
      <h2>BlockOut</h2>
      <h3>Hi there!</h3>
        <form>
          <fieldset>
            <input
              type="text"
              name="display-name"
              placeholder="enter your name"
              onChange={this._onChangeDisplayName.bind(this)}
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="postal-code"
              placeholder="enter your postal code"
              onChange={this._onChangePostalCode.bind(this)}
              />
          </fieldset>
          <button onClick={this.submitLoginDetails.bind(this)}>Let's get started!</button>
        </form>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

export default connect(mapStateToProps)(LoginSection)