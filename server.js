require('dotenv').config()
const express = require('express')
const mongoose = require('./db/connection')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'You have hit the default route... nothing to see here...'
    })
})

const albumController = require('./controllers/album')
app.use('/albums', albumController)

const artistController = require('./controllers/artist')
app.use('/artists', artistController)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})