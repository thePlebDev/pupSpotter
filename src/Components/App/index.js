import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';

import NavBar from '../NavBar';
import Map from '../Leaflet';
import PupForm from '../PupForm';
import Register from '../Register';

const App =()=>{
  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path ='/' component={Map} />
        <Route exact path ='/pupSpotting' component={PupForm} />
        <Route exact path ='/register' component={Register} />
      </Switch>
    </div>
  )
}

export default App
