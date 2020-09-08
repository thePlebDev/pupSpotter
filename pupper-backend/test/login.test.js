const chai = require('chai');
const chaiHttp = require('chai-http')
const expect = chai.expect;
const app = require('../index.js')

chai.use(chaiHttp)



  describe('testing the loginRouter',function(){

    it('testing happy path', function(done){
      const agent = chai.request.agent('http://localhost:3001/')
      this.timeout(0)
      chai.request('http://localhost:3001/')
      .post("user/login")
      .send({username:'test2',password:'12345'})
      .end((err,res)=>{
        if(err) done(err)
        expect(res.status).to.equal(200)
        done()
      })
  })
  describe('testing the sad route',function(){
    it('testing sad path', function(done){
      this.timeout(0)
       chai.request('http://localhost:3001/')
      .post("user/login")
      .send({username:'test4',password:'12345'})
      .end((err,res)=>{
        if(err) done(err)
        expect(res.status).to.equal(401)
        done()
      })
  })
  })
  })

  describe('testing the logout',function(){
    it('logout',function(done){
      this.timeout(0)
      chai.request('http://localhost:3001/')
     .get("user/logout")
     .end((err,res)=>{
       if(err) done(err)
       expect(res.body.status).to.equal(200)
       done()
     })
    })
  })
