import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo.jsx';

export default class Avatar extends Component {
  render() {
    let content = null
    if (this.props.displayName) {
      content = this.props.displayName[0]
    }
    if (this.props.displayName === 'BlockOut') {
      return (
        <div className="author-icon blockout">
          <Logo />
        </div>
      )
    }
    else {
      return (
        <div className="author-icon" style={{backgroundColor: localStorage.avatarBgColor}}>
          {content}
        </div>
      )
    }
  }
}
