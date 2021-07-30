const express = require('express')
const app = express()

app.use('/', (req, res, next) => {
  res.send('test success')
})

app.listen(3000, () => {
  'server is running at http://localhost:3000'
})