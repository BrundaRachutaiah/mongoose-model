const mongoose = require('mongoose')

const car1Schema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    mileage: {
        type: Number
    },
    fuelType: [{
        type: String,
        enum: ['Gasoline', 'Diesel', 'Electric', 'Hybrid']
    }],
    transmission: [{
        type: String,
        enum: [ 'Automatic', 'Manual']
    }],
    bodyStyle: {
        type: String
    },
    color: {
        type: String
    },
    isCertifiedPreOwned: {
        type: Boolean,
        default: false
    },
    ifFourWheelDrive: {
        type: Boolean,
        default: false
    },
    isLuxury: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

const car1 = mongoose.model('car1', car1Schema)

module.exports = car1