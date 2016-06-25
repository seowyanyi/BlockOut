import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Avatar extends Component {
  render() {
    let content = null
    if (this.props.displayName) {
      content = this.props.displayName[0]
    } 
    return (
        <div className="author-icon">
          {content}
        </div>
      )
  }
}