const mongoose = require('mongoose')

const restaurantsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: [{
        type: String,
        enum: ['Italian','Mexican','Chinese','Indian','American','French','Japanese','Mediterranean','Thai','Vegetarian','Vegan','Other']
    }],
    location: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    openingYear: {
        type: Number
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    specialDishes: [{
        type: String
    }],
    photoUrls: [{
        type: String
    }]
},{
    timestamps: true
})

const restaurants = mongoose.model('restaurants', restaurantsSchema)

module.exports = restaurants