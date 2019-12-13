const User = require('../models/Restaurant')

const userController = {
    index: (req, res) => {
        Restaurant.find({})
            .then((restaurants) => {
                res.send(restaurants)
            })
    },
    show: (req, res) => {
        Restaurant.findById(req.params.restaurantId).populate('restaurants')
            .then((restaurant) => {
                res.send(restaurant)
            })
    },
    create: (req, res) => {
        Restaurant.create(req.body)
            .then((restaurant) => {
                res.send(restaurant)
            })
    },
    update: (req, res) => {
        Restaurant.findById(req.params.restaurantId, req.body)
            .then(() => {
                res.send(200)
            })
    }
}

module.exports = restaurantController