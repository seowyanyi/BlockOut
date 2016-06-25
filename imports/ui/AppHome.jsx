import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

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
    browserHistory.push('/chat')
  }

  render() {
    return (
      <div className="apphome">
        <div id='map'></div>
        <h2>Home</h2>
        <button onClick={this.goToChat.bind(this)}>Msg</button>
      </div>
      )
  }
}