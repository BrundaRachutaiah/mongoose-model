const mongoose = require('mongoose')
const gitSchema = new mongoose.Schema({
    profilePic: String,
    fullName: String,
    userName: String,
    bio: String,
    comapnyName: String,
    city: String,
    portfoliolink: String,
    followerCount: Number,
    followingCount: Number,
    isOnline: Boolean
})

const git = mongoose.model('git', gitSchema)

module.exports = git