import React from 'react';
import Notification200 from './notification200';
import Notification201 from './notification201';
import Notification500 from './notification500';

//THIS NEEDS TO GET REFACTORED
//it should be closed for modification but open for extenstion
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
            <Notification201 staus={status} words={"Login First"} show={show} setShow={setShow}/>
          </div>
        </div>
      )
      case 202:
      return(
        <div id="notification">
          <div data-testid="notification202">
            <Notification200 staus={status} words={"Location Added"} show={show} setShow={setShow}/>
          </div>
        </div>
      )
      case 203:
      return(
        <div id="notification">
          <div data-testid="notification202">
            <Notification201 staus={status} words={"Incorrect Credentials"} show={show} setShow={setShow}/>
          </div>
        </div>
      )
      case 204:
      return(
        <div id="notification">
          <div data-testid="notification202">
            <Notification201 staus={status} words={"Username Taken"} show={show} setShow={setShow}/>
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
