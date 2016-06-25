import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo.jsx';
import EventCard from './EventCard.jsx';
import { browserHistory } from 'react-router'
import { randAvatarColor } from '../../client/helper.js'
import * as Actions from '../../client/actions/actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {composeWithTracker} from 'react-komposer';



export default class LoginSection extends Component {
  componentDidMount() {
      window.scrollTo(0,1);  
  }
  
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
    let obj = {}
    obj[localStorage.displayName] = randAvatarColor()
    const actions = bindActionCreators(Actions, this.props.dispatch);
    actions.updateAppStatus({
      subGroupName: 'Main',
      postalCode: this.state.postalCode,
      userColors: obj
    })    
    // let messages = this.props.messages.filter(msg => msg.postalCode === this.state.postalCode)
    // if (messages.length === 0) {
    //     Meteor.call('messages.insert', `Welcome to #${this.state.postalCode}_Main`, this.state.postalCode, 'Main', 'BlockOut');
    // }
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
function composer(props, onData) {
  if (Meteor.subscribe('messages').ready()) {
    const messages = Messages.find({}, {sort:{createdAt:-1}}).fetch()
    onData(null, {messages});
  };
};

const MeteorMessagesComp = composeWithTracker(composer)(LoginSection);

function mapStateToProps(state) {
  return {
    app: state.app
  };
}
export default connect(mapStateToProps)(LoginSection)