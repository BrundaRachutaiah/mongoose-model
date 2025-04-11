const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    },
    duedate: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: false
    },
    tags: [{
        type: String
    }]
},{
    timestamps: true
})

const todo = mongoose.model('todo', todoSchema)

module.exports = todo