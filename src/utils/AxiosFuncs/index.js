import axios from 'axios';
const axiosGet = async(url,method)=>{
  const response = await  axios.get(url,{withCredentials: true})
  return response.data

}

// .then(data=>{
//   if(data.data.status === 200){
//     method(true)
//     return data
//   }else{
//     return data
//   }})

export {axiosGet}
