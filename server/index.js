require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const PORT = process.env.SERVER_PORT || 3050
const sessConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
  resave: false,
  saveUninitialized: false,
}

app.use(bodyParser.json())
app.use(session(sessConfig))

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(err => console.error(err))

app.listen(PORT, () => console.log('Listening on port: ' + PORT))
