const mongoose = require('mongoose')

const userProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthdate: {
        type: Date
    },
    isActive: {
        type: Boolean
    },
    isAdmin: {
        type: Boolean
    },
    profilePictureUrl: {
        type: String
    }
},{
    timestamps: true
})

const userProfile = mongoose.model('userProfile', userProfileSchema)

module.exports = userProfile