const express = require('express')

const app = express()

app.use(express.static('build'))

app.get('/api', (req, res) => {
  res.json('hello word')
})

module.exports = app