const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.routes')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')


app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoutes)

module.exports = app;