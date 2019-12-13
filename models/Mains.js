const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Mains = new Schema[{
    mainName: String,
    mainSmokeRating: Number,
    mainCoating: String,
    coatingRating: Number,
    mainRating: Number,
    mainNotes: String
}]

module.export = mongoose.model("Mains", Mains)