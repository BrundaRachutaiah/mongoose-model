const mongoose = require('mongoose')

const propertiesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    pricePerNight: {
        type: Number
    },
    capacity: {
        type: Number
    },
    isPetFriendly: {
        type: Boolean,
        default: false
    },
    hasWifi: {
        type: Boolean,
        default: false
    },
    hasParking: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const properties = mongoose.model('properties', propertiesSchema)

module.exports = properties