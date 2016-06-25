import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

function locationMap() {
    // Init Map
    mapboxgl.accessToken = 'pk.eyJ1IjoibGF1aXNlcyIsImEiOiJjaXB0dzVjaTcwNm8zZnVtMmRoaGZ1NHhmIn0.C8Q7Qd551av2yKSKIVqN2Q';
    var mapObject = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/lauises/ciptw64fj003ddmnodbxt0hv8', //stylesheet location
        center: [103.847451210, 1.33233697624], // starting position
        zoom: 16.2 // starting zoom
    });
    var markers = {
      // "type":"FeatureCollection","features":[{"type":"Feature","properties":{"description":"<div class=\"map-popup\"><h2>#310530</h2><h3>HDB Learning Hub</h3><div class=\"chat-participants\"><p>84 Participants</p><p><img class=\"profiles\" src=\"/user1.jpg\"><img class=\"profiles\" src=\"/user3.jpg\"><img class=\"profiles\" src=\"/user5.jpg\"></p></div></div>"},"geometry":{"type":"Point","coordinates":[103.84745121002197,1.3323369762465722]}},{"type":"Feature","properties":{"description":"<div class=\"map-popup\"><h2>#310480</h2><h3>HDB Hub</h3><div class=\"chat-participants\"><p>67 Participants</p><p><img class=\"profiles\" src=\"/user2.jpg\"><img class=\"profiles\" src=\"/user5.jpg\"><img class=\"profiles\" src=\"/user6.jpg\"></p></div></div>"},"geometry":{"type":"Point","coordinates":[103.84851336479187,1.3320902797183731]}},{"type":"Feature","properties":{"description":"<div class=\"map-popup\"><h2>#310154</h2><h3>Block 154 Lorong 2 Toa Payoh</h3><div class=\"chat-participants\"><p>75 Participants</p><p><img class=\"profiles\" src=\"/user3.jpg\"><img class=\"profiles\" src=\"/user7.jpg\"><img class=\"profiles\" src=\"/user4.jpg\"></p></div></div>"},"geometry":{"type":"Point","coordinates":[103.84620666503906,1.333232591695686]}},{"type":"Feature","properties":{"description":"<div class=\"map-popup\"><h2>#310177</h2><h3>177 Toa Payoh Central</h3><div class=\"chat-participants\"><p>95 Participants</p><p><img class=\"profiles\" src=\"/user3.jpg\"><img class=\"profiles\" src=\"/user7.jpg\"><img class=\"profiles\" src=\"/user4.jpg\"></p></div></div>"},"geometry":{"type":"Point","coordinates":[103.8478910923004,1.3336669918860002]}}]
      "type":"FeatureCollection","features":[{"type":"Feature","properties":{"description":"<div class=\"map-popup\"><h2>#310530</h2><h3>HDB Learning Hub</h3><div class=\"chat-participants\"><p>84 Participants</p><p><img class=\"profiles\" src=\"/user1.jpg\"><img class=\"profiles\" src=\"/user3.jpg\"><img class=\"profiles\" src=\"/user5.jpg\"></p></div></div>","marker-symbol":"marker"},"geometry":{"type":"Point","coordinates":[103.84745121002197,1.3323369762465722]}},{"type":"Feature","properties":{"description":"<div class=\"map-popup\"><h2>#310480</h2><h3>HDB Hub</h3><div class=\"chat-participants\"><p>67 Participants</p><p><img class=\"profiles\" src=\"/user2.jpg\"><img class=\"profiles\" src=\"/user5.jpg\"><img class=\"profiles\" src=\"/user6.jpg\"></p></div></div>","marker-symbol":"marker"},"geometry":{"type":"Point","coordinates":[103.84851336479187,1.3320902797183731]}},{"type":"Feature","properties":{"description":"<div class=\"map-popup\"><h2>#310154</h2><h3>Block 154 Lorong 2 Toa Payoh</h3><div class=\"chat-participants\"><p>75 Participants</p><p><img class=\"profiles\" src=\"/user3.jpg\"><img class=\"profiles\" src=\"/user7.jpg\"><img class=\"profiles\" src=\"/user4.jpg\"></p></div></div>","marker-symbol":"marker"},"geometry":{"type":"Point","coordinates":[103.84620666503906,1.333232591695686]}},{"type":"Feature","properties":{"description":"<div class=\"map-popup\"><h2>#310177</h2><h3>177 Toa Payoh Central</h3><div class=\"chat-participants\"><p>95 Participants</p><p><img class=\"profiles\" src=\"/user3.jpg\"><img class=\"profiles\" src=\"/user7.jpg\"><img class=\"profiles\" src=\"/user4.jpg\"></p></div></div>","marker-symbol":"marker"},"geometry":{"type":"Point","coordinates":[103.8478910923004,1.3336669918860002]}}]
    };
    // Load Markers
    mapObject.on('load', function () {
        // Add marker data as a new GeoJSON source.
        mapObject.addSource("markers", {
            "type": "geojson",
            "data": markers
        });

        // Add a layer showing the markers.
        mapObject.addLayer({
            "id": "markers",
            "type": "symbol",
            "source": "markers",
            "layout": {
                "icon-image": "{marker-symbol}-15",
                "icon-allow-overlap": true
            }
        });
    });
    // Click Event
    mapObject.on('click', function (e) {
      var features = mapObject.queryRenderedFeatures(e.point, { layers: ['markers'] });

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
      var features = mapObject.queryRenderedFeatures(e.point, { layers: ['markers'] });
      mapObject.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
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
          <button onClick={this.goToChat.bind(this)}><i className="fa fa-comment-o"></i></button>
          <button><i className="fa fa-calendar"></i></button>
          <button><i className="fa fa-bars"></i></button>
        </div>  
      </div>
      )
  }
}