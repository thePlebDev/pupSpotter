const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index.js')
const User = require('../Models/User');

const api = supertest(app)
const initialData =[
  {
    username:'dave',
    password:'12345'
  }
]
describe('testing profile',()=>{
  beforeEach(async(done)=>{
    jest.setTimeout(100000)
    await User.deleteMany({})
    initialData.forEach(async(item)=>{
      let userObject = new User(item)
      await userObject.save()
      console.log('saved')
      done()
    })
  })
  test('testing a failed login',async(done)=>{
    let response = await api.post('/user/login')
    .send({username:'dave',password:'12345'})
    console.log(response)
    // if(response.body.status ===200){
    //   const res = await api.get('/profile')
    //   console.log(res.body)
    // }

    done()
  })
  afterAll(async(done)=>{
    await mongoose.connection.close()
    done()
  })

})
