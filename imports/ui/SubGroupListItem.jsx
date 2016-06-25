import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SubGroupListItem extends Component {
  render() {
    const klass = this.props.subGroupName === localStorage.subGroupName? 'currentChannel' : '';
    return (
      <li className={klass}><button>{this.props.subGroupName}</button></li>
    );
  }
}
