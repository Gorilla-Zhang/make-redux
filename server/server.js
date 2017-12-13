 const express = require('express')
 const utils = require('utility')
 const bodyParser = require('body-parser')
 const cookieParser = require('cookie-parser')
 
 const userRouter = require('./user')
 
 const app = express()
 
 app.use('./user',userRouter)
 app.use(cookieParser())
 app.use(bodyParser.json())
 app.listen(9093, function () {
     console.log('Node app atart at port 9093')
 })