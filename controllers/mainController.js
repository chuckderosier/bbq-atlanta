const Mains = require('../models/Main')

const mainController = {
    index: (req, res) => {
        Main.find({})
            .then((mains) => {
                res.send(mains)
            })
    },
    show: (req, res) => {
        Main.findById(req.params.mainId).populate('restaurants')
            .then((main) => {
                res.send(main)
            })
    },
    create: (req, res) => {
        Main.create(req.body)
            .then((main) => {
                res.send(main)
            })
    },
    update: (req, res) => {
        Main.findById(req.params.mainId, req.body)
            .then(() => {
                res.send(200)
            })
    }
}

module.exports = mainController