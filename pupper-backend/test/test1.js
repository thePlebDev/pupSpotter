const express = require('express');
const request = require('supertest');
const mongoose = require('mongoose');
const User = require('../Models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../index.js')

//const app = express()


describe("testing",function(){
  it('this should not be passing ',(done)=>{
    request(app)
    .get('/testing')
      .expect({body:"There is nothing about this "},done())
  })

})
