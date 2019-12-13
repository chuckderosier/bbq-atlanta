const User = require('../models/User')

const userController = {
    index: (req,res) =>
    {
        User.find({})
        .then((users) => {
            res.send(users)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('restaurants')
        .then((user) => {
            res.send(user)
        })
    },
    create: (req, res) => {
        User.create(req.body)
        .then((user) => {
            res.send(user)
        })
    },
    update: (req, res) => {
        User.findById(req.params.userId, req.body)
        .then(() => {
            res.send(200)
        })
    }
}

module.exports = userController