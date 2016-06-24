import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AppHome extends Component {
  goToChat() {

  }

  render() {
    return (
      <div className="apphome">
        <h2>Home</h2>
        <button onClick={this.props.goToChat.bind(this)}>Msg</button>
      </div>
      )
  }
}