const mongoose = require('mongoose')

const productCardSchema = new mongoose.Schema({
    productImageUrl: {
        type: String,
        required: true
    },
    isAddToCart: {
        type: Boolean
    },
    isBuyNow: {
        type: Boolean
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
        type: Number,
        required: true
    },
    reviewCount: {
        type: Number,
        required: true
    },
    availableOffers: [{
        type: String
    }],
    warranty: {
        type: String
    },
    variant: [{
        type: String
    }],
    ifWifiConnection: {
        type: Boolean
    },
    specialOffer: {
        type: String
    }
},{
    timestamps: true
})

const productCard1 = mongoose.model("productCard1", productCardSchema)

module.exports = productCard1