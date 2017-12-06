const mongoose = require('mongoose')
//链接mongo 并使用immoc这个集合
const DB_URL = 'mongodb://localhost:27017/immoc'
mongoose.connect(DB_URL)