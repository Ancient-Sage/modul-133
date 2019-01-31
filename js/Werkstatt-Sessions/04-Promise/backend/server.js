var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

var datenbank = [
  {id: 0, username: 'root', password: 'admin'}
]
var idCounter = 1

app.get('/api/users/', (request, response) => {
  console.log('GET', request.url)
  response.json(datenbank)
})

app.post('/api/users/', (request, response) => {
  console.log('POST', request.url)
  var newUser = {
    id: idCounter,
    username: request.body.username,
    password: request.body.password
  }
  idCounter += 1
  datenbank.push(newUser)
  response.send('ok')
})


app.listen(3000, () => console.log('Server is running on port 3000'))
