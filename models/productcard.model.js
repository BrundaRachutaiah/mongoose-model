const mongoose = require('mongoose')

const productcardSchema = new mongoose.Schema({
    productImgUrl: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productInfo: {
        type: String,
        required: true
    },
    colors:[{
        type: String
    }],
    sizes: [{
        type: Number
    }],
    productCost: {
        type: Number,
        required: true
    },
    isNew: {
        type: Boolean,
        required: true
    },
    isAddToCart: {
        type: Boolean
    }
},{
    timestamps: true
})

const productcard = mongoose.model('productcard', productcardSchema)

module.exports = productcard