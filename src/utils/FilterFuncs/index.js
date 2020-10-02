// I need to import the axios get method, pass that to the function
// I need to pass the proper URL to the function and give that to the axios method
//it makes the call and then sets the data with the set data function
import {axiosGet} from '../AxiosFuncs'

const filterFuncs = (function(){
  return{
    filter: async (url,setMethod,sSToken) =>{
      try{
      const cachedHits = localStorage.getItem(sSToken)
      if(cachedHits){
        setMethod(JSON.parse(cachedHits))
      } else{
        let data = await axiosGet(url)
        setMethod(data.response)
        localStorage.setItem(sSToken, JSON.stringify(data.response))

      }

      }
      catch(error){
        console.log(error)
      }
    }
  }
}())

export default filterFuncs
