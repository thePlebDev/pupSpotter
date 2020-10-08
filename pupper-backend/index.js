const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportConfig = require('./passportConfig')
const cookieParser = require('cookie-parser');
const cors = require("cors");
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean');

const mongooseLoader = require('./Loaders/mongooseLoader')
const errorHandlingLoader = require('./Loaders/errorHandlingLoader')
const routeLoader = require('./Loaders/routeLoader')

const app = express()
app.use(mongoSanitize());
app.use(xss())

app.use(cookieParser("TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX"))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));
app.use(bodyParser.json())
passportConfig()

//LOADERS
mongooseLoader.connection(app)
errorHandlingLoader.errorHandling(app)
routeLoader.loginRoute(app)
routeLoader.spotRoute(app)
routeLoader.registerRoute(app)
routeLoader.isAuthenticatedRoute(app)
routeLoader.notFoundRoute(app)


//Data sanitization against NoSQL query injection




module.exports = app
