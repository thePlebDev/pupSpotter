const mongoose = require('mongoose');
const User = require('../Models/User');
const chai = require('chai');
const chaiHttp = require('chai-http')
const expect = chai.expect;
const app = require('../index.js')

chai.use(chaiHttp)
