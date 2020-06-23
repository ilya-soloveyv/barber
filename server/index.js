require('dotenv').config()
const http = require('http')
const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const consola = require('consola')

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'
const isProd = process.env.NODE_ENV === 'production'

const app = express()
const server = http.createServer(app)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const config = require('../nuxt.config.js')
config.dev = !isProd

app.use('/api/client', require('./routes/client'))

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)

server.listen(port, host, () => {
  consola.info('Server listening on ' + host + ':' + port)
})
