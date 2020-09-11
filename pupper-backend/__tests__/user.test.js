const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index.js')
const User = require('../Models/User')

const api = supertest(app)

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

describe('testing the POST',()=>{
  beforeEach(async() => {
    jest.setTimeout(100000);
    await User.deleteMany({}) //clear out the database before each test. then populate it again with initial data

    let userObject = new User(initialData[0])
    await userObject.save()
  });
  test('testing the post route',async (done)=>{
    const response = await api.post('/register')
        .send(initialData[1])
        expect(response.body.status).toBe(200)
        done()

  })
  afterAll( async(done)=>{
     await mongoose.connection.close()
     done()

  })

})
