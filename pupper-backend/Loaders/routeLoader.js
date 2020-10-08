//Routers
const loginRouter = require('../Routes/Login');
const registerRouter = require('../Routes/Register');
const spottingRouter = require('../Routes/Spots');
const authenticatedCheckRouter = require('../Routes/isAuthenticated')



const routeLoader = (function(){
  return{
    loginRoute: function(app){
      app.use('/user',loginRouter)
    },
    spotRoute: function(app){
      app.use('/spot',spottingRouter)
    },
    registerRoute:function(app){
      app.use('/register',registerRouter)
    },
    isAuthenticatedRoute:function(app){
      app.use('/isAuthenticated',authenticatedCheckRouter)
    },
    notFoundRoute:function(app){
      app.all('*',(req,res,next)=>{
        const err = new Error(`Can not find ${req.originalUrl}`)
        err.status = 'fail';
        err.statusCode = 404;
        next(err)
      });
    },
  }
}())

module.exports = routeLoader
