const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../index.js');
const User = require('../Models/User');
//STILL NEED TO FIGURE OUT HOW TO TEST AUTHENTICATED ROUTES.
const api = supertest(app)
const initialData = [
  {
    username:'dave',
    password:'12345'
  }
]

describe('testing the test Database', ()=>{
  beforeEach(async() => {
    jest.setTimeout(100000);
    await User.deleteMany({})

      let userObject = new User(initialData[0])
      await userObject.save()
      console.log('SAVED---------------')
  });
  it('this should register',async(done)=>{
    let token;
    const res = await api.post('/user/login')
    .send({username:'dave',password:'12345'})
    console.log(res)
    // const me = await api.get('/spot/filter')
    //             .query(token)
    // console.log(me)
    done()
  })
})
