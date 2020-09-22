import React from 'react';
import Notificaiton200 from './notification200'

const Notification=({status,words})=>{
    switch(status){
      case 200:
      return(
          <div id="notification">
            <div data-testid="notification">
              <Notificaiton200 staus={status} words={words}/>
            </div>
          </div>
      )
      case 201:
      return(
        <div id="notification">
          <div data-testid="notification">{words}</div>
        </div>
      )
      default:
      return(
        <div id="notification">
          <div data-testid="notification">{words}</div>
        </div>
      )
    }

}


export default Notification
