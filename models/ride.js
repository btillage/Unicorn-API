const mongoose = require('mongoose')

const rideScheme = new mongoose.Schema({
    user: {
        type:String,
        required: true
    },
    unicorn: {
        type:String,
        required: true
    },
    duration: {
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('Ride', rideScheme)
