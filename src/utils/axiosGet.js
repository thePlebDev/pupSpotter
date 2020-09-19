import axios from 'axios'
import {backendUrl} from './Constants';

export default async (props)=>{
  const response = await axios.get(`${backendUrl}spot/filter`,{withCredentials: true})
  return response.data
}
