const express = require('express')
const router = express.Router()
const Ride = require('../models/ride')

//  GET
router.get('/:unicorn', async (req, res) => {
    try {
        const rides = await Ride.find()
        const filterRides = rides.filter(function(Ride) {
            return Ride.unicorn == req.params.unicorn
        })
        const times = combineTimes(filterRides)
        res.json(times)
    } catch (err) {
        res.status(500).json({ message: err.message })
        // 500 - error on server
    }
})


function combineTimes(Rides) {
    var map =  new Map();
    for (let ride in Rides) {
        if (map.has(Rides[ride].user)) {
            let x = map[Rides[ride].user]
            map.set(Rides[ride].user, x + Rides[ride].duration);
        }
        else {
            map.set(Rides[ride].user, Rides[ride].duration);
        }
    }
    return [...map.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)[0]

}

module.exports = router