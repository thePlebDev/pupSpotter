import {renderHook,act} from '@testing-library/react-hooks';
import useForm from '../Hooks/useForm';
import axios from 'axios'
import {axiosPost} from '../utils/AxiosFuncs';
import {signupValidation} from '../utils/Validation';

jest.mock('axios') // this will mock all the methods on axios

describe('testing the useForm hook',()=>{
  it('testing state',()=>{
    const {result} = renderHook(()=>useForm())

    act(()=>{
      result.current.handleChange({target:{name:'name',value:'bob'}})
    })
    act(()=>{
      result.current.handleChange({target:{name:'description',value:'a buneo boy'}})
    })
    act(()=>{
      result.current.handleChange({target:{name:'location',value:['54','-28']}})
    })
  })
  it('testing the positive axios post method',async()=>{
    const data ={
      data:{
        message:'spotting created',
        status:200
      }
    }
    axios.post.mockImplementationOnce(()=>Promise.resolve(data))
    const response = await axiosPost();
    expect(response).toEqual(data.data)
  })
})
describe('testing the signupValidation',()=>{
  it('should respond with the error messages',()=>{
    const errorResponse={
      "name":'Please enter a name for the pup',
      "loc":'Please click add location'
    }
    let response = signupValidation({name:'',location:''});
    expect(response).toEqual(errorResponse);
  })
  it('should respond with an empty object',()=>{
    let response = signupValidation({name:'tim',location:'location here'})
    let success = {}
    expect(response).toEqual(success)
  })
})
