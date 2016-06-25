import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import { browserHistory, Router } from 'react-router'
import routes from './routes.jsx'

let injectTapEventPlugin = require("react-tap-event-plugin")
injectTapEventPlugin()
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

var rootElement = document.getElementById('render-target')
var interval = null

function run() {
  if (rootElement) {
   render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>, rootElement);   
    clearInterval(interval)
  } else {
    rootElement = document.getElementById('render-target')
  }

}



Meteor.startup(() => {
  interval = setInterval(run, 200)
});