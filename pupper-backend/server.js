const app =require('./index.js')

const port = process.env.PORT || 3001

// this will be the file that runs the loaders.
async function startServer(){
  app.listen(port,err=>{
    if(err){
      console.log(err);
      return
    }

    console.log('your server is ready !')
  })
}

startServer();
