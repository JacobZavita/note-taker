const path = require('path')

module.exports = function(app) {
  app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  })

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })
}