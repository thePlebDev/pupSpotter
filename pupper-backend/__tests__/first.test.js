const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index.js')

const api = supertest(app)

describe('trying to get stuff to work',()=>{
  beforeEach(() => {
    jest.setTimeout(100000);
  });

  test('testing the home page', async (done)=>{
     await api
        .get('/spot/all')
        .expect(200)
        .expect('Content-Type',/application\/json/)
        done()
  })
  afterAll( async(done)=>{
     await mongoose.connection.close()
     done()

  })
})
