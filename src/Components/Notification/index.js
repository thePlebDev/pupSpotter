import React from 'react';
import Notification200 from './notification200';
import Notification201 from './notification201';

const Notification=({status,words})=>{
    switch(status){
      case 200:
      return(
          <div id="notification">
            <div data-testid="notification200">
              <Notification200 staus={status} words={words}/>
            </div>
          </div>
      )
      case 201:
      return(
        <div id="notification">
          <div data-testid="notification201">
            <Notification201 staus={status} words={words}/>
          </div>
        </div>
      )
      default:
      return(
        <div id="notification500">
          <div data-testid="notification">{words}</div>
        </div>
      )
    }

}


export default Notification
