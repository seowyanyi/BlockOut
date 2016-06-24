import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class LoginSection extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      postalCode: 0,
      displayName: ''
    }
  }

  _onChangePostalCode(event, value) {
    this.setState({postalCode: parseInt(event.target.value)})
  }

  _onChangeDisplayName(event, value) {
    this.setState({displayName: event.target.value})
  }  

  submitLoginDetails(e) {
    e.preventDefault()
    this.props.onLogin(this.state.postalCode, this.state.displayName)
  }

  render() {
    return (
      <div className="login-section">
        <form>
          <fieldset>
            <h3>Postal Code</h3>
            <input 
              type="text" 
              name="postal-code" 
              placeholder="247964"
              onChange={this._onChangePostalCode.bind(this)}
              />
          </fieldset>
          <fieldset>
            <h3>Display Name</h3>
            <input 
              type="text" 
              name="display-name" 
              placeholder="Lucy"
              onChange={this._onChangeDisplayName.bind(this)}
            />
          </fieldset>
          <button onClick={this.submitLoginDetails.bind(this)}>NEXT</button>
        </form>        
      </div>      
    )
  }

}