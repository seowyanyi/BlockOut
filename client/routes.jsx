import React from 'react'
import { Route } from 'react-router'
import App from '../imports/ui/App.jsx'
import MessageSection from '../imports/ui/MessageSection.jsx'
import EventSection from '../imports/ui/EventSection.jsx'
import ChatMapSection from '../imports/ui/ChatMapSection.jsx'
import AppHome from '../imports/ui/AppHome.jsx'
import _404 from '../imports/ui/_404.jsx'
import LoginSection from '../imports/ui/LoginSection.jsx'

export default (
  <Route path='/' component={App}>
    <Route>
        <Route path='login' component={LoginSection} />    
        <Route path='home' component={AppHome}>
          <Route path='chatmap' component={ChatMapSection} />        
          <Route path='events' component={EventSection} />        
        </Route>
        <Route path='chat' component={MessageSection} />                
        <Route path='*' component={_404} />
    </Route>
  </Route>
);