const express = require('express')
const data = require('./data')

const app = express()

app.get('/api/todos', (req, res) => {
    res.send(data)
})

app.listen(4000, () => console.log('Listening on port 4000'))