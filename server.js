require('dotenv').config()
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'You have hit the default route... nothing to see here...'
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})