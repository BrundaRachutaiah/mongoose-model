const mongoose = require('mongoose')

const stayPropertiesSchema = new mongoose.Schema({
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

const stayProperties = mongoose.model('properties', stayPropertiesSchema)

module.exports = stayProperties