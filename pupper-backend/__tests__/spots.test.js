const mongoose = require('mongoose');
const supertest = require('supertest')
const app = require("../index.js")
const Spot = require('../Models/User');

const api = supertest(app)

describe('testing getting all the spots',()=>{
  beforeEach( async()=>{
    jest.setTimeout(100000)
     await Spot.deleteMany({})
     console.log('saved')
  })
  test('testing the spot',async(done)=>{
    const response = await api.get('/spot/all')
    expect(response.body).toHaveLength(1)
    done()
  })
  afterAll(async(done)=>{
    await mongoose.connection.close()
    done()
  })
})
