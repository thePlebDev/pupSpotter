const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index.js')
const User = require('../Models/User');

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
     //clear out the database before each test. then populate it again with initial data
     await User.deleteMany({})
     initialData.forEach(async(item)=>{
       let userObject = new User(item)
       await userObject.save()
       console.log('saved')
     })
  });
  test('testing the post route',async (done)=>{
    const response = await api.post('/register')
        .send({username:'time and the hat',password:'12345'})
        expect(response.body.status).toBe(200)
        done()

  })

  afterAll( async(done)=>{
     await mongoose.connection.close()
     done()

  })
})
