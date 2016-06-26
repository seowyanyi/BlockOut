import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isSearch: false,
      query: ''
    }
  }

  onSubmitSearch(e) {
    e.preventDefault()
    this.props.goToNewAddress(this.state.query)
    this.setState({
      isSearch: false
    })
  }

  onChange(event) {
    this.setState({query: event.target.value})
  }

  hideSearchBar() {
    this.setState({
      isSearch: false
    })    
  }

  showSearchBar() {
    this.setState({
      isSearch: true
    })
  }

  render() {
    if (this.state.isSearch) {
      return(
      <div className="topbar">
        <form className="search-form" onChange={this.onChange.bind(this)} onSubmit={this.onSubmitSearch.bind(this)}>
          <input type="text" name="lname" placeholder="Search a location"/>
        </form>
        <i onClick={this.hideSearchBar.bind(this)} className="fa fa-times clickable"></i>
      </div>      
      )
    }
    return(
      <div className="topbar"> 
        <i className="fa fa-angle-left clickable"></i>
        <h2>Home</h2>
        <i onClick={this.showSearchBar.bind(this)} className="fa fa-search clickable"></i>
      </div>      
    )
  }
}