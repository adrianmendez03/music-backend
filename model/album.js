const { Schema, model } = require('mongoose')

const albumSchema = new Schema(
    {
        title: { type: String, required: true },
        yearReleased: Number,
        artist: {
            ref: 'Artist', 
            type: Schema.Types.ObjectId 
        },
        image: { type: String, required: true } 
    },
    { timestamps: true }
)

const Album = model('Album', albumSchema)

module.exports = Album