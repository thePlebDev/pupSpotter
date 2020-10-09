const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean');


const mongooseLoader = require('./Loaders/mongooseLoader')
const errorHandlingLoader = require('./Loaders/errorHandlingLoader')
const routeLoader = require('./Loaders/routeLoader')
const authenticatedCheckRouter = require('./Routes/isAuthenticated')
const passportLoader = require('./Loaders/passportLoader')

const app = express()
app.use(bodyParser.json())
app.use(mongoSanitize());
app.use(xss())
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));


//LOADERS
passportLoader.init(app)
mongooseLoader.connection(app)
errorHandlingLoader.errorHandling(app)
routeLoader.loginRoute(app)
routeLoader.spotRoute(app)
routeLoader.registerRoute(app)
routeLoader.isAuthenticatedRoute(app)
//app.use('/isAuthenticated',authenticatedCheckRouter)
routeLoader.notFoundRoute(app)


module.exports = app
