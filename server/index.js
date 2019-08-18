const express = require('express')
const server = express()
const port = 3000
const router = require('./router.js')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(morgan('dev'))

server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/api', router)


server.listen(port, () => console.log(`Listening on port ${port}!`))