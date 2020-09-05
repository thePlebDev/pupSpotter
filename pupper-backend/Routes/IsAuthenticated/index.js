const express = require('express');

const authenticatedCheckRouter = express();



authenticatedCheckRouter.get('/',(req,res,next)=>{

    try {
      if(req.isAuthenticated()){
        res.json({
          message:'Authorized',
          status:200
        })
      }else {
        res.json({
          message:'Not Authorized!',
          status:400,
        })
      }

    } catch (e) {
      console.log(e)
      next(e)
    }
  }
)

module.exports = authenticatedCheckRouter
