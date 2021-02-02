const { Schema, model } = require('../db/connection')

const artistSchema = new Schema(
    {
        name: { type: String, required: true },
        albums: [
            {
                ref: 'Album',
                type: Schema.Types.ObjectId
            }
        ]
    }
)

Artist = model('Artist', artistSchema)
module.exports = Artist