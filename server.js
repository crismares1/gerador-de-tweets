const express = require('express')
const serverStatic = require('server-static')
const path = require('path')

const app = express()

app.user('/', serverStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)