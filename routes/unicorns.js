const express = require('express')
const router = express.Router()
const Unicorn = require('../models/unicorn')

//  GET
router.get('/', async (req, res) => {
    try {
        const unicorns = await Unicorn.find()
        res.json(unicorns)
    } catch (err) {
        res.status(500).json({ message: err.message })
        // 500 - error on server
    }
})

//  POST 
router.post('/', async (req, res) => {
    const unicorn = new Unicorn({
        name: req.body.name,
        fur: req.body.fur,
        hornLength: req.body.hornLength,
        isBaby: req.body.isBaby,
        owner: req.body.owner
    })

    try {
        const newUnicorn = await unicorn.save()
        res.status(201).json(newUnicorn)
        // status tells us we have sucessfully created a new unicorn
        
    } catch (err) {
        res.status(400).json({ message: err.message})
        // 400 - user error
    }
})


module.exports = router