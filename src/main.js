require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Test route')
})

app.listen(process.env.WEB_PORT, () => { console.log(`Server listenning: ${process.env.WEB_PROTOCOL}//${process.env.WEB_DOMAIN}:${process.env.WEB_PORT}`) })
