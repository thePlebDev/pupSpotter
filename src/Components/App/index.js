import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom';

import NavBar from '../NavBar';
import Map from '../Leaflet';
import PupForm from '../PupForm';
import Register from '../Register';
import Login from '../Login';
import Profile from '../Profile';


const App =()=>{
  const [navStatus, setNavStatus] = useState(false) // BUG: resets to false on page reload
  return(
    <div>
      <NavBar status={navStatus} setNavStatus={setNavStatus}/>
      <Switch>
        <Route exact path ='/' component={Map}/>
        <Route exact path ='/pupSpotting' component={PupForm} />
        <Route exact path ='/register' component={Register} />
        <Route exact path ='/login' render={(props)=><Login setNavStatus={setNavStatus} {...props} /> } />
        <Route exact path ='/profile' component={<Profile/>}/>
      </Switch>
    </div>
  )
}

export default App
