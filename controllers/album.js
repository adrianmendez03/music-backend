const express = require('express')
const router = express.Router()
const Album = require('../model/album')

router.get('/', async (req, res) => {
    res.json(await Album.find({})).populate('artist')
})

router.get('/:id', async (req, res) => {
    res.json(await Album.find({ _id: req.params.id }).populate('artist'))
})

router.post('/', async (req, res) => {
    res.json(await Album.create(req.body))
})

router.put('/:id', async (req, res) => {
    res.json(
        await Album.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate('artist')
    )
})

router.delete('/:id', async (req, res) => {
    res.json(await Album.findByIdAndDelete(req.params.id))
})

module.exports = router