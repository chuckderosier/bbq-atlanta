const express = require('express')
const app = express()
const routes = require('./routes/index')

app.use(express.urlencoded({ extended:ntrue }))
app.use(express.json())
app.use(express.static(__dirname + '/api/client/build/'))

app.get('/', routes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})