const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Restaurant = new Schema({
    restaurantName: String,
    restaurantLocation: String,
    restaurantHours: String,
    restaurantMains: [{
        type: Schema.Types.ObjectId,
        ref: 'Mains'
    }],
    restaurantSides: [{
        type: Schema.Types.ObjectId,
        ref: 'Sides'
    }],
    restaurantDesserts: [{
        type: Schema.Types.ObjectId,
        ref: 'Desserts'
    }]
})

module.export = mongoose.model("Restaurant", Restaurant)