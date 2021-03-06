const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Side = new Schema[{
    sideName: String,
    sideRating: Number,
    sideNotes: String
}]

module.export = mongoose.model("Side", Side)