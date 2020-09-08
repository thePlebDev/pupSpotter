const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/User');
const chai = require('chai');
const chaiHttp = require('chai-http')
const superagent = require('superagent')
const expect = chai.expect;
const request = require('supertest')
const app = require('../index.js')

chai.use(chaiHttp)



  describe('testing the loginRouter',function(){

    it('testing happy path', function(done){
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
