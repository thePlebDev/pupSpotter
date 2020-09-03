import React from 'react';
import {Switch,Route} from 'react-router-dom';

import NavBar from '../NavBar';
import Map from '../Leaflet';
import PupForm from '../PupForm';
import Register from '../Register';
import Login from '../Login';
import Profile from '../Profile';

const App =()=>{
  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path ='/' component={Map}/>
        <Route exact path ='/pupSpotting' component={PupForm} />
        <Route exact path ='/register' component={Register} />
        <Route exact path ='/login' component={Login} />
        <Route exact path ='/profile' component={Profile} />
      </Switch>
    </div>
  )
}

export default App
