const express = require('express')
const firebase = require('firebase')

const app = new express()

app.post('/login', () => {
	// login stuff
})

app.post('/register', () => {
	// register stuff
})

app.post('/savePhoto', () => {
	// save photo stuff
})
const port = 3000

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})