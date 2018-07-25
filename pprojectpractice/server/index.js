const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express()

app.use(bodyParser.json())

app.get('/api/characters', controller.getCharacters)
app.post('/api/characters', controller.addCharacters)
app.put('/api/characters/:id', controller.updateCharacters)
app.delete('/api/characters/:id', controller.deleteCharacters)




const PORT = 4200
app.listen(PORT, () => console.log('I AM WATCHING', PORT))