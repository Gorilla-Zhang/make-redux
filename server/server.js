 const express = require('express')
 //新建app
 const app = express()
 app.get('/', function (req, res) {
     res.send('<h1>Hello world</h1>')
 })
 app.get('/data', function (req, res) {
     res.json({
         name: 'immoc React App',
         type: 'IT'
     })
 })
 app.listen(9093, function () {
     console.log('Node app atart at port 9093')
 })