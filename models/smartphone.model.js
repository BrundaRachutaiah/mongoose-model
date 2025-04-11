const mongoose = require('mongoose')

const smartphoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    releaseYear: {
        type: String,
        required: true
    },
    operatingSystem: {
        type: String,
    },
    displaySize: {
        type: String,
    },
    storage: {
        type: String
    },
    ram: {
        type: String
    },
    cameraSpaces: {
        type: Object
    },
    batteryCapacity: {
        type: String
    },
    connectivity: [{
        type: String
    }],
    price: {
        type: Number
    },
    colursAvailable: [{
        type: String
    }],
    features: [{
        type: String
    }]
},{
    timestamps: true
})

const smartphones = mongoose.model('smartphones', smartphoneSchema)

module.exports = smartphones