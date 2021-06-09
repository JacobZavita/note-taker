// dependencies
const express = require('express')
const { join } = require('path')
const axios = require('axios')
const app = express()

// middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())