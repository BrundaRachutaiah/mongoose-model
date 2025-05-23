const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    aithor: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    genre: [{
        type: String,
        enum: ['Fiction','Non-Fiction','Mystery','Thriller','Science Fiction','Fantasy','Romance','Historical','Biography','Selfhelp','Other']
    }],
    language: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: 'India'
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    summary: {
        type: String
    },
    awards: {
        type: String
    },
    coverImageUrl: {
        type: String
    },
    purchaseUrl: {
        type: String
    }
},{
    timestamps: true
})

const book = mongoose.model('book', bookSchema)

module.exports = book