const { Schema, model } = require('mongoose')

const artistSchema = new Schema(
    {
        name: { type: String, required: true },
        albums: [
            {
                ref: 'Album',
                type: Schema.Types.ObjectId
            }
        ],
        image: { type: String, required: true }
    }
)

Artist = model('Artist', artistSchema)
module.exports = Artist