const Dessert = require('../models/Dessert')

const dessertController = {
    index: (req, res) => {
        Dessert.find({})
            .then((desserts) => {
                res.send(desserts)
            })
    },
    show: (req, res) => {
        Dessert.findById(req.params.dessertId).populate('restaurants')
            .then((dessert) => {
                res.send(dessert)
            })
    },
    create: (req, res) => {
        Dessert.create(req.body)
            .then((dessert) => {
                res.send(dessert)
            })
    },
    update: (req, res) => {
        Dessert.findById(req.params.dessertId, req.body)
            .then(() => {
                res.send(200)
            })
    }
}

module.exports = dessertController