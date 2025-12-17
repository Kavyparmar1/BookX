const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.routes')
const bookRoutes = require('./routes/book.routes')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
//user base api
app.use('/api/auth',authRoutes)
//book base Api
app.use('/api/book',bookRoutes)



module.exports = app;