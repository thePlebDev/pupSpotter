import React from 'react';
import Notification200 from './notification200';
import Notification201 from './notification201';
import Notification500 from './notification500';

const Notification=({status,words,show,setShow})=>{
    switch(status){
      case 200:
      return(
          <div id="notification">
            <div data-testid="notification200">
              <Notification200 staus={"status"} words={"Success"} show={show} setShow={setShow}/>
            </div>
          </div>
      )
      case 401:
      return(
        <div id="notification">
          <div data-testid="notification201">
            <Notification201 staus={status} words={"Not Logged in"} show={show} setShow={setShow}/>
          </div>
        </div>
      )
      default:
      return(
        <div id="notification">
          <div data-testid="notification500">
            <Notification500 staus={status} words={'Please try again'} show={show} setShow={setShow}/>
          </div>
        </div>
      )
    }

}


export default Notification
