import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (window.location.pathname === '/')
      browserHistory.push('/login')
  }

  render() {
    return (
      <div className="container">
        {this.props.children}             
      </div>
    )
  }
}