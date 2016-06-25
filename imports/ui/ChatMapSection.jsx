import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Messages } from '../api/messages.js';
import { browserHistory } from 'react-router'

function locationMap() {
    // Init Map
    mapboxgl.accessToken = 'pk.eyJ1IjoibGF1aXNlcyIsImEiOiJjaXB0dzVjaTcwNm8zZnVtMmRoaGZ1NHhmIn0.C8Q7Qd551av2yKSKIVqN2Q';
    var mapObject = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/lauises/ciptw64fj003ddmnodbxt0hv8', //stylesheet location
        center: [103.847451210, 1.33233697624], // starting position
        zoom: 16.2, // starting zoom
        doubleClickZoom: false,
        scrollZoom: false
    });
    // Click Event
    mapObject.on('click', function (e) {
      var features = mapObject.queryRenderedFeatures(e.point, { layers: ['toapayoh'] });

      if (!features.length) {
          return;
      }

      var feature = features[0];

      // Populate the popup and set its coordinates
      // based on the feature found.
      var popup = new mapboxgl.Popup()
          .setLngLat(feature.geometry.coordinates)
          .setHTML(feature.properties.description)
          .addTo(mapObject);
  });
  // Use the same approach as above to indicate that the symbols are clickable
  // by changing the cursor style to 'pointer'.
  mapObject.on('mousemove', function (e) {
      var features = mapObject.queryRenderedFeatures(e.point, { layers: ['toapayoh'] });
      mapObject.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  });

  // setTimeout(function() {
  //   console.log('moving center')
  //   var testLL = new mapboxgl.LngLat(103.9474, 1.3721);
  //   mapObject.panTo(testLL);
  // }, 5000)
}


export default class ChatMapSection extends Component {
  bindEventListeners() {
    $('.mapboxgl-canvas').click(function() {
      setTimeout(function() {
        if ($('[data-id="chat-310530"]')) {
          $('[data-id="chat-310530"]').click(function() {
            localStorage.postalCode = '310530'
            localStorage.subGroupName = 'Main'
            browserHistory.push('/chat')
          }.bind(this));    
          $('[data-id="chat-310154"]').click(function() {
            localStorage.postalCode = '310154'
            localStorage.subGroupName = 'Main'
            browserHistory.push('/chat')
          }.bind(this));
          $('[data-id="chat-310480"]').click(function() {
            localStorage.postalCode = '310480'
            localStorage.subGroupName = 'Main'
            browserHistory.push('/chat')          
          }.bind(this));
          $('[data-id="chat-310177"]').click(function() {
            localStorage.postalCode = '310177'
            localStorage.subGroupName = 'Main'
            browserHistory.push('/chat')
          }.bind(this));                  
        }        
      }.bind(this), 100)

    }.bind(this))        
  }

  componentDidMount() {
    locationMap()      
    this.bindEventListeners()
  }


  render() {
    return (
      <div className="container">
        <div id='map'></div>  
      </div>
    )
  }
}