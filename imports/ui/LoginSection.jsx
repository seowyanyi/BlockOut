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
          <br/>Postal Code<br/>
          <input 
            type="text" 
            name="postal-code" 
            placeholder="247964"
            onChange={this._onChangePostalCode.bind(this)}
            />
          <br/>Display Name<br/>
          <input 
            type="text" 
            name="display-name" 
            placeholder="Lucy"
            onChange={this._onChangeDisplayName.bind(this)}
          />
          <br/><button onClick={this.submitLoginDetails.bind(this)}>Done!</button>
        </form>        
      </div>      
    )
  }

}