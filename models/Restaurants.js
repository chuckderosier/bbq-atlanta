const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Restaurants = new Schema({
    restaurantName: String,
    restaurantLocation: String,
    restaurantHours: String,
    restaurantMains: String,
    restaurantSides: String,
    restaurantDesserts: String
})

module.export = mongoose.model("Restaurant", Restaurant)