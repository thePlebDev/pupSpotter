import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom';

import NavBar from '../NavBar';
import Map from '../Leaflet';
import PupForm from '../PupForm';
import Register from '../Register';
import Login from '../Login';
import NotFound from '../NotFound';
import ForgotPassword from '../ForgotPassword';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './App.css'




const App =()=>{
  const [loggedIn,setLoggedIn] = useState(false);
  const [modalShow,setModalShow] = useState(false);
  return(
    <div>
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setModalShow={setModalShow}/>
          <Route render={({location})=>{
            return <TransitionGroup>
                      <CSSTransition timeout={450} classNames="fade" key={location.key}>
                              <Switch location={location}>
                                <Route exact path ='/' render={(props)=> <Map {...props} setLoggedIn={setLoggedIn} modalShow={modalShow} setModalShow={setModalShow} /> }/>
                                <Route exact path ='/pupSpotting' component={PupForm} />
                                <Route exact path ='/register' component={Register} />
                                <Route exact path ='/login' component={Login } />
                                <Route exact path ='/forgotPassword' component={ForgotPassword } />
                                <Route path="*" component={NotFound} />
                              </Switch>
                      </CSSTransition>
                  </TransitionGroup>
          }}/>

    </div>
  )
}

export default App
