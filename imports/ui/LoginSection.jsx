import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo.jsx';
import { browserHistory } from 'react-router'
import { randAvatarColor } from '../../client/helper.js'

export default class LoginSection extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      postalCode: 0,
      displayName: ''
    }
    localStorage.subGroupName = 'Main'
    localStorage.avatarBgColor = randAvatarColor();
  }

  _onChangePostalCode(event, value) {
    this.setState({postalCode: parseInt(event.target.value)})
    localStorage.postalCode = event.target.value
  }

  _onChangeDisplayName(event, value) {
    this.setState({displayName: event.target.value})
    localStorage.displayName = event.target.value
  }

  submitLoginDetails(e) {
    e.preventDefault()
    browserHistory.push('/home/chatmap')
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
