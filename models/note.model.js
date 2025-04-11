const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String
    },
    category: [{
        type: String,
        enum: ['Personal', 'Work', 'Study', 'Ideas', 'Journal', 'Other']
    }],
    tag: [{
        type: String
    }]
},{
    timestamps: true
})

const note = mongoose.model('note',noteSchema)

module.exports = note