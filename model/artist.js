const { Schema, model, Mongoose } = require('mongoose')

const artistSchema = new Schema(
    {
        name: String,
        albums: [
            {
                ref: 'Albums',
                type: Schema.Types.ObjectId
            }
        ]
    }
)

Artist = model('Artist', artistSchema)
module.exports = Artist