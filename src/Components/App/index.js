import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom';

import NavBar from '../NavBar';
import Map from '../Leaflet';
import PupForm from '../PupForm';
import Register from '../Register';
import Login from '../Login';
import Work from '../Work'
import NotFound from '../NotFound';




const App =()=>{
  const [loggedIn,setLoggedIn] = useState(false);
  const [modalShow,setModalShow] = useState(false);
  return(
    <div>
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setModalShow={setModalShow}/>
                  <Switch>
                    <Route exact path ='/' render={(props)=> <Map {...props} setLoggedIn={setLoggedIn} modalShow={modalShow} setModalShow={setModalShow} /> }/>
                    <Route exact path ='/pupSpotting' component={PupForm} />
                    <Route exact path ='/register' component={Register} />
                    <Route exact path ='/login' component={Login } />
                    <Route exact path ='/work' component={Work } />
                    <Route path="*" component={NotFound} />
                  </Switch>
    </div>
  )
}

export default App
