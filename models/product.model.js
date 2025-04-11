const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productUrl: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    ratingCount: {
        type: Number
    },
    reviewCount: {
        type: Number
    },
    description: [{
        type: String
    }],
    price: {
        type: Number
    },
    discountOffer: {
        type: String
    },
    deliveryType: {
        type: String
    },
    producrLeft: {
        type: String
    }
},{
    timestamps: true
})

const product = mongoose.model('product', productSchema)

module.exports = product