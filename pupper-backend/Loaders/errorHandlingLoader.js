


const errorHandlingLoader = (function(){

  return{
    errorHandling: function(app){
      const unhandledRejections = new Map();
      process.on('unhandledRejection', function(reason, promise){
        //ANY global unhandled promise rejections.
        unhandledRejections.set(promise, reason);

      });
      // this will get triggered when we use next(error;)
      app.use((err,req,res,next)=>{
        err.statusCode = err.statusCode || 500;
        err.status = err.status || 'error'

        res.status(err.statusCode).json({
          status:err.status,
          message:err.message
        });
      });
    },
  }

}())

module.exports = errorHandlingLoader
