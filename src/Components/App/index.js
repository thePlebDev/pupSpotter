import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';

import NavBar from '../NavBar';
import Map from '../Leaflet';
import PupForm from '../PupForm'

const App =()=>{
  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path ='/' component={Map} />
        <Route exact path ='/pupSpotting' component={PupForm} />
      </Switch>
    </div>
  )
}

export default App
