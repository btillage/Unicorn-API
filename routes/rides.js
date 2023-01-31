const express = require('express')
const router = express.Router()
const Ride = require('../models/ride')


//  POST 
router.post('/', async (req, res) => {
    const ride = new Ride({
        user: req.body.user,
        unicorn: req.body.unicorn,
        duration: req.body.duration,
    })

    try {
        const newRide = await ride.save()
        res.status(201).json(newRide)
        // status tells us we have sucessfully created a new unicorn
        
    } catch (err) {
        res.status(400).json({ message: err.message})
        // 400 - user error
    }
})


module.exports = router