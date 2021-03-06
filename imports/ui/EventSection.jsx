import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

function eventMap() {
    // Init Map
    mapboxgl.accessToken = 'pk.eyJ1IjoibGF1aXNlcyIsImEiOiJjaXB0dzVjaTcwNm8zZnVtMmRoaGZ1NHhmIn0.C8Q7Qd551av2yKSKIVqN2Q';
    var mapEvent = new mapboxgl.Map({
        container: 'eventMap', // container id
        style: 'mapbox://styles/lauises/cipuuxk59003ldglzcnsw7egr', //stylesheet location
        center: [103.847451210, 1.331721], // starting position
        zoom: 16.2, // starting zoom
        doubleClickZoom: false,
        scrollZoom: false
    });
    // Click Event
    mapEvent.on('click', function (e) {
    	var features = mapEvent.queryRenderedFeatures(e.point, { layers: ['toapayohevents'] });

    	if (!features.length) {
    		return;
    	}

    	var feature = features[0];

      // Populate the popup and set its coordinates
      // based on the feature found.
      var popup = new mapboxgl.Popup()
      .setLngLat(feature.geometry.coordinates)
      .setHTML(feature.properties.description)
      .addTo(mapEvent);
  });
  // Use the same approach as above to indicate that the symbols are clickable
  // by changing the cursor style to 'pointer'.
  mapEvent.on('mousemove', function (e) {
  	var features = mapEvent.queryRenderedFeatures(e.point, { layers: ['toapayohevents'] });
  	mapEvent.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  });
}

export default class EventSection extends Component {
  bindEventListeners() {
    $('.mapboxgl-canvas').click(function() {
      setTimeout(function() {
        if ($('[data-id="event-319383"]')) {
          $('[data-id="event-319383"]').click(function() {
            browserHistory.push('/eventlist')
          });    
          $('[data-id="event-310480"]').click(function() {
            browserHistory.push('/eventlist')
          });
          $('[data-id="event-310530"]').click(function() {
            browserHistory.push('/eventlist')
          });
          $('[data-id="event-310155"]').click(function() {
            browserHistory.push('/eventlist')
          });                  
        }        
      }, 100)

    })        
  }

	componentDidMount() {
		eventMap()   
    this.bindEventListeners()
	}

	render() {
		return (
			<div className="container">
				<div className="event-section">
					<div id='eventMap'></div>  
				</div>      
			</div>
			)
	}
}