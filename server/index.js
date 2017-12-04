const express = require('express')
const bodyParser = require('body-parser')
const firebase = require('firebase')
const atob = require('atob')

const app = new express()

app.use(bodyParser.json({ type: 'application/json' }))

app.post('/login', () => {
	// login stuff
})

app.post('/register', () => {
	// register stuff
})

app.post('/savePhoto', (req, res) => {
	console.log(atob(req.body.photo))
})
const port = 3000

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})