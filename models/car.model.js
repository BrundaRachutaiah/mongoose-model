const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
    model: String,
    release_year: Number,
    make: String
})

const car = mongoose.model('car',carSchema)

module.exports = car