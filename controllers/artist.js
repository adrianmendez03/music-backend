const express = require('express')
const router = express.Router()
const Artist = require('../model/artist')

router.get('/', async (req, res) => {
    res.json(await Artist.find({}).populate('albums'))
})

router.get('/:id', async (req, res) => {
    res.json(await Artist.find({ _id: req.params.id }).populate('albums'))
})

router.post('/', async (req, res) => {
    res.json(await Artist.create(req.body))
})

router.put('/:id', async (req, res) => {
    res.json(
        await Artist.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate('album')
    )
})

router.delete('/:id', async (req, res) => {
    res.json(await Artist.findByIdAndDelete(req.params.id))
})

module.exports = router