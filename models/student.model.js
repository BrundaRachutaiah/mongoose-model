const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    studentRegistrationNumber: String,
    studentId: String,
    studentName: String,
    fatherGuardianName: String,
    class: String,
    emergencyContact: Number,
    studentProfileImageUrl: String
})

const student = mongoose.model('student', studentSchema)

module.exports = student