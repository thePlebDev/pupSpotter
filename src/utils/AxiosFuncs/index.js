import axios from 'axios';
const axiosGet = async(url,method)=>{
  const response = await  axios.get(url,{withCredentials: true})
  return response.data

}

const axiosPost = async(url,items)=>{
  const response = await axios.post(url,items,{withCredentials:true})
  return response.data
}

export {axiosGet,axiosPost}
