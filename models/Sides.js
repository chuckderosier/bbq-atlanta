const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Sides = new Schema[{
    sideName: String,
    sideRating: Number,
    sideNotes: String
}]

module.export = mongoose.model("Sides", Sides)