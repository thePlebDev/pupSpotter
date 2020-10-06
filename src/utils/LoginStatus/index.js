import axios from 'axios'
import {backendUrl} from '../Constants';

let logginCheck = (function(){

  return{

    checkStatus: function(setLoggedIn){
      axios.get(`${backendUrl}user/logout`)
      .then(data=>{
        if(data.data.status){
          console.log(data.data)
          setLoggedIn(false)
        }})
      .catch(e=>console.error(e))
    },

  }

}())

export default logginCheck
