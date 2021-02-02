const { Schema, model } = require('mongoose')

const albumSchema = new Schema(
    {
        title: { type: String, required: true },
        artist: {
            ref: 'Artist', 
            type: Schema.Types.ObjectId 
        }
    },
    { timestamps: true }
)

const Album = model('Album', albumSchema)

module.exports = Album