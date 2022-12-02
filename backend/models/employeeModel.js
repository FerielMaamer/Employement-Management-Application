const { Int32 } = require('bson');
const mongoose = require('mongoose');
const { double } = require('webidl-conversions');

const employeeSchema = new mongoose.Schema({
    first_name: {type: String, required: true, maxLength: 100},
    last_name: {type: String, required: true, maxLength: 50},
    email: {type: String, maxLength: 50, unique: true},
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        maxLength: 25
    },
    salary: {type: Number, required: true},

})

module.exports = mongoose.model("employee", employeeSchema);