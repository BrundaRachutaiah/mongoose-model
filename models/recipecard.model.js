const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipePicUrl: {
        type: String,
    },
    recipeName: {
        type: String
    },
    recipeDiscription: {
        type: String,
    },
    servingsNumber: {
        type: Number
    },
    preparingTime: {
        type: String
    },
    cookingTime: {
        type: String
    },
    ingredients: [{
        type: String
    }],
    directions: [{
        type: String
    }],
    note: {
        type: String
    }
})

const recipe = mongoose.model('recipe', recipeSchema)

module.exports = recipe