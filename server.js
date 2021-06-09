// dependencies
const express = require('express')
const { join } = require('path')
const axios = require('axios')
const fs = require('fs')
const app = express()

// middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/notes', (req, res) => {
  res.json(notes)
})

require("./routes/htmlRoutes")(app);
require('./public/assets/js/index')(app)

app.listen(3000)