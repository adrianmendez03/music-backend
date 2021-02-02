const { Schema, model } = require('mongoose')

const albumSchema = new Schema(
    {
        title: String,
        artist: {
            ref: 'Artist', 
            type: Schema.Types.ObjectId 
        }
    },
    { timestamps: true }
)

const Album = model('album', albumSchema)

module.exports = Album