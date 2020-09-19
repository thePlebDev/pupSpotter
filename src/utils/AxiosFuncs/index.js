import axios from 'axios';

const axiosGet = (url,method)=>{
  axios.get(url,{withCredentials: true})
  .then(data=>{
    if(data.data.status === 200){
      method(true)
      return data.data.status
    }else{
      return data.data
    }})
    .catch(e=>console.error('error------> ' + e))
}





export {axiosGet}
