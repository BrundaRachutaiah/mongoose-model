const mongoose = require('mongoose')

const employeePassCardSchema = new mongoose.Schema({
    profileImageUrl: {
        type: String,
        required: true
    },
    employeeName: {
        type: String,
        required: true
    },
    employeeDesignation: {
        type: String,
        required: true
    },
    employeeIdNumber: {
        type: String,
        required: true
    },
    employeeDateOfBirth: {
        type: String,
        required: true
    },
    employeeMail: {
        type: String,
        required: true
    },
    employeeTeleNumber: {
        type: Number,
        required: true
    },
    employeeAddress: {
        type: String,
        required: true
    }
})

const employeePassCard = mongoose.model('employeePassCard', employeePassCardSchema)

module.exports = employeePassCard