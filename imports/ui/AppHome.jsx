import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function locationMap() {
    // Init Map
    mapboxgl.accessToken = 'pk.eyJ1IjoibGF1aXNlcyIsImEiOiJjaXB0dzVjaTcwNm8zZnVtMmRoaGZ1NHhmIn0.C8Q7Qd551av2yKSKIVqN2Q';
    var mapObject = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/lauises/ciptw64fj003ddmnodbxt0hv8', //stylesheet location
        center: [103.848538, 1.332264], // starting position
        zoom: 15.7 // starting zoom
    });
  }

export default class AppHome extends Component {
  componentDidMount() {
    locationMap()      
  }

  goToChat() {

  }

  render() {
    return (
      <div className="apphome">
        <div>
          <div className="topbar">
            <i className="fa fa-angle-left"></i>
            <h2>Home</h2>
            <i className="fa fa-search"></i>
          </div>
          <div className="chatEventsToggle">
            <button className="currentPage">CHAT</button>
            <button>EVENTS</button>
          </div>
        </div>
        <div id='map'></div>  
        <div className="bottombar">
          <button className="currentPage"><i className="fa fa-home"></i></button>
          <button onClick={this.props.goToChat.bind(this)}><i className="fa fa-comment-o"></i></button>
          <button><i className="fa fa-calendar"></i></button>
          <button><i className="fa fa-bars"></i></button>
        </div>  
      </div>
      )
  }
}