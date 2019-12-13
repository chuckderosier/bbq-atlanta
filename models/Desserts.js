const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Dessert = new Schema[{
    dessertName: String,
    dessertRating: Number,
    dessertNotes: String
}]

module.export = mongoose.model("Dessert", Dessert)