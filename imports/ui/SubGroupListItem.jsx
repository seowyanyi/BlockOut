import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SubGroupListItem extends Component {
  render() {
    const klass = this.props.subGroupName === this.props.currentSubGroupName? 'currentChannel' : '';
    return (
      <li className={klass} onClick={this.props.onClick}><button>#{this.props.subGroupName}</button></li>
    );
  }
}
