const mongoose = require('mongoose');
const supertest = require('supertest')
const app = require("../index.js")
const Spot = require('../Models/User');

const api = supertest(app)

// describe('testing getting all the spots',()=>{
//   beforeEach( async()=>{
//     jest.setTimeout(100000)
//      await Spot.deleteMany({})
//      console.log('saved')
//   })
//   test('testing the spot',async(done)=>{
//     const response = await api.get('/spot/all')
//     expect(response.body).toHaveLength(1)
//     done()
//   })
//   afterAll(async(done)=>{
//     await mongoose.connection.close()
//     done()
//   })
// })

const initialData =[
  {
    username:'dave',
    password:'12345'
  },
  {
    username:'timmothythe45th',
    password:'12345'
  },
]

describe('testing the spot routes',()=>{
  beforeEach(async()=>{
    jest.setTimeout(100000)
  })
  it('should testing the vote endpoint',async(done)=>{
    const res = await api.post('/spot/vote')
    console.log(res.text)
    done()
  })
  afterAll(async(done)=>{
      await mongoose.connection.close()
      done()
    })
})
