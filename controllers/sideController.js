const Sides = require('../models/Side')

const sideController = {
    index: (req, res) => {
        Side.find({})
            .then((sides) => {
                res.send(sides)
            })
    },
    show: (req, res) => {
        Side.findById(req.params.sideId).populate('restaurants')
            .then((side) => {
                res.send(side)
            })
    },
    create: (req, res) => {
        Side.create(req.body)
            .then((side) => {
                res.send(side)
            })
    },
    update: (req, res) => {
        Side.findById(req.params.sideId, req.body)
            .then(() => {
                res.send(200)
            })
    }
}

module.exports = sideController