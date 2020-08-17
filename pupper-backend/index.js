const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 3000
const url ='';
const db = mongoose.connection

mongoose.connect(url,{useNewUrlParser:true});
db.once('open',()=>{
  console.log('Database connected',url)
})
db.once('error',err=>{
  console.error('connection error',err)
})

app.get('/',(req,res)=>{
  res.send('THis should be all the pups spotted')
})

app.post('/spotting',()=>{
  res.send('created new pup spotting')
})

app.listen(port,()=>{
  console.log('listening on port 3000')
})
